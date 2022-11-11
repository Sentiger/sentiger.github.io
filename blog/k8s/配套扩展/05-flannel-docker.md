---
title: flannel组件配置docker通信
order: 5
category:
  - k8s
tag:
  - flannel
  - docker
---

![flannel](./assets/flannel.png)

![route.png](./assets/flannel-route.png)


## etcd安装

**docker安装etcd**

```shell
$ docker network create --subnet 192.168.2.1/24 etcd

# 启动etcd
$ docker run -d --name etcd \
    --network etcd \
    --publish 2379:2379 \
    --publish 2380:2380 \
    --env ALLOW_NONE_AUTHENTICATION=yes \
    --env ETCD_ADVERTISE_CLIENT_URLS=http://etcd-server:2379 \
    bitnami/etcd:latest

# 配置flannel网络，和后端模式为vxlan    
$ docker exec -it etcd etcdctl put /flannel/network/config '{ "Network": "10.10.0.0/16", "Backend": {"Type": "vxlan"}}'
```

## flannel

**web1启动flanneld**
```shell
# 这里注意下载flannel的版本和服务器要能兼容，我这边测试服务器试了好多个版本，启动就报错，最终是centos7.6+flannel-v0.18.1
$ wget https://github.com/flannel-io/flannel/releases/download/v0.18.1/flannel-v0.18.1-linux-amd64.tar.gz
# 启动了flanneld，这个时候就会为本机分配自网段。而且会监听其他的主机加入进来之后自动发现网段，并加到本机路由（可查看上图）
$ ./flanneld --iface=eth1 --etcd-endpoints=http://172.31.0.3:2379 --etcd-prefix=/flannel/network

# 启动的时候这里可以看到给本机分配的子网，然后docker可以创建一个这个子网的网桥
$ cat /var/run/flannel/subnet.env

FLANNEL_NETWORK=10.10.0.0/16
FLANNEL_SUBNET=10.10.100.1/24
FLANNEL_MTU=1450
FLANNEL_IPMASQ=false
```

**web1创建网桥和启动ngx**
```shell
# 创建网桥并指定子网为flanneld分配的子网
$ docker network create --subnet 10.10.100.1/24 flannel
# 因为flanneld分配的子网里可以看到，MUT为1450（vxlan模式），所以也要将创建的docker网桥设置为1450，要不然数据传输可能会丢帧
$ ip link set dev br-7e8bf85e5c62 mtu 1450
# 启动ngx并指定网桥为刚创建的flannel
$ docker run --name ngx1 --rm --network flannel -d nginx:latest
# 查看ip(10.10.100.2)
$ docker inspect ngx1
```

**web2启动flanneld**

这里和web1一样，没任何区别，最终web2启动的ngx1 ip为 10.10.47.2

**测试**

分别在两个主机内进行测试ngx测试，都可以访问
```shell
[root@i-2tz37tue ~]# curl -i 10.10.100.2
HTTP/1.1 200 OK
Server: nginx/1.21.5
Date: Fri, 17 Jun 2022 10:25:06 GMT
Content-Type: text/html
Content-Length: 615
Last-Modified: Tue, 28 Dec 2021 15:28:38 GMT
Connection: keep-alive
ETag: "61cb2d26-267"
Accept-Ranges: bytes

[root@i-2tz37tue ~]# curl -i 10.10.47.2
HTTP/1.1 200 OK
Server: nginx/1.21.5
Date: Fri, 17 Jun 2022 10:25:33 GMT
Content-Type: text/html
Content-Length: 615
Last-Modified: Tue, 28 Dec 2021 15:28:38 GMT
Connection: keep-alive
ETag: "61cb2d26-267"
Accept-Ranges: bytes
```

## 总结

flannel vxlan模式下，flanneld其实就是一个守护进程，来维护每个node中的route,mac表,fdb表。

```
1. flanneld 启动的时候，根据配置生成该主机的子网，默认/var/run/flannel目录下

2. 创建flannel.1 vxlan。可以通过 ip -d link show flannel.1可以查看具体的信息

3. 监听其他node加入进来

4. 一旦有node加入进来，则所有node节点的flanneld会监听，会把新的node信息写入到本node

4.1 MAC地址写入，因为二层协议发送需要知道对方的mac
       [root@test1 soft]# ip neigh show dev flannel.1
       10.10.27.0 lladdr 2a:05:09:35:8d:19 PERMANENT
       10.10.62.0 lladdr 52:0c:d3:26:f4:f8 PERMANENT

4.2. 目前已经构造了二层的数据帧，现在就是要通过vxlan vtep设备发送到目的主机，此时就是通过upd发送的。需要知道对方的ip。这里有一层转换
      [root@test1 soft]# bridge fdb show flannel.1
      2a:05:09:35:8d:19 dev flannel.1 dst 192.168.56.43 self permanent
      52:0c:d3:26:f4:f8 dev flannel.1 dst 192.168.56.42 self permanent

```





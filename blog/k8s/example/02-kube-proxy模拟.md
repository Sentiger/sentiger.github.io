---
title: 模拟kube-proxy service实现
icon: install
order: 2
category:
  - k8s
tag:
  - ci/cd
---

## 实现目标

之前我们实现了所有节点中容器通过flannel通信。这次我们来模拟下k8s中kube-proxy实现service的流程。相关的知识以下

- flannel底层通信
- iptables 配置负载规则
- DNS服务（coreDNS）实现域名服务
- 监控服务 负责监控集群中的容器发生变化，修改iptables规则，DNS域名等信息


## 搭建服务

使用两台云主机，配置好flannel，docker中的容器能互相通信。

### etcd 配置
**启动etcd**

使用host网络启动etcd，这里需要将数据文件目录映射到宿主机，方便下次启动
```shell
docker run -d --name etcd \
--network host \
--publish 2379:2379 \
--publish 2380:2380 \
--env ALLOW_NONE_AUTHENTICATION=yes \
--env ETCD_ADVERTISE_CLIENT_URLS=http://172.31.0.3:2379 \
bitnami/etcd:latest
```

**设置flannel配置文件**

```shell
# 将etcdctl客户端拷贝到宿主机上，这样好操作etcd
$ docker cp etcd:/opt/bitnami/etcd/bin/etcdctl /usr/local/bin/
$ etcdctl put /flannel/network/config '{ "Network": "10.10.0.0/16", "Backend": {"Type": "vxlan"}}'
```

### flannel配置
下载flannel镜像，或者直接下载二进制文件在本机运行。这里全都使用docker运行

**启动**

每台主机都配置flannel

```shell
$ docker run -d \
--privileged \
--name flannel \
--net host \
-v /run/flannel:/run/flannel \
flannelcni/flannel:v0.18.1 \
--etcd-endpoints=http://172.31.0.3:2379 \
--etcd-prefix=/flannel/network
```

**查看结果**

web1 被分配了一个子网
```shell
[root@web1 ~]# cat /run/flannel/subnet.env 
FLANNEL_NETWORK=10.10.0.0/16
FLANNEL_SUBNET=10.10.26.1/24
FLANNEL_MTU=1450
FLANNEL_IPMASQ=false

# 自动被添加了路由
[root@web1 ~]# route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         gateway         0.0.0.0         UG    100    0        0 eth0
10.10.28.0      10.10.28.0      255.255.255.0   UG    0      0        0 flannel.1
10.10.63.0      10.10.63.0      255.255.255.0   UG    0      0        0 flannel.1
172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0
172.31.0.0      0.0.0.0         255.255.255.0   U     100    0        0 eth0
```

web2 被分配了个子网
```shell
[root@web2 ~]# cat /run/flannel/subnet.env 
FLANNEL_NETWORK=10.10.0.0/16
FLANNEL_SUBNET=10.10.28.1/24
FLANNEL_MTU=1450
FLANNEL_IPMASQ=false

# 自动被添加了路由
[root@web2 ~]# route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         172.31.0.1      0.0.0.0         UG    100    0        0 eth0
10.10.26.0      10.10.26.0      255.255.255.0   UG    0      0        0 flannel.1
10.10.63.0      10.10.63.0      255.255.255.0   UG    0      0        0 flannel.1
172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0
172.31.0.0      0.0.0.0         255.255.255.0   U     100    0        0 eth0
```

### docker配置

docker创建一个网桥，子网分别设置为flannel分配，并且将网卡的MUT设置为flannel规定的。docker本来可以直接配合flannel运行的，而且这些事情都做好了，这里我们手动来操作。

**web1**

根据上面flannel的配置`/run/flannel/subnet.env` 创建网桥

```shell
# 设置子网段，和创建容器的时候网卡MTU值
$ docker network create --subnet 10.10.26.1/24 --opt com.docker.network.driver.mtu=1450 cni0
```

**web2**

和上面web1一样的操作，只是根据web2的主机flannel的配置

```shell
# 设置子网段，和创建容器的时候网卡MTU值
$ docker network create --subnet 10.10.28.1/24 --opt com.docker.network.driver.mtu=1450 cni0
```

### 测试

**分别在两个主机上启动容器**

- web1 启动一个容器ngx1 指定网桥为cni0
- web2 启动一个容器ngx2 指定网桥为cni0

```shell
# web1
[root@web1 ~]# docker run --name ngx1 --rm --network cni0 -d nginx:1.23.0-alpine 
86ff8b0c2c5cd2b0881dc26fc154f5101c79c288cedd20253019c37cb0c3f3de

# web2 
[root@web2 ~]# docker run --name ngx2 --rm --network cni0 -d nginx:1.23.0-alpine
b91ddef153befdb0b5b7dc712d83b7bd14c509e047a2f862c81575fe6fddeac5
```

**两台主机测试**

```shell
# web1 ngx1 ip为 10.10.26.2
# web1 ngx2 ip为 10.10.28.2
[root@web1 ~]# docker inspect ngx1 |grep IPAddress
            "SecondaryIPAddresses": null,
            "IPAddress": "",
                    "IPAddress": "10.10.26.2",
[root@web1 ~]# curl 10.10.28.2


[root@web2 ~]# docker inspect ngx2 |grep IPAddress
            "SecondaryIPAddresses": null,
            "IPAddress": "",
                    "IPAddress": "10.10.28.2",
                    
 
## 分别在两主机上测试和容器内测试
[root@web2 ~]# curl 10.10.26.2
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
....

[root@web2 ~]# curl 10.10.28.2
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>                   
...

# 在容器中测试
## 结果都是通过的
```

### 总结

上面的流程分别模拟了夸主机内容器间通信原理，k8s的底层网络通信也是这样实现的，只是有对应的程序来实现。


## service代理

上面的流程实现了主机间通信，现在模拟手工实现k8s中的service代理功能。

- 模拟多个多个pod，通过service来代理到具体的pod


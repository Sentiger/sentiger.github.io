---
title: flannel组件配置docker通信
icon: install
order: 5
category:
  - k8s
tag:
  - flannel
  - docker
---

flannel组件就是其实还是通过物理网络来转发不同主机内的二层数据帧。是一个软件，可以为每个容器分配一个不重复的ip，且这些ip能互相通信。
其实现目标也很简单，如下几个步骤：

- 统一管理所有的容器。保证每个主机内的容器ip不重复，这个可以由docker这种来管理。例如创建一个网桥，分配ip自网段，然后确保每个主机分配的自网段不同。
- 当本主机内网段通信直接走网桥就行。然后再夸网段的时候，通过路由匹配，到flannel网卡。
- 每个主机的上层有一个大的网段flannel，这个网段最终会走到flannel网卡。也就走到了flanneld程序。然后就好办了，直接通过传输层协议来输出数据包到对应的主机。
- flanneld程序可以通过vxlan，udp，等各种技术手段将数据传到对应的主机，然后被对应主机的flannel网卡接受，然后又到对应的flanneld程序。又转发到对应的容器。

![flannel](./assets/flannel.png)

- 10.10.5.10 发送给 10.10.5.11 直接是通过网桥docker0转发的，因为是同个网段
- 10.10.5.10 发送给 10.10.4.10 这个时候docker0接受到数据，然后会到物理机的内核协议栈。
- 通过路由匹配直接到flannel网卡
- flannel网卡会将数据发送给flanneld程序。
- 到了flanneld程序就好办了，通过udp，vxlan等各种形式发送给对应的主机（eth0，出口网卡）。（因为网段都是flanneld程序通过etcd配置中心注册的，所以知道每个网段在哪个主机上）
- 收到数据包的主机也通过flanneld程序反向发送到本机就行
- 计算机解决问题其实就在上底层实现上在加一层，一层不行就加两层形式。

## etcd安装

**docker安装etcd**

```shell
$ docker network create --subnet 192.168.2.1/24 etcd

docker run -d --name etcd \
    --network etcd \
    --publish 2379:2379 \
    --publish 2380:2380 \
    --env ALLOW_NONE_AUTHENTICATION=yes \
    --env ETCD_ADVERTISE_CLIENT_URLS=http://etcd-server:2379 \
    bitnami/etcd:latest
```

**测试**

```shell
$ curl -L http://127.0.0.1:2379/version
```

**flannel配置**

```shell
$ wget https://github.com/flannel-io/flannel/releases/download/v0.18.1/flannel-v0.18.1-linux-amd64.tar.gz


$ docker exec -it etcd etcdctl put /flannel/network/config '{ "Network": "10.5.0.0/16", "Backend": {"Type": "vxlan"}}'
$ docker exec -it etcd etcdctl get /flannel/network/config

$ ./flanneld --etcd-endpoints=http://172.31.0.3:2379 --etcd-prefix=/flannel/network/config
```

**测试**

```shell
$ ping 11.0.136.12
```

## 总结




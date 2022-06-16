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

## 广播

**web1添加**

```shell
$ ip link add vxlan22 type vxlan id 22 dstport 4790 group 229.1.1.2 dev eth0
$ ip addr add 11.0.135.11/24 dev vxlan22
$ ip link set dev vxlan22 up
```

**web2添加**

```shell
$ ip link add vxlan22 type vxlan id 22 dstport 4790 group 229.1.1.2 dev eth0
$ ip addr add 11.0.135.12/24 dev vxlan22
$ ip link set dev vxlan22 up
```

**删除设备**
```shell
$ ip link set vxlan22 down
$ ip link del vxlan22
```

**测试**

```shell
$ ping 11.0.135.12
$ ping 11.0.135.11
```

## vxlan+容器

**web1创建docker容器并指定网桥**

```shell
# 创建网桥指定网段
$ docker network create mynet --subnet 11.0.137.0/24
# 查看网桥(网桥名:br-56011e09bd8a)
$ brctl show
# 创建ngx容器，并指定网桥网段
$ docker run --name ngx1 --rm -d --network mynet --ip 11.0.137.10 nginx:1.18-alpine
# 创建vxlan
$ ip link add vxlan23 type vxlan id 23 dstport 4791 group 229.1.1.3 dev eth0
# 启动vxlan
$ ip link set vxlan23 up
# 将vxlan绑定到网桥
$ brctl addif br-56011e09bd8a vxlan23
```

**web2创建docker容器并指定网桥**

```shell
# 创建网桥指定网段
$ docker network create mynet --subnet 11.0.137.0/24
# 查看网桥(网桥名:br-ccc48adc6068)
$ brctl show
# 创建ngx容器，并指定网桥网段
$ docker run --name ngx2 --rm -d --network mynet --ip 11.0.137.11 nginx:1.18-alpine
# 创建vxlan
$ ip link add vxlan23 type vxlan id 23 dstport 4791 group 229.1.1.3 dev eth0
# 启动vxlan
$ ip link set vxlan23 up
# 将vxlan绑定到网桥
$ brctl addif br-ccc48adc6068 vxlan23
```

## 总结




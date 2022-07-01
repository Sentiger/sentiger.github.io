---
title: vxlan操作
order: 4
category:
  - k8s
tag:
  - vxlan
  - 网络
  - docker
---

vxlan通信

## vxlan点对点通信

**web1 添加veth**

```shell
# 创建vtep设备，对端指向web2，指定vin和uderlay网络使用的网卡
$ ip link add vxlan20 type vxlan id 20 remote 172.31.0.2 dstport 4789 dev eth0
# 查看创建的设备
$ ip -d link show vxlan20
# 启动vxlan
$ ip link set vxlan20 up
# 设置IP
$ ip addr add 11.0.136.11/24 dev vxlan20

# 查看添加的路由结果，默认添加了一条路由
$ route -n
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         172.31.0.1      0.0.0.0         UG    100    0        0 eth0
11.0.136.0      0.0.0.0         255.255.255.0   U     0      0        0 vxlan20
```

**web2 添加veth**

```shell
# 创建vtep设备，对端指向web2，指定vin和uderlay网络使用的网卡
$ ip link add vxlan20 type vxlan id 20 remote 172.31.0.3 dstport 4789 dev eth0
# 查看创建的设备
$ ip -d link show vxlan20
# 启动vxlan
$ ip link set vxlan20 up
# 设置IP
$ ip addr add 11.0.136.12/24 dev vxlan20

# 查看添加的路由结果，默认添加了一条路由
$ route -n
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         172.31.0.1      0.0.0.0         UG    100    0        0 eth0
11.0.136.0      0.0.0.0         255.255.255.0   U     0      0        0 vxlan20
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




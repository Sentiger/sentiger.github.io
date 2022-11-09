---
title: 路由
order: 07
category:
  - linux
tag:
  - linux
  - route
---

## 命令

```
# 添加路由
route  [-v] [-A family |-4|-6] add [-net|-host] target [netmask Nm] [gw Gw] [metric N] [mss M] [window W] [irtt I] [reject] [mod] [dyn] [reinstate] [[dev] If]

route add -host 175.12.12.12/32 metric 10 dev eth1
route add -net 192.168.2.0/24 gw 10.0.2.1 metric 10 dev eth0
ip route add 192.168.0.0/24 via 0.0.0.0 dev eth0 metric 99

# 删除路由
route  [-v] [-A family |-4|-6] del [-net|-host] target [gw Gw] [netmask Nm] [metric N] [[dev] If]
route del -host 175.12.12.12/32 metric 10 dev eth1
route del -net 192.168.2.0/24 gw 10.0.2.1 metric 10 dev eth0
ip route del 192.168.2.0/24 via 10.0.2.1 dev eth0

# 修改路由
对于修改路由规则，只能使用ip route 命令来操作，route不能操作，但是可以这样来配置
建议：使用route新建立一个和需要修改的一样路由，仅仅是metric不同而已，然后删除旧的路由

ip route repace 是创建一个新的路由
ip route replace 目标 要替换的
ip route replace 192.168.2.0/24 dev eth0 metric 13
ip route replace 192.168.2.0/24 dev eth0 via 10.0.2.10

# 路由表
系统默认有local和main两张路由表。local路由表一般由系统内核控制，main也就是应用层来控制

cat /etc/iproute2/rt_tables 

ip route list table 表名 可以查看不同表的的配置规则，默认是main

route 命令用来操作main表

# 测试地址匹配到的规则
ip route get address

```

## 主机路由

## 网络路由

### 静态路由

```
route

ip route
```

### 动态路由

## 默认路由（网关）

默认路由是网关，假设有多个默认路由，是根据路由表中的`Metric`来取优先级的，值越小优先级越高

```
[root@master1 ~]# route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         10.0.2.2        0.0.0.0         UG    100    0        0 eth0
0.0.0.0         192.168.56.1    0.0.0.0         UG    101    0        0 eth1
10.0.2.0        0.0.0.0         255.255.255.0   U     100    0        0 eth0
172.30.0.0      0.0.0.0         255.255.255.0   U     0      0        0 cni0
172.30.1.0      172.30.1.0      255.255.255.0   UG    0      0        0 flannel.1
172.30.2.0      172.30.2.0      255.255.255.0   UG    0      0        0 flannel.1
192.168.56.0    0.0.0.0         255.255.255.0   U     101    0        0 eth1


上面有两条默认路由，在选择的时候，是根据Metric来取的，值越小，则优先级越低。

```

**添加默认路由**

```
# 添加默认路由，并配置metric权值为1，metric可选
route add -net 0.0.0.0/0 gw 10.0.2.2 [metric 1] dev eth0

```

## 匹配规则

1. 目的地址和子网掩码做与运算，然后匹配Destination，子网掩码（Genmask）越大，优先级越高
2. 对于相同路由，匹配规则是根据Metric来做对比的，值越小，优先级越高。

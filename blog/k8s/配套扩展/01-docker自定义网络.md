---
title: docker网桥原理
order: 1
category:
  - k8s
tag:
  - veth
  - 网络
---

网桥在OSI参考模型中处于第二层，直接通过MAC通信。真实的物理交换机是没有配置IP地址的。直接通过端口通信，网桥会自动学习每个端口的MAC地址。

下面通过实验来实现docker中的网桥模式

![网桥](./assets/bridge.png)

## 配置网络

![容器连接](./assets/pr1.png)
**创建网桥**

- 创建网桥
- 启动网桥

```shell
$ brctl addbr br0
$ ip link set dev br0 up
```

**创建容器ngx1并自定义网络**

- 创建ngx1容器，并设置网络为none
- 床架veth设备，并将veth一头设置到docker中，另一头绑定到网桥
- 设置容器的ip

```shell
$ docker run --name ngx1 --rm --network none -d nginx:1.22-alpine
$ ip link add veth1 type veth peer name veth1-p
# 查看容器的Pid
$ docker inspect ngx1 |grep Pid
# 创建网络namespace，然后将veth一头绑定到容器namespace中
$ mkdir /var/run/netns
$ ln -s /proc/2600/ns/net /var/run/netns/ngx1
$ ip link set veth1 netns ngx1
$ ip netns exec ngx1 ip link set name eth0 dev veth1
$ ip netns exec ngx1 ip addr add 192.168.2.10/24 dev eth0 
$ ip netns exec ngx1 ip link set dev eth0 up
$ docker exec -it ngx1 ifconfig
$ brctl addif br0 veth1-p
$ ip link set dev veth1-p up
$ brctl show br0
```

> 注意：docker默认创建的网络namespace是隐式的，所以上面进行了显示绑定`/var/run/netns`目录下

**创建容器ngx2并自定义网络**
这里的步骤和上面创建ngx1是一样的

```shell
$ docker run --name ngx2 --rm --network none -d nginx:1.22-alpine
$ ip link add veth2 type veth peer name veth2-p
$ docker inspect ngx2 |grep Pid # Pid 为3256
$ ln -s /proc/3256/ns/net /var/run/netns/ngx2
$ ip link set veth2 netns ngx2
$ ip netns exec ngx2 ip link set name eth0 dev veth2
$ ip netns exec ngx2 ip addr add 192.168.2.11/24 dev eth0 
$ ip netns exec ngx2 ip link set dev eth0 up
$ docker exec -it ngx2 ifconfig
$ brctl addif br0 veth2-p
$ ip link set dev veth2-p up
$ brctl show br0
```

## 防火墙设置

**打开防火墙网络转发**

- 开启iptables转发。默认这个链是`DROP`的，曾经这个问题找了好久
- ngx1访问ngx2的时候，会先到br0网桥。
- 此时已经进入到了宿主机的网络协议栈，然后就开始走netfilter各种链。
- 因为目标ip不是本协议栈中的ip，所以会走filter表中的forward规则。所以这里要开启转发。

```shell
$ echo 1 > /proc/sys/net/ipv4/ip_forward
$ iptables -t filter -P FORWARD ACCEPT
```

**测试**

- 此时容器已经可以互相通了。
- 但是容器访问外网是不能通的。后面流程就介绍如何外网通信原理

```shell
$ docker exec -it ngx1 ping 192.168.2.11
```

## 外网通信

![外网通信](./assets/pr2.png)
上面流程是在二层链路上通信，无需路由。

要想容器能访问外网，前提条件就是容器流量能流向外网，还有本宿主机能接受，并转发到容器内。

所以肯定要用到iptables和路由，此时已经在三层网络上。

**配置容器外网访问**

- 给网桥配置一个ip，这个当做默认网关。（网桥不是二层上的吗？怎么能配置路由。看文尾介绍）
- 并且将容器内的默认网关配置到网桥中
- 设置nat表中流量出去的时候做智能（MASQUERADE）转换。如果是内网就无需了。

```shell
$ ip addr add 192.168.2.1/24 dev br0
$ ip netns exec ngx1 ip route add default via 192.168.2.1
$ ip netns exec ngx2 ip route add default via 192.168.2.1
$ iptables -t nat -A POSTROUTING -s 192.168.2.0/24 ! -o br0 -j MASQUERADE
```

**Linux中的网桥示意图**

- 是路由器+二层网桥结合体
- 在二层上通信无需配置ip
- 跨网段则需要路由器配置ip
  ![Linux中的网桥](./assets/bridge-route.png)


## 实验-内网主机通信

现在买了一台青云主机（配置了外网IP）A `172.31.0.2`，和一台没有公网的内网主机 B`172.31.0.4`，现在想实现B也可以进行外网访问

其实可以添加路由规则，让B中的默认网关是A机器就行。这样就能省去一个外网IP的费用了。

```shell
# B主机内添加路由
ip route add default via 172.31.0.3

# A主机添加nat转换，并且开启forward
echo 1 > /proc/sys/net/ipv4/ip_forward
iptables -t filter -P FORWARD ACCEPT

iptables -t nat -A POSTROUTING -s 172.31.0.4 -j MASQUERADE

```

**测试**

```
# 内网主机B
[root@i-2hmqlu8t ~]# ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 52:54:99:c3:ce:af brd ff:ff:ff:ff:ff:ff
    inet 172.31.0.4/24 brd 172.31.0.255 scope global noprefixroute dynamic eth0
       valid_lft 83388sec preferred_lft 83388sec
    inet6 fe80::5054:99ff:fec3:ceaf/64 scope link 
       valid_lft forever preferred_lft forever
       
＃ 可以访问外网了
[root@i-2hmqlu8t ~]# curl -i baidu.com
HTTP/1.1 200 OK
Date: Mon, 05 Sep 2022 14:54:46 GMT
Server: Apache
Last-Modified: Tue, 12 Jan 2010 13:48:00 GMT
ETag: "51-47cf7e6ee8400"
Accept-Ranges: bytes
Content-Length: 81
Cache-Control: max-age=86400
Expires: Tue, 06 Sep 2022 14:54:46 GMT
Connection: Keep-Alive
Content-Type: text/html

<html>
<meta http-equiv="refresh" content="0;url=http://www.baidu.com/">
</html>
[root@i-2hmqlu8t ~]#
```


## 总结

1. 在二层网络中通信是直接通过MAC地址。
2. Linux中的网桥是路由器和网桥的结合体。`路由器<->网桥<->容器`
3. Linux网桥在二层网络上通信，可以不设置ip。但是如果跨网段则需要。
4. 重点是要理解网络协议栈中的netfilter。这个才是很核心内容，这个要单独章节来说明。
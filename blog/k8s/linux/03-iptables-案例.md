---
title: iptables-案例
order: 3
category:
  - linux
tag:
  - linux
  - iptables
---

## NAT转换

### 转发本机端口

本地程序端口为8080，然后外部通过80来访问，本机内外IP`172.31.0.2`

```shell
iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 172.31.0.2:8080

# 测试，使用外网IP访问 curl 139.198.191.115（在本机内访问不能通过内网IP访问，下面有解决方法）
[root@web2 ~]# curl -i 139.198.191.115
HTTP/1.1 200 OK
Date: Sat, 22 Oct 2022 02:06:39 GMT
Content-Length: 21
Content-Type: text/plain; charset=utf-8
```

![img.png](./assets/local-dnat.png)

**不能通过内网IP访问解决**

由于本机访问本机程序的时候，应该是和外网访问流量不一样，没有进入到`PREROUTING`，所以访问有问题。具体可查阅本机访问内网和外网访问不同

```shell
# 解决这个问题也比较简单，在OUTPUT层进行处理
iptables -t nat -A OUTPUT -p tcp --destination 127.0.0.1 --dport 80 -j DNAT --to-destination 127.0.0.1:8080
iptables -t nat -A OUTPUT -p tcp --destination 172.31.0.2 --dport 80 -j DNAT --to-destination 127.0.0.1:8080

# 测试
[root@web2 ~]# curl -i 172.31.0.2
HTTP/1.1 200 OK
Date: Sat, 22 Oct 2022 02:12:11 GMT
Content-Length: 16
Content-Type: text/plain; charset=utf-8

172.31.0.2:57826[root@web2 ~]# curl -i 127.0.0.1
HTTP/1.1 200 OK
Date: Sat, 22 Oct 2022 02:12:16 GMT
Content-Length: 15
Content-Type: text/plain; charset=utf-8
```

### FORWARD做转发

访问本机80端口，然后转到其他外网IP

```shell
# 开启FORWARD
echo 1 > /proc/sys/net/ipv4/ip_forward
iptables -t filter -P FORWARD ACCEPT

# 清除规则（慎重）

# 添加转发
iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 47.97.173.91:80
# 这里是修改源IP，转发完，也要接收。
iptables -t nat -A POSTROUTING -p tcp --destination 47.97.173.91 --dport 80 -j SNAT --to-source 172.31.0.2
# 或者上面替换下面这个。做智能转换，出口IP自动找到合适的网卡出去
iptables -t nat -A POSTROUTING -p tcp --destination 47.97.173.91 --dport 80 -j MASQUERADE 
```

![img.png](./assets/forward-ip.png)


### 内网主机通信

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

### 总结

1. nat转换使用tcp扩展的时候，一定要先指定-p tcp，然后再接其他参数。
2. nat转换技术是不需要自己再次返转的，这是依赖于`nf_conntrack`模块，`/proc/net/nf_conntrack`记录转换信息，返回会自动帮转。
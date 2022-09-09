---
title: iptables
order: 3
category:
  - linux
tag:
  - linux
  - ipvs
---

**参考资料**

## 词汇

ipvs抽象出两个概念：前端负载入口`service`和对应的后端服务`real server`



## 基本命令

```shell
# 添加一个负载均衡实例172.17.0.1:32016，且指定负载算法为轮询（Round Robin）
ipvsadm -A -t 172.17.0.1:32016 -s rr

# 负载均衡实例中添加后端服务
ipvsadm -a -t 172.17.0.1:32016 -r 10.244.1.2:8080 -m -w 1
  -r 后端real server地址
  -a 添加后端real server
  -t 指定tcp服务地址和端口号
  -w 指定权值
      -m 转发模式masquerading 就是NAT模式 
      -g 转发模式gatewaying 直连路由模式
      -g 转发模式gatewaying 直连路由模式
      -i 转发模式 IP隧道模式

```

## NAT模式

```
本地启动三个容器，分别对应的ip为以下：
server0: 10.4.0.10
server1: 10.4.0.11
server2: 10.4.0.12

1. 创建service,访问10.11.11.11:80
ipvsadm -A -t 10.11.11.11:80 -s rr

2. 负载中添加后端real server
ipvsadm -a -t 10.11.11.11:80 -r 10.4.0.10:80 -m
ipvsadm -a -t 10.11.11.11:80 -r 10.4.0.11:80 -m
ipvsadm -a -t 10.11.11.11:80 -r 10.4.0.12:80 -m

3. 添加路由

```
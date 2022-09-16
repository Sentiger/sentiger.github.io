---
title: istio
order: 11
category:
  - k8s

---

## istio流量代理

```
1. 找出istio-proxy容器PID，然后进入网络命名空间
nsenter -t 19094 -n

2. 查看iptables规则（这些规则都是init容器配置的）

[root@web1 ~]# iptables -t nat -S
-P PREROUTING ACCEPT
-P INPUT ACCEPT
-P OUTPUT ACCEPT
-P POSTROUTING ACCEPT
-N ISTIO_INBOUND
-N ISTIO_IN_REDIRECT
-N ISTIO_OUTPUT
-N ISTIO_REDIRECT
-A PREROUTING -p tcp -j ISTIO_INBOUND
-A OUTPUT -p tcp -j ISTIO_OUTPUT


-A ISTIO_INBOUND -p tcp -m tcp --dport 15008 -j RETURN
-A ISTIO_INBOUND -p tcp -m tcp --dport 15090 -j RETURN
-A ISTIO_INBOUND -p tcp -m tcp --dport 15021 -j RETURN
-A ISTIO_INBOUND -p tcp -m tcp --dport 15020 -j RETURN
-A ISTIO_INBOUND -p tcp -j ISTIO_IN_REDIRECT
-A ISTIO_IN_REDIRECT -p tcp -j REDIRECT --to-ports 15006


iptables -t nat -A ISTIO_OUTPUT -s 127.0.0.6/32 -o lo -j RETURN
iptables -t nat -A ISTIO_OUTPUT ! -d 127.0.0.1/32 -o lo -m owner --uid-owner 1337 -j ISTIO_IN_REDIRECT
iptables -t nat -A ISTIO_OUTPUT -o lo -m owner ! --uid-owner 1337 -j RETURN
iptables -t nat -A ISTIO_OUTPUT -m owner --uid-owner 1337 -j RETURN
iptables -t nat -A ISTIO_OUTPUT ! -d 127.0.0.1/32 -o lo -m owner --gid-owner 1337 -j ISTIO_IN_REDIRECT
iptables -t nat -A ISTIO_OUTPUT -o lo -m owner ! --gid-owner 1337 -j RETURN
iptables -t nat -A ISTIO_OUTPUT -m owner --gid-owner 1337 -j RETURN
iptables -t nat -A ISTIO_OUTPUT -d 127.0.0.1/32 -j RETURN
iptables -t nat -A ISTIO_OUTPUT -j ISTIO_REDIRECT

# 转发到15001这个端口处理
iptables -t nat -A ISTIO_REDIRECT -p tcp -j REDIRECT --to-ports 15001
```



### 流量分析

iptables规则都是通过init容器进行管理的

#### 进入istio-proxy流量

通过PREROUTING进行nat转发

1. 15008，15090，15021，15020 通过这四个端口进来的流量直接不做处理
2. 其他的直接转到端口`15006` 。也就是这个端口做一层处理（envoy）

### 从istio-proxy（用户态）发出去的流量

通过OUTPUT链进行拦截出去流量

出口流量过滤掉本地或者uid是1337发出的，都进行给到15001处理



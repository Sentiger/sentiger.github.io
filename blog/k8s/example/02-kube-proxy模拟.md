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
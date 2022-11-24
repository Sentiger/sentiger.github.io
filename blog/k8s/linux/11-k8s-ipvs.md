---
title: k8s切换server模式为ipvs
order: 10
category:
  - linux
tag:
  - linux
  - k8s
  - ipvs
---

k8s1.25 service模式从iptables切换为ipvs


```shell
# 1. 修改配置文件 
kubectl -n kube-system edit configmaps kube-proxy

# 将mode 修改为ipvs
...
mode: "ipvs"
...


# 重新启动proxy，只要删除对应的pod就行

kubectl delete pods `kubectl get pods -n kube-system | grep kube-proxy  | awk '{print $1}'` -n kube-system 

# 本地的pod看情况重启
```

## service访问慢问题

新建立了一个集群，虽然两个不是同一个组内，但是也打通了内网通信。发现一个问题是访问pod很快，但是访问service慢，不是因为iptables模式

搜索发现：

`ethtool -K flannel.1 tx-checksum-ip-generic off`

参考：[checksum]

[checksum]: https://blog.csdn.net/weixin_43292547/article/details/120690666
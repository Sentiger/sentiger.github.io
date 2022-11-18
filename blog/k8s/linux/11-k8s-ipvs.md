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


---
title: 扩展k8s-CRD
order: 7
category:
  - k8s
---

`k8s`可以通过申明`API`方式`CRD`扩展`k8s`.

通过定义`CRD`扩展`k8s`中的资源。然后编写控制器来实现对`CR`的监控。然后操作`k8s-api`进行处理。


## 使用kubebuilder
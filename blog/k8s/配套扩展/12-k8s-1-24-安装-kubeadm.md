---
title: k8s安装(1.24)-kubeadm
date: 2022-06-27
icon: install
order: 11
category:
  - k8s
tag:
  - k8s
---

使用kubeadm安装k8s1.24

具体前置工作参见[1.18][k8s-1.18]安装

## 升级

安装方式和1.18其实没有很大的区别，无非就是1.24中将docker-shim去除了，完全使用CRI规范接口。

**1.18**

![k8s-docker-shim](./assets/k8s-docker.png)


**1.24**

![k8s-containerd](./assets/k8s-containerd.png)

::: info

1.24 版本完全使用了CRI接口，意思就是直接想使用docker是不行的，因为docker是没有实现CRI接口。如果继续想使用docker，则中间肯定要安装个转换插件，官方也有讲到。

所以直接可以使用实现了CRI的容器工具就行，目前containerd是实现了CRI，早期的containerd还没实现，k8s从而还为此做了个CRI-shim(CRI-containerd)
:::

**初始化集群**

```shell
$ kubeadm init --apiserver-advertise-address=172.31.0.3 \
--cri-socket unix:///run/containerd/containerd.sock \
--image-repository registry.aliyuncs.com/google_containers \
--kubernetes-version v1.24.0 \
--service-cidr=10.96.0.0/16  \
--pod-network-cidr=10.244.0.0/16
```

## 相关名词

有一句话说的好：一流的企业制造标准，二流的企业做品牌，三流的企业做产品。其实这个可用于到k8s相关的产业链中

### OCI

[oci]是指定规范的一个组织，是Docker和其他的组织一起参与的。主要指定了Linux下容器的运行时的规范。这个类似一个协议，然后有具体的产品来实现。

### runC

[runc]是OCI的一个具体实现。这家伙也是Docker捐出来给到OCI组织的，伟大，所以最后k8s就"抛弃了Docker"

### CRI

[cri]是k8s自己定义的一套规范，用来接入容器的，类似的还有网络规范CNI,容器存储规范CSI。所以只要实现CRI接口的产品都能接入到k8s中作为底层容器

### containerd

[containerd] 是实现了CRI，所以k8s1.24可以用containerd作为容器运行时软件。这家伙也是Docker的产品，也是捐献给CNCF



[k8s-1.18]: 11-k8s安装-kubeadm.md
[oci]: https://opencontainers.org
[runc]: https://github.com/opencontainers/runc
[containerd]: https://github.com/containerd/containerd
[cri]: https://github.com/kubernetes/cri-api/blob/c75ef5b/pkg/apis/runtime/v1/api.proto
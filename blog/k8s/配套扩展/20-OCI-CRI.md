---
title: OCI及CRI规范
date: 2022-06-28
icon: install
order: 20
category:
  - k8s
---

## OCI

Linux支持运行容器，因此每个人都可以开发针对于创建容器和管理容器的软件，导致市面上各种各样的。所以针对这个需要做一个规范。也就是[oci]

OCI总体规范了三个规范，[oci-runtime] , [oci-distribution], [oci-image]

### runtime

runtime 规范了如何启动和管理容器。我们可以通过runc 这个实现来操作容器

### image

image规范了如何制作镜像

### distribution

其实这个官方没有说这也是其中的规范。这个是用来如何管理容器的，例如搭建个本地容器服务，这个服务有哪些接口。


## CRI

[cri]这个是k8s官方指定的一个接入容器的规范。是以RPC接口调用，接下来我们自己写GRPC客户端可以调用

```shell
$ go get -u google.golang.org/grpc 
$ go get -u k8s.io/cri-api
```


[k8s-1.18]: 11-k8s安装-kubeadm.md
[oci]: https://opencontainers.org
[oci-runtime]: https://github.com/opencontainers/runtime-spec
[oci-distribution]: https://github.com/opencontainers/distribution-spec
[oci-image]: https://github.com/opencontainers/image-spec
[runc]: https://github.com/opencontainers/runc
[containerd]: https://github.com/containerd/containerd
[cri]: https://github.com/kubernetes/cri-api/blob/c75ef5b/pkg/apis/runtime/v1/api.proto
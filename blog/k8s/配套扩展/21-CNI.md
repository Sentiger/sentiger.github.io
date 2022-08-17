---
title: CNI规范
date: 2022-08-17
order: 21
category:
  - k8s
---

## CNI

CNI定义了一套容器网络规范。所以在容器和容器网络可以分别由不同的人去开发，容器可以直接调用CNI规范去调用对应的CNI插件，或者容器不支持CNI插件，可以在上层写一套程序手动管理容器和容器直接的网络。

## 手动调用CNI插件

[规范参考]

1. CNI规范是给namespace配置网络的
2. 所以可以直接创建不同的namespace，来模拟。因为容器最终运行也是不同的namespace，最终给namespace配置网络

```
1. 下载CNI插件
2. 配置CNI
3. 运行插件


{
    "name":"lab-br0",
    "type":"bridge",
    "bridge":"lab-br0",
    "isGateway":true,
    "ipMasq":true,
    "ipam":{
        "type":"host-local",
        "subnet":"10.15.10.0/24"
    },
    "routes":[
        {
            "dst":"0.0.0.0/0"
        }
    ],
    "rangeStart":"10.15.10.100",
    "rangeEnd":"10.15.10.200",
    "gateway":"10.15.10.99"
}

CNI_COMMAND=ADD CNI_CONTAINERID=lab-ns CNI_NETNS=/var/run/netns/lab-ns CNI_IFNAME=eth0 CNI_PATH=`pwd` ./bridge <../conf/lab-br0.conf
```


## k8s网络

1. 创建容器
2. kubelet通过CNI配置pause网络
3. POD加入pause namespace

## 参考

- [参考资料]

[规范参考]: https://www.cni.dev/docs/
[参考资料]: https://morningspace.github.io/tech/k8s-net-cni/
[CNI]: https://github.com/containernetworking/cni

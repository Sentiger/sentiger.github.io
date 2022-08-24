---
title: POD
order: 1
category:
  - k8s

---

POD API操作

参考完整API文档 [pod]

## Pod生命周期

这个是POD启动到结束的时候生命周期。这里不是针对于里面的具体容器，而且是一个宏观的概述

- Pending：开始状态都是Pending（等待调度，拉取镜像）
- Running：至少有一个容器正常启动，则是Running
- Succeeded：Pod中的容器全部启动成功，并且不会重启
- Failed：Pod中的容器都全部终止。且至少有一个容器是失败终止的。exit(非0)退出
- Unknown：无法获取到Pod的状态，一般是与pod所在主机通信失败

**注意：**

- Pod在生命周期中只会被调用一次
- kubelet会监听这些容器，并按照指定的策略来管理容器（重启或者忽略）
- API中能返回Condition的一组状态

## 容器状态

容器状态是指Pod中的容器具体状态

- Waiting：处于非Running和Terminated状态，一般是拉取镜像，正在想容器注入Sect数据等操作
- Running：容器正常运行。且已经执行了POSTStart回调
- Terminated：运行完成，并且以正常或非正常结束。preStop回调函数已经执行完

**容器重启策略**

由于容器是由Pod管理的，对于重启策略是针对于容器的，目前提供以下几种

- Always: 只要容器停止Terminated，就会启动（默认）
- OnFailure：启动的时候出现错误
- Never：永不重启

## Pod状态
Pod 有一个 PodStatus 对象，其中包含一个 PodConditions 数组。Pod 可能通过也可能未通过其中的一些状况测试。

## 容器探针

## 终止
优雅终止Pod是很重要的，发送的是一个终止信号，然后处理。而不是强制kill。这个策略也可以配置关闭时间

## 垃圾回收
对于已经终止的Pod，这个API对象依然会被保留到API服务中，直到控制器，或者手动删除。

也可以配置自动删除阈值

[pod]: https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/pod-v1/


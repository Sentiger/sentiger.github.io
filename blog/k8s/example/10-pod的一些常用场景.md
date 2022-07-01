---
title: Pod的一些常用场景
order: 10
category:
  - k8s
---

## 静态Pod

静态Pod的特点就是由kubelet来管理，ApiServer只能进行查看。通过这个特点说明静态Pod就是可以指定的Node上运行服务，无需管理调度等各种信息。

**创建方法**

在kubelet启动的时候，会指定启动参数 `staticPodPath:`在这个目录下定义的Pod都是被`kubelet`给管理的。删除静态Pod直接删除该目录下的Pod文件就行。

```sh
# kubelet 启动参数文件
...
staticPodPath: /etc/kubernetes/manifests
...
```

**常用场景**

使用`kubeadm` 创建单集群，首先是要在主机上安装`kubelet` 然后在安装其他组件。如`etcd`,`ApiServer`,`kube-controller`,`kube-scheduler`

```sh
[root@web1 manifests]# ll
total 16
-rw------- 1 root root 1857 Jun 20 17:04 etcd.yaml
-rw------- 1 root root 2729 Jun 20 17:04 kube-apiserver.yaml
-rw------- 1 root root 2594 Jun 20 17:04 kube-controller-manager.yaml
-rw------- 1 root root 1149 Jun 20 17:04 kube-scheduler.yaml
```



## DaemonSet

`DaemonSet`是一个控制器 ，用来管理Pod的，作用是确保每个节点上都运行一个Pod。当有新的Node添加到集群，该Node会上会自动启动改Pod。

**创建方法**

就是使用DamonSet控制器来创建

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: dammonset-test
  namespace: default
  labels:
    app: demon-test
spec:
  selector:
    matchLabels:
      name: ngx-daemon
  template:
    metadata:
      labels:
        name: ngx-daemon
    spec:
      containers:
        - name: ngx-d
          image: nginx:1.18-alpine
```

**常用场景**

- 每个节点上运行一个守护进程
- 搜集每个节点上的日志
- 监控节点状态
- 例如也可以在使用`ingress-controller`的时候，会在每个节点上都安装一个
- `kubeadm` 安装集群的时候，每个节点需要安装`kube-proxy`,CNI网络插件的实现如:`flannel`


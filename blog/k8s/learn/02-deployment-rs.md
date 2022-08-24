---
title: Deployment/ReplicaSet
order: 2
category:
  - k8s

---

ReplicaSet用来管理Pod，并且维护Pod数量和期望状态一致。其实ReplicaSet好比一个进程管理器来管理Pod这些进程。

Deployment是更高的一层控制器，用来管理ReplicaSet，能够实现服务发布，回滚等各种高级功能，内部会自动的维护Replicaset

参考完整API文档 [deployment],[replicaset]

## ReplicaSet管理Pod

```shell
# 通过自定义的label来选择，如果定义一个Pod，label和replicaset中的selector一致，则会被接管
# deployment会为每个pod生成一个template-hash，然后关联rs和pod，防止冲突
[root@web1 command]# kubectl describe rs ngx-rs 
Name:         ngx-rs
Namespace:    default
Selector:     app=ngx
Labels:       app=ngx
              version=v1
Annotations:  author: sentiger
Replicas:     2 current / 2 desired
Pods Status:  2 Running / 0 Waiting / 0 Succeeded / 0 Failed
Pod Template:
  Labels:  app=ngx
  Containers:
   ngx:
    Image:        nginx:1.18-alpine
    Port:         <none>
    Host Port:    <none>
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Events:
  Type    Reason            Age   From                   Message
  ----    ------            ----  ----                   -------
  Normal  SuccessfulCreate  16s   replicaset-controller  Created pod: ngx-rs-ws8rh
  Normal  SuccessfulCreate  16s   replicaset-controller  Created pod: ngx-rs-6z64n
```

### rs管理pod

对于某些 API 类别（例如 ReplicaSet）而言，两个实例的标签选择算符不得在命名空间内重叠， 否则它们的控制器将互相冲突，无法确定应该存在的副本个数。

1. ReplicaSet 通过 Pod 上的 metadata.ownerReferences 字段连接到附属 Pod，该字段给出当前对象的属主资源。 ReplicaSet 所获得的 Pod 都在其 ownerReferences
   字段中包含了属主 ReplicaSet 的标识信息。正是通过这一连接，ReplicaSet 知道它所维护的 Pod 集合的状态， 并据此计划其操作行为。
2. ReplicaSet 使用其选择算符来辨识要获得的 Pod 集合。如果某个 Pod 没有 OwnerReference 或者其 OwnerReference 不是一个控制器， 且其匹配到某 ReplicaSet 的选择算符，则该
   Pod 立即被此 ReplicaSet 获得。
3. 对于独立的Pod没有被控制器所管理，如果标签和rs选择标签一致，则会被接管


## Deployment

deployment是一个更高级的控制器，用来管理replicaset，提供滚动更新，发布等高级操作


**deployment管理rs,pod**
```
1. deployment定义了标签选择，会生成相应的rs，通过describe可以关联起生成的rs（NewReplicaSet）
2. 通过选则的rs，然后descibe，找到selector的标签，选出对应的pod
3. deployment为每个rs生成一个template-hash 标签，这个标签是通过template生成的hash，对于完全相同的template，是会生成一样的hash，导致最终管理的pod都可能一样


注意：
 很多第三方管理软件是直接通过label来选择rs，然后通过rs来选择pod，这里是有问题的。因为很多时候deployment定义的选择标签是一个。
 所以为了出现这个问题：label不能随意定义
```

```shell
[root@web1 command]# kubectl describe deployments.apps ngx-dep 
Name:                   ngx-dep
Namespace:              default
CreationTimestamp:      Tue, 23 Aug 2022 17:16:21 +0800
Labels:                 app=ngx
Annotations:            author: sentiger
                        deployment.kubernetes.io/revision: 1
Selector:               app=ngx
Replicas:               2 desired | 2 updated | 2 total | 2 available | 0 unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        0
RollingUpdateStrategy:  25% max unavailable, 25% max surge
Pod Template:
  Labels:       app=ngx
                version=v1
  Annotations:  author: qi
  Containers:
   ngx:
    Image:        nginx:1.18-alpine
    Port:         <none>
    Host Port:    <none>
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Available      True    MinimumReplicasAvailable
  Progressing    True    NewReplicaSetAvailable
OldReplicaSets:  <none>
NewReplicaSet:   ngx-dep-69558779b7 (2/2 replicas created)
Events:
  Type    Reason             Age   From                   Message
  ----    ------             ----  ----                   -------
  Normal  ScalingReplicaSet  13s   deployment-controller  Scaled up replica set ngx-dep-69558779b7 to 2
```


[deployment]: https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/deployment-v1/
[replicaset]: https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/replica-set-v1/


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

### 标签选择
```shell
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-rs
  namespace: default
  labels:
    app: nginx
    version: v1
  annotations:
    author: sentiger

spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
    matchExpressions:
    - {key: app, operator: In, values: [nginx]}
    - {key: app, operator: NotIn, values: [mysql]}
    - {key: app, operator: Exists}
    - {key: pod, operator: DoesNotExist}

  template:
    metadata:
      labels:
        app: nginx
        version: v1
    spec:
      nodeSelector:
        kubernetes.io/hostname: web1
      containers:
      - name: nginx
        image: nginx:1.18-alpine
```

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

### 管理rs
1. deployment也是通过标签找到对应的rs
2. 然后rs中有一个`Controlled By:  Deployment/nginx-deployment-2`。即使是定义标签selector相同的，也是能区分，被谁控制了。
3. 如果手动创建rs，则rs是没有被上层控制器所管理，如果标签和能被deployment匹配上，则被接管，然后删除rs中的pod

**注意**
像很多管理软件，则直接是通过标签选择，而忽略了rs是否被哪个deployment所管理，然后列出其中的pod也是完全通过标签来实现的。这里其实是有问题的

例如rancher中就有这个问题

![img.png](./assets/rancher-pod.png)


### 上线状态，历史版本

deployment是一个更高级的控制器，提供上线操作（滚动更新），历史版本回退等信息很强大。触发上线操作只有template更改了。对于副本数增加减少是不会触发的。

```shell
# 查看上线状态 rollout 上线
kubectl rollout status deployment nginx-deployment

# 查看历史版本
kubectl rollout history deployment nginx-deployment
# REVERSION: 版本，CHANGE-CAUSE是版本记录描述，这个是引用annotations: 中的kubernetes.io/change-cause: 版本日志
# 手动更新日志 kubectl annotate deployments.apps nginx-deployment kubernetes.io/change-cause='测试版 本'
#deployment.apps/nginx-deployment 
#REVISION  CHANGE-CAUSE
#1         nginx镜像版本为nginx

# 查看历史版本详细信息
kubectl rollout history deployment nginx-deployment --revision 2

# 版本回退
kubectl rollout undo deployment nginx-deployment --to-revision 1

# 版本原理
# 发布一个新的更新，则会生成一个新的rs，然后将旧的rs中的pod滚动更新为0，所以版本回退是回退到指定的rs。默认是保留10个rs，可以配置
.spec.revisionHistoryLimit

# 暂停上线,就是在进行template等操作之后，暂时不发布，而是等修改完之后，等待在发布
kubectl rollout pause deployment nginx-deployment

# 恢复上线
kubectl rollout resume deployment nginx-deployment 

# 重新部署
kubectl rollout restart deployment nginx-deployment

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


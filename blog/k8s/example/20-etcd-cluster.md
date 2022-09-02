---
title: Etcd集群搭建
order: 20
category:
  - k8s
---

## 参考资料

- [官网]
- [k8s参考资料1]

## 容器安装

环境中的容器使用的是containerd和客户端nerdctl。如果仅仅是容器完全可以使用docker！这里部署三台静态部署.

- 10.240.0.17
- 10.240.0.18
- 10.240.0.19

```shell
# 拉群镜像以及创建网段
nerdctl pull quay.io/coreos/etcd:v3.5.4
nerdctl network create etcd --subnet 10.240.0.0/24

# 初始化配置，在命令行中运行这个加入环境变量
TOKEN=token-01
CLUSTER_STATE=new
NAME_1=etcd-1
NAME_2=etcd-2
NAME_3=etcd-3
HOST_1=10.240.0.17
HOST_2=10.240.0.18
HOST_3=10.240.0.19
CLUSTER=${NAME_1}=http://${HOST_1}:2380,${NAME_2}=http://${HOST_2}:2380,${NAME_3}=http://${HOST_3}:2380

# 节点1安装
THIS_NAME=${NAME_1}
THIS_IP=${HOST_1}

nerdctl run --name ${THIS_NAME} --network etcd --ip ${THIS_IP} -d quay.io/coreos/etcd:v3.5.4 etcd  \
--data-dir=data.etcd --name ${THIS_NAME} \
--initial-advertise-peer-urls http://${THIS_IP}:2380 --listen-peer-urls http://${THIS_IP}:2380 \
--advertise-client-urls http://${THIS_IP}:2379 --listen-client-urls http://${THIS_IP}:2379 \
--initial-cluster ${CLUSTER} \
--initial-cluster-state ${CLUSTER_STATE} --initial-cluster-token ${TOKEN}

# 节点2（运行完全是以上的脚本）
THIS_NAME=${NAME_2}
THIS_IP=${HOST_2}

# 节点3（运行完全是以上的脚本）
THIS_NAME=${NAME_3}
THIS_IP=${HOST_3}


# 进入容器
nerdctl exec -it etcd-1 bash

## 设置环境变量
export ETCDCTL_API=3
HOST_1=10.240.0.17
HOST_2=10.240.0.18
HOST_3=10.240.0.19
ENDPOINTS=$HOST_1:2379,$HOST_2:2379,$HOST_3:2379

## 命令测试
etcdctl --endpoints=$ENDPOINTS put /user sentiger
etcdctl --endpoints=$ENDPOINTS get / --prefix
etcdctl --endpoints=$ENDPOINTS member list -w table
etcdctl --endpoints=$ENDPOINTS endpoint status -w table

```

## k8s部署

k8静态部署主要是注意集群几点ip，这个时候就要使用statefulset和headless service

**注意**
- service是要等到pod为ready状态的时候才能进行监听这些服务
- 这里pod里面又要使用到了service为其解析ip，所以会和上面service进行冲突，因为两个都没准备好。
- publishNotReadyAddresses: true 这个是设置如果pod没有ready也会加入到endpoints中
- 在启动命令中，pod域名要写完整了。否则nslookup解析不了。例如etcd-0.etcd 这个是解析不了的。要写完整etcd-0.etcd.default.svc.cluster.local。因为这个找了好久，好坑
```yaml
apiVersion: v1
kind: Service
metadata:
  name: etcd
spec:
  ports:
    - port: 2379
      name: client
    - port: 2380
      name: peer
  clusterIP: None
  selector:
    app: etcd-member
  publishNotReadyAddresses: true 

---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: etcd
  labels:
    app: etcd
spec:
  serviceName: etcd
  replicas: 3
  selector:
    matchLabels:
      app: etcd-member
  template:
    metadata:
      name: etcd
      labels:
        app: etcd-member
    spec:
      containers:
      - name: etcd
        image: "quay.io/coreos/etcd:v3.5.4"
        ports:
        - containerPort: 2379
          name: client
        - containerPort: 2389
          name: peer
        env:
        - name: CLUSTER_SIZE
          value: "3"
        - name: SET_NAME
          value: "etcd"
        command:
        - "/bin/sh"
        - "-exc"
        - |
           IP=$(hostname -i)
           PEERS=""
           for i in $(seq 0 $((${CLUSTER_SIZE} - 1)));
           do
             PEERS="${PEERS}${PEERS:+,}${SET_NAME}-${i}=http://${SET_NAME}-${i}.${SET_NAME}.default.svc.cluster.local:2380"
           done
           
           exec  etcd --name ${HOSTNAME} \
           --listen-peer-urls http://${IP}:2380 \
           --listen-client-urls http://${IP}:2379,http://127.0.0.1:2379 \
           --advertise-client-urls http://${HOSTNAME}.${SET_NAME}.default.svc.cluster.local:2379 \
           --initial-advertise-peer-urls http://${HOSTNAME}.${SET_NAME}.default.svc.cluster.local:2380 \
           --initial-cluster-token etcd-cluster-1 \
           --initial-cluster=${PEERS} \
           --initial-cluster-state new \
           --data-dir=data.etcd
```

[官网]: https://etcd.io/docs/v3.5/tutorials/how-to-setup-cluster/
[k8s参考资料1]: https://www.cnblogs.com/zuoyang/p/16423791.html
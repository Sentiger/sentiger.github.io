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


[官网]: https://etcd.io/docs/v3.5/tutorials/how-to-setup-cluster/
[k8s参考资料1]: https://www.cnblogs.com/zuoyang/p/16423791.html
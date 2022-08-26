---
title: Service
order: 3
category:
  - k8s

---

service是给后端pod提供访问的入口，能够提供后端pod负载均衡和自定义的endpoint。创建Service目前提供以下几种常见方式

**参考**

- [service]
- [service-api]

## 创建一个后端服务

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
   name: nginx-deployment
   namespace: default
   labels:
      app: nginx-deployment
      version: v1
   annotations:
      author: sentiger
      kubernetes.io/change-cause: 提供给Service演示后端服务

spec:
   replicas: 2
   selector:
      matchLabels:
         app: nginx

   template:
      metadata:
         labels:
            app: nginx
         annotations:
            author: sentiger
      spec:
         containers:
            - name: ngx
              image: ngin
```

## ClusterIP

ClusterIP是一个虚拟IP（不是一个真实的节点IP，没有节点支持其协议栈）主要是通过iptables提供NAT转换。所以Ping不同（Ping是ARP协议，到了协议栈）

这个只能在集群内部访问，在外部通过这个IP访问不了
```yaml 
apiVersion: v1
kind: Service
metadata:
  name: svc-clusterip-nginx
  namespace: default
  labels:
    app: nginx
  annotations:
    kubernetes.io/change-cause: clusterip演示

spec:
  selector:  # 通过选择器选择对应的POD
    app: nginx
  
  type: ClusterIP # 默认是ClusterIP
  
  ports:
  - name: http
    protocol: TCP
    port: 8081
    targetPort: 80
    
```

## NodePort

通过访问宿主机IP:端口来访问集群内应用。这里NodePort范围是在APIServer启动的时候指定的。

```yaml
apiVersion: v1
kind: Service
metadata:
  name: baidu-svc
spec:
  selector:  # 通过选择器选择对应的POD
    app: nginx
  type: NodePort
  ports:
  - protocol: TCP
    port: 80
    nodePort: 30001
```

**测试**

```
[root@web1 k8s-learn]# kubectl get svc
NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE
baidu-svc    NodePort    10.96.237.73   <none>        80:30001/TCP   2m40s
kubernetes   ClusterIP   10.96.0.1      <none>        443/TCP        6d22h

[root@web1 k8s-learn]# curl 139.198.165.7:30001
{"code":200,"message":"2022-08-26 11:21:40,\u6d4b\u8bd5\u5199\u5165\u65e5\u5fd7:","result":{}}
```

## ExternalIPs

上面可以通过端口号来暴露主机IP从而实现转发到Service，现在想实现将本机IP或者能到达的IP暴露出去访问

```yaml
apiVersion: v1
kind: Service
metadata:
  name: external-svc
  labels:
    app: external-svc-nginx

spec:
  selector:
    app: nginx

  ports:
  - name: http
    port: 80
    targetPort: 80
  externalIPs: # 172.31.0.3这个是主机节点IP， 这里可以将指定的Node节点都写在这里，然后可以通过这个IP就能访问，如果是云主机，则云主机会转发到这个内部IP
  - 172.31.0.3
```

**测试**

```
[root@web1 k8s-learn]# curl 172.31.0.3
<!DOCTYPE html>

或者（这里是云主机提供的外网）
[root@web1 k8s-learn]# curl 139.198.165.7
<!DOCTYPE html>
```

## LoadBalancer

TODO ：这个需要配合云厂商的负载均衡器


## 自定义后端POD

上面Service通过selector选择集群中的Pod，意思这个service提供服务的后端只能是集群内的应用，有很大的限制。例如我想通过service访问外部的节点。

例如：开发环境访问的数据库是不同的来源，但是对于程序来讲如果都定义一个service，抽象mysql服务，这样就无需提供不同环境有不同的配置的差异了。

```yaml
apiVersion: v1
kind: Service
metadata:
  name: cluster-mysql
spec:
  type: ClusterIP
  ports:
  - protocol: TCP
    port: 3306
    targetPort: 3306 
    
    
---
# 定义后端节点，这样线上的时候和开发环境的后端节点指定不同就行，对于程序而言，都是连接svc
apiVersion: v1
kind: Endpoints
metadata:
  name: cluster-mysql  # 这里的name和Service的name必须一致才能绑定
subsets:
- addresses:
  - ip: 139.198.167.206
  ports:
  - port: 3306
```

**测试**

```
[root@web1 k8s-learn]# kubectl get svc
NAME            TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
baidu-svc       ClusterIP   10.96.64.159   <none>        80/TCP     80s
cluster-mysql   ClusterIP   10.96.100.47   <none>        3306/TCP   28s
kubernetes      ClusterIP   10.96.0.1      <none>        443/TCP    6d22h

# 在宿主机内测试
[root@web1 k8s-learn]# telnet 10.96.100.47 3306
Trying 10.96.100.47...
Connected to 10.96.100.47.
Escape character is '^]'.
Q
5.7.29-32-log��5
                O}1yv-Yv{D8y4;ymysql_native_password
                
# 在应用容器内可以直接使用环境变量或者DNS域名来直接连接
telnet cluster-mysql.default

或者pod在svc创建之后运行，可以直接使用环境变量
env

CLUSTER_MYSQL_PORT_3306_TCP_PORT=3306
CLUSTER_MYSQL_SERVICE_HOST=10.96.100.47
CLUSTER_MYSQL_PORT_3306_TCP_PROTO=tcp
BAIDU_SVC_PORT_80_TCP=tcp://10.96.64.159:80
```

## Headless(无头服务)

有这样一种场景。就是启动的应用有多少个，在客户端都需要知道对应的IP。

1. 自己实现负载均衡（svc只要提供给我后端的pod有哪些【IP集合】）
2. 有些服务就需要知道所有应用内的IP（etcd启动的时候，需要知道任何一个节点的ip）

Headless服务，在pod中直接通过解析 servicename.namespace域名，然后返回的是这个域名绑定的IP列表。DNS解析

```yaml
apiVersion: v1
kind: Service
metadata:
  name: headless-svc
  labels:
    app: headless-svc

spec:
  clusterIP: None
  selector:
    app: nginx
```

**测试**
```
可通过nsloop来解析域名headless-svc对应的后端节点 

```

[service]: https://kubernetes.io/zh-cn/docs/concepts/services-networking/service/
[service-api]: https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/service-resources/service-v1/


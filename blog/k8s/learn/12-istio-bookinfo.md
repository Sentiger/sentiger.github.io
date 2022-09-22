---
title: istio-bookinfo
order: 12
category:
  - k8s
---
使用istio自带的bookinfo示例来了解其特性。

![img.png](./assets/bookinfo-app.png)

**服务解析**

```
分别有四个服务：

productpage
    v1 版本
    
reviews
    v1 版本
    v2 版本
    v3 版本

details
    v1 版本

ratings
    v1 版本    

```

## 安装bookinfo示例

::: code-tabs#language

@tab 部署应用
```shell
# 将bookinfo应用都装在这个namespace中
kubectl create namespace bookinfo

# 为了不手动注入sidecar，直接打上标签，在这个namespace下创建的pod都会自动加入网格
kubectl label namespace bookinfo istio-injection=enabled

# 创建应用（sample在下载istio的时候会自带）
kubectl -n bookinfo apply -f samples/bookinfo/platform/kube/bookinfo.yaml

# 安装结果
[root@web1 bookinfo-demo]# kubectl get pods -n bookinfo 
NAME                              READY   STATUS    RESTARTS   AGE
details-v1-b48c969c5-6pjff        2/2     Running   0          18h
productpage-v1-74fdfbd7c7-7tbkq   2/2     Running   0          18h
ratings-v1-b74b895c5-jl5st        2/2     Running   0          18h
reviews-v1-68b4dcbdb9-m927w       2/2     Running   0          18h
reviews-v2-565bcd7987-9w4ql       2/2     Running   0          18h
reviews-v3-d88774f9c-98rfs        2/2     Running   0          18h

[root@web1 bookinfo-demo]# kubectl -n bookinfo get deployments
NAME             READY   UP-TO-DATE   AVAILABLE   AGE
details-v1       1/1     1            1           18h
productpage-v1   1/1     1            1           18h
ratings-v1       1/1     1            1           18h
reviews-v1       1/1     1            1           18h
reviews-v2       1/1     1            1           18h
reviews-v3       1/1     1            1           18h

[root@web1 bookinfo-demo]# kubectl -n bookinfo get svc
NAME          TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
details       ClusterIP   10.96.170.138   <none>        9080/TCP   18h
productpage   ClusterIP   10.96.203.207   <none>        9080/TCP   18h
ratings       ClusterIP   10.96.101.46    <none>        9080/TCP   18h
reviews       ClusterIP   10.96.119.61    <none>        9080/TCP   18h
```

@tab 配置gateway

```
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: bookinfo-gateway
  namespace: bookinfo

spec:
  selector:
    app: istio-ingressgateway
  servers:
  - hosts:
    - 139.198.165.7
    port:
      name: http
      number: 80
      protocol: HTTP


---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: gateway-virtualservice
  namespace: bookinfo

spec:
  hosts:
  - 139.198.165.7
  gateways:
  - bookinfo-gateway
  http:
  - name: bookinfo-svc-route
    route:
    - destination:
        host: productpage
        port:
          number: 9080
```

@tab 测试

```
1. 由于没有域名备案，这里直接就使用的是IP访问
2. 配置了网关，外部流量进入到网格
3. 浏览器访问 http://139.198.165.7/productpage
```

:::

## 添加默认路由v1

::: code-tabs#language

@tab 默认后端

```yaml
# destinationrule.yaml

apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: productpage
  namespace: bookinfo
spec:
  host: productpage
  subsets:
  - name: v1
    labels:
      app: v1
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: reviews
  namespace: bookinfo
spec:
  host: reviews
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2
  - name: v3
    labels:
      version: v3

---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: detail
  namespace: bookinfo
spec:
  host: details
  subsets:
  - name: v1
    labels:
      version: v1

---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: ratings
  namespace: bookinfo
spec:
  host: ratings
  subsets:
  - name: v1
    labels:
      version: v1
```

@tab 默认虚拟服务
```yaml
# virtualservice.yaml
# 默认都是配置v1版本

apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: productpage
  namespace: bookinfo
spec:
  hosts:
  - productpage
  http:
  - route:
    - destination:
        host: productpage
        subset: v1
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
  namespace: bookinfo
spec:
  hosts:
  - reviews
  http:
  - route:
    - destination:
        host: reviews
        subset: v1

---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: ratings
  namespace: bookinfo
spec:
  hosts:
  - ratings
  http:
  - route:
    - destination:
        host: ratings
        subset: v1
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: details
  namespace: bookinfo
spec:
  hosts:
  - details
  http:
  - route:
    - destination:
        host: details
        subset: v1
```

@tab 测试

```
# 配置
kubectl apply -f destinationrule.yaml
kubectl apply -f virtualservice.yaml 

# 访问
现在访问都是走的v1版本服务
```

:::

## 发布测试版本

现在发布了v2的测试版本，想先让内部用户测试下。例如通过header配置登陆用户为qiqi的使用v2版本

::: code-tabs#language

@tab v2虚拟服务

```yaml
# virtualservice-reviews-test-v2.yaml

apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
  namespace: bookinfo

spec:
  hosts:
  - reviews
  http:  # 路由匹配都是从前往后匹配的
  - match:
    - headers:
        end-user:
          exact: qiqi  # 匹配到end-user为qiqi的时候，就直接使用这个路由，否则使用默认的
    route:
    - destination:
        host: reviews
        subset: v2

  - route:
    - destination:
        host: reviews
        subset: v1
```

:::

## 故障注入

### 延时注入

![img.png](./assets/ratings-delay.png)

::: code-tabs#language

@tab 延时注入

```
有时候需要进行线上服务的稳定性测试，然而在各个服务之间想模拟一下超时或者请求失败，总不能在代码中写bug吧。iostio给提供了很好的故障注入

1. productpage->reviews 服务间调用程序设置的超时时间是3秒，但是有一个重试机制。
2. 现在reviews服务又调用了ratings服务（他们之间程序设置超时时间10秒），现在直接设置ratings服务延迟7秒
3. productpage调用reviews，则会三秒超时之后又重新发起请求，总共6秒。
4. 所以productpage调用reviews服务6秒后自动超时
5. 结合match，该错误只针对qiq有效

```

@tab yaml

```yaml
# virtualservice-ratings-test-delay.yaml

apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: ratings
  namespace: bookinfo
spec:
  hosts:
  - ratings 
  http:
  - fault:
      delay:
        fixedDelay: 7s
        percentage:
          value: 100
    match:
    - headers:
        end-user:
          exact: qiqi
    route:
    - destination:
        host: ratings
        subset: v1
  - route:
    - destination:
        host: ratings
        subset: v1
```

@tab 解决方法

```
增加 productpage 与 reviews 服务之间的超时或降低 reviews 与 ratings 的超时
终止并重启修复后的微服务
确认 /productpage 页面正常响应且没有任何错误
```

:::


###  HTTP abort 注入

```yaml
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: ratings
  namespace: bookinfo
spec:
  hosts:
  - ratings
  http:
  - match:
    - headers:
        end-user:
          exact: qiqi
    route:
    - destination:
        host: ratings
        subset: v1
    fault:
      abort:
        httpStatus: 500
        percentage:
          value: 100
  - route:
    - destination:
        host: ratings
        subset: v1
```

## 流量转移

在发布的时候，希望从老版本逐渐向新版本中迁移，可以按照流量百分比来做处理。然后观察服务稳定性，可以慢慢迁移到最新版本

```yaml
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: reviews
  namespace: bookinfo
spec:
  hosts:
  - reviews
  http:
  - route:
    - destination:
        host: reviews
        subset: v3
      weight: 50
    - destination:
        host: reviews
        subset: v1
      weight: 50
```


## TCP流量转移
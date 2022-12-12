---
title: ingress-nginx
order: 4
category:
  - k8s
---

## k8s1.25安装ingress-nginx

- github地址:[ingress-nginx地址]
- [ingress-nginx文档]


[deploy]

### deploy配置修改

- 修改里面的image，可以使用`easyyun`中的镜像，或者直接找对应版本的
- 如果没有LoadBalancer, 则可以修改里面的Deployment，设置pod位hostNetwork
- 可以设置ingress-nginx-controller为DaemonSet


## ingress-nginx配置tcp转发

ingress-nginx 四层转发都是配置到ConfigMap中的，然后ingress-nginx-controller启动的时候监听这个ConfigMap就行

```

# 1、 定义configmap
tcp-services.yaml

apiVersion: v1
kind: ConfigMap
metadata:
  # name的值与args参数中的一致
  name: tcp-services
  namespace: ingress-nginx
data:
  # 格式
  # port: "<namespace>/<service name>:<service port>"
  # port: ingress对外暴露的端口
  # namespace: 应用所在的namespace
  # service name: 应用的service name
  # service port: 应用的service port
  "8088": "ey-dev/openapi:80"
  
  
# 2. 启动ingress-nginx-controller中配置

- args:
- /nginx-ingress-controller

- --tcp-services-configmap=ingress-nginx/tcp-services # 新增tcp转发
- --udp-services-configmap=ingress-nginx/udp-services # 新增udp转发
 
3. 配置好可以进行日志查看，或者直接进入ingress-nginx-controller容器中查看nginx.conf，会发现有了对应的配置  
```

## ingress-nginx配置后端https

```yaml
apiVersion: v1
kind: Service
metadata:
  name: rancher
spec:
  type: ClusterIP
  ports:
  - protocol: TCP
    port: 443
    targetPort: 8843
    
    
---
apiVersion: v1
kind: Endpoints
metadata:
  name: rancher
subsets:
- addresses:
  - ip: 172.16.188.102
  ports:
  - port: 8843

---

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: rancher
  annotations:
    nginx.ingress.kubernetes.io/proxy-body-size: 5m
    nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"
spec:
  ingressClassName: nginx
  rules:
  - host: rancher.easyyun.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: rancher
            port:
              number: 443
```

## 自定义配置

```yaml
nginx.ingress.kubernetes.io/configuration-snippet: |
  set $flag 0;
  if ($uri !~ "^(.+\.php)") {
       set $flag "${flag}1";
  }
  if ($uri !~ "^(.+\.html)") {
       set $flag "${flag}2";
  }
  if ($flag = "012"){
      rewrite ^/(.*)$ /index.php/$1 last;
      break;
  }
  set $script    $uri;
  set $path_info  "/";
  if ($uri ~ "^(.+\.php)(/.+)") {
          set $script     $1;
          set $path_info  $2;
  }
```

[ingress-nginx地址]: https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/index.md

[deploy]: https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml

[ingress-nginx文档]: https://kubernetes.github.io/ingress-nginx/examples/rewrite/
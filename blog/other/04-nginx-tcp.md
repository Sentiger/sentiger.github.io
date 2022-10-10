---
title: Nginx配置TCP转发
order: 4
category:
  - nginx
  - Go
---

## 前言

nginx使用最多的就是负载均衡，做七层代理。七层代理效率不高，但是能定制各种规则，例如http协议，七层代理可以根据访问的路由等做处理。需要将用户的所有请求数据都接收完成之后，然后在进行调用后端服务。

对于四层代理是指的转发，就是接收到4层的数据，然后就直接转发数据到后端，这样nginx就无需把所有的数据都接收完成再进行转发到后端服务。

## 场景

在项目中遇到一个这样的场景，就是后端是go上传服务，本来是配置nginx做负载的，上传服务的时候，需要先判断文件大小，然后再接收文件，这里就存在一个问题，如果使用nginx做代理的话，nginx就需要接收完用户的所有请求，然后在发送到go服务。虽然说nginx可以配置body大小。但是极为不方便。所以这个时候，就纯属想做一个转发。


## 配置

```
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}

# 这里就是配置传输层的
stream{
    upstream tcpssh{
        hash $remote_addr consistent;
        server 172.31.0.2:8089 max_fails=3 fail_timeout=10s;  
    }
    server{
        listen 80;
        proxy_connect_timeout 20s;
        proxy_timeout 5m;
        proxy_pass tcpssh;
    }
}
```

```go
package main

import (
        "fmt"
        "log"
        "net/http"
        "strconv"
)

func main() {
        http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
                bodyLen, _ := strconv.Atoi(request.Header.Get("Content-Length"))
                if bodyLen > 1000 {
                        writer.Write([]byte("数据长度超出:" + request.Header.Get("Content-Length")))
                        return
                }
                fmt.Println("数据长度", request.Header.Get("Content-Length"))
                writer.Write([]byte("数据长度：" + request.Header.Get("Content-Length")))
        })
        fmt.Println("启动服务 8089")
        err := http.ListenAndServe(":8089", nil)
        if err != nil {
                log.Fatal("启动服务失败")
        }
}
```



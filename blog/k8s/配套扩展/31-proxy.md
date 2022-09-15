---
title: 代理理解
date: 2022-09-15
order: 31
category:
  - k8s
---

在了解k8s中发现有各种代理，k8s自身的kube-proxy，还有nginx-ingress，envoy等各种代理。代理又分为正向代理和反向代理。下面来理解下这两方面。

## 正向代理

所谓的正向代理其实就是客户端的需求，就是帮助客户端做一些事情，例如我买票的时候，去找黄牛帮我去买高铁票，其实最终要访问的就是12306或者窗台，最终都是由铁路提供票的。 这就是所谓的正向代理（但是这里有点区别，对于铁路局不知道购买票的人，但是知道是卖给谁） 正向代理可以隐藏到服务器访问的IP等各种信息。

实现正向代理的方法也有很多，例如通过设置代理客户端（浏览器可以设置代理），基本大多数的软件都可以设置代理。还有就是通过无感的进行代理，例如代理VPN，开启VPN之后就无需浏览器设置代理了

### 客户端设置

其实软件自身配置代理实现很简单，配置代理的地址和端口。只是在发送http协议的时候，稍微改动下。

**不使用代理发送http请求**
```
GET / HTTP/1.1
Host: baidu.com
```

**使用代理发送http请求**
```
GET http://baidu.com/ HTTP/1.1  # 这里的URI写带完整域名的路径
Host: 127.0.0.1  # 这里就是请求的host
```

**实现原理**

代理其实就是像目的地址发送一个相同协议（这里只是讲解http）的请求，然后返回给客户端。所以代理拿到URL路径的时候，直接去请求就行，然后发送给对应的客端

**代码实现**

下面是一个简单网上代码，里面涉及到很多细节都没有处理，只是简单验证下过程

```go
package main

import (
	"fmt"
	"io"
	"net"
	"net/http"
	"strings"
)

type Proxy struct {
}

func (p *Proxy) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	fmt.Printf("接受请求 %s %s %s\n", req.Method, req.Host, req.RemoteAddr)

	fmt.Println("地址", req.URL)
	transport := http.DefaultTransport

	// 第一步： 代理接受到客户端的请求，复制原来的请求对象，并根据数据配置新请求的各种参数(添加上X-Forward-For头部等)
	outReq := new(http.Request)
	*outReq = *req // 这只是一个浅层拷贝

	clientIP, _, err := net.SplitHostPort(req.RemoteAddr)
	if err == nil {
		prior, ok := outReq.Header["X-Forwarded-For"]
		if ok {
			clientIP = strings.Join(prior, ", ") + ", " + clientIP
		}
		outReq.Header.Set("X-Forwarded-For", clientIP)
	}

	// 第二步： 把新请求复制到服务器端，并接收到服务器端返回的响应
	fmt.Println("waibu", outReq)
	res, err := transport.RoundTrip(outReq)
	fmt.Println(res)
	if err != nil {
		w.WriteHeader(http.StatusBadGateway) // 502
		return
	}

	// 第三步：代理服务器对响应做一些处理，然后返回给客户端
	for key, value := range res.Header {
		for _, v := range value {
			w.Header().Add(key, v)
		}
	}

	w.WriteHeader(res.StatusCode)
	io.Copy(w, res.Body)
	res.Body.Close()
}

func main() {
	fmt.Println("Serve on :8080")
	http.Handle("/", &Proxy{})
	http.ListenAndServe("0.0.0.0:8080", nil)
}

// 代码运行之后，会在本地的 8080 端口启动代理服务。修改浏览器的代理为 127.0.0.1：:8080
// 再访问网站，可以验证代理正常工作，也能看到它在终端打印出所有的请求信息。

```

**验证**

```shell
# 使用curl发送请求
curl --proxy 127.0.0.1:8080 http://test-rest-api.easyyun.com/ 
easyyun-openapi

# 使用telnet发送请求
telnet 127.0.0.1 8080
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
^]
telnet> 
GET http://test-rest-api.easyyun.com/ HTTP/1.1
Host: 127.0.0.1

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 15
Content-Type: text/plain; charset=utf-8
Date: Thu, 15 Sep 2022 01:59:45 GMT

easyyun-openapi

```

### 流量拦截

相比在软件中设置代理，如果有的关键不支持代理，则无法通信。还有就是客户端设置代理是有侵入式的，还有一种代理模式就是拦截本机流量，然后转发到代理服务器去处理。

**实现原理**

1. 通过iptables设置将流量都转发到代理服务器（这个基本叫做网关）
2. 通过本地一个守护进程程序，将流量都拦截到这个软件，然后由该软件处理些数据，然后发送到代理服务器。envoy

## 反向代理


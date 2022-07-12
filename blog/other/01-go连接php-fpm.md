---
title: go连接php-fpm
order: 1
category:
  - fastcgi
  - go
---

php-fpm 实现了fast-cgi协议，所以可以和外部通过fast-cgi协议进行通信。nginx+php就是使用这种模式。

下面我们使用go来调用下php-fpm


## 配置fpm启动模式

有两种方式

1. 本地socket
2. tcp方式


::: code-tabs#language

@tab SOCKET

```shell
[www]

listen = /tmp/fpm.socket

```

@tab TCP

```shell

[www]

; 注意这里如果任意网卡可以配置0.0.0.0

listen = 127.0.0.1:9000

```

:::



## go客户端

只要实现了fast-cgi协议的都是可以进行通信，这就是协议的好处。

```go
package main

import (
	fcgiclient "github.com/tomasen/fcgi_client"
	"io/ioutil"
	"log"
)

func main() {
	reqParams := "name=value"
	env := make(map[string]string)
	// 这里是协议定义的：脚本的路径
	env["SCRIPT_FILENAME"] = "/code/test.php"
	env["SERVER_SOFTWARE"] = "go / fcgiclient "
	env["REMOTE_ADDR"] = "127.0.0.1"
	env["QUERY_STRING"] = reqParams
	// 这里是我配置的跨主机通信
	fcgi, err := fcgiclient.Dial("tcp", "112.124.15.195:9000")
	if err != nil {
		log.Println("err:", err)
	}
	resp, err := fcgi.Get(env)
	if err != nil {
		log.Println("err:", err)
	}
	content, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Println("err:", err)
	}
	log.Println("content:", string(content))
}

```






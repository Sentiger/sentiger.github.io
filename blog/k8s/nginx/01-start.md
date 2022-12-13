---
title: nginx
order: 1
category:
  - nignx
---

## 进程模型

master-worker进程模型，master将请求发送到worker，master可以将信号发送给worker


## worker抢占调度


## epoll

使用`epoll`进程模型，一个worker可以接收`worker_connections`个请求


## 配置

nginx配置结构有:

- main：全局配置
- event：配置工作模式以及连接数
- http：http模块配置
- stream：四层转发配置

### main

### event


## location

```
location / { # 默认匹配，能匹配到/*

}

location = / { # 精准匹配/
}

location ~* 正则 { # 正则匹配，*表示不缺分大小写
}



```
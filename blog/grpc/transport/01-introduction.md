---
title: 安装/使用
order: 1
article: false
category:
  - gRPC
tag:
  - 通信模式

---

## 介绍

使用HTTP1.x版本通信的时候，属于一个request对应一个response模式，这种模式简单，但是效率不是很高。gRPC使用的是HTTP2通信协议，基于HTTP2的特性
使得gRPC的通信模式有多种。

1. 一元RPC。（和http1.x一样，一个request对应一个response）
2. 服务端流模式。客户端发送一个request，服务端响应多个response，客户端需要像读取tcp数据流一样循环读取，直到服务端发送结束标志`EOF`
3. 客户端流模式。（这个和服务端流模式基本原理一样，客户端你建立完连接之后，发送多次request，服务端在接受完所有request `EOF`之后最终只返回一次response，并关闭连接）
4. 双向流模式。（客户端，服务端都是流）

---
title: envoy入门
order: 1
category:
  - k8s
  - envoy
---

## 启动

```shell
    nerdctl run --name envoy -p 9901:9901 -p 10000:10000 -d envoyproxy/envoy:v1.23.1

nerdctl run  -d \
-v $(pwd)/config:/etc/envoy \
--network host \
envoyproxy/envoy:v1.23-latest \
--config-path /etc/envoy/envoy-demo.yaml

# 相关参数
--config-path # 启动配置文件
--config-yaml # 覆盖--config-path中的一部分

```


```yaml

version: '3'
services:
  envoy:
   image: envoyproxy/envoy:v1.23-latest
   container_name: envoy
   network_mode: host
   volumes:
    - config:/config
   command: envoy --config-path /config/envoy.yaml

```


## listeners

listener是用来接受来自下游Downstream的TCP连接(客户端)。每个listener是开启一个线程来监听数据的。一个envoy实例可以配置多个listener。

每个监听器可以配置监听相同的端口，通过内核来分配具体到哪个监听器。但是需要配置参数`SO_REUSEPORT`

### listener_filters

监听器过滤器。这些过滤器在网络层过滤器(`filter_chain.filter`)之前处理，并且有机会去操作连接元数据，这样通常是为了影响后续过滤器或集群如何处理连接。

### filter_chains

通过listener_filter中的信息来匹配对应的filter_chains

当filter收到数据的时候，会根据配置的filter_chain的规则选择对应的filter_chain

一个listener可以配置多个过滤器链的。每个过滤器链filter_chain可以配置多个网络层(L3/L4)filter

#### filters

##### HTTP 连接管理器 


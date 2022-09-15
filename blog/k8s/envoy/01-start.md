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

nerdctl run   \
-v $(pwd)/envoy-baidu.yaml:/envoy-baidu.yaml \
-p 9901:9901 -p 10000:10000 -d \
envoyproxy/envoy:v1.23.1 \
--config-path /envoy-baidu.yaml

# 相关参数
--config-path # 启动配置文件
--config-yaml # 覆盖--config-path中的一部分

```



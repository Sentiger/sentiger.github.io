---
title: 简单的CICD
icon: install
order: 1
category:
  - k8s
tag:
  - ci/cd
---

当前blog使用Jenkins自动部署到k8s中

## 发布流程

![流程](./assets/process.png)

## 编写Dockerfile

这个可以直接放在项目下，clone代码之后自动就构建镜像了

```Dockerfile
FROM node:16.15.1-alpine3.16 as builder
ADD . /blog
WORKDIR /blog
RUN npm install --registry=https://registry.npmmirror.com && npm run docs:build


FROM nginx:1.22.0-alpine
COPY --from=builder /blog/blog/.vuepress/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
```

## 构建镜像

构建一个镜像文件出来，最后直接就可运行。

```shell
# 版本根据自己的规则来自增或者覆盖
$ docker build -t blog:v1  .
# 删除中间的无效层文件
$ docker rmi $(docker images -af "dangling=true" -q)
```
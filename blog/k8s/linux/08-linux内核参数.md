---
title: 内核参数
order: 08
category:
  - linux
tag:
  - linux
  - 内核参数
---

## 内核参数

内核参数分为临时修改和开机启动自动修改，临时修改在服务器启动时候就会初始化，所以这部分是在内存中，对于Linux中映射的就是`/proc/sys`下

### 临时修改

直接修改内存映射文件`/proc/sys`，如以下修改Linux内核网络转发，或者使用命令`sysctl -w `

```shell
# 直接修改
echo 1 > /proc/sys/net/ipv4/ip_forward

# 使用命令修改
sysctl -w net.ipv4.ip_forward=1

```

### 持久修改

对于持久修改，是要将配置写入持久文件，然后开机自动加载而已，linux提供`/etc/sysctl.conf`文件加载，`centos7.9`启动脚本`/etc/rc.d/init.d/functions`

```shell
# 1. 修改开机启动脚本加载文件
vim /etc/sysct.conf

# 2. 命令重新加载
sysctl -p
```

**内存和系统文件对应关系**

```
1. /proc/sys/ 目录对应的是系统配置

2. 里面的层级对应的是不同的配置，对应配置文件中是这样的关系
1) 去掉/proc/sys/前缀
2) /替换为.
/proc/sys/net/ipv4/ip_forward => net.ipv4.ip_forward

```


## 常见的内核参数

**网络**

```
1. 开启路由转发
net.ipv4.ip_forward=1
```









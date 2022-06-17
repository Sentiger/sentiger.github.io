---
title: docker安装
icon: install
order: 10
category:
  - k8s
tag:
  - docker
---

多个云服务器测试，发现centos7.6的版本比较稳定，flanneld能正常运行，docker依赖好

## 安装

centos7.6一台新机器上装docker

```shell
# 关闭firewalld
$  systemctl stop firewalld && systemctl disable firewalld

# 安装iptables，并清空规则
$ yum -y install iptables-services
$ systemctl enable iptables.service
$ systemctl start iptables.service

$ iptables -t filter -F
$ iptables -t nat -F

# 安装docker
$ curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 配置镜像加速器，并配置cgroupdriver
$ mkdir -p /etc/docker
$ tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://rwgxai1f.mirror.aliyuncs.com"],
  "exec-opts": ["native.cgroupdriver=systemd"]
}
EOF

$ systemctl daemon-reload
$ systemctl restart docker
```

## 总结




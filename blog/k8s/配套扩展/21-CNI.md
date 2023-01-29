---
title: CNI规范
date: 2022-08-17
order: 21
category:
  - k8s
---

## CNI

CNI定义了一套容器网络规范。所以在容器和容器网络可以分别由不同的人去开发，容器可以直接调用CNI规范去调用对应的CNI插件，或者容器不支持CNI插件，可以在上层写一套程序手动管理容器和容器直接的网络。

## 运行方式

CNI规范了标准的输入，和不同版本的标准输出，来和插件进行交互。CNI也有不同的版本，然后规定了不同版本的输出。然后对应的插件就去实现这个规范就行。

### cnitool

`cnitool`就是模拟一个客户端，然后通过配置来调用不同插件

```
1. 通过cnitool客户端调用，只是封装了一层调用，自动找配置文件。可以调用任意插件
NETCONFPATH=./conf CNI_PATH=./bin cnitool add my-logger /var/run/netns/testing

Command: ADD
Container Id: cnitool-77383ca0a0715733ca6f
Path to Network Namespace: /var/run/netns/testing
Network Interface: eth0
Path to CNI Plugins: ./bin
Network Configuration:
{
    "cniVersion": "0.4.0",
    "dns": {}
}

# NETCONFPATH 定义配置文件目录
# CNI_PATH CNI插件目录，根据配置文件中的type来找对应的可执行插件
# ADD/DEL/CHECK/VERSION 分别是通知插件来做对应的事情，这个由插件来实现
# /var/run/netns/testing namespace


2. 直接调用单个插件

CNI_COMMAND=ADD CNI_CONTAINERID=lab-ns CNI_NETNS=/var/run/netns/testing CNI_IFNAME=eth0 CNI_PATH=./bin ./cni <./conf/my-cni.conf

或者通过命令行来手动输入配置，注意输入完之后，需要发出一个结束信号EOF。Linux 使用control+D，否则一直在ReadAll
CNI_COMMAND=ADD CNI_CONTAINERID=lab-ns CNI_NETNS=/var/run/netns/testing CNI_IFNAME=eth0 CNI_PATH=./bin ./cni

```

## 开发CNI插件流程

```
1. 下载第三方库（封装好获取标准输入，输出，等基本统一操作，提供对应的接口，自己实现插件
go get github.com/containernetworking/cni

2. 通过库编写实现业务

package main

import (
	"encoding/json"
	"fmt"
	"github.com/containernetworking/cni/pkg/skel"
	"github.com/containernetworking/cni/pkg/types"
	current "github.com/containernetworking/cni/pkg/types/100"
	"github.com/containernetworking/cni/pkg/version"
	"os"
)

// 通过stderr输出
func print(str string) {
	fmt.Fprintf(os.Stderr, str)
}

func main() {
    // version 这个库自动帮实现了
	skel.PluginMain(cmdAdd, cmdCheck, cmdDel, version.All, "hello")
}

// 调用ADD命令的时候，这个时候就自己来
func cmdAdd(args *skel.CmdArgs) error {
	// 日志输出
	print("cmd add inter")

	// 获取配置文件，客户端调用的时候，会将配置文件通过stdin输入进来。
	config := &types.NetConf{}
	err := json.Unmarshal(args.StdinData, config)
	if err != nil {
		return err
	}

	ret := current.Result{
		CNIVersion: config.CNIVersion,
	}
	// 返回结果，其实这里就是通过stdout输出，不同的CNI版本有不同的输出
	return ret.Print()
}

func cmdCheck(args *skel.CmdArgs) error {
	return nil
}

func cmdDel(args *skel.CmdArgs) error {
	return nil
}
```



## 手动调用CNI插件

[规范参考]

1. CNI规范是给namespace配置网络的
2. 所以可以直接创建不同的namespace，来模拟。因为容器最终运行也是不同的namespace，最终给namespace配置网络

```
1. 下载CNI插件
2. 配置CNI
3. 运行插件


{
    "name":"lab-br0",
    "type":"bridge",
    "bridge":"lab-br0",
    "isGateway":true,
    "ipMasq":true,
    "ipam":{
        "type":"host-local",
        "subnet":"10.15.10.0/24"
    },
    "routes":[
        {
            "dst":"0.0.0.0/0"
        }
    ],
    "rangeStart":"10.15.10.100",
    "rangeEnd":"10.15.10.200",
    "gateway":"10.15.10.99"
}

CNI_COMMAND=ADD CNI_CONTAINERID=lab-ns CNI_NETNS=/var/run/netns/lab-ns CNI_IFNAME=eth0 CNI_PATH=`pwd` ./bridge <../conf/lab-br0.conf
```


## k8s网络

1. 创建容器
2. kubelet通过CNI配置pause网络
3. POD加入pause namespace

## 参考

- [参考资料]
- [规范参考]
- [CNI]

[规范参考]: https://www.cni.dev/docs/
[参考资料]: https://morningspace.github.io/tech/k8s-net-cni/
[CNI]: https://github.com/containernetworking/cni

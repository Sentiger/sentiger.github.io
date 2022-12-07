---
title: protoc-gen-go生成go代码
order: 1
category:
  - grpc
---

## protoc命令

通过`protoc`和插件`protoc-gen-go`可以将`.proto`文件编译成`go`代码。下面介绍一下一些编译参数

**项目路径**

```
➜  grpc tree
.
├── go.mod
├── go.sum
├── server.go
└── service
    └── greeter.proto
```

**protobuf示例文件**

```protobuf
syntax = "proto3";

// 定义go包路径，规定至少有一个.或者/，所以一般都定义go.mod中的项目为前缀. 或者可以手动在命令行中指定
option go_package = "grpc/service";

package service;  // 这个会在生成的代码注释会以这个包作为包名

service Greeter {
  rpc SayHello(HelloRequest) returns(HelloReply){}
}

message HelloRequest{
  string name = 1;
}

message HelloReply {
  string message = 1;
}
```

**编译**

```
# 生成代码，如果生成其他代码则--java_out 等
protorc --go_out [options]  

options

# 定义protobuf文件的路径。默认是当前终端下的路径
--proto_path=service

```

**编译后生成的路径**

绝对路径

```
# 默认选项
--go_opt=path=import

# go_package
option go_package = "grpc/service";

# 编译
protoc --proto_path=./  --go_out=./ --go_opt=paths=import service/greeter.proto

# 生成结果
.
├── go.mod
├── go.sum
├── grpc    # 直接会生成go_package目录下的路径
│   └── service
│       └── greeter.pb.go
├── server.go
└── service
    └── greeter.proto
```

**相对路径**

生成与定义的protobuf相对路径

```
--go_opt=path=source_relative

# go_package
option go_package = "grpc/service";

# 编译
protoc --proto_path=./  --go_out=./ --go_opt=paths=source_relative ./service/greeter.proto

# 生成结果
.
├── go.mod
├── go.sum
├── server.go
└── service
    ├── greeter.pb.go  # 命令中最后指定的protobuf路径是./service/， 所以也会生成到这个下面。这个不会和--proto_path一起组合，例如下面这种定义
    └── greeter.proto
    
--------
# 编译
protoc --proto_path=./service  --go_out=./ --go_opt=paths=source_relative greeter.proto 

# 生成结果
.
├── go.mod
├── go.sum
├── greeter.pb.go  # 此时生成到了根路径下
├── server.go
└── service
    └── greeter.proto
    
```

**module**

paths=import的时候会生成go_package中定义的目录，如果只是想其中的后面一部分可以这样定义

```
# 编译
protoc --proto_path=./service  --go_out=./ --go_opt=module=grpc greeter.proto

# 生成结果
.
├── go.mod
├── go.sum
├── server.go
└── service
    ├── greeter.pb.go  # 本来默认import会生成grpc/service目录，但是使用了module，截取了module中的前缀
    └── greeter.proto
```

### 覆盖go_package

有时候在命令中，或一些第三方系统中，编译的时候，自定义go_package路径
```
# 编译
protoc --proto_path=./  --go_out=./ --go_opt=Mservice/greeter.proto=aa.com/service  service/greeter.proto

使用--go_opt=M源文件名=替换的go_package路径

注意：可以使用go_opt=paths=import/module/source_relative等参数一起用


# 生成结果
.
├── aa.com
│   └── service
│       └── greeter.pb.go
├── go.mod
├── go.sum
├── server.go
└── service
    └── greeter.proto
    
# 注意：
```
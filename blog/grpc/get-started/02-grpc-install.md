---
title: grpc插件安装
order: 1
category:
  - grpc
---

`proto-gen-go`不会生成方法，只会生成`message`，通过`grpc`插件可以生成对应的`grpc`方法: [安装地址]

## 安装

```shell
# 安装
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

# 会将protoc-gen-go-grpc安装到gobin目录下，如果没有，就加上环境变量就行
➜  sentiger.github.io git:(master) ✗ whereis protoc-gen-go-grpc 
protoc-gen-go-grpc: /Users/qi/go/sdk/go1.17.12/bin/protoc-gen-go-gr

```

## 测试

**基础代码结构**

```
├── go.mod
├── go.sum
├── server.go
└── service
    ├── helloworld.proto
```

**定义protobuf文件**

```protobuf
syntax = "proto3";

option go_package = "grpc/service";

package service;

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}

service Greeter{
  rpc SayHello(HelloRequest) returns (HelloReply) {}
}
```

**使用命令生成对应的go代码**

```shell
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative helloworld.proto 
```

**生成代码结构**

```
├── go.mod
├── go.sum
├── server.go
└── service
    ├── helloworld.pb.go
    ├── helloworld.proto
    └── helloworld_grpc.pb.go
```

**生成grpc服务**

::: code-tabs#language

@tab 服务端

```go
package main

import (
	"context"
	"google.golang.org/grpc"
	"grpc/service"
	"log"
	"net"
)

type server struct {
	service.UnimplementedGreeterServer
}

func (s *server) SayHello(ctx context.Context, req *service.HelloRequest) (*service.HelloReply, error) {
	return &service.HelloReply{Message: "回复消息"}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":8088")
	if err != nil {
		log.Fatal(err)
	}
	s := grpc.NewServer()
	service.RegisterGreeterServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
```

@tab 客户端

```go
package main

import (
	"context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"grpc/service"
	"log"
	"time"
)

func main() {
	conn, err := grpc.Dial("127.0.0.1:8088", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	c := service.NewGreeterClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	r, err := c.SayHello(ctx, &service.HelloRequest{Name: "你好"})
	if err != nil {
		log.Fatalf("could not greet: %v", err)
	}
	log.Printf("Greeting: %s", r.GetMessage())
}
```
:::


[安装地址]: https://grpc.io/docs/languages/go/quickstart/






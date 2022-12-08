---
title: protoc-gen-go生成go代码
order: 1
category:
  - grpc
---

下面介绍的都是参考`proto3`的

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

## protobuf定义

### 编译规则

**message名字编译规则**

`protobuf`编译是按照驼峰法进行编译生成`go`中的结构体，且是能导出的。例如下面：

```protobuf
syntax = "proto3";

message FooA{}    // struct FooA{}
message foo_b{}   // struct FooB{}
message foo_C{}   // struct Foo_C{}
message Foo_d{}   // struct FooD{}
message Foo_E{}   // struct Foo_E{}

// 编译后规则
// 1. 就是根据驼峰法进行转换的
// 2. 首写字母不管是什么变大写
// 3. 下划线后面的小写字母变大写，然后去掉前面的下划线
// 4. 下划线后面是大写字母，则下划线不变，大写字母也不变
// 5. 总结：符合驼峰法变化就是：前面下划线去掉，然后后面字母大写，否则不给转换


//针对于嵌套，其实也是定义了两个结构体 ，只是加了些前缀：会将父级别和当前的以下划线进行拼接，然后使用驼峰法进行转换

message Foo {  // Foo->Foo->struct Foo{}
  message Bar{} // Foo_Bar->Foo_Bar->struct Foo_Bar{}
}

message foo {  // foo ->Foo->struct Foo{}
  message bar{} // foo_bar->FooBar->struct FooBar{}
}

```

**field名字编译规则**

也是和上面message一样遵循驼峰法编译转换。

**总结**

一般Message都是定义为驼峰法，field都是小写字母+下划线

## 字段

`protobuf`支持常见的`string`,`int`,`bool`,`bytes`和一些自定义类型以及一些高级`oneof`,`enum`,和扩展`any`等

### 基本类型

```
message Gen {
  int32 age = 1;  // int有很多类型，int32,64以及无符号的等
  string name = 2;
  bool home = 3;
  bytes avatar = 4;
}

type Gen struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Age    int32  `protobuf:"varint,1,opt,name=age,proto3" json:"age,omitempty"` // int有很多类型，int32,64以及无符号的等
	Name   string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Home   bool   `protobuf:"varint,3,opt,name=home,proto3" json:"home,omitempty"`
	Avatar []byte `protobuf:"bytes,4,opt,name=avatar,proto3" json:"avatar,omitempty"`
}
```

### 自定义类型

```
message Info {
  string name = 1;
}
message UserDesign {
  int32 age = 1;
  Info info = 2;
}

type Info struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

type UserDesign struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Age  int32 `protobuf:"varint,1,opt,name=age,proto3" json:"age,omitempty"`
	Info *Info `protobuf:"bytes,2,opt,name=info,proto3" json:"info,omitempty"`
}

```

### 数组/切片

在字段前面使用`repeated`进行修饰

```
message Hobby {
  repeated string name = 1;
}

type Hobby struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name []string `protobuf:"bytes,1,rep,name=name,proto3" json:"name,omitempty"`
}
```

### map

支持map定义

```
message Hobby {
  map<string, int32> user = 1;
}

type Hobby struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	User map[string]int32 `protobuf:"bytes,1,rep,name=user,proto3" json:"user,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"varint,2,opt,name=value,proto3"`
}
```

### enum

枚举其实就是定义一系列常量，然后这些常量以更加语义的形式表示。在格式上没有特别要求，其实也是一个int32类型

```
enum Corpus {
  UNIVERSAL = 0;
  WEB = 1;
}
message SearchRequest {
  Corpus corpus = 1;
}

// 其实就是一个int32类型
type Corpus int32

type SearchRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Corpus Corpus `protobuf:"varint,1,opt,name=corpus,proto3,enum=service.Corpus" json:"corpus,omitempty"`
}

// 生成常量
const (
	Corpus_UNIVERSAL Corpus = 0
	Corpus_WEB       Corpus = 1
)

// 而且会生成常量和语言内容的关联关系
var (
	Corpus_name = map[int32]string{
		0: "UNIVERSAL",
		1: "WEB",
	}
	Corpus_value = map[string]int32{
		"UNIVERSAL": 0,
		"WEB":       1,
	}
)
```

### oneof

这个也是经常会用到的，例如在进行传输数据的时候，可能是两种类型（不确定是int,还是string），所以一般`go`中就是定义接口来实现

```
message Profile {
  string name = 1;
  oneof avatar {  // 传递头像的时候，可能是一个字符串，也可能是一个二进制数
    string image_url = 2;
    bytes image_data = 3;
  }
}

// 所以编译的时候，会生成image_url,image_data结构体，来存放不值。然后Avatar 就是定义成一个接口，然后image_url,image_data结构体都实现这个接口
// 接收端在接收数据的时候，可以根据断言匹配，做不同的操作Avatar.(*ImageUrl)

type Profile struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Types that are assignable to Avatar:
	//	*Profile_ImageUrl
	//	*Profile_ImageData
	Avatar isProfile_Avatar `protobuf_oneof:"avatar"`
}
```


### any

```
import "google/protobuf/any.proto";

message A {
  string message = 1;
  google.protobuf.Any details = 2;
}

message User {
  string  name = 1;
}

a, _ := anypb.New(&service.User{Name: "xx"})
t := service.A{
    Message: "33",
    Details: a,
}
```




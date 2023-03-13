---
title: buf工具
order: 1
category:
  - grpc
---

在管理`protobuf`的时候因为各种依赖或者路径问题，还有各种命令参数显得格外复杂，像各种语言都有包管理工具，`protobuf`也有对应的管理工具`buf`。而且能帮我们进行规范`protobuf`的编写


## 创建buf目录

在定义`protobuf`文件的时候，一般都是会创建一个目录，这个里面都是存放的`protobuf`接口文件。当第三方需要调用的时候，都可以直接下载该目录进行生成对应的语言文件。
`buf`工具帮我们可以快速的管理这些文件。

**buf.yaml**

项目进行初始化的时候，`buf mod init`会生成该文件，里面就是buf的配置，包括校验，打包，生成等一系列都在该文件中配置。具体参见文档[buf-cli]


## 安装依赖

对于已经提交到`buf.build`中的，可以直接进行远程依赖安装。

```
buf.yaml

version: v1
name: buf.build/sentiger/test # 可以推送远程buf仓库
deps:
  - buf.build/googleapis/googleapis  # 安装依赖，默认在~/.cache/buf/v1/module/data/buf.build 目录下。也可以指定提交的版本:xxx
breaking:
  use:
    - FILE
lint: # 检测格式
  use: # 使用规则
    - DEFAULT
  ignore: # 忽略哪些文件检测可以直接被忽略。 buf lint proto --error-format=config-ignore-yaml 可以使用这个命令将错误的忽略格式打印出来

```

**安装依赖**

```
buf mod update

1. 会在当前目录下生成`buf.lock`这个就是安装的lock
2. 依赖默认会安装到~/.cache/buf/v1/module/data/buf.build 目录下
```

**提交到buf.build**

提交注意：如果是远程有依赖，则需要将依赖提交到远程[bsr]
```
buf push
```


## 工程实战

[buf-tour]

创建一个`news`项目，并将接口`protobuf`文件提交到`buf.build`中，另一个项目`goods`会引入`news`里面的定义的结构，暂时不考虑`grpc`.

```
├── author
│   └── v1
│       └── author.proto
├── buf.md      # readme
├── buf.yaml    # 项目配置
└── category
    └── v1
        └── category.proto
```

提交

```
buf push
```

引入news项目

```
buf mod update
buf build


```


[buf-cli]: https://docs.buf.build/tutorials/getting-started-with-buf-cli
[bsr]: https://docs.buf.build/tutorials/getting-started-with-bsr
[buf-tour]: https://github.com/Sentiger/buf-tour





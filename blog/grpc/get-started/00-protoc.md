---
title: protoc命令
order: 0
category:
  - grpc
---

使用protoc命令的时候，有很多参数，接下来具体介绍下参数的作用以及使用场景

## 命令帮助

```
Usage: protoc [OPTION] PROTO_FILES
Parse PROTO_FILES and generate output based on the options given:
  -IPATH, --proto_path=PATH   指定protoc定义的源文件目录位置，会在这个目录下进行查找，也就是protobuf根路径，可以指定多个，特别对于import的时候，会在这个目录下开始查找。可以多个参数指定多个，或者一个参数后面加:指定多个路径
  --encode=MESSAGE_TYPE       Read a text-format message of the given type
                              from standard input and write it in binary
                              to standard output.  The message type must
                              be defined in PROTO_FILES or their imports.
  --deterministic_output      When using --encode, ensure map fields are
                              deterministically ordered. Note that this order
                              is not canonical, and changes across builds or
                              releases of protoc.
  --decode=MESSAGE_TYPE       Read a binary message of the given type from
                              standard input and write it in text format
                              to standard output.  The message type must
                              be defined in PROTO_FILES or their imports.
  --decode_raw                Read an arbitrary protocol message from
                              standard input and write the raw tag/value
                              pairs in text format to standard output.  No
                              PROTO_FILES should be given when using this
                              flag.
  --descriptor_set_in=FILES   Specifies a delimited list of FILES
                              each containing a FileDescriptorSet (a
                              protocol buffer defined in descriptor.proto).
                              The FileDescriptor for each of the PROTO_FILES
                              provided will be loaded from these
                              FileDescriptorSets. If a FileDescriptor
                              appears multiple times, the first occurrence
                              will be used.
  -oFILE,                     Writes a FileDescriptorSet (a protocol buffer,
    --descriptor_set_out=FILE defined in descriptor.proto) containing all of
                              the input files to FILE.
  --include_imports           When using --descriptor_set_out, also include
                              all dependencies of the input files in the
                              set, so that the set is self-contained.
  --include_source_info       When using --descriptor_set_out, do not strip
                              SourceCodeInfo from the FileDescriptorProto.
                              This results in vastly larger descriptors that
                              include information about the original
                              location of each decl in the source file as
                              well as surrounding comments.
  --dependency_out=FILE       Write a dependency output file in the format
                              expected by make. This writes the transitive
                              set of input file paths to FILE
  --error_format=FORMAT       Set the format in which to print errors.
                              FORMAT may be 'gcc' (the default) or 'msvs'
                              (Microsoft Visual Studio format).
  --fatal_warnings            Make warnings be fatal (similar to -Werr in
                              gcc). This flag will make protoc return
                              with a non-zero exit code if any warnings
                              are generated.
  --print_free_field_numbers  Print the free field numbers of the messages
                              defined in the given proto files. Groups share
                              the same field number space with the parent
                              message. Extension ranges are counted as
                              occupied fields numbers.
  --plugin=EXECUTABLE         Specifies a plugin executable to use.
                              Normally, protoc searches the PATH for
                              plugins, but you may specify additional
                              executables not in the path using this flag.
                              Additionally, EXECUTABLE may be of the form
                              NAME=PATH, in which case the given plugin name
                              is mapped to the given executable even if
                              the executable's own name differs.
  --cpp_out=OUT_DIR           这是生成c++的目录，因为protoc默认支持很多语言，对于不支持的，则需要安装对应的插件如protoc-gen-go
 
  @<filename>                 需要编译的protobuf文件，把对应的protobuf文件编程成对应的语言文件。这个不会影响--proto_path参数，这个可以指定proto_path/路径或者直接是绝对路径。如果要指定*.proto这种，则不能参考proto_path组合，需指定绝对路径
```


### --proto_path

这个参数是比较重要的，这个是指定`protobuf`根目录所在的目录，默认是当前`./`，这个的用途在于在`protobuf`中`import`的时候，会以这个目录开始查找，而且加载其他的外部文件，也要指定外部文件路径在哪、

```
├── author
│   └── author.proto
└── book
    ├── book.proto
    └── price.proto
2 directories, 3 files


syntax = "proto3";

// 声明protobuf中的包名
package book;

option go_package = "sgrpc/proto/book"; // 生成对应的go代码package取的是最后一个，然后如果别的项目要导入，则是直接使用这个import 包名

// 引入同目录下的protobuf文件（注意起始位置为proto_path的下层）
import "author/author.proto";   # 所以这里引入了author下的，所以在编译的时候一定指定了一个--proto_path=xx  xx下面就是author目录
import "book/price.proto";
import "google/protobuf/timestamp.proto";
import "user/user.proto";

message Book {
  string title = 1;
  author.Info authorInfo = 2;  // 需要带package前缀
  Price price = 3;  // 同目录下无需加包前缀
  google.protobuf.Timestamp date = 4; // 引入google中的扩展
  user.User user = 5;
}
```

### go_opt

```makefile
PROJECT="sgrpc"

.PHONY: pb

# 使用source_relative，则是会编译好的go文件的目录结构和pbfile源文件的目录结构一致
pb_path_relative:
	protoc -I=./pbfile \
    --go_out=./proto \
    --go_opt=paths=source_relative \
    book/book.proto author/author.proto

# 使用import，则编译好的目录是完全和go_package的目录结构一致，这个时候一般和--go_opt=module一起使用，去除前缀
pb_path_import:
	rm -rf proto
	protoc -I=./pbfile:./pb \
    --go_out=./ \
    --go_opt=paths=import \
    --go_opt=module=sgrpc \
    ./pbfile/book/*.proto ./pbfile/author/*.proto	# 注意使用*匹配的时候，这里的路径一定要加全，而不能使用proto_path相对位置

pb_path_other:
	protoc -I=./pbfile:./pb \
        --go_out=./ \
        --go_opt=paths=import \
        --go_opt=module=sgrpc \
        ./pbfile/book/*.proto ./pbfile/author/*.proto
```



---
title: string
order: 20
date: 2022-12-13
category:
  - go
---

计算机就是用来做计算的，内存用来存储数据的，所谓编程就是来操作这两类的，但是我们都是通过高级语言来简化这些操作，所以我们只要理解这些底层，就会更加能理解。

## 字符串

在计算机中存储的只有0和1，能存储字符串就是存储一个个0和1，然后按照一定的规则进行编码和解码。就形成了字符串。在`go`中存储字符串是这样的：
字符串的开始地址位置，然后从这个地址后多少位。`C`语言中是字符串以`\0`结尾，所以具体如何定义都没有对错，只要能正确表示就行。

go语言中的字符串结构

```
type string struct {
    addr unsafe.Point // 在内存中的起始位置
    len int64   // 字符串的长度（字节为单位）。就是从addr开始的位置，取n个字节。所以字符串最大是2^64字节长度？
}
```

### 编码

计算机只认识0和1，那么字母，文字是如何表示呢？ 其实也很简单，就是制定规范，把每个字符都定义一个编码，然后对照编码表进行操作。
例如a就是用97表示。收录最全的就是`unicode`字符集。

这里存在一个问题，字符肯定很多，那么到底用多少个字节去表示一个字符呢？假设4个字节，那么超过四个字节的新字符串那又如何表示。如果用
定长的，也会存在一个问题，那就是占用很大的存储空间。所以针对这个问题，就有了编码算法，例如`utf-8`具体如何编码不做具体介绍，可以看文档，比较简单。

## 字符串核心

go中的字符串在内存中被分配到只读区域，所以不能进行字符串的内容修改，下面从底层来了解下字符串以及go中操作内存。

**字符串内存结构**

```
type string struct {
    addr unsafe.Point // 在内存中的起始位置
    len int64   // 字符串的长度（字节为单位）。就是从addr开始的位置，取n个字节。所以字符串最大是2^64字节长度？
}
```

**字符串字节转换**

```go
func main() {

	var ss string = "golang 你好"
	// len获取的是字节数，go采用utf-8编码的
	fmt.Println(len(ss)) // 字节数

	// 字符串底层就是addr起始位置的数组，直接使用range遍历的时候，会给我们自动按照utf-8进行解码，直接就是对应的字符的unicode
	for k, v := range ss {
		fmt.Printf("index=%v,value=%v\n", k, v)
	}
	fmt.Println("------------------------------------")
	// 使用index直接访问索引内容，则返回的是对应的1字节地址里面的内容
	for i := 0; i < len(ss); i++ {
		fmt.Printf("index=%v,value=%v\n", i, ss[i])
	}

	// 对于产品需求限制字符串字符个数如何处理呢？肯定就是解码后的，而不是直接使用len获取
	ssB := []rune(ss) // []int32(ss)
	fmt.Println("占用字符个数", len(ssB))
}
```

## unsafe验证字符串底层

```go
package main

import (
	"fmt"
	"unsafe"
)

// 定义和string一样的内存格式，最终我们使用这个来操作字符串
type mystr struct {
	strbuf unsafe.Pointer
	strlen int64
}

func printmemory(p uintptr, size int) {
	fmt.Printf("[0x%16x:%2d] =", p, size)

	for i := 0; i < size; i++ {
		// 将地址转换为万能指针
		p1 := unsafe.Pointer(p + uintptr(i))
		// 然后将万能指针内容取1字节。这个和汇编中的mov movb这种一样，知道了起始位置，然后取多长的内容。go语言更加简单方便，不仅仅取出内容，还转换成对应的类型
		p2 := (*byte)(unsafe.Pointer(p1))
		fmt.Printf(" %x", *p2)
	}
	fmt.Printf("\n")
}
func main() {
	var ss string = "12345六七"

	fmt.Printf("string=%v\n", ss)
	// 字符串内容占用字节数
	fmt.Printf("length=%v\n", len(ss))
	// 字符串内的字符个数
	fmt.Printf("char number=%v\n", len([]rune(ss)))
	// 字符串类型所占用的大小
	fmt.Printf("size=%v\n", unsafe.Sizeof(ss))
	// 字符串ss的地址
	fmt.Printf("address=%v\n", &ss)

	// 将ss转为万能指针类型
	ptr := unsafe.Pointer(&ss)
	// 将万能指针转换为可以做计算的指针整型，说白了其实也是一个整型，因为做运算就要整型
	ptr1 := uintptr(ptr)
	// 这是一个打印内存的结构，看看string里面到底是什么。16是字符串类型占16字节，8字节指针，8字节字符串长度
	printmemory(ptr1, 16)

	// 将万能指针转换为自定义mystr指针中。然后按照mystr的结构进行内存内容解码。这里不需要我们手动取8字节放strbuf中，然后再取8字节放入strlen中
	ptr2 := (*mystr)(ptr)
	fmt.Printf("mystr.strbuf=%x\n", ptr2.strbuf) // 这里就可以打印字符串指向的字符串存储的起始位置，其实这里打印的内容和printmemory打印的地址一样
	printmemory(uintptr(ptr2.strbuf), len(ss)+1)

	// 现在假设想将mystr类型当做string类型操作，总不能自己去写方法，既然知道结构和string一样，所以转换成string来操作就行
	var xx *string             // 定义字符串指针
	hah := unsafe.Pointer(xx)  // 将字符串指针转换为万能指针
	hah = unsafe.Pointer(ptr2) // 将万能指针赋值为mystr指针，需要用万能指针转换一次
	xx = (*string)(hah)        // 将万能指针转换为string类型指针
	fmt.Println(*xx)           // 获取的就是内容

	ptr2.strlen = 6 // 我们知道字符串类型后8个字节是字符串长度，我们手动修改下这个长度，让字符串读取的时候，就只会读取对应的长度，这里结果肯定会不完整12345�
	fmt.Println(*xx)

	// 字符串数组起始位置
	ff := (*byte)(ptr2.strbuf)
	//*ff = 32 // 这里会报错，因为字符串的底层数组被分配在内存的只读区域，操作内存的方式就是这样的形式
	fmt.Println(string(*ff))

}
```





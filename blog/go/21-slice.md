---
title: slice
order: 21
date: 2022-12-13
category:
  - go
---

切片对于数组的扩展，在数组的基础上能扩充很多方法，下面介绍下切片的底层结构：

**底层类型**

```go
type myslice struct {
	data unsafe.Pointer // *int32/int
	len  int
	cap  int
}
```

**使用指针验证**


```go
package main

import (
	"fmt"
	"unsafe"
)

type myslice struct {
	data unsafe.Pointer // *int32/int
	len  int
	cap  int
}

func main() {
	var s []int64
	s = make([]int64, 10, 10)

	// 定义类型
	mys := new(myslice)

	// 1. 将自定义类型变量转换为万能指针
	mysp := unsafe.Pointer(mys)

	// 2. 将万能指针赋值
	mysp = unsafe.Pointer(&s)
	mys = (*myslice)(mysp)

	// 可以进行自定义指针类型修改
	ss := (*int64)(mys.data)
	*ss = 300
	fmt.Println(s)
	fmt.Println(&s, mys)

	// 扩容规则

}
```

## slice扩容规则

slice底层是一个个已经分配好的数组。已经存在的数组里面操作。使用的时候注意要看看多个切片是否共用的同一个底层数组
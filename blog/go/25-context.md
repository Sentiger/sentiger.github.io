---
title: Context使用
order: 25
date: 2023-01-30
category:

- go

---

## 介绍

`context`包其实很简单，主要是用来控制多个协程之间通信的，协程之间通信都是使用`channel`但是`channel`
一层层传递都比较麻烦，`context`就是用来控制协程关闭，超时，传递参数的。

下面是`context`的几个基本用法示例

## 单个任务超时

当有任务请求的时候，一般会设置超时时间，时间过了自然就返回。但是此时任务子协程仍然没有退出（例如是一个计算等），但是最终肯定是会退出的，只是在业务退出的时候，这个协程没有退出而已，占用一些资源。

```go
package main

import (
	"context"
	"fmt"
	"time"
)

func main() {

	// 构建一个自动超时的context
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(time.Second*5))

	defer cancel()

	resChan := compute()
	select {
	case <-resChan:
		fmt.Println("执行完任务了")
		return
	case <-ctx.Done():
		fmt.Println("超时了，即将结束")
		return
	}
}

// 单个超时任务（这个协程最终是能执行完的，只是在设置超时之后该协程还在，但是最终是能终止的），例如计算
func compute() <-chan struct{} {
	resChan := make(chan struct{}, 1)
	go func(ch chan struct{}) {
		fmt.Println("执行任务中........")
		time.Sleep(time.Second * 20)
		resChan <- struct{}{}
		fmt.Println("执行完request")
	}(resChan)
	return resChan
}

```


## 通知定时任务取消

当开启一个定时任务协程的时候，此时协程如何被控制可以自动取消呢。可以使用context

```go
package main

import (
	"context"
	"fmt"
	"time"
)

func main() {

	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(time.Second*5))

	defer cancel()

	compute(ctx)
	
}

func compute(ctx context.Context) {
	for {
		fmt.Println("执行定时任务")
		select {
		case <-ctx.Done():
			fmt.Println("任务被取消了")
			return
		case <-time.After(time.Second): // 休眠一秒，没有使用time.Sleep
		}
	}
}

```



## 传递上下文值

```go
package main

import (
	"context"
	"net/http"
	"time"
)

// WithRequestId 使用装饰器模式进行修改数据
func WithRequestId(next http.Handler) http.HandlerFunc {
	return func(writer http.ResponseWriter, request *http.Request) {
		// 设置全局请求ID，WithValue每次都是一个新的context，可以层层嵌套，但是不建议多，因为是一个链表的形式，循环取值的
		ctx := context.WithValue(request.Context(), "request-id", time.Now().String())

		// 通过context进行传值
		request = request.WithContext(ctx)

		next.ServeHTTP(writer, request)
	}
}

func GetRequestID(ctx context.Context) string {
	return ctx.Value("request-id").(string)
}

func handler(w http.ResponseWriter, req *http.Request) {
	w.Write([]byte(GetRequestID(req.Context())))
}
func main() {
	http.ListenAndServe(":8089", WithRequestId(http.HandlerFunc(handler)))
}

```

## 防止协程泄露

```go
package main

import (
	"context"
	"fmt"
	"runtime"
	"time"
)

func main() {
	ctx, cancel := context.WithDeadline(context.Background(), time.Now().Add(time.Second*10))

	defer func() {
		cancel()
		time.Sleep(time.Second * 2)
		fmt.Println("协程数量", runtime.NumGoroutine())
	}()
	for n := range gen(ctx) {
		fmt.Println(n)
		if n == 5 {
			break
		}
	}

}

// 这个会一直循环，不会退出，会有协程泄露风险
//func gen() <-chan int {
//	ch := make(chan int)
//	go func() {
//		var n int
//		for {
//			ch <- n
//			n++
//			time.Sleep(time.Second)
//		}
//	}()
//	return ch
//}

func gen(ctx context.Context) <-chan int {
	ch := make(chan int)
	go func() {
		var n int
		for {
			select {
			case <-ctx.Done():
				close(ch)
				return
			case ch <- n:
				n++
				time.Sleep(time.Second)
			}
		}
	}()
	return ch
}

```

## 总结

- 当方法传递的时候如果有context，如果此时没有想到传什么可以传递`context.TODO()`其实这也是一个`emptyCtx`
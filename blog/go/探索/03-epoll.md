---
title: epoll
order: 3
date: 2022-10-20
category:
  - linux
  - go
tag:
  - linux
  - epoll
---

Linux内核提供Epoll系统调用，这里针对Go来做一个简单的认识。


```go
// +build linux

package syscall

/****************Socket****************/
func Socket(domain, typ, proto int) (fd int, err error)

func Bind(fd int, sa Sockaddr) (err error)

func Listen(s int, n int) (err error)

func Accept(fd int) (nfd int, sa Sockaddr, err error)

/****************Epoll****************/
// EpollCreate 创建一个Epoll对象，返回Epoll fd
func EpollCreate(size int) (fd int, err error)

func EpollCtl(epfd int, op int, fd int, event *EpollEvent) (err error)

func EpollWait(epfd int, events []EpollEvent, msec int) (n int, err error) 
```

**模拟epoll使用**

```

// 系统调用创建socket
fd := Socket()

epollFd := EpollCreate(1)

// 异步处理epoll，这里就是等待，然后有事件了，然后判断事件类型，做相应的处理
go func(){
	// 定义事件
    events := make([]syscall.EpollEvent, 100)
   for {
		//msec -1,会一直阻塞,直到有事件可以处理才会返回, n 事件个数
		n, err := syscall.EpollWait(e.epollFd, events, -1)
		if err != nil {
			return err
		}
		for i := 0; i < n; i++ {
			//先在map中是否有这个链接，这个是Accetp的时候添加到全局变量中的
			conn := e.GetConn(int(events[i].Fd))
			if conn == nil { //没有这个链接,忽略
				continue
			}
			if events[i].Events&syscall.EPOLLHUP == syscall.EPOLLHUP || events[i].Events&syscall.EPOLLERR == syscall.EPOLLERR {
				//断开||出错
				if err := e.CloseConn(int(events[i].Fd)); err != nil {
					return err
				}
			} else if events[i].Events == syscall.EPOLLIN {
				//可读事件
				conn.Read()
			}
		}
	}
}

// 监听请求
go func(){
	fd := Accept(fd)
	// 一旦有请求了，就将fd添加到epoll中
	syscall.EpollCtl(epollFd, syscall.EPOLL_CTL_ADD, fd, &syscall.EpollEvent{
		Events: syscall.EPOLLIN,
		Fd:     int32(fd),
		Pad:    0,
	})
}

```


## 总结

1. 创建epoll对象
2. 创建socket
3. 异步监听epoll事件
4. 死循环 socket等待有Accept连接了，然后向epoll中添加fd
5. 死循环处理epoll_wait，一旦有事件触发，会返回事件，然后可以取出里面的fd,去做socket处理。

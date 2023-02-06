---
title: 简单模拟list-watch机制
order: 101
date: 2023-02-06
category:
---

```go
package main

import (
	"fmt"
	"net/http"
)

var (
	listChan = make(chan string, 10)
	// 模拟通知多个客户端，这个有并发安全，这里仅仅是模拟
	clientMap = make(map[string]http.ResponseWriter)
)

func main() {
	go changeEvent()
	http.ListenAndServe(":8080", http.HandlerFunc(apiServer))
}

func apiServer(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Transfer-Encoding", "chunked")
	clientMap[r.RemoteAddr] = w
	defer func() {
		fmt.Println("删除客户端")
		delete(clientMap, r.RemoteAddr)
	}()

	fmt.Println(clientMap)
	for {
		// 这里是模拟controller，scheduler等服务监听，然后通chunk通知
		data := <-listChan
		for _, wr := range clientMap {
			if _, err := wr.Write([]byte(data)); err != nil {
				break
			}
			wr.(http.Flusher).Flush()
		}
	}
}

// 这里是模拟组件被更新
func changeEvent() {
	http.ListenAndServe(":8081", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		listChan <- "pod发生了变化\r\n"
	}))
}


```
---
title: HTTP协议
order: 5
category:
  - HTTP
  - Go
---

## 请求/响应头

### 分片传输

```go
package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
	"time"
)

func main() {
	// 这里运用了响应header头中的chunked，这样浏览器就知道是分片传输
	// 接下来就是正常构建http的头信息，主体信息，但是发送的时候，记得flush
	http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		// 写入header头信息，chunked浏览器就知道这个是分片传输
		writer.Header().Add("Transfer-Encoding", "chunked")
        // 浏览器应该如何展示内容
		writer.Header().Add("Content-Type", "text/html")
        // 返回响应码，200 浏览器就正常接收
		writer.WriteHeader(http.StatusOK)
        // 这里是让tcp即使没有足够内容也直接刷新到浏览器中。要不然是等到内容满的时候
		writer.(http.Flusher).Flush()
		for i := 1; i < 20; i++ {
			writer.Write([]byte("flush-" + strconv.Itoa(i) + "<br>"))
			writer.(http.Flusher).Flush()
			time.Sleep(time.Second)
		}
		writer.(http.Flusher).Flush()
	})
	fmt.Println("启动服务 8089")
	err := http.ListenAndServe(":8089", nil)
	if err != nil {
		log.Fatal("启动服务失败")
	}
}
```


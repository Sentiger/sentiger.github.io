---
title: go优雅参数option传递
order: 1
---

go在多可选参数中的编写优雅

**定义接口**

```go
package main

import "time"

type requestOption struct {
	timeout time.Duration
	data    string
	headers map[string]string
}

func defaultRequestOption() *requestOption {
	return &requestOption{
		timeout: 5 * time.Second,
		data:    "",
		headers: nil,
	}
}

type RequestOption interface {
	apply(option *requestOption)
}

type RequestOptionHandler func(option *requestOption)

func (handler RequestOptionHandler) apply(option *requestOption) {
	handler(option)
}

func WithTimeout(timeout time.Duration) RequestOption {
	return RequestOptionHandler(func(option *requestOption) {
		option.timeout = timeout
	})
}

func HttpRequest(method, url string, options ...RequestOption) {
	reqOpts := defaultRequestOption()

	for _, handler := range options {
		handler.apply(reqOpts)
	}
}
```


**使用方法**

```go
package main

import "time"

type requestOption struct {
	timeout time.Duration
	headers map[string]string
	data    string
}

func defaultRequestOption() *requestOption {
	return &requestOption{
		timeout: 5 * time.Second,
		headers: nil,
	}
}

type OptionHandler func(option *requestOption)

func WithTimeout(timeout time.Duration) OptionHandler {
	return func(option *requestOption) {
		option.timeout = timeout
	}
}

func HttpRequest(method string, url string, handlers ...OptionHandler) {
	reqOpts := defaultRequestOption()

	for _, handler := range handlers {
		handler(reqOpts)
	}
}
```

**使用结构体**


```go
package main

import (
	"net/http"
	"strings"
	"time"
)

type requestOption struct {
	timeout time.Duration
	data    string
	headers map[string]string
}

type Option struct {
	apply func(option *requestOption)
}

func defaultRequestOption() *requestOption {
	return &requestOption{
		timeout: time.Second * 5,
		data:    "",
		headers: nil,
	}
}

func WithTimeout(timeout time.Duration) *Option {
	return &Option{apply: func(option *requestOption) {
		option.timeout = timeout
	}}
}

func HttpRequest(method string, url string, options ...*Option) (*http.Request, error) {
	reqOpt := defaultRequestOption()

	for _, opt := range options {
		opt.apply(reqOpt)
	}

	req, err := http.NewRequest(method, url, strings.NewReader(reqOpt.data))
	if err != nil {
		return nil, err
	}

	for key, value := range reqOpt.headers {
		req.Header.Set(key, value)
	}

	return req, nil

}
```
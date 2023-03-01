import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.818b2f9d.js";const t={},i=e(`<p>Linux\u5185\u6838\u63D0\u4F9BEpoll\u7CFB\u7EDF\u8C03\u7528\uFF0C\u8FD9\u91CC\u9488\u5BF9Go\u6765\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u8BA4\u8BC6\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// +build linux</span>

<span class="token keyword">package</span> syscall

<span class="token comment">/****************Socket****************/</span>
<span class="token keyword">func</span> <span class="token function">Socket</span><span class="token punctuation">(</span>domain<span class="token punctuation">,</span> typ<span class="token punctuation">,</span> proto <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>fd <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Bind</span><span class="token punctuation">(</span>fd <span class="token builtin">int</span><span class="token punctuation">,</span> sa Sockaddr<span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Listen</span><span class="token punctuation">(</span>s <span class="token builtin">int</span><span class="token punctuation">,</span> n <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Accept</span><span class="token punctuation">(</span>fd <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>nfd <span class="token builtin">int</span><span class="token punctuation">,</span> sa Sockaddr<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token comment">/****************Epoll****************/</span>
<span class="token comment">// EpollCreate \u521B\u5EFA\u4E00\u4E2AEpoll\u5BF9\u8C61\uFF0C\u8FD4\u56DEEpoll fd</span>
<span class="token keyword">func</span> <span class="token function">EpollCreate</span><span class="token punctuation">(</span>size <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>fd <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">EpollCtl</span><span class="token punctuation">(</span>epfd <span class="token builtin">int</span><span class="token punctuation">,</span> op <span class="token builtin">int</span><span class="token punctuation">,</span> fd <span class="token builtin">int</span><span class="token punctuation">,</span> event <span class="token operator">*</span>EpollEvent<span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">EpollWait</span><span class="token punctuation">(</span>epfd <span class="token builtin">int</span><span class="token punctuation">,</span> events <span class="token punctuation">[</span><span class="token punctuation">]</span>EpollEvent<span class="token punctuation">,</span> msec <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6A21\u62DFepoll\u4F7F\u7528</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
// \u7CFB\u7EDF\u8C03\u7528\u521B\u5EFAsocket
fd := Socket()

epollFd := EpollCreate(1)

// \u5F02\u6B65\u5904\u7406epoll\uFF0C\u8FD9\u91CC\u5C31\u662F\u7B49\u5F85\uFF0C\u7136\u540E\u6709\u4E8B\u4EF6\u4E86\uFF0C\u7136\u540E\u5224\u65AD\u4E8B\u4EF6\u7C7B\u578B\uFF0C\u505A\u76F8\u5E94\u7684\u5904\u7406
go func(){
	// \u5B9A\u4E49\u4E8B\u4EF6
    events := make([]syscall.EpollEvent, 100)
   for {
		//msec -1,\u4F1A\u4E00\u76F4\u963B\u585E,\u76F4\u5230\u6709\u4E8B\u4EF6\u53EF\u4EE5\u5904\u7406\u624D\u4F1A\u8FD4\u56DE, n \u4E8B\u4EF6\u4E2A\u6570
		n, err := syscall.EpollWait(e.epollFd, events, -1)
		if err != nil {
			return err
		}
		for i := 0; i &lt; n; i++ {
			//\u5148\u5728map\u4E2D\u662F\u5426\u6709\u8FD9\u4E2A\u94FE\u63A5\uFF0C\u8FD9\u4E2A\u662FAccetp\u7684\u65F6\u5019\u6DFB\u52A0\u5230\u5168\u5C40\u53D8\u91CF\u4E2D\u7684
			conn := e.GetConn(int(events[i].Fd))
			if conn == nil { //\u6CA1\u6709\u8FD9\u4E2A\u94FE\u63A5,\u5FFD\u7565
				continue
			}
			if events[i].Events&amp;syscall.EPOLLHUP == syscall.EPOLLHUP || events[i].Events&amp;syscall.EPOLLERR == syscall.EPOLLERR {
				//\u65AD\u5F00||\u51FA\u9519
				if err := e.CloseConn(int(events[i].Fd)); err != nil {
					return err
				}
			} else if events[i].Events == syscall.EPOLLIN {
				//\u53EF\u8BFB\u4E8B\u4EF6
				conn.Read()
			}
		}
	}
}

// \u76D1\u542C\u8BF7\u6C42
go func(){
	fd := Accept(fd)
	// \u4E00\u65E6\u6709\u8BF7\u6C42\u4E86\uFF0C\u5C31\u5C06fd\u6DFB\u52A0\u5230epoll\u4E2D
	syscall.EpollCtl(epollFd, syscall.EPOLL_CTL_ADD, fd, &amp;syscall.EpollEvent{
		Events: syscall.EPOLLIN,
		Fd:     int32(fd),
		Pad:    0,
	})
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ol><li>\u521B\u5EFAepoll\u5BF9\u8C61</li><li>\u521B\u5EFAsocket</li><li>\u5F02\u6B65\u76D1\u542Cepoll\u4E8B\u4EF6</li><li>\u6B7B\u5FAA\u73AF socket\u7B49\u5F85\u6709Accept\u8FDE\u63A5\u4E86\uFF0C\u7136\u540E\u5411epoll\u4E2D\u6DFB\u52A0fd</li><li>\u6B7B\u5FAA\u73AF\u5904\u7406epoll_wait\uFF0C\u4E00\u65E6\u6709\u4E8B\u4EF6\u89E6\u53D1\uFF0C\u4F1A\u8FD4\u56DE\u4E8B\u4EF6\uFF0C\u7136\u540E\u53EF\u4EE5\u53D6\u51FA\u91CC\u9762\u7684fd,\u53BB\u505Asocket\u5904\u7406\u3002</li></ol>`,6),l=[i];function c(p,o){return s(),a("div",null,l)}var r=n(t,[["render",c],["__file","03-epoll.html.vue"]]);export{r as default};

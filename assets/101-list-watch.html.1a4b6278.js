import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.0613cd51.js";const p={},e=t(`<div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">(</span>
	listChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	<span class="token comment">// \u6A21\u62DF\u901A\u77E5\u591A\u4E2A\u5BA2\u6237\u7AEF\uFF0C\u8FD9\u4E2A\u6709\u5E76\u53D1\u5B89\u5168\uFF0C\u8FD9\u91CC\u4EC5\u4EC5\u662F\u6A21\u62DF</span>
	clientMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token function">changeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span><span class="token function">HandlerFunc</span><span class="token punctuation">(</span>apiServer<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">apiServer</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	w<span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;Transfer-Encoding&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;chunked&quot;</span><span class="token punctuation">)</span>
	clientMap<span class="token punctuation">[</span>r<span class="token punctuation">.</span>RemoteAddr<span class="token punctuation">]</span> <span class="token operator">=</span> w
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5220\u9664\u5BA2\u6237\u7AEF&quot;</span><span class="token punctuation">)</span>
		<span class="token function">delete</span><span class="token punctuation">(</span>clientMap<span class="token punctuation">,</span> r<span class="token punctuation">.</span>RemoteAddr<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>clientMap<span class="token punctuation">)</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u8FD9\u91CC\u662F\u6A21\u62DFcontroller\uFF0Cscheduler\u7B49\u670D\u52A1\u76D1\u542C\uFF0C\u7136\u540E\u901Achunk\u901A\u77E5</span>
		data <span class="token operator">:=</span> <span class="token operator">&lt;-</span>listChan
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> wr <span class="token operator">:=</span> <span class="token keyword">range</span> clientMap <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> wr<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
			wr<span class="token punctuation">.</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>Flusher<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD9\u91CC\u662F\u6A21\u62DF\u7EC4\u4EF6\u88AB\u66F4\u65B0</span>
<span class="token keyword">func</span> <span class="token function">changeEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8081&quot;</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span><span class="token function">HandlerFunc</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		listChan <span class="token operator">&lt;-</span> <span class="token string">&quot;pod\u53D1\u751F\u4E86\u53D8\u5316\\r\\n&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(i,u){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","101-list-watch.html.vue"]]);export{r as default};

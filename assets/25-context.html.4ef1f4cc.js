import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.870fac28.js";const p={},e=t(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p><code>context</code>\u5305\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u4E3B\u8981\u662F\u7528\u6765\u63A7\u5236\u591A\u4E2A\u534F\u7A0B\u4E4B\u95F4\u901A\u4FE1\u7684\uFF0C\u534F\u7A0B\u4E4B\u95F4\u901A\u4FE1\u90FD\u662F\u4F7F\u7528<code>channel</code>\u4F46\u662F<code>channel</code> \u4E00\u5C42\u5C42\u4F20\u9012\u90FD\u6BD4\u8F83\u9EBB\u70E6\uFF0C<code>context</code>\u5C31\u662F\u7528\u6765\u63A7\u5236\u534F\u7A0B\u5173\u95ED\uFF0C\u8D85\u65F6\uFF0C\u4F20\u9012\u53C2\u6570\u7684\u3002</p><p>\u4E0B\u9762\u662F<code>context</code>\u7684\u51E0\u4E2A\u57FA\u672C\u7528\u6CD5\u793A\u4F8B</p><h2 id="\u5355\u4E2A\u4EFB\u52A1\u8D85\u65F6" tabindex="-1"><a class="header-anchor" href="#\u5355\u4E2A\u4EFB\u52A1\u8D85\u65F6" aria-hidden="true">#</a> \u5355\u4E2A\u4EFB\u52A1\u8D85\u65F6</h2><p>\u5F53\u6709\u4EFB\u52A1\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u4E00\u822C\u4F1A\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\uFF0C\u65F6\u95F4\u8FC7\u4E86\u81EA\u7136\u5C31\u8FD4\u56DE\u3002\u4F46\u662F\u6B64\u65F6\u4EFB\u52A1\u5B50\u534F\u7A0B\u4ECD\u7136\u6CA1\u6709\u9000\u51FA\uFF08\u4F8B\u5982\u662F\u4E00\u4E2A\u8BA1\u7B97\u7B49\uFF09\uFF0C\u4F46\u662F\u6700\u7EC8\u80AF\u5B9A\u662F\u4F1A\u9000\u51FA\u7684\uFF0C\u53EA\u662F\u5728\u4E1A\u52A1\u9000\u51FA\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A\u534F\u7A0B\u6CA1\u6709\u9000\u51FA\u800C\u5DF2\uFF0C\u5360\u7528\u4E00\u4E9B\u8D44\u6E90\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">// \u6784\u5EFA\u4E00\u4E2A\u81EA\u52A8\u8D85\u65F6\u7684context</span>
	ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithDeadline</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token operator">*</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token keyword">defer</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	resChan <span class="token operator">:=</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>resChan<span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6267\u884C\u5B8C\u4EFB\u52A1\u4E86&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ctx<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D85\u65F6\u4E86\uFF0C\u5373\u5C06\u7ED3\u675F&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5355\u4E2A\u8D85\u65F6\u4EFB\u52A1\uFF08\u8FD9\u4E2A\u534F\u7A0B\u6700\u7EC8\u662F\u80FD\u6267\u884C\u5B8C\u7684\uFF0C\u53EA\u662F\u5728\u8BBE\u7F6E\u8D85\u65F6\u4E4B\u540E\u8BE5\u534F\u7A0B\u8FD8\u5728\uFF0C\u4F46\u662F\u6700\u7EC8\u662F\u80FD\u7EC8\u6B62\u7684\uFF09\uFF0C\u4F8B\u5982\u8BA1\u7B97</span>
<span class="token keyword">func</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>
	resChan <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6267\u884C\u4EFB\u52A1\u4E2D........&quot;</span><span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">20</span><span class="token punctuation">)</span>
		resChan <span class="token operator">&lt;-</span> <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6267\u884C\u5B8Crequest&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span>resChan<span class="token punctuation">)</span>
	<span class="token keyword">return</span> resChan
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u901A\u77E5\u5B9A\u65F6\u4EFB\u52A1\u53D6\u6D88" tabindex="-1"><a class="header-anchor" href="#\u901A\u77E5\u5B9A\u65F6\u4EFB\u52A1\u53D6\u6D88" aria-hidden="true">#</a> \u901A\u77E5\u5B9A\u65F6\u4EFB\u52A1\u53D6\u6D88</h2><p>\u5F53\u5F00\u542F\u4E00\u4E2A\u5B9A\u65F6\u4EFB\u52A1\u534F\u7A0B\u7684\u65F6\u5019\uFF0C\u6B64\u65F6\u534F\u7A0B\u5982\u4F55\u88AB\u63A7\u5236\u53EF\u4EE5\u81EA\u52A8\u53D6\u6D88\u5462\u3002\u53EF\u4EE5\u4F7F\u7528context</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithDeadline</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token operator">*</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token keyword">defer</span> <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token function">compute</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">compute</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6267\u884C\u5B9A\u65F6\u4EFB\u52A1&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ctx<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4EFB\u52A1\u88AB\u53D6\u6D88\u4E86&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>time<span class="token punctuation">.</span><span class="token function">After</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">// \u4F11\u7720\u4E00\u79D2\uFF0C\u6CA1\u6709\u4F7F\u7528time.Sleep</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F20\u9012\u4E0A\u4E0B\u6587\u503C" tabindex="-1"><a class="header-anchor" href="#\u4F20\u9012\u4E0A\u4E0B\u6587\u503C" aria-hidden="true">#</a> \u4F20\u9012\u4E0A\u4E0B\u6587\u503C</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// WithRequestId \u4F7F\u7528\u88C5\u9970\u5668\u6A21\u5F0F\u8FDB\u884C\u4FEE\u6539\u6570\u636E</span>
<span class="token keyword">func</span> <span class="token function">WithRequestId</span><span class="token punctuation">(</span>next http<span class="token punctuation">.</span>Handler<span class="token punctuation">)</span> http<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>writer http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> request <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u8BBE\u7F6E\u5168\u5C40\u8BF7\u6C42ID\uFF0CWithValue\u6BCF\u6B21\u90FD\u662F\u4E00\u4E2A\u65B0\u7684context\uFF0C\u53EF\u4EE5\u5C42\u5C42\u5D4C\u5957\uFF0C\u4F46\u662F\u4E0D\u5EFA\u8BAE\u591A\uFF0C\u56E0\u4E3A\u662F\u4E00\u4E2A\u94FE\u8868\u7684\u5F62\u5F0F\uFF0C\u5FAA\u73AF\u53D6\u503C\u7684</span>
		ctx <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithValue</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;request-id&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

		<span class="token comment">// \u901A\u8FC7context\u8FDB\u884C\u4F20\u503C</span>
		request <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">WithContext</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>

		next<span class="token punctuation">.</span><span class="token function">ServeHTTP</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> request<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetRequestID</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> ctx<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span><span class="token string">&quot;request-id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">handler</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	w<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token function">GetRequestID</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8089&quot;</span><span class="token punctuation">,</span> <span class="token function">WithRequestId</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">HandlerFunc</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9632\u6B62\u534F\u7A0B\u6CC4\u9732" tabindex="-1"><a class="header-anchor" href="#\u9632\u6B62\u534F\u7A0B\u6CC4\u9732" aria-hidden="true">#</a> \u9632\u6B62\u534F\u7A0B\u6CC4\u9732</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;runtime&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ctx<span class="token punctuation">,</span> cancel <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithDeadline</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u534F\u7A0B\u6570\u91CF&quot;</span><span class="token punctuation">,</span> runtime<span class="token punctuation">.</span><span class="token function">NumGoroutine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token function">gen</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
		<span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">5</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u8FD9\u4E2A\u4F1A\u4E00\u76F4\u5FAA\u73AF\uFF0C\u4E0D\u4F1A\u9000\u51FA\uFF0C\u4F1A\u6709\u534F\u7A0B\u6CC4\u9732\u98CE\u9669</span>
<span class="token comment">//func gen() &lt;-chan int {</span>
<span class="token comment">//	ch := make(chan int)</span>
<span class="token comment">//	go func() {</span>
<span class="token comment">//		var n int</span>
<span class="token comment">//		for {</span>
<span class="token comment">//			ch &lt;- n</span>
<span class="token comment">//			n++</span>
<span class="token comment">//			time.Sleep(time.Second)</span>
<span class="token comment">//		}</span>
<span class="token comment">//	}()</span>
<span class="token comment">//	return ch</span>
<span class="token comment">//}</span>

<span class="token keyword">func</span> <span class="token function">gen</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> n <span class="token builtin">int</span>
		<span class="token keyword">for</span> <span class="token punctuation">{</span>
			<span class="token keyword">select</span> <span class="token punctuation">{</span>
			<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ctx<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
				<span class="token function">close</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
				<span class="token keyword">return</span>
			<span class="token keyword">case</span> ch <span class="token operator">&lt;-</span> n<span class="token punctuation">:</span>
				n<span class="token operator">++</span>
				time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> ch
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li>\u5F53\u65B9\u6CD5\u4F20\u9012\u7684\u65F6\u5019\u5982\u679C\u6709context\uFF0C\u5982\u679C\u6B64\u65F6\u6CA1\u6709\u60F3\u5230\u4F20\u4EC0\u4E48\u53EF\u4EE5\u4F20\u9012<code>context.TODO()</code>\u5176\u5B9E\u8FD9\u4E5F\u662F\u4E00\u4E2A<code>emptyCtx</code></li></ul>`,15),c=[e];function o(i,u){return s(),a("div",null,c)}var d=n(p,[["render",o],["__file","25-context.html.vue"]]);export{d as default};

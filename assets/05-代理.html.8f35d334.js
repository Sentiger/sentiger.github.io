import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.f798e990.js";const p={},o=t(`<p>\u6B63\u5411\u4EE3\u7406\u5C31\u662F\u901A\u8FC7\u8BBE\u7F6E\u5BA2\u6237\u7AEF\u6765\u548C\u4EE3\u7406\u670D\u52A1\u5668\u4E4B\u95F4\u901A\u4FE1\uFF0C\u5BF9\u4E8E\u670D\u52A1\u7AEF\u6765\u8BF4\u662F\u900F\u660E\u7684\u3002\u4EE3\u7406\u670D\u52A1\u5668\u53EA\u8981\u77E5\u9053\u771F\u5B9E\u8BBF\u95EE\u7684\u5730\u5740\uFF0C\u7136\u540E\u5EFA\u7ACBtcp\u8FDE\u63A5\uFF0C\u7136\u540E\u76F4\u63A5\u8F6C\u53D1tcp\u7684\u6570\u636E\u6BB5\u5C31\u884C\u3002</p><p>\u8FD9\u91CC\u9488\u5BF9https\u7684\u65F6\u5019\u9700\u8981\u6709\u70B9\u6CE8\u610F\uFF1A\u56E0\u4E3Ahttps\u662F\u52A0\u5BC6\u7684\uFF0C\u6240\u4EE5\u9488\u5BF9\u4E0E\u8FD9\u4E2A\u4E00\u822C\u6709\u89C4\u5B9A\u4EE3\u7406\u8BBE\u7F6E\uFF0C\u5728\u4EE3\u7406\u5BA2\u6237\u7AEF\u53D1\u9001\u8FDE\u63A5\u7684\u65F6\u5019\uFF0C\u4F1A\u5148\u53D1\u9001\u4E00\u4E2Amethod\u4E3ACONNECT\u7684http\u5934\u3002</p><p>\u8FD9\u4E2A\u65F6\u5019\uFF0C\u4EE3\u7406\u670D\u52A1\u5C31\u76F4\u63A5Dail\u548C\u8FDC\u7A0B\u670D\u52A1\u5668\u5EFA\u7ACB\u4E00\u4E2Atcp\u8FDE\u63A5\u5C31\u884C\u4E86\uFF0C\u7136\u540E\u5C06\u4EA4\u6362\u4E0B\u53CC\u65B9\u7684tcp\u6570\u636E\u6BB5\u3002\u5C31\u5B8C\u6210\u4E86\u4EE3\u7406\u3002</p><p>\u771F\u6B63\u7406\u89E3\u8FD9\u4E2A\u5C31\u662F\uFF0Chttp\u662F\u5EFA\u7ACB\u5728tcp\u4E4B\u4E0A\u7684\uFF0C\u6240\u4EE5\u4EE3\u7406\u670D\u52A1\u5668\u53EA\u8981\u8F6C\u53D1\u4ED6\u4EEC\u4E4B\u95F4\u7684\u5185\u5BB9\u5C31\u884C\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bytes&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;io&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net&quot;</span>
	<span class="token string">&quot;net/url&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// tcp\u8FDE\u63A5\uFF0C\u76D1\u542C8080\u7AEF\u53E3</span>
	l<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u6B7B\u5FAA\u73AF\uFF0C\u6BCF\u5F53\u9047\u5230\u8FDE\u63A5\u65F6\uFF0C\u8C03\u7528handle</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		client<span class="token punctuation">,</span> err <span class="token operator">:=</span> l<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			log<span class="token punctuation">.</span><span class="token function">Panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">go</span> <span class="token function">handle</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">handle</span><span class="token punctuation">(</span>client net<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> client <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> client<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;remote addr: %v\\n&quot;</span><span class="token punctuation">,</span> client<span class="token punctuation">.</span><span class="token function">RemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// \u7528\u6765\u5B58\u653E\u5BA2\u6237\u7AEF\u6570\u636E\u7684\u7F13\u51B2\u533A</span>
	<span class="token keyword">var</span> b <span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token builtin">byte</span>
	<span class="token comment">//\u4ECE\u5BA2\u6237\u7AEF\u83B7\u53D6\u6570\u636E</span>
	n<span class="token punctuation">,</span> err <span class="token operator">:=</span> client<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> method<span class="token punctuation">,</span> URL<span class="token punctuation">,</span> address <span class="token builtin">string</span>
	<span class="token comment">// \u4ECE\u5BA2\u6237\u7AEF\u6570\u636E\u8BFB\u5165method\uFF0Curl</span>
	fmt<span class="token punctuation">.</span><span class="token function">Sscanf</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token punctuation">:</span>bytes<span class="token punctuation">.</span><span class="token function">IndexByte</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;%s%s&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>method<span class="token punctuation">,</span> <span class="token operator">&amp;</span>URL<span class="token punctuation">)</span>
	hostPortURL<span class="token punctuation">,</span> err <span class="token operator">:=</span> url<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>URL<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u5982\u679C\u65B9\u6CD5\u662FCONNECT\uFF0C\u5219\u4E3Ahttps\u534F\u8BAE</span>
	<span class="token keyword">if</span> method <span class="token operator">==</span> <span class="token string">&quot;CONNECT&quot;</span> <span class="token punctuation">{</span>
		address <span class="token operator">=</span> hostPortURL<span class="token punctuation">.</span>Scheme <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> hostPortURL<span class="token punctuation">.</span>Opaque
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//\u5426\u5219\u4E3Ahttp\u534F\u8BAE</span>
		address <span class="token operator">=</span> hostPortURL<span class="token punctuation">.</span>Host
		<span class="token comment">// \u5982\u679Chost\u4E0D\u5E26\u7AEF\u53E3\uFF0C\u5219\u9ED8\u8BA4\u4E3A80</span>
		<span class="token keyword">if</span> strings<span class="token punctuation">.</span><span class="token function">Index</span><span class="token punctuation">(</span>hostPortURL<span class="token punctuation">.</span>Host<span class="token punctuation">,</span> <span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span> <span class="token comment">//host\u4E0D\u5E26\u7AEF\u53E3\uFF0C \u9ED8\u8BA480</span>
			address <span class="token operator">=</span> hostPortURL<span class="token punctuation">.</span>Host <span class="token operator">+</span> <span class="token string">&quot;:80&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u83B7\u5F97\u4E86\u8BF7\u6C42\u7684host\u548Cport\uFF0C\u5411\u670D\u52A1\u7AEF\u53D1\u8D77tcp\u8FDE\u63A5</span>
	server<span class="token punctuation">,</span> err <span class="token operator">:=</span> net<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> address<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//\u5982\u679C\u4F7F\u7528https\u534F\u8BAE\uFF0C\u9700\u5148\u5411\u5BA2\u6237\u7AEF\u8868\u793A\u8FDE\u63A5\u5EFA\u7ACB\u5B8C\u6BD5</span>
	<span class="token keyword">if</span> method <span class="token operator">==</span> <span class="token string">&quot;CONNECT&quot;</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprint</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">&quot;HTTP/1.1 200 Connection established\\r\\n\\r\\n&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">//\u5982\u679C\u4F7F\u7528http\u534F\u8BAE\uFF0C\u9700\u5C06\u4ECE\u5BA2\u6237\u7AEF\u5F97\u5230\u7684http\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u670D\u52A1\u7AEF</span>
		server<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token punctuation">:</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u5C06\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u8F6C\u53D1\u81F3\u670D\u52A1\u7AEF\uFF0C\u5C06\u670D\u52A1\u7AEF\u7684\u54CD\u5E94\u8F6C\u53D1\u7ED9\u5BA2\u6237\u7AEF\u3002io.Copy\u4E3A\u963B\u585E\u51FD\u6570\uFF0C\u6587\u4EF6\u63CF\u8FF0\u7B26\u4E0D\u5173\u95ED\u5C31\u4E0D\u505C\u6B62</span>
	<span class="token keyword">go</span> io<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> client<span class="token punctuation">)</span>
	io<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> server<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),e=[o];function c(i,l){return s(),a("div",null,e)}var k=n(p,[["render",c],["__file","05-\u4EE3\u7406.html.vue"]]);export{k as default};

import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.f0d11e84.js";const p={},e=t(`<p>go\u5728\u591A\u53EF\u9009\u53C2\u6570\u4E2D\u7684\u7F16\u5199\u4F18\u96C5</p><p><strong>\u5B9A\u4E49\u63A5\u53E3</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;time&quot;</span>

<span class="token keyword">type</span> requestOption <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	timeout time<span class="token punctuation">.</span>Duration
	data    <span class="token builtin">string</span>
	headers <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">defaultRequestOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>requestOption <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>requestOption<span class="token punctuation">{</span>
		timeout<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
		data<span class="token punctuation">:</span>    <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		headers<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> RequestOption <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">apply</span><span class="token punctuation">(</span>option <span class="token operator">*</span>requestOption<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> RequestOptionHandler <span class="token keyword">func</span><span class="token punctuation">(</span>option <span class="token operator">*</span>requestOption<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>handler RequestOptionHandler<span class="token punctuation">)</span> <span class="token function">apply</span><span class="token punctuation">(</span>option <span class="token operator">*</span>requestOption<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">handler</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WithTimeout</span><span class="token punctuation">(</span>timeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> RequestOption <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">RequestOptionHandler</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>option <span class="token operator">*</span>requestOption<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		option<span class="token punctuation">.</span>timeout <span class="token operator">=</span> timeout
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">HttpRequest</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url <span class="token builtin">string</span><span class="token punctuation">,</span> options <span class="token operator">...</span>RequestOption<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	reqOpts <span class="token operator">:=</span> <span class="token function">defaultRequestOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> handler <span class="token operator">:=</span> <span class="token keyword">range</span> options <span class="token punctuation">{</span>
		handler<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>reqOpts<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u65B9\u6CD5</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;time&quot;</span>

<span class="token keyword">type</span> requestOption <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	timeout time<span class="token punctuation">.</span>Duration
	headers <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
	data    <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">defaultRequestOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>requestOption <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>requestOption<span class="token punctuation">{</span>
		timeout<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">,</span>
		headers<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> OptionHandler <span class="token keyword">func</span><span class="token punctuation">(</span>option <span class="token operator">*</span>requestOption<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">WithTimeout</span><span class="token punctuation">(</span>timeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> OptionHandler <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>option <span class="token operator">*</span>requestOption<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		option<span class="token punctuation">.</span>timeout <span class="token operator">=</span> timeout
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">HttpRequest</span><span class="token punctuation">(</span>method <span class="token builtin">string</span><span class="token punctuation">,</span> url <span class="token builtin">string</span><span class="token punctuation">,</span> handlers <span class="token operator">...</span>OptionHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	reqOpts <span class="token operator">:=</span> <span class="token function">defaultRequestOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> handler <span class="token operator">:=</span> <span class="token keyword">range</span> handlers <span class="token punctuation">{</span>
		<span class="token function">handler</span><span class="token punctuation">(</span>reqOpts<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u7ED3\u6784\u4F53</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;net/http&quot;</span>
	<span class="token string">&quot;strings&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> requestOption <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	timeout time<span class="token punctuation">.</span>Duration
	data    <span class="token builtin">string</span>
	headers <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Option <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	apply <span class="token keyword">func</span><span class="token punctuation">(</span>option <span class="token operator">*</span>requestOption<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">defaultRequestOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>requestOption <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>requestOption<span class="token punctuation">{</span>
		timeout<span class="token punctuation">:</span> time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">,</span>
		data<span class="token punctuation">:</span>    <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		headers<span class="token punctuation">:</span> <span class="token boolean">nil</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">WithTimeout</span><span class="token punctuation">(</span>timeout time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token operator">*</span>Option <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Option<span class="token punctuation">{</span>apply<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>option <span class="token operator">*</span>requestOption<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		option<span class="token punctuation">.</span>timeout <span class="token operator">=</span> timeout
	<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">HttpRequest</span><span class="token punctuation">(</span>method <span class="token builtin">string</span><span class="token punctuation">,</span> url <span class="token builtin">string</span><span class="token punctuation">,</span> options <span class="token operator">...</span><span class="token operator">*</span>Option<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	reqOpt <span class="token operator">:=</span> <span class="token function">defaultRequestOption</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> opt <span class="token operator">:=</span> <span class="token keyword">range</span> options <span class="token punctuation">{</span>
		opt<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>reqOpt<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	req<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>reqOpt<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> reqOpt<span class="token punctuation">.</span>headers <span class="token punctuation">{</span>
		req<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> req<span class="token punctuation">,</span> <span class="token boolean">nil</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function i(c,l){return s(),a("div",null,o)}var k=n(p,[["render",i],["__file","01-option.html.vue"]]);export{k as default};

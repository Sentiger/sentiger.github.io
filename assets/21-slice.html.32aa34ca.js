import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.50b1912d.js";const e={},p=t(`<p>\u5207\u7247\u5BF9\u4E8E\u6570\u7EC4\u7684\u6269\u5C55\uFF0C\u5728\u6570\u7EC4\u7684\u57FA\u7840\u4E0A\u80FD\u6269\u5145\u5F88\u591A\u65B9\u6CD5\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u4E0B\u5207\u7247\u7684\u5E95\u5C42\u7ED3\u6784\uFF1A</p><p><strong>\u5E95\u5C42\u7C7B\u578B</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> myslice <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	data unsafe<span class="token punctuation">.</span>Pointer <span class="token comment">// *int32/int</span>
	<span class="token builtin">len</span>  <span class="token builtin">int</span>
	<span class="token builtin">cap</span>  <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u6307\u9488\u9A8C\u8BC1</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;unsafe&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> myslice <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	data unsafe<span class="token punctuation">.</span>Pointer <span class="token comment">// *int64/int</span>
	<span class="token builtin">len</span>  <span class="token builtin">int</span>
	<span class="token builtin">cap</span>  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int64</span>
	s <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int64</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

	<span class="token comment">// \u5B9A\u4E49\u7C7B\u578B</span>
	mys <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>myslice<span class="token punctuation">)</span>

	<span class="token comment">// 1. \u5C06\u81EA\u5B9A\u4E49\u7C7B\u578B\u53D8\u91CF\u8F6C\u6362\u4E3A\u4E07\u80FD\u6307\u9488</span>
	mysp <span class="token operator">:=</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span>mys<span class="token punctuation">)</span>

	<span class="token comment">// 2. \u5C06\u4E07\u80FD\u6307\u9488\u8D4B\u503C</span>
	mysp <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">Pointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">)</span>
	mys <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">*</span>myslice<span class="token punctuation">)</span><span class="token punctuation">(</span>mysp<span class="token punctuation">)</span>

	<span class="token comment">// \u53EF\u4EE5\u8FDB\u884C\u81EA\u5B9A\u4E49\u6307\u9488\u7C7B\u578B\u4FEE\u6539</span>
	ss <span class="token operator">:=</span> <span class="token punctuation">(</span><span class="token operator">*</span><span class="token builtin">int64</span><span class="token punctuation">)</span><span class="token punctuation">(</span>mys<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
	<span class="token operator">*</span>ss <span class="token operator">=</span> <span class="token number">300</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>s<span class="token punctuation">,</span> mys<span class="token punctuation">)</span>

	<span class="token comment">// \u6269\u5BB9\u89C4\u5219</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="slice\u6269\u5BB9\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#slice\u6269\u5BB9\u89C4\u5219" aria-hidden="true">#</a> slice\u6269\u5BB9\u89C4\u5219</h2><p>slice\u5E95\u5C42\u662F\u4E00\u4E2A\u4E2A\u5DF2\u7ECF\u5206\u914D\u597D\u7684\u6570\u7EC4\u3002\u5DF2\u7ECF\u5B58\u5728\u7684\u6570\u7EC4\u91CC\u9762\u64CD\u4F5C\u3002\u4F7F\u7528\u7684\u65F6\u5019\u6CE8\u610F\u8981\u770B\u770B\u591A\u4E2A\u5207\u7247\u662F\u5426\u5171\u7528\u7684\u540C\u4E00\u4E2A\u5E95\u5C42\u6570\u7EC4</p>`,7),i=[p];function c(o,l){return s(),a("div",null,i)}var d=n(e,[["render",c],["__file","21-slice.html.vue"]]);export{d as default};

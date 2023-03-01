import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.0f320343.js";const i={},l=e(`<p>\u5E38\u89C1\u7684\u67E5\u8BE2sql</p><h2 id="\u7528\u6237\u6210\u7EE9\u6392\u540D" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u6210\u7EE9\u6392\u540D" aria-hidden="true">#</a> \u7528\u6237\u6210\u7EE9\u6392\u540D</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- set @score=3 \u53EF\u4EE5\u8BBE\u7F6E\u53D8\u91CF</span>
<span class="token comment">-- select @score:=3 \u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u53D8\u91CF</span>
 <span class="token keyword">SELECT</span>
     <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span><span class="token punctuation">,</span>
     score<span class="token punctuation">,</span>
     <span class="token keyword">CASE</span>

         <span class="token keyword">WHEN</span> <span class="token variable">@temp_score</span> <span class="token operator">=</span> score <span class="token keyword">THEN</span>
             <span class="token variable">@rank</span>
         <span class="token keyword">WHEN</span> <span class="token variable">@temp_score</span> :<span class="token operator">=</span> score <span class="token keyword">THEN</span>
             <span class="token variable">@rank</span> :<span class="token operator">=</span> <span class="token variable">@rank</span> <span class="token operator">+</span> <span class="token number">1</span>
         <span class="token keyword">END</span> <span class="token keyword">AS</span> rank
 <span class="token keyword">FROM</span>
     s_score<span class="token punctuation">,</span>
     <span class="token punctuation">(</span>
         <span class="token keyword">SELECT</span>
             <span class="token variable">@rank</span> :<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token variable">@temp_score</span> :<span class="token operator">=</span> <span class="token boolean">NULL</span>
     <span class="token punctuation">)</span> q
 <span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
     score <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u8BE2\u7528\u6237\u5217\u8868-\u7EDF\u8BA1\u67E5\u8BE2\u51FA\u6765\u7684ip\u51FA\u73B0\u7684\u6B21\u6570" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u7528\u6237\u5217\u8868-\u7EDF\u8BA1\u67E5\u8BE2\u51FA\u6765\u7684ip\u51FA\u73B0\u7684\u6B21\u6570" aria-hidden="true">#</a> \u67E5\u8BE2\u7528\u6237\u5217\u8868\uFF0C\u7EDF\u8BA1\u67E5\u8BE2\u51FA\u6765\u7684IP\u51FA\u73B0\u7684\u6B21\u6570</h2><p>\u4E00\u822C\u90FD\u662F\u5BF9group\u8FDB\u884Cgroup by\uFF0C\u4F46\u662F\u9700\u6C42\u662F\u60F3\u8981\u67E5\u8BE2\u6240\u6709\u5217\u8868\uFF0C\u7136\u540E\u5B57\u6BB5\u51FA\u73B0\u6B21\u6570</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> SELECT
	id,
	last_login_ip,
	<span class="token punctuation">(</span>
	SELECT
		count<span class="token punctuation">(</span> * <span class="token punctuation">)</span> 
	FROM
		member AS mi 
	WHERE
		mi.last_login_ip <span class="token operator">=</span> member.last_login_ip 
		AND mi.last_login_ip <span class="token operator">!=</span> <span class="token string">&#39;&#39;</span> 
	<span class="token punctuation">)</span> as n
FROM
	member<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[l];function p(c,o){return s(),a("div",null,t)}var v=n(i,[["render",p],["__file","101-\u5E38\u89C1\u67E5\u8BE2.html.vue"]]);export{v as default};

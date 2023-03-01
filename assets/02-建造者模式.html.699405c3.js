import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.0f320343.js";const t={},o=p(`<p>\u5EFA\u9020\u8005\u6A21\u5F0F\u4E3B\u8981\u662F\u5728\u6784\u5EFA\u590D\u6742\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u4F20\u9012\u53C2\u6570\u7528</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> DBPoolBuilder <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    DBPool
    err <span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> Builder <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>DBPoolBuilder <span class="token punctuation">{</span>
    b <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>DBPoolBuilder<span class="token punctuation">)</span>
    <span class="token comment">// \u8BBE\u7F6E DBPool \u5C5E\u6027\u7684\u9ED8\u8BA4\u503C</span>
    b<span class="token punctuation">.</span>DBPool<span class="token punctuation">.</span>dsn <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:3306&quot;</span>
    b<span class="token punctuation">.</span>DBPool<span class="token punctuation">.</span>maxConnLifeTime <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second
    b<span class="token punctuation">.</span>DBPool<span class="token punctuation">.</span>maxOpenConn <span class="token operator">=</span> <span class="token number">30</span>
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>DBPoolBuilder<span class="token punctuation">)</span> <span class="token function">DSN</span><span class="token punctuation">(</span>dsn <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>DBPoolBuilder <span class="token punctuation">{</span>
    <span class="token keyword">if</span> b<span class="token punctuation">.</span>err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> b
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> dsn <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
        b<span class="token punctuation">.</span>err <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;invalid dsn, current is %s&quot;</span><span class="token punctuation">,</span> dsn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    b<span class="token punctuation">.</span>DBPool<span class="token punctuation">.</span>dsn <span class="token operator">=</span> dsn
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>DBPoolBuilder<span class="token punctuation">)</span> <span class="token function">MaxOpenConn</span><span class="token punctuation">(</span>connNum <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>DBPoolBuilder <span class="token punctuation">{</span>
    <span class="token keyword">if</span> b<span class="token punctuation">.</span>err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> b
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> connNum <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        b<span class="token punctuation">.</span>err <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;invalid MaxOpenConn, current is %d&quot;</span><span class="token punctuation">,</span> connNum<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    b<span class="token punctuation">.</span>DBPool<span class="token punctuation">.</span>maxOpenConn <span class="token operator">=</span> connNum
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>DBPoolBuilder<span class="token punctuation">)</span> <span class="token function">MaxConnLifeTime</span><span class="token punctuation">(</span>lifeTime time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token operator">*</span>DBPoolBuilder <span class="token punctuation">{</span>
    <span class="token keyword">if</span> b<span class="token punctuation">.</span>err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> b
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> lifeTime <span class="token operator">&lt;</span> <span class="token number">1</span>  <span class="token operator">*</span> time<span class="token punctuation">.</span>Second <span class="token punctuation">{</span>
        b<span class="token punctuation">.</span>err <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;connection max life time can not litte than 1 second, current is %v&quot;</span><span class="token punctuation">,</span> lifeTime<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    b<span class="token punctuation">.</span>DBPool<span class="token punctuation">.</span>maxConnLifeTime <span class="token operator">=</span> lifeTime
    <span class="token keyword">return</span> b
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>b <span class="token operator">*</span>DBPoolBuilder<span class="token punctuation">)</span> <span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>DBPool<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> b<span class="token punctuation">.</span>err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span>err
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> b<span class="token punctuation">.</span>DBPool<span class="token punctuation">.</span>maxOpenConn <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>DBPool<span class="token punctuation">.</span>maxIdleConn <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;max total(%d) cannot &lt; max idle(%d)&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span>DBPool<span class="token punctuation">.</span>maxOpenConn<span class="token punctuation">,</span> b<span class="token punctuation">.</span>DBPool<span class="token punctuation">.</span>maxIdleConn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>b<span class="token punctuation">.</span>DBPool<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main 

<span class="token keyword">import</span> <span class="token string">&quot;xxx/dbpool&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dbPool<span class="token punctuation">,</span> err <span class="token operator">:=</span> dbpool<span class="token punctuation">.</span><span class="token function">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DSN</span><span class="token punctuation">(</span><span class="token string">&quot;localhost:3306&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MaxOpenConn</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">MaxConnLifeTime</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dbPool<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u603B\u7ED3</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u5EFA\u9020\u8005\u65E0\u9700\u590D\u6742\u81EA\u5DF1\u6784\u5EFA\u5BF9\u8C61
2. \u5EFA\u9020\u8005\u4E0A\u9762\u4F7F\u7528\u4E86\u4E00\u4E2Aerror\u7EDF\u4E00\u9519\u8BEF\u5904\u7406\u3002\u65E0\u9700\u6BCF\u4E00\u6B65\u90FD\u5904\u7406error\uFF0C\u90FD\u662F\u6700\u540E\u4E00\u6B65Biilder\u4E2D\u5904\u7406
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),e=[o];function c(l,i){return s(),a("div",null,e)}var k=n(t,[["render",c],["__file","02-\u5EFA\u9020\u8005\u6A21\u5F0F.html.vue"]]);export{k as default};

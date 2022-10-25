import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.6f2cee68.js";const e={},i=t(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>nginx\u4F7F\u7528\u6700\u591A\u7684\u5C31\u662F\u8D1F\u8F7D\u5747\u8861\uFF0C\u505A\u4E03\u5C42\u4EE3\u7406\u3002\u4E03\u5C42\u4EE3\u7406\u6548\u7387\u4E0D\u9AD8\uFF0C\u4F46\u662F\u80FD\u5B9A\u5236\u5404\u79CD\u89C4\u5219\uFF0C\u4F8B\u5982http\u534F\u8BAE\uFF0C\u4E03\u5C42\u4EE3\u7406\u53EF\u4EE5\u6839\u636E\u8BBF\u95EE\u7684\u8DEF\u7531\u7B49\u505A\u5904\u7406\u3002\u9700\u8981\u5C06\u7528\u6237\u7684\u6240\u6709\u8BF7\u6C42\u6570\u636E\u90FD\u63A5\u6536\u5B8C\u6210\u4E4B\u540E\uFF0C\u7136\u540E\u5728\u8FDB\u884C\u8C03\u7528\u540E\u7AEF\u670D\u52A1\u3002</p><p>\u5BF9\u4E8E\u56DB\u5C42\u4EE3\u7406\u662F\u6307\u7684\u8F6C\u53D1\uFF0C\u5C31\u662F\u63A5\u6536\u52304\u5C42\u7684\u6570\u636E\uFF0C\u7136\u540E\u5C31\u76F4\u63A5\u8F6C\u53D1\u6570\u636E\u5230\u540E\u7AEF\uFF0C\u8FD9\u6837nginx\u5C31\u65E0\u9700\u628A\u6240\u6709\u7684\u6570\u636E\u90FD\u63A5\u6536\u5B8C\u6210\u518D\u8FDB\u884C\u8F6C\u53D1\u5230\u540E\u7AEF\u670D\u52A1\u3002</p><h2 id="\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a> \u573A\u666F</h2><p>\u5728\u9879\u76EE\u4E2D\u9047\u5230\u4E00\u4E2A\u8FD9\u6837\u7684\u573A\u666F\uFF0C\u5C31\u662F\u540E\u7AEF\u662Fgo\u4E0A\u4F20\u670D\u52A1\uFF0C\u672C\u6765\u662F\u914D\u7F6Enginx\u505A\u8D1F\u8F7D\u7684\uFF0C\u4E0A\u4F20\u670D\u52A1\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5148\u5224\u65AD\u6587\u4EF6\u5927\u5C0F\uFF0C\u7136\u540E\u518D\u63A5\u6536\u6587\u4EF6\uFF0C\u8FD9\u91CC\u5C31\u5B58\u5728\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u4F7F\u7528nginx\u505A\u4EE3\u7406\u7684\u8BDD\uFF0Cnginx\u5C31\u9700\u8981\u63A5\u6536\u5B8C\u7528\u6237\u7684\u6240\u6709\u8BF7\u6C42\uFF0C\u7136\u540E\u5728\u53D1\u9001\u5230go\u670D\u52A1\u3002\u867D\u7136\u8BF4nginx\u53EF\u4EE5\u914D\u7F6Ebody\u5927\u5C0F\u3002\u4F46\u662F\u6781\u4E3A\u4E0D\u65B9\u4FBF\u3002\u6240\u4EE5\u8FD9\u4E2A\u65F6\u5019\uFF0C\u5C31\u7EAF\u5C5E\u60F3\u505A\u4E00\u4E2A\u8F6C\u53D1\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}

# \u8FD9\u91CC\u5C31\u662F\u914D\u7F6E\u4F20\u8F93\u5C42\u7684
stream{
    upstream tcpssh{
        hash $remote_addr consistent;
        server 172.31.0.2:8089 max_fails=3 fail_timeout=10s;  
    }
    server{
        listen 80;
        proxy_connect_timeout 20s;
        proxy_timeout 5m;
        proxy_pass tcpssh;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
        <span class="token string">&quot;fmt&quot;</span>
        <span class="token string">&quot;log&quot;</span>
        <span class="token string">&quot;net/http&quot;</span>
        <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>writer http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> request <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                bodyLen<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Length&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> bodyLen <span class="token operator">&gt;</span> <span class="token number">1000</span> <span class="token punctuation">{</span>
                        writer<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u957F\u5EA6\u8D85\u51FA:&quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Length&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token keyword">return</span>
                <span class="token punctuation">}</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u957F\u5EA6&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Length&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                writer<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u957F\u5EA6\uFF1A&quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Length&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u542F\u52A8\u670D\u52A1 8089&quot;</span><span class="token punctuation">)</span>
        err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8089&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;\u542F\u52A8\u670D\u52A1\u5931\u8D25&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[i];function o(c,l){return s(),a("div",null,p)}var d=n(e,[["render",o],["__file","04-nginx-tcp.html.vue"]]);export{d as default};

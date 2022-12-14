import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as i,e as n}from"./app.ee078ad7.js";const r={},d=n(`<h2 id="\u8FDB\u7A0B\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B\u6A21\u578B" aria-hidden="true">#</a> \u8FDB\u7A0B\u6A21\u578B</h2><p>master-worker\u8FDB\u7A0B\u6A21\u578B\uFF0Cmaster\u5C06\u8BF7\u6C42\u53D1\u9001\u5230worker\uFF0Cmaster\u53EF\u4EE5\u5C06\u4FE1\u53F7\u53D1\u9001\u7ED9worker</p><h2 id="worker\u62A2\u5360\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#worker\u62A2\u5360\u8C03\u5EA6" aria-hidden="true">#</a> worker\u62A2\u5360\u8C03\u5EA6</h2><h2 id="epoll" tabindex="-1"><a class="header-anchor" href="#epoll" aria-hidden="true">#</a> epoll</h2><p>\u4F7F\u7528<code>epoll</code>\u8FDB\u7A0B\u6A21\u578B\uFF0C\u4E00\u4E2Aworker\u53EF\u4EE5\u63A5\u6536<code>worker_connections</code>\u4E2A\u8BF7\u6C42</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>nginx\u914D\u7F6E\u7ED3\u6784\u6709:</p><ul><li>main\uFF1A\u5168\u5C40\u914D\u7F6E</li><li>event\uFF1A\u914D\u7F6E\u5DE5\u4F5C\u6A21\u5F0F\u4EE5\u53CA\u8FDE\u63A5\u6570</li><li>http\uFF1Ahttp\u6A21\u5757\u914D\u7F6E</li><li>stream\uFF1A\u56DB\u5C42\u8F6C\u53D1\u914D\u7F6E</li></ul><h3 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> main</h3><h3 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> event</h3><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location / { # \u9ED8\u8BA4\u5339\u914D\uFF0C\u80FD\u5339\u914D\u5230/*

}

location = / { # \u7CBE\u51C6\u5339\u914D/
}

location ~* \u6B63\u5219 { # \u6B63\u5219\u5339\u914D\uFF0C*\u8868\u793A\u4E0D\u7F3A\u5206\u5927\u5C0F\u5199
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[d];function s(t,c){return a(),i("div",null,l)}var v=e(r,[["render",s],["__file","01-start.html.vue"]]);export{v as default};

import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as d}from"./app.8e771fd9.js";const s={},a=d(`<p>\u4E92\u8054\u7F51\u5404\u79CD\u901A\u4FE1\u90FD\u79BB\u4E0D\u5F00\u534F\u8BAE\uFF0C\u56E0\u4E3A\u4E00\u65E6\u5236\u5B9A\u4E86\u534F\u8BAE\uFF0C\u5927\u5BB6\u90FD\u53EF\u4EE5\u6839\u636E\u8FD9\u4E2A\u534F\u8BAE\u53BB\u505A\u5404\u79CD\u8BED\u8A00\u7684\u5B9E\u73B0\u3002\u4E0B\u9762\u5217\u4E3E\u4E9B\u5E38\u89C1\u534F\u8BAE</p><h2 id="\u5B89\u5168\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#\u5B89\u5168\u534F\u8BAE" aria-hidden="true">#</a> \u5B89\u5168\u534F\u8BAE</h2><h3 id="tls" tabindex="-1"><a class="header-anchor" href="#tls" aria-hidden="true">#</a> TLS</h3><p><code>Transport Layer Security</code> \u8FD9\u662F\u5728\u5404\u79CD\u901A\u4FE1\u534F\u8BAE\u7684\u57FA\u7840\u4E0A\u52A0\u7684\u4E00\u5C42\u6570\u636E\u5B89\u5168\u534F\u8BAE\uFF0C\u9700\u8981\u5728\u5E94\u7528\u5C42\u5B9E\u73B0\u3002TLS\u5305\u542B\u63E1\u624B\u8FC7\u7A0B\u548C\u6570\u636E\u8BB0\u5F55\u52A0\u5BC6\u8FC7\u7A0B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
func tlsSend(conn) {
    // 1. \u8FDB\u884C\u63E1\u624B\u73AF\u8282\uFF0C\u5176\u5B9E\u4E5F\u662F\u4EA4\u6362\u5BF9\u79F0\u52A0\u5BC6\u7684\u5BC6\u94A5
    ...
    key := change() // \u4EA4\u6362\u5B8C\u6210\u4E86
    
    // 2. \u5F00\u59CB\u4F20\u8F93\u6570\u636E
    secureData = encodeByKey(key, data)
    
    // 3. \u7136\u540E\u5C06\u6570\u636E\u4F20\u8F93\u8FC7\u4F20\u8F93\u5C42
}

func tlsAccept(conn) {
    // 1. \u8FDB\u884C\u63E1\u624B\u73AF\u8282\uFF0C\u5176\u5B9E\u4E5F\u662F\u4EA4\u6362\u5BF9\u79F0\u52A0\u5BC6\u7684\u5BC6\u94A5
    ...
    key := change() // \u4EA4\u6362\u5B8C\u6210\u4E86
    
    // 2. \u5F00\u59CB\u4F20\u8F93\u6570\u636E
    secureData = encodeByKey(key, data)
    
    // 3. \u7136\u540E\u5C06\u6570\u636E\u4F20\u8F93\u7ED9\u5E94\u7528\u5C42\u63A5\u53E3
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[a];function c(r,v){return n(),i("div",null,l)}var m=e(s,[["render",c],["__file","22-\u534F\u8BAE.html.vue"]]);export{m as default};

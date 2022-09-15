import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e}from"./app.f087df4c.js";const i={},l=e(`<h2 id="\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a> \u542F\u52A8</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    nerdctl run --name envoy -p <span class="token number">9901</span>:9901 -p <span class="token number">10000</span>:10000 -d envoyproxy/envoy:v1.23.1

nerdctl run   <span class="token punctuation">\\</span>
-v <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/envoy-baidu.yaml:/envoy-baidu.yaml <span class="token punctuation">\\</span>
-p <span class="token number">9901</span>:9901 -p <span class="token number">10000</span>:10000 -d <span class="token punctuation">\\</span>
envoyproxy/envoy:v1.23.1 <span class="token punctuation">\\</span>
--config-path /envoy-baidu.yaml

<span class="token comment"># \u76F8\u5173\u53C2\u6570</span>
--config-path <span class="token comment"># \u542F\u52A8\u914D\u7F6E\u6587\u4EF6</span>
--config-yaml <span class="token comment"># \u8986\u76D6--config-path\u4E2D\u7684\u4E00\u90E8\u5206</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[l];function t(o,d){return a(),s("div",null,c)}var v=n(i,[["render",t],["__file","01-start.html.vue"]]);export{v as default};

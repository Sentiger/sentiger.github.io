import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,e as i}from"./app.0e4e7dc8.js";const a={},d=i(`<p><strong>\u53C2\u8003\u8D44\u6599</strong></p><h2 id="\u8BCD\u6C47" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6C47" aria-hidden="true">#</a> \u8BCD\u6C47</h2><p>ipvs\u62BD\u8C61\u51FA\u4E24\u4E2A\u6982\u5FF5\uFF1A\u524D\u7AEF\u8D1F\u8F7D\u5165\u53E3<code>service</code>\u548C\u5BF9\u5E94\u7684\u540E\u7AEF\u670D\u52A1<code>real server</code></p><h2 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0\u4E00\u4E2A\u8D1F\u8F7D\u5747\u8861\u5B9E\u4F8B172.17.0.1:32016\uFF0C\u4E14\u6307\u5B9A\u8D1F\u8F7D\u7B97\u6CD5\u4E3A\u8F6E\u8BE2\uFF08Round Robin\uFF09</span>
ipvsadm -A -t <span class="token number">172.17</span>.0.1:32016 -s rr

<span class="token comment"># \u8D1F\u8F7D\u5747\u8861\u5B9E\u4F8B\u4E2D\u6DFB\u52A0\u540E\u7AEF\u670D\u52A1</span>
ipvsadm -a -t <span class="token number">172.17</span>.0.1:32016 -r <span class="token number">10.244</span>.1.2:8080 -m -w <span class="token number">1</span>
  -r \u540E\u7AEFreal server\u5730\u5740
  -a \u6DFB\u52A0\u540E\u7AEFreal server
  -t \u6307\u5B9Atcp\u670D\u52A1\u5730\u5740\u548C\u7AEF\u53E3\u53F7
  -w \u6307\u5B9A\u6743\u503C
      -m \u8F6C\u53D1\u6A21\u5F0Fmasquerading \u5C31\u662FNAT\u6A21\u5F0F 
      -g \u8F6C\u53D1\u6A21\u5F0Fgatewaying \u76F4\u8FDE\u8DEF\u7531\u6A21\u5F0F
      -g \u8F6C\u53D1\u6A21\u5F0Fgatewaying \u76F4\u8FDE\u8DEF\u7531\u6A21\u5F0F
      -i \u8F6C\u53D1\u6A21\u5F0F IP\u96A7\u9053\u6A21\u5F0F

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nat\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#nat\u6A21\u5F0F" aria-hidden="true">#</a> NAT\u6A21\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u672C\u5730\u542F\u52A8\u4E09\u4E2A\u5BB9\u5668\uFF0C\u5206\u522B\u5BF9\u5E94\u7684ip\u4E3A\u4EE5\u4E0B\uFF1A
server0: 10.4.0.10
server1: 10.4.0.11
server2: 10.4.0.12

1. \u521B\u5EFAservice,\u8BBF\u95EE10.11.11.11:80
ipvsadm -A -t 10.11.11.11:80 -s rr

2. \u8D1F\u8F7D\u4E2D\u6DFB\u52A0\u540E\u7AEFreal server
ipvsadm -a -t 10.11.11.11:80 -r 10.4.0.10:80 -m
ipvsadm -a -t 10.11.11.11:80 -r 10.4.0.11:80 -m
ipvsadm -a -t 10.11.11.11:80 -r 10.4.0.12:80 -m

3. \u6DFB\u52A0\u8DEF\u7531

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r=[d];function l(v,c){return n(),s("div",null,r)}var u=e(a,[["render",l],["__file","03-ipvs.html.vue"]]);export{u as default};

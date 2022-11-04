import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as e,e as a}from"./app.832d9979.js";const i={},c=a(`<p>linux\u53EF\u4EE5\u7ED9\u7F51\u5361\u8BBE\u7F6E\u591A\u4E2A\u865A\u62DFIP\uFF08VIP\uFF09\uFF0C\u5176\u5B9E\u6211\u7406\u89E3\u5C31\u662F\u4E2A\u522B\u540D\u3002\u4F46\u662F\u901A\u8FC7\u8FD9\u4E2AIP\u4E5F\u662F\u80FD\u8BBF\u95EE\u5BF9\u5E94\u7684\u7F51\u5361\u7684\u3002</p><p>\u865A\u62DFIP\u7684\u597D\u5904\u5C31\u662F\u53EF\u4EE5\u968F\u65F6\u5728\u5185\u7F51\u4E2D\u7ED1\u5B9A\u548C\u5207\u6362\uFF0C\u8FD9\u6837\u5C31\u662F\u5F53\u4E00\u4E2A\u670D\u52A1down\u673A\u4E86\uFF0C\u7136\u540E\u53EF\u4EE5\u5FEB\u901F\u5207\u6362\u5230\u5176\u4ED6\u7684\u670D\u52A1\u3002\u4E00\u822C\u7528\u6765\u505A\u9AD8\u53EF\u7528\u7684\u3002\u4F7F\u7528VRRP\u534F\u8BAE\uFF0C\u76EE\u524D\u7684\u5B9E\u73B0\u6709keepalived</p><h2 id="\u914D\u7F6E\u865A\u62DFip" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u865A\u62DFip" aria-hidden="true">#</a> \u914D\u7F6E\u865A\u62DFIP</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728eht0\u4E0B\u9762\u914D\u7F6E\u4E00\u4E2A\u865A\u62DFIP\uFF0C\u53D6\u540D\u4E3Aeht0:1</span>
<span class="token function">ifconfig</span> eth0:1 <span class="token number">192.168</span>.40.20 netmask <span class="token number">255.255</span>.255.0 up

<span class="token comment"># \u8FD9\u4E2A\u548C\u4E0A\u9762\u7684\u914D\u7F6E\u662F\u4E00\u6837\u7684</span>
<span class="token function">ifconfig</span> eth0:1 <span class="token number">172.16</span>.0.12/24 up

<span class="token comment"># \u4E5F\u662F\u7ED9eht0\u914D\u7F6E\u865A\u62DFIP\uFF0C\u4F46\u662F\u6CA1\u6709\u6307\u5B9A\u540D\u79F0\uFF0Ckeepalived\u5C31\u662F\u4F7F\u7528\u8FD9\u6837\u7684\u65B9\u5F0F</span>
<span class="token function">ip</span> addr <span class="token function">add</span> <span class="token number">172.16</span>.0.12/24 dev eth0

<span class="token comment"># \u5220\u9664\u865A\u62DFIP</span>
<span class="token function">ip</span> addr del <span class="token number">172.16</span>.0.12/24 dev eth0

<span class="token comment"># \u901A\u8FC7\u540D\u79F0\u5220\u9664\u865A\u62DFIP</span>
<span class="token function">ifconfig</span> eth0:1 <span class="token number">192.168</span>.40.20 netmask <span class="token number">255.255</span>.255.0 down
<span class="token function">ifconfig</span> eth0:1 down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[c];function t(d,o){return s(),e("div",null,l)}var m=n(i,[["render",t],["__file","06-\u865A\u62DFIP.html.vue"]]);export{m as default};

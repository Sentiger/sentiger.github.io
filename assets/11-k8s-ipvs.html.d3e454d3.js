import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as t,c,a as e,b as o,e as l,d as s}from"./app.a872a782.js";const r={},p=l(`<p>k8s1.25 service\u6A21\u5F0F\u4ECEiptables\u5207\u6362\u4E3Aipvs</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 </span>
kubectl -n kube-system edit configmaps kube-proxy

<span class="token comment"># \u5C06mode \u4FEE\u6539\u4E3Aipvs</span>
<span class="token punctuation">..</span>.
mode: <span class="token string">&quot;ipvs&quot;</span>
<span class="token punctuation">..</span>.


<span class="token comment"># \u91CD\u65B0\u542F\u52A8proxy\uFF0C\u53EA\u8981\u5220\u9664\u5BF9\u5E94\u7684pod\u5C31\u884C</span>

kubectl delete pods <span class="token variable"><span class="token variable">\`</span>kubectl get pods -n kube-system <span class="token operator">|</span> <span class="token function">grep</span> kube-proxy  <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span> -n kube-system 

<span class="token comment"># \u672C\u5730\u7684pod\u770B\u60C5\u51B5\u91CD\u542F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service\u8BBF\u95EE\u6162\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#service\u8BBF\u95EE\u6162\u95EE\u9898" aria-hidden="true">#</a> service\u8BBF\u95EE\u6162\u95EE\u9898</h2><p>\u65B0\u5EFA\u7ACB\u4E86\u4E00\u4E2A\u96C6\u7FA4\uFF0C\u867D\u7136\u4E24\u4E2A\u4E0D\u662F\u540C\u4E00\u4E2A\u7EC4\u5185\uFF0C\u4F46\u662F\u4E5F\u6253\u901A\u4E86\u5185\u7F51\u901A\u4FE1\u3002\u53D1\u73B0\u4E00\u4E2A\u95EE\u9898\u662F\u8BBF\u95EEpod\u5F88\u5FEB\uFF0C\u4F46\u662F\u8BBF\u95EEservice\u6162\uFF0C\u4E0D\u662F\u56E0\u4E3Aiptables\u6A21\u5F0F</p><p>\u641C\u7D22\u53D1\u73B0\uFF1A</p><p><code>ethtool -K flannel.1 tx-checksum-ip-generic off</code></p>`,6),d=s("\u53C2\u8003\uFF1A"),v={href:"https://blog.csdn.net/weixin_43292547/article/details/120690666",target:"_blank",rel:"noopener noreferrer"},u=s("checksum");function m(b,k){const n=i("ExternalLinkIcon");return t(),c("div",null,[p,e("p",null,[d,e("a",v,[u,o(n)])])])}var f=a(r,[["render",m],["__file","11-k8s-ipvs.html.vue"]]);export{f as default};

import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as a}from"./app.99f32599.js";const i={},l=a(`<p>k8s1.25 service\u6A21\u5F0F\u4ECEiptables\u5207\u6362\u4E3Aipvs</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6 </span>
kubectl -n kube-system edit configmaps kube-proxy

<span class="token comment"># \u5C06mode \u4FEE\u6539\u4E3Aipvs</span>
<span class="token punctuation">..</span>.
mode: <span class="token string">&quot;ipvs&quot;</span>
<span class="token punctuation">..</span>.


<span class="token comment"># \u91CD\u65B0\u542F\u52A8proxy\uFF0C\u53EA\u8981\u5220\u9664\u5BF9\u5E94\u7684pod\u5C31\u884C</span>

kubectl delete pods <span class="token variable"><span class="token variable">\`</span>kubectl get pods -n kube-system <span class="token operator">|</span> <span class="token function">grep</span> kube-proxy  <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span> -n kube-system 

<span class="token comment"># \u672C\u5730\u7684pod\u770B\u60C5\u51B5\u91CD\u542F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function c(o,p){return n(),e("div",null,t)}var v=s(i,[["render",c],["__file","11-k8s-ipvs.html.vue"]]);export{v as default};

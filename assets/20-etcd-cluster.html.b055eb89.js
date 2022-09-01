import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as i,c as p,a as s,b as e,d as n,e as r}from"./app.9cd4cb4d.js";const c={},o=s("h2",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),n(" \u53C2\u8003\u8D44\u6599")],-1),d={href:"https://etcd.io/docs/v3.5/tutorials/how-to-setup-cluster/",target:"_blank",rel:"noopener noreferrer"},v=n("\u5B98\u7F51"),b={href:"https://www.cnblogs.com/zuoyang/p/16423791.html",target:"_blank",rel:"noopener noreferrer"},k=n("k8s\u53C2\u8003\u8D44\u65991"),u=r(`<h2 id="\u5BB9\u5668\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u5B89\u88C5" aria-hidden="true">#</a> \u5BB9\u5668\u5B89\u88C5</h2><p>\u73AF\u5883\u4E2D\u7684\u5BB9\u5668\u4F7F\u7528\u7684\u662Fcontainerd\u548C\u5BA2\u6237\u7AEFnerdctl\u3002\u5982\u679C\u4EC5\u4EC5\u662F\u5BB9\u5668\u5B8C\u5168\u53EF\u4EE5\u4F7F\u7528docker\uFF01\u8FD9\u91CC\u90E8\u7F72\u4E09\u53F0\u9759\u6001\u90E8\u7F72.</p><ul><li>10.240.0.17</li><li>10.240.0.18</li><li>10.240.0.19</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u62C9\u7FA4\u955C\u50CF\u4EE5\u53CA\u521B\u5EFA\u7F51\u6BB5</span>
nerdctl pull quay.io/coreos/etcd:v3.5.4
nerdctl network create etcd --subnet <span class="token number">10.240</span>.0.0/24

<span class="token comment"># \u521D\u59CB\u5316\u914D\u7F6E\uFF0C\u5728\u547D\u4EE4\u884C\u4E2D\u8FD0\u884C\u8FD9\u4E2A\u52A0\u5165\u73AF\u5883\u53D8\u91CF</span>
<span class="token assign-left variable">TOKEN</span><span class="token operator">=</span>token-01
<span class="token assign-left variable">CLUSTER_STATE</span><span class="token operator">=</span>new
<span class="token assign-left variable">NAME_1</span><span class="token operator">=</span>etcd-1
<span class="token assign-left variable">NAME_2</span><span class="token operator">=</span>etcd-2
<span class="token assign-left variable">NAME_3</span><span class="token operator">=</span>etcd-3
<span class="token assign-left variable">HOST_1</span><span class="token operator">=</span><span class="token number">10.240</span>.0.17
<span class="token assign-left variable">HOST_2</span><span class="token operator">=</span><span class="token number">10.240</span>.0.18
<span class="token assign-left variable">HOST_3</span><span class="token operator">=</span><span class="token number">10.240</span>.0.19
<span class="token assign-left variable">CLUSTER</span><span class="token operator">=</span><span class="token variable">\${NAME_1}</span><span class="token operator">=</span>http://<span class="token variable">\${HOST_1}</span>:2380,<span class="token variable">\${NAME_2}</span><span class="token operator">=</span>http://<span class="token variable">\${HOST_2}</span>:2380,<span class="token variable">\${NAME_3}</span><span class="token operator">=</span>http://<span class="token variable">\${HOST_3}</span>:2380

<span class="token comment"># \u8282\u70B91\u5B89\u88C5</span>
<span class="token assign-left variable">THIS_NAME</span><span class="token operator">=</span><span class="token variable">\${NAME_1}</span>
<span class="token assign-left variable">THIS_IP</span><span class="token operator">=</span><span class="token variable">\${HOST_1}</span>

nerdctl run --name <span class="token variable">\${THIS_NAME}</span> --network etcd --ip <span class="token variable">\${THIS_IP}</span> -d quay.io/coreos/etcd:v3.5.4 etcd  <span class="token punctuation">\\</span>
--data-dir<span class="token operator">=</span>data.etcd --name <span class="token variable">\${THIS_NAME}</span> <span class="token punctuation">\\</span>
--initial-advertise-peer-urls http://<span class="token variable">\${THIS_IP}</span>:2380 --listen-peer-urls http://<span class="token variable">\${THIS_IP}</span>:2380 <span class="token punctuation">\\</span>
--advertise-client-urls http://<span class="token variable">\${THIS_IP}</span>:2379 --listen-client-urls http://<span class="token variable">\${THIS_IP}</span>:2379 <span class="token punctuation">\\</span>
--initial-cluster <span class="token variable">\${CLUSTER}</span> <span class="token punctuation">\\</span>
--initial-cluster-state <span class="token variable">\${CLUSTER_STATE}</span> --initial-cluster-token <span class="token variable">\${TOKEN}</span>

<span class="token comment"># \u8282\u70B92\uFF08\u8FD0\u884C\u5B8C\u5168\u662F\u4EE5\u4E0A\u7684\u811A\u672C\uFF09</span>
<span class="token assign-left variable">THIS_NAME</span><span class="token operator">=</span><span class="token variable">\${NAME_2}</span>
<span class="token assign-left variable">THIS_IP</span><span class="token operator">=</span><span class="token variable">\${HOST_2}</span>

<span class="token comment"># \u8282\u70B93\uFF08\u8FD0\u884C\u5B8C\u5168\u662F\u4EE5\u4E0A\u7684\u811A\u672C\uFF09</span>
<span class="token assign-left variable">THIS_NAME</span><span class="token operator">=</span><span class="token variable">\${NAME_3}</span>
<span class="token assign-left variable">THIS_IP</span><span class="token operator">=</span><span class="token variable">\${HOST_3}</span>


<span class="token comment"># \u8FDB\u5165\u5BB9\u5668</span>
nerdctl <span class="token builtin class-name">exec</span> -it etcd-1 <span class="token function">bash</span>

<span class="token comment">## \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token assign-left variable">HOST_1</span><span class="token operator">=</span><span class="token number">10.240</span>.0.17
<span class="token assign-left variable">HOST_2</span><span class="token operator">=</span><span class="token number">10.240</span>.0.18
<span class="token assign-left variable">HOST_3</span><span class="token operator">=</span><span class="token number">10.240</span>.0.19
<span class="token assign-left variable">ENDPOINTS</span><span class="token operator">=</span><span class="token variable">$HOST_1</span>:2379,<span class="token variable">$HOST_2</span>:2379,<span class="token variable">$HOST_3</span>:2379

<span class="token comment">## \u547D\u4EE4\u6D4B\u8BD5</span>
etcdctl --endpoints<span class="token operator">=</span><span class="token variable">$ENDPOINTS</span> put /user sentiger
etcdctl --endpoints<span class="token operator">=</span><span class="token variable">$ENDPOINTS</span> get / --prefix
etcdctl --endpoints<span class="token operator">=</span><span class="token variable">$ENDPOINTS</span> member list -w table
etcdctl --endpoints<span class="token operator">=</span><span class="token variable">$ENDPOINTS</span> endpoint status -w table

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(_,T){const a=t("ExternalLinkIcon");return i(),p("div",null,[o,s("ul",null,[s("li",null,[s("a",d,[v,e(a)])]),s("li",null,[s("a",b,[k,e(a)])])]),u])}var f=l(c,[["render",m],["__file","20-etcd-cluster.html.vue"]]);export{f as default};

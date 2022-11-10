import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as l,c as i,a as n,b as e,d as s,e as c}from"./app.aea163d6.js";const o={},u=n("h2",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),s(" \u53C2\u8003\u8D44\u6599")],-1),r={href:"https://etcd.io/docs/v3.5/tutorials/how-to-setup-cluster/",target:"_blank",rel:"noopener noreferrer"},d=s("\u5B98\u7F51"),k={href:"https://www.cnblogs.com/zuoyang/p/16423791.html",target:"_blank",rel:"noopener noreferrer"},v=s("k8s\u53C2\u8003\u8D44\u65991"),b=c(`<h2 id="\u5BB9\u5668\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u5B89\u88C5" aria-hidden="true">#</a> \u5BB9\u5668\u5B89\u88C5</h2><p>\u73AF\u5883\u4E2D\u7684\u5BB9\u5668\u4F7F\u7528\u7684\u662Fcontainerd\u548C\u5BA2\u6237\u7AEFnerdctl\u3002\u5982\u679C\u4EC5\u4EC5\u662F\u5BB9\u5668\u5B8C\u5168\u53EF\u4EE5\u4F7F\u7528docker\uFF01\u8FD9\u91CC\u90E8\u7F72\u4E09\u53F0\u9759\u6001\u90E8\u7F72.</p><ul><li>10.240.0.17</li><li>10.240.0.18</li><li>10.240.0.19</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u62C9\u7FA4\u955C\u50CF\u4EE5\u53CA\u521B\u5EFA\u7F51\u6BB5</span>
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

nerdctl run --name <span class="token variable">\${THIS_NAME}</span> --network etcd --ip <span class="token variable">\${THIS_IP}</span> -v /root/etcd/<span class="token variable">\${THIS_NAME}</span>:/var/lib/etcd -d quay.io/coreos/etcd:v3.5.4 etcd  <span class="token punctuation">\\</span>
--data-dir<span class="token operator">=</span>/var/lib/etcd --name <span class="token variable">\${THIS_NAME}</span> <span class="token punctuation">\\</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#k8s\u90E8\u7F72" aria-hidden="true">#</a> k8s\u90E8\u7F72</h2><p>k8\u9759\u6001\u90E8\u7F72\u4E3B\u8981\u662F\u6CE8\u610F\u96C6\u7FA4\u51E0\u70B9ip\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u8981\u4F7F\u7528statefulset\u548Cheadless service</p><p><strong>\u6CE8\u610F</strong></p><ul><li>service\u662F\u8981\u7B49\u5230pod\u4E3Aready\u72B6\u6001\u7684\u65F6\u5019\u624D\u80FD\u8FDB\u884C\u76D1\u542C\u8FD9\u4E9B\u670D\u52A1</li><li>\u8FD9\u91CCpod\u91CC\u9762\u53C8\u8981\u4F7F\u7528\u5230\u4E86service\u4E3A\u5176\u89E3\u6790ip\uFF0C\u6240\u4EE5\u4F1A\u548C\u4E0A\u9762service\u8FDB\u884C\u51B2\u7A81\uFF0C\u56E0\u4E3A\u4E24\u4E2A\u90FD\u6CA1\u51C6\u5907\u597D\u3002</li><li>publishNotReadyAddresses: true \u8FD9\u4E2A\u662F\u8BBE\u7F6E\u5982\u679Cpod\u6CA1\u6709ready\u4E5F\u4F1A\u52A0\u5165\u5230endpoints\u4E2D</li><li>\u5728\u542F\u52A8\u547D\u4EE4\u4E2D\uFF0Cpod\u57DF\u540D\u8981\u5199\u5B8C\u6574\u4E86\u3002\u5426\u5219nslookup\u89E3\u6790\u4E0D\u4E86\u3002\u4F8B\u5982etcd-0.etcd \u8FD9\u4E2A\u662F\u89E3\u6790\u4E0D\u4E86\u7684\u3002\u8981\u5199\u5B8C\u6574etcd-0.etcd.default.svc.cluster.local\u3002\u56E0\u4E3A\u8FD9\u4E2A\u627E\u4E86\u597D\u4E45\uFF0C\u597D\u5751</li><li><strong>\u6CE8\u610F</strong>\uFF0C\u8FD9\u91CC\u8981\u8FDB\u884C\u76EE\u5F55\u6302\u8F7D\uFF0C\u5426\u5219\u5728\u6269\u5BB9\u6216\u8005\u5220\u9664pod\u91CD\u542F\u4F1A\u5931\u8D25</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> etcd
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">2379</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> client
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">2380</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> peer
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> etcd<span class="token punctuation">-</span>member
  <span class="token key atrule">publishNotReadyAddresses</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> StatefulSet
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> etcd
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> etcd
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">serviceName</span><span class="token punctuation">:</span> etcd
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">4</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> etcd<span class="token punctuation">-</span>member
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> etcd
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> etcd<span class="token punctuation">-</span>member
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">nodeName</span><span class="token punctuation">:</span> web1
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> etcd
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/data/etcd
            <span class="token key atrule">type</span><span class="token punctuation">:</span> Directory
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> etcd
          <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;quay.io/coreos/etcd:v3.5.4&quot;</span>
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">2379</span>
              <span class="token key atrule">name</span><span class="token punctuation">:</span> client
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">2389</span>
              <span class="token key atrule">name</span><span class="token punctuation">:</span> peer
          <span class="token key atrule">env</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> CLUSTER_SIZE
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;4&quot;</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SET_NAME
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;etcd&quot;</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> POD_NAME
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">fieldRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
                  <span class="token key atrule">fieldPath</span><span class="token punctuation">:</span> metadata.name
          <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> etcd
              <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/lib/etcd/
              <span class="token key atrule">subPathExpr</span><span class="token punctuation">:</span> $(POD_NAME)
          <span class="token key atrule">command</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;/bin/sh&quot;</span>
            <span class="token punctuation">-</span> <span class="token string">&quot;-exc&quot;</span>
            <span class="token punctuation">-</span> <span class="token punctuation">|</span><span class="token scalar string">
              IP=$(hostname -i)
              PEERS=&quot;&quot;
              for i in $(seq 0 $((\${CLUSTER_SIZE} - 1)));
              do
                PEERS=&quot;\${PEERS}\${PEERS:+,}\${SET_NAME}-\${i}=http://\${SET_NAME}-\${i}.\${SET_NAME}.default.svc.cluster.local:2380&quot;
              done</span>

              exec  etcd <span class="token punctuation">-</span><span class="token punctuation">-</span>name $<span class="token punctuation">{</span>HOSTNAME<span class="token punctuation">}</span> \\
              <span class="token punctuation">-</span><span class="token punctuation">-</span>listen<span class="token punctuation">-</span>peer<span class="token punctuation">-</span>urls http<span class="token punctuation">:</span>//$<span class="token punctuation">{</span>IP<span class="token punctuation">}</span><span class="token punctuation">:</span>2380 \\
              <span class="token punctuation">-</span><span class="token punctuation">-</span>listen<span class="token punctuation">-</span>client<span class="token punctuation">-</span>urls http<span class="token punctuation">:</span>//$<span class="token punctuation">{</span>IP<span class="token punctuation">}</span><span class="token punctuation">:</span><span class="token number">2379</span><span class="token punctuation">,</span>http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>2379 \\
              <span class="token punctuation">-</span><span class="token punctuation">-</span>advertise<span class="token punctuation">-</span>client<span class="token punctuation">-</span>urls http<span class="token punctuation">:</span>//$<span class="token punctuation">{</span>HOSTNAME<span class="token punctuation">}</span>.$<span class="token punctuation">{</span>SET_NAME<span class="token punctuation">}</span>.default.svc.cluster.local<span class="token punctuation">:</span>2379 \\
              <span class="token punctuation">-</span><span class="token punctuation">-</span>initial<span class="token punctuation">-</span>advertise<span class="token punctuation">-</span>peer<span class="token punctuation">-</span>urls http<span class="token punctuation">:</span>//$<span class="token punctuation">{</span>HOSTNAME<span class="token punctuation">}</span>.$<span class="token punctuation">{</span>SET_NAME<span class="token punctuation">}</span>.default.svc.cluster.local<span class="token punctuation">:</span>2380 \\
              <span class="token punctuation">-</span><span class="token punctuation">-</span>initial<span class="token punctuation">-</span>cluster<span class="token punctuation">-</span>token etcd<span class="token punctuation">-</span>cluster<span class="token punctuation">-</span>1 \\
              <span class="token punctuation">-</span><span class="token punctuation">-</span>initial<span class="token punctuation">-</span>cluster=$<span class="token punctuation">{</span>PEERS<span class="token punctuation">}</span> \\
              <span class="token punctuation">-</span><span class="token punctuation">-</span>initial<span class="token punctuation">-</span>cluster<span class="token punctuation">-</span>state new \\
              <span class="token punctuation">-</span><span class="token punctuation">-</span>data<span class="token punctuation">-</span>dir=/var/lib/etcd/data.etcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function m(_,y){const a=p("ExternalLinkIcon");return l(),i("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[d,e(a)])]),n("li",null,[n("a",k,[v,e(a)])])]),b])}var S=t(o,[["render",m],["__file","20-etcd-cluster.html.vue"]]);export{S as default};

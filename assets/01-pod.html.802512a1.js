import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as t,c as o,a as n,b as a,d as e,e as r}from"./app.6b8d00f1.js";const p={},c=n("p",null,"ReplicaSet\u7528\u6765\u7BA1\u7406Pod\uFF0C\u5E76\u4E14\u7EF4\u62A4Pod\u6570\u91CF\u548C\u671F\u671B\u72B6\u6001\u4E00\u81F4\u3002\u5176\u5B9EReplicaSet\u597D\u6BD4\u4E00\u4E2A\u8FDB\u7A0B\u7BA1\u7406\u5668\u6765\u7BA1\u7406Pod\u8FD9\u4E9B\u8FDB\u7A0B\u3002",-1),d=n("p",null,"Deployment\u662F\u66F4\u9AD8\u7684\u4E00\u5C42\u63A7\u5236\u5668\uFF0C\u7528\u6765\u7BA1\u7406ReplicaSet\uFF0C\u80FD\u591F\u5B9E\u73B0\u670D\u52A1\u53D1\u5E03\uFF0C\u56DE\u6EDA\u7B49\u5404\u79CD\u9AD8\u7EA7\u529F\u80FD\uFF0C\u5185\u90E8\u4F1A\u81EA\u52A8\u7684\u7EF4\u62A4Replicaset",-1),v=e("\u53C2\u8003\u5B8C\u6574API\u6587\u6863 "),u={href:"https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/deployment-v1/",target:"_blank",rel:"noopener noreferrer"},m=e("deployment"),b=e(","),k={href:"https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/replica-set-v1/",target:"_blank",rel:"noopener noreferrer"},g=e("replicaset"),h=r(`<h2 id="replicaset\u7BA1\u7406pod" tabindex="-1"><a class="header-anchor" href="#replicaset\u7BA1\u7406pod" aria-hidden="true">#</a> ReplicaSet\u7BA1\u7406Pod</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u901A\u8FC7\u81EA\u5B9A\u4E49\u7684label\u6765\u9009\u62E9\uFF0C\u5982\u679C\u5B9A\u4E49\u4E00\u4E2APod\uFF0Clabel\u548Creplicaset\u4E2D\u7684selector\u4E00\u81F4\uFF0C\u5219\u4F1A\u88AB\u63A5\u7BA1</span>
<span class="token comment"># deployment\u4F1A\u4E3A\u6BCF\u4E2Apod\u751F\u6210\u4E00\u4E2Atemplate-hash\uFF0C\u7136\u540E\u5173\u8054rs\u548Cpod\uFF0C\u9632\u6B62\u51B2\u7A81</span>
<span class="token punctuation">[</span>root@web1 command<span class="token punctuation">]</span><span class="token comment"># kubectl describe rs ngx-rs </span>
Name:         ngx-rs
Namespace:    default
Selector:     <span class="token assign-left variable">app</span><span class="token operator">=</span>ngx
Labels:       <span class="token assign-left variable">app</span><span class="token operator">=</span>ngx
              <span class="token assign-left variable">version</span><span class="token operator">=</span>v1
Annotations:  author: sentiger
Replicas:     <span class="token number">2</span> current / <span class="token number">2</span> desired
Pods Status:  <span class="token number">2</span> Running / <span class="token number">0</span> Waiting / <span class="token number">0</span> Succeeded / <span class="token number">0</span> Failed
Pod Template:
  Labels:  <span class="token assign-left variable">app</span><span class="token operator">=</span>ngx
  Containers:
   ngx:
    Image:        nginx:1.18-alpine
    Port:         <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Host Port:    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Environment:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Mounts:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
  Volumes:        <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Events:
  Type    Reason            Age   From                   Message
  ----    ------            ----  ----                   -------
  Normal  SuccessfulCreate  16s   replicaset-controller  Created pod: ngx-rs-ws8rh
  Normal  SuccessfulCreate  16s   replicaset-controller  Created pod: ngx-rs-6z64n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h2><p>deployment\u662F\u4E00\u4E2A\u66F4\u9AD8\u7EA7\u7684\u63A7\u5236\u5668\uFF0C\u7528\u6765\u7BA1\u7406replicaset\uFF0C\u63D0\u4F9B\u6EDA\u52A8\u66F4\u65B0\uFF0C\u53D1\u5E03\u7B49\u9AD8\u7EA7\u64CD\u4F5C</p><p><strong>deployment\u7BA1\u7406rs,pod</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. deployment\u5B9A\u4E49\u4E86\u6807\u7B7E\u9009\u62E9\uFF0C\u4F1A\u751F\u6210\u76F8\u5E94\u7684rs\uFF0C\u901A\u8FC7describe\u53EF\u4EE5\u5173\u8054\u8D77\u751F\u6210\u7684rs\uFF08NewReplicaSet\uFF09
2. \u901A\u8FC7\u9009\u5219\u7684rs\uFF0C\u7136\u540Edescibe\uFF0C\u627E\u5230selector\u7684\u6807\u7B7E\uFF0C\u9009\u51FA\u5BF9\u5E94\u7684pod
3. deployment\u4E3A\u6BCF\u4E2Ars\u751F\u6210\u4E00\u4E2Atemplate-hash \u6807\u7B7E\uFF0C\u8FD9\u4E2A\u6807\u7B7E\u662F\u901A\u8FC7template\u751F\u6210\u7684hash\uFF0C\u5BF9\u4E8E\u5B8C\u5168\u76F8\u540C\u7684template\uFF0C\u662F\u4F1A\u751F\u6210\u4E00\u6837\u7684hash\uFF0C\u5BFC\u81F4\u6700\u7EC8\u7BA1\u7406\u7684pod\u90FD\u53EF\u80FD\u4E00\u6837


\u6CE8\u610F\uFF1A
 \u5F88\u591A\u7B2C\u4E09\u65B9\u7BA1\u7406\u8F6F\u4EF6\u662F\u76F4\u63A5\u901A\u8FC7label\u6765\u9009\u62E9rs\uFF0C\u7136\u540E\u901A\u8FC7rs\u6765\u9009\u62E9pod\uFF0C\u8FD9\u91CC\u662F\u6709\u95EE\u9898\u7684\u3002\u56E0\u4E3A\u5F88\u591A\u65F6\u5019deployment\u5B9A\u4E49\u7684\u9009\u62E9\u6807\u7B7E\u662F\u4E00\u4E2A\u3002
 \u6240\u4EE5\u4E3A\u4E86\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\uFF1Alabel\u4E0D\u80FD\u968F\u610F\u5B9A\u4E49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@web1 command<span class="token punctuation">]</span><span class="token comment"># kubectl describe deployments.apps ngx-dep </span>
Name:                   ngx-dep
Namespace:              default
CreationTimestamp:      Tue, <span class="token number">23</span> Aug <span class="token number">2022</span> <span class="token number">17</span>:16:21 +0800
Labels:                 <span class="token assign-left variable">app</span><span class="token operator">=</span>ngx
Annotations:            author: sentiger
                        deployment.kubernetes.io/revision: <span class="token number">1</span>
Selector:               <span class="token assign-left variable">app</span><span class="token operator">=</span>ngx
Replicas:               <span class="token number">2</span> desired <span class="token operator">|</span> <span class="token number">2</span> updated <span class="token operator">|</span> <span class="token number">2</span> total <span class="token operator">|</span> <span class="token number">2</span> available <span class="token operator">|</span> <span class="token number">0</span> unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        <span class="token number">0</span>
RollingUpdateStrategy:  <span class="token number">25</span>% max unavailable, <span class="token number">25</span>% max surge
Pod Template:
  Labels:       <span class="token assign-left variable">app</span><span class="token operator">=</span>ngx
                <span class="token assign-left variable">version</span><span class="token operator">=</span>v1
  Annotations:  author: qi
  Containers:
   ngx:
    Image:        nginx:1.18-alpine
    Port:         <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Host Port:    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Environment:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Mounts:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
  Volumes:        <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Available      True    MinimumReplicasAvailable
  Progressing    True    NewReplicaSetAvailable
OldReplicaSets:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
NewReplicaSet:   ngx-dep-69558779b7 <span class="token punctuation">(</span><span class="token number">2</span>/2 replicas created<span class="token punctuation">)</span>
Events:
  Type    Reason             Age   From                   Message
  ----    ------             ----  ----                   -------
  Normal  ScalingReplicaSet  13s   deployment-controller  Scaled up replica <span class="token builtin class-name">set</span> ngx-dep-69558779b7 to <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function _(x,f){const s=i("ExternalLinkIcon");return t(),o("div",null,[c,d,n("p",null,[v,n("a",u,[m,a(s)]),b,n("a",k,[g,a(s)])]),h])}var R=l(p,[["render",_],["__file","01-pod.html.vue"]]);export{R as default};

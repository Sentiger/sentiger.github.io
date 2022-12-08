import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as t,c as o,a as n,b as a,d as e,e as r}from"./app.7c93c5ba.js";var d="/assets/rancher-pod.753df264.png";const p={},c=n("p",null,"ReplicaSet\u7528\u6765\u7BA1\u7406Pod\uFF0C\u5E76\u4E14\u7EF4\u62A4Pod\u6570\u91CF\u548C\u671F\u671B\u72B6\u6001\u4E00\u81F4\u3002\u5176\u5B9EReplicaSet\u597D\u6BD4\u4E00\u4E2A\u8FDB\u7A0B\u7BA1\u7406\u5668\u6765\u7BA1\u7406Pod\u8FD9\u4E9B\u8FDB\u7A0B\u3002",-1),v=n("p",null,"Deployment\u662F\u66F4\u9AD8\u7684\u4E00\u5C42\u63A7\u5236\u5668\uFF0C\u7528\u6765\u7BA1\u7406ReplicaSet\uFF0C\u80FD\u591F\u5B9E\u73B0\u670D\u52A1\u53D1\u5E03\uFF0C\u56DE\u6EDA\u7B49\u5404\u79CD\u9AD8\u7EA7\u529F\u80FD\uFF0C\u5185\u90E8\u4F1A\u81EA\u52A8\u7684\u7EF4\u62A4Replicaset",-1),m=e("\u53C2\u8003\u5B8C\u6574API\u6587\u6863 "),u={href:"https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/deployment-v1/",target:"_blank",rel:"noopener noreferrer"},b=e("deployment"),k=e(","),g={href:"https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/replica-set-v1/",target:"_blank",rel:"noopener noreferrer"},h=e("replicaset"),x=r(`<h2 id="replicaset\u7BA1\u7406pod" tabindex="-1"><a class="header-anchor" href="#replicaset\u7BA1\u7406pod" aria-hidden="true">#</a> ReplicaSet\u7BA1\u7406Pod</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u901A\u8FC7\u81EA\u5B9A\u4E49\u7684label\u6765\u9009\u62E9\uFF0C\u5982\u679C\u5B9A\u4E49\u4E00\u4E2APod\uFF0Clabel\u548Creplicaset\u4E2D\u7684selector\u4E00\u81F4\uFF0C\u5219\u4F1A\u88AB\u63A5\u7BA1</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rs\u7BA1\u7406pod" tabindex="-1"><a class="header-anchor" href="#rs\u7BA1\u7406pod" aria-hidden="true">#</a> rs\u7BA1\u7406pod</h3><p>\u5BF9\u4E8E\u67D0\u4E9B API \u7C7B\u522B\uFF08\u4F8B\u5982 ReplicaSet\uFF09\u800C\u8A00\uFF0C\u4E24\u4E2A\u5B9E\u4F8B\u7684\u6807\u7B7E\u9009\u62E9\u7B97\u7B26\u4E0D\u5F97\u5728\u547D\u540D\u7A7A\u95F4\u5185\u91CD\u53E0\uFF0C \u5426\u5219\u5B83\u4EEC\u7684\u63A7\u5236\u5668\u5C06\u4E92\u76F8\u51B2\u7A81\uFF0C\u65E0\u6CD5\u786E\u5B9A\u5E94\u8BE5\u5B58\u5728\u7684\u526F\u672C\u4E2A\u6570\u3002</p><ol><li>ReplicaSet \u901A\u8FC7 Pod \u4E0A\u7684 metadata.ownerReferences \u5B57\u6BB5\u8FDE\u63A5\u5230\u9644\u5C5E Pod\uFF0C\u8BE5\u5B57\u6BB5\u7ED9\u51FA\u5F53\u524D\u5BF9\u8C61\u7684\u5C5E\u4E3B\u8D44\u6E90\u3002 ReplicaSet \u6240\u83B7\u5F97\u7684 Pod \u90FD\u5728\u5176 ownerReferences \u5B57\u6BB5\u4E2D\u5305\u542B\u4E86\u5C5E\u4E3B ReplicaSet \u7684\u6807\u8BC6\u4FE1\u606F\u3002\u6B63\u662F\u901A\u8FC7\u8FD9\u4E00\u8FDE\u63A5\uFF0CReplicaSet \u77E5\u9053\u5B83\u6240\u7EF4\u62A4\u7684 Pod \u96C6\u5408\u7684\u72B6\u6001\uFF0C \u5E76\u636E\u6B64\u8BA1\u5212\u5176\u64CD\u4F5C\u884C\u4E3A\u3002</li><li>ReplicaSet \u4F7F\u7528\u5176\u9009\u62E9\u7B97\u7B26\u6765\u8FA8\u8BC6\u8981\u83B7\u5F97\u7684 Pod \u96C6\u5408\u3002\u5982\u679C\u67D0\u4E2A Pod \u6CA1\u6709 OwnerReference \u6216\u8005\u5176 OwnerReference \u4E0D\u662F\u4E00\u4E2A\u63A7\u5236\u5668\uFF0C \u4E14\u5176\u5339\u914D\u5230\u67D0 ReplicaSet \u7684\u9009\u62E9\u7B97\u7B26\uFF0C\u5219\u8BE5 Pod \u7ACB\u5373\u88AB\u6B64 ReplicaSet \u83B7\u5F97\u3002</li><li>\u5BF9\u4E8E\u72EC\u7ACB\u7684Pod\u6CA1\u6709\u88AB\u63A7\u5236\u5668\u6240\u7BA1\u7406\uFF0C\u5982\u679C\u6807\u7B7E\u548Crs\u9009\u62E9\u6807\u7B7E\u4E00\u81F4\uFF0C\u5219\u4F1A\u88AB\u63A5\u7BA1</li></ol><h3 id="\u6807\u7B7E\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u9009\u62E9" aria-hidden="true">#</a> \u6807\u7B7E\u9009\u62E9</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-rs
  namespace: default
  labels:
    app: nginx
    version: v1
  annotations:
    author: sentiger

spec:
  replicas: <span class="token number">3</span>
  selector:
    matchLabels:
      app: nginx
    matchExpressions:
    - <span class="token punctuation">{</span>key: app, operator: In, values: <span class="token punctuation">[</span>nginx<span class="token punctuation">]</span><span class="token punctuation">}</span>
    - <span class="token punctuation">{</span>key: app, operator: NotIn, values: <span class="token punctuation">[</span>mysql<span class="token punctuation">]</span><span class="token punctuation">}</span>
    - <span class="token punctuation">{</span>key: app, operator: Exists<span class="token punctuation">}</span>
    - <span class="token punctuation">{</span>key: pod, operator: DoesNotExist<span class="token punctuation">}</span>

  template:
    metadata:
      labels:
        app: nginx
        version: v1
    spec:
      nodeSelector:
        kubernetes.io/hostname: web1
      containers:
      - name: nginx
        image: nginx:1.18-alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h2><p>deployment\u662F\u4E00\u4E2A\u66F4\u9AD8\u7EA7\u7684\u63A7\u5236\u5668\uFF0C\u7528\u6765\u7BA1\u7406replicaset\uFF0C\u63D0\u4F9B\u6EDA\u52A8\u66F4\u65B0\uFF0C\u53D1\u5E03\u7B49\u9AD8\u7EA7\u64CD\u4F5C</p><p><strong>deployment\u7BA1\u7406rs,pod</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. deployment\u5B9A\u4E49\u4E86\u6807\u7B7E\u9009\u62E9\uFF0C\u4F1A\u751F\u6210\u76F8\u5E94\u7684rs\uFF0C\u901A\u8FC7describe\u53EF\u4EE5\u5173\u8054\u8D77\u751F\u6210\u7684rs\uFF08NewReplicaSet\uFF09
2. \u901A\u8FC7\u9009\u5219\u7684rs\uFF0C\u7136\u540Edescibe\uFF0C\u627E\u5230selector\u7684\u6807\u7B7E\uFF0C\u9009\u51FA\u5BF9\u5E94\u7684pod
3. deployment\u4E3A\u6BCF\u4E2Ars\u751F\u6210\u4E00\u4E2Atemplate-hash \u6807\u7B7E\uFF0C\u8FD9\u4E2A\u6807\u7B7E\u662F\u901A\u8FC7template\u751F\u6210\u7684hash\uFF0C\u5BF9\u4E8E\u5B8C\u5168\u76F8\u540C\u7684template\uFF0C\u662F\u4F1A\u751F\u6210\u4E00\u6837\u7684hash\uFF0C\u5BFC\u81F4\u6700\u7EC8\u7BA1\u7406\u7684pod\u90FD\u53EF\u80FD\u4E00\u6837


\u6CE8\u610F\uFF1A
 \u5F88\u591A\u7B2C\u4E09\u65B9\u7BA1\u7406\u8F6F\u4EF6\u662F\u76F4\u63A5\u901A\u8FC7label\u6765\u9009\u62E9rs\uFF0C\u7136\u540E\u901A\u8FC7rs\u6765\u9009\u62E9pod\uFF0C\u8FD9\u91CC\u662F\u6709\u95EE\u9898\u7684\u3002\u56E0\u4E3A\u5F88\u591A\u65F6\u5019deployment\u5B9A\u4E49\u7684\u9009\u62E9\u6807\u7B7E\u662F\u4E00\u4E2A\u3002
 \u6240\u4EE5\u4E3A\u4E86\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\uFF1Alabel\u4E0D\u80FD\u968F\u610F\u5B9A\u4E49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7BA1\u7406rs" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406rs" aria-hidden="true">#</a> \u7BA1\u7406rs</h3><ol><li>deployment\u4E5F\u662F\u901A\u8FC7\u6807\u7B7E\u627E\u5230\u5BF9\u5E94\u7684rs</li><li>\u7136\u540Ers\u4E2D\u6709\u4E00\u4E2A<code>Controlled By: Deployment/nginx-deployment-2</code>\u3002\u5373\u4F7F\u662F\u5B9A\u4E49\u6807\u7B7Eselector\u76F8\u540C\u7684\uFF0C\u4E5F\u662F\u80FD\u533A\u5206\uFF0C\u88AB\u8C01\u63A7\u5236\u4E86\u3002</li><li>\u5982\u679C\u624B\u52A8\u521B\u5EFArs\uFF0C\u5219rs\u662F\u6CA1\u6709\u88AB\u4E0A\u5C42\u63A7\u5236\u5668\u6240\u7BA1\u7406\uFF0C\u5982\u679C\u6807\u7B7E\u548C\u80FD\u88ABdeployment\u5339\u914D\u4E0A\uFF0C\u5219\u88AB\u63A5\u7BA1\uFF0C\u7136\u540E\u5220\u9664rs\u4E2D\u7684pod</li></ol><p><strong>\u6CE8\u610F</strong> \u50CF\u5F88\u591A\u7BA1\u7406\u8F6F\u4EF6\uFF0C\u5219\u76F4\u63A5\u662F\u901A\u8FC7\u6807\u7B7E\u9009\u62E9\uFF0C\u800C\u5FFD\u7565\u4E86rs\u662F\u5426\u88AB\u54EA\u4E2Adeployment\u6240\u7BA1\u7406\uFF0C\u7136\u540E\u5217\u51FA\u5176\u4E2D\u7684pod\u4E5F\u662F\u5B8C\u5168\u901A\u8FC7\u6807\u7B7E\u6765\u5B9E\u73B0\u7684\u3002\u8FD9\u91CC\u5176\u5B9E\u662F\u6709\u95EE\u9898\u7684</p><p>\u4F8B\u5982rancher\u4E2D\u5C31\u6709\u8FD9\u4E2A\u95EE\u9898</p><p><img src="`+d+`" alt="img.png" loading="lazy"></p><h3 id="\u4E0A\u7EBF\u72B6\u6001-\u5386\u53F2\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u7EBF\u72B6\u6001-\u5386\u53F2\u7248\u672C" aria-hidden="true">#</a> \u4E0A\u7EBF\u72B6\u6001\uFF0C\u5386\u53F2\u7248\u672C</h3><p>deployment\u662F\u4E00\u4E2A\u66F4\u9AD8\u7EA7\u7684\u63A7\u5236\u5668\uFF0C\u63D0\u4F9B\u4E0A\u7EBF\u64CD\u4F5C\uFF08\u6EDA\u52A8\u66F4\u65B0\uFF09\uFF0C\u5386\u53F2\u7248\u672C\u56DE\u9000\u7B49\u4FE1\u606F\u5F88\u5F3A\u5927\u3002\u89E6\u53D1\u4E0A\u7EBF\u64CD\u4F5C\u53EA\u6709template\u66F4\u6539\u4E86\u3002\u5BF9\u4E8E\u526F\u672C\u6570\u589E\u52A0\u51CF\u5C11\u662F\u4E0D\u4F1A\u89E6\u53D1\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u4E0A\u7EBF\u72B6\u6001 rollout \u4E0A\u7EBF</span>
kubectl rollout status deployment nginx-deployment

<span class="token comment"># \u67E5\u770B\u5386\u53F2\u7248\u672C</span>
kubectl rollout <span class="token function">history</span> deployment nginx-deployment
<span class="token comment"># REVERSION: \u7248\u672C\uFF0CCHANGE-CAUSE\u662F\u7248\u672C\u8BB0\u5F55\u63CF\u8FF0\uFF0C\u8FD9\u4E2A\u662F\u5F15\u7528annotations: \u4E2D\u7684kubernetes.io/change-cause: \u7248\u672C\u65E5\u5FD7</span>
<span class="token comment"># \u624B\u52A8\u66F4\u65B0\u65E5\u5FD7 kubectl annotate deployments.apps nginx-deployment kubernetes.io/change-cause=&#39;\u6D4B\u8BD5\u7248 \u672C&#39;</span>
<span class="token comment">#deployment.apps/nginx-deployment </span>
<span class="token comment">#REVISION  CHANGE-CAUSE</span>
<span class="token comment">#1         nginx\u955C\u50CF\u7248\u672C\u4E3Anginx</span>

<span class="token comment"># \u67E5\u770B\u5386\u53F2\u7248\u672C\u8BE6\u7EC6\u4FE1\u606F</span>
kubectl rollout <span class="token function">history</span> deployment nginx-deployment --revision <span class="token number">2</span>

<span class="token comment"># \u7248\u672C\u56DE\u9000</span>
kubectl rollout undo deployment nginx-deployment --to-revision <span class="token number">1</span>

<span class="token comment"># \u7248\u672C\u539F\u7406</span>
<span class="token comment"># \u53D1\u5E03\u4E00\u4E2A\u65B0\u7684\u66F4\u65B0\uFF0C\u5219\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684rs\uFF0C\u7136\u540E\u5C06\u65E7\u7684rs\u4E2D\u7684pod\u6EDA\u52A8\u66F4\u65B0\u4E3A0\uFF0C\u6240\u4EE5\u7248\u672C\u56DE\u9000\u662F\u56DE\u9000\u5230\u6307\u5B9A\u7684rs\u3002\u9ED8\u8BA4\u662F\u4FDD\u755910\u4E2Ars\uFF0C\u53EF\u4EE5\u914D\u7F6E</span>
.spec.revisionHistoryLimit

<span class="token comment"># \u6682\u505C\u4E0A\u7EBF,\u5C31\u662F\u5728\u8FDB\u884Ctemplate\u7B49\u64CD\u4F5C\u4E4B\u540E\uFF0C\u6682\u65F6\u4E0D\u53D1\u5E03\uFF0C\u800C\u662F\u7B49\u4FEE\u6539\u5B8C\u4E4B\u540E\uFF0C\u7B49\u5F85\u5728\u53D1\u5E03</span>
kubectl rollout pause deployment nginx-deployment

<span class="token comment"># \u6062\u590D\u4E0A\u7EBF</span>
kubectl rollout resume deployment nginx-deployment 

<span class="token comment"># \u91CD\u65B0\u90E8\u7F72</span>
kubectl rollout restart deployment nginx-deployment

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@web1 command<span class="token punctuation">]</span><span class="token comment"># kubectl describe deployments.apps ngx-dep </span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function y(f,R){const s=l("ExternalLinkIcon");return t(),o("div",null,[c,v,n("p",null,[m,n("a",u,[b,a(s)]),k,n("a",g,[h,a(s)])]),x])}var P=i(p,[["render",y],["__file","02-deployment-rs.html.vue"]]);export{P as default};

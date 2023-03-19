import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as c,c as p,a as n,b as t,e as a,d as s}from"./app.0613cd51.js";const o={},u=a(`<p>kustomize\u4E3B\u8981\u4F7F\u7528\u6765\u7F16\u5199\u5F88\u591Ayaml\u6587\u4EF6\uFF0C\u8FD9\u4E9Byaml\u6587\u4EF6\u53C8\u5728\u4E0D\u540C\u7684\u73AF\u5883\u4E2D\u88AB\u4F7F\u7528\uFF0C\u91CD\u590D\u4FEE\u6539\u95EE\u9898\u3002\u5176\u5B9E\u6700\u7EC8\u90FD\u662F\u751F\u6210\u4E00\u4EFD\u5408\u5E76\u597D\u7684yaml\u3002</p><p>\u5176\u5B9E\u603B\u7ED3\u5C31\u662F\u901A\u8FC7\u4E00\u4E2A\u6A21\u7248\u6765\u751F\u6210\u4E0D\u540C\u73AF\u5883\u7684\u914D\u7F6E\uFF0C\u53C8\u53EF\u4EE5\u5BF9\u6A21\u7248\u8FDB\u884C\u6269\u5C55\u3002</p><h2 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F53\u524D\u76EE\u5F55\u4E0B\u6709kustomization.yaml\u914D\u7F6E</span>
kubectl kustomize <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u7840\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u5408\u5E76" aria-hidden="true">#</a> \u57FA\u7840\u5408\u5E76</h2><p>\u901A\u8FC7<code>resources</code>\u8D44\u6E90\u8FDB\u884C\u5408\u5E76</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># kustomization.yaml</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> kustomize.config.k8s.io/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Kustomization

<span class="token comment"># \u5408\u5E76deployment.yaml\u548Cservice.yaml\u4E3A\u4E00\u4E2A</span>
<span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> deployment.yaml
  <span class="token punctuation">-</span> service.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u7840\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u66FF\u6362" aria-hidden="true">#</a> \u57FA\u7840\u66FF\u6362</h2>`,8),r=s("\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6A21\u7248\uFF0C\u7136\u540E\u5B9A\u4E49\u5176\u4E2D\u7684\u503C\u3002\u66F4\u591A\u66FF\u6362\u53EF\u53C2\u8003"),d={href:"https://kubectl.docs.kubernetes.io/references/kustomize/",target:"_blank",rel:"noopener noreferrer"},m=s("kustomize"),k=a(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> kustomize.config.k8s.io/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Kustomization
<span class="token comment"># \u5C06\u5408\u5E76\u4E2D\u7684\u8D44\u6E90namespace\u8BBE\u7F6E\u4E3Adefault</span>
<span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> deployment.yaml
  <span class="token punctuation">-</span> service.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h2><p>\u53EF\u4EE5\u901A\u8FC7<code>resources</code>\u7EE7\u627F\u6A21\u7248\uFF0C\u7136\u540E\u5B9A\u4E49\u4E0D\u540C\u7684\u73AF\u5883\u3002\u4E00\u822C\u7528\u6765\u505A\u591A\u73AF\u5883\u5F00\u53D1\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">namespace</span><span class="token punctuation">:</span> develop <span class="token comment"># \u4FEE\u6539namespace</span>

<span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ../../base <span class="token comment"># \u7EE7\u627F\u4E86base\u76EE\u5F55\u4E0B\u7684\u914D\u7F6E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8865\u4E01" tabindex="-1"><a class="header-anchor" href="#\u8865\u4E01" aria-hidden="true">#</a> \u8865\u4E01</h2><p>\u4E0A\u9762\u6587\u6863\u4E2D\u63D0\u4F9B\u4E86\u5E38\u7528\u7684\u6A21\u7248\u4FEE\u6539\u3002\u4F46\u662F\u5BF9\u4E8E\u6CA1\u6709\u63D0\u4F9B\u7684\u53C2\u6570\uFF0C\u662F\u53EF\u4EE5\u901A\u8FC7\u8865\u4E01\u6765\u8FDB\u884C\u4FEE\u6539\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">namespace</span><span class="token punctuation">:</span> develop

<span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ../../base

<span class="token key atrule">patchesStrategicMerge</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> image.yaml <span class="token comment"># \u8FD9\u4E2A\u662F\u8865\u4E01\u7248\u672C\u8981\u4FEE\u6539\u7684</span>
    
<span class="token comment"># image.yaml </span>
<span class="token comment"># \u8FD9\u4E2A\u914D\u7F6E\u662F\u901A\u8FC7metadata.name\u67E5\u627E\u5BF9\u5E94\u7684\u914D\u7F6E\uFF0C\u7136\u540E\u5C42\u7EA7\u4FEE\u6539\u4E0E\u66FF\u6362</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx <span class="token comment"># \u5982\u679C\u80FD\u5728\u7236\u7EA7\u627E\u5230\u76F8\u540Cname\uFF0C\u5219\u4FEE\u6539\u3002\u5426\u5219\u65B0\u589E\u4E00\u4E2Acontainer</span>
          <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.22<span class="token punctuation">-</span>alpine
          <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u901A\u8FC7patchesjson6902\u8865\u4E01" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7patchesjson6902\u8865\u4E01" aria-hidden="true">#</a> \u901A\u8FC7patchesJson6902\u8865\u4E01</h2><p><code>patchesStrategicMerge</code>\u8FD9\u4E2A\u662F\u5408\u5E76\u548C\u66FF\u6362\uFF0C\u4F46\u662F\u5BF9\u4E8E\u6570\u7EC4\u7684\u64CD\u4F5C\uFF0C\u5C31\u6CA1\u6CD5\u8FDB\u884C\u66FF\u6362\u4E86\u3002\u4F8B\u5982\u66FF\u6362\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u3002</p>`,9),v=s("\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u9897\u7C92\u5EA6\u66F4\u5C0F\u7684\u8FDB\u884C\u4FEE\u6539\u3002\u901A\u8FC7"),b=n("code",null,"jsonpath",-1),h=s("\u8FDB\u884C\u64CD\u4F5C\u3002"),y={href:"https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patchesjson6902/",target:"_blank",rel:"noopener noreferrer"},g=s("patchesJson6902"),f=a(`<h2 id="configmap" tabindex="-1"><a class="header-anchor" href="#configmap" aria-hidden="true">#</a> configmap</h2><p>configmap\u4E5F\u662F\u53EF\u4EE5\u8BBE\u7F6E\u516C\u5171\u7684\u914D\u7F6E\uFF0C\u7136\u540E\u901A\u8FC7<code>resources</code>\u8FDB\u884C\u5408\u5E76\uFF0C\u4F46\u662F<code>configmap</code>\u548C<code>secret</code>\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EF\u4EE5\u901A\u8FC7\u63D0\u4F9B\u7684\u914D\u7F6E\u81EA\u52A8\u751F\u6210\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># Generator \u63A7\u5236\u751F\u6210configmap\u548Csecret\u7684</span>
<span class="token key atrule">generatorOptions</span><span class="token punctuation">:</span>
  <span class="token key atrule">disableNameSuffixHash</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># \u7981\u6B62name hash\u503C\uFF0C\u5176\u5B9E\u6709hash\u9632\u6B62name\u91CD\u590D</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment"># \u65B0\u589E\u6807\u7B7E</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> cfg
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">author</span><span class="token punctuation">:</span> sentiger

<span class="token comment"># \u751F\u6210configmap\uFF0C\u4E5F\u53EF\u4EE5\u751F\u6210secret secretGenerator</span>
<span class="token key atrule">configMapGenerator</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">literals</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> user=root
      <span class="token punctuation">-</span> password=root

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">files</span><span class="token punctuation">:</span> <span class="token comment"># \u5BF9\u4E8E\u503C\u6BD4\u8F83\u5927\u7684\u6587\u672C\uFF0C\u53EF\u4EE5\u901A\u8FC7files\u914D\u7F6E\uFF0C\u914D\u7F6E\u6587\u4EF6\u91CC\u9762\u76F4\u63A5\u662F\u5199\u503C</span>
      <span class="token punctuation">-</span> mysql<span class="token punctuation">-</span>cfg=mysql.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528vars\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528vars\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4F7F\u7528vars\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</h2>`,4),_=s("\u6A21\u7248\u4E2D\u7684\u73AF\u5883\u53D8\u91CFenv\u548Ccommand\u4E2D\u7684\u53D8\u91CF\u901A\u8FC7configmap\uFF08\u5176\u4ED6\u8D44\u6E90\uFF09\u4E2D\u83B7\u53D6\u3002"),x={href:"https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/vars/",target:"_blank",rel:"noopener noreferrer"},z=s("vars"),q=a(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> myimage
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--host&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$(nginx_cfg)&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">env</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> SECRET_TOKEN
      <span class="token key atrule">value</span><span class="token punctuation">:</span> $(nginx_cfg)

<span class="token punctuation">---</span>

<span class="token key atrule">vars</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx_cfg
    <span class="token key atrule">objref</span><span class="token punctuation">:</span>
      <span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap
      <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
      <span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">fieldref</span><span class="token punctuation">:</span> <span class="token comment"># \u8FD9\u4E2A\u662F\u5173\u8054configmap\u91CC\u9762\u5B57\u6BB5\u7684\u503C\u3002\u5982\u679C\u4E0D\u914D\u7F6E\u8FD9\u4E2A\uFF0C\u5219\u662F\u76F4\u63A5\u5F15\u7528\u67D0\u4E2A\u53D8\u91CF\u540D</span>
      <span class="token key atrule">fieldpath</span><span class="token punctuation">:</span> data.user <span class="token comment"># \u4F7F\u7528configmap\u7684\u8DEF\u5F84\u67E5\u627E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function V(E,N){const e=l("ExternalLinkIcon");return c(),p("div",null,[u,n("p",null,[r,n("a",d,[m,t(e)])]),k,n("p",null,[v,b,h,n("a",y,[g,t(e)])]),f,n("p",null,[_,n("a",x,[z,t(e)])]),q])}var K=i(o,[["render",V],["__file","06-kustomize.html.vue"]]);export{K as default};

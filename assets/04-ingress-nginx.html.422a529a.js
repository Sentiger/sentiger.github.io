import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as l,c,a as n,b as a,d as s,e as p}from"./app.60415db9.js";const r={},o=n("h2",{id:"k8s1-25\u5B89\u88C5ingress-nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#k8s1-25\u5B89\u88C5ingress-nginx","aria-hidden":"true"},"#"),s(" k8s1.25\u5B89\u88C5ingress-nginx")],-1),u=s("github\u5730\u5740:"),d={href:"https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/index.md",target:"_blank",rel:"noopener noreferrer"},v=s("ingress-nginx\u5730\u5740"),k={href:"https://kubernetes.github.io/ingress-nginx/examples/rewrite/",target:"_blank",rel:"noopener noreferrer"},m=s("ingress-nginx\u6587\u6863"),b={href:"https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml",target:"_blank",rel:"noopener noreferrer"},g=s("deploy"),h=p(`<h3 id="deploy\u914D\u7F6E\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#deploy\u914D\u7F6E\u4FEE\u6539" aria-hidden="true">#</a> deploy\u914D\u7F6E\u4FEE\u6539</h3><ul><li>\u4FEE\u6539\u91CC\u9762\u7684image\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>easyyun</code>\u4E2D\u7684\u955C\u50CF\uFF0C\u6216\u8005\u76F4\u63A5\u627E\u5BF9\u5E94\u7248\u672C\u7684</li><li>\u5982\u679C\u6CA1\u6709LoadBalancer, \u5219\u53EF\u4EE5\u4FEE\u6539\u91CC\u9762\u7684Deployment\uFF0C\u8BBE\u7F6Epod\u4F4DhostNetwork</li><li>\u53EF\u4EE5\u8BBE\u7F6Eingress-nginx-controller\u4E3ADaemonSet</li></ul><h2 id="ingress-nginx\u914D\u7F6Etcp\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#ingress-nginx\u914D\u7F6Etcp\u8F6C\u53D1" aria-hidden="true">#</a> ingress-nginx\u914D\u7F6Etcp\u8F6C\u53D1</h2><p>ingress-nginx \u56DB\u5C42\u8F6C\u53D1\u90FD\u662F\u914D\u7F6E\u5230ConfigMap\u4E2D\u7684\uFF0C\u7136\u540Eingress-nginx-controller\u542F\u52A8\u7684\u65F6\u5019\u76D1\u542C\u8FD9\u4E2AConfigMap\u5C31\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
# 1\u3001 \u5B9A\u4E49configmap
tcp-services.yaml

apiVersion: v1
kind: ConfigMap
metadata:
  # name\u7684\u503C\u4E0Eargs\u53C2\u6570\u4E2D\u7684\u4E00\u81F4
  name: tcp-services
  namespace: ingress-nginx
data:
  # \u683C\u5F0F
  # port: &quot;&lt;namespace&gt;/&lt;service name&gt;:&lt;service port&gt;&quot;
  # port: ingress\u5BF9\u5916\u66B4\u9732\u7684\u7AEF\u53E3
  # namespace: \u5E94\u7528\u6240\u5728\u7684namespace
  # service name: \u5E94\u7528\u7684service name
  # service port: \u5E94\u7528\u7684service port
  &quot;8088&quot;: &quot;ey-dev/openapi:80&quot;
  
  
# 2. \u542F\u52A8ingress-nginx-controller\u4E2D\u914D\u7F6E

- args:
- /nginx-ingress-controller

- --tcp-services-configmap=ingress-nginx/tcp-services # \u65B0\u589Etcp\u8F6C\u53D1
- --udp-services-configmap=ingress-nginx/udp-services # \u65B0\u589Eudp\u8F6C\u53D1
 
3. \u914D\u7F6E\u597D\u53EF\u4EE5\u8FDB\u884C\u65E5\u5FD7\u67E5\u770B\uFF0C\u6216\u8005\u76F4\u63A5\u8FDB\u5165ingress-nginx-controller\u5BB9\u5668\u4E2D\u67E5\u770Bnginx.conf\uFF0C\u4F1A\u53D1\u73B0\u6709\u4E86\u5BF9\u5E94\u7684\u914D\u7F6E  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ingress-nginx\u914D\u7F6E\u540E\u7AEFhttps" tabindex="-1"><a class="header-anchor" href="#ingress-nginx\u914D\u7F6E\u540E\u7AEFhttps" aria-hidden="true">#</a> ingress-nginx\u914D\u7F6E\u540E\u7AEFhttps</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> rancher
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8843</span>
    
    
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Endpoints
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> rancher
<span class="token key atrule">subsets</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">addresses</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">ip</span><span class="token punctuation">:</span> 172.16.188.102
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8843</span>

<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> rancher
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/proxy-body-size</span><span class="token punctuation">:</span> 5m
    <span class="token key atrule">nginx.ingress.kubernetes.io/backend-protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;HTTPS&quot;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> rancher.easyyun.com
    <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /
        <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> rancher
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">443</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(x,_){const e=t("ExternalLinkIcon");return l(),c("div",null,[o,n("ul",null,[n("li",null,[u,n("a",d,[v,a(e)])]),n("li",null,[n("a",k,[m,a(e)])])]),n("p",null,[n("a",b,[g,a(e)])]),h])}var V=i(r,[["render",y],["__file","04-ingress-nginx.html.vue"]]);export{V as default};

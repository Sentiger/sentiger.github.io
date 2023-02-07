import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as l,c as p,a as n,b as e,d as s,e as c}from"./app.870fac28.js";const r={},u=n("h2",{id:"k8s1-25\u5B89\u88C5ingress-nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#k8s1-25\u5B89\u88C5ingress-nginx","aria-hidden":"true"},"#"),s(" k8s1.25\u5B89\u88C5ingress-nginx")],-1),o=s("github\u5730\u5740:"),d={href:"https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/index.md",target:"_blank",rel:"noopener noreferrer"},v=s("ingress-nginx\u5730\u5740"),k={href:"https://kubernetes.github.io/ingress-nginx/examples/rewrite/",target:"_blank",rel:"noopener noreferrer"},m=s("ingress-nginx\u6587\u6863"),b={href:"https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.5.1/deploy/static/provider/cloud/deploy.yaml",target:"_blank",rel:"noopener noreferrer"},g=s("deploy"),y=c(`<h3 id="deploy\u914D\u7F6E\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#deploy\u914D\u7F6E\u4FEE\u6539" aria-hidden="true">#</a> deploy\u914D\u7F6E\u4FEE\u6539</h3><ul><li>\u4FEE\u6539\u91CC\u9762\u7684image\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>easyyun</code>\u4E2D\u7684\u955C\u50CF\uFF0C\u6216\u8005\u76F4\u63A5\u627E\u5BF9\u5E94\u7248\u672C\u7684</li><li>\u5982\u679C\u6CA1\u6709LoadBalancer, \u5219\u53EF\u4EE5\u4FEE\u6539\u91CC\u9762\u7684Deployment\uFF0C\u8BBE\u7F6Epod\u4F4DhostNetwork</li><li>\u53EF\u4EE5\u8BBE\u7F6Eingress-nginx-controller\u4E3ADaemonSet</li></ul><h2 id="ingress-nginx\u914D\u7F6Etcp\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#ingress-nginx\u914D\u7F6Etcp\u8F6C\u53D1" aria-hidden="true">#</a> ingress-nginx\u914D\u7F6Etcp\u8F6C\u53D1</h2><p>ingress-nginx \u56DB\u5C42\u8F6C\u53D1\u90FD\u662F\u914D\u7F6E\u5230ConfigMap\u4E2D\u7684\uFF0C\u7136\u540Eingress-nginx-controller\u542F\u52A8\u7684\u65F6\u5019\u76D1\u542C\u8FD9\u4E2AConfigMap\u5C31\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6Ehttps\u4EE3\u7406\u670D\u52A1-\u4E14\u8BC1\u4E66\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Ehttps\u4EE3\u7406\u670D\u52A1-\u4E14\u8BC1\u4E66\u8BA4\u8BC1" aria-hidden="true">#</a> \u914D\u7F6Ehttps\u4EE3\u7406\u670D\u52A1\uFF0C\u4E14\u8BC1\u4E66\u8BA4\u8BC1</h2><p>\u901A\u8FC7ingress\u4EE3\u7406\u540E\u7AEF<code>apiserver</code></p><p><strong>nginx\u7684\u539F\u59CB\u914D\u7F6E\u662F\u8FD9\u6837</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>proxy_pass                https://backend.example.com;
proxy_ssl_certificate     /etc/nginx/client.pem;
proxy_ssl_certificate_key /etc/nginx/client.key;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u751F\u547D<code>tls</code>\u79D8\u94A5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD9\u91CC\u7684kubernetes-admin.crt,kubernetes-admin.crt,kubernetes-admin.key\u662F\u88C5k8s\u4E2D\u751F\u6210\u7684kubectl\u4E2D\u7684\u3002\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49\uFF0Cca.crt\u662Fapi-server\u4E2D\u7684/etc/kubernetes/pki/ca.key</span>
kubectl create secret generic apiserver --from-file<span class="token operator">=</span>tls.crt<span class="token operator">=</span>kubernetes-admin.crt --from-file<span class="token operator">=</span>tls.key<span class="token operator">=</span>kubernetes-admin.key --from-file<span class="token operator">=</span>ca.crt<span class="token operator">=</span>kubernetes-admin.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u901A\u8FC7ingress\u66B4\u9732apiserver</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> apiserver
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">6443</span>

<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Endpoints
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> apiserver
<span class="token key atrule">subsets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">addresses</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">ip</span><span class="token punctuation">:</span> 172.16.177.102
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">6443</span>
<span class="token punctuation">---</span>

<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> apiserver
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/proxy-body-size</span><span class="token punctuation">:</span> 5m
    <span class="token key atrule">nginx.ingress.kubernetes.io/backend-protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;HTTPS&quot;</span>
    <span class="token comment"># \u8BBE\u7F6E\u79D8\u94A5namespace/\u79D8\u94A5\u5B58\u653E\u7684secret,\u8FD9\u91CC\u9762\u4E00\u5B9A\u662Ftls.cert,tls.key,ca.crt\uFF0C\u8FD9\u91CC\u5F00\u59CB\u5C11\u4E86\u4E00\u4E2Aca.crt\uFF0C\u627E\u4E86\u597D\u4E45\uFF0C\u7136\u540E\u67E5\u6E90\u7801\u627E\u95EE\u9898\u4E86</span>
    <span class="token key atrule">nginx.ingress.kubernetes.io/proxy-ssl-secret</span><span class="token punctuation">:</span> <span class="token string">&quot;default/apiserver&quot;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ingressClassName</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> apiserver.easyyun.com
      <span class="token key atrule">http</span><span class="token punctuation">:</span>
        <span class="token key atrule">paths</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /
            <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
            <span class="token key atrule">backend</span><span class="token punctuation">:</span>
              <span class="token key atrule">service</span><span class="token punctuation">:</span>
                <span class="token key atrule">name</span><span class="token punctuation">:</span> apiserver
                <span class="token key atrule">port</span><span class="token punctuation">:</span>
                  <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">443</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u914D\u7F6E" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u914D\u7F6E</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">nginx.ingress.kubernetes.io/configuration-snippet</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
  set $flag 0;
  if ($uri !~ &quot;^(.+\\.php)&quot;) {
       set $flag &quot;\${flag}1&quot;;
  }
  if ($uri !~ &quot;^(.+\\.html)&quot;) {
       set $flag &quot;\${flag}2&quot;;
  }
  if ($flag = &quot;012&quot;){
      rewrite ^/(.*)$ /index.php/$1 last;
      break;
  }
  set $script    $uri;
  set $path_info  &quot;/&quot;;
  if ($uri ~ &quot;^(.+\\.php)(/.+)&quot;) {
          set $script     $1;
          set $path_info  $2;
  }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function h(x,f){const a=t("ExternalLinkIcon");return l(),p("div",null,[u,n("ul",null,[n("li",null,[o,n("a",d,[v,e(a)])]),n("li",null,[n("a",k,[m,e(a)])])]),n("p",null,[n("a",b,[g,e(a)])]),y])}var $=i(r,[["render",h],["__file","04-ingress-nginx.html.vue"]]);export{$ as default};

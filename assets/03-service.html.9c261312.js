import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as p,c,a as n,b as s,w as u,d as a,e as o}from"./app.2f02ce44.js";const r={},d=n("p",null,"service\u662F\u7ED9\u540E\u7AEFpod\u63D0\u4F9B\u8BBF\u95EE\u7684\u5165\u53E3\uFF0C\u80FD\u591F\u63D0\u4F9B\u540E\u7AEFpod\u8D1F\u8F7D\u5747\u8861\u548C\u81EA\u5B9A\u4E49\u7684endpoint\u3002\u521B\u5EFAService\u76EE\u524D\u63D0\u4F9B\u4EE5\u4E0B\u51E0\u79CD\u5E38\u89C1\u65B9\u5F0F",-1),v=n("p",null,[n("strong",null,"\u53C2\u8003")],-1),k={href:"https://kubernetes.io/zh-cn/docs/concepts/services-networking/service/",target:"_blank",rel:"noopener noreferrer"},m=a("service"),b={href:"https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/service-resources/service-v1/",target:"_blank",rel:"noopener noreferrer"},y=a("service-api"),h=a("\u6A21\u62DFkube-proxy-service\u5B9E\u73B0"),g=o(`<h2 id="\u521B\u5EFA\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u540E\u7AEF\u670D\u52A1</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
   <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deployment
   <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
   <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deployment
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
   <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
      <span class="token key atrule">author</span><span class="token punctuation">:</span> sentiger
      <span class="token key atrule">kubernetes.io/change-cause</span><span class="token punctuation">:</span> \u63D0\u4F9B\u7ED9Service\u6F14\u793A\u540E\u7AEF\u670D\u52A1

<span class="token key atrule">spec</span><span class="token punctuation">:</span>
   <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
   <span class="token key atrule">selector</span><span class="token punctuation">:</span>
      <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
         <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx

   <span class="token key atrule">template</span><span class="token punctuation">:</span>
      <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
         <span class="token key atrule">labels</span><span class="token punctuation">:</span>
            <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
         <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
            <span class="token key atrule">author</span><span class="token punctuation">:</span> sentiger
      <span class="token key atrule">spec</span><span class="token punctuation">:</span>
         <span class="token key atrule">containers</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ngx
              <span class="token key atrule">image</span><span class="token punctuation">:</span> ngin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clusterip" tabindex="-1"><a class="header-anchor" href="#clusterip" aria-hidden="true">#</a> ClusterIP</h2><p>ClusterIP\u662F\u4E00\u4E2A\u865A\u62DFIP\uFF08\u4E0D\u662F\u4E00\u4E2A\u771F\u5B9E\u7684\u8282\u70B9IP\uFF0C\u6CA1\u6709\u8282\u70B9\u652F\u6301\u5176\u534F\u8BAE\u6808\uFF09\u4E3B\u8981\u662F\u901A\u8FC7iptables\u63D0\u4F9BNAT\u8F6C\u6362\u3002\u6240\u4EE5Ping\u4E0D\u540C\uFF08Ping\u662FARP\u534F\u8BAE\uFF0C\u5230\u4E86\u534F\u8BAE\u6808\uFF09</p><p>\u8FD9\u4E2A\u53EA\u80FD\u5728\u96C6\u7FA4\u5185\u90E8\u8BBF\u95EE\uFF0C\u5728\u5916\u90E8\u901A\u8FC7\u8FD9\u4E2AIP\u8BBF\u95EE\u4E0D\u4E86</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> svc<span class="token punctuation">-</span>clusterip<span class="token punctuation">-</span>nginx
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubernetes.io/change-cause</span><span class="token punctuation">:</span> clusterip\u6F14\u793A

<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>  <span class="token comment"># \u901A\u8FC7\u9009\u62E9\u5668\u9009\u62E9\u5BF9\u5E94\u7684POD</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP <span class="token comment"># \u9ED8\u8BA4\u662FClusterIP</span>
  
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nodeport" tabindex="-1"><a class="header-anchor" href="#nodeport" aria-hidden="true">#</a> NodePort</h2><p>\u901A\u8FC7\u8BBF\u95EE\u5BBF\u4E3B\u673AIP:\u7AEF\u53E3\u6765\u8BBF\u95EE\u96C6\u7FA4\u5185\u5E94\u7528\u3002\u8FD9\u91CCNodePort\u8303\u56F4\u662F\u5728APIServer\u542F\u52A8\u7684\u65F6\u5019\u6307\u5B9A\u7684\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> baidu<span class="token punctuation">-</span>svc
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>  <span class="token comment"># \u901A\u8FC7\u9009\u62E9\u5668\u9009\u62E9\u5BF9\u5E94\u7684POD</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6D4B\u8BD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@web1 k8s-learn]# kubectl get svc
NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE
baidu-svc    NodePort    10.96.237.73   &lt;none&gt;        80:30001/TCP   2m40s
kubernetes   ClusterIP   10.96.0.1      &lt;none&gt;        443/TCP        6d22h

[root@web1 k8s-learn]# curl 139.198.165.7:30001
{&quot;code&quot;:200,&quot;message&quot;:&quot;2022-08-26 11:21:40,\\u6d4b\\u8bd5\\u5199\\u5165\\u65e5\\u5fd7:&quot;,&quot;result&quot;:{}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="externalips" tabindex="-1"><a class="header-anchor" href="#externalips" aria-hidden="true">#</a> ExternalIPs</h2><p>\u4E0A\u9762\u53EF\u4EE5\u901A\u8FC7\u7AEF\u53E3\u53F7\u6765\u66B4\u9732\u4E3B\u673AIP\u4ECE\u800C\u5B9E\u73B0\u8F6C\u53D1\u5230Service\uFF0C\u73B0\u5728\u60F3\u5B9E\u73B0\u5C06\u672C\u673AIP\u6216\u8005\u80FD\u5230\u8FBE\u7684IP\u66B4\u9732\u51FA\u53BB\u8BBF\u95EE</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> external<span class="token punctuation">-</span>svc
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> external<span class="token punctuation">-</span>svc<span class="token punctuation">-</span>nginx

<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx

  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token key atrule">externalIPs</span><span class="token punctuation">:</span> <span class="token comment"># 172.31.0.3\u8FD9\u4E2A\u662F\u4E3B\u673A\u8282\u70B9IP\uFF0C \u8FD9\u91CC\u53EF\u4EE5\u5C06\u6307\u5B9A\u7684Node\u8282\u70B9\u90FD\u5199\u5728\u8FD9\u91CC\uFF0C\u7136\u540E\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2AIP\u5C31\u80FD\u8BBF\u95EE\uFF0C\u5982\u679C\u662F\u4E91\u4E3B\u673A\uFF0C\u5219\u4E91\u4E3B\u673A\u4F1A\u8F6C\u53D1\u5230\u8FD9\u4E2A\u5185\u90E8IP</span>
  <span class="token punctuation">-</span> 172.31.0.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6D4B\u8BD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@web1 k8s-learn]# curl 172.31.0.3
&lt;!DOCTYPE html&gt;

\u6216\u8005\uFF08\u8FD9\u91CC\u662F\u4E91\u4E3B\u673A\u63D0\u4F9B\u7684\u5916\u7F51\uFF09
[root@web1 k8s-learn]# curl 139.198.165.7
&lt;!DOCTYPE html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="loadbalancer" tabindex="-1"><a class="header-anchor" href="#loadbalancer" aria-hidden="true">#</a> LoadBalancer</h2><p>TODO \uFF1A\u8FD9\u4E2A\u9700\u8981\u914D\u5408\u4E91\u5382\u5546\u7684\u8D1F\u8F7D\u5747\u8861\u5668</p><h2 id="\u81EA\u5B9A\u4E49\u540E\u7AEFpod" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u540E\u7AEFpod" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u540E\u7AEFPOD</h2><p>\u4E0A\u9762Service\u901A\u8FC7selector\u9009\u62E9\u96C6\u7FA4\u4E2D\u7684Pod\uFF0C\u610F\u601D\u8FD9\u4E2Aservice\u63D0\u4F9B\u670D\u52A1\u7684\u540E\u7AEF\u53EA\u80FD\u662F\u96C6\u7FA4\u5185\u7684\u5E94\u7528\uFF0C\u6709\u5F88\u5927\u7684\u9650\u5236\u3002\u4F8B\u5982\u6211\u60F3\u901A\u8FC7service\u8BBF\u95EE\u5916\u90E8\u7684\u8282\u70B9\u3002</p><p>\u4F8B\u5982\uFF1A\u5F00\u53D1\u73AF\u5883\u8BBF\u95EE\u7684\u6570\u636E\u5E93\u662F\u4E0D\u540C\u7684\u6765\u6E90\uFF0C\u4F46\u662F\u5BF9\u4E8E\u7A0B\u5E8F\u6765\u8BB2\u5982\u679C\u90FD\u5B9A\u4E49\u4E00\u4E2Aservice\uFF0C\u62BD\u8C61mysql\u670D\u52A1\uFF0C\u8FD9\u6837\u5C31\u65E0\u9700\u63D0\u4F9B\u4E0D\u540C\u73AF\u5883\u6709\u4E0D\u540C\u7684\u914D\u7F6E\u7684\u5DEE\u5F02\u4E86\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> cluster<span class="token punctuation">-</span>mysql
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">3306</span> 
    
    
<span class="token punctuation">---</span>
<span class="token comment"># \u5B9A\u4E49\u540E\u7AEF\u8282\u70B9\uFF0C\u8FD9\u6837\u7EBF\u4E0A\u7684\u65F6\u5019\u548C\u5F00\u53D1\u73AF\u5883\u7684\u540E\u7AEF\u8282\u70B9\u6307\u5B9A\u4E0D\u540C\u5C31\u884C\uFF0C\u5BF9\u4E8E\u7A0B\u5E8F\u800C\u8A00\uFF0C\u90FD\u662F\u8FDE\u63A5svc</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Endpoints
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> cluster<span class="token punctuation">-</span>mysql  <span class="token comment"># \u8FD9\u91CC\u7684name\u548CService\u7684name\u5FC5\u987B\u4E00\u81F4\u624D\u80FD\u7ED1\u5B9A</span>
<span class="token key atrule">subsets</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">addresses</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">ip</span><span class="token punctuation">:</span> 139.198.167.206
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6D4B\u8BD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@web1 k8s-learn]# kubectl get svc
NAME            TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE
baidu-svc       ClusterIP   10.96.64.159   &lt;none&gt;        80/TCP     80s
cluster-mysql   ClusterIP   10.96.100.47   &lt;none&gt;        3306/TCP   28s
kubernetes      ClusterIP   10.96.0.1      &lt;none&gt;        443/TCP    6d22h

# \u5728\u5BBF\u4E3B\u673A\u5185\u6D4B\u8BD5
[root@web1 k8s-learn]# telnet 10.96.100.47 3306
Trying 10.96.100.47...
Connected to 10.96.100.47.
Escape character is &#39;^]&#39;.
Q
5.7.29-32-log\uFFFD\uFFFD5
                O}1yv-Yv{D8y4;ymysql_native_password
                
# \u5728\u5E94\u7528\u5BB9\u5668\u5185\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u6216\u8005DNS\u57DF\u540D\u6765\u76F4\u63A5\u8FDE\u63A5
telnet cluster-mysql.default

\u6216\u8005pod\u5728svc\u521B\u5EFA\u4E4B\u540E\u8FD0\u884C\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u73AF\u5883\u53D8\u91CF
env

CLUSTER_MYSQL_PORT_3306_TCP_PORT=3306
CLUSTER_MYSQL_SERVICE_HOST=10.96.100.47
CLUSTER_MYSQL_PORT_3306_TCP_PROTO=tcp
BAIDU_SVC_PORT_80_TCP=tcp://10.96.64.159:80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="headless-\u65E0\u5934\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#headless-\u65E0\u5934\u670D\u52A1" aria-hidden="true">#</a> Headless(\u65E0\u5934\u670D\u52A1)</h2><p>\u6709\u8FD9\u6837\u4E00\u79CD\u573A\u666F\u3002\u5C31\u662F\u542F\u52A8\u7684\u5E94\u7528\u6709\u591A\u5C11\u4E2A\uFF0C\u5728\u5BA2\u6237\u7AEF\u90FD\u9700\u8981\u77E5\u9053\u5BF9\u5E94\u7684IP\u3002</p><ol><li>\u81EA\u5DF1\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\uFF08svc\u53EA\u8981\u63D0\u4F9B\u7ED9\u6211\u540E\u7AEF\u7684pod\u6709\u54EA\u4E9B\u3010IP\u96C6\u5408\u3011\uFF09</li><li>\u6709\u4E9B\u670D\u52A1\u5C31\u9700\u8981\u77E5\u9053\u6240\u6709\u5E94\u7528\u5185\u7684IP\uFF08etcd\u542F\u52A8\u7684\u65F6\u5019\uFF0C\u9700\u8981\u77E5\u9053\u4EFB\u4F55\u4E00\u4E2A\u8282\u70B9\u7684ip\uFF09</li></ol><p>Headless\u670D\u52A1\uFF0C\u5728pod\u4E2D\u76F4\u63A5\u901A\u8FC7\u89E3\u6790 servicename.namespace\u57DF\u540D\uFF0C\u7136\u540E\u8FD4\u56DE\u7684\u662F\u8FD9\u4E2A\u57DF\u540D\u7ED1\u5B9A\u7684IP\u5217\u8868\u3002DNS\u89E3\u6790</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> headless<span class="token punctuation">-</span>svc
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> headless<span class="token punctuation">-</span>svc

<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> None
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6D4B\u8BD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u53EF\u901A\u8FC7nsloop\u6765\u89E3\u6790\u57DF\u540Dheadless-svc\u5BF9\u5E94\u7684\u540E\u7AEF\u8282\u70B9 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u8FD9\u4E9B\u57FA\u672C\u90FD\u662F\u901A\u8FC7iptables\u6765\u5B9E\u73B0\u7684\u3002\u6240\u4EE5\u4E00\u5B9A\u8981\u5BF9iptables\u975E\u5E38\u719F\u6089\uFF0C\u7406\u89E3\u8FD9\u4E9B\u8D77\u6765\u90FD\u5F88\u7B80\u5355</p>`,33);function P(x,_){const e=l("ExternalLinkIcon"),t=l("RouterLink");return p(),c("div",null,[d,v,n("ul",null,[n("li",null,[n("a",k,[m,s(e)])]),n("li",null,[n("a",b,[y,s(e)])]),n("li",null,[s(t,{to:"/k8s/example/02-kube-proxy%E6%A8%A1%E6%8B%9F.html"},{default:u(()=>[h]),_:1})])]),g])}var C=i(r,[["render",P],["__file","03-service.html.vue"]]);export{C as default};

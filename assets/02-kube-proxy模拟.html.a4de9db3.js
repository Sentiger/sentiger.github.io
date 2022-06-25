import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.439e1d97.js";var l="/assets/kube-proxy-iptables.b1cc9797.png",i="/assets/balance.b633912a.png";const t={},p=e(`<h2 id="\u5B9E\u73B0\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u76EE\u6807" aria-hidden="true">#</a> \u5B9E\u73B0\u76EE\u6807</h2><p>\u4E4B\u524D\u6211\u4EEC\u5B9E\u73B0\u4E86\u6240\u6709\u8282\u70B9\u4E2D\u5BB9\u5668\u901A\u8FC7flannel\u901A\u4FE1\u3002\u8FD9\u6B21\u6211\u4EEC\u6765\u6A21\u62DF\u4E0Bk8s\u4E2Dkube-proxy\u5B9E\u73B0service\u7684\u6D41\u7A0B\u3002\u76F8\u5173\u7684\u77E5\u8BC6\u4EE5\u4E0B</p><ul><li>flannel\u5E95\u5C42\u901A\u4FE1</li><li>iptables \u914D\u7F6E\u8D1F\u8F7D\u89C4\u5219</li><li>DNS\u670D\u52A1\uFF08coreDNS\uFF09\u5B9E\u73B0\u57DF\u540D\u670D\u52A1</li><li>\u76D1\u63A7\u670D\u52A1 \u8D1F\u8D23\u76D1\u63A7\u96C6\u7FA4\u4E2D\u7684\u5BB9\u5668\u53D1\u751F\u53D8\u5316\uFF0C\u4FEE\u6539iptables\u89C4\u5219\uFF0CDNS\u57DF\u540D\u7B49\u4FE1\u606F</li></ul><h2 id="\u642D\u5EFA\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u670D\u52A1" aria-hidden="true">#</a> \u642D\u5EFA\u670D\u52A1</h2><p>\u4F7F\u7528\u4E24\u53F0\u4E91\u4E3B\u673A\uFF0C\u914D\u7F6E\u597Dflannel\uFF0Cdocker\u4E2D\u7684\u5BB9\u5668\u80FD\u4E92\u76F8\u901A\u4FE1\u3002</p><h3 id="etcd-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#etcd-\u914D\u7F6E" aria-hidden="true">#</a> etcd \u914D\u7F6E</h3><p><strong>\u542F\u52A8etcd</strong></p><p>\u4F7F\u7528host\u7F51\u7EDC\u542F\u52A8etcd\uFF0C\u8FD9\u91CC\u9700\u8981\u5C06\u6570\u636E\u6587\u4EF6\u76EE\u5F55\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\uFF0C\u65B9\u4FBF\u4E0B\u6B21\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d --name etcd <span class="token punctuation">\\</span>
--network <span class="token function">host</span> <span class="token punctuation">\\</span>
--publish <span class="token number">2379</span>:2379 <span class="token punctuation">\\</span>
--publish <span class="token number">2380</span>:2380 <span class="token punctuation">\\</span>
--env <span class="token assign-left variable">ALLOW_NONE_AUTHENTICATION</span><span class="token operator">=</span>yes <span class="token punctuation">\\</span>
--env <span class="token assign-left variable">ETCD_ADVERTISE_CLIENT_URLS</span><span class="token operator">=</span>http://172.31.0.3:2379 <span class="token punctuation">\\</span>
bitnami/etcd:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8BBE\u7F6Eflannel\u914D\u7F6E\u6587\u4EF6</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06etcdctl\u5BA2\u6237\u7AEF\u62F7\u8D1D\u5230\u5BBF\u4E3B\u673A\u4E0A\uFF0C\u8FD9\u6837\u597D\u64CD\u4F5Cetcd</span>
$ <span class="token function">docker</span> <span class="token function">cp</span> etcd:/opt/bitnami/etcd/bin/etcdctl /usr/local/bin/
$ etcdctl put /flannel/network/config <span class="token string">&#39;{ &quot;Network&quot;: &quot;10.10.0.0/16&quot;, &quot;Backend&quot;: {&quot;Type&quot;: &quot;vxlan&quot;}}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flannel\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#flannel\u914D\u7F6E" aria-hidden="true">#</a> flannel\u914D\u7F6E</h3><p>\u4E0B\u8F7Dflannel\u955C\u50CF\uFF0C\u6216\u8005\u76F4\u63A5\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u6587\u4EF6\u5728\u672C\u673A\u8FD0\u884C\u3002\u8FD9\u91CC\u5168\u90FD\u4F7F\u7528docker\u8FD0\u884C</p><p><strong>\u542F\u52A8</strong></p><p>\u6BCF\u53F0\u4E3B\u673A\u90FD\u914D\u7F6Eflannel</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> run -d <span class="token punctuation">\\</span>
--privileged <span class="token punctuation">\\</span>
--name flannel <span class="token punctuation">\\</span>
--net <span class="token function">host</span> <span class="token punctuation">\\</span>
-v /run/flannel:/run/flannel <span class="token punctuation">\\</span>
flannelcni/flannel:v0.18.1 <span class="token punctuation">\\</span>
--etcd-endpoints<span class="token operator">=</span>http://172.31.0.3:2379 <span class="token punctuation">\\</span>
--etcd-prefix<span class="token operator">=</span>/flannel/network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u67E5\u770B\u7ED3\u679C</strong></p><p>web1 \u88AB\u5206\u914D\u4E86\u4E00\u4E2A\u5B50\u7F51</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># cat /run/flannel/subnet.env </span>
<span class="token assign-left variable">FLANNEL_NETWORK</span><span class="token operator">=</span><span class="token number">10.10</span>.0.0/16
<span class="token assign-left variable">FLANNEL_SUBNET</span><span class="token operator">=</span><span class="token number">10.10</span>.26.1/24
<span class="token assign-left variable">FLANNEL_MTU</span><span class="token operator">=</span><span class="token number">1450</span>
<span class="token assign-left variable">FLANNEL_IPMASQ</span><span class="token operator">=</span>false

<span class="token comment"># \u81EA\u52A8\u88AB\u6DFB\u52A0\u4E86\u8DEF\u7531</span>
<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># route</span>
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         gateway         <span class="token number">0.0</span>.0.0         UG    <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> eth0
<span class="token number">10.10</span>.28.0      <span class="token number">10.10</span>.28.0      <span class="token number">255.255</span>.255.0   UG    <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> flannel.1
<span class="token number">10.10</span>.63.0      <span class="token number">10.10</span>.63.0      <span class="token number">255.255</span>.255.0   UG    <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> flannel.1
<span class="token number">172.17</span>.0.0      <span class="token number">0.0</span>.0.0         <span class="token number">255.255</span>.0.0     U     <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> docker0
<span class="token number">172.31</span>.0.0      <span class="token number">0.0</span>.0.0         <span class="token number">255.255</span>.255.0   U     <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>web2 \u88AB\u5206\u914D\u4E86\u4E2A\u5B50\u7F51</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># cat /run/flannel/subnet.env </span>
<span class="token assign-left variable">FLANNEL_NETWORK</span><span class="token operator">=</span><span class="token number">10.10</span>.0.0/16
<span class="token assign-left variable">FLANNEL_SUBNET</span><span class="token operator">=</span><span class="token number">10.10</span>.28.1/24
<span class="token assign-left variable">FLANNEL_MTU</span><span class="token operator">=</span><span class="token number">1450</span>
<span class="token assign-left variable">FLANNEL_IPMASQ</span><span class="token operator">=</span>false

<span class="token comment"># \u81EA\u52A8\u88AB\u6DFB\u52A0\u4E86\u8DEF\u7531</span>
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># route -n</span>
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
<span class="token number">0.0</span>.0.0         <span class="token number">172.31</span>.0.1      <span class="token number">0.0</span>.0.0         UG    <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> eth0
<span class="token number">10.10</span>.26.0      <span class="token number">10.10</span>.26.0      <span class="token number">255.255</span>.255.0   UG    <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> flannel.1
<span class="token number">10.10</span>.63.0      <span class="token number">10.10</span>.63.0      <span class="token number">255.255</span>.255.0   UG    <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> flannel.1
<span class="token number">172.17</span>.0.0      <span class="token number">0.0</span>.0.0         <span class="token number">255.255</span>.0.0     U     <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> docker0
<span class="token number">172.31</span>.0.0      <span class="token number">0.0</span>.0.0         <span class="token number">255.255</span>.255.0   U     <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#docker\u914D\u7F6E" aria-hidden="true">#</a> docker\u914D\u7F6E</h3><p>docker\u521B\u5EFA\u4E00\u4E2A\u7F51\u6865\uFF0C\u5B50\u7F51\u5206\u522B\u8BBE\u7F6E\u4E3Aflannel\u5206\u914D\uFF0C\u5E76\u4E14\u5C06\u7F51\u5361\u7684MUT\u8BBE\u7F6E\u4E3Aflannel\u89C4\u5B9A\u7684\u3002docker\u672C\u6765\u53EF\u4EE5\u76F4\u63A5\u914D\u5408flannel\u8FD0\u884C\u7684\uFF0C\u800C\u4E14\u8FD9\u4E9B\u4E8B\u60C5\u90FD\u505A\u597D\u4E86\uFF0C\u8FD9\u91CC\u6211\u4EEC\u624B\u52A8\u6765\u64CD\u4F5C\u3002</p><p><strong>web1</strong></p><p>\u6839\u636E\u4E0A\u9762flannel\u7684\u914D\u7F6E<code>/run/flannel/subnet.env</code> \u521B\u5EFA\u7F51\u6865</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u5B50\u7F51\u6BB5\uFF0C\u548C\u521B\u5EFA\u5BB9\u5668\u7684\u65F6\u5019\u7F51\u5361MTU\u503C</span>
$ <span class="token function">docker</span> network create --subnet <span class="token number">10.10</span>.26.1/24 --opt com.docker.network.driver.mtu<span class="token operator">=</span><span class="token number">1450</span> cni0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>web2</strong></p><p>\u548C\u4E0A\u9762web1\u4E00\u6837\u7684\u64CD\u4F5C\uFF0C\u53EA\u662F\u6839\u636Eweb2\u7684\u4E3B\u673Aflannel\u7684\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u5B50\u7F51\u6BB5\uFF0C\u548C\u521B\u5EFA\u5BB9\u5668\u7684\u65F6\u5019\u7F51\u5361MTU\u503C</span>
$ <span class="token function">docker</span> network create --subnet <span class="token number">10.10</span>.28.1/24 --opt com.docker.network.driver.mtu<span class="token operator">=</span><span class="token number">1450</span> cni0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h3><p><strong>\u5206\u522B\u5728\u4E24\u4E2A\u4E3B\u673A\u4E0A\u542F\u52A8\u5BB9\u5668</strong></p><ul><li>web1 \u542F\u52A8\u4E00\u4E2A\u5BB9\u5668ngx1 \u6307\u5B9A\u7F51\u6865\u4E3Acni0</li><li>web2 \u542F\u52A8\u4E00\u4E2A\u5BB9\u5668ngx2 \u6307\u5B9A\u7F51\u6865\u4E3Acni0</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># web1</span>
<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># docker run --name ngx1 --rm --network cni0 -d nginx:1.23.0-alpine </span>
86ff8b0c2c5cd2b0881dc26fc154f5101c79c288cedd20253019c37cb0c3f3de

<span class="token comment"># web2 </span>
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># docker run --name ngx2 --rm --network cni0 -d nginx:1.23.0-alpine</span>
b91ddef153befdb0b5b7dc712d83b7bd14c509e047a2f862c81575fe6fddeac5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4E24\u53F0\u4E3B\u673A\u6D4B\u8BD5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># web1 ngx1 ip\u4E3A 10.10.26.2</span>
<span class="token comment"># web1 ngx2 ip\u4E3A 10.10.28.2</span>
<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># docker inspect ngx1 |grep IPAddress</span>
            <span class="token string">&quot;SecondaryIPAddresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.10.26.2&quot;</span>,
<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.10.28.2</span>


<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># docker inspect ngx2 |grep IPAddress</span>
            <span class="token string">&quot;SecondaryIPAddresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.10.28.2&quot;</span>,
                    
 
<span class="token comment">## \u5206\u522B\u5728\u4E24\u4E3B\u673A\u4E0A\u6D4B\u8BD5\u548C\u5BB9\u5668\u5185\u6D4B\u8BD5</span>
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.10.26.2</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to nginx<span class="token operator">!</span><span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># curl 10.10.28.2</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Welcome to nginx<span class="token operator">!</span><span class="token operator">&lt;</span>/title<span class="token operator">&gt;</span>                   
<span class="token punctuation">..</span>.

<span class="token comment"># \u5728\u5BB9\u5668\u4E2D\u6D4B\u8BD5</span>
<span class="token comment">## \u7ED3\u679C\u90FD\u662F\u901A\u8FC7\u7684</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h3><p>\u4E0A\u9762\u7684\u6D41\u7A0B\u5206\u522B\u6A21\u62DF\u4E86\u5938\u4E3B\u673A\u5185\u5BB9\u5668\u95F4\u901A\u4FE1\u539F\u7406\uFF0Ck8s\u7684\u5E95\u5C42\u7F51\u7EDC\u901A\u4FE1\u4E5F\u662F\u8FD9\u6837\u5B9E\u73B0\u7684\uFF0C\u53EA\u662F\u6709\u5BF9\u5E94\u7684\u7A0B\u5E8F\u6765\u5B9E\u73B0\u3002</p><h2 id="service-kube-proxy\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#service-kube-proxy\u4EE3\u7406" aria-hidden="true">#</a> service/kube-proxy\u4EE3\u7406</h2><p>\u4E0A\u9762\u7684\u6D41\u7A0B\u5B9E\u73B0\u4E86\u4E3B\u673A\u95F4\u901A\u4FE1\uFF0C\u73B0\u5728\u6A21\u62DF\u624B\u5DE5\u5B9E\u73B0k8s\u4E2D\u7684service\u4EE3\u7406\u529F\u80FD\u3002\u4E5F\u5C31\u662Fkube-proxy\u8981\u5E72\u7684\u5DE5\u4F5C</p><ol><li>\u6784\u5EFA\u4E00\u4E2A\u865A\u62DFip\u4F5C\u4E3Aservice\u7684ip</li><li>\u542F\u52A8\u591A\u4E2A\u76F8\u540C\u7684nginx\u670D\u52A1\uFF0C\u5F53\u505A\u4E3A\u9AD8\u53EF\u7528</li><li>\u901A\u8FC7service\u4EE3\u7406\u8BBF\u95EE\u5177\u4F53\u7684\u5BB9\u5668</li></ol><p><img src="`+l+`" alt="kube-proxy" loading="lazy"></p><h3 id="\u90E8\u7F72\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5E94\u7528" aria-hidden="true">#</a> \u90E8\u7F72\u5E94\u7528</h3><p>\u8FD9\u91CC\u542F\u52A8\u5E94\u7528\u5206\u522B\u5728\u4E24\u4E2A\u4E3B\u673A\u4E0A\uFF08\u8D1F\u8F7D\uFF0C\u9AD8\u53EF\u7528\uFF09\uFF0C\u8FD9\u91CC\u5C31\u6A21\u62DF\u4E86deployment \u751F\u6210\u4E24\u4E2Apod</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it ngx1 sh</span>
/ <span class="token comment"># echo &quot;I am ngx1 in web1&quot; &gt; /usr/share/nginx/html/index.html</span>

<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it ngx2 sh</span>
/ <span class="token comment"># echo &quot;I am ngx2 in web2&quot; &gt; /usr/share/nginx/html/index.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6Eservice" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Eservice" aria-hidden="true">#</a> \u914D\u7F6Eservice</h3><ul><li>\u8BBE\u7F6E\u4E00\u4E2A\u865A\u62DFip 10.20.32.2 \u4F5C\u4E3Angx.service</li><li>\u901A\u8FC7\u8BBF\u95EE10.20.32.2 \u81EA\u52A8\u4EE3\u7406\u5230\u5E95\u5C42\u670D\u52A1</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ iptables -t nat -A POSTROUTING -j MASQUERADE

$ iptables -t nat -A PREROUTING <span class="token punctuation">\\</span>
-p tcp <span class="token punctuation">\\</span>
-d <span class="token number">10.20</span>.32.2 <span class="token punctuation">\\</span>
--dport <span class="token number">80</span> <span class="token punctuation">\\</span>
-m statistic <span class="token punctuation">\\</span>
--mode random <span class="token punctuation">\\</span>
--probability <span class="token number">0.5</span> <span class="token punctuation">\\</span>
-j DNAT <span class="token punctuation">\\</span>
--to-destination <span class="token number">10.10</span>.26.2:80


$ iptables -t nat -A PREROUTING <span class="token punctuation">\\</span>
-p tcp <span class="token punctuation">\\</span>
-d <span class="token number">10.20</span>.32.2 <span class="token punctuation">\\</span>
--dport <span class="token number">80</span> <span class="token punctuation">\\</span>
-m statistic <span class="token punctuation">\\</span>
--mode random <span class="token punctuation">\\</span>
--probability <span class="token number">1</span> <span class="token punctuation">\\</span>
-j DNAT <span class="token punctuation">\\</span>
--to-destination <span class="token number">10.10</span>.28.2:80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6D4B\u8BD5</strong></p><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u8FD9\u91CC\u9700\u8981\u5728\u5BB9\u5668\u5185\u8BBF\u95EE<code>10.20.32.2</code></p><p>\u539F\u56E0\u662F\uFF1A</p><ol><li>\u901A\u8FC7netfilter\u4E86\u89E3\u5230\uFF0C\u56E0\u4E3A10.20.32.2\u662F\u4E00\u4E2A\u865A\u62DFip\uFF0C\u6CA1\u6709\u5BF9\u5E94\u7684\u63A5\u53E3\uFF0C\u6240\u4EE5\u60F3\u8BA9\u8BBF\u95EE\u8FD9\u4E2A\u8981\u5230\u8FBE\u5BBF\u4E3B\u673A\u5185\u7684\u5185\u6838\u7F51\u7EDC\u7A7A\u95F4\u3002\u624D\u80FD\u8D70PREROUTING\u8F6C\u6362</li><li>\u5982\u679C\u5728\u5BBF\u4E3B\u673A\u5185\u8BBF\u95EE\uFF0C\u5219\u662F\u4ECE\u7528\u6237\u7A7A\u95F4\u5230\u5185\u6838\u7A7A\u95F4\u3002\u7136\u540E\u901A\u8FC7\u8DEF\u7531\u67E5\u627E\uFF0C\u65E0\u6CD5\u67E5\u523010.20.32.2\u51FA\u53BB\u5230\u8FBE\u54EA\u91CC\u3002\u5C31\u4F1A\u51FA\u73B0\u4E22\u5931\u3002\u6240\u4EE5\u4E00\u822C\u5728\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u5728\u672C\u5730\u8BBE\u7F6E10.20.32.2\u7684MAC\u5730\u5740\uFF0C\u901A\u8FC7\u4E8C\u5C42\u94FE\u8DEF\u5C42\u6765\u8BBF\u95EE</li><li>\u6240\u4EE5\u8FD9\u91CC\u7B80\u5355\u4E9B\uFF0C\u76F4\u63A5\u5728\u5BB9\u5668\u5185\u8BBF\u95EE\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5230\u8FBE\u5BBF\u4E3B\u673A\u7A7A\u95F4\uFF0C\u7136\u540E\u505A\u8F6C\u53D1\u3002</li><li>\u6240\u4EE5\u4F7F\u7528iptable\u7684\u65F6\u5019\uFF0C\u662F\u65E0\u6CD5ping\u901Aservice ip\u7684\uFF0C\u56E0\u4E3A\u8FD9\u662F\u4E00\u4E2A\u865A\u62DFip\uFF0C\u6CA1\u6709\u5BF9\u5E94\u7684\u63A5\u53E3\u3002ping\u662Ficmp\u534F\u8BAE\uFF0C\u5230\u8FBE\u7F51\u7EDC\u5C42\uFF0C\u6240\u4EE5\u8F6C\u53D1\u65E0\u6548\uFF08\u5728tcp\u5C42\uFF09</li></ol></div><p><img src="`+i+'" alt="\u8D1F\u8F7D" loading="lazy"></p><h2 id="dns\u7ED1\u5B9A\u57DF\u540D" tabindex="-1"><a class="header-anchor" href="#dns\u7ED1\u5B9A\u57DF\u540D" aria-hidden="true">#</a> DNS\u7ED1\u5B9A\u57DF\u540D</h2><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u4EE5\u505A\u5230service\u8BBF\u95EE\u5E95\u5C42\u4E0D\u540C\u7684\u5BB9\u5668\u3002\u4F46\u662F\u5B58\u5728\u4E00\u4E2A\u95EE\u9898\uFF0Cservice IP\u4E5F\u662F\u7ECF\u5E38\u53D8\u5F97\uFF0C\u66F4\u4F55\u51B5\u5728\u670D\u52A1\u95F4\u76F8\u4E92\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u662F\u4E0D\u77E5\u9053IP\u7684\u3002\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u52A0\u4E00\u5C42DNS\uFF0C\u6216\u8005\u73AF\u5883\u53D8\u91CF\u4E86\u3002</p><ol><li><p>k8s\u4E2D\u5728\u96C6\u7FA4\u5185\u8BBF\u95EEservice\uFF0C\u90FD\u53EF\u4EE5service.namespace.local\u8FD9\u79CD\u8BBF\u95EE\uFF0C\u5176\u5B9E\u5C31\u662Fkube-proxy\u5728\u521B\u5EFAservice\u7684\u65F6\u5019\uFF0C\u81EA\u52A8\u7ED9\u5BF9\u5E94\u7684service ip \u548C\u57DF\u540D\u7ED1\u5B9A\u4E86\uFF0C\u8FD9\u4E2A\u7528DNS\u5F88\u597D\u5B9E\u73B0\u3002</p></li><li><p>\u8FD8\u6709\u4E00\u79CD\u5C31\u662F\u5728\u521B\u5EFAPOD\u7684\u65F6\u5019\uFF0C\u5C06\u5148\u524D\u521B\u5EFA\u7684service ip \u5199\u5230\u65B0\u521B\u5EFA\u7684pod\u5BB9\u5668\u7684\u73AF\u5883\u53D8\u91CF\u4E2D</p></li><li><p>\u8FD8\u6709\u4E00\u79CD\u5C31\u662F\u4E3A\u5565\u4E0D\u76F4\u63A5\u4F7F\u7528DNS A\u8BB0\u5F55\u6DFB\u52A0\u591A\u4E2A\uFF0C\u4F7F\u7528DNS\u6765\u505A\u8D1F\u8F7D\u5747\u8861\uFF0C\u8FD9\u4E2A\u5B98\u65B9\u4E5F\u6709\u89E3\u91CA\u5C31\u662F\u5F88\u591A\u670D\u52A1\u7B2C\u4E00\u6B21DNS\u8BBF\u95EE\u7684\u65F6\u5019\uFF0C\u4F1A\u7F13\u5B58\uFF0C\u518D\u6B21\u8BF7\u6C42\u5C31\u4E0D\u5728\u8D70\u4E86DNS\u89E3\u6790\u4E86\u3002</p></li></ol><h2 id="\u603B\u7ED3-1" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-1" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4E0A\u9762\u6D41\u7A0B\u603B\u4F53\u6A21\u62DF\u4E86kube-proxy\u7684\u804C\u8D23\uFF0C\u4EE5\u540E\u4E86\u89E3k8s\u7684\u7F51\u7EDC\u90E8\u5206\u5E94\u8BE5\u5F88\u8F7B\u677E\u3002</p>',55),c=[p];function o(r,d){return s(),a("div",null,c)}var m=n(t,[["render",o],["__file","02-kube-proxy\u6A21\u62DF.html.vue"]]);export{m as default};

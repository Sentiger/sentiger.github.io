import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as e,e as a}from"./app.51a2d3b5.js";var l="/assets/flannel.fd5391df.png",i="/assets/flannel-route.a4a5708b.png";const t={},c=a('<p><img src="'+l+'" alt="flannel" loading="lazy"></p><p><img src="'+i+`" alt="route.png" loading="lazy"></p><h2 id="etcd\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#etcd\u5B89\u88C5" aria-hidden="true">#</a> etcd\u5B89\u88C5</h2><p><strong>docker\u5B89\u88C5etcd</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> network create --subnet <span class="token number">192.168</span>.2.1/24 etcd

<span class="token comment"># \u542F\u52A8etcd</span>
$ <span class="token function">docker</span> run -d --name etcd <span class="token punctuation">\\</span>
    --network etcd <span class="token punctuation">\\</span>
    --publish <span class="token number">2379</span>:2379 <span class="token punctuation">\\</span>
    --publish <span class="token number">2380</span>:2380 <span class="token punctuation">\\</span>
    --env <span class="token assign-left variable">ALLOW_NONE_AUTHENTICATION</span><span class="token operator">=</span>yes <span class="token punctuation">\\</span>
    --env <span class="token assign-left variable">ETCD_ADVERTISE_CLIENT_URLS</span><span class="token operator">=</span>http://etcd-server:2379 <span class="token punctuation">\\</span>
    bitnami/etcd:latest

<span class="token comment"># \u914D\u7F6Eflannel\u7F51\u7EDC\uFF0C\u548C\u540E\u7AEF\u6A21\u5F0F\u4E3Avxlan    </span>
$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it etcd etcdctl put /flannel/network/config <span class="token string">&#39;{ &quot;Network&quot;: &quot;10.10.0.0/16&quot;, &quot;Backend&quot;: {&quot;Type&quot;: &quot;vxlan&quot;}}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flannel" tabindex="-1"><a class="header-anchor" href="#flannel" aria-hidden="true">#</a> flannel</h2><p><strong>web1\u542F\u52A8flanneld</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD9\u91CC\u6CE8\u610F\u4E0B\u8F7Dflannel\u7684\u7248\u672C\u548C\u670D\u52A1\u5668\u8981\u80FD\u517C\u5BB9\uFF0C\u6211\u8FD9\u8FB9\u6D4B\u8BD5\u670D\u52A1\u5668\u8BD5\u4E86\u597D\u591A\u4E2A\u7248\u672C\uFF0C\u542F\u52A8\u5C31\u62A5\u9519\uFF0C\u6700\u7EC8\u662Fcentos7.6+flannel-v0.18.1</span>
$ <span class="token function">wget</span> https://github.com/flannel-io/flannel/releases/download/v0.18.1/flannel-v0.18.1-linux-amd64.tar.gz
<span class="token comment"># \u542F\u52A8\u4E86flanneld\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u4F1A\u4E3A\u672C\u673A\u5206\u914D\u81EA\u7F51\u6BB5\u3002\u800C\u4E14\u4F1A\u76D1\u542C\u5176\u4ED6\u7684\u4E3B\u673A\u52A0\u5165\u8FDB\u6765\u4E4B\u540E\u81EA\u52A8\u53D1\u73B0\u7F51\u6BB5\uFF0C\u5E76\u52A0\u5230\u672C\u673A\u8DEF\u7531\uFF08\u53EF\u67E5\u770B\u4E0A\u56FE\uFF09</span>
$ ./flanneld --etcd-endpoints<span class="token operator">=</span>http://172.31.0.3:2379 --etcd-prefix<span class="token operator">=</span>/flannel/network

<span class="token comment"># \u542F\u52A8\u7684\u65F6\u5019\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\u7ED9\u672C\u673A\u5206\u914D\u7684\u5B50\u7F51\uFF0C\u7136\u540Edocker\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u8FD9\u4E2A\u5B50\u7F51\u7684\u7F51\u6865</span>
$ <span class="token function">cat</span> /var/run/flannel/subnet.env

<span class="token assign-left variable">FLANNEL_NETWORK</span><span class="token operator">=</span><span class="token number">10.10</span>.0.0/16
<span class="token assign-left variable">FLANNEL_SUBNET</span><span class="token operator">=</span><span class="token number">10.10</span>.100.1/24
<span class="token assign-left variable">FLANNEL_MTU</span><span class="token operator">=</span><span class="token number">1450</span>
<span class="token assign-left variable">FLANNEL_IPMASQ</span><span class="token operator">=</span>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>web1\u521B\u5EFA\u7F51\u6865\u548C\u542F\u52A8ngx</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u7F51\u6865\u5E76\u6307\u5B9A\u5B50\u7F51\u4E3Aflanneld\u5206\u914D\u7684\u5B50\u7F51</span>
$ <span class="token function">docker</span> network create --subnet <span class="token number">10.10</span>.100.1/24 flannel
<span class="token comment"># \u56E0\u4E3Aflanneld\u5206\u914D\u7684\u5B50\u7F51\u91CC\u53EF\u4EE5\u770B\u5230\uFF0CMUT\u4E3A1450\uFF08vxlan\u6A21\u5F0F\uFF09\uFF0C\u6240\u4EE5\u4E5F\u8981\u5C06\u521B\u5EFA\u7684docker\u7F51\u6865\u8BBE\u7F6E\u4E3A1450\uFF0C\u8981\u4E0D\u7136\u6570\u636E\u4F20\u8F93\u53EF\u80FD\u4F1A\u4E22\u5E27</span>
$ <span class="token function">ip</span> <span class="token function">link</span> <span class="token builtin class-name">set</span> dev br-7e8bf85e5c62 mtu <span class="token number">1450</span>
<span class="token comment"># \u542F\u52A8ngx\u5E76\u6307\u5B9A\u7F51\u6865\u4E3A\u521A\u521B\u5EFA\u7684flannel</span>
$ <span class="token function">docker</span> run --name ngx1 --rm --network flannel -d nginx:latest
<span class="token comment"># \u67E5\u770Bip(10.10.100.2)</span>
$ <span class="token function">docker</span> inspect ngx1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>web2\u542F\u52A8flanneld</strong></p><p>\u8FD9\u91CC\u548Cweb1\u4E00\u6837\uFF0C\u6CA1\u4EFB\u4F55\u533A\u522B\uFF0C\u6700\u7EC8web2\u542F\u52A8\u7684ngx1 ip\u4E3A 10.10.47.2</p><p><strong>\u6D4B\u8BD5</strong></p><p>\u5206\u522B\u5728\u4E24\u4E2A\u4E3B\u673A\u5185\u8FDB\u884C\u6D4B\u8BD5ngx\u6D4B\u8BD5\uFF0C\u90FD\u53EF\u4EE5\u8BBF\u95EE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@i-2tz37tue ~<span class="token punctuation">]</span><span class="token comment"># curl -i 10.10.100.2</span>
HTTP/1.1 <span class="token number">200</span> OK
Server: nginx/1.21.5
Date: Fri, <span class="token number">17</span> Jun <span class="token number">2022</span> <span class="token number">10</span>:25:06 GMT
Content-Type: text/html
Content-Length: <span class="token number">615</span>
Last-Modified: Tue, <span class="token number">28</span> Dec <span class="token number">2021</span> <span class="token number">15</span>:28:38 GMT
Connection: keep-alive
ETag: <span class="token string">&quot;61cb2d26-267&quot;</span>
Accept-Ranges: bytes

<span class="token punctuation">[</span>root@i-2tz37tue ~<span class="token punctuation">]</span><span class="token comment"># curl -i 10.10.47.2</span>
HTTP/1.1 <span class="token number">200</span> OK
Server: nginx/1.21.5
Date: Fri, <span class="token number">17</span> Jun <span class="token number">2022</span> <span class="token number">10</span>:25:33 GMT
Content-Type: text/html
Content-Length: <span class="token number">615</span>
Last-Modified: Tue, <span class="token number">28</span> Dec <span class="token number">2021</span> <span class="token number">15</span>:28:38 GMT
Connection: keep-alive
ETag: <span class="token string">&quot;61cb2d26-267&quot;</span>
Accept-Ranges: bytes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[c];function p(r,d){return s(),e("div",null,o)}var m=n(t,[["render",p],["__file","05-flannel-docker.html.vue"]]);export{m as default};

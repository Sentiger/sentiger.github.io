import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as a}from"./app.4394c356.js";const i={},l=a(`<p>\u591A\u4E2A\u4E91\u670D\u52A1\u5668\u6D4B\u8BD5\uFF0C\u53D1\u73B0centos7.6\u7684\u7248\u672C\u6BD4\u8F83\u7A33\u5B9A\uFF0Cflanneld\u80FD\u6B63\u5E38\u8FD0\u884C\uFF0Cdocker\u4F9D\u8D56\u597D</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>centos7.6\u4E00\u53F0\u65B0\u673A\u5668\u4E0A\u88C5docker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5173\u95EDfirewalld</span>
$  systemctl stop firewalld <span class="token operator">&amp;&amp;</span> systemctl disable firewalld

<span class="token comment"># \u5B89\u88C5iptables\uFF0C\u5E76\u6E05\u7A7A\u89C4\u5219</span>
$ yum -y <span class="token function">install</span> iptables-services
$ systemctl <span class="token builtin class-name">enable</span> iptables.service
$ systemctl start iptables.service

$ iptables -t filter -F
$ iptables -t nat -F

<span class="token comment"># \u5B89\u88C5docker</span>
$ <span class="token function">curl</span> -fsSL https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> -s <span class="token function">docker</span> --mirror Aliyun

<span class="token comment"># \u914D\u7F6E\u955C\u50CF\u52A0\u901F\u5668\uFF0C\u5E76\u914D\u7F6Ecgroupdriver</span>
$ <span class="token function">mkdir</span> -p /etc/docker
$ <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://rwgxai1f.mirror.aliyuncs.com&quot;],
  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;]
}
EOF</span>

$ systemctl daemon-reload
$ systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2>`,5),t=[l];function c(r,d){return n(),e("div",null,t)}var v=s(i,[["render",c],["__file","10-docker\u5B89\u88C5.html.vue"]]);export{v as default};

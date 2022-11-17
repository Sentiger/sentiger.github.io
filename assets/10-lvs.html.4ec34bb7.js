import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as t,c as i,a as n,b as l,e as r,d as o}from"./app.0491b591.js";var p="/assets/lvs-DR.74066ed3.png",c="/assets/dr-test.658f447a.png";const d={},v=r('<h2 id="dr\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#dr\u6A21\u5F0F" aria-hidden="true">#</a> DR\u6A21\u5F0F</h2><p><img src="'+p+`" alt="DR" loading="lazy"></p><p><strong>\u73AF\u5883</strong></p><table><thead><tr><th>\u4E3B\u673A\u7C7B\u578B</th><th>IP</th><th>VIP</th></tr></thead><tbody><tr><td>\u865A\u62DF\u670D\u52A1</td><td>192.168.56.41</td><td>192.168.56.40</td></tr><tr><td>\u771F\u5B9E\u670D\u52A11</td><td>192.168.56.42</td><td>192.168.56.40</td></tr><tr><td>\u771F\u5B9E\u670D\u52A12</td><td>192.168.56.43</td><td>192.168.56.40</td></tr><tr><td>\u6D4B\u8BD5\u4E3B\u673A</td><td>\u5916\u90E8win\u4E3B\u673A</td><td></td></tr></tbody></table><p><strong>\u865A\u62DF\u670D\u52A1</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u914D\u7F6Eipvs</span>
modprobe ip_vs
<span class="token function">cat</span> /proc/net/ip_vs
ipvsadm-save <span class="token operator">&gt;</span>/etc/sysconfig/ipvsadm
systemctl start ipvsadm.service
ipvsadm -C

ipvsadm -A -t <span class="token number">192.168</span>.56.40:80 -s rr
ipvsadm -a -t <span class="token number">192.168</span>.56.40:80 -r <span class="token number">192.168</span>.56.42:80 -g
ipvsadm -a -t <span class="token number">192.168</span>.56.40:80 -r <span class="token number">192.168</span>.56.43:80 -g

<span class="token comment"># \u914D\u7F6E\u865A\u62DFIP</span>
<span class="token function">vim</span> /etc/sysconfig/network-scripts/ifcfg-eth1:1

<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;eth1:1&quot;</span>
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span><span class="token string">&quot;eth1:1&quot;</span>
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.56.40
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.255

<span class="token comment"># \u91CD\u542F\u7F51\u7EDC</span>
<span class="token function">service</span> network restart

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u771F\u5B9E\u670D\u52A11\u30012</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysctl.conf

net.ipv4.conf.all.arp_ignore <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.conf.all.arp_announce <span class="token operator">=</span> <span class="token number">2</span>
net.ipv4.conf.default.arp_ignore <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.conf.default.arp_announce <span class="token operator">=</span> <span class="token number">2</span>
net.ipv4.conf.lo.arp_ignore <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.conf.lo.arp_announce <span class="token operator">=</span> <span class="token number">2</span>

<span class="token function">vim</span> /etc/sysconfig/network-scripts/ifcfg-lo:1 

<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>lo:1
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.56.40
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.255
<span class="token assign-left variable">NETWORK</span><span class="token operator">=</span><span class="token number">127.0</span>.0.0
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes

<span class="token comment"># \u8FD9\u4E2A\u9ED8\u8BA4\u5728\u521B\u5EFA\u7F51\u5361\u4F1A\u542F\u52A8</span>
route <span class="token function">add</span> -host <span class="token number">192.168</span>.56.40 dev lo:1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u9A8C\u8BC1</strong></p><p><img src="`+c+'" alt="img_1.png" loading="lazy"></p><p><strong>\u6CE8\u610F</strong></p><p>\u4E0D\u8981\u5728lvs\u670D\u52A1\u548Creal server\u4E0A\u9A8C\u8BC1\u3002\u5177\u4F53\u5206\u6790\u6570\u636E\u6D41\u5411</p><p><strong>\u53C2\u8003</strong></p>',13),m={href:"https://www.ngui.cc/el/1251476.html?action=onClick",target:"_blank",rel:"noopener noreferrer"},u=o("DR");function b(k,g){const s=e("ExternalLinkIcon");return t(),i("div",null,[v,n("ul",null,[n("li",null,[n("a",m,[u,l(s)])])])])}var _=a(d,[["render",b],["__file","10-lvs.html.vue"]]);export{_ as default};

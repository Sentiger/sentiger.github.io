import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e}from"./app.03f8d544.js";var t="/assets/net-0.23113db2.png",l="/assets/wangka.e901205e.png",p="/assets/net-1.c7f7ef89.png";const i={},o=e(`<h2 id="test1" tabindex="-1"><a class="header-anchor" href="#test1" aria-hidden="true">#</a> test1</h2><p><strong>\u7F51\u7EDC\u914D\u7F6E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@test1 network-scripts<span class="token punctuation">]</span><span class="token comment"># ip a</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span> 
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: eth0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 08:00:27:65:42:b9 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">10.0</span>.2.15/24 brd <span class="token number">10.0</span>.2.255 scope global noprefixroute dynamic eth0
       valid_lft 86130sec preferred_lft 86130sec
    inet6 fe80::4096:ef5c:fed4:af8e/64 scope <span class="token function">link</span> noprefixroute 
       valid_lft forever preferred_lft forever
<span class="token number">3</span>: eth1: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 08:00:27:08:92:e0 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.56.41/24 brd <span class="token number">192.168</span>.56.255 scope global noprefixroute eth1
       valid_lft forever preferred_lft forever
    inet6 fe80::a00:27ff:fe08:92e0/64 scope <span class="token function">link</span> 
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F51\u53610</strong></p><p>\u7F51\u53610\u662F\u4E0ENAT\u8F6C\u6362\u6A21\u5F0F\uFF0C\u662F\u865A\u62DF\u673A\u4E2D\u4E0E\u5916\u90E8\u901A\u4FE1\u7684</p><p><img src="`+t+`" alt="img.png" loading="lazy"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@test1 network-scripts<span class="token punctuation">]</span><span class="token comment"># cat ifcfg-eth0 </span>
<span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;Ethernet&quot;</span>
<span class="token assign-left variable">PROXY_METHOD</span><span class="token operator">=</span><span class="token string">&quot;none&quot;</span>
<span class="token assign-left variable">BROWSER_ONLY</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span><span class="token string">&quot;dhcp&quot;</span>
<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">IPV6INIT</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV6_AUTOCONF</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV6_DEFROUTE</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV6_FAILURE_FATAL</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">IPV6_ADDR_GEN_MODE</span><span class="token operator">=</span><span class="token string">&quot;stable-privacy&quot;</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;eth0&quot;</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;3ab22365-1384-4b26-a973-e27a40ff6d8b&quot;</span>
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span><span class="token string">&quot;eth0&quot;</span>
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F51\u53611</strong></p><p>\u8FD9\u4E2A\u662F\u4EC5Host-only\uFF0C\u662F\u4E3B\u673A\u548C\u865A\u62DF\u673A\u4E4B\u95F4\u7684\u901A\u4FE1\u7F51\u5361\uFF0C\u5F62\u6210\u4E2A\u5C0F\u578B\u5C40\u57DF\u7F51\u3002\u5728\u865A\u62DF\u673A\u4E2D\u9996\u5148\u8981\u521B\u5EFA\u7F51\u5361\uFF0C\u914D\u7F6E\u5C5E\u6027.\u6700\u540E\u53EF\u4EE5\u914D\u7F51\u7EDC\uFF0C\u6CE8\u610F\u5728centos7\u4E0A\uFF0C\u90FD\u4E0D\u662F\u4EE5<code>eth</code>\u5F00\u5934\u7684\uFF0C\u90FD\u662Fens\uFF0C\u8FD9\u4E2A\u53EF\u6539\u53EF\u4E0D\u6539\u3002</p><p><img src="`+l+'" alt="img_2.png" loading="lazy"></p><p><img src="'+p+`" alt="img_1.png" loading="lazy"></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@test1 network-scripts<span class="token punctuation">]</span><span class="token comment"># cat ifcfg-eth1 </span>
<span class="token assign-left variable">TYPE</span><span class="token operator">=</span><span class="token string">&quot;Ethernet&quot;</span>
<span class="token assign-left variable">PROXY_METHOD</span><span class="token operator">=</span><span class="token string">&quot;none&quot;</span>
<span class="token assign-left variable">BROWSER_ONLY</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span><span class="token string">&quot;static&quot;</span>
<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span><span class="token string">&quot;no&quot;</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;eth1&quot;</span>
<span class="token assign-left variable">UUID</span><span class="token operator">=</span><span class="token string">&quot;3ab22365-1384-4b26-a973-e27a40ff6d8a&quot;</span>
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span><span class="token string">&quot;eth1&quot;</span>
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span><span class="token string">&quot;yes&quot;</span>
<span class="token assign-left variable">IPADDR</span><span class="token operator">=</span><span class="token number">192.168</span>.56.41
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0
<span class="token assign-left variable">GATEWAY</span><span class="token operator">=</span><span class="token number">192.168</span>.56.1
<span class="token assign-left variable">DNS1</span><span class="token operator">=</span><span class="token number">192.168</span>.56.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6Efrp\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Efrp\u4EE3\u7406" aria-hidden="true">#</a> \u914D\u7F6Efrp\u4EE3\u7406</h2><p>\u4E3A\u4E86\u5BB6\u5EAD\u865A\u62DF\u673A\u53EF\u4EE5\u88AB\u5916\u9762\u76F4\u63A5\u8FDE\u63A5\uFF0C\u53EF\u4EE5\u627E\u4E00\u53F0\u914D\u7F6E\u4F4E\u7684\u963F\u91CC\u4E91\u4E3B\u673A\uFF0C\u88C5\u4E0A<code>frp</code>,\u7136\u540E\u5BB6\u91CC\u7684\u88C5\u4E0Afrp\u5BA2\u6237\u7AEF\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5916\u7F51\u4E86\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/systemd/system/frpc.service

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token comment"># \u670D\u52A1\u540D\u79F0\uFF0C\u53EF\u81EA\u5B9A\u4E49</span>
Description <span class="token operator">=</span> frp server
After <span class="token operator">=</span> network.target syslog.target
Wants <span class="token operator">=</span> network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
Type <span class="token operator">=</span> simple
<span class="token comment"># \u542F\u52A8frps\u7684\u547D\u4EE4\uFF0C\u9700\u4FEE\u6539\u4E3A\u60A8\u7684frps\u7684\u5B89\u88C5\u8DEF\u5F84</span>
ExecStart <span class="token operator">=</span> /usr/bin/frpc -c /etc/frp/frpc.ini

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
WantedBy <span class="token operator">=</span> multi-user.target


<span class="token punctuation">[</span>root@test1 network-scripts<span class="token punctuation">]</span><span class="token comment"># cat /etc/frp/frpc.ini</span>
<span class="token punctuation">[</span>common<span class="token punctuation">]</span>
server_addr <span class="token operator">=</span> <span class="token number">115.28</span>.101.251
server_port <span class="token operator">=</span> <span class="token number">7777</span>
<span class="token assign-left variable">authentication_method</span><span class="token operator">=</span>token
<span class="token assign-left variable">token</span><span class="token operator">=</span>xxxx

<span class="token punctuation">[</span>test1<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> tcp
local_ip <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
local_port <span class="token operator">=</span> <span class="token number">22</span>
remote_port <span class="token operator">=</span> <span class="token number">6041</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r=[o];function c(d,u){return n(),a("div",null,r)}var b=s(i,[["render",c],["__file","11-win-vm.html.vue"]]);export{b as default};

import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as e,e as a}from"./app.cd89bbd3.js";var i="/assets/local-dnat.f5946ed5.png",l="/assets/forward-ip.a36623ff.png";const t={},d=a(`<h2 id="nat\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#nat\u8F6C\u6362" aria-hidden="true">#</a> NAT\u8F6C\u6362</h2><h3 id="\u8F6C\u53D1\u672C\u673A\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u53D1\u672C\u673A\u7AEF\u53E3" aria-hidden="true">#</a> \u8F6C\u53D1\u672C\u673A\u7AEF\u53E3</h3><p>\u672C\u5730\u7A0B\u5E8F\u7AEF\u53E3\u4E3A8080\uFF0C\u7136\u540E\u5916\u90E8\u901A\u8FC780\u6765\u8BBF\u95EE\uFF0C\u672C\u673A\u5185\u5916IP<code>172.31.0.2</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>iptables -t nat -A PREROUTING -p tcp --dport <span class="token number">80</span> -j DNAT --to-destination <span class="token number">172.31</span>.0.2:8080

<span class="token comment"># \u6D4B\u8BD5\uFF0C\u4F7F\u7528\u5916\u7F51IP\u8BBF\u95EE curl 139.198.191.115\uFF08\u5728\u672C\u673A\u5185\u8BBF\u95EE\u4E0D\u80FD\u901A\u8FC7\u5185\u7F51IP\u8BBF\u95EE\uFF0C\u4E0B\u9762\u6709\u89E3\u51B3\u65B9\u6CD5\uFF09</span>
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># curl -i 139.198.191.115</span>
HTTP/1.1 <span class="token number">200</span> OK
Date: Sat, <span class="token number">22</span> Oct <span class="token number">2022</span> 02:06:39 GMT
Content-Length: <span class="token number">21</span>
Content-Type: text/plain<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="img.png" loading="lazy"></p><p><strong>\u4E0D\u80FD\u901A\u8FC7\u5185\u7F51IP\u8BBF\u95EE\u89E3\u51B3</strong></p><p>\u7531\u4E8E\u672C\u673A\u8BBF\u95EE\u672C\u673A\u7A0B\u5E8F\u7684\u65F6\u5019\uFF0C\u5E94\u8BE5\u662F\u548C\u5916\u7F51\u8BBF\u95EE\u6D41\u91CF\u4E0D\u4E00\u6837\uFF0C\u6CA1\u6709\u8FDB\u5165\u5230<code>PREROUTING</code>\uFF0C\u6240\u4EE5\u8BBF\u95EE\u6709\u95EE\u9898\u3002\u5177\u4F53\u53EF\u67E5\u9605\u672C\u673A\u8BBF\u95EE\u5185\u7F51\u548C\u5916\u7F51\u8BBF\u95EE\u4E0D\u540C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u4E5F\u6BD4\u8F83\u7B80\u5355\uFF0C\u5728OUTPUT\u5C42\u8FDB\u884C\u5904\u7406</span>
iptables -t nat -A OUTPUT -p tcp --destination <span class="token number">127.0</span>.0.1 --dport <span class="token number">80</span> -j DNAT --to-destination <span class="token number">127.0</span>.0.1:8080
iptables -t nat -A OUTPUT -p tcp --destination <span class="token number">172.31</span>.0.2 --dport <span class="token number">80</span> -j DNAT --to-destination <span class="token number">127.0</span>.0.1:8080

<span class="token comment"># \u6D4B\u8BD5</span>
<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># curl -i 172.31.0.2</span>
HTTP/1.1 <span class="token number">200</span> OK
Date: Sat, <span class="token number">22</span> Oct <span class="token number">2022</span> 02:12:11 GMT
Content-Length: <span class="token number">16</span>
Content-Type: text/plain<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8

<span class="token number">172.31</span>.0.2:57826<span class="token punctuation">[</span>root@web2 ~<span class="token punctuation">]</span><span class="token comment"># curl -i 127.0.0.1</span>
HTTP/1.1 <span class="token number">200</span> OK
Date: Sat, <span class="token number">22</span> Oct <span class="token number">2022</span> 02:12:16 GMT
Content-Length: <span class="token number">15</span>
Content-Type: text/plain<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>utf-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="forward\u505A\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#forward\u505A\u8F6C\u53D1" aria-hidden="true">#</a> FORWARD\u505A\u8F6C\u53D1</h3><p>\u8BBF\u95EE\u672C\u673A80\u7AEF\u53E3\uFF0C\u7136\u540E\u8F6C\u5230\u5176\u4ED6\u5916\u7F51IP</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F00\u542FFORWARD</span>
<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/ip_forward
iptables -t filter -P FORWARD ACCEPT

<span class="token comment"># \u6E05\u9664\u89C4\u5219\uFF08\u614E\u91CD\uFF09</span>

<span class="token comment"># \u6DFB\u52A0\u8F6C\u53D1</span>
iptables -t nat -A PREROUTING -p tcp --dport <span class="token number">80</span> -j DNAT --to-destination <span class="token number">47.97</span>.173.91:80
<span class="token comment"># \u8FD9\u91CC\u662F\u4FEE\u6539\u6E90IP\uFF0C\u8F6C\u53D1\u5B8C\uFF0C\u4E5F\u8981\u63A5\u6536\u3002</span>
iptables -t nat -A POSTROUTING -p tcp --destination <span class="token number">47.97</span>.173.91 --dport <span class="token number">80</span> -j SNAT --to-source <span class="token number">172.31</span>.0.2
<span class="token comment"># \u6216\u8005\u4E0A\u9762\u66FF\u6362\u4E0B\u9762\u8FD9\u4E2A\u3002\u505A\u667A\u80FD\u8F6C\u6362\uFF0C\u51FA\u53E3IP\u81EA\u52A8\u627E\u5230\u5408\u9002\u7684\u7F51\u5361\u51FA\u53BB</span>
iptables -t nat -A POSTROUTING -p tcp --destination <span class="token number">47.97</span>.173.91 --dport <span class="token number">80</span> -j MASQUERADE 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="img.png" loading="lazy"></p><h3 id="\u5185\u7F51\u4E3B\u673A\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F51\u4E3B\u673A\u901A\u4FE1" aria-hidden="true">#</a> \u5185\u7F51\u4E3B\u673A\u901A\u4FE1</h3><p>\u73B0\u5728\u4E70\u4E86\u4E00\u53F0\u9752\u4E91\u4E3B\u673A\uFF08\u914D\u7F6E\u4E86\u5916\u7F51IP\uFF09A <code>172.31.0.2</code>\uFF0C\u548C\u4E00\u53F0\u6CA1\u6709\u516C\u7F51\u7684\u5185\u7F51\u4E3B\u673A B<code>172.31.0.4</code>\uFF0C\u73B0\u5728\u60F3\u5B9E\u73B0B\u4E5F\u53EF\u4EE5\u8FDB\u884C\u5916\u7F51\u8BBF\u95EE</p><p>\u5176\u5B9E\u53EF\u4EE5\u6DFB\u52A0\u8DEF\u7531\u89C4\u5219\uFF0C\u8BA9B\u4E2D\u7684\u9ED8\u8BA4\u7F51\u5173\u662FA\u673A\u5668\u5C31\u884C\u3002\u8FD9\u6837\u5C31\u80FD\u7701\u53BB\u4E00\u4E2A\u5916\u7F51IP\u7684\u8D39\u7528\u4E86\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># B\u4E3B\u673A\u5185\u6DFB\u52A0\u8DEF\u7531</span>
<span class="token function">ip</span> route <span class="token function">add</span> default via <span class="token number">172.31</span>.0.3

<span class="token comment"># A\u4E3B\u673A\u6DFB\u52A0nat\u8F6C\u6362\uFF0C\u5E76\u4E14\u5F00\u542Fforward</span>
<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/ip_forward
iptables -t filter -P FORWARD ACCEPT

iptables -t nat -A POSTROUTING -s <span class="token number">172.31</span>.0.4 -j MASQUERADE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6D4B\u8BD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5185\u7F51\u4E3B\u673AB
[root@i-2hmqlu8t ~]# ip a
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 52:54:99:c3:ce:af brd ff:ff:ff:ff:ff:ff
    inet 172.31.0.4/24 brd 172.31.0.255 scope global noprefixroute dynamic eth0
       valid_lft 83388sec preferred_lft 83388sec
    inet6 fe80::5054:99ff:fec3:ceaf/64 scope link 
       valid_lft forever preferred_lft forever
       
\uFF03 \u53EF\u4EE5\u8BBF\u95EE\u5916\u7F51\u4E86
[root@i-2hmqlu8t ~]# curl -i baidu.com
HTTP/1.1 200 OK
Date: Mon, 05 Sep 2022 14:54:46 GMT
Server: Apache
Last-Modified: Tue, 12 Jan 2010 13:48:00 GMT
ETag: &quot;51-47cf7e6ee8400&quot;
Accept-Ranges: bytes
Content-Length: 81
Cache-Control: max-age=86400
Expires: Tue, 06 Sep 2022 14:54:46 GMT
Connection: Keep-Alive
Content-Type: text/html

&lt;html&gt;
&lt;meta http-equiv=&quot;refresh&quot; content=&quot;0;url=http://www.baidu.com/&quot;&gt;
&lt;/html&gt;
[root@i-2hmqlu8t ~]#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h3><ol><li>nat\u8F6C\u6362\u4F7F\u7528tcp\u6269\u5C55\u7684\u65F6\u5019\uFF0C\u4E00\u5B9A\u8981\u5148\u6307\u5B9A-p tcp\uFF0C\u7136\u540E\u518D\u63A5\u5176\u4ED6\u53C2\u6570\u3002</li><li>nat\u8F6C\u6362\u6280\u672F\u662F\u4E0D\u9700\u8981\u81EA\u5DF1\u518D\u6B21\u8FD4\u8F6C\u7684\uFF0C\u8FD9\u662F\u4F9D\u8D56\u4E8E<code>nf_conntrack</code>\u6A21\u5757\uFF0C<code>/proc/net/nf_conntrack</code>\u8BB0\u5F55\u8F6C\u6362\u4FE1\u606F\uFF0C\u8FD4\u56DE\u4F1A\u81EA\u52A8\u5E2E\u8F6C\u3002</li></ol>`,20),c=[d];function r(p,o){return s(),e("div",null,c)}var m=n(t,[["render",r],["__file","03-iptables-\u6848\u4F8B.html.vue"]]);export{m as default};

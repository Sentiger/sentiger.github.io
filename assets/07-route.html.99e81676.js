import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as d}from"./app.818b2f9d.js";const a={},s=d(`<h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6DFB\u52A0\u8DEF\u7531
route  [-v] [-A family |-4|-6] add [-net|-host] target [netmask Nm] [gw Gw] [metric N] [mss M] [window W] [irtt I] [reject] [mod] [dyn] [reinstate] [[dev] If]

route add -host 175.12.12.12/32 metric 10 dev eth1
route add -net 192.168.2.0/24 gw 10.0.2.1 metric 10 dev eth0
ip route add 192.168.0.0/24 via 0.0.0.0 dev eth0 metric 99

# \u5220\u9664\u8DEF\u7531
route  [-v] [-A family |-4|-6] del [-net|-host] target [gw Gw] [netmask Nm] [metric N] [[dev] If]
route del -host 175.12.12.12/32 metric 10 dev eth1
route del -net 192.168.2.0/24 gw 10.0.2.1 metric 10 dev eth0
ip route del 192.168.2.0/24 via 10.0.2.1 dev eth0

# \u4FEE\u6539\u8DEF\u7531
\u5BF9\u4E8E\u4FEE\u6539\u8DEF\u7531\u89C4\u5219\uFF0C\u53EA\u80FD\u4F7F\u7528ip route \u547D\u4EE4\u6765\u64CD\u4F5C\uFF0Croute\u4E0D\u80FD\u64CD\u4F5C\uFF0C\u4F46\u662F\u53EF\u4EE5\u8FD9\u6837\u6765\u914D\u7F6E
\u5EFA\u8BAE\uFF1A\u4F7F\u7528route\u65B0\u5EFA\u7ACB\u4E00\u4E2A\u548C\u9700\u8981\u4FEE\u6539\u7684\u4E00\u6837\u8DEF\u7531\uFF0C\u4EC5\u4EC5\u662Fmetric\u4E0D\u540C\u800C\u5DF2\uFF0C\u7136\u540E\u5220\u9664\u65E7\u7684\u8DEF\u7531

ip route repace \u662F\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8DEF\u7531
ip route replace \u76EE\u6807 \u8981\u66FF\u6362\u7684
ip route replace 192.168.2.0/24 dev eth0 metric 13
ip route replace 192.168.2.0/24 dev eth0 via 10.0.2.10

# \u8DEF\u7531\u8868
\u7CFB\u7EDF\u9ED8\u8BA4\u6709local\u548Cmain\u4E24\u5F20\u8DEF\u7531\u8868\u3002local\u8DEF\u7531\u8868\u4E00\u822C\u7531\u7CFB\u7EDF\u5185\u6838\u63A7\u5236\uFF0Cmain\u4E5F\u5C31\u662F\u5E94\u7528\u5C42\u6765\u63A7\u5236

cat /etc/iproute2/rt_tables 

ip route list table \u8868\u540D \u53EF\u4EE5\u67E5\u770B\u4E0D\u540C\u8868\u7684\u7684\u914D\u7F6E\u89C4\u5219\uFF0C\u9ED8\u8BA4\u662Fmain

route \u547D\u4EE4\u7528\u6765\u64CD\u4F5Cmain\u8868

# \u6D4B\u8BD5\u5730\u5740\u5339\u914D\u5230\u7684\u89C4\u5219
ip route get address

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E3B\u673A\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u673A\u8DEF\u7531" aria-hidden="true">#</a> \u4E3B\u673A\u8DEF\u7531</h2><h2 id="\u7F51\u7EDC\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u8DEF\u7531" aria-hidden="true">#</a> \u7F51\u7EDC\u8DEF\u7531</h2><h3 id="\u9759\u6001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u8DEF\u7531" aria-hidden="true">#</a> \u9759\u6001\u8DEF\u7531</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>route

ip route
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u52A8\u6001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u8DEF\u7531" aria-hidden="true">#</a> \u52A8\u6001\u8DEF\u7531</h3><h2 id="\u9ED8\u8BA4\u8DEF\u7531-\u7F51\u5173" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u8DEF\u7531-\u7F51\u5173" aria-hidden="true">#</a> \u9ED8\u8BA4\u8DEF\u7531\uFF08\u7F51\u5173\uFF09</h2><p>\u9ED8\u8BA4\u8DEF\u7531\u662F\u7F51\u5173\uFF0C\u5047\u8BBE\u6709\u591A\u4E2A\u9ED8\u8BA4\u8DEF\u7531\uFF0C\u662F\u6839\u636E\u8DEF\u7531\u8868\u4E2D\u7684<code>Metric</code>\u6765\u53D6\u4F18\u5148\u7EA7\u7684\uFF0C\u503C\u8D8A\u5C0F\u4F18\u5148\u7EA7\u8D8A\u9AD8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@master1 ~]# route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         10.0.2.2        0.0.0.0         UG    100    0        0 eth0
0.0.0.0         192.168.56.1    0.0.0.0         UG    101    0        0 eth1
10.0.2.0        0.0.0.0         255.255.255.0   U     100    0        0 eth0
172.30.0.0      0.0.0.0         255.255.255.0   U     0      0        0 cni0
172.30.1.0      172.30.1.0      255.255.255.0   UG    0      0        0 flannel.1
172.30.2.0      172.30.2.0      255.255.255.0   UG    0      0        0 flannel.1
192.168.56.0    0.0.0.0         255.255.255.0   U     101    0        0 eth1


\u4E0A\u9762\u6709\u4E24\u6761\u9ED8\u8BA4\u8DEF\u7531\uFF0C\u5728\u9009\u62E9\u7684\u65F6\u5019\uFF0C\u662F\u6839\u636EMetric\u6765\u53D6\u7684\uFF0C\u503C\u8D8A\u5C0F\uFF0C\u5219\u4F18\u5148\u7EA7\u8D8A\u4F4E\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6DFB\u52A0\u9ED8\u8BA4\u8DEF\u7531</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6DFB\u52A0\u9ED8\u8BA4\u8DEF\u7531\uFF0C\u5E76\u914D\u7F6Emetric\u6743\u503C\u4E3A1\uFF0Cmetric\u53EF\u9009
route add -net 0.0.0.0/0 gw 10.0.2.2 [metric 1] dev eth0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5339\u914D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D\u89C4\u5219" aria-hidden="true">#</a> \u5339\u914D\u89C4\u5219</h2><ol><li>\u76EE\u7684\u5730\u5740\u548C\u5B50\u7F51\u63A9\u7801\u505A\u4E0E\u8FD0\u7B97\uFF0C\u7136\u540E\u5339\u914DDestination\uFF0C\u5B50\u7F51\u63A9\u7801\uFF08Genmask\uFF09\u8D8A\u5927\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8</li><li>\u5BF9\u4E8E\u76F8\u540C\u8DEF\u7531\uFF0C\u5339\u914D\u89C4\u5219\u662F\u6839\u636EMetric\u6765\u505A\u5BF9\u6BD4\u7684\uFF0C\u503C\u8D8A\u5C0F\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\u3002</li></ol>`,14),r=[s];function l(t,v){return i(),n("div",null,r)}var m=e(a,[["render",l],["__file","07-route.html.vue"]]);export{m as default};

import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as d,c as s,a as n,b as a,e as v,d as r}from"./app.8bec52f2.js";var t="/assets/flannel-vxlan.e90554a5.png";const c={},u=v('<p>\u5B9E\u9A8C\uFF1A\u4F7F\u7528vxlan\u7EC4\u7F51\u3002</p><div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>VNI\uFF1A\u6BCF\u4E2Avxlan\u5B50\u7F51\u901A\u8FC7\u552F\u4E00\u7684VNI\u6765\u6807\u8BC6\u533A\u5206\uFF0C\u8BE5\u6807\u8BC6\u662F\u4E2A24bit\u8303\u56F4\u7684\u6574\u6570\uFF1B</p><p>VTEP\uFF1AVXLAN Tunnel Endpoints\uFF0C\u5373vxlan\u7F51\u7EDC\u7684\u8FB9\u7F18\u8BBE\u5907\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u7406\u89E3\uFF0C\u672C\u6587\u628AVTEP\u8BBE\u5907\u4E5F\u53EB\u4F5C\u201Cvxlan\u8BBE\u5907\u201D\u3002VNI\u914D\u7F6E\u5728VTEP\u8BBE\u5907\u4E0A\uFF0CVNI\u76F8\u540C\u7684VTEP\u8BBE\u5907\u5C5E\u4E8E\u540C\u4E00\u4E2Avxlan\u5B50\u7F51\u7F51\u7EDC\u3002</p><p>vtep\u8BBE\u5907\u53EF\u4EE5\u8FDB\u884C\u53D1\u9001UDP\u6570\u636E\u548C\u662F\u4E00\u4E2AUDP\u670D\u52A1\u63A5\u6536UDP\u6570\u636E</p></div><p><img src="'+t+`" alt="img.png" loading="lazy"></p><div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>node1: \u673A\u5668</p><p>eth1: 192.168.56.41</p><p>node2: \u673A\u5668</p><p>eth1: 192.168.56.42</p><p>node3: \u673A\u5668</p><p>eth1: 192.168.56.43</p></div><h2 id="flannel-1\u4E4B\u95F4\u80FD\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#flannel-1\u4E4B\u95F4\u80FD\u8BBF\u95EE" aria-hidden="true">#</a> flannel.1\u4E4B\u95F4\u80FD\u8BBF\u95EE</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
1. node1 \u670D\u52A1\u5668\u6DFB\u52A0vxlan\u8BBE\u5907

# \u6DFB\u52A0vxlan\u8BBE\u5907 flannel.1 (id: \u901A\u4E00\u4E2Alan\u76F8\u540C\uFF0Cdstport: \u63A5\u6536\u548C\u53D1\u9001\u7684upd\u7AEF\u53E3\u53F7\uFF0Cdev: \u901A\u8FC7\u54EA\u4E2A\u8BBE\u5907\u53D1\u9001\u51FA\u53BBudp\u548C\u76D1\u542Cudp)
ip link add flannel.1 type vxlan id 1 dstport 8472 dev eth1

# \u542F\u52A8\u5E76\u914D\u7F6E\u7F51\u7EDC
ifconfig flannel.1 1.1.0.1/16 up

# \u6B64\u65F6\u80FD\u67E5\u770Bvxlan\u5DF2\u7ECF\u5728\u76D1\u542Cudp\u670D\u52A1\u4E86
[root@test1 ~]# netstat -nulp | grep 8472
udp        0      0 0.0.0.0:8472            0.0.0.0:*                           - 

\u6700\u540E\u7684- \u8868\u793A\u662F\u5185\u6838\u6001\u76D1\u542C

# \u542F\u52A8flannel.1\u7F51\u5361\uFF0C\u4F1A\u81EA\u52A8\u914D\u7F6E\u5230\u8FBE\u8FD9\u4E2A\u7F51\u5361\u7684\u8DEF\u7531
[root@test1 ~]# route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
1.1.0.0         0.0.0.0         255.255.0.0     U     0      0        0 flannel.1


2. node2\u914D\u7F6Evxlan

ip link add flannel.1 type vxlan id 1 dstport 8472 dev eth1
ifconfig flannel.1 1.1.0.2/16 up
ip -d link show flannel.1
route -n

3. \u6D4B\u8BD5 node1 ping node2 flannel.1

# \u53D1\u73B0\u4E0D\u80FDping
[root@test1 ~]# ping  1.1.0.2
PING 1.1.0.2 (1.1.0.2) 56(84) bytes of data.
From 1.1.0.1 icmp_seq=1 Destination Host Unreachable
From 1.1.0.1 icmp_seq=2 Destination Host Unreachable

# \u6293\u5305\u67E5\u770B\u95EE\u9898\uFF0C\u6B64\u65F6flannel.1\u4E00\u76F4\u5728\u8BE2\u95EE1.1.0.2\u7684MAC\u5730\u5740\uFF0C\u76EE\u524D\u80AF\u5B9A\u662F\u83B7\u53D6\u4E0D\u5230\u4E86
[root@test1 ~]# tcpdump -i flannel.1 -n
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on flannel.1, link-type EN10MB (Ethernet), capture size 262144 bytes
16:23:25.329962 ARP, Request who-has 1.1.0.2 tell 1.1.0.1, length 28
16:23:26.330728 ARP, Request who-has 1.1.0.2 tell 1.1.0.1, length 28
16:23:27.332738 ARP, Request who-has 1.1.0.2 tell 1.1.0.1, length 28

# \u624B\u52A8\u6DFB\u52A0MAC\u5730\u5740
[root@test1 ~]# arp -i flannel.1 -s 1.1.0.2  a2:be:c4:ef:4d:17
[root@test1 ~]# ip neigh show dev flannel.1
1.1.0.2 lladdr a2:be:c4:ef:4d:17 PERMANENT

# \u7EE7\u7EEDping\u548C\u6293\u5305\uFF0C\u53D1\u73B0\u6B64\u65F6flannel.1\u5728\u53D1\u9001\u5B8C\u6574\u7684\u94FE\u8DEF\u6570\u636E\u4E86\uFF0C\u53EA\u662F\u6CA1\u6709\u6536\u5230\u56DE\u7B54
[root@test1 ~]# tcpdump -i flannel.1 -n
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on flannel.1, link-type EN10MB (Ethernet), capture size 262144 bytes
16:26:10.203661 IP 1.1.0.1 &gt; 1.1.0.2: ICMP echo request, id 4060, seq 1, length 64
16:26:11.241495 IP 1.1.0.1 &gt; 1.1.0.2: ICMP echo request, id 4060, seq 2, length 64
16:26:12.241710 IP 1.1.0.1 &gt; 1.1.0.2: ICMP echo request, id 4060, seq 3, length 64
16:26:13.251889 IP 1.1.0.1 &gt; 1.1.0.2: ICMP echo request, id 4060, seq 4, length 64

# \u901A\u8FC7VETP\u8BBE\u5907\u53D1\u9001UDP\uFF0C\u4E0A\u9762\u5DF2\u7ECF\u6784\u9020\u51FA\u4E86\u5B8C\u6574\u7684\u4E8C\u5C42\u94FE\u8DEF\u6570\u636E\u5E27\u4E86\u3002\u6B64\u65F6\u914D\u5408VTEP\u8BBE\u5907\u6765\u53D1\u9001\u5230\u76EE\u7684\u7684\u4E3B\u673A\u3002
# \u6B64\u65F6\u53C8\u51FA\u73B0\u4E86\u4E00\u4E2A\u65B0\u7684\u8868FDB\u8868\uFF0CFDB\u672C\u6765\u662F\u9488\u5BF9\u4E8C\u5C42\u4EA4\u6362\u7684\u6620\u5C04\uFF0CLinux\u9488\u5BF9vxlan\u505A\u4E86\u6269\u5C55\uFF0C\u53EF\u4EE5\u8BBE\u5B9AUDP\u53D1\u9001\u7684\u8FDC\u7A0BIP
[root@test1 ~]# bridge fdb append a2:be:c4:ef:4d:17 dev flannel.1 dst 192.168.56.42
[root@test1 ~]# bridge fdb show dev flannel.1
a2:be:c4:ef:4d:17 dst 192.168.56.42 self permanent

# \u7EE7\u7EEDping\u548C\u6293\u5305\uFF0C\u53D1\u73B0node1\u8FD8\u662F\u6CA1\u6709\u6536\u5230\u5E94\u7B54\uFF0C\u6B64\u65F6\u6293\u5305node2\u4E2D\u7684\uFF0C\u67E5\u770B\u6570\u636E\u662F\u5426\u5DF2\u7ECF\u5230\u8FBE
# \u53D1\u73B0node2\u4E2D\u5DF2\u7ECF\u6709\u5C01\u88C5\u597D\u7684\u6570\u636E\uFF0C\u5E76\u4E14\u901A\u8FC7vtep\u89E3\u5C01\u88C5\u4E86\uFF0C\u5E76\u53D1\u9001\u5230\u7F51\u5361\uFF0C\u6B64\u65F6\u6293\u5305\u770B\u5230\u7684\u662F1.1.0.2\u4E0D\u77E5\u90531.1.0.1\u7684mac\u5730\u5740
[root@test2 ~]# tcpdump -i flannel.1 -n
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on flannel.1, link-type EN10MB (Ethernet), capture size 262144 bytes
16:32:15.576382 IP 1.1.0.1 &gt; 1.1.0.2: ICMP echo request, id 4250, seq 64, length 64
16:32:16.575705 IP 1.1.0.1 &gt; 1.1.0.2: ICMP echo request, id 4250, seq 65, length 64
16:32:16.575739 ARP, Request who-has 1.1.0.1 tell 1.1.0.2, length 28

# \u914D\u7F6Enode2\u4E2Dnode1\u7684flannel.1 MAC
arp -i flannel.1 -s 1.1.0.1 9e:59:43:cf:84:da

# \u7EE7\u7EED\u6D4B\u8BD5\uFF0C\u53D1\u73B0\u80FDping\u901A
[root@test1 ~]# ping  1.1.0.2
PING 1.1.0.2 (1.1.0.2) 56(84) bytes of data.
64 bytes from 1.1.0.2: icmp_seq=1 ttl=64 time=0.500 ms
64 bytes from 1.1.0.2: icmp_seq=2 ttl=64 time=0.610 ms

# \u6B64\u65F6\u6709\u4E2A\u95EE\u9898\uFF0Cnode2\u8FD8\u6CA1\u6709\u914D\u7F6EFDB\u8868\uFF0C\u901A\u8FC7\u67E5\u770B\u5728\u63A5\u6536\u6570\u636E\u7684\u65F6\u5019\u81EA\u52A8\u5E2E\u914D\u7F6E\u597D\u4E86\uFF0C\u8FD9\u4E2A\u4E00\u822C\u6700\u597D\u624B\u52A8\u914D\u7F6E\u4E5F\u53EF\u4EE5
[root@test2 ~]# bridge fdb show dev flannel.1
9e:59:43:cf:84:da dst 192.168.56.41 self


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u65B0\u589Enode3" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589Enode3" aria-hidden="true">#</a> \u65B0\u589Enode3</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. node3 \u914D\u7F6E

# \u6DFB\u52A0\u8BBE\u5907
ip link add flannel.1 type vxlan id 1 dstport 8472 dev eth1
ifconfig flannel.1 1.1.0.2/16 up

# \u914D\u7F6Earp MAC 
arp -i flannel.1 -s 1.1.0.1 9e:59:43:cf:84:da
arp -i flannel.1 -s 1.1.0.2  a2:be:c4:ef:4d:17

# \u914D\u7F6EFDB\u8868
bridge fdb append 9e:59:43:cf:84:da dev flannel.1 dst 192.168.56.41
bridge fdb append a2:be:c4:ef:4d:17 dev flannel.1 dst 192.168.56.42

2. node1,node\u914D\u7F6E
arp -i flannel.1 -s 1.1.0.3 16:39:fa:a8:a2:ee
bridge fdb append 16:39:fa:a8:a2:ee dev flannel.1 dst 192.168.56.43

3. \u6D4B\u8BD5\uFF1A\u53EF\u4EE5\u4E92\u76F8ping\u901A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u73B0\u5728\u80FD\u7406\u89E3vxlan\u662F\u5728\u4E09\u5C42\u7F51\u7EDC\u4E0A\u6784\u5EFA\u4E00\u4E2A\u5927\u4E8C\u5C42\u7F51\u7EDC\uFF0C\u56E0\u4E3A\u5230vxlan\u4E2D\u7684\u6570\u636E\u90FD\u662F\u5B8C\u6574\u7684\u4E8C\u5C42\u6570\u636E\uFF0C\u53EA\u662F\u8FD9\u4E2A\u65F6\u5019\u5C06\u4E8C\u5C42\u6570\u636E\u5305\u901A\u8FC7udp\u53D1\u9001\u51FA\u53BB\u3002\u6B64\u65F6udp\u662F\u5F53\u6210\u4E86\u4E00\u4E2A\u94FE\u8DEF\u8FC7\u7A0B\uFF0C\u4FDD\u8BC1\u6570\u636E\u5B8C\u6574\u6027\u8FD8\u662F\u9760\u53CC\u65B9tcp\u7684</p><h2 id="flannel-1-vxlan\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#flannel-1-vxlan\u5B9E\u73B0" aria-hidden="true">#</a> flannel.1 vxlan\u5B9E\u73B0</h2><p>flannel.1\u7684\u5B9E\u73B0\u662F\u4E0D\u505A\u6570\u636E\u5305\u7684\u5C01\u88C5\u548C\u53D1\u9001\uFF0C\u5B8C\u5168\u662F\u4F9D\u8D56vxlan\uFF0Cflanneld\u4EC5\u4EC5\u662F\u5145\u5F53\u4E00\u4E2A\u6570\u636E\u5E73\u9762\u6765\u7BA1\u7406\u5404\u4E2A\u8282\u70B9\u4E4B\u95F4\u7684\u8DEF\u7531\uFF0CMAC\uFF0CFDB\u7684\u5173\u7CFB\u3002</p><p>\u6240\u4EE5\u5728\u96C6\u7FA4\u8282\u70B9\u6BD4\u8F83\u5927\u7684\u65F6\u5019\uFF0C\u65B0\u589E\u8282\u70B9\u4F1A\u6709\u5EF6\u8FDF\uFF0C\u56E0\u4E3A\u4F1A\u66F4\u65B0\u6574\u4E2A\u96C6\u7FA4\u4E2D\u7684\u8DEF\u7531\uFF0CMAC\uFF0CFDB\u5173\u7CFB</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,14),o={href:"https://www.modb.pro/db/399005",target:"_blank",rel:"noopener noreferrer"},b=r("flannel VXLAN\u6A21\u5F0F\u7684\u5B9E\u73B0");function m(p,f){const e=l("ExternalLinkIcon");return d(),s("div",null,[u,n("ul",null,[n("li",null,[n("a",o,[b,a(e)])])])])}var x=i(c,[["render",m],["__file","06-flannel-vxlan.html.vue"]]);export{x as default};

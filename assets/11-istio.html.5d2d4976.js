import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as s}from"./app.9ef81cd9.js";const d={},l=s(`<h2 id="istio\u6D41\u91CF\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#istio\u6D41\u91CF\u4EE3\u7406" aria-hidden="true">#</a> istio\u6D41\u91CF\u4EE3\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u627E\u51FAistio-proxy\u5BB9\u5668PID\uFF0C\u7136\u540E\u8FDB\u5165\u7F51\u7EDC\u547D\u540D\u7A7A\u95F4
nsenter -t 19094 -n

2. \u67E5\u770Biptables\u89C4\u5219\uFF08\u8FD9\u4E9B\u89C4\u5219\u90FD\u662Finit\u5BB9\u5668\u914D\u7F6E\u7684\uFF09

[root@web1 ~]# iptables -t nat -S
-P PREROUTING ACCEPT
-P INPUT ACCEPT
-P OUTPUT ACCEPT
-P POSTROUTING ACCEPT
-N ISTIO_INBOUND
-N ISTIO_IN_REDIRECT
-N ISTIO_OUTPUT
-N ISTIO_REDIRECT
-A PREROUTING -p tcp -j ISTIO_INBOUND
-A OUTPUT -p tcp -j ISTIO_OUTPUT


-A ISTIO_INBOUND -p tcp -m tcp --dport 15008 -j RETURN
-A ISTIO_INBOUND -p tcp -m tcp --dport 15090 -j RETURN
-A ISTIO_INBOUND -p tcp -m tcp --dport 15021 -j RETURN
-A ISTIO_INBOUND -p tcp -m tcp --dport 15020 -j RETURN
-A ISTIO_INBOUND -p tcp -j ISTIO_IN_REDIRECT
-A ISTIO_IN_REDIRECT -p tcp -j REDIRECT --to-ports 15006


iptables -t nat -A ISTIO_OUTPUT -s 127.0.0.6/32 -o lo -j RETURN
iptables -t nat -A ISTIO_OUTPUT ! -d 127.0.0.1/32 -o lo -m owner --uid-owner 1337 -j ISTIO_IN_REDIRECT
iptables -t nat -A ISTIO_OUTPUT -o lo -m owner ! --uid-owner 1337 -j RETURN
iptables -t nat -A ISTIO_OUTPUT -m owner --uid-owner 1337 -j RETURN
iptables -t nat -A ISTIO_OUTPUT ! -d 127.0.0.1/32 -o lo -m owner --gid-owner 1337 -j ISTIO_IN_REDIRECT
iptables -t nat -A ISTIO_OUTPUT -o lo -m owner ! --gid-owner 1337 -j RETURN
iptables -t nat -A ISTIO_OUTPUT -m owner --gid-owner 1337 -j RETURN
iptables -t nat -A ISTIO_OUTPUT -d 127.0.0.1/32 -j RETURN
iptables -t nat -A ISTIO_OUTPUT -j ISTIO_REDIRECT

# \u8F6C\u53D1\u523015001\u8FD9\u4E2A\u7AEF\u53E3\u5904\u7406
iptables -t nat -A ISTIO_REDIRECT -p tcp -j REDIRECT --to-ports 15001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D41\u91CF\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6D41\u91CF\u5206\u6790" aria-hidden="true">#</a> \u6D41\u91CF\u5206\u6790</h3><p>iptables\u89C4\u5219\u90FD\u662F\u901A\u8FC7init\u5BB9\u5668\u8FDB\u884C\u7BA1\u7406\u7684</p><h4 id="\u8FDB\u5165istio-proxy\u6D41\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165istio-proxy\u6D41\u91CF" aria-hidden="true">#</a> \u8FDB\u5165istio-proxy\u6D41\u91CF</h4><p>\u901A\u8FC7PREROUTING\u8FDB\u884Cnat\u8F6C\u53D1</p><ol><li>15008\uFF0C15090\uFF0C15021\uFF0C15020 \u901A\u8FC7\u8FD9\u56DB\u4E2A\u7AEF\u53E3\u8FDB\u6765\u7684\u6D41\u91CF\u76F4\u63A5\u4E0D\u505A\u5904\u7406</li><li>\u5176\u4ED6\u7684\u76F4\u63A5\u8F6C\u5230\u7AEF\u53E3<code>15006</code> \u3002\u4E5F\u5C31\u662F\u8FD9\u4E2A\u7AEF\u53E3\u505A\u4E00\u5C42\u5904\u7406\uFF08envoy\uFF09</li></ol><h3 id="\u4ECEistio-proxy-\u7528\u6237\u6001-\u53D1\u51FA\u53BB\u7684\u6D41\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4ECEistio-proxy-\u7528\u6237\u6001-\u53D1\u51FA\u53BB\u7684\u6D41\u91CF" aria-hidden="true">#</a> \u4ECEistio-proxy\uFF08\u7528\u6237\u6001\uFF09\u53D1\u51FA\u53BB\u7684\u6D41\u91CF</h3><p>\u901A\u8FC7OUTPUT\u94FE\u8FDB\u884C\u62E6\u622A\u51FA\u53BB\u6D41\u91CF</p><p>\u51FA\u53E3\u6D41\u91CF\u8FC7\u6EE4\u6389\u672C\u5730\u6216\u8005uid\u662F1337\u53D1\u51FA\u7684\uFF0C\u90FD\u8FDB\u884C\u7ED9\u523015001\u5904\u7406</p>`,10),a=[l];function t(r,v){return n(),e("div",null,a)}var I=i(d,[["render",t],["__file","11-istio.html.vue"]]);export{I as default};

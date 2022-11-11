import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as r,c as k,b as p,w as a,e as i,a as n,d as s}from"./app.f798e990.js";var d="/assets/user-app.754313fb.png";const v={},m=i(`<h2 id="istio\u6D41\u91CF\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#istio\u6D41\u91CF\u4EE3\u7406" aria-hidden="true">#</a> istio\u6D41\u91CF\u4EE3\u7406</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u627E\u51FAistio-proxy\u5BB9\u5668PID\uFF0C\u7136\u540E\u8FDB\u5165\u7F51\u7EDC\u547D\u540D\u7A7A\u95F4
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D41\u91CF\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6D41\u91CF\u5206\u6790" aria-hidden="true">#</a> \u6D41\u91CF\u5206\u6790</h3><p>iptables\u89C4\u5219\u90FD\u662F\u901A\u8FC7init\u5BB9\u5668\u8FDB\u884C\u7BA1\u7406\u7684</p><h4 id="\u8FDB\u5165istio-proxy\u6D41\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165istio-proxy\u6D41\u91CF" aria-hidden="true">#</a> \u8FDB\u5165istio-proxy\u6D41\u91CF</h4><p>\u901A\u8FC7PREROUTING\u8FDB\u884Cnat\u8F6C\u53D1</p><ol><li>15008\uFF0C15090\uFF0C15021\uFF0C15020 \u901A\u8FC7\u8FD9\u56DB\u4E2A\u7AEF\u53E3\u8FDB\u6765\u7684\u6D41\u91CF\u76F4\u63A5\u4E0D\u505A\u5904\u7406</li><li>\u5176\u4ED6\u7684\u76F4\u63A5\u8F6C\u5230\u7AEF\u53E3<code>15006</code> \u3002\u4E5F\u5C31\u662F\u8FD9\u4E2A\u7AEF\u53E3\u505A\u4E00\u5C42\u5904\u7406\uFF08envoy\uFF09</li></ol><h3 id="\u4ECEistio-proxy-\u7528\u6237\u6001-\u53D1\u51FA\u53BB\u7684\u6D41\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4ECEistio-proxy-\u7528\u6237\u6001-\u53D1\u51FA\u53BB\u7684\u6D41\u91CF" aria-hidden="true">#</a> \u4ECEistio-proxy\uFF08\u7528\u6237\u6001\uFF09\u53D1\u51FA\u53BB\u7684\u6D41\u91CF</h3><p>\u901A\u8FC7OUTPUT\u94FE\u8FDB\u884C\u62E6\u622A\u51FA\u53BB\u6D41\u91CF</p><p>\u51FA\u53E3\u6D41\u91CF\u8FC7\u6EE4\u6389\u672C\u5730\u6216\u8005uid\u662F1337\u53D1\u51FA\u7684\uFF0C\u90FD\u8FDB\u884C\u7ED9\u523015001\u5904\u7406</p><h2 id="demo1" tabindex="-1"><a class="header-anchor" href="#demo1" aria-hidden="true">#</a> demo1</h2><p>\u6784\u5EFA\u4E00\u4E2A\u666E\u901A\u7684service\u5E94\u7528</p><p><img src="`+d+'" alt="img.png" loading="lazy"></p><p><strong>\u7B80\u5355yaml</strong></p>',14),b=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` apps/v1
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` Deployment
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`v1
  `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s(`app
    `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(` v1
  `),n("span",{class:"token key atrule"},"annotations"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"kubernetes.io/change-cause"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"\u7528\u6237\u670D\u52A1v1\u7248\u672C"'),s(`

`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"replicas"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1"),s(`
  `),n("span",{class:"token key atrule"},"selector"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"matchLabels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s(`app
      `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(` v1
  `),n("span",{class:"token key atrule"},"template"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`v1
      `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s(`app
        `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(` v1
    `),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"containers"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`v1
        `),n("span",{class:"token key atrule"},"image"),n("span",{class:"token punctuation"},":"),s(" nginx"),n("span",{class:"token punctuation"},":"),s("1.18"),n("span",{class:"token punctuation"},"-"),s(`alpine
        `),n("span",{class:"token key atrule"},"command"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"sh"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"-c"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},`"echo 'user service for v1' > /usr/share/nginx/html/index.html; nginx -g 'daemon off;'"`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` apps/v1
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` Deployment
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`v2
  `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s(`app
    `),n("span",{class:"token key atrule"},"verison"),n("span",{class:"token punctuation"},":"),s(` v2
  `),n("span",{class:"token key atrule"},"annotations"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"kubernetes.io/change-cause"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"\u7528\u6237\u670D\u52A1v2\u7248\u672C"'),s(`

`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"replicas"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"1"),s(`
  `),n("span",{class:"token key atrule"},"selector"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"matchLabels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s(`app
      `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(` v2
  `),n("span",{class:"token key atrule"},"template"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`v2
      `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s(`app
        `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(` v2
    `),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"containers"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`v2
          `),n("span",{class:"token key atrule"},"image"),n("span",{class:"token punctuation"},":"),s(" nginx"),n("span",{class:"token punctuation"},":"),s("1.18"),n("span",{class:"token punctuation"},"-"),s(`alpine
          `),n("span",{class:"token key atrule"},"command"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"sh"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"-c"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},`"echo 'user service for v2' > /usr/share/nginx/html/index.html; nginx -g 'daemon off;'"`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` v1
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` Service
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`svc
  `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`svc

`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"selector"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s(`app
  `),n("span",{class:"token key atrule"},"ports"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` http
    `),n("span",{class:"token key atrule"},"protocol"),n("span",{class:"token punctuation"},":"),s(` TCP
    `),n("span",{class:"token key atrule"},"port"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"80"),s(`
    `),n("span",{class:"token key atrule"},"targetPort"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"80"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=i(`<p><strong>\u624B\u52A8\u6CE8\u5165istion</strong></p><p>\u7531\u4E8Eistio\u662F\u65E0\u4FB5\u5165\u5F0F\u7684\uFF0C\u5BF9\u4E8E\u5E94\u7528\u6765\u8BF4\u5E76\u6CA1\u6709\u6539\u53D8\u4EFB\u4F55\u5730\u65B9\uFF0C\u4EC5\u4EC5\u662F\u53D1\u5E03\u7684\u65F6\u5019\u4E0D\u540C\u3002\u5C06user-app\u5E94\u7528\u52A0\u5165\u5230\u7F51\u683C\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>istioctl kube-inject -f user-app-v1-deploy.yaml <span class="token operator">|</span>kubectl apply -f -
istioctl kube-inject -f user-app-v2-deploy.yaml <span class="token operator">|</span>kubectl apply -f -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u6743\u91CD\u7684\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6743\u91CD\u7684\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> \u914D\u7F6E\u6743\u91CD\u7684\u8D1F\u8F7D\u5747\u8861</h3><p>k8s \u81EA\u5E26\u7684service\u53EA\u80FD\u652F\u6301pod\u4E4B\u95F4\u7684\u8D1F\u8F7D\u5747\u8861\uFF0C\u4E00\u822C\u4E00\u4E2Aservice\u9488\u5BF9\u7684\u662F\u76F8\u540C\u540E\u7AEF\u63D0\u4F9B\u670D\u52A1\u53D1\u73B0\u3002\u800C\u9488\u5BF9\u4E8E\u50CF\u4E0D\u540C\u7248\u672C\u7684\u5E94\u7528\uFF0C\u5728\u90E8\u7F72\u7684\u65F6\u5019\u4F1A\u5B58\u5728\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ol><li>\u540C\u4E00\u4E2A\u5E94\u7528\u7684service name\u80AF\u5B9A\u4E0D\u80FD\u53D8\u5316\uFF0C\u5047\u8BBE\u53D1\u5E03\u4E86\u4E00\u4E2Av2\u7248\u672C\u7684user\uFF0C\u80AF\u5B9A\u8FD8\u662F\u4F7F\u7528\u4E4B\u524D\u7684service name\u63D0\u4F9B\u670D\u52A1\uFF0C\u8981\u4E0D\u7136\u522B\u7684\u8C03\u7528\u670D\u52A1\u90FD\u8981\u66F4\u6539</li><li>\u7531\u4E8E\u7B2C\u4E00\u70B9\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u53EA\u80FD\u5B9A\u4E49\u76F8\u540C\u7684selector\u9009\u62E9\u540E\u7AEF\u7684pod\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5C31\u6CA1\u6CD5\u533A\u5206\u4E0D\u540C\u7248\u672C\u5E94\u7528</li><li>istio\u6B63\u597D\u5C31\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898</li></ol>`,6),T=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` DestinationRule
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`destinationrule

`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s("svc "),n("span",{class:"token comment"},"# \u9009\u62E9\u8981\u533A\u5206\u7684service name"),s(`
  `),n("span",{class:"token key atrule"},"subsets"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token comment"},"# \u5B9A\u4E49\u4E0D\u540C\u7684\u8282\u70B9"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` v1  
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(" v1 "),n("span",{class:"token comment"},"# \u4ECE\u76F8\u540C\u7684service name\u4E2D\u53C8\u8FC7\u6EE4\u4E00\u904D\u5176\u4E2D\u7684version:v1\u7684pod"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` v2
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(` v2
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` VirtualService
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`virtualservice
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"hosts"),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token comment"},"# \u8FD9\u91CC\u662F\u4ECE\u54EA\u4E9Bservice name\u8FDB\u6765\u7684\u6D41\u91CF"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`svc 
  `),n("span",{class:"token key atrule"},"http"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token comment"},"# \u63D0\u4F9B\u7684http\u670D\u52A1"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s("svc"),n("span",{class:"token punctuation"},"-"),s(`route
    `),n("span",{class:"token key atrule"},"route"),n("span",{class:"token punctuation"},":"),s(` 
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token comment"},"# \u8FD9\u91CC\u5B9A\u4E49\u7684\u662F\u540E\u7AEFdestinationrule"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`svc
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v1
      `),n("span",{class:"token key atrule"},"weight"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"90"),s(),n("span",{class:"token comment"},"# 90%\u6743\u91CD\u5230\u8FBE\u8FD9\u4E2Adestination"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`svc
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v2
      `),n("span",{class:"token key atrule"},"weight"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"10"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=i(`<p><strong>\u6D4B\u8BD5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u5176\u4E2D\u4E00\u4E2A\u5E94\u7528\u5BB9\u5668</span>
kubectl <span class="token builtin class-name">exec</span> -it user-app-v2-6c57679bfc-2zdgp -c user-app-v2 -- <span class="token function">sh</span>

<span class="token comment"># \u6D4B\u8BD5</span>
<span class="token function">curl</span> user-app-svc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u603B\u7ED3</strong></p><p>\u9488\u5BF9\u4E0A\u9762\u7684\u5E94\u7528\uFF0C\u5305\u62ECk8s\u4E2D\u7684\u4EFB\u4F55\u914D\u7F6E\u90FD\u6CA1\u4EFB\u4F55\u6539\u53D8\uFF0C\u4EC5\u4EC5\u662F\u52A0\u4E86\u4E00\u6B65\u5C06\u5E94\u7528\u52A0\u5165\u5230\u4E86<code>service mesh</code>\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u5B8C\u5168\u5BF9\u5F00\u53D1\u662F\u65E0\u611F\u7684\u3002\u5BF9\u4E8Ek8s\u7684\u539F\u6765\u64CD\u4F5C\u4E5F\u57FA\u672C\u6CA1\u6539\u53D8\u3002</p><p>\u5176\u5B9E\u8F6F\u4EF6\u5F00\u53D1\uFF0C\u90FD\u662F\u8FD9\u6837\uFF0C\u4E00\u5C42\u4E0D\u80FD\u5B9E\u73B0\u529F\u80FD\uFF0C\u7136\u540E\u5728\u73B0\u6709\u7684\u57FA\u7840\u4E0A\u518D\u6B21\u62BD\u8C61\u51FA\u4E00\u5C42\u6765\u6539\u53D8\u3002</p><h3 id="\u914D\u7F6E\u7F51\u5173\u5141\u8BB8\u7F51\u683C\u5916\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7F51\u5173\u5141\u8BB8\u7F51\u683C\u5916\u8BBF\u95EE" aria-hidden="true">#</a> \u914D\u7F6E\u7F51\u5173\u5141\u8BB8\u7F51\u683C\u5916\u8BBF\u95EE</h3><p>\u9488\u5BF9\u4E8E\u7F51\u683C\u5916\u7684\u6D41\u91CF\u5982\u4F55\u8FDB\u5165\u5462\uFF1F\u4F7F\u7528ingress\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4E5F\u9700\u8981\u5C06ingress\u4E2D\u6CE8\u5165\u5230\u7F51\u683C\u5185\u90E8\u3002istio\u63D0\u4F9B\u4E86\u6211\u4EEC\u4E00\u79CD\u65B9\u5F0F\uFF0C\u4F7F\u7528gateway\u7684\u65B9\u5F0F\u5C06\u5916\u90E8\u6D41\u91CF\u6CE8\u5165\u5230\u7F51\u683C\u5185\u90E8\u3002</p><p>gateway\u9ED8\u8BA4\u5B89\u88C5\u7684\u65F6\u5019\u5982\u679C\u9009\u62E9\u4E86\uFF0C\u4F1A\u5728<code>istio-system</code>\u4E2D\u4F1A\u542F\u52A8\u670D\u52A1\uFF0C\u4F1A\u66B4\u529B\u7AEF\u53E3nodeport 31221\uFF0C\u6216\u8005loadbalace\u3002</p>`,8),x=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# user-app-gateway.yaml"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` Gateway
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`gateway

`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"selector"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(" istio"),n("span",{class:"token punctuation"},"-"),s("ingressgateway "),n("span",{class:"token comment"},"# \u9009\u62E9\u4E00\u4E2A\u7F51\u5173\u670D\u52A1\uFF0Ckubectl -n istio-system get pods --show-labels  \u6765\u67E5\u770Bingress-gateway "),s(`

  `),n("span",{class:"token key atrule"},"servers"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"hosts"),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token comment"},"# \u5916\u90E8\u8FDB\u6765\u7684\u57DF\u540D"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(" user"),n("span",{class:"token punctuation"},"-"),s(`app.com
    `),n("span",{class:"token key atrule"},"port"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"number"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"80"),s(),n("span",{class:"token comment"},"# \u8FD9\u4E2A\u7AEF\u53E3\u662Fgateway\u670D\u52A1\u7684\u7AEF\u53E3 kubectl -n istio-system get svc"),s(`
      `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` http
      `),n("span",{class:"token key atrule"},"protocol"),n("span",{class:"token punctuation"},":"),s(` HTTP
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# user-app-gateway-virtualservice.yaml"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` VirtualService
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s("gateway"),n("span",{class:"token punctuation"},"-"),s(`virtualservice
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"hosts"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token comment"},"# \u8FDB\u5165virtualservice\u57DF\u540D"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(" user"),n("span",{class:"token punctuation"},"-"),s(`app.com
  `),n("span",{class:"token key atrule"},"gateways"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token comment"},"# \u5141\u8BB8\u54EA\u4E9B\u7F51\u5173\uFF0C\u5176\u4ED6\u7684\u5B9A\u4E49\u548C\u5185\u90E8virtualservice\u4E00\u6837"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`gateway
  `),n("span",{class:"token key atrule"},"http"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token comment"},"#"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s("svc"),n("span",{class:"token punctuation"},"-"),s(`route
    `),n("span",{class:"token key atrule"},"route"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`svc
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v1
      `),n("span",{class:"token key atrule"},"weight"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"90"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(" user"),n("span",{class:"token punctuation"},"-"),s("app"),n("span",{class:"token punctuation"},"-"),s(`svc
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v2
      `),n("span",{class:"token key atrule"},"weight"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"10"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=i(`<p><strong>\u6D4B\u8BD5</strong></p><p>\u4E00\u822C\u6B63\u5F0F\u64CD\u4F5C\u90FD\u662F\u4F1A\u914D\u5408loadBalance\u6765\u4F7F\u7528\u7684\uFF0C\u6211\u4EEC\u6682\u65F6\u4F7F\u7528\u7F51\u5173\u66B4\u9732\u51FA\u6765\u7684nodePort<code>31221</code>\u8BBF\u95EE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@web1 demo<span class="token punctuation">]</span><span class="token comment"># curl -i -H &quot;Host: user-app.com&quot; 172.31.0.3:31221</span>
HTTP/1.1 <span class="token number">200</span> OK
server: istio-envoy
date: Mon, <span class="token number">19</span> Sep <span class="token number">2022</span> 07:08:17 GMT
content-type: text/html
content-length: <span class="token number">20</span>
last-modified: Mon, <span class="token number">19</span> Sep <span class="token number">2022</span> 03:47:33 GMT
etag: <span class="token string">&quot;6327e655-14&quot;</span>
accept-ranges: bytes
x-envoy-upstream-service-time: <span class="token number">0</span>

user <span class="token function">service</span> <span class="token keyword">for</span> v1


<span class="token punctuation">[</span>root@web1 demo<span class="token punctuation">]</span><span class="token comment">#  curl -i -H &quot;Host: user-app.com&quot; 139.198.165.7:31221</span>
HTTP/1.1 <span class="token number">200</span> OK
server: istio-envoy
date: Mon, <span class="token number">19</span> Sep <span class="token number">2022</span> 07:08:42 GMT
content-type: text/html
content-length: <span class="token number">20</span>
last-modified: Mon, <span class="token number">19</span> Sep <span class="token number">2022</span> 03:47:42 GMT
etag: <span class="token string">&quot;6327e65e-14&quot;</span>
accept-ranges: bytes
x-envoy-upstream-service-time: <span class="token number">0</span>

user <span class="token function">service</span> <span class="token keyword">for</span> v2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u91CD\u5199uri" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5199uri" aria-hidden="true">#</a> \u91CD\u5199URI</h3><p>istio\u4E5F\u652F\u6301URI\u91CD\u5199\uFF0C\u53C2\u8003\u4E0B\u9762\u8FD9\u4E2Ademo</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>app<span class="token punctuation">-</span>gateway<span class="token punctuation">-</span>virtualservice
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> user<span class="token punctuation">-</span>app.com
  <span class="token key atrule">gateways</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> user<span class="token punctuation">-</span>app<span class="token punctuation">-</span>gateway
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>app<span class="token punctuation">-</span>svc<span class="token punctuation">-</span>route<span class="token punctuation">-</span>v1
      <span class="token key atrule">match</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
            <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;/v1&quot;</span>
      <span class="token key atrule">rewrite</span><span class="token punctuation">:</span>
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
      <span class="token key atrule">route</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
            <span class="token key atrule">host</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>app<span class="token punctuation">-</span>svc
            <span class="token key atrule">subset</span><span class="token punctuation">:</span> v1
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>app<span class="token punctuation">-</span>svc<span class="token punctuation">-</span>route<span class="token punctuation">-</span>v2
      <span class="token key atrule">match</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
            <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;/v2&quot;</span>
      <span class="token key atrule">rewrite</span><span class="token punctuation">:</span>
        <span class="token key atrule">uri</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>
      <span class="token key atrule">route</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
            <span class="token key atrule">host</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>app<span class="token punctuation">-</span>svc
            <span class="token key atrule">subset</span><span class="token punctuation">:</span> v2
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>app<span class="token punctuation">-</span>svc<span class="token punctuation">-</span>route<span class="token punctuation">-</span>default
      <span class="token key atrule">route</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
            <span class="token key atrule">host</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>app<span class="token punctuation">-</span>svc
            <span class="token key atrule">subset</span><span class="token punctuation">:</span> v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6D4B\u8BD5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBF\u95EEv1\u7248\u672C</span>
<span class="token punctuation">[</span>root@web1 demo<span class="token punctuation">]</span><span class="token comment"># curl -i -H &quot;Host: user-app.com&quot; 172.31.0.3:31221/v1</span>
HTTP/1.1 <span class="token number">200</span> OK
server: istio-envoy
date: Mon, <span class="token number">19</span> Sep <span class="token number">2022</span> 07:42:17 GMT
content-type: text/html
content-length: <span class="token number">20</span>
last-modified: Mon, <span class="token number">19</span> Sep <span class="token number">2022</span> 03:47:33 GMT
etag: <span class="token string">&quot;6327e655-14&quot;</span>
accept-ranges: bytes
x-envoy-upstream-service-time: <span class="token number">1</span>

user <span class="token function">service</span> <span class="token keyword">for</span> v1

<span class="token comment"># \u8BBF\u95EEv2\u7248\u672C</span>
<span class="token punctuation">[</span>root@web1 demo<span class="token punctuation">]</span><span class="token comment"># curl -i -H &quot;Host: user-app.com&quot; 172.31.0.3:31221/v2</span>
HTTP/1.1 <span class="token number">200</span> OK
server: istio-envoy
date: Mon, <span class="token number">19</span> Sep <span class="token number">2022</span> 07:42:44 GMT
content-type: text/html
content-length: <span class="token number">20</span>
last-modified: Mon, <span class="token number">19</span> Sep <span class="token number">2022</span> 03:47:42 GMT
etag: <span class="token string">&quot;6327e65e-14&quot;</span>
accept-ranges: bytes
x-envoy-upstream-service-time: <span class="token number">0</span>

user <span class="token function">service</span> <span class="token keyword">for</span> v2

<span class="token comment"># \u9ED8\u8BA4</span>
<span class="token punctuation">[</span>root@web1 demo<span class="token punctuation">]</span><span class="token comment"># curl -i -H &quot;Host: user-app.com&quot; 172.31.0.3:31221</span>
HTTP/1.1 <span class="token number">200</span> OK
server: istio-envoy
date: Mon, <span class="token number">19</span> Sep <span class="token number">2022</span> 07:42:56 GMT
content-type: text/html
content-length: <span class="token number">20</span>
last-modified: Mon, <span class="token number">19</span> Sep <span class="token number">2022</span> 03:47:33 GMT
etag: <span class="token string">&quot;6327e655-14&quot;</span>
accept-ranges: bytes
x-envoy-upstream-service-time: <span class="token number">0</span>

user <span class="token function">service</span> <span class="token keyword">for</span> v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function U(R,f){const c=o("CodeTabs");return r(),k("div",null,[m,p(c,{data:[{title:"user-app-v1-deploy.yaml"},{title:"user-app-v2-deploy.yaml"},{title:"user-app-svc.yaml"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:l})=>[b]),tab1:a(({title:e,value:t,isActive:l})=>[y]),tab2:a(({title:e,value:t,isActive:l})=>[g]),_:1},8,["data"]),h,p(c,{data:[{title:"user-app-destinationrule.yaml"},{title:"user-app-virtualservice.yaml"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:l})=>[T]),tab1:a(({title:e,value:t,isActive:l})=>[I]),_:1},8,["data"]),_,p(c,{data:[{title:"\u7F51\u5173\u5B9A\u4E49"},{title:"\u5B9A\u4E49\u7F51\u5173\u540E\u9762\u8FDB\u5165\u7684virtualService"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:l})=>[x]),tab1:a(({title:e,value:t,isActive:l})=>[O]),_:1}),w])}var E=u(v,[["render",U],["__file","11-istio.html.vue"]]);export{E as default};

import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as r,c as k,b as c,w as a,e as u,a as n,d as s}from"./app.0c280829.js";var d="/assets/bookinfo-app.1b0b0288.png",v="/assets/ratings-delay.0b7dfef3.png";const m={},b=u('<p>\u4F7F\u7528istio\u81EA\u5E26\u7684bookinfo\u793A\u4F8B\u6765\u4E86\u89E3\u5176\u7279\u6027\u3002</p><p><img src="'+d+`" alt="img.png" loading="lazy"></p><p><strong>\u670D\u52A1\u89E3\u6790</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5206\u522B\u6709\u56DB\u4E2A\u670D\u52A1\uFF1A

productpage
    v1 \u7248\u672C
    
reviews
    v1 \u7248\u672C
    v2 \u7248\u672C
    v3 \u7248\u672C

details
    v1 \u7248\u672C

ratings
    v1 \u7248\u672C    

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5bookinfo\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5bookinfo\u793A\u4F8B" aria-hidden="true">#</a> \u5B89\u88C5bookinfo\u793A\u4F8B</h2>`,5),y=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u5C06bookinfo\u5E94\u7528\u90FD\u88C5\u5728\u8FD9\u4E2Anamespace\u4E2D"),s(`
kubectl create namespace bookinfo

`),n("span",{class:"token comment"},"# \u4E3A\u4E86\u4E0D\u624B\u52A8\u6CE8\u5165sidecar\uFF0C\u76F4\u63A5\u6253\u4E0A\u6807\u7B7E\uFF0C\u5728\u8FD9\u4E2Anamespace\u4E0B\u521B\u5EFA\u7684pod\u90FD\u4F1A\u81EA\u52A8\u52A0\u5165\u7F51\u683C"),s(`
kubectl label namespace bookinfo istio-injection`),n("span",{class:"token operator"},"="),s(`enabled

`),n("span",{class:"token comment"},"# \u521B\u5EFA\u5E94\u7528\uFF08sample\u5728\u4E0B\u8F7Distio\u7684\u65F6\u5019\u4F1A\u81EA\u5E26\uFF09"),s(`
kubectl -n bookinfo apply -f samples/bookinfo/platform/kube/bookinfo.yaml

`),n("span",{class:"token comment"},"# \u5B89\u88C5\u7ED3\u679C"),s(`
`),n("span",{class:"token punctuation"},"["),s("root@web1 bookinfo-demo"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# kubectl get pods -n bookinfo "),s(`
NAME                              READY   STATUS    RESTARTS   AGE
details-v1-b48c969c5-6pjff        `),n("span",{class:"token number"},"2"),s("/2     Running   "),n("span",{class:"token number"},"0"),s(`          18h
productpage-v1-74fdfbd7c7-7tbkq   `),n("span",{class:"token number"},"2"),s("/2     Running   "),n("span",{class:"token number"},"0"),s(`          18h
ratings-v1-b74b895c5-jl5st        `),n("span",{class:"token number"},"2"),s("/2     Running   "),n("span",{class:"token number"},"0"),s(`          18h
reviews-v1-68b4dcbdb9-m927w       `),n("span",{class:"token number"},"2"),s("/2     Running   "),n("span",{class:"token number"},"0"),s(`          18h
reviews-v2-565bcd7987-9w4ql       `),n("span",{class:"token number"},"2"),s("/2     Running   "),n("span",{class:"token number"},"0"),s(`          18h
reviews-v3-d88774f9c-98rfs        `),n("span",{class:"token number"},"2"),s("/2     Running   "),n("span",{class:"token number"},"0"),s(`          18h

`),n("span",{class:"token punctuation"},"["),s("root@web1 bookinfo-demo"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# kubectl -n bookinfo get deployments"),s(`
NAME             READY   UP-TO-DATE   AVAILABLE   AGE
details-v1       `),n("span",{class:"token number"},"1"),s("/1     "),n("span",{class:"token number"},"1"),s("            "),n("span",{class:"token number"},"1"),s(`           18h
productpage-v1   `),n("span",{class:"token number"},"1"),s("/1     "),n("span",{class:"token number"},"1"),s("            "),n("span",{class:"token number"},"1"),s(`           18h
ratings-v1       `),n("span",{class:"token number"},"1"),s("/1     "),n("span",{class:"token number"},"1"),s("            "),n("span",{class:"token number"},"1"),s(`           18h
reviews-v1       `),n("span",{class:"token number"},"1"),s("/1     "),n("span",{class:"token number"},"1"),s("            "),n("span",{class:"token number"},"1"),s(`           18h
reviews-v2       `),n("span",{class:"token number"},"1"),s("/1     "),n("span",{class:"token number"},"1"),s("            "),n("span",{class:"token number"},"1"),s(`           18h
reviews-v3       `),n("span",{class:"token number"},"1"),s("/1     "),n("span",{class:"token number"},"1"),s("            "),n("span",{class:"token number"},"1"),s(`           18h

`),n("span",{class:"token punctuation"},"["),s("root@web1 bookinfo-demo"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token comment"},"# kubectl -n bookinfo get svc"),s(`
NAME          TYPE        CLUSTER-IP      EXTERNAL-IP   PORT`),n("span",{class:"token punctuation"},"("),s("S"),n("span",{class:"token punctuation"},")"),s(`    AGE
details       ClusterIP   `),n("span",{class:"token number"},"10.96"),s(".170.138   "),n("span",{class:"token operator"},"<"),s("none"),n("span",{class:"token operator"},">"),s("        "),n("span",{class:"token number"},"9080"),s(`/TCP   18h
productpage   ClusterIP   `),n("span",{class:"token number"},"10.96"),s(".203.207   "),n("span",{class:"token operator"},"<"),s("none"),n("span",{class:"token operator"},">"),s("        "),n("span",{class:"token number"},"9080"),s(`/TCP   18h
ratings       ClusterIP   `),n("span",{class:"token number"},"10.96"),s(".101.46    "),n("span",{class:"token operator"},"<"),s("none"),n("span",{class:"token operator"},">"),s("        "),n("span",{class:"token number"},"9080"),s(`/TCP   18h
reviews       ClusterIP   `),n("span",{class:"token number"},"10.96"),s(".119.61    "),n("span",{class:"token operator"},"<"),s("none"),n("span",{class:"token operator"},">"),s("        "),n("span",{class:"token number"},"9080"),s(`/TCP   18h
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: bookinfo-gateway
  namespace: bookinfo

spec:
  selector:
    app: istio-ingressgateway
  servers:
  - hosts:
    - 139.198.165.7
    port:
      name: http
      number: 80
      protocol: HTTP


---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: gateway-virtualservice
  namespace: bookinfo

spec:
  hosts:
  - 139.198.165.7
  gateways:
  - bookinfo-gateway
  http:
  - name: bookinfo-svc-route
    route:
    - destination:
        host: productpage
        port:
          number: 9080
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`1. \u7531\u4E8E\u6CA1\u6709\u57DF\u540D\u5907\u6848\uFF0C\u8FD9\u91CC\u76F4\u63A5\u5C31\u4F7F\u7528\u7684\u662FIP\u8BBF\u95EE
2. \u914D\u7F6E\u4E86\u7F51\u5173\uFF0C\u5916\u90E8\u6D41\u91CF\u8FDB\u5165\u5230\u7F51\u683C
3. \u6D4F\u89C8\u5668\u8BBF\u95EE http://139.198.165.7/productpage
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h2",{id:"\u6DFB\u52A0\u9ED8\u8BA4\u8DEF\u7531v1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6DFB\u52A0\u9ED8\u8BA4\u8DEF\u7531v1","aria-hidden":"true"},"#"),s(" \u6DFB\u52A0\u9ED8\u8BA4\u8DEF\u7531v1")],-1),w=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# destinationrule.yaml"),s(`

`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` DestinationRule
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` productpage
  `),n("span",{class:"token key atrule"},"namespace"),n("span",{class:"token punctuation"},":"),s(` bookinfo
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` productpage
  `),n("span",{class:"token key atrule"},"subsets"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` v1
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"app"),n("span",{class:"token punctuation"},":"),s(` v1
`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` DestinationRule
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` reviews
  `),n("span",{class:"token key atrule"},"namespace"),n("span",{class:"token punctuation"},":"),s(` bookinfo
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` reviews
  `),n("span",{class:"token key atrule"},"subsets"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` v1
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(` v1
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` v2
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(` v2
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` v3
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(` v3

`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` DestinationRule
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` detail
  `),n("span",{class:"token key atrule"},"namespace"),n("span",{class:"token punctuation"},":"),s(` bookinfo
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` details
  `),n("span",{class:"token key atrule"},"subsets"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` v1
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(` v1

`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` DestinationRule
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` ratings
  `),n("span",{class:"token key atrule"},"namespace"),n("span",{class:"token punctuation"},":"),s(` bookinfo
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` ratings
  `),n("span",{class:"token key atrule"},"subsets"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` v1
    `),n("span",{class:"token key atrule"},"labels"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(` v1
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# virtualservice.yaml"),s(`
`),n("span",{class:"token comment"},"# \u9ED8\u8BA4\u90FD\u662F\u914D\u7F6Ev1\u7248\u672C"),s(`

`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` VirtualService
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` productpage
  `),n("span",{class:"token key atrule"},"namespace"),n("span",{class:"token punctuation"},":"),s(` bookinfo
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"hosts"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(` productpage
  `),n("span",{class:"token key atrule"},"http"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"route"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` productpage
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v1
`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` VirtualService
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` reviews
  `),n("span",{class:"token key atrule"},"namespace"),n("span",{class:"token punctuation"},":"),s(` bookinfo
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"hosts"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(` reviews
  `),n("span",{class:"token key atrule"},"http"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"route"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` reviews
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v1

`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` VirtualService
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` ratings
  `),n("span",{class:"token key atrule"},"namespace"),n("span",{class:"token punctuation"},":"),s(` bookinfo
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"hosts"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(` ratings
  `),n("span",{class:"token key atrule"},"http"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"route"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` ratings
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v1
`),n("span",{class:"token punctuation"},"---"),s(`
`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` VirtualService
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` details
  `),n("span",{class:"token key atrule"},"namespace"),n("span",{class:"token punctuation"},":"),s(` bookinfo
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"hosts"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(` details
  `),n("span",{class:"token key atrule"},"http"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"route"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` details
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v1
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`# \u914D\u7F6E
kubectl apply -f destinationrule.yaml
kubectl apply -f virtualservice.yaml 

# \u8BBF\u95EE
\u73B0\u5728\u8BBF\u95EE\u90FD\u662F\u8D70\u7684v1\u7248\u672C\u670D\u52A1
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("h2",{id:"\u53D1\u5E03\u6D4B\u8BD5\u7248\u672C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53D1\u5E03\u6D4B\u8BD5\u7248\u672C","aria-hidden":"true"},"#"),s(" \u53D1\u5E03\u6D4B\u8BD5\u7248\u672C")],-1),A=n("p",null,"\u73B0\u5728\u53D1\u5E03\u4E86v2\u7684\u6D4B\u8BD5\u7248\u672C\uFF0C\u60F3\u5148\u8BA9\u5185\u90E8\u7528\u6237\u6D4B\u8BD5\u4E0B\u3002\u4F8B\u5982\u901A\u8FC7header\u914D\u7F6E\u767B\u9646\u7528\u6237\u4E3Aqiqi\u7684\u4F7F\u7528v2\u7248\u672C",-1),T=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# virtualservice-reviews-test-v2.yaml"),s(`

`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` VirtualService
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` reviews
  `),n("span",{class:"token key atrule"},"namespace"),n("span",{class:"token punctuation"},":"),s(` bookinfo

`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"hosts"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(` reviews
  `),n("span",{class:"token key atrule"},"http"),n("span",{class:"token punctuation"},":"),s("  "),n("span",{class:"token comment"},"# \u8DEF\u7531\u5339\u914D\u90FD\u662F\u4ECE\u524D\u5F80\u540E\u5339\u914D\u7684"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"match"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"headers"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"end-user"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token key atrule"},"exact"),n("span",{class:"token punctuation"},":"),s(" qiqi  "),n("span",{class:"token comment"},"# \u5339\u914D\u5230end-user\u4E3Aqiqi\u7684\u65F6\u5019\uFF0C\u5C31\u76F4\u63A5\u4F7F\u7528\u8FD9\u4E2A\u8DEF\u7531\uFF0C\u5426\u5219\u4F7F\u7528\u9ED8\u8BA4\u7684"),s(`
    `),n("span",{class:"token key atrule"},"route"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` reviews
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v2

  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"route"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` reviews
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v1
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=u('<h2 id="\u6545\u969C\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u6545\u969C\u6CE8\u5165" aria-hidden="true">#</a> \u6545\u969C\u6CE8\u5165</h2><h3 id="\u5EF6\u65F6\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u65F6\u6CE8\u5165" aria-hidden="true">#</a> \u5EF6\u65F6\u6CE8\u5165</h3><p><img src="'+v+'" alt="img.png" loading="lazy"></p>',3),R=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`\u6709\u65F6\u5019\u9700\u8981\u8FDB\u884C\u7EBF\u4E0A\u670D\u52A1\u7684\u7A33\u5B9A\u6027\u6D4B\u8BD5\uFF0C\u7136\u800C\u5728\u5404\u4E2A\u670D\u52A1\u4E4B\u95F4\u60F3\u6A21\u62DF\u4E00\u4E0B\u8D85\u65F6\u6216\u8005\u8BF7\u6C42\u5931\u8D25\uFF0C\u603B\u4E0D\u80FD\u5728\u4EE3\u7801\u4E2D\u5199bug\u5427\u3002iostio\u7ED9\u63D0\u4F9B\u4E86\u5F88\u597D\u7684\u6545\u969C\u6CE8\u5165

1. productpage->reviews \u670D\u52A1\u95F4\u8C03\u7528\u7A0B\u5E8F\u8BBE\u7F6E\u7684\u8D85\u65F6\u65F6\u95F4\u662F3\u79D2\uFF0C\u4F46\u662F\u6709\u4E00\u4E2A\u91CD\u8BD5\u673A\u5236\u3002
2. \u73B0\u5728reviews\u670D\u52A1\u53C8\u8C03\u7528\u4E86ratings\u670D\u52A1\uFF08\u4ED6\u4EEC\u4E4B\u95F4\u7A0B\u5E8F\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F410\u79D2\uFF09\uFF0C\u73B0\u5728\u76F4\u63A5\u8BBE\u7F6Eratings\u670D\u52A1\u5EF6\u8FDF7\u79D2
3. productpage\u8C03\u7528reviews\uFF0C\u5219\u4F1A\u4E09\u79D2\u8D85\u65F6\u4E4B\u540E\u53C8\u91CD\u65B0\u53D1\u8D77\u8BF7\u6C42\uFF0C\u603B\u51716\u79D2\u3002
4. \u6240\u4EE5productpage\u8C03\u7528reviews\u670D\u52A16\u79D2\u540E\u81EA\u52A8\u8D85\u65F6
5. \u7ED3\u5408match\uFF0C\u8BE5\u9519\u8BEF\u53EA\u9488\u5BF9qiq\u6709\u6548

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# virtualservice-ratings-test-delay.yaml"),s(`

`),n("span",{class:"token key atrule"},"apiVersion"),n("span",{class:"token punctuation"},":"),s(` networking.istio.io/v1alpha3
`),n("span",{class:"token key atrule"},"kind"),n("span",{class:"token punctuation"},":"),s(` VirtualService
`),n("span",{class:"token key atrule"},"metadata"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"name"),n("span",{class:"token punctuation"},":"),s(` ratings
  `),n("span",{class:"token key atrule"},"namespace"),n("span",{class:"token punctuation"},":"),s(` bookinfo
`),n("span",{class:"token key atrule"},"spec"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token key atrule"},"hosts"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(` ratings 
  `),n("span",{class:"token key atrule"},"http"),n("span",{class:"token punctuation"},":"),s(`
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"fault"),n("span",{class:"token punctuation"},":"),s(`
      `),n("span",{class:"token key atrule"},"delay"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"fixedDelay"),n("span",{class:"token punctuation"},":"),s(` 7s
        `),n("span",{class:"token key atrule"},"percentage"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token key atrule"},"value"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"100"),s(`
    `),n("span",{class:"token key atrule"},"match"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"headers"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"end-user"),n("span",{class:"token punctuation"},":"),s(`
          `),n("span",{class:"token key atrule"},"exact"),n("span",{class:"token punctuation"},":"),s(` qiqi
    `),n("span",{class:"token key atrule"},"route"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` ratings
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v1
  `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"route"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token key atrule"},"destination"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"host"),n("span",{class:"token punctuation"},":"),s(` ratings
        `),n("span",{class:"token key atrule"},"subset"),n("span",{class:"token punctuation"},":"),s(` v1
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`\u589E\u52A0 productpage \u4E0E reviews \u670D\u52A1\u4E4B\u95F4\u7684\u8D85\u65F6\u6216\u964D\u4F4E reviews \u4E0E ratings \u7684\u8D85\u65F6
\u7EC8\u6B62\u5E76\u91CD\u542F\u4FEE\u590D\u540E\u7684\u5FAE\u670D\u52A1
\u786E\u8BA4 /productpage \u9875\u9762\u6B63\u5E38\u54CD\u5E94\u4E14\u6CA1\u6709\u4EFB\u4F55\u9519\u8BEF
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=u(`<h3 id="http-abort-\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#http-abort-\u6CE8\u5165" aria-hidden="true">#</a> HTTP abort \u6CE8\u5165</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ratings
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> bookinfo
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ratings
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">headers</span><span class="token punctuation">:</span>
        <span class="token key atrule">end-user</span><span class="token punctuation">:</span>
          <span class="token key atrule">exact</span><span class="token punctuation">:</span> qiqi
    <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> ratings
        <span class="token key atrule">subset</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">fault</span><span class="token punctuation">:</span>
      <span class="token key atrule">abort</span><span class="token punctuation">:</span>
        <span class="token key atrule">httpStatus</span><span class="token punctuation">:</span> <span class="token number">500</span>
        <span class="token key atrule">percentage</span><span class="token punctuation">:</span>
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token punctuation">-</span> <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> ratings
        <span class="token key atrule">subset</span><span class="token punctuation">:</span> v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D41\u91CF\u8F6C\u79FB" tabindex="-1"><a class="header-anchor" href="#\u6D41\u91CF\u8F6C\u79FB" aria-hidden="true">#</a> \u6D41\u91CF\u8F6C\u79FB</h2><p>\u5728\u53D1\u5E03\u7684\u65F6\u5019\uFF0C\u5E0C\u671B\u4ECE\u8001\u7248\u672C\u9010\u6E10\u5411\u65B0\u7248\u672C\u4E2D\u8FC1\u79FB\uFF0C\u53EF\u4EE5\u6309\u7167\u6D41\u91CF\u767E\u5206\u6BD4\u6765\u505A\u5904\u7406\u3002\u7136\u540E\u89C2\u5BDF\u670D\u52A1\u7A33\u5B9A\u6027\uFF0C\u53EF\u4EE5\u6162\u6162\u8FC1\u79FB\u5230\u6700\u65B0\u7248\u672C</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> reviews
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> bookinfo
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> reviews
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> reviews
        <span class="token key atrule">subset</span><span class="token punctuation">:</span> v3
      <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">50</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> reviews
        <span class="token key atrule">subset</span><span class="token punctuation">:</span> v1
      <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tcp\u6D41\u91CF\u8F6C\u79FB" tabindex="-1"><a class="header-anchor" href="#tcp\u6D41\u91CF\u8F6C\u79FB" aria-hidden="true">#</a> TCP\u6D41\u91CF\u8F6C\u79FB</h2>`,6);function C(I,D){const i=p("CodeTabs");return r(),k("div",null,[b,c(i,{data:[{title:"\u90E8\u7F72\u5E94\u7528"},{title:"\u914D\u7F6Egateway"},{title:"\u6D4B\u8BD5"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:l})=>[y]),tab1:a(({title:e,value:t,isActive:l})=>[h]),tab2:a(({title:e,value:t,isActive:l})=>[g]),_:1}),f,c(i,{data:[{title:"\u9ED8\u8BA4\u540E\u7AEF"},{title:"\u9ED8\u8BA4\u865A\u62DF\u670D\u52A1"},{title:"\u6D4B\u8BD5"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:l})=>[w]),tab1:a(({title:e,value:t,isActive:l})=>[_]),tab2:a(({title:e,value:t,isActive:l})=>[x]),_:1}),V,A,c(i,{data:[{title:"v2\u865A\u62DF\u670D\u52A1"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:l})=>[T]),_:1}),P,c(i,{data:[{title:"\u5EF6\u65F6\u6CE8\u5165"},{title:"yaml"},{title:"\u89E3\u51B3\u65B9\u6CD5"}],"tab-id":"language"},{tab0:a(({title:e,value:t,isActive:l})=>[R]),tab1:a(({title:e,value:t,isActive:l})=>[S]),tab2:a(({title:e,value:t,isActive:l})=>[E]),_:1}),q])}var G=o(m,[["render",C],["__file","12-istio-bookinfo.html.vue"]]);export{G as default};

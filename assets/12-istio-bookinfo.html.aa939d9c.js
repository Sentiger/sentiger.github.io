import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as p,c as r,b as c,w as e,e as k,a as n,d as s}from"./app.e1e43ef2.js";var d="/assets/bookinfo-app.1b0b0288.png";const m={},b=k('<p>\u4F7F\u7528istio\u81EA\u5E26\u7684bookinfo\u793A\u4F8B\u6765\u4E86\u89E3\u5176\u7279\u6027\u3002</p><p><img src="'+d+`" alt="img.png" loading="lazy"></p><p><strong>\u670D\u52A1\u89E3\u6790</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5206\u522B\u6709\u56DB\u4E2A\u670D\u52A1\uFF1A

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5bookinfo\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5bookinfo\u793A\u4F8B" aria-hidden="true">#</a> \u5B89\u88C5bookinfo\u793A\u4F8B</h2>`,5),v=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u5C06bookinfo\u5E94\u7528\u90FD\u88C5\u5728\u8FD9\u4E2Anamespace\u4E2D"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`apiVersion: networking.istio.io/v1alpha3
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
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h2",{id:"\u6DFB\u52A0\u9ED8\u8BA4\u8DEF\u7531v1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6DFB\u52A0\u9ED8\u8BA4\u8DEF\u7531v1","aria-hidden":"true"},"#"),s(" \u6DFB\u52A0\u9ED8\u8BA4\u8DEF\u7531v1")],-1),f=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# destinationrule.yaml"),s(`

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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-yaml ext-yml line-numbers-mode"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token comment"},"# virtualservice.yaml"),s(`
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
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-text ext-text line-numbers-mode"},[n("pre",{class:"language-text"},[n("code",null,`# \u914D\u7F6E
kubectl apply -f destinationrule.yaml
kubectl apply -f virtualservice.yaml 

# \u8BBF\u95EE
\u73B0\u5728\u8BBF\u95EE\u90FD\u662F\u8D70\u7684v1\u7248\u672C\u670D\u52A1
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function x(A,V){const i=o("CodeTabs");return p(),r("div",null,[b,c(i,{data:[{title:"\u90E8\u7F72\u5E94\u7528"},{title:"\u914D\u7F6Egateway"},{title:"\u6D4B\u8BD5"}],"tab-id":"language"},{tab0:e(({title:a,value:l,isActive:t})=>[v]),tab1:e(({title:a,value:l,isActive:t})=>[y]),tab2:e(({title:a,value:l,isActive:t})=>[g]),_:1}),h,c(i,{data:[{title:"\u9ED8\u8BA4\u540E\u7AEF"},{title:"\u9ED8\u8BA4\u865A\u62DF\u670D\u52A1"},{title:"\u6D4B\u8BD5"}],"tab-id":"language"},{tab0:e(({title:a,value:l,isActive:t})=>[f]),tab1:e(({title:a,value:l,isActive:t})=>[w]),tab2:e(({title:a,value:l,isActive:t})=>[_]),_:1})])}var E=u(m,[["render",x],["__file","12-istio-bookinfo.html.vue"]]);export{E as default};

import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as l,c as o,a as e,b as t,d as n,e as d}from"./app.753bc227.js";const r={},u=e("h2",{id:"cni",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cni","aria-hidden":"true"},"#"),n(" CNI")],-1),c=e("p",null,"CNI\u5B9A\u4E49\u4E86\u4E00\u5957\u5BB9\u5668\u7F51\u7EDC\u89C4\u8303\u3002\u6240\u4EE5\u5728\u5BB9\u5668\u548C\u5BB9\u5668\u7F51\u7EDC\u53EF\u4EE5\u5206\u522B\u7531\u4E0D\u540C\u7684\u4EBA\u53BB\u5F00\u53D1\uFF0C\u5BB9\u5668\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528CNI\u89C4\u8303\u53BB\u8C03\u7528\u5BF9\u5E94\u7684CNI\u63D2\u4EF6\uFF0C\u6216\u8005\u5BB9\u5668\u4E0D\u652F\u6301CNI\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u5728\u4E0A\u5C42\u5199\u4E00\u5957\u7A0B\u5E8F\u624B\u52A8\u7BA1\u7406\u5BB9\u5668\u548C\u5BB9\u5668\u76F4\u63A5\u7684\u7F51\u7EDC\u3002",-1),v=e("h2",{id:"\u624B\u52A8\u8C03\u7528cni\u63D2\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u624B\u52A8\u8C03\u7528cni\u63D2\u4EF6","aria-hidden":"true"},"#"),n(" \u624B\u52A8\u8C03\u7528CNI\u63D2\u4EF6")],-1),b={href:"https://www.cni.dev/docs/",target:"_blank",rel:"noopener noreferrer"},m=n("\u89C4\u8303\u53C2\u8003"),q=d(`<ol><li>CNI\u89C4\u8303\u662F\u7ED9namespace\u914D\u7F6E\u7F51\u7EDC\u7684</li><li>\u6240\u4EE5\u53EF\u4EE5\u76F4\u63A5\u521B\u5EFA\u4E0D\u540C\u7684namespace\uFF0C\u6765\u6A21\u62DF\u3002\u56E0\u4E3A\u5BB9\u5668\u6700\u7EC8\u8FD0\u884C\u4E5F\u662F\u4E0D\u540C\u7684namespace\uFF0C\u6700\u7EC8\u7ED9namespace\u914D\u7F6E\u7F51\u7EDC</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u4E0B\u8F7DCNI\u63D2\u4EF6
2. \u914D\u7F6ECNI
3. \u8FD0\u884C\u63D2\u4EF6


{
    &quot;name&quot;:&quot;lab-br0&quot;,
    &quot;type&quot;:&quot;bridge&quot;,
    &quot;bridge&quot;:&quot;lab-br0&quot;,
    &quot;isGateway&quot;:true,
    &quot;ipMasq&quot;:true,
    &quot;ipam&quot;:{
        &quot;type&quot;:&quot;host-local&quot;,
        &quot;subnet&quot;:&quot;10.15.10.0/24&quot;
    },
    &quot;routes&quot;:[
        {
            &quot;dst&quot;:&quot;0.0.0.0/0&quot;
        }
    ],
    &quot;rangeStart&quot;:&quot;10.15.10.100&quot;,
    &quot;rangeEnd&quot;:&quot;10.15.10.200&quot;,
    &quot;gateway&quot;:&quot;10.15.10.99&quot;
}

CNI_COMMAND=ADD CNI_CONTAINERID=lab-ns CNI_NETNS=/var/run/netns/lab-ns CNI_IFNAME=eth0 CNI_PATH=\`pwd\` ./bridge &lt;../conf/lab-br0.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#k8s\u7F51\u7EDC" aria-hidden="true">#</a> k8s\u7F51\u7EDC</h2><ol><li>\u521B\u5EFA\u5BB9\u5668</li><li>kubelet\u901A\u8FC7CNI\u914D\u7F6Epause\u7F51\u7EDC</li><li>POD\u52A0\u5165pause namespace</li></ol><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,5),h={href:"https://morningspace.github.io/tech/k8s-net-cni/",target:"_blank",rel:"noopener noreferrer"},_=n("\u53C2\u8003\u8D44\u6599");function p(N,I){const i=s("ExternalLinkIcon");return l(),o("div",null,[u,c,v,e("p",null,[e("a",b,[m,t(i)])]),q,e("ul",null,[e("li",null,[e("a",h,[_,t(i)])])])])}var g=a(r,[["render",p],["__file","21-CNI.html.vue"]]);export{g as default};

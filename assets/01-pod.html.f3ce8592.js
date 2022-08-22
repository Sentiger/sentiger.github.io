import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as d,c as r,a as e,b as t,d as i,e as l}from"./app.aa6a3d05.js";const s={},h=e("p",null,"POD API\u64CD\u4F5C",-1),c=i("\u53C2\u8003\u5B8C\u6574API\u6587\u6863 "),p={href:"https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/pod-v1/",target:"_blank",rel:"noopener noreferrer"},u=i("pod"),_=l('<h2 id="pod\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#pod\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> Pod\u751F\u547D\u5468\u671F</h2><p>\u8FD9\u4E2A\u662FPOD\u542F\u52A8\u5230\u7ED3\u675F\u7684\u65F6\u5019\u751F\u547D\u5468\u671F\u3002\u8FD9\u91CC\u4E0D\u662F\u9488\u5BF9\u4E8E\u91CC\u9762\u7684\u5177\u4F53\u5BB9\u5668\uFF0C\u800C\u4E14\u662F\u4E00\u4E2A\u5B8F\u89C2\u7684\u6982\u8FF0</p><ul><li>Pending\uFF1A\u5F00\u59CB\u72B6\u6001\u90FD\u662FPending\uFF08\u7B49\u5F85\u8C03\u5EA6\uFF0C\u62C9\u53D6\u955C\u50CF\uFF09</li><li>Running\uFF1A\u81F3\u5C11\u6709\u4E00\u4E2A\u5BB9\u5668\u6B63\u5E38\u542F\u52A8\uFF0C\u5219\u662FRunning</li><li>Succeeded\uFF1APod\u4E2D\u7684\u5BB9\u5668\u5168\u90E8\u542F\u52A8\u6210\u529F\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u91CD\u542F</li><li>Failed\uFF1APod\u4E2D\u7684\u5BB9\u5668\u90FD\u5168\u90E8\u7EC8\u6B62\u3002\u4E14\u81F3\u5C11\u6709\u4E00\u4E2A\u5BB9\u5668\u662F\u5931\u8D25\u7EC8\u6B62\u7684\u3002exit(\u975E0)\u9000\u51FA</li><li>Unknown\uFF1A\u65E0\u6CD5\u83B7\u53D6\u5230Pod\u7684\u72B6\u6001\uFF0C\u4E00\u822C\u662F\u4E0Epod\u6240\u5728\u4E3B\u673A\u901A\u4FE1\u5931\u8D25</li></ul><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li>Pod\u5728\u751F\u547D\u5468\u671F\u4E2D\u53EA\u4F1A\u88AB\u8C03\u7528\u4E00\u6B21</li><li>kubelet\u4F1A\u76D1\u542C\u8FD9\u4E9B\u5BB9\u5668\uFF0C\u5E76\u6309\u7167\u6307\u5B9A\u7684\u7B56\u7565\u6765\u7BA1\u7406\u5BB9\u5668\uFF08\u91CD\u542F\u6216\u8005\u5FFD\u7565\uFF09</li><li>API\u4E2D\u80FD\u8FD4\u56DECondition\u7684\u4E00\u7EC4\u72B6\u6001</li></ul><h2 id="\u5BB9\u5668\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u72B6\u6001" aria-hidden="true">#</a> \u5BB9\u5668\u72B6\u6001</h2><p>\u5BB9\u5668\u72B6\u6001\u662F\u6307Pod\u4E2D\u7684\u5BB9\u5668\u5177\u4F53\u72B6\u6001</p><ul><li>Waiting\uFF1A\u5904\u4E8E\u975ERunning\u548CTerminated\u72B6\u6001\uFF0C\u4E00\u822C\u662F\u62C9\u53D6\u955C\u50CF\uFF0C\u6B63\u5728\u60F3\u5BB9\u5668\u6CE8\u5165Sect\u6570\u636E\u7B49\u64CD\u4F5C</li><li>Running\uFF1A\u5BB9\u5668\u6B63\u5E38\u8FD0\u884C\u3002\u4E14\u5DF2\u7ECF\u6267\u884C\u4E86POSTStart\u56DE\u8C03</li><li>Terminated\uFF1A\u8FD0\u884C\u5B8C\u6210\uFF0C\u5E76\u4E14\u4EE5\u6B63\u5E38\u6216\u975E\u6B63\u5E38\u7ED3\u675F\u3002preStop\u56DE\u8C03\u51FD\u6570\u5DF2\u7ECF\u6267\u884C\u5B8C</li></ul><p><strong>\u5BB9\u5668\u91CD\u542F\u7B56\u7565</strong></p><p>\u7531\u4E8E\u5BB9\u5668\u662F\u7531Pod\u7BA1\u7406\u7684\uFF0C\u5BF9\u4E8E\u91CD\u542F\u7B56\u7565\u662F\u9488\u5BF9\u4E8E\u5BB9\u5668\u7684\uFF0C\u76EE\u524D\u63D0\u4F9B\u4EE5\u4E0B\u51E0\u79CD</p><ul><li>Always: \u53EA\u8981\u5BB9\u5668\u505C\u6B62Terminated\uFF0C\u5C31\u4F1A\u542F\u52A8\uFF08\u9ED8\u8BA4\uFF09</li><li>OnFailure\uFF1A\u542F\u52A8\u7684\u65F6\u5019\u51FA\u73B0\u9519\u8BEF</li><li>Never\uFF1A\u6C38\u4E0D\u91CD\u542F</li></ul><h2 id="pod\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#pod\u72B6\u6001" aria-hidden="true">#</a> Pod\u72B6\u6001</h2><p>Pod \u6709\u4E00\u4E2A PodStatus \u5BF9\u8C61\uFF0C\u5176\u4E2D\u5305\u542B\u4E00\u4E2A PodConditions \u6570\u7EC4\u3002Pod \u53EF\u80FD\u901A\u8FC7\u4E5F\u53EF\u80FD\u672A\u901A\u8FC7\u5176\u4E2D\u7684\u4E00\u4E9B\u72B6\u51B5\u6D4B\u8BD5\u3002</p><h2 id="\u5BB9\u5668\u63A2\u9488" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u63A2\u9488" aria-hidden="true">#</a> \u5BB9\u5668\u63A2\u9488</h2><h2 id="\u7EC8\u6B62" tabindex="-1"><a class="header-anchor" href="#\u7EC8\u6B62" aria-hidden="true">#</a> \u7EC8\u6B62</h2><p>\u4F18\u96C5\u7EC8\u6B62Pod\u662F\u5F88\u91CD\u8981\u7684\uFF0C\u53D1\u9001\u7684\u662F\u4E00\u4E2A\u7EC8\u6B62\u4FE1\u53F7\uFF0C\u7136\u540E\u5904\u7406\u3002\u800C\u4E0D\u662F\u5F3A\u5236kill\u3002\u8FD9\u4E2A\u7B56\u7565\u4E5F\u53EF\u4EE5\u914D\u7F6E\u5173\u95ED\u65F6\u95F4</p><h2 id="\u5783\u573E\u56DE\u6536" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u56DE\u6536" aria-hidden="true">#</a> \u5783\u573E\u56DE\u6536</h2><p>\u5BF9\u4E8E\u5DF2\u7ECF\u7EC8\u6B62\u7684Pod\uFF0C\u8FD9\u4E2AAPI\u5BF9\u8C61\u4F9D\u7136\u4F1A\u88AB\u4FDD\u7559\u5230API\u670D\u52A1\u4E2D\uFF0C\u76F4\u5230\u63A7\u5236\u5668\uFF0C\u6216\u8005\u624B\u52A8\u5220\u9664\u3002</p><p>\u4E5F\u53EF\u4EE5\u914D\u7F6E\u81EA\u52A8\u5220\u9664\u9608\u503C</p>',19);function P(f,m){const n=o("ExternalLinkIcon");return d(),r("div",null,[h,e("p",null,[c,e("a",p,[u,t(n)])]),_])}var b=a(s,[["render",P],["__file","01-pod.html.vue"]]);export{b as default};

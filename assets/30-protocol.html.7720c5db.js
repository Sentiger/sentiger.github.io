import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as a,c as l,a as n,b as c,e as i,d as e}from"./app.b09af48f.js";var t="/assets/containerd-running.0a7e374e.png";const o={},v=i('<h2 id="containerd" tabindex="-1"><a class="header-anchor" href="#containerd" aria-hidden="true">#</a> containerd</h2><ol><li>containerd\u662F\u4E00\u4E2A\u5B88\u62A4\u8FDB\u7A0B</li><li>\u53EF\u4EE5\u901A\u8FC7<code>OCI</code>\u63A5\u53E3\u6765\u8C03\u7528\u5BF9\u5E94\u7684\u5BB9\u5668\uFF081.6.8\u7248\u672C\u901A\u8FC7containerd-shim-v2\u63D2\u4EF6\u5B9E\u73B0\uFF09</li><li>\u53EF\u4EE5\u901A\u8FC7<code>CNI</code>\u63A5\u53E3\u534F\u8BAE\u6765\u8C03\u7528\u4EFB\u610FCNI\u63D2\u4EF6</li><li>\u5B9E\u73B0\u4E86k8s\u4E2D\u7684<code>CRI</code>\u63A5\u53E3</li></ol><p>\u6982\u62EC\uFF1Acontainerd\u662F\u4E00\u4E2A\u5B88\u62A4\u8FDB\u7A0B\uFF0C\u901A\u8FC7containerd-shim\u6765\u8FD0\u884C\u5BB9\u5668\uFF08\u5F00\u542F\u5B50\u8FDB\u7A0B\uFF09\u3002\u5C01\u88C5\u4E86\u539F\u751FAPI\u548CCRI\u5B9E\u73B0\uFF0C\u7BA1\u7406\u5DE5\u5177\u53EF\u4EE5\u4F7F\u7528\u539F\u751FAPI\u5C01\u88C5\u6216\u8005CRI\u63A5\u53E3\u5C01\u88C5</p><h3 id="\u5B89\u88C5\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u914D\u7F6E" aria-hidden="true">#</a> \u5B89\u88C5\u914D\u7F6E</h3><p><strong>\u5B89\u88C5</strong></p>',5),u=e("\u901A\u8FC7\u5B98\u65B9\u7684\u6587\u6863\u8FDB\u884C\u5B89\u88C5"),m={href:"https://github.com/containerd/containerd/blob/main/docs/getting-started.md",target:"_blank",rel:"noopener noreferrer"},b=e("containerd\u5B89\u88C5\u6587\u6863"),h=i(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u4E0B\u8F7D\u89E3\u538B\u7F29

2. \u4E0B\u8F7Dsystemd\u6587\u4EF6

chmod +x /usr/lib/systemd/system/containerd.service

3. \u6839\u636Econtainerd.service\u4E2D\u7684bin\uFF0C\u5C06containerd\u62F7\u8D1D\u5230\u7CFB\u7EDF\u76EE\u5F55\u4E2D

ExecStart=/usr/local/bin/containerd

4. \u542F\u52A8containerd\uFF0C\u6B64\u65F6\u4EC5\u4EC5\u662F\u542F\u52A8\u4E86containerd\u5B88\u62A4\u8FDB\u7A0B

systemctl daemon-reload
systemctl enable --now containerd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt="containerd-running" loading="lazy"></p><h3 id="\u5B9E\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C" aria-hidden="true">#</a> \u5B9E\u9A8C</h3><h4 id="_1-\u8FD0\u884C\u5BB9\u5668\u6D41\u7A0B\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_1-\u8FD0\u884C\u5BB9\u5668\u6D41\u7A0B\u6B65\u9AA4" aria-hidden="true">#</a> 1. \u8FD0\u884C\u5BB9\u5668\u6D41\u7A0B\u6B65\u9AA4</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
$ ctr images pull docker.io/library/redis:alpine

$ ctr run docker.io/library/redis:alpine redis

\u62A5\u9519\uFF1A\u8FD9\u91CC\u660E\u786E\u4E86\uFF0C\u6CA1\u6709\u627E\u5230containerd-shim-runc-v2, \u6240\u4EE5\u8BC1\u660Econtainerd\u8C03\u7528runc\u4E0D\u662F\u901A\u8FC7\u81EA\u5DF1\uFF0C\u800C\u662F\u901A\u8FC7\u8C03\u7528\u4E00\u5C42containerd-shim\u3002\uFF08v1.6.8\u7248\u672C\u662F\u8FD9\u6837\uFF09

ctr: failed to start shim: failed to resolve runtime path: runtime &quot;io.containerd.runc.v2&quot; binary not installed &quot;containerd-shim-runc-v2&quot;: file does not exist: unknown

containerd\u4E2D\u4F46\u662F\u6709\u4E00\u4E2A\u8FD9\u4E2A\u8BB0\u5F55\uFF0Ccontainerd\u662F\u7BA1\u7406\u8FD9\u4E9B\u3002\u5177\u4F53\u8FD0\u884C\u65F6runc\uFF0C\u662F\u5F00\u8F9F\u4E00\u4E2A\u5B50\u8FDB\u7A0B\uFF0C\u7136\u540E\u901A\u8FC7containerd-shim\u8C03\u7528

[root@web2 bin]# ctr container ls
CONTAINER    IMAGE                             RUNTIME                  
redis        docker.io/library/redis:alpine    io.containerd.runc.v2

runc\u5728containerd\u4E2D\u662F\u4EE5\u4E00\u4E2A\u4E2A\u4EFB\u52A1\u6765\u8FD0\u884C\u7684\u3002\u67E5\u770B\u4EFB\u52A1

[root@web2 bin]# ctr task ls
TASK    PID    STATUS

\u89E3\u51B3\uFF1A\u62F7\u8D1Dcontainerd-shim-v2\u5230\u7CFB\u7EDFbin\u76EE\u5F55\u4E2D

cp containerd-shim-runc-v2 /usr/local/bin/

\u542F\u52A8\uFF1A\u8FD8\u662F\u62A5\u9519\uFF0C\u8FD9\u4E2A\u65F6\u5019\u662FOCI\u4E2D\u7684\u5BB9\u5668\u8FD0\u884C\u65F6\u6CA1\u88C5\u597D\u3002containerd\u9ED8\u8BA4\u662F\u4F7F\u7528runc
[root@web2 bin]# ctr task start redis
ctr: failed to create shim task: OCI runtime create failed: unable to retrieve OCI runtime error (open /run/containerd/io.containerd.runtime.v2.task/default/redis/log.json: no such file or directory): exec: &quot;runc&quot;: executable file not found in $PATH: unknown

\u5B89\u88C5runc

wget https://github.com/opencontainers/runc/releases/download/v1.1.3/runc.amd64
mv runc.amd64 runc
chmod +x runc
cp runc /usr/local/bin/

\u91CD\u65B0\u8FD0\u884Credis \u5BB9\u5668\u4EFB\u52A1\uFF08\u8FD0\u884C\u6210\u529F\uFF09
[root@web2 bin]# ctr task start redis
1:C 18 Aug 2022 07:59:49.852 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
1:C 18 Aug 2022 07:59:49.852 # Redis version=7.0.4, bits=64, commit=00000000, modified=0, pid=1, just started
1:C 18 Aug 2022 07:59:49.852 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf

[root@web2 ~]# ctr task ls
TASK     PID      STATUS    
redis    13523    RUNNING

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3\uFF1A\u901A\u8FC7\u4E0A\u9762\u5B9E\u9A8C\uFF0C\u4E86\u89E3\u4E86containerd\u7684\u57FA\u672C\u67B6\u6784</p><ol><li>containerd\u662F\u4E00\u4E2A\u5B88\u62A4\u8FDB\u7A0B</li><li>\u8FD0\u884C\u5BB9\u5668\u662F\u542F\u52A8\u4E00\u4E2A\u5B50\u8FDB\u7A0B\u8C03\u7528containerd-shim-runc\u6765\u542F\u52A8runc</li><li>\u6240\u4EE5containerd\u662F\u5728runc\u4E0A\u8FDB\u884C\u7684\u4E00\u4E2A\u5C01\u88C5\uFF0C\u91CC\u9762\u8FD8\u5305\u62EC\u5F88\u591A\u5185\u5BB9\uFF0C\u901A\u8FC7\u63A5\u4E0B\u6765\u7684\u5B9E\u9A8C\u6765\u9A8C\u8BC1</li></ol><h4 id="_2-\u63A5\u5165cni\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u63A5\u5165cni\u63D2\u4EF6" aria-hidden="true">#</a> 2. \u63A5\u5165CNI\u63D2\u4EF6</h4><p>\u9ED8\u8BA4\u5982\u679C\u4E0D\u63A5\u5165CNI\u63D2\u4EF6\uFF0C\u521B\u5EFA\u7684\u5BB9\u5668\u90FD\u662F\u6CA1\u6709\u7F51\u7EDC\u7684\uFF0Ccontainerd\u53EF\u4EE5\u6307\u5B9ACNI\u63D2\u4EF6\u3002</p><ol><li>\u5B89\u88C5CNI\u63D2\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1 \u4E0B\u8F7D\u63D2\u4EF6
wget https://github.com/containernetworking/plugins/releases/download/v1.1.1/cni-plugins-linux-amd64-v1.1.1.tgz

\u5B89\u88C5

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function p(g,f){const d=s("ExternalLinkIcon");return a(),l("div",null,[v,n("p",null,[u,n("a",m,[b,c(d)])]),h])}var I=r(o,[["render",p],["__file","30-protocol.html.vue"]]);export{I as default};

import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as r,c as o,a as n,b as e,w as d,e as t,d as s}from"./app.faad50b4.js";var p="/assets/k8s-docker.88b03532.png",u="/assets/k8s-containerd.397a6751.png";const v={},m=t('<p>k8s1.24\u6709\u5F88\u591A\u91CD\u5927\u7684\u66F4\u65B0\uFF0C\u4F8B\u5982\u76F4\u63A5\u4E22\u5F03\u539F\u6709\u7684docker\u652F\u6301\uFF0C\u5B8C\u5168\u901A\u8FC7CRI\u63A5\u53E3\u8C03\u7528\u5BB9\u5668\u3002\u5728\u8FD9\u91CC\u6211\u4EEC\u5207\u6362\u6210containerd\u670D\u52A1\u4F5C\u4E3Ak8s\u7684\u5BB9\u5668\u8FD0\u884C\u65F6\u7BA1\u7406\u8F6F\u4EF6\u3002</p><p>containerd\u5B9E\u73B0\u4E86CRI\u63A5\u53E3\u3002</p><p><strong>1.18</strong></p><p><img src="'+p+'" alt="k8s-docker-shim" loading="lazy"></p><p><strong>1.24</strong></p><p><img src="'+u+`" alt="k8s-containerd" loading="lazy"></p><h2 id="\u524D\u7F6E\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u5DE5\u4F5C" aria-hidden="true">#</a> \u524D\u7F6E\u5DE5\u4F5C</h2><p>\u5BF9\u7CFB\u7EDF\u7684\u4E00\u4E9B\u57FA\u672C\u8BBE\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>hostnamectl set-hostname web1

<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
172.31.0.3 web1
172.31.0.2 web2
EOF</span>

systemctl disable firewalld
systemctl stop firewalld

setenforce <span class="token number">0</span>
<span class="token function">vi</span> /etc/sysconfig/selinux
<span class="token comment"># ... \u4FEE\u6539</span>
<span class="token comment"># SELINUX=disabled</span>

swapoff -a 
<span class="token function">vi</span> /etc/fstab
<span class="token comment">#LABEL=YUNIFYSWAP swap                    swap    defaults        0 0</span>

<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/ip_forward
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/sysctl.d/k8s.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</span>
sysctl --system  

modprobe br_netfilter
sysctl -w net.bridge.bridge-nf-call-iptables<span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="containerd\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#containerd\u5B89\u88C5" aria-hidden="true">#</a> containerd\u5B89\u88C5</h2>`,10),b=s("containerd\u7EC6\u8282\u67B6\u6784\u53EF\u53C2\u89C1"),k=s("containerd\u7EC6\u8282"),h=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u5E76\u89E3\u538B</span>
<span class="token function">wget</span> https://github.com/containerd/containerd/releases/download/v1.6.8/cri-containerd-cni-1.6.8-linux-amd64.tar.gz
<span class="token function">tar</span> -zxvf cri-containerd-cni-1.6.8-linux-amd64.tar.gz

<span class="token comment"># \u5C06\u76F8\u5173\u7684\u6267\u884C\u6587\u4EF6\u548C\u914D\u7F6E\u6587\u4EF6\u62F7\u8D1D\u5230\u5BF9\u5E94\u7684\u9ED8\u8BA4\u76EE\u5F55\u4E0B</span>
<span class="token function">cp</span> -R opt/* /opt/
<span class="token function">cp</span> -R etc/* /etc/
<span class="token function">cp</span> -R usr/local/bin/* /usr/local/bin/
<span class="token function">cp</span> -R usr/local/sbin/* /usr/local/sbin/
<span class="token function">cp</span> etc/systemd/system/containerd.service /usr/lib/systemd/system/

<span class="token comment"># \u6CE8\u610F\uFF1A\u8FD9\u91CC\u4E0B\u8F7D\u7684runc\u5728\u542F\u52A8\u7684\u65F6\u5019\u4F1A\u62A5\u4E0B\u9762\u9519\u8BEF\uFF0C\u5C11\u4E86\u4E9B\u76F8\u5173\u7684\u5B89\u88C5\uFF0C\u8FD9\u91CC\u6211\u4EEC\u624B\u52A8\u4E0B\u8F7Drunc</span>
<span class="token comment"># runc: symbol lookup error: runc: undefined symbol: seccomp_notify_respond</span>
<span class="token function">wget</span> https://github.com/opencontainers/runc/releases/download/v1.1.3/runc.amd64
<span class="token function">mv</span> runc.amd64 runc
<span class="token function">chmod</span> +x runc
<span class="token function">cp</span> runc /usr/local/sbin/

<span class="token comment"># \u8BBE\u7F6Econtainerd\u7684\u9ED8\u8BA4\u914D\u7F6E</span>
<span class="token function">mkdir</span> /etc/containerd
containerd config default <span class="token operator">&gt;</span> /etc/containerd/config.toml

<span class="token comment"># \u542F\u52A8containerd</span>
systemctl daemon-reload
systemctl <span class="token builtin class-name">enable</span> --now containerd

<span class="token comment"># \u5B89\u88C5nerdctrl\uFF0C\u8FD9\u4E2A\u662F\u548Cdocker\u64CD\u4F5C\u7C7B\u4F3C\u7684\u5BA2\u6237\u7AEF\u5DE5\u5177</span>
<span class="token function">wget</span> https://github.com/containerd/nerdctl/releases/download/v0.22.2/nerdctl-0.22.2-linux-amd64.tar.gz
<span class="token function">tar</span> -zxvf nerdctl-0.22.2-linux-amd64.tar.gz 
<span class="token function">cp</span> nerdctl /usr/local/bin/

<span class="token comment"># \u6D4B\u8BD5</span>
<span class="token comment"># --net \u8FD9\u91CC\u662F\u6307\u5B9A\u7F51\u7EDC\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u7684\u8BDDnerdctl\u4F1A\u5E2E\u521B\u5EFA\u4E00\u4E2A</span>
nerdctl run --name ngx --net containerd-net -p <span class="token number">8080</span>:80  -d nginx
<span class="token function">curl</span> <span class="token number">127.0</span>.0.1:8080
<span class="token function">ls</span> /etc/cni/net.d/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F</strong> \u53D1\u73B0\u76F4\u63A5\u4E0B\u8F7D\u8FD9\u4E2A\u5305\u7684\u65F6\u5019\uFF0CCNI\u652F\u6301\u7684\u7248\u672C\u6BD4\u8F83\u8001\uFF0C\u800C\u4E14nerctl\u9ED8\u8BA4\u521B\u5EFA\u7684\u7248\u672C\u662F\u6BD4\u8F83\u65B0\u7684\u3002\u5982\u679C\u521B\u5EFApod\u7684\u65F6\u5019\u53D1\u73B0CNI\u7248\u672C\u4E0D\u5BF9\uFF0C\u8BB0\u5F97\u5BF9\u5E94\u5347\u7EA7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770BCNI\u63D2\u4EF6\u652F\u6301\u7684\u7248\u672C</span>
<span class="token punctuation">[</span>root@web1 ~<span class="token punctuation">]</span><span class="token comment"># CNI_COMMAND=VERSION  /opt/cni/bin/bridge </span>
<span class="token punctuation">{</span><span class="token string">&quot;cniVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;0.4.0&quot;</span>,<span class="token string">&quot;supportedVersions&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;0.1.0&quot;</span>,<span class="token string">&quot;0.2.0&quot;</span>,<span class="token string">&quot;0.3.0&quot;</span>,<span class="token string">&quot;0.3.1&quot;</span>,<span class="token string">&quot;0.4.0&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubeadm\u5B89\u88C5k8s" tabindex="-1"><a class="header-anchor" href="#kubeadm\u5B89\u88C5k8s" aria-hidden="true">#</a> kubeadm\u5B89\u88C5k8s</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo</span>
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>

yum <span class="token function">install</span> -y --enablerepo<span class="token operator">=</span><span class="token string">&quot;kubernetes&quot;</span> --nogpgcheck kubelet-1.24.4-0.x86_64 kubectl-1.24.4-0.x86_64 kubeadm-1.24.4-0.x86_64

kubeadm version
kubelet --version
kubectl version

kubeadm init --apiserver-advertise-address<span class="token operator">=</span><span class="token number">172.31</span>.0.3 <span class="token punctuation">\\</span>
--cri-socket unix:///run/containerd/containerd.sock <span class="token punctuation">\\</span>
--image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
--kubernetes-version v1.24.0 <span class="token punctuation">\\</span>
--service-cidr<span class="token operator">=</span><span class="token number">10.96</span>.0.0/16  <span class="token punctuation">\\</span>
--pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16

<span class="token comment"># \u5B89\u88C5\u81EA\u52A8\u63D0\u793A</span>
yum <span class="token function">install</span> bash-completion -y
<span class="token builtin class-name">source</span> /usr/share/bash-completion/bash_completion
<span class="token builtin class-name">source</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span>kubectl completion <span class="token function">bash</span><span class="token punctuation">)</span>

<span class="token comment"># \u5B89\u88C5flanneld</span>
<span class="token function">wget</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
<span class="token function">wget</span> https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml     
kubectl apply -f kube-flannel.yml
kubectl get pods -A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u76F8\u5173\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u76EE\u5F55" aria-hidden="true">#</a> \u76F8\u5173\u76EE\u5F55</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. kubelet\u542F\u52A8\u7684\u9759\u6001podmul 
/etc/kubernetes/manifests/

2. CNI\u914D\u7F6E\u76EE\u5F55
/etc/cni/net.d/

3. CNI \u63D2\u4EF6\u76EE\u5F55
/opt/cni/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u76F8\u5173\u540D\u8BCD" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u540D\u8BCD" aria-hidden="true">#</a> \u76F8\u5173\u540D\u8BCD</h2><p>\u6709\u4E00\u53E5\u8BDD\u8BF4\u7684\u597D\uFF1A\u4E00\u6D41\u7684\u4F01\u4E1A\u5236\u9020\u6807\u51C6\uFF0C\u4E8C\u6D41\u7684\u4F01\u4E1A\u505A\u54C1\u724C\uFF0C\u4E09\u6D41\u7684\u4F01\u4E1A\u505A\u4EA7\u54C1\u3002\u5176\u5B9E\u8FD9\u4E2A\u53EF\u7528\u4E8E\u5230k8s\u76F8\u5173\u7684\u4EA7\u4E1A\u94FE\u4E2D</p><h3 id="oci" tabindex="-1"><a class="header-anchor" href="#oci" aria-hidden="true">#</a> OCI</h3>`,10),g={href:"https://opencontainers.org",target:"_blank",rel:"noopener noreferrer"},f=s("oci"),_=s("\u662F\u6307\u5B9A\u89C4\u8303\u7684\u4E00\u4E2A\u7EC4\u7EC7\uFF0C\u662FDocker\u548C\u5176\u4ED6\u7684\u7EC4\u7EC7\u4E00\u8D77\u53C2\u4E0E\u7684\u3002\u4E3B\u8981\u6307\u5B9A\u4E86Linux\u4E0B\u5BB9\u5668\u7684\u8FD0\u884C\u65F6\u7684\u89C4\u8303\u3002\u8FD9\u4E2A\u7C7B\u4F3C\u4E00\u4E2A\u534F\u8BAE\uFF0C\u7136\u540E\u6709\u5177\u4F53\u7684\u4EA7\u54C1\u6765\u5B9E\u73B0\u3002"),y=n("h3",{id:"runc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#runc","aria-hidden":"true"},"#"),s(" runC")],-1),x={href:"https://github.com/opencontainers/runc",target:"_blank",rel:"noopener noreferrer"},w=s("runc"),C=s('\u662FOCI\u7684\u4E00\u4E2A\u5177\u4F53\u5B9E\u73B0\u3002\u8FD9\u5BB6\u4F19\u4E5F\u662FDocker\u6350\u51FA\u6765\u7ED9\u5230OCI\u7EC4\u7EC7\u7684\uFF0C\u4F1F\u5927\uFF0C\u6240\u4EE5\u6700\u540Ek8s\u5C31"\u629B\u5F03\u4E86Docker"'),I=n("h3",{id:"cri",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cri","aria-hidden":"true"},"#"),s(" CRI")],-1),q={href:"https://github.com/kubernetes/cri-api/blob/c75ef5b/pkg/apis/runtime/v1/api.proto",target:"_blank",rel:"noopener noreferrer"},E=s("cri"),N=s("\u662Fk8s\u81EA\u5DF1\u5B9A\u4E49\u7684\u4E00\u5957\u89C4\u8303\uFF0C\u7528\u6765\u63A5\u5165\u5BB9\u5668\u7684\uFF0C\u7C7B\u4F3C\u7684\u8FD8\u6709\u7F51\u7EDC\u89C4\u8303CNI,\u5BB9\u5668\u5B58\u50A8\u89C4\u8303CSI\u3002\u6240\u4EE5\u53EA\u8981\u5B9E\u73B0CRI\u63A5\u53E3\u7684\u4EA7\u54C1\u90FD\u80FD\u63A5\u5165\u5230k8s\u4E2D\u4F5C\u4E3A\u5E95\u5C42\u5BB9\u5668"),R=n("h3",{id:"containerd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#containerd","aria-hidden":"true"},"#"),s(" containerd")],-1),O={href:"https://github.com/containerd/containerd",target:"_blank",rel:"noopener noreferrer"},z=s("containerd"),D=s(" \u662F\u5B9E\u73B0\u4E86CRI\uFF0C\u6240\u4EE5k8s1.24\u53EF\u4EE5\u7528containerd\u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6\u8F6F\u4EF6\u3002\u8FD9\u5BB6\u4F19\u4E5F\u662FDocker\u7684\u4EA7\u54C1\uFF0C\u4E5F\u662F\u6350\u732E\u7ED9CNCF");function F(L,V){const c=i("RouterLink"),a=i("ExternalLinkIcon");return r(),o("div",null,[m,n("p",null,[b,e(c,{to:"/k8s/%E9%85%8D%E5%A5%97%E6%89%A9%E5%B1%95/30-protocol.html"},{default:d(()=>[k]),_:1})]),h,n("p",null,[n("a",g,[f,e(a)]),_]),y,n("p",null,[n("a",x,[w,e(a)]),C]),I,n("p",null,[n("a",q,[E,e(a)]),N]),R,n("p",null,[n("a",O,[z,e(a)]),D])])}var S=l(v,[["render",F],["__file","12-k8s-1-24-\u5B89\u88C5-kubeadm.html.vue"]]);export{S as default};

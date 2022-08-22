import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o as t,c as r,a as n,b as a,e as i,d as s}from"./app.96bd0fa8.js";var d="/assets/rancher.7d84dd2d.png";const o={},p=i(`<p>\u4F7F\u7528kubeadm\u5B89\u88C5k8s</p><h2 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h2><ul><li>\u9752\u4E91\u670D\u52A1\u5668centos7.6\u4E24\u53F0</li><li>web1\uFF1A172.31.0.3</li><li>web2\uFF1A172.31.0.2</li></ul><h2 id="\u73AF\u5883\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u521D\u59CB\u5316" aria-hidden="true">#</a> \u73AF\u5883\u521D\u59CB\u5316</h2><p><strong>\u8BBE\u7F6E\u4E3B\u673A\u540D</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u4E3B\u673A\u540D</span>
$ hostnamectl set-hostname web1
<span class="token comment"># \u4E3B\u673A2</span>
$ hostnamectl set-hostname web2

<span class="token comment"># \u8BBE\u7F6Eip</span>
$ <span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
172.31.0.3 web1
172.31.0.2 web2
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5173\u95EDfirewalld</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ systemctl disable firewalld
$ systemctl stop firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5173\u95EDselinux</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E34\u65F6\u5173\u95ED</span>
$ setenforce <span class="token number">0</span>
<span class="token comment"># \u6C38\u4E45\u5173\u95ED</span>
$ <span class="token function">vi</span> /etc/sysconfig/selinux
<span class="token punctuation">..</span>.
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
<span class="token comment"># \u67E5\u770B</span>
$ sestatus -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5173\u95EDswap</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5F00\u542F\u72B6\u6001</span>
$ <span class="token function">free</span> -m
<span class="token comment"># \u5982\u679CSwap\u8FD9\u4E00\u884C\u90FD\u4E3A0\uFF0C\u5219\u8868\u793A\u5173\u95ED</span>
total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:           <span class="token number">7821</span>         <span class="token number">184</span>        <span class="token number">6120</span>          <span class="token number">16</span>        <span class="token number">1516</span>        <span class="token number">7333</span>
Swap:          <span class="token number">8191</span>           <span class="token number">0</span>        <span class="token number">8191</span>

<span class="token comment"># \u4E34\u65F6\u5173\u95ED</span>
$ swapoff -a 
<span class="token comment"># \u6C38\u4E45\u5173\u95ED(\u6CE8\u91CA\u4E2D\u6700\u540E\u4E00\u884C)</span>
$ <span class="token function">vi</span> /etc/fstab
<span class="token comment">#LABEL=YUNIFYSWAP swap                    swap    defaults        0 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5F00\u542Fipv4\u8F6C\u53D1</strong> \u5173\u4E8E\u4E3A\u5565\u8981\u5F00\u542F\u8F6C\u53D1\u53EF\u4EE5\u53C2\u8003\u524D\u9762\u6587\u7AE0</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/net/ipv4/ip_forward
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u5C06\u6865\u63A5\u7684IPv4\u6D41\u91CF\u4F20\u9012\u5230iptables\u7684\u94FE</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/sysctl.d/k8s.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</span>
<span class="token comment"># \u751F\u6548</span>
$ sysctl --system  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a> \u5B89\u88C5docker</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u5B89\u88C5docker \uFF08\u53EF\u4EE5\u6307\u5B9A\u7248\u672C\uFF09</span>
$ <span class="token function">curl</span> -fsSL https://get.docker.com <span class="token operator">|</span> <span class="token function">bash</span> -s <span class="token function">docker</span> --mirror Aliyun

<span class="token comment"># \u914D\u7F6E\u955C\u50CF\u52A0\u901F\u5668\uFF0C\u5E76\u914D\u7F6Ecgroupdriver</span>
$ <span class="token function">mkdir</span> -p /etc/docker
$ <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
  &quot;registry-mirrors&quot;: [&quot;https://rwgxai1f.mirror.aliyuncs.com&quot;],
  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;]
}
EOF</span>

$ systemctl daemon-reload
$ systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5kubeadm" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5kubeadm" aria-hidden="true">#</a> \u5B89\u88C5kubeadm</h2>`,19),u=s("\u5B98\u65B9\u6587\u6863"),m={href:"https://kubernetes.io/zh-cn/docs/reference/setup-tools/kubeadm/",target:"_blank",rel:"noopener noreferrer"},v=s("kubeadm"),b=n("p",null,[n("strong",null,"\u4F7F\u7528\u963F\u91CC\u4E91\u955C\u50CF")],-1),k=s("\u955C\u50CF\u5730\u5740\u914D\u7F6E "),h={href:"https://developer.aliyun.com/mirror/kubernetes?spm=a2c6h.13651102.0.0.5c211b119mQxkE",target:"_blank",rel:"noopener noreferrer"},g=s("\u963F\u91CC\u4E91\u955C\u50CF"),f=i(`<p><strong>yum \u76F8\u5173\u914D\u7F6E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6307\u5B9A\u4ED3\u5E93\uFF08\u6700\u65B0\u53C2\u89C1\u963F\u91CC\u4E91\u6587\u6863\uFF09</span>
$ <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo</span>
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>

<span class="token comment"># \u67E5\u770Byum\u955C\u50CF\u6E90</span>
$ yum repolist 
<span class="token comment"># --showduplicates \u5217\u51FA\u6240\u6709\u7248\u672C --nogpgcheck:gpg\u68C0\u67E5</span>
$ yum list --showduplicates kubeadm
<span class="token comment"># \u8FD9\u4E2A\u662F\u5217\u51FAkubernets\u4ED3\u5E93\u4E2D\u6240\u6709\u53EF\u7528\u7684\u5305</span>
$ yum --disablerepo<span class="token operator">=</span><span class="token string">&quot;*&quot;</span> --enablerepo<span class="token operator">=</span><span class="token string">&quot;kubernetes&quot;</span> list available --showduplicates
<span class="token comment"># \u5B89\u88C5\u6307\u5B9A\u7248\u672C [\u8F6F\u4EF6]-[\u7248\u672C].[\u5E73\u53F0]</span>
$ yum <span class="token function">install</span> -y --enablerepo<span class="token operator">=</span><span class="token string">&quot;kubernetes&quot;</span> --nogpgcheck kubelet-1.18.0-0.x86_64 kubectl-1.18.0-0.x86_64 kubeadm-1.18.0-0.x86_64

<span class="token comment"># \u67E5\u770B\u5B89\u88C5\u7248\u672C</span>
$ kubeadm version
$ kubelet --version
$ kubectl version

<span class="token comment"># \u6216\u8005\u67E5\u770B\u7248\u672C  </span>
$ yum list installed kubectl kubeadm kubelet

<span class="token comment"># \u5378\u8F7D</span>
$ yum remove kubectl kubeadm kubectl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521D\u59CB\u5316\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u8282\u70B9" aria-hidden="true">#</a> \u521D\u59CB\u5316\u8282\u70B9</h2><p><strong>\u90E8\u7F72Kubernetes Master</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD9\u91CC\u4F1A\u68C0\u67E5\u76F8\u5173\u7684\u5185\u5BB9\u662F\u5426\u5DF2\u7ECF\u914D\u7F6E\u597D</span>
$ kubeadm init --apiserver-advertise-address<span class="token operator">=</span><span class="token number">172.31</span>.0.3 <span class="token punctuation">\\</span>
--image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
--kubernetes-version v1.18.0 <span class="token punctuation">\\</span>
--service-cidr<span class="token operator">=</span><span class="token number">10.96</span>.0.0/16  <span class="token punctuation">\\</span>
--pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16

<span class="token comment"># \u914D\u7F6Ekubectl(\u6839\u636E\u751F\u6210\u7684)</span>
<span class="token function">mkdir</span> -p <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> -i /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -u<span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -g<span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

<span class="token comment"># \u67E5\u770B\u8282\u70B9</span>
$ kubectl get nodes

<span class="token comment"># \u5220\u9664\u8282\u70B9</span>
$ kubectl delete web2

<span class="token comment"># \u91CD\u7F6E\u8282\u70B9</span>
$ kubeadm reset

<span class="token comment"># \u5176\u4ED6worker\u8282\u70B9\u5B89\u88C5(\u8FD9\u4E2A\u662F\u5B89\u88C5\u5B8Cmaster\u8282\u70B9\u4E4B\u540E\u751F\u6210\u7684)</span>
$ kubeadm <span class="token function">join</span> <span class="token number">172.31</span>.0.3:6443 --token l0imbn.kbkdwxt42c516pio <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:136c777e210af71a1e77f6e40f7a2d2b94e28dc3d99385bfb72849b0197a9ed6
    
<span class="token comment"># token\u6709\u6548\u671F24\u5C0F\u65F6\uFF0C\u91CD\u65B0\u751F\u6210join\u6570\u636E</span>
$ kubeadm token create --print-join-command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u90E8\u7F72cni\u63D2\u4EF6</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u7F51\u7EDC\u63D2\u4EF6\u914D\u7F6E</span>
$ <span class="token function">wget</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
<span class="token comment"># \u8FD0\u884C</span>
$ kubectl apply -f kube-flannel.yml
<span class="token comment"># \u67E5\u770B\u8FD0\u884C\u7ED3\u679C</span>
$ kubectl get pods -A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p><strong>\u67E5\u770B\u5B89\u88C5\u7ED3\u679C</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get pods -A

kube-system   coredns-7ff77c879f-nf2g7       <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14m
kube-system   coredns-7ff77c879f-zwzb5       <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14m
kube-system   etcd-web1                      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14m
kube-system   kube-apiserver-web1            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14m
kube-system   kube-controller-manager-web1   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14m
kube-system   kube-flannel-ds-cbzhk          <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2m44s
kube-system   kube-flannel-ds-dglgh          <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2m44s
kube-system   kube-proxy-cmxjf               <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5m2s
kube-system   kube-proxy-m9vfd               <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14m
kube-system   kube-scheduler-web1            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          14m

<span class="token comment"># \u521B\u5EFA\u4E00\u4E2Adeployment</span>
$ kubectl create deployment nginx --image<span class="token operator">=</span>nginx:latest

<span class="token comment"># \u67E5\u770B</span>
$ kubectl describe pod nginx-f89759699-gjkjd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5\u81EA\u52A8\u63D0\u793A\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u81EA\u52A8\u63D0\u793A\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u81EA\u52A8\u63D0\u793A\u63D2\u4EF6</h2><p>kubectl\u547D\u4EE4\u7ECF\u5E38\u5F97\u4F7F\u7528\uFF0C\u4F46\u662F\u6709\u4E9B\u547D\u4EE4\u8BB0\u4E0D\u4F4F\uFF0C\u5E0C\u671B\u5B9E\u73B0tab\u81EA\u52A8\u63D0\u793A\uFF0C\u8FD9\u4E2A\u5B98\u65B9\u6709\u63D0\u4F9B</p>`,12),y=s("\u6587\u6863\u5730\u5740 "),_={href:"https://kubernetes.io/zh-cn/docs/reference/kubectl/cheatsheet/",target:"_blank",rel:"noopener noreferrer"},$=s("kubectl\u81EA\u52A8\u63D0\u793A"),x=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> bash-completion -y
$ <span class="token builtin class-name">source</span> /usr/share/bash-completion/bash_completion
$ <span class="token builtin class-name">source</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span>kubectl completion <span class="token function">bash</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5rancher" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5rancher" aria-hidden="true">#</a> \u5B89\u88C5rancher</h2><p>v2.4.8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull rancher/rancher:v2.4.8
$ <span class="token function">docker</span> run -d --restart<span class="token operator">=</span>unless-stopped -p <span class="token number">8080</span>:80 -p8443:443 <span class="token punctuation">\\</span>
-v /root/rancher:/var/lib/rancher/ rancher/rancher:v2.4.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="rancher.png" loading="lazy"></p>',5);function w(E,q){const e=c("ExternalLinkIcon");return t(),r("div",null,[p,n("p",null,[u,n("a",m,[v,a(e)])]),b,n("p",null,[k,n("a",h,[g,a(e)])]),f,n("p",null,[y,n("a",_,[$,a(e)])]),x])}var F=l(o,[["render",w],["__file","11-k8s\u5B89\u88C5-kubeadm.html.vue"]]);export{F as default};

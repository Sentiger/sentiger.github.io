import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as d,c as k,a as n,b as e,w as i,e as a,d as s}from"./app.41d5290f.js";var v="/assets/process.40e1f318.png",m="/assets/init-jenkins.08490e5c.png",b="/assets/jenkins.adda67ec.png",g="/assets/blog-rep.150cd7ec.png",y="/assets/hook.e769662d.png",h="/assets/build.b2a21a2e.png",f="/assets/finish.10cd6c2c.png",_="/assets/git-webhook.266dce6b.png",x="/assets/show.dca51741.png";const w={},j=a('<p>\u5F53\u524D\u9879\u76EEBlog\u4F7F\u7528Jenkins\u81EA\u52A8\u90E8\u7F72\u5230k8s\u4E2D</p><h2 id="\u53D1\u5E03\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u6D41\u7A0B" aria-hidden="true">#</a> \u53D1\u5E03\u6D41\u7A0B</h2><p><img src="'+v+'" alt="\u6D41\u7A0B" loading="lazy"></p><h2 id="jenkins\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#jenkins\u5B89\u88C5" aria-hidden="true">#</a> Jenkins\u5B89\u88C5</h2>',4),q=s("\u4F7F\u7528k8s\u5B89\u88C5Jenkins\uFF0C\u5B98\u65B9\u94FE\u63A5"),P={href:"https://www.jenkins.io/zh/doc/book/installing/",target:"_blank",rel:"noopener noreferrer"},$=s("Jenkins\u5B98\u65B9"),C=a(`<p><strong>\u5B98\u65B9docker\u5B89\u88C5\u63D0\u793A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> run <span class="token punctuation">\\</span>
  -u root <span class="token punctuation">\\</span>
  --rm <span class="token punctuation">\\</span>  
  -d <span class="token punctuation">\\</span> 
  -p <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span> 
  -p <span class="token number">50000</span>:50000 <span class="token punctuation">\\</span> 
  -v jenkins-data:/var/jenkins_home <span class="token punctuation">\\</span> 
  -v /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span> 
  jenkinsci/blueocean 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5728k8s\u4E2D\u5B89\u88C5</strong></p><ul><li>\u5B89\u88C5\u5728web1\u4E3B\u673A\u4E0A</li><li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684<code>namespace</code> cicd</li><li>\u8FD0\u884CJenkins</li><li>\u73B0\u5728\u4E3B\u673A\u4E2D\u4E0B\u8F7D\u955C\u50CF\uFF0C\u8981\u4E0D\u7136k8s\u8FD0\u884C\u4EE5\u4E3A\u51FA\u9519\u4E86\uFF0C\u4E00\u76F4\u5361\u7740\u4E0D\u52A8</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u955C\u50CF:latest</span>
$ <span class="token function">docker</span> pull  jenkinsci/blueocean


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>k8s\u8FD0\u884CJenkins</strong></p><p><strong>\u5220\u9664\u8282\u70B9web1\u6C61\u67D3</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl taint <span class="token function">node</span> web1 node-role.kubernetes.io/master-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u90E8\u7F72\u811A\u672Ccicd.yaml</strong></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#\u521B\u5EFA\u547D\u540D\u7A7A\u95F4cicd</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Namespace
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> cicd

<span class="token punctuation">---</span>

<span class="token comment"># deploy</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins<span class="token punctuation">-</span>deployment
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> cicd
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> jenkins
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>

  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> jenkins

  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> jenkins
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token comment"># \u5B9A\u4E49\u8282\u70B9\u9009\u62E9\u5668</span>
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">kubernetes.io/hostname</span><span class="token punctuation">:</span> <span class="token string">&quot;web1&quot;</span>

      <span class="token comment"># \u5B9A\u4E49\u5BB9\u5668</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins
          <span class="token key atrule">image</span><span class="token punctuation">:</span> jenkinsci/blueocean<span class="token punctuation">:</span>latest
          <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Never <span class="token comment"># IfNotPresent,Never,Always</span>
          <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
            <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token comment"># \u8FD0\u884C\u5BB9\u5668\u8EAB\u4EFD\u4EE5\u5F53\u524D\u7528\u6237\uFF0C\u56E0\u4E3A\u5728Jenkins\u4E2D\u8981\u4F7F\u7528docker\u64CD\u4F5C</span>
          <span class="token key atrule">env</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;KUBECONFIG&quot;</span>  <span class="token comment"># \u914D\u7F6Ekubectl\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E</span>
              <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;/kubectl-config&quot;</span>
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">50000</span>
          <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins<span class="token punctuation">-</span>data
              <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/jenkins_home
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> docker<span class="token punctuation">-</span>socket
              <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/run/docker.sock
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kubectl
              <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/bin/kubectl
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kubectl<span class="token punctuation">-</span>config
              <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /kubectl<span class="token punctuation">-</span>config

      <span class="token comment"># \u5B9A\u4E49\u6570\u636E\u5377</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins<span class="token punctuation">-</span>data
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/jenkins <span class="token comment"># \u6CE8\u610F\u8981\u7ED9\u6743\u9650</span>
            <span class="token key atrule">type</span><span class="token punctuation">:</span> Directory
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> docker<span class="token punctuation">-</span>socket
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /var/run/docker.sock
            <span class="token key atrule">type</span><span class="token punctuation">:</span> File
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kubectl
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /usr/bin/kubectl
            <span class="token key atrule">type</span><span class="token punctuation">:</span> File
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kubectl<span class="token punctuation">-</span>config
          <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/.kube/config
            <span class="token key atrule">type</span><span class="token punctuation">:</span> File
<span class="token punctuation">---</span>
<span class="token comment"># service</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> cicd
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort <span class="token comment"># \u8FD9\u91CC\u6682\u65F6\u4F7F\u7528\u8282\u70B9\u7AEF\u53E3\u6620\u5C04</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> jenkins
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
      <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30007</span> <span class="token comment"># \u8FD9\u4E2A\u662F\u6709\u8303\u56F4\u7684\uFF0C--service-node-port-range \u9ED8\u8BA4\u503C\uFF1A30000-32767</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u521D\u59CB\u5316Jenkins</strong></p>`,11),D=s("\u6D4F\u89C8\u5668\u8BBF\u95EE "),z={href:"http://139.198.191.115:30007",target:"_blank",rel:"noopener noreferrer"},N=s("http://139.198.191.115:30007"),J=a('<p><img src="'+m+`" alt="init-jenkins" loading="lazy"></p><p><strong>\u4FEE\u6539Jenkins\u955C\u50CF\u6E90</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> /root/jenkins/updates
$ <span class="token function">sed</span> -i <span class="token string">&#39;s/http:\\/\\/updates.jenkins-ci.org\\/download/https:\\/\\/mirrors.tuna.tsinghua.edu.cn\\/jenkins/g&#39;</span>  default.json
<span class="token comment"># \u91CD\u542F\u5E94\u7528\uFF08\u76F4\u63A5\u5220\u9664pod\uFF0Cdeployment\u4F1A\u81EA\u52A8\u542F\u52A8\u4E00\u4E2Apod\uFF09</span>
$ kubectl rollout restart deployment -n cicd jenkins-deployment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+b+`" alt="jenkins" style="zoom:50%;"><h2 id="\u7F16\u5199dockerfile" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199dockerfile" aria-hidden="true">#</a> \u7F16\u5199Dockerfile</h2><p>\u8FD9\u4E2A\u53EF\u4EE5\u76F4\u63A5\u653E\u5728\u9879\u76EE\u4E0B\uFF0Cclone\u4EE3\u7801\u4E4B\u540E\u81EA\u52A8\u5C31\u6784\u5EFA\u955C\u50CF\u4E86</p><div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre class="language-Dockerfile"><code>FROM node:16.15.1-alpine3.16 as builder
ADD . /blog
WORKDIR /blog
RUN npm install --registry=https://registry.npmmirror.com &amp;&amp; npm run docs:build


FROM nginx:1.22.0-alpine
COPY --from=builder /blog/blog/.vuepress/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF" aria-hidden="true">#</a> \u955C\u50CF</h2><p><strong>\u6784\u5EFA\u955C\u50CF</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7248\u672C\u6839\u636E\u81EA\u5DF1\u7684\u89C4\u5219\u6765\u81EA\u589E\u6216\u8005\u8986\u76D6</span>
$ <span class="token function">docker</span> build -t blog:v1  <span class="token builtin class-name">.</span>
<span class="token comment"># \u5220\u9664\u4E2D\u95F4\u7684\u65E0\u6548\u5C42\u6587\u4EF6</span>
$ <span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images -af <span class="token string">&quot;dangling=true&quot;</span> -q<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u63A8\u9001\u955C\u50CF</strong></p>`,11),O=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 1. \u9996\u5148\u5728\u5B98\u65B9\u4E2D\u521B\u5EFA\u955C\u50CF\u5E93"),s(`
`),n("span",{class:"token comment"},"# 2. \u767B\u5F55"),s(`
$ `),n("span",{class:"token function"},"docker"),s(` login --username sentiger --password xxx
`),n("span",{class:"token comment"},"# 3. \u6253\u6807\u7B7E"),s(`
$ `),n("span",{class:"token function"},"docker"),s(` tag blog:v1 sentiger/blog:v1
`),n("span",{class:"token comment"},"# 4. \u63A8\u9001\u5230\u5B98\u65B9\u4ED3\u5E93\u4E2D"),s(`
$ `),n("span",{class:"token function"},"docker"),s(` push sentiger/blog:v1
`),n("span",{class:"token comment"},"# 5. \u9000\u51FA"),s(`
$ `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"logout"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 1. \u5728\u963F\u91CC\u4E91\u4E2D\u521B\u5EFA\u4ED3\u5E93"),s(`
`),n("span",{class:"token comment"},"# 2. \u767B\u5F55"),s(`
$ `),n("span",{class:"token function"},"docker"),s(" login --username"),n("span",{class:"token operator"},"="),s("sentiger --password"),n("span",{class:"token operator"},"="),s(`xxx registry.cn-hangzhou.aliyuncs.com
`),n("span",{class:"token comment"},"# 3. \u6253\u6807\u7B7E"),s(`
$ `),n("span",{class:"token function"},"docker"),s(` tag blog:v1 registry.cn-hangzhou.aliyuncs.com/easyyun/blog:v1
`),n("span",{class:"token comment"},"# \u62C9\u53D6\u955C\u50CF"),s(`
$ `),n("span",{class:"token function"},"docker"),s(` pull registry.cn-hangzhou.aliyuncs.com/easyyun/blog:v1
`),n("span",{class:"token comment"},"# 4. \u63A8\u9001\u5230\u5B98\u65B9\u4ED3\u5E93\u4E2D"),s(`
$ `),n("span",{class:"token function"},"docker"),s(` push registry.cn-hangzhou.aliyuncs.com/easyyun/blog:v1
`),n("span",{class:"token comment"},"# 5. \u9000\u51FA"),s(`
$ `),n("span",{class:"token function"},"docker"),s(),n("span",{class:"token builtin class-name"},"logout"),s(` registry.cn-hangzhou.aliyuncs.com
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=a(`<h2 id="jenkins\u90E8\u7F72blog" tabindex="-1"><a class="header-anchor" href="#jenkins\u90E8\u7F72blog" aria-hidden="true">#</a> Jenkins\u90E8\u7F72blog</h2><p><strong>k8s\u4E2D\u914D\u7F6Edocker\u79D8\u94A5</strong></p><p>\u8FD9\u4E2A\u662F\u4E3A\u4E86\u4F7F\u7528\u79C1\u6709\u955C\u50CF\u5E93\uFF0C\u5982\u679C\u5171\u6709\u955C\u50CF\u5E93\u53EF\u4EE5\u5FFD\u7565</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl create -n cicd secret docker-registry hub-registry <span class="token punctuation">\\</span>
--docker-server<span class="token operator">=</span>index.docker.io <span class="token punctuation">\\</span>
--docker-username<span class="token operator">=</span>username <span class="token punctuation">\\</span>
--docker-password<span class="token operator">=</span>c0b61779-6db1-xxxxxx <span class="token punctuation">\\</span>
--docker-email<span class="token operator">=</span>username@qq.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u65B0\u5EFA\u4EFB\u52A1</strong></p><ol><li><p>\u6784\u5EFA\u4E00\u4E2A\u81EA\u7531\u98CE\u683C\u7684\u8F6F\u4EF6\u9879\u76EE</p></li><li><p>\u914D\u7F6E\u8FD0\u884C\u811A\u672C</p></li><li><p>\u914D\u7F6E\u4EE3\u7801\u4ED3\u5E93</p><img src="`+g+'" alt="blog-repo" style="zoom:50%;"></li><li><p>\u914D\u7F6Ehook\uFF08\u8FD9\u4E2A\u9700\u8981\u5B89\u88C5\u63D2\u4EF6:<code>Generic Webhook Trigger</code>\uFF09</p><img src="'+y+'" alt="hook" style="zoom:50%;"></li><li><p>\u6784\u5EFA</p><img src="'+h+`" alt="build" style="zoom:50%;"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;----------------\u5F00\u59CB\u6784\u5EFA\u955C\u50CF----------------&quot;</span>
<span class="token function">docker</span> build -t blog:v1  <span class="token builtin class-name">.</span>
<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images -af <span class="token string">&quot;dangling=true&quot;</span> -q<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;----------------\u6784\u5EFA\u955C\u50CF\u7ED3\u675F----------------&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;----------------\u5F00\u59CB\u4E0A\u4F20\u955C\u50CF\u5230\u5B98\u65B9\u955C\u50CF----------------&quot;</span>
<span class="token function">docker</span> login --username<span class="token operator">=</span>sentiger --password<span class="token operator">=</span>c0b61779-6db1-41fb-8492-92d8ead1678e
<span class="token function">docker</span> tag blog:v1 sentiger/blog:v1
<span class="token function">docker</span> push sentiger/blog:v1
<span class="token builtin class-name">echo</span> <span class="token string">&quot;----------------\u4E0A\u4F20\u955C\u50CF\u5230\u5B98\u65B9\u955C\u50CF\u7ED3\u675F----------------&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;----------------\u5F00\u59CB\u5220\u9664\u955C\u50CF----------------&quot;</span>
<span class="token function">docker</span> rmi blog:v1
<span class="token function">docker</span> rmi sentiger/blog:v1
<span class="token builtin class-name">echo</span> <span class="token string">&quot;----------------\u5F00\u59CB\u5220\u9664\u7ED3\u675F----------------&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;----------------\u5F00\u59CB\u6784\u5EFAblog----------------&quot;</span>
kubectl apply -f deployment.yaml
<span class="token builtin class-name">echo</span> <span class="token string">&quot;----------------\u6784\u5EFAblog\u6210\u529F----------------&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4EFB\u52A1\u7ED3\u675F\u5220\u9664workspace</p><img src="`+f+`" alt="finish" style="zoom:50%;"></li></ol><h2 id="\u76F8\u5173\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u811A\u672C" aria-hidden="true">#</a> \u76F8\u5173\u811A\u672C</h2><p><strong>deployment.yaml</strong></p><p>\u771F\u5B9E\u73AF\u5883\u8FD8\u9700\u8981\u6DFB\u52A0ingress\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u81EA\u884C\u53BB\u914D\u7F6E</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># deploy</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> blog<span class="token punctuation">-</span>deployment
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> blog
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>

  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> blog

  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> blog
        <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token comment"># \u5B9A\u4E49\u5BB9\u5668</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> blog
          <span class="token key atrule">image</span><span class="token punctuation">:</span> sentiger/blog<span class="token punctuation">:</span>v1
          <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> Always <span class="token comment"># IfNotPresent,Never,Always</span>
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
<span class="token punctuation">---</span>
<span class="token comment"># service</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> blog
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort <span class="token comment"># \u8FD9\u91CC\u6682\u65F6\u4F7F\u7528\u8282\u70B9\u7AEF\u53E3\u6620\u5C04</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> blog
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30008</span> <span class="token comment"># \u8FD9\u4E2A\u662F\u6709\u8303\u56F4\u7684\uFF0C--service-node-port-range \u9ED8\u8BA4\u503C\uFF1A30000-32767</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Dockerfile</strong></p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:16.15.1-alpine3.16 <span class="token keyword">as</span> builder</span>
<span class="token instruction"><span class="token keyword">ADD</span> . /blog</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /blog</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install --registry=https://registry.npmmirror.com &amp;&amp; npm run docs:build</span>


<span class="token instruction"><span class="token keyword">FROM</span> nginx:1.22.0-alpine</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /blog/blog/.vuepress/dist /usr/share/nginx/html</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./nginx.conf /etc/nginx/conf.d/default.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p><strong>GitHub\u4E2D\u914D\u7F6Ewebhook</strong></p><p><img src="`+_+'" alt="webhook" loading="lazy"></p><p><strong>\u63D0\u4EA4\u4EE3\u7801</strong></p><p>\u63D0\u4EA4\u4EE3\u7801\u770B\u6548\u679C</p><img src="'+x+'" alt="show" style="zoom:50%;"><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u4E0A\u9762\u5C55\u793A\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u53D1\u5E03\u6D41\u7A0B\u3002\u4ECE\u90E8\u7F72Jenkins\uFF0C\u548C\u914D\u7F6EJenkins\u81EA\u52A8\u53D1\u5E03\u811A\u672C\uFF0C\u955C\u50CF\u6784\u5EFA\u811A\u672C\uFF0Ck8s\u7B80\u5355\u90E8\u7F72\u811A\u672C\u7B49\u3002\u76EE\u524D\u8FD9\u4E2A\u4EC5\u4EC5\u662F\u4F5C\u4E3A\u4E00\u4E2A\u7B80\u5355\u7684\u6D41\u7A0B\u5C55\u793A</p>',20);function V(A,F){const t=l("ExternalLinkIcon"),p=l("CodeTabs");return d(),k("div",null,[j,n("p",null,[q,n("a",P,[$,e(t)])]),C,n("ul",null,[n("li",null,[D,n("a",z,[N,e(t)])])]),J,e(p,{data:[{title:"\u5B98\u65B9\u955C\u50CF"},{title:"\u63A8\u9001\u5230\u963F\u91CC\u4E91"}],"tab-id":"language"},{tab0:i(({title:c,value:o,isActive:u})=>[O]),tab1:i(({title:c,value:o,isActive:u})=>[R]),_:1}),I])}var M=r(w,[["render",V],["__file","01-\u7B80\u5355CICD.html.vue"]]);export{M as default};

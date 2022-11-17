import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as c,c as u,a as n,b as e,w as p,d as a,e as o}from"./app.4070a6ab.js";const r={},d=n("p",null,"\u8BBF\u95EEAPI\u8D44\u6E90\u90FD\u662F\u901A\u8FC7REST\u8BF7\u6C42\u7684\uFF0C\u6240\u4EE5\u5BF9\u8FD9\u91CC\u7684\u8BBF\u95EE\u8BA4\u8BC1\uFF0C\u6743\u9650\u63A7\u5236\u7B49\u64CD\u4F5C\u9700\u8981\u4E86\u89E3",-1),v=n("p",null,[n("strong",null,"\u53C2\u8003")],-1),k=a("\u8BA4\u8BC1"),m={href:"https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/certificate-signing-requests/#request-signing-process",target:"_blank",rel:"noopener noreferrer"},b=a("\u6587\u6863"),h=o(`<p><strong>\u901A\u8FC7\u670D\u52A1\u8D26\u53F7\u627E\u5230\u5BF9\u5E94\u7684binding</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl get rolebindings,clusterrolebindings <span class="token punctuation">\\</span>
  --all-namespaces  <span class="token punctuation">\\</span>
  -o custom-columns<span class="token operator">=</span><span class="token string">&#39;KIND:kind,NAMESPACE:metadata.namespace,NAME:metadata.name,SERVICE_ACCOUNTS:subjects[?(@.kind==&quot;ServiceAccount&quot;)].name&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;&lt;SERVICE_ACCOUNT_NAME&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528k8s\u7CFB\u7EDF\u7B7E\u7F72\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528k8s\u7CFB\u7EDF\u7B7E\u7F72\u8BC1\u4E66" aria-hidden="true">#</a> \u4F7F\u7528K8S\u7CFB\u7EDF\u7B7E\u7F72\u8BC1\u4E66</h2><p>\u5728\u4E0A\u9762\u8BA4\u8BC1\u7684\u6587\u7AE0\u4E2D\u6709\u5199\u5230\uFF0C\u5982\u4F55\u4F7F\u7528CA\u6839\u8BC1\u4E66\u8FDB\u884C\u7B7E\u53D1\uFF0C\u7136\u800Ck8s\u4E5F\u63D0\u4F9B\u4E86\u63A5\u53E3\u6765\u5B9E\u73B0\u8FD9\u4E00\u7CFB\u5217\u6D41\u7A0B\uFF0C\u5177\u4F53\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u751F\u6210\u4E00\u4E2Asentiger\u7684CSR\u6587\u4EF6\uFF0C\u5E76\u6307\u5B9A\u7528\u6237\u4E3Asentiger\u548C\u7EC4\u4E3Adev1\uFF0Cdev2
openssl genrsa -out sentiger.key 2048
openssl req -new -key sentiger.key -subj &#39;/CN=sentiger/O=dev1/O=dev2&#39; -out sentiger.csr

2. \u751F\u6210csr.yaml\u6587\u4EF6
cat sentiger.csr | base64 | tr -d &quot;\\n&quot;


apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: sentiger

spec:
  request: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURSBSRVFVRVNULS0tLS0KTUlJQ2RqQ0NBVjRDQVFBd01URVJNQThHQTFVRUF3d0ljMlZ1ZEdsblpYSXhEVEFMQmdOVkJBb01CR1JsZGpFeApEVEFMQmdOVkJBb01CR1JsZGpJd2dnRWlNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJEd0F3Z2dFS0FvSUJBUUM5CkxyQThXczFOeThCcTRVbXhQb05yRUx2cTRlQ2s5WmM4bTZqMFhPdzBDUWdCL3krSldwOGhnWTcxeGE2ejV4VWcKb25udjNyOUhiMUVBWUpnOHNvTEczdnRsaHZwNEtISjk5ZWZqSXJyTXN3K3hPb1l1UFRtakRBbnM4MkpPSUF3eQpEanZXRnZWMzVYQTBVNnZUK3kwNTJnNFZucEEyV2Zac28vNk1MSmF5K1NHakRsbTZtY2ZvYTE3b0VDWlFJZnljCklORlduSytLeXV2Q2xzZWZYT3hGTVdCU0xsdlNPaEZCRmZwZnBHY0cvOGNCcVowRzBjT3hON3o1eXBzS3lvZW8KWG5La2RyNnFib3RTckx2UG5udUV3TGo5Q3dzUGtiM3ZjNGQ2STYvZ3dJZnJjTjkvV1ZaRE5jRlNHaTNYUjV6TQoxSGo5ZGlBS2lPVzRubVprZWxuRkFnTUJBQUdnQURBTkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQVI1UUZocDFtCkRhVmJYUkF5aHZjWERTT1pWS29PUURYS0c3cXRKb3BiZ0NHSWNzc1l6S3gwMUg3RTZ1a2RNUXBjNTdXb0tyZ3QKdUpuZ1N1a09OeVR2SGd0bmVWYW1QMklSN0VGeFFyejRheHN1U0UxZHJLZUFxbUVRdHBPTkYraEt0R3RIektwWAp4K3p3MmdPMzIzdThIZDlxTmRhOHozei9wSEpRTWZ5OGk0MmhKaFRsVUpGbnRtZ25UQStDbDF0WnRGdzl2NmVzCnBkZDlGeWVialZzcmVXS3F5RWM0VjFWUjl5ZmxSWW1hQTV6SVNEdE1BZGNLQ2hER25mY3JXNVlhOTFlWjM1ZEIKZEpYWURYTXV0N0x1N3ViUk5haXlMYjNuREQxNDI1clJ4b0t6UlFidWMwTDBuK3hhekNDRWZkQVpyQ2xpNy84RwpwYVhJWGdhVllFWlQ2dz09Ci0tLS0tRU5EIENFUlRJRklDQVRFIFJFUVVFU1QtLS0tLQo=
  signerName: kubernetes.io/kube-apiserver-client
  expirationSeconds: 86400
  usages:
  - client auth

3. \u4E0A\u9762\u521B\u5EFA\u7684\u662F\u4E00\u4E2A\u8BC1\u4E66\u7533\u8BF7\uFF0C\u9700\u8981\u7CFB\u7EDF\u8FDB\u884C\u5BA1\u6838\uFF08\u81EA\u52A8/\u4EBA\u5DE5\uFF09
(\u7B49\u5F85\u5BA1\u6838\uFF09
NAME       AGE     SIGNERNAME                            REQUESTOR          REQUESTEDDURATION   CONDITION
sentiger   2m17s   kubernetes.io/kube-apiserver-client   kubernetes-admin   24h                 Pending

4. \u624B\u52A8\u5BA1\u6838
# \u901A\u8FC7
kubectl certificate approve sentiger
# \u62D2\u7EDD
kubectl certificate deny sentiger

5. \u5BFC\u51FA\u8BC1\u4E66
kubectl get csr sentiger -o jsonpath=&#39;{.status.certificate}&#39;| base64 -d  &gt; sentiger.crt

6. \u56E0\u4E3A\u77E5\u9053\u8FD9\u4E2A\u8BC1\u4E66\u6839\u8BC1\u4E66,\u6240\u4EE5\u8FDB\u884C\u9A8C\u8BC1\u4E0B
openssl verify -CAfile /etc/kubernetes/pki/ca.crt sentiger.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rbac" tabindex="-1"><a class="header-anchor" href="#rbac" aria-hidden="true">#</a> RBAC</h2><h3 id="role" tabindex="-1"><a class="header-anchor" href="#role" aria-hidden="true">#</a> Role</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dev1
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default

<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pods&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">]</span>

<span class="token comment"># apiGroups: &quot;&quot;,&quot;apps&quot;, &quot;autoscaling&quot;, &quot;batch&quot;, kubectl api-versions</span>
<span class="token comment"># resources: &quot;services&quot;, &quot;pods&quot;,&quot;deployments&quot;... kubectl api-resources \u4E14\u53EF\u4EE5\u914D\u7F6E\u5B50\u8D44\u6E90 pods/log</span>
<span class="token comment"># verbs: &quot;get&quot;, &quot;list&quot;, &quot;watch&quot;, &quot;create&quot;, &quot;update&quot;, &quot;patch&quot;, &quot;delete&quot;, &quot;exec&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rolebinding" tabindex="-1"><a class="header-anchor" href="#rolebinding" aria-hidden="true">#</a> RoleBinding</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> RoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> read<span class="token punctuation">-</span>pods
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default

<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> User
  <span class="token key atrule">name</span><span class="token punctuation">:</span> sentiger
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io

<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
  <span class="token key atrule">name</span><span class="token punctuation">:</span> dev1
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="serviceaccount" tabindex="-1"><a class="header-anchor" href="#serviceaccount" aria-hidden="true">#</a> ServiceAccount</h2><p>\u670D\u52A1\u8D26\u53F7\u4E3B\u8981\u662F\u9488\u5BF9\u4E8Epod\u91CC\u9762\u7684\u670D\u52A1\u8BF7\u6C42api</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default

<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin

<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> cluster<span class="token punctuation">-</span>admin
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> <span class="token string">&quot;rbac.authorization.k8s.io&quot;</span>

<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> admin
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default

<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>sa

<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token comment"># 1.24\u7248\u672C \u7ED1\u5B9A\u670D\u52A1\u8D26\u53F7\uFF0C\u6700\u7EC8\u4F1A\u7ED1\u5B9A\u5230\u5BB9\u5668\u4E2D /run/secrets/kubernetes.io/serviceaccount/\u8DEF\u5F84\u4E2D \u91CC\u9762\u6709token,\u548Cca\uFF0C1.24\u7248\u672C\u4E0D\u4F1A\u81EA\u52A8\u521B\u5EFAsecret</span>
  <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> admin <span class="token comment"># \u7ED1\u5B9A\u670D\u52A1\u8D26\u53F7 </span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>sa
      <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>1.18<span class="token punctuation">-</span>alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u901A\u8FC7\u670D\u52A1\u8D26\u53F7\u5C31\u53EF\u4EE5\u8BBF\u95EE\u5BF9\u5E94\u7684api\u63A5\u53E3</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> --cacert ca.crt -H <span class="token string">&#39;Authorization: Bearer \u670D\u52A1\u8D26\u53F7token&#39;</span> https://172.31.0.3:6443/api/v1/namespaces/default/pods?limit<span class="token operator">=</span><span class="token number">3</span>
<span class="token comment"># ca.crt\uFF0Ctoken\u90FD\u662F\u5728pod\u5BB9\u5668\u5185 /var/run/secrets/kubernetes.io/serviceaccount \u76EE\u5F55\u4E0B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubectl" tabindex="-1"><a class="header-anchor" href="#kubectl" aria-hidden="true">#</a> kubectl</h2><p>\u4F7F\u7528kubectl\u547D\u4EE4\u6765\u64CD\u4F5Ckube-api\uFF0C\u5176\u5B9E\u4E5F\u662F\u914D\u7F6E\u4E86\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5728$HOME/.kube/config\u6587\u4EF6\u4E2D</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Config
<span class="token key atrule">clusters</span><span class="token punctuation">:</span>  <span class="token comment"># \u53EF\u4EE5\u914D\u7F6E\u7BA1\u7406\u591A\u4E2A\u96C6\u7FA4</span>
<span class="token punctuation">-</span> <span class="token key atrule">cluster</span><span class="token punctuation">:</span>
    <span class="token key atrule">certificate-authority-data</span><span class="token punctuation">:</span> \u8FD9\u91CC\u662FCA\u6839\u8BC1\u4E66base64\u7F16\u7801\u540E\u7684\u5185\u5BB9
    <span class="token key atrule">server</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//172.31.0.3<span class="token punctuation">:</span><span class="token number">6443</span> <span class="token comment"># \u96C6\u7FA4api\u5730\u5740</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> kubernetes  <span class="token comment"># \u5B9A\u4E49\u7684\u96C6\u7FA4\u540D\u79F0\uFF0C\u4E0B\u9762\u5185\u5BB9\u4F1A\u5BF9\u5176\u5F15\u7528</span>

<span class="token key atrule">contexts</span><span class="token punctuation">:</span> <span class="token comment"># \u914D\u7F6E\u4E0A\u4E0B\u6587\u5173\u7CFB\uFF08\u73AF\u5883\uFF09\uFF0C\u96C6\u7FA4-\u7528\u6237</span>
<span class="token punctuation">-</span> <span class="token key atrule">context</span><span class="token punctuation">:</span>
    <span class="token key atrule">cluster</span><span class="token punctuation">:</span> kubernetes <span class="token comment"># \u8FD9\u91CC\u662F\u5BF9\u4E0A\u9762\u914D\u7F6E\u7684clusters\u4E2D\u7684cluster.name\u7684\u5F15\u7528</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>admin <span class="token comment"># \u8FD9\u91CC\u662F\u5F15\u7528\u7684user.name</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>admin@kubernetes <span class="token comment"># \u8FD9\u91CC\u662F\u5C06context\u5B9A\u4E49\u4E00\u4E2A\u540D\u5B57\uFF0C\u540E\u9762\u5177\u4F53\u4F7F\u7528\u54EA\u4E2A\u73AF\u5883\uFF0C\u5219\u5F15\u7528\u8FD9\u4E2A\u540D\u5B57</span>
  
<span class="token key atrule">users</span><span class="token punctuation">:</span> <span class="token comment"># \u5B9A\u4E49\u7528\u6237</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>admin <span class="token comment"># \u5B9A\u4E49\u4E00\u4E2A\u540D\u79F0\uFF0C\u8FD9\u4E2A\u540D\u5B57\u4EC5\u4EC5\u662F\u7ED9\u5230context\u7684\u4E00\u4E2A\u5F15\u7528\uFF0C\u4E0E\u4E0B\u9762\u7684\u7528\u6237\u540D\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB</span>
  <span class="token key atrule">user</span><span class="token punctuation">:</span>
    <span class="token key atrule">client-certificate-data</span><span class="token punctuation">:</span> \u8BE5\u7528\u6237\u7684\u8BC1\u4E66\u6587\u4EF6crt base64\u7F16\u7801\u540E\u7684
    <span class="token key atrule">client-key-data</span><span class="token punctuation">:</span> \u8BE5\u7528\u6237\u751F\u6210\u7684\u79C1\u94A5\u6587\u4EF6 base64\u7F16\u7801\u540E\u7684
    <span class="token comment">#client-certificate: /root/ssl/sentiger.crt # \u8FD9\u91CC\u6216\u8005\u6307\u5B9A\u8BC1\u4E66\u8DEF\u5F84</span>
    <span class="token comment">#client-key: /root/ssl/sentiger.key</span>

<span class="token key atrule">current-context</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>admin@kubernetes <span class="token comment"># \u8FD9\u91CC\u5C31\u662Fkubectl\u4F7F\u7528\u7684\u73AF\u5883</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> \u76F8\u5173\u547D\u4EE4</h3><p>\u5176\u5B9E\u5B8C\u5168\u53EF\u4EE5\u901A\u8FC7\u76F4\u63A5\u7F16\u8F91config\u6587\u4EF6\u6765\u914D\u7F6E\uFF0C\u4F46\u662Fkubectl\u63D0\u4F9B\u4E86\u5F88\u591A\u65B9\u4FBF\u7684\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># config \u7CFB\u5217\u547D\u4EE4
kubectl config

\u6DFB\u52A0\u7528\u6237\u5230config\u4E2D --embed-certs=true \u6DFB\u52A0\u8FD9\u4E2A\u53C2\u6570\u662F\u76F4\u63A5\u5C06\u8BC1\u4E66\u5185\u5BB9\u6DFB\u52A0\u5230config\uFF0C\u5426\u5219\u662F\u8DEF\u5F84 
kubectl config set-credentials sentiger --client-key sentiger.key --client-certificate sentiger.crt

\u5220\u9664\u7528\u6237
kubectl config delete-user sentiger

# \u6DFB\u52A0\u4E0A\u4E0B\u6587\uFF08\u73AF\u5883\uFF09
kubectl config set-context sentiger --cluster=kubernetes --user=sentiger

# \u4F7F\u7528\u4E0A\u4E0B\u6587
kubectl config use-context sentiger 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p><strong>\u76F8\u5173\u540D\u8BCD</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>authorization [n] \u82F1 [\u02CC\u0254\u02D0\u03B8\u0259ra\u026A\u02C8ze\u026A\u0283n] : \u6388\u6743\uFF1B\u6279\u51C6\uFF1B\u6388\u6743\u4E66

authentication [n] \u82F1 [\u0254\u02D0\u02CC\u03B8ent\u026A\u02C8ke\u026A\u0283n] \u8BA4\u8BC1 ; \u8EAB\u4EFD\u9A8C\u8BC1 ; \u9274\u522B ; \u8EAB\u4EFD\u8BA4\u8BC1 ; \u9274\u6743 ; \u9A8C\u8BC1

\u4F60\u8981\u767B\u673A\uFF0C\u4F60\u9700\u8981\u51FA\u793A\u4F60\u7684\u8EAB\u4EFD\u8BC1\u548C\u673A\u7968\uFF0C\u8EAB\u4EFD\u8BC1\u662F\u4E3A\u4E86\u8BC1\u660E\u4F60\u5F20\u4E09\u786E\u5B9E\u662F\u4F60\u5F20\u4E09\uFF0C\u8FD9\u5C31\u662F authentication\uFF1B\u800C\u673A\u7968\u662F\u4E3A\u4E86\u8BC1\u660E\u4F60\u5F20\u4E09\u786E\u5B9E\u4E70\u4E86\u7968\u53EF\u4EE5\u4E0A\u98DE\u673A\uFF0C\u8FD9\u5C31\u662F authorization\u3002

certificate [n/v] \u82F1 [s\u0259\u02C8t\u026Af\u026Ak\u0259t , s\u0259\u02C8t\u026Af\u026Ake\u026At] \u9881\u53D1\u8BC1\u4E66 / \u8BC1\u660E / \u53D1\u7ED9\u8BC1\u660E\u4E66 / \u7528\u8BC1\u4E66\u6279\u51C6 [v] \u7ED9\u2026\u63D0\u4F9B\u8BC1\u4E66
# \u6388\u6743\u901A\u8FC7
kubectl certificate approve myuser 
 
certification [n] \u8BC1\u660E\uFF1B\u8BC1\u4E66\uFF1B\u9274\u5B9A\uFF1B\u68C0\u5B9A

certification \u4E3B\u8981\u662F\u201C\u8BC1\u660E\uFF0C\u8BC1\u660E\u4E66\u201D\u4E4B\u610F\uFF0C\u800Ccertificate\u4E3A\u201C\u8BC1\u4E66\uFF0C\u6267\u7167\uFF0C\u5408\u683C\u8BC1\uFF0C\u51ED\u8BC1\u201D\uFF0C\u5373\u4F7F\u540D\u8BCD\u53C8\u662F\u52A8\u8BCD\uFF0C\u52A8\u8BCD\u7ED9xxx\u9881\u53D1\u8BC1\u4E66

authority [n] \u7BA1\u8F96\u6743\uFF1B\u5F53\u5C40\uFF1B\u5F53\u6743\u8005\uFF1B\u5A01\u4FE1\uFF1B\u5F71\u54CD\u529B\uFF1B\u8BF4\u670D\u529B\uFF1B\u6279\u51C6\uFF1B\u4E13\u5BB6\uFF1B\u6743\uFF1B\u6743\u529B

credential \u82F1 [kr\u0259\u02C8den\u0283l] [n] \u51ED\u636E\uFF1B\u8D44\u8D28\uFF1B\u8BC1\u4EF6\uFF1B\u56FD\u4E66 \u4E3B\u8981\u662F\u8D44\u8D28\u8BC1\u660E
# \u5728\u6587\u4EF6\u4E2D\u6DFB\u52A0\u8BC1\u4E66
kubectl config set-credentials myuser --client-key=myuser.key --client-certificate=myuser.crt --embed-certs=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function g(y,R){const i=s("RouterLink"),t=s("ExternalLinkIcon");return c(),u("div",null,[d,v,n("ul",null,[n("li",null,[e(i,{to:"/other/02-openssl.html"},{default:p(()=>[k]),_:1})]),n("li",null,[n("a",m,[b,e(t)])])]),h])}var f=l(r,[["render",g],["__file","10-api-auth.html.vue"]]);export{f as default};

import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as u,c,a as n,b as s,w as d,e as r,d as a}from"./app.be9e90f5.js";const o={},v=r(`<p>\u8BBF\u95EEAPI\u8D44\u6E90\u90FD\u662F\u901A\u8FC7REST\u8BF7\u6C42\u7684\uFF0C\u6240\u4EE5\u5BF9\u8FD9\u91CC\u7684\u8BBF\u95EE\u8BA4\u8BC1\uFF0C\u6743\u9650\u63A7\u5236\u7B49\u64CD\u4F5C\u9700\u8981\u4E86\u89E3</p><h2 id="\u8EAB\u4EFD\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8EAB\u4EFD\u8BA4\u8BC1" aria-hidden="true">#</a> \u8EAB\u4EFD\u8BA4\u8BC1</h2><p>\u8EAB\u4EFD\u8BA4\u8BC1\u662F\u7528\u6765\u786E\u5B9A\u8BF7\u6C42\u7684\u7528\u6237\u662F\u5426\u662Fk8s\u4E2D\u7684\u5408\u6CD5\u7528\u6237\u3002k8s\u4E2D\u7684\u7528\u6237\u8BBE\u8BA1\u6BD4\u8F83\u7075\u6D3B\uFF0C\u662F\u4E00\u4E2A\u4E0Ek8s\u7CFB\u7EDF\u65E0\u5173\u7684\u670D\u52A1\u3002\u53EA\u8981\u6EE1\u8DB3\u7CFB\u7EDF\u4E2D\u7684\u7528\u6237\u89C4\u8303\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u4EFB\u610F\u5916\u90E8\u7CFB\u7EDF\u6765\u6DFB\u52A0\u7528\u6237\u3002</p><h3 id="\u666E\u901A\u7528\u6237\u8EAB\u4EFD\u8BA4\u8BC1\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u7528\u6237\u8EAB\u4EFD\u8BA4\u8BC1\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u666E\u901A\u7528\u6237\u8EAB\u4EFD\u8BA4\u8BC1\u7684\u65B9\u6CD5</h3><p><strong>\u9759\u6001\u4EE4\u724C\u6587\u4EF6</strong></p><p>\u9759\u6001\u4EE4\u724C\u6587\u4EF6\u662F\u5728<code>kube-apiserver</code>\u542F\u52A8\u7684\u65F6\u5019\u52A0\u8F7D\u7684\u4EE4\u724C\u6587\u4EF6\uFF0C\u662F\u4E00\u4E2Acsv\u6587\u4EF6\uFF0C\u91CC\u9762\u5305\u542B <code>token,\u7528\u6237\u540D,\u7528\u6237ID,&quot;\u7528\u6237\u7EC41,\u7528\u6237\u7EC42&quot;</code>\u3002\u914D\u7F6Eapi\u542F\u52A8\u4E2D\u52A0\u8F7D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /etc/kubernetes/manifests/kube-apiserver.yaml

apiVersion: v1
kind: Pod
metadata:
  annotations:
    kubeadm.kubernetes.io/kube-apiserver.advertise-address.endpoint: 192.168.56.11:6443
  creationTimestamp: null
  labels:
    component: kube-apiserver
    tier: control-plane
  name: kube-apiserver
  namespace: kube-system
spec:
  containers:
  - command:
    - kube-apiserver
    ...
    - --token-auth-file=/etc/kubernetes/pki/tokenauth.csv # \u8FD9\u91CC\u5C31\u662F\u914D\u7F6E\u7684\u9759\u6001token
    ...

# token\u6587\u4EF6
[root@master1 yaml]# cat /etc/kubernetes/pki/tokenauth.csv
31ada4fd-adec-460c-809a-9e56ceb75269,sentiger,12,&quot;dev1,dev2&quot;

# \u8BF7\u6C42\u53D1\u73B0\u7528\u6237sentiger\u8BA4\u8BC1\u6210\u529F\u4E86\u3002\u53EA\u662F\u6CA1\u6709\u6743\u9650\u8BF7\u6C42\u8D44\u6E90\u800C\u5DF2\uFF0C\u662F\u7CFB\u7EDF\u80FD\u8BA4\u8BC6\u7684\u7528\u6237
[root@master1 yaml]# curl -H &quot;Authorization: Bearer 31ada4fd-adec-460c-809a-9e56ceb75269&quot;  https://192.168.56.11:6443/api/v1/namespaces/default/pods?limit=500 -k
{
  &quot;kind&quot;: &quot;Status&quot;,
  &quot;apiVersion&quot;: &quot;v1&quot;,
  &quot;metadata&quot;: {},
  &quot;status&quot;: &quot;Failure&quot;,
  &quot;message&quot;: &quot;pods is forbidden: User \\&quot;sentiger\\&quot; cannot list resource \\&quot;pods\\&quot; in API group \\&quot;\\&quot; in the namespace \\&quot;default\\&quot;&quot;,
  &quot;reason&quot;: &quot;Forbidden&quot;,
  &quot;details&quot;: {
    &quot;kind&quot;: &quot;pods&quot;
  },
  &quot;code&quot;: 403
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u6CE8\u610F\uFF1A \u8FD9\u91CC\u4F7F\u7528\u7684\u662F\u9759\u6001pod\u542F\u52A8kube-apiserver,\u5BF9\u4E8E\u65B0\u589E\u7684\u914D\u7F6Ekubelet\u4F1A\u81EA\u52A8\u91CD\u542Fpod\uFF0C\u5982\u679C\u542F\u52A8\u5931\u8D25\uFF0C\u65E5\u5FD7\u8BE5\u5982\u4F55\u67E5\uFF1F\u5176\u5B9E\u542F\u52A8\u7684pod\u5C31\u662F\u5BB9\u5668\uFF0C\u5B8C\u5168\u6839\u636E\u5BB9\u5668\u662F\u600E\u4E48\u67E5\u770B\u65E5\u5FD7\u7684\u65B9\u5F0F\u6765\u67E5\u627E\u5C31\u884C</p><p>\u4F8B\u5982\u4F7F\u7528\u7684\u662Fcontainerd, \u5219\u53EF\u4EE5\u4F7F\u7528<code>crictl logs \u5BB9\u5668ID</code>\u6765\u67E5\u770B</p><p>\u66F4\u65B0token.csv\u9700\u8981\u91CD\u542F<code>kube-apiserver</code>\u670D\u52A1</p></div><p><strong>Bootstrap Tokens</strong></p><p>\u542F\u52A8\u5F15\u5BFC\u4EE4\u724C\u662F\u4E00\u4E2A\u6BD4\u8F83\u7B80\u5355\u7684\uFF0C\u53EF\u4EE5\u52A8\u6001\u6DFB\u52A0\u5230k8s\u7CFB\u7EDF\u4E2D\u7684\u3002\u76F8\u6BD4\u9759\u6001\u6587\u4EF6\u4E0D\u80FD\u52A8\u6001\u6DFB\u52A0\uFF0C\u548C\u5B9E\u65BD\u52A0\u8F7D\u65B9\u4FBF\u591A\u4E86\u3002\u4F7F\u7528Bootstrap Tokens\u9700\u8981\u5982\u4E0B\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 1. kube-apiserver\u4E2D\u5F00\u542Fbootstrap-tokens
vim /etc/kubernetes/manifests/kube-apiserver.yaml
--enable-bootstrap-token-auth=true

# 2. \u63A7\u5236\u5176\u4E2D\u8BBE\u7F6Esecret\u8FC7\u671F\u81EA\u52A8\u6E05\u7406\u63A7\u5236\u5668
vim /etc/kubernetes/manifests/kube-controller-manager.yaml
- --controllers=*,bootstrapsigner,tokencleaner

# 3.\u914D\u7F6Esecret

apiVersion: v1
kind: Secret
metadata:
  # name \u5FC5\u987B\u662F &quot;bootstrap-token-&lt;token id&gt;&quot; \u683C\u5F0F\u7684
  name: bootstrap-token-07401c
  namespace: kube-system

# type \u5FC5\u987B\u662F &#39;bootstrap.kubernetes.io/token&#39;
type: bootstrap.kubernetes.io/token
stringData:
  # \u4F9B\u4EBA\u9605\u8BFB\u7684\u63CF\u8FF0\uFF0C\u53EF\u9009\u3002
  description: &quot;The default bootstrap token generated by &#39;kubeadm init&#39;.&quot;

  # \u4EE4\u724C ID \u548C\u79D8\u5BC6\u4FE1\u606F\uFF0C\u5FC5\u9700\u3002
  token-id: 07401c
  token-secret: f395accd246ae52d

  # \u53EF\u9009\u7684\u8FC7\u671F\u65F6\u95F4\u5B57\u6BB5
  expiration: 2027-03-10T03:22:11Z

  # \u5141\u8BB8\u7684\u7528\u6CD5
  usage-bootstrap-authentication: &quot;true&quot;
  usage-bootstrap-signing: &quot;true&quot;

  # \u4EE4\u724C\u8981\u8BA4\u8BC1\u4E3A\u7684\u989D\u5916\u7EC4\uFF0C\u5FC5\u987B\u4EE5 &quot;system:bootstrappers:&quot; \u5F00\u5934
  auth-extra-groups: system:bootstrappers:worker,system:bootstrappers:ingress

# 4. \u8BF7\u6C42\u7528\u6237\u8BA4\u8BC1\u901A\u8FC7
[root@master1 yaml]# curl -H &quot;Authorization: Bearer 07401c.f395accd246ae52d&quot; https://192.168.56.11:6443/api/v1/namespaces/default/pods?limit=5 -k
{
  &quot;kind&quot;: &quot;Status&quot;,
  &quot;apiVersion&quot;: &quot;v1&quot;,
  &quot;metadata&quot;: {},
  &quot;status&quot;: &quot;Failure&quot;,
  &quot;message&quot;: &quot;pods is forbidden: User \\&quot;system:bootstrap:07401c\\&quot; cannot list resource \\&quot;pods\\&quot; in API group \\&quot;\\&quot; in the namespace \\&quot;default\\&quot;&quot;,
  &quot;reason&quot;: &quot;Forbidden&quot;,
  &quot;details&quot;: {
    &quot;kind&quot;: &quot;pods&quot;
  },
  &quot;code&quot;: 403
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>X509 \u5BA2\u6237\u8BC1\u4E66</strong></p><p>X509 \u5BA2\u6237\u8BC1\u4E66\u4E5F\u662F\u6BD4\u8F83\u5E38\u89C1\u7684\u4E00\u79CD\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u901A\u8FC7\u4F7F\u7528k8s\u4E2D\u7684ca\u6765\u7B7E\u53D1\u5BA2\u6237\u7AEF\u8BC1\u4E66\u6765\u8BF7\u6C42\u3002\u4E0B\u9762\u4ECB\u7ECD\u5982\u4F55\u6765\u4F7F\u7528\uFF1A</p><p>\u624B\u52A8\u7B7E\u53D1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u751F\u6210\u5BA2\u6237\u7AEF\u7684\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6\uFF0CCN\uFF1A\u7528\u6237\u540D\uFF0CO\u662F\u7EC4\u7EC7
openssl genrsa -out sentiger.key 2048
openssl req -new -key sentiger.key -subj &#39;/CN=sentiger/O=dev1/O=dev2&#39; -out sentiger.csr

# \u4F7F\u7528kube-apiserver\u7684CA\u6765\u7B7E\u7F72\u5BA2\u6237\u7AEF\u8BF7\u6C42\u6587\u4EF6\uFF0C\u751F\u6210\u5BA2\u6237\u7AEF\u8BC1\u4E66
openssl x509 -req -sha256 -in sentiger.csr -CA /etc/kubernetes/pki/ca.crt -CAkey /etc/kubernetes/pki/ca.key -CAcreateserial -days 3650 -out sentiger.crt

# \u6D4B\u8BD5\uFF1A\u6CE8\u610F\u8FD9\u91CCcert\u8DEF\u5F84\u8FD9\u91CC\u76F8\u5BF9\u8DEF\u5F84\u8981\u5199./\u6216\u8005\u7EDD\u5BF9\u8DEF\u5F84\uFF08\u6240\u4EE5\u53EA\u8981\u6709\u4E86\u8BC1\u4E66\u548C\u79C1\u94A5\u90FD\u53EF\u4EE5\u8FDB\u884C\u7B7E\u53D1\u7528\u6237\uFF09
curl --cert ./sentiger.crt --key ./sentiger.key  --cacert /etc/kubernetes/pki/ca.crt https://192.168.56.11:6443/api/v1/namespaces/default/pods?limit=5
{
  &quot;kind&quot;: &quot;Status&quot;,
  &quot;apiVersion&quot;: &quot;v1&quot;,
  &quot;metadata&quot;: {},
  &quot;status&quot;: &quot;Failure&quot;,
  &quot;message&quot;: &quot;pods is forbidden: User \\&quot;sentiger\\&quot; cannot list resource \\&quot;pods\\&quot; in API group \\&quot;\\&quot; in the namespace \\&quot;default\\&quot;&quot;,
  &quot;reason&quot;: &quot;Forbidden&quot;,
  &quot;details&quot;: {
    &quot;kind&quot;: &quot;pods&quot;
  },
  &quot;code&quot;: 403
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528k8s\u7CFB\u7EDF\u7B7E\u53D1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 1. \u751F\u6210\u5BA2\u6237\u7AEF\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6
openssl genrsa -out sentiger.key 2048
openssl req -new -key sentiger.key -subj &#39;/CN=sentiger/O=dev1/O=dev2&#39; -out sentiger.csr

# 2. \u5C06csr\u751F\u6210base64
cat sentiger.csr | base64 | tr -d &quot;\\n&quot;

# 3. \u521B\u5EFA\u5BA2\u6237\u7AEF\u8BC1\u4E66\u8BF7\u6C42
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: sentiger

spec:
  request: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURSBSRVFVRVNULS0tLS0KTUlJQ2RqQ0NBVjRDQVFBd01URVJNQThHQTFVRUF3d0ljMlZ1ZEdsblpYSXhEVEFMQmdOVkJBb01CR1JsZGpFeApEVEFMQmdOVkJBb01CR1JsZGpJd2dnRWlNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0SUJEd0F3Z2dFS0FvSUJBUUN1CjhKdVprbTFkM0FzY1pYZEM1bzRZT3VKY2o0dHY3YThPWFFkTVNlZmVWMHFQMVRaMVp3WkozYWV1cWk3TDV1RkkKaUlkeXB5dlJ5SHFxVnp6OGxGa3c3M1ZxSloxY1Rjb1g1Qk1yeDJqVnB0R0VDaW1NWDROdDV0S0FIR1JSQ1V6Mwpta2YxZkIrZXBVcDZhTjVrY1p3QlY5MERxN25jZzNxeGZhMHVrYnUybUdraFJVeS9Yb0ZoZEUwZktZRC80Vzl2CndZR1FlaUJhSzlkUFdnN0w1bTh5NkxJQWoxU05kQ0lwNkpCbmlmL1ROY0dTaUtkUVVXdTdHWDB5Q0pXQ205Q2MKQitJWWRwRGhOODR0M011Yk1Ca25PbUJ3U1pZbU1BVkpQMkN2YllrV0g4ZlcrNVJGZktVbS9YN1dqa1dQcXRWOQpWRjlyUXNFRDRUNld0SEF6TUtETkFnTUJBQUdnQURBTkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQWVNT2xPQ3R0CkpKZUFJVEd5QzlQamRsMjd1RExiT29OdkllTUtMMXdCSmU0NHAzWm9DNHIwWFlyL0xyenRDaXJicTBid2p0bEQKYm1YM0xqNUoycmlEUmZkSHkzM2hDR2FVdFo0V053SFBwZFBVUi9BWmh0S0VtNjFLZnUzT3pyR1UwbUNOcXJRUQpYZDJ5TzhUbVl3bHExSXJxWGdac2pmR1Q0ZXJMaHA2TFo0THVUYi8xbkgxZ2tHalI1NElFN0QwMk1JN2xTdlAyCkJaNkE5QlQ4WWhPdzQ3REZxcERmY1BYOXlhbmNkTGlBR21HN0xtQnAwRWxFeWxMQjI1KzdmNG9NYXJST3dqa3gKV291KzVTTDVjMldjemhHMXNKU2F5a2tlNENJaUIrRHVyWExLQm9hMUhzelBKQ2ZkV2pUWlJTQVJ5akt5R3BDZwpIR3hyOTg1RExLZEdtUT09Ci0tLS0tRU5EIENFUlRJRklDQVRFIFJFUVVFU1QtLS0tLQo=
  signerName: kubernetes.io/kube-apiserver-client
  expirationSeconds: 86400
  usages:
  - client auth
  
# 4. \u521B\u5EFA
[root@master1 yaml]# kubectl apply -f  sentiger-csr.yaml 
certificatesigningrequest.certificates.k8s.io/sentiger created
[root@master1 yaml]# kubectl get csr
NAME       AGE   SIGNERNAME                            REQUESTOR          REQUESTEDDURATION   CONDITION
sentiger   7s    kubernetes.io/kube-apiserver-client   kubernetes-admin   24h                 Pending

# 5.\u7B7E\u53D1\u8BC1\u4E66
&gt; \u901A\u8FC7
kubectl certificate approve sentiger
&gt; \u62D2\u7EDD
kubectl certificate deny sentiger

# 6.\u5BFC\u51FA\u8BC1\u4E66
kubectl get csr sentiger -o jsonpath=&#39;{.status.certificate}&#39;| base64 -d  &gt; sentiger.crt

# \u9A8C\u8BC1
[root@master1 yaml]# curl --cert ./sentiger.crt --key ./sentiger.key  --cacert /etc/kubernetes/pki/ca.crt https://192.168.56.11:6443/api/v1/namespaces/default/pods?limit=5
{
  &quot;kind&quot;: &quot;Status&quot;,
  &quot;apiVersion&quot;: &quot;v1&quot;,
  &quot;metadata&quot;: {},
  &quot;status&quot;: &quot;Failure&quot;,
  &quot;message&quot;: &quot;pods is forbidden: User \\&quot;sentiger\\&quot; cannot list resource \\&quot;pods\\&quot; in API group \\&quot;\\&quot; in the namespace \\&quot;default\\&quot;&quot;,
  &quot;reason&quot;: &quot;Forbidden&quot;,
  &quot;details&quot;: {
    &quot;kind&quot;: &quot;pods&quot;
  },
  &quot;code&quot;: 403
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u670D\u52A1\u8D26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u8D26\u53F7" aria-hidden="true">#</a> \u670D\u52A1\u8D26\u53F7</h3><p>\u670D\u52A1\u8D26\u53F7\u4E3B\u8981\u662F\u9488\u5BF9\u4E8Epod\u8FDB\u7A0B\u6765\u8BBE\u8BA1\u7684\uFF0C\u5728\u751F\u6210\u7684pod\u4E2D\u4F1A\u81EA\u52A8\u7684\u52A0\u5165\u670D\u52A1\u8D26\u53F7\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u662F\u6709\u4E00\u4E2Adefault\u670D\u52A1\u8D26\u53F7\u4E5F\u53EF\u4EE5\u624B\u52A8\u7684\u6307\u5B9A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 1. \u521B\u5EFA\u670D\u52A1\u8D26\u53F7
kubectl create token jenkins

# 2. \u901A\u8FC7\u670D\u52A1\u8D26\u53F7\u521B\u5EFAtoken\uFF08JTW\uFF09
kubectl create token jenkins

# 3. \u5916\u90E8\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2Atoken\u6765\u8BBF\u95EE
\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u65B9\u4FBF\u540E\u7EED\u64CD\u4F5C
mytoken=eyJhbGciOiJSUzI1NiIsImtpZCI6Ik54UUMtT2s1Tm9tcHMwUzUxdGVjOEdTbGFmSmhGTmJNYkN4S1plb3RlaW8ifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjoxNjY5MTA1MjA0LCJpYXQiOjE2NjkxMDE2MDQsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJkZWZhdWx0Iiwic2VydmljZWFjY291bnQiOnsibmFtZSI6ImplbmtpbnMiLCJ1aWQiOiJhMjYzZGI1Ni0yNWVjLTQwYjUtODliMi1mOTM4MTMyNTMwMjQifX0sIm5iZiI6MTY2OTEwMTYwNCwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50OmRlZmF1bHQ6amVua2lucyJ9.GN1-DTjne48q0VcCtaa2eL89tZMObNyil-_7aP4oNwifY7KKJwaF4Kf-p4bLkTPVIjSamkneqg9xdrn2cE8IEF-YqNoHv2FD-NvjbbDRT-AmFmgLzuU4TXkwoTAUY-UmyRB9BLy7Xp8aJBKAYLvdfc57a7ci2jGP7CzFhniv5KiQ4Nlf4qBVU03jF3OjhK1K5epaMGYyRfQtQLC9U1TcXvl3Bdj410BtRMDqQ14hE5DE7NafrT3woKWWYf33oIEs_TMTtiesGzXubXBzcpTCZhVQT650THuBrNmjKSLgren8vUsjfhNdQRSN_EdGLTvYeJ4p6qSYGGtOZUgcJjSVvQ
\u4F7F\u7528JTW\u8BF7\u6C42
curl -H &quot;Authorization: Bearer $mytoken&quot; https://192.168.56.11:6443/api/v1/namespaces/default/pods --cacert /etc/kubernetes/pki/ca.crt 
{
  &quot;kind&quot;: &quot;Status&quot;,
  &quot;apiVersion&quot;: &quot;v1&quot;,
  &quot;metadata&quot;: {},
  &quot;status&quot;: &quot;Failure&quot;,
  &quot;message&quot;: &quot;pods is forbidden: User \\&quot;system:serviceaccount:default:jenkins\\&quot; cannot list resource \\&quot;pods\\&quot; in API group \\&quot;\\&quot; in the namespace \\&quot;default\\&quot;&quot;,
  &quot;reason&quot;: &quot;Forbidden&quot;,
  &quot;details&quot;: {
    &quot;kind&quot;: &quot;pods&quot;
  },
  &quot;code&quot;: 403
}

# 4. pod\u4E2D\u4F7F\u7528\u670D\u52A1\u8D26\u53F7

kind: Deployment
metadata:
  name: deployment-sa
  namespace: default
spec:
  replicas: 3
  selector:
    matchLabels:
      app: pod-sa
  template:
    metadata:
      name: pod-sa
      labels:
        app: pod-sa
    spec:
      serviceAccountName: jenkins
      containers:
      - name: nginx
        image: nginx:stable

\u8FDB\u5165\u5BB9\u5668\u67E5\u770B
cd /var/run/secrets/kubernetes.io/serviceaccount
root@deployment-sa-698cd9c74d-hx8xz:/var/run/secrets/kubernetes.io/serviceaccount# ls
ca.crt  namespace  token

\u6709\u4E86ca.crt, namespace, token \u6240\u4EE5\u5728\u5BB9\u5668\u5185\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EEapiserver

# \u6CE8\u610F\uFF1A\uFF08\u540E\u7EED\u5206\u914D\u6743\u9650\uFF09
\u88AB\u8BA4\u8BC1\u7684\u7528\u6237\u540D\u662F\uFF1Asystem:serviceaccount:&lt;\u540D\u5B57\u7A7A\u95F4&gt;:&lt;\u670D\u52A1\u8D26\u53F7&gt;
\u5E76\u88AB\u5206\u914D\u5230\u7528\u6237\u7EC4 system:serviceaccounts \u548C system:serviceaccounts:&lt;\u540D\u5B57\u7A7A\u95F4&gt;

# v1.22 \u4E4B\u524D\u9ED8\u8BA4\u521B\u5EFAsa\uFF0C\u4F1A\u521B\u5EFAtoken\u5230secret\u4E2D\uFF0C\u7136\u540Epod\u81EA\u52A8\u6302\u8F7Dsecret\u3002\u4F46\u662F\u540E\u7EED\u4E5F\u53EF\u4EE5\u624B\u52A8\u7BA1\u7406\u3002
v1.22\u4E4B\u524D\u8FD9\u6837\u521B\u5EFA\u7684token\u662F\u6C38\u4E45\u7684\uFF0C\u540E\u7EED\u4E3A\u4E86\u5B89\u5168\u8D77\u89C1\uFF0C\u4F7F\u7528\u4E86Token Request\u6765\u52A8\u6001\u521B\u5EFA\uFF0C\u5E76\u4E14\u5728pod\u5220\u9664\u7684\u65F6\u5019\uFF0C\u81EA\u52A8\u5220\u9664token


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u624B\u52A8\u521B\u5EFAsa,\u548Csecret\uFF0C\u4F46\u662F\u597D\u50CF\u6CA1\u5565\u4F5C\u7528\uFF0C\u57281.24\u7248\u672C\u4E2D\u5C31\u4F7F\u7528\u52A8\u6001token\uFF0C\u8FD9\u6837\u76F8\u6BD4\u4E8E\u6C38\u4E45token\u66F4\u52A0\u5B89\u5168</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@master1 yaml]# cat sa-secret.yaml 
apiVersion: v1
kind: ServiceAccount
metadata:
  name: sentiger
  namespace: default

---
apiVersion: v1
kind: Secret
metadata:
  name: sentiger-secret
  annotations:
    kubernetes.io/service-account.name: sentiger
type: kubernetes.io/service-account-token

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u901A\u8FC7\u670D\u52A1\u8D26\u53F7\u627E\u5230\u5BF9\u5E94\u7684binding</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kubectl get rolebindings,clusterrolebindings <span class="token punctuation">\\</span>
  --all-namespaces  <span class="token punctuation">\\</span>
  -o custom-columns<span class="token operator">=</span><span class="token string">&#39;KIND:kind,NAMESPACE:metadata.namespace,NAME:metadata.name,SERVICE_ACCOUNTS:subjects[?(@.kind==&quot;ServiceAccount&quot;)].name&#39;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;&lt;SERVICE_ACCOUNT_NAME&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rbac" tabindex="-1"><a class="header-anchor" href="#rbac" aria-hidden="true">#</a> RBAC</h2><h3 id="role" tabindex="-1"><a class="header-anchor" href="#role" aria-hidden="true">#</a> Role</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u53C2\u8003</strong></p>`,44),p={href:"https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/certificate-signing-requests/#request-signing-process",target:"_blank",rel:"noopener noreferrer"},m=a("\u6587\u6863"),b=a("\u8BA4\u8BC1");function k(q,g){const i=e("ExternalLinkIcon"),t=e("RouterLink");return u(),c("div",null,[v,n("ul",null,[n("li",null,[n("a",p,[m,s(i)])]),n("li",null,[s(t,{to:"/other/02-openssl.html"},{default:d(()=>[b]),_:1})])])])}var x=l(o,[["render",k],["__file","10-api-auth.html.vue"]]);export{x as default};

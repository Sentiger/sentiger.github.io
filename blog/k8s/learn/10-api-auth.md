---
title: API访问控制
order: 10
category:
  - k8s

---

访问API资源都是通过REST请求的，所以对这里的访问认证，权限控制等操作需要了解

**参考**

- [认证]
- [文档]

**通过服务账号找到对应的binding**

```shell
kubectl get rolebindings,clusterrolebindings \
  --all-namespaces  \
  -o custom-columns='KIND:kind,NAMESPACE:metadata.namespace,NAME:metadata.name,SERVICE_ACCOUNTS:subjects[?(@.kind=="ServiceAccount")].name' | grep "<SERVICE_ACCOUNT_NAME>"
```

## 使用K8S系统签署证书

在上面认证的文章中有写到，如何使用CA根证书进行签发，然而k8s也提供了接口来实现这一系列流程，具体如下：

```
1. 生成一个sentiger的CSR文件，并指定用户为sentiger和组为dev1，dev2
openssl genrsa -out sentiger.key 2048
openssl req -new -key sentiger.key -subj '/CN=sentiger/O=dev1/O=dev2' -out sentiger.csr

2. 生成csr.yaml文件
cat sentiger.csr | base64 | tr -d "\n"


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

3. 上面创建的是一个证书申请，需要系统进行审核（自动/人工）
(等待审核）
NAME       AGE     SIGNERNAME                            REQUESTOR          REQUESTEDDURATION   CONDITION
sentiger   2m17s   kubernetes.io/kube-apiserver-client   kubernetes-admin   24h                 Pending

4. 手动审核
# 通过
kubectl certificate approve sentiger
# 拒绝
kubectl certificate deny sentiger

5. 导出证书
kubectl get csr sentiger -o jsonpath='{.status.certificate}'| base64 -d  > sentiger.crt

6. 因为知道这个证书根证书,所以进行验证下
openssl verify -CAfile /etc/kubernetes/pki/ca.crt sentiger.crt
```

## RBAC

### Role

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: dev1
  namespace: default

rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]

# apiGroups: "","apps", "autoscaling", "batch", kubectl api-versions
# resources: "services", "pods","deployments"... kubectl api-resources 且可以配置子资源 pods/log
# verbs: "get", "list", "watch", "create", "update", "patch", "delete", "exec"
```

### RoleBinding

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: default

subjects:
- kind: User
  name: sentiger
  apiGroup: rbac.authorization.k8s.io

roleRef:
  kind: Role
  name: dev1
  apiGroup: rbac.authorization.k8s.io
```

## ServiceAccount

服务账号主要是针对于pod里面的服务请求api

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin
  namespace: default

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin

roleRef:
  kind: ClusterRole
  name: cluster-admin
  apiGroup: "rbac.authorization.k8s.io"

subjects:
- kind: ServiceAccount
  name: admin
  namespace: default

---
apiVersion: v1
kind: Pod
metadata:
  name: nginx-sa

spec:
  # 1.24版本 绑定服务账号，最终会绑定到容器中 /run/secrets/kubernetes.io/serviceaccount/路径中 里面有token,和ca，1.24版本不会自动创建secret
  serviceAccountName: admin # 绑定服务账号 
  containers:
    - name: nginx-sa
      image: nginx:1.18-alpine
```

**通过服务账号就可以访问对应的api接口**

```shell
curl --cacert ca.crt -H 'Authorization: Bearer 服务账号token' https://172.31.0.3:6443/api/v1/namespaces/default/pods?limit=3
# ca.crt，token都是在pod容器内 /var/run/secrets/kubernetes.io/serviceaccount 目录下
```

## kubectl

使用kubectl命令来操作kube-api，其实也是配置了认证方式，在$HOME/.kube/config文件中

```yaml
apiVersion: v1
kind: Config
clusters:  # 可以配置管理多个集群
- cluster:
    certificate-authority-data: 这里是CA根证书base64编码后的内容
    server: https://172.31.0.3:6443 # 集群api地址
    name: kubernetes  # 定义的集群名称，下面内容会对其引用

contexts: # 配置上下文关系（环境），集群-用户
- context:
    cluster: kubernetes # 这里是对上面配置的clusters中的cluster.name的引用
    user: kubernetes-admin # 这里是引用的user.name
  name: kubernetes-admin@kubernetes # 这里是将context定义一个名字，后面具体使用哪个环境，则引用这个名字
  
users: # 定义用户
- name: kubernetes-admin # 定义一个名称，这个名字仅仅是给到context的一个引用，与下面的用户名没有任何关系
  user:
    client-certificate-data: 该用户的证书文件crt base64编码后的
    client-key-data: 该用户生成的私钥文件 base64编码后的
    #client-certificate: /root/ssl/sentiger.crt # 这里或者指定证书路径
    #client-key: /root/ssl/sentiger.key

current-context: kubernetes-admin@kubernetes # 这里就是kubectl使用的环境

```
### 相关命令

其实完全可以通过直接编辑config文件来配置，但是kubectl提供了很多方便的命令：

```
# config 系列命令
kubectl config

添加用户到config中 --embed-certs=true 添加这个参数是直接将证书内容添加到config，否则是路径 
kubectl config set-credentials sentiger --client-key sentiger.key --client-certificate sentiger.crt

删除用户
kubectl config delete-user sentiger

# 添加上下文（环境）
kubectl config set-context sentiger --cluster=kubernetes --user=sentiger

# 使用上下文
kubectl config use-context sentiger 

```


## 扩展

**相关名词**

```
authorization [n] 英 [ˌɔːθəraɪˈzeɪʃn] : 授权；批准；授权书

authentication [n] 英 [ɔːˌθentɪˈkeɪʃn] 认证 ; 身份验证 ; 鉴别 ; 身份认证 ; 鉴权 ; 验证

你要登机，你需要出示你的身份证和机票，身份证是为了证明你张三确实是你张三，这就是 authentication；而机票是为了证明你张三确实买了票可以上飞机，这就是 authorization。

certificate [n/v] 英 [səˈtɪfɪkət , səˈtɪfɪkeɪt] 颁发证书 / 证明 / 发给证明书 / 用证书批准 [v] 给…提供证书
# 授权通过
kubectl certificate approve myuser 
 
certification [n] 证明；证书；鉴定；检定

certification 主要是“证明，证明书”之意，而certificate为“证书，执照，合格证，凭证”，即使名词又是动词，动词给xxx颁发证书

authority [n] 管辖权；当局；当权者；威信；影响力；说服力；批准；专家；权；权力

credential 英 [krəˈdenʃl] [n] 凭据；资质；证件；国书 主要是资质证明
# 在文件中添加证书
kubectl config set-credentials myuser --client-key=myuser.key --client-certificate=myuser.crt --embed-certs=true
```

[文档]: https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/certificate-signing-requests/#request-signing-process
[认证]: ../../other/02-openssl.md



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


[文档]: https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/certificate-signing-requests/#request-signing-process
[认证]: ../../other/02-openssl.md



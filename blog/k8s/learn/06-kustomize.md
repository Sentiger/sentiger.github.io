---
title: kustomize
order: 6
category:
  - k8s
---

kustomize主要使用来编写很多yaml文件，这些yaml文件又在不同的环境中被使用，重复修改问题。其实最终都是生成一份合并好的yaml。

其实总结就是通过一个模版来生成不同环境的配置，又可以对模版进行扩展。

## 基本命令

```shell
# 当前目录下有kustomization.yaml配置
kubectl kustomize .
```

## 基础合并

通过`resources`资源进行合并

```yaml
# kustomization.yaml

apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

# 合并deployment.yaml和service.yaml为一个
resources:
  - deployment.yaml
  - service.yaml
```

## 基础替换

可以通过配置模版，然后定义其中的值。更多替换可参考[kustomize]

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
# 将合并中的资源namespace设置为default
namespace: default
resources:
  - deployment.yaml
  - service.yaml
```

## 继承

可以通过`resources`继承模版，然后定义不同的环境。一般用来做多环境开发。

```yaml
namespace: develop # 修改namespace

resources:
  - ../../base # 继承了base目录下的配置
```

## 补丁

上面文档中提供了常用的模版修改。但是对于没有提供的参数，是可以通过补丁来进行修改。

```yaml
namespace: develop

resources:
  - ../../base

patchesStrategicMerge:
  - image.yaml # 这个是补丁版本要修改的
    
# image.yaml 
# 这个配置是通过metadata.name查找对应的配置，然后层级修改与替换
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  template:
    spec:
      containers:
        - name: nginx # 如果能在父级找到相同name，则修改。否则新增一个container
          image: nginx:1.22-alpine
          imagePullPolicy: Always

```

## 通过patchesJson6902补丁

`patchesStrategicMerge`这个是合并和替换，但是对于数组的操作，就没法进行替换了。例如替换数组中的第一个。

这个时候就需要颗粒度更小的进行修改。通过`jsonpath`进行操作。[patchesJson6902]

## configmap

configmap也是可以设置公共的配置，然后通过`resources`进行合并，但是`configmap`和`secret`比较简单，可以通过提供的配置自动生成。

```yaml
# Generator 控制生成configmap和secret的
generatorOptions:
  disableNameSuffixHash: true # 禁止name hash值，其实有hash防止name重复
  labels: # 新增标签
    name: cfg
  annotations:
    author: sentiger

# 生成configmap，也可以生成secret secretGenerator
configMapGenerator:
  - name: nginx
    literals:
      - user=root
      - password=root

  - name: mysql
    files: # 对于值比较大的文本，可以通过files配置，配置文件里面直接是写值
      - mysql-cfg=mysql.cnf
```


## 使用vars设置环境变量

模版中的环境变量env和command中的变量通过configmap（其他资源）中获取。[vars]

```yaml
containers:
  - image: myimage
    command: ["start", "--host", "$(nginx_cfg)"]
    env:
    - name: SECRET_TOKEN
      value: $(nginx_cfg)

---

vars:
  - name: nginx_cfg
    objref:
      kind: ConfigMap
      name: nginx
      apiVersion: v1
    fieldref: # 这个是关联configmap里面字段的值。如果不配置这个，则是直接引用某个变量名
      fieldpath: data.user # 使用configmap的路径查找
```


[kustomize]: https://kubectl.docs.kubernetes.io/references/kustomize/
[patchesJson6902]: https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patchesjson6902/
[vars]: https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/vars/
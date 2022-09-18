---
title: Git
order: 3
category:
  - git
---

## 存储

git仓库中的内容是如何存储的。版本管理是如何跟踪这些内容。这里先介绍如何是将内容存储到git仓库的。

**1. 写入文件**

我们将内容存储到git仓库，git肯定要想将用户的内容进行自己算法压缩生成内容存储。下面演示的就是将用户内容写入到git中的objects

```git
# 在仓库中创建一个要暂存的内容
echo v1 >> a.text; mkdir src; echo v1>>src/b.txt;

# 将这些内容存储到git仓库，并返回写入的hash值(注意：在本项目中只要内容是一样的，就只会生成一个文件，不管多少个目录，所以这里仅仅是将文件内容写入一个唯一的集合)
git hash-object -w a.text # 返回626799f0f85326a8c1fc522db584e86cdfccd51f 

# 查找写入的内容，每次-w的时候，都是将要暂存的内容写入到git仓库，然后返回一个hash值，这个hash值就是文件名
1. 写入的文件在.git/objects目录下，文件名就是返回的hash值
2. 查看内容
git cat-file -p 626799f0f85326a8c1fc522db584e86cdfccd51f

```

**2. 内容和git产生关系**

上面第一步骤仅仅是将用户中的内容进行了转换git存储的内容（内容一致的只会生成一个文件）。现在我们让git来管理每个文件的位置（因为生成的内容是没有任何关联的）

```git
# 将内容写入到暂存区
git update-index --add a.text src/b.txt

# 查看在暂存内容
git ls-files --stage 

# 这里62xxx这个就是生成的hash文件名Objects中。 a.txt,src/b.txt是组织的关系
100644 626799f0f85326a8c1fc522db584e86cdfccd51f 0	a.text
100644 626799f0f85326a8c1fc522db584e86cdfccd51f 0	src/b.txt

# 上面两步的操作就是git add命令
```

**3. 生成镜像**

上面仅仅是将内容写入到了暂存区，还没生成一个镜像（新版本），所以接下来就是将上面生成的内容，内容关系写入到版本库

```git
# 生成目录结构
➜  gittest git:(master) ✗ git write-tree  # 这还是会生成一个文件的（git中存储都是object ）
4b146d49b71675d29c0207bb0f526f0e734044ae

# 查看内容
➜  .git git:(master) git cat-file -p 4b146d49b71675d29c0207bb0f526f0e734044ae                                        
100644 blob 5d947ca8879f8a9072fe485c566204e3c2929e80	.gitignore
100644 blob 626799f0f85326a8c1fc522db584e86cdfccd51f	a.text
040000 tree d52d8f6759e73a34acacf4137b3470605c74efab	src

blob: 表示是一个内容
tree：表示是一个目录

# 上面这个是生成了此次的版本的目录结构，也是一个文件，所以要将这个结构和用户信息，提交的信息生成一个hash文件名的内容的镜像
➜  gittest git:(master) ✗ echo "first commit" |git commit-tree 4b146d49b71675d29c0207bb0f526f0e734044ae
97fdab90fefc64fcd38101e5e2084e03d94bdd3d

# 查看生成的镜像信息（这就是一次提交信息了）
➜  .git git:(master) git cat-file -p 97fdab90fefc64fcd38101e5e2084e03d94bdd3d                                        
tree 4b146d49b71675d29c0207bb0f526f0e734044ae  # 这个就是此次提交关联的生成目录树
author shiwh <shi_wenhu@qq.com> 1663492650 +0800 # 提交用户信息
committer shiwh <shi_wenhu@qq.com> 1663492650 +0800 # 提交用户

first commit # 提交备注

# 查看提交信息
git show 97fdab90fefc64fcd38101e5e2084e03d94bdd3d

# 查看此次提交的信息日志
git log --stat 97fdab90fefc64fcd38101e5e2084e03d94bdd3d

```

**4. 将镜像和分支关联**

上面三个步骤已经就生成了一个版本了，通过最后的提交记录都能找到相关的文件内容。git分支中仅仅记录的是当前的生成的commit，hash值。

```git
# 查看当前分支（master），然后将里面的内容换成生成的版本镜像hash值就关联起来了呀
➜  .git git:(master) cat HEAD             
ref: refs/heads/master
➜  .git git:(master) cat refs/heads/master
698f295f76438f58b42bb753f8333d8aba5069d6
➜  .git git:(master) 

# 将生成的版本写入到分支
echo 97fdab90fefc64fcd38101e5e2084e03d94bdd3d > refs/heads/master 

# 查看版本日志
git log # 其实后面省略了hash值，默认取的是HEAD中的

commit 97fdab90fefc64fcd38101e5e2084e03d94bdd3d (HEAD -> master)
Author: shiwh <shi_wenhu@qq.com>
Date:   Sun Sep 18 17:17:30 2022 +0800

    first commit

```

**5. 打包**

对于`.git/objects`生成了很多对象数据，这些文件不可能都提交到远程吧。而且发现从远程拉取下来的git仓库不存在这些。对象数只有打包数据，所以在进行`git push`时候是会进行自动打包的。

对于我们想删除本地生成的对象数据，可以使用`git gc`来完成，而不能直接就删除本地生成的对象数据（因为上面操作不会自动呢打包。并且自动将本地对象数据进行了打包处理。内容存储到`packed-refs`目录中


**总结**

上面演示了从本地工作目录写入文件，到生成git中的内容，然后生成目录树，然后生成提交着信息，最后关联到git分支整个流程


## 分支

所谓的分支记录的是当前提交的位置，然后从这个位置开始开发。分支名称dev其实就是等于`refs/heads/dev`,后面所有操作分支名的时候，都可以写完整路径

**HEAD**

这是一个特殊的文件，记录当前镜像位置

```git
➜  .git git:(master) cat HEAD            
ref: refs/heads/master  # ref关联引用的是refs/heades/master分支

# 修改HEAD
1. 可以手动修改，里面的内容然后设置当前处哪个分支/tag，版本中
2. 通过命令：git checkout ,git reset 等

```

**1. 查看分支内容**

```git
# 通过第一步HEAD里的内容，可以找出当前的处于git仓库中的位置

# 查看分支(本地分支）
1. git branch
2. ls .git/refs/heades/

```

**2. 相关命令**

```git
# 查看本地分支
git branch

# 查看远程分支
git branch -r

# 查看所有分支
git branch -a

# 从远程分支拉到本地新分支
git branch 新本地分支 远程分支

# 通过当前分支创建一个新分支
git branch 新分支

# 切换分支（上面git branch创建分支切换分支都需要手动)
git checkout 分支名称

# 新建分支并自动切换
git checkout -b 新分支名称 [远程分支/本地分支]

# 推送本地新分支到远程（需要设置远程分支名称）
git push --set-upstream origin dev_loca

# 修改分支名（其实就是从老分支创建了个新的分支）
git branch -m 新分支名 分支

# 删除分支
git branch -d 分支名称

# 删除远程分支
git push -d origin/仓库 远程分支名
* 因为一个git仓库可以关联多个远程仓库，默认第一个使用的是origin，这个都可以从配置文件中查看到

# 合并分支
git merge 分支名   #将指定分支合并到当前分支

# 合并指定的commit到当前分支
git cherry-pick [commit]

```

## tag

tag其实和分支没有太大区别，都是`refs/heads/tags`中创建


## 撤销

```git
# 撤销其实就是回滚，回滚到某次提交的镜像

# 将暂存区回滚到指定的commit，但是工作区内容不变
$ git reset [commit]

# 将暂存区某个文件回滚到指定commit
$ git reset [commit] filename

# 将工作区内容还原成暂存区内容
$ git checkout .

# 直接将工作区内容还原成某个commit
$ git checkout [commit] .

# HEAD意义
# HEAD其实是一个指针，.git/HEAD中记录当前分支最新的commit，这个会自动变化
# HEAD^   HEAD^^  HEAD~n 这种快捷方式上一步，上n步骤
```


## 远程操作

```
# 查看远程分支
$ git remote -v

# 将本地分支关联远程分支，也可以修改本地.git/config配置文件
$ git remote add [shotname] url
```

## 日志

```git
# 建议使用工具查看，因为变化内容比较清楚

# 查看当前分支提交日志
$ git log

# 查看本地最近的commit，即使是当前分支被回滚
$ git reflog

# 改变
git diff
```



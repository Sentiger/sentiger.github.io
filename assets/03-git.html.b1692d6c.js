import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.7d2371e9.js";const d={},a=s(`<h2 id="\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u5B58\u50A8" aria-hidden="true">#</a> \u5B58\u50A8</h2><p>git\u4ED3\u5E93\u4E2D\u7684\u5185\u5BB9\u662F\u5982\u4F55\u5B58\u50A8\u7684\u3002\u7248\u672C\u7BA1\u7406\u662F\u5982\u4F55\u8DDF\u8E2A\u8FD9\u4E9B\u5185\u5BB9\u3002\u8FD9\u91CC\u5148\u4ECB\u7ECD\u5982\u4F55\u662F\u5C06\u5185\u5BB9\u5B58\u50A8\u5230git\u4ED3\u5E93\u7684\u3002</p><p><strong>1. \u5199\u5165\u6587\u4EF6</strong></p><p>\u6211\u4EEC\u5C06\u5185\u5BB9\u5B58\u50A8\u5230git\u4ED3\u5E93\uFF0Cgit\u80AF\u5B9A\u8981\u60F3\u5C06\u7528\u6237\u7684\u5185\u5BB9\u8FDB\u884C\u81EA\u5DF1\u7B97\u6CD5\u538B\u7F29\u751F\u6210\u5185\u5BB9\u5B58\u50A8\u3002\u4E0B\u9762\u6F14\u793A\u7684\u5C31\u662F\u5C06\u7528\u6237\u5185\u5BB9\u5199\u5165\u5230git\u4E2D\u7684objects</p><div class="language-git ext-git line-numbers-mode"><pre class="language-git"><code><span class="token comment"># \u5728\u4ED3\u5E93\u4E2D\u521B\u5EFA\u4E00\u4E2A\u8981\u6682\u5B58\u7684\u5185\u5BB9</span>
echo v1 &gt;&gt; a.text; mkdir src; echo v1&gt;&gt;src/b.txt;

<span class="token comment"># \u5C06\u8FD9\u4E9B\u5185\u5BB9\u5B58\u50A8\u5230git\u4ED3\u5E93\uFF0C\u5E76\u8FD4\u56DE\u5199\u5165\u7684hash\u503C(\u6CE8\u610F\uFF1A\u5728\u672C\u9879\u76EE\u4E2D\u53EA\u8981\u5185\u5BB9\u662F\u4E00\u6837\u7684\uFF0C\u5C31\u53EA\u4F1A\u751F\u6210\u4E00\u4E2A\u6587\u4EF6\uFF0C\u4E0D\u7BA1\u591A\u5C11\u4E2A\u76EE\u5F55\uFF0C\u6240\u4EE5\u8FD9\u91CC\u4EC5\u4EC5\u662F\u5C06\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u4E00\u4E2A\u552F\u4E00\u7684\u96C6\u5408)</span>
git hash-object -w a.text # \u8FD4\u56DE626799f0f85326a8c1fc522db584e86cdfccd51f 

<span class="token comment"># \u67E5\u627E\u5199\u5165\u7684\u5185\u5BB9\uFF0C\u6BCF\u6B21-w\u7684\u65F6\u5019\uFF0C\u90FD\u662F\u5C06\u8981\u6682\u5B58\u7684\u5185\u5BB9\u5199\u5165\u5230git\u4ED3\u5E93\uFF0C\u7136\u540E\u8FD4\u56DE\u4E00\u4E2Ahash\u503C\uFF0C\u8FD9\u4E2Ahash\u503C\u5C31\u662F\u6587\u4EF6\u540D</span>
1. \u5199\u5165\u7684\u6587\u4EF6\u5728.git/objects\u76EE\u5F55\u4E0B\uFF0C\u6587\u4EF6\u540D\u5C31\u662F\u8FD4\u56DE\u7684hash\u503C
2. \u67E5\u770B\u5185\u5BB9
git cat-file -p 626799f0f85326a8c1fc522db584e86cdfccd51f

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. \u5185\u5BB9\u548Cgit\u4EA7\u751F\u5173\u7CFB</strong></p><p>\u4E0A\u9762\u7B2C\u4E00\u6B65\u9AA4\u4EC5\u4EC5\u662F\u5C06\u7528\u6237\u4E2D\u7684\u5185\u5BB9\u8FDB\u884C\u4E86\u8F6C\u6362git\u5B58\u50A8\u7684\u5185\u5BB9\uFF08\u5185\u5BB9\u4E00\u81F4\u7684\u53EA\u4F1A\u751F\u6210\u4E00\u4E2A\u6587\u4EF6\uFF09\u3002\u73B0\u5728\u6211\u4EEC\u8BA9git\u6765\u7BA1\u7406\u6BCF\u4E2A\u6587\u4EF6\u7684\u4F4D\u7F6E\uFF08\u56E0\u4E3A\u751F\u6210\u7684\u5185\u5BB9\u662F\u6CA1\u6709\u4EFB\u4F55\u5173\u8054\u7684\uFF09</p><div class="language-git ext-git line-numbers-mode"><pre class="language-git"><code><span class="token comment"># \u5C06\u5185\u5BB9\u5199\u5165\u5230\u6682\u5B58\u533A</span>
git update-index --add a.text src/b.txt

<span class="token comment"># \u67E5\u770B\u5728\u6682\u5B58\u5185\u5BB9</span>
git ls-files --stage 

<span class="token comment"># \u8FD9\u91CC62xxx\u8FD9\u4E2A\u5C31\u662F\u751F\u6210\u7684hash\u6587\u4EF6\u540DObjects\u4E2D\u3002 a.txt,src/b.txt\u662F\u7EC4\u7EC7\u7684\u5173\u7CFB</span>
100644 626799f0f85326a8c1fc522db584e86cdfccd51f 0	a.text
100644 626799f0f85326a8c1fc522db584e86cdfccd51f 0	src/b.txt

<span class="token comment"># \u4E0A\u9762\u4E24\u6B65\u7684\u64CD\u4F5C\u5C31\u662Fgit add\u547D\u4EE4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. \u751F\u6210\u955C\u50CF</strong></p><p>\u4E0A\u9762\u4EC5\u4EC5\u662F\u5C06\u5185\u5BB9\u5199\u5165\u5230\u4E86\u6682\u5B58\u533A\uFF0C\u8FD8\u6CA1\u751F\u6210\u4E00\u4E2A\u955C\u50CF\uFF08\u65B0\u7248\u672C\uFF09\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\u5C31\u662F\u5C06\u4E0A\u9762\u751F\u6210\u7684\u5185\u5BB9\uFF0C\u5185\u5BB9\u5173\u7CFB\u5199\u5165\u5230\u7248\u672C\u5E93</p><div class="language-git ext-git line-numbers-mode"><pre class="language-git"><code><span class="token comment"># \u751F\u6210\u76EE\u5F55\u7ED3\u6784</span>
\u279C  gittest git:(master) \u2717 git write-tree  # \u8FD9\u8FD8\u662F\u4F1A\u751F\u6210\u4E00\u4E2A\u6587\u4EF6\u7684\uFF08git\u4E2D\u5B58\u50A8\u90FD\u662Fobject \uFF09
4b146d49b71675d29c0207bb0f526f0e734044ae

<span class="token comment"># \u67E5\u770B\u5185\u5BB9</span>
\u279C  .git git:(master) git cat-file -p 4b146d49b71675d29c0207bb0f526f0e734044ae                                        
100644 blob 5d947ca8879f8a9072fe485c566204e3c2929e80	.gitignore
100644 blob 626799f0f85326a8c1fc522db584e86cdfccd51f	a.text
040000 tree d52d8f6759e73a34acacf4137b3470605c74efab	src

blob: \u8868\u793A\u662F\u4E00\u4E2A\u5185\u5BB9
tree\uFF1A\u8868\u793A\u662F\u4E00\u4E2A\u76EE\u5F55

<span class="token comment"># \u4E0A\u9762\u8FD9\u4E2A\u662F\u751F\u6210\u4E86\u6B64\u6B21\u7684\u7248\u672C\u7684\u76EE\u5F55\u7ED3\u6784\uFF0C\u4E5F\u662F\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6240\u4EE5\u8981\u5C06\u8FD9\u4E2A\u7ED3\u6784\u548C\u7528\u6237\u4FE1\u606F\uFF0C\u63D0\u4EA4\u7684\u4FE1\u606F\u751F\u6210\u4E00\u4E2Ahash\u6587\u4EF6\u540D\u7684\u5185\u5BB9\u7684\u955C\u50CF</span>
\u279C  gittest git:(master) \u2717 echo <span class="token string">&quot;first commit&quot;</span> |git commit-tree 4b146d49b71675d29c0207bb0f526f0e734044ae
97fdab90fefc64fcd38101e5e2084e03d94bdd3d

<span class="token comment"># \u67E5\u770B\u751F\u6210\u7684\u955C\u50CF\u4FE1\u606F\uFF08\u8FD9\u5C31\u662F\u4E00\u6B21\u63D0\u4EA4\u4FE1\u606F\u4E86\uFF09</span>
\u279C  .git git:(master) git cat-file -p 97fdab90fefc64fcd38101e5e2084e03d94bdd3d                                        
tree 4b146d49b71675d29c0207bb0f526f0e734044ae  # \u8FD9\u4E2A\u5C31\u662F\u6B64\u6B21\u63D0\u4EA4\u5173\u8054\u7684\u751F\u6210\u76EE\u5F55\u6811
author shiwh &lt;shi_wenhu@qq.com&gt; 1663492650 +0800 # \u63D0\u4EA4\u7528\u6237\u4FE1\u606F
committer shiwh &lt;shi_wenhu@qq.com&gt; 1663492650 +0800 # \u63D0\u4EA4\u7528\u6237

first commit # \u63D0\u4EA4\u5907\u6CE8

<span class="token comment"># \u67E5\u770B\u63D0\u4EA4\u4FE1\u606F</span>
git show 97fdab90fefc64fcd38101e5e2084e03d94bdd3d

<span class="token comment"># \u67E5\u770B\u6B64\u6B21\u63D0\u4EA4\u7684\u4FE1\u606F\u65E5\u5FD7</span>
git log --stat 97fdab90fefc64fcd38101e5e2084e03d94bdd3d

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. \u5C06\u955C\u50CF\u548C\u5206\u652F\u5173\u8054</strong></p><p>\u4E0A\u9762\u4E09\u4E2A\u6B65\u9AA4\u5DF2\u7ECF\u5C31\u751F\u6210\u4E86\u4E00\u4E2A\u7248\u672C\u4E86\uFF0C\u901A\u8FC7\u6700\u540E\u7684\u63D0\u4EA4\u8BB0\u5F55\u90FD\u80FD\u627E\u5230\u76F8\u5173\u7684\u6587\u4EF6\u5185\u5BB9\u3002git\u5206\u652F\u4E2D\u4EC5\u4EC5\u8BB0\u5F55\u7684\u662F\u5F53\u524D\u7684\u751F\u6210\u7684commit\uFF0Chash\u503C\u3002</p><div class="language-git ext-git line-numbers-mode"><pre class="language-git"><code><span class="token comment"># \u67E5\u770B\u5F53\u524D\u5206\u652F\uFF08master\uFF09\uFF0C\u7136\u540E\u5C06\u91CC\u9762\u7684\u5185\u5BB9\u6362\u6210\u751F\u6210\u7684\u7248\u672C\u955C\u50CFhash\u503C\u5C31\u5173\u8054\u8D77\u6765\u4E86\u5440</span>
\u279C  .git git:(master) cat HEAD             
ref: refs/heads/master
\u279C  .git git:(master) cat refs/heads/master
698f295f76438f58b42bb753f8333d8aba5069d6
\u279C  .git git:(master) 

<span class="token comment"># \u5C06\u751F\u6210\u7684\u7248\u672C\u5199\u5165\u5230\u5206\u652F</span>
echo 97fdab90fefc64fcd38101e5e2084e03d94bdd3d &gt; refs/heads/master 

<span class="token comment"># \u67E5\u770B\u7248\u672C\u65E5\u5FD7</span>
git log # \u5176\u5B9E\u540E\u9762\u7701\u7565\u4E86hash\u503C\uFF0C\u9ED8\u8BA4\u53D6\u7684\u662FHEAD\u4E2D\u7684

commit 97fdab90fefc64fcd38101e5e2084e03d94bdd3d (HEAD -&gt; master)
Author: shiwh &lt;shi_wenhu@qq.com&gt;
Date:   Sun Sep 18 17:17:30 2022 +0800

    first commit

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. \u6253\u5305</strong></p><p>\u5BF9\u4E8E<code>.git/objects</code>\u751F\u6210\u4E86\u5F88\u591A\u5BF9\u8C61\u6570\u636E\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u4E0D\u53EF\u80FD\u90FD\u63D0\u4EA4\u5230\u8FDC\u7A0B\u5427\u3002\u800C\u4E14\u53D1\u73B0\u4ECE\u8FDC\u7A0B\u62C9\u53D6\u4E0B\u6765\u7684git\u4ED3\u5E93\u4E0D\u5B58\u5728\u8FD9\u4E9B\u3002\u5BF9\u8C61\u6570\u53EA\u6709\u6253\u5305\u6570\u636E\uFF0C\u6240\u4EE5\u5728\u8FDB\u884C<code>git push</code>\u65F6\u5019\u662F\u4F1A\u8FDB\u884C\u81EA\u52A8\u6253\u5305\u7684\u3002</p><p>\u5BF9\u4E8E\u6211\u4EEC\u60F3\u5220\u9664\u672C\u5730\u751F\u6210\u7684\u5BF9\u8C61\u6570\u636E\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>git gc</code>\u6765\u5B8C\u6210\uFF0C\u800C\u4E0D\u80FD\u76F4\u63A5\u5C31\u5220\u9664\u672C\u5730\u751F\u6210\u7684\u5BF9\u8C61\u6570\u636E\uFF08\u56E0\u4E3A\u4E0A\u9762\u64CD\u4F5C\u4E0D\u4F1A\u81EA\u52A8\u5462\u6253\u5305\u3002\u5E76\u4E14\u81EA\u52A8\u5C06\u672C\u5730\u5BF9\u8C61\u6570\u636E\u8FDB\u884C\u4E86\u6253\u5305\u5904\u7406\u3002\u5185\u5BB9\u5B58\u50A8\u5230<code>packed-refs</code>\u76EE\u5F55\u4E2D</p><p><strong>\u603B\u7ED3</strong></p><p>\u4E0A\u9762\u6F14\u793A\u4E86\u4ECE\u672C\u5730\u5DE5\u4F5C\u76EE\u5F55\u5199\u5165\u6587\u4EF6\uFF0C\u5230\u751F\u6210git\u4E2D\u7684\u5185\u5BB9\uFF0C\u7136\u540E\u751F\u6210\u76EE\u5F55\u6811\uFF0C\u7136\u540E\u751F\u6210\u63D0\u4EA4\u7740\u4FE1\u606F\uFF0C\u6700\u540E\u5173\u8054\u5230git\u5206\u652F\u6574\u4E2A\u6D41\u7A0B</p>`,19),c=[a];function t(l,r){return i(),n("div",null,c)}var b=e(d,[["render",t],["__file","03-git.html.vue"]]);export{b as default};

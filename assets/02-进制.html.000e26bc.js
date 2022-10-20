import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as d}from"./app.7665657d.js";const s={},l=d(`<p>\u4E8C\u8FDB\u5236\u5728\u6C47\u7F16\u548C\u8BED\u8A00\u5E95\u5C42\u7528\u7684\u6BD4\u8F83\u591A\uFF0C\u867D\u7136\u8FD9\u4E2A\u4E0D\u597D\u8BC6\u522B\uFF0C\u4F46\u662F\u7B80\u5355\uFF0C\u800C\u4E14\u5B58\u50A8\u7A7A\u95F4\u4E5F\u5C0F\uFF0C\u6BCF\u4E00\u4F4D\u90FD\u4EE3\u8868\u4E00\u4E2A\u542B\u4E49\u3002\u4E0B\u9762\u4ECB\u7ECD\u5728go\u4E2D\u7684\u573A\u666F</p><h2 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E0E\u8FD0\u7B97
0&amp;0=0\uFF1B0&amp;1=0\uFF1B1&amp;0=0\uFF1B1&amp;1=1
\u5373\uFF1A\u4E24\u4E2A\u540C\u65F6\u4E3A1\uFF0C\u7ED3\u679C\u4E3A1\uFF0C\u5426\u5219\u4E3A0

\u6216\u8FD0\u7B97\uFF08|\uFF09
0|0=0\uFF1B  0|1=1\uFF1B  1|0=1\uFF1B   1|1=1\uFF1B
\u5373 \uFF1A\u53C2\u52A0\u8FD0\u7B97\u7684\u4E24\u4E2A\u5BF9\u8C61\uFF0C\u4E00\u4E2A\u4E3A1\uFF0C\u5176\u503C\u4E3A1\u3002

\u5F02\u6216\u8FD0\u7B97\u7B26\uFF08^\uFF09
\u8FD0\u7B97\u89C4\u5219\uFF1A0^0=0\uFF1B  0^1=1\uFF1B  1^0=1\uFF1B   1^1=0\uFF1B
\u5373\uFF1A\u53C2\u52A0\u8FD0\u7B97\u7684\u4E24\u4E2A\u5BF9\u8C61\uFF0C\u5982\u679C\u4E24\u4E2A\u4F4D\u4E3A\u201C\u5F02\u201D\uFF08\u503C\u4E0D\u540C\uFF09\uFF0C\u5219\u8BE5\u4F4D\u7ED3\u679C\u4E3A1\uFF0C\u5426\u5219\u4E3A0\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6587\u4EF6\u4E2D\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E2D\u7528\u6CD5" aria-hidden="true">#</a> \u6587\u4EF6\u4E2D\u7528\u6CD5</h2><table><thead><tr><th>\u5E38\u91CF</th><th>\u4E8C\u8FDB\u5236</th><th>\u7528\u9014</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>O_RDONLY</td><td>0</td><td>\u6253\u5F00\u6587\u4EF6\uFF08\u53EA\u8BFB\u6A21\u5F0F\uFF09</td><td></td></tr><tr><td>O_WRONLY</td><td>1</td><td>\u6253\u5F00\u6587\u4EF6\uFF08\u53EA\u5199\u6A21\u5F0F\uFF09</td><td></td></tr><tr><td>O_RDWR</td><td>10</td><td>\u6253\u5F00\u6587\u4EF6\uFF08\u53EF\u8BFB\u53EF\u5199\uFF09</td><td></td></tr><tr><td>O_APPEND</td><td>1000</td><td>\u5DF2\u7ECF\u6253\u5F00\u7684\u6587\u4EF6\uFF08\u5728\u6587\u4EF6\u540E\u9762\u8FFD\u52A0\u5185\u5BB9\uFF09</td><td></td></tr><tr><td>O_CREATE</td><td>1000000000</td><td>\u9488\u5BF9\u524D\u9762\u4E09\u4E2A\u6253\u5F00\u6587\u4EF6\u6A21\u5F0F\uFF0C\u5982\u679C\u6587\u4EF6\u4E0D\u5B58\u5728\u5219\u521B\u5EFA\u4E00\u4E2A</td><td></td></tr><tr><td>O_EXCL</td><td>100000000000</td><td>\u8FD9\u4E2A\u7528\u6765\u9650\u5236O_CREATE\uFF0C\u5982\u679C\u4F7F\u7528\u4E86O_CREATE\uFF0C\u5219\u8FD9\u4E2A\u53C2\u6570\u4F1A\u9650\u5236\u6587\u4EF6\u5FC5\u987B\u4E0D\u5B58\u5728</td><td></td></tr><tr><td>O_SYNC</td><td>10000000</td><td>\u5199\u5165\u6587\u4EF6\u5185\u5BB9\u7684\u65F6\u5019\uFF0C\u6BCF\u6B21\u5199\u70B9\u5185\u5BB9\uFF0C\u5FC5\u987B\u7B49\u5F85\u7CFB\u7EDFio\u8FD4\u56DE\u3002\u8981\u4E0D\u7136\u662F\u7CFB\u7EDF\u7F13\u51B2\u4E2D\u3002\u8FD9\u4E2A\u53C2\u6570\u4F1A\u4FDD\u8BC1\u6587\u4EF6\u80FD\u5199\u5165\u6210\u529F\uFF0C\u4F46\u662F\u901F\u5EA6\u4E0D\u884C</td><td></td></tr><tr><td>O_TRUNC</td><td>10000000000</td><td>\u6253\u5F00\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u4F1A\u6E05\u7A7A\u6587\u4EF6</td><td></td></tr></tbody></table><p><strong>\u6253\u5F00\u6587\u4EF6\u6D41\u7A0B</strong></p><ol><li>\u5728\u6253\u5F00\u6587\u4EF6\u6A21\u5F0F\u5FC5\u987B\u6307\u5B9AO_RDONLY\uFF0CO_WRONLY\uFF0CO_RDWR\u4E2D\u7684\u4E00\u4E2A</li><li>O_APPEND\uFF0CO_CREATE\uFF0CO_EXCL\uFF0CO_SYNC\uFF0CO_TRUNC\u8FD9\u4E2A\u6765\u63A7\u5236\u6253\u5F00\u6587\u4EF6\u7684\u884C\u4E3A</li><li>\u6307\u5B9A\u6743\u9650</li></ol><p><strong>\u8FD0\u7B97\u7B26\u7684\u7528\u6CD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>           0   O_RDONLY  \u672B\u5C3E\u662F0\u8868\u793A\u53EF\u8BFB
           1   O_WRONLY  \u672B\u5C3E\u662F1\u8868\u793A\u53EF\u5199
          10   O_RDWR    \u5012\u6570\u7B2C\u4E8C\u4F4D\u662F1\u8868\u793A\u53EF\u8BFB\u53EF\u5199

        1000   O_APPEND
    10000000   O_SYNC
  1000000000   O_CREATE
 10000000000   O_TRUNC
100000000000   O_EXCL

file, err := os.OpenFile(&quot;test.txt&quot;, os.O_CREATE|os.O_RDONLY|os.O_APPEND, 0666)
\u5728\u8FD9\u91CCflag\u5C31\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u53EA\u662F\u8FD9\u91CC\u7528\u4E86\u5B9A\u4E49\u7684\u5E38\u91CF\u505A\uFF5C\u8FD0\u7B97\u4E86\u3002\u8FD9\u91CC\u5C31\u662F\u5B9A\u4E49\u7684\u5E38\u91CF\u5C31\u8981\u6709\u89C4\u5F8B\uFF0C\u8FD9\u4E5F\u662F\u4E8C\u8FDB\u5236\u6700\u6BD4\u8F83\u70E6\u5F97\uFF0C\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u6765\u5B9A\u4E49\u4E8C\u8FDB\u5236\u6570\uFF0C\u7136\u540E\u624D\u80FD\u914D\u5408\u8FD0\u7B97\u7B26\u6765\u8FBE\u5230\u610F\u60F3\u4E0D\u5230\u7684\u7ED3\u679C


1. \u901A\u8FC7\u5BF9\u6BD4\u4E0A\u9762\u7684\u4E8C\u8FDB\u5236\u53D1\u73B0\uFF0C\u4ED6\u4EEC\u6BCF\u4F4D\u662F\u6CA1\u6709\u91CD\u590D\u7684\u3002\u6240\u4EE5\u5C31\u662F\u6BCF\u4E00\u4F4D\u8868\u793A\u4E0D\u540C\u7684\u542B\u4E49\u3002\u4F8B\u5982\u6211\u60F3\u5B9A\u4E49\u53EF\u5199\u6A21\u5F0F\u6253\u5F00\uFF0C\u4E14\u6587\u4EF6\u5185\u5BB9\u662F\u8FFD\u52A0\u7684
flag = 1 | 1000 = 1001

2. \u4F8B\u5982\u5728\u8C03\u7528write\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u4F1A\u5148\u8FDB\u884C\u5224\u65AD\u3002\u5176\u4ED6\u7684\u4E5F\u662F\u4E00\u6837\u7684
if flag &amp; O_WRONLY ==0 { // \u56E0\u4E3A\u53EA\u8981\u5224\u65ADO_WRONLY\u8FD9\u4E00\u4F4D\u662F\u5426\u8BBE\u7F6E\u4E3A1\u4E86
    panic(&quot;\u6587\u4EF6\u6A21\u5F0F\u4E0D\u80FD\u5199&quot;)
}


3. \u603B\u7ED3\uFF1A\u5176\u5B9E\u8FD9\u7684\u597D\u5904\u5C31\u662F\u901A\u8FC7\u6570\u5B57\u4E2D\u7684\u4F4D\u6765\u8868\u793A\u64CD\u4F5C\u7684\u610F\u56FE\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528\u66F4\u52A0\u4E0A\u5C42\u7684\u64CD\u4F5C\u6765\u8868\u793A\uFF0C\u6211\u4EEC\u5728\u8BBE\u8BA1\u7684\u65F6\u5019\u4E5F\u53EF\u4EE5\u501F\u9274\u3002

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u501F\u9274</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5047\u8BBE\u7F16\u7A0B\u4E2D\u6709\u5341\u79CD\u72B6\u6001\uFF0C\u4E14\u662F\u53EF\u4EE5\u7EC4\u5408\u7684\uFF0C\u5E94\u8BE5\u5982\u4F55\u8BBE\u8BA1
1. \u5B9A\u4E49\u5341\u4E2A\u4F4D\u7F6E\u6570\uFF08\u4E8C\u8FDB\u5236\uFF09
1111111111

2. \u4E0D\u540C\u72B6\u6001
\u72B6\u60011\uFF1A 1
\u72B6\u60012\uFF1A10
\u72B6\u60013\uFF1A100
\u72B6\u60014\uFF1A1000
...
\u72B6\u600110\uFF1A1000000000

2. \u7136\u540E\u4F20\u5165\u53C2\u6570
\u72B6\u60011 \u72B6\u60012
1 \uFF5C 10

3. \u5224\u65AD\u662F\u5426\u6709\u4F20\u5165\u72B6\u60011
if 1 &amp; flag !=0 

\u5224\u65AD\u72B6\u600110
if 1000000000 &amp; flag != 0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6587\u4EF6\u6743\u9650/fileMode</strong></p><p>\u5728\u521B\u5EFA\u6587\u4EF6\u7684\u65F6\u5019\u9700\u8981\u6307\u5B9A\u6743\u9650\u3002\u8FD9\u91CC\u7684\u6743\u9650\u548CLinux\u7684\u6743\u9650\u8868\u8FBE\u4E00\u81F4\u3002\u7136\u540E\u4E5F\u662F\u7528\u4E0A\u9762\u4E00\u6837\u7684\u8FDB\u5236\u4F4D\u6765\u8868\u793A\u6709\u54EA\u4E9B\u6743\u9650</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8BED\u610F\u8868\u8FBE\u6CD5
-rwx rwx rwx
\u5BF9\u5E94\u7684\u4E8C\u8FDB\u5236\u8868\u8FBE\u6CD5
-111 111 111
\u5BF9\u5E94\u5341\u8FDB\u5236
r:4
w:2
x:1

\u793A\u4F8B\uFF1A
os.OpenFile(&quot;test.txt&quot;, os.O_CREATE|os.O_RDONLY|os.O_APPEND, 0777)

fileModel\u662F\u4E00\u4E2Auint32\u4F4D\u7684\u6574\u6570
0777\uFF1A\u8868\u793A8\u8FDB\u5236\uFF0C\u6B63\u597D\u53EF\u4EE5\u5B8C\u7F8E\u7684\u8868\u793A111 111 111 \u7684\u6BCF\u4E09\u4F4D


\u6CE8\u610Fumask
os.OpenFile(&quot;test.txt&quot;, os.O_CREATE|os.O_RDONLY|os.O_APPEND, 0777)
\u4E0A\u9762\u8FD9\u4E2A\u521B\u5EFA\u7684\u6587\u4EF6\u4E00\u822C\u90FD\u662F0755\u3002\u4E3A\u5565\u4E0D\u662F0777\u5462\uFF1F

\u7B54\u6848\uFF1A\u5176\u5B9E\u8FD9\u4E2A\u662F\u78C1\u76D8\u7684\u9ED8\u8BA4\u7684\u4FDD\u62A4\u65B9\u6CD5\u3002\u6240\u4EE5umask 022\u3002\u7136\u540E\u505A\u4E00\u6B21\u8FD0\u7B97 0777 &amp; (^022) = 0755

\u6240\u4EE5\u5982\u679C\u9700\u8981\u548C\u7ED3\u679C\u4E00\u81F4

syscall.Umask(0)
os.OpenFile(&quot;test.txt&quot;, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0777)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),v=[l];function t(a,r){return n(),e("div",null,v)}var m=i(s,[["render",t],["__file","02-\u8FDB\u5236.html.vue"]]);export{m as default};

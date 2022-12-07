import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,e as i}from"./app.6da40224.js";const a={},l=i(`<h2 id="protoc\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#protoc\u547D\u4EE4" aria-hidden="true">#</a> protoc\u547D\u4EE4</h2><p>\u901A\u8FC7<code>protoc</code>\u548C\u63D2\u4EF6<code>protoc-gen-go</code>\u53EF\u4EE5\u5C06<code>.proto</code>\u6587\u4EF6\u7F16\u8BD1\u6210<code>go</code>\u4EE3\u7801\u3002\u4E0B\u9762\u4ECB\u7ECD\u4E00\u4E0B\u4E00\u4E9B\u7F16\u8BD1\u53C2\u6570</p><p><strong>\u9879\u76EE\u8DEF\u5F84</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  grpc tree
.
\u251C\u2500\u2500 go.mod
\u251C\u2500\u2500 go.sum
\u251C\u2500\u2500 server.go
\u2514\u2500\u2500 service
    \u2514\u2500\u2500 greeter.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>protobuf\u793A\u4F8B\u6587\u4EF6</strong></p><div class="language-protobuf ext-protobuf line-numbers-mode"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49go\u5305\u8DEF\u5F84\uFF0C\u89C4\u5B9A\u81F3\u5C11\u6709\u4E00\u4E2A.\u6216\u8005/\uFF0C\u6240\u4EE5\u4E00\u822C\u90FD\u5B9A\u4E49go.mod\u4E2D\u7684\u9879\u76EE\u4E3A\u524D\u7F00. \u6216\u8005\u53EF\u4EE5\u624B\u52A8\u5728\u547D\u4EE4\u884C\u4E2D\u6307\u5B9A</span>
<span class="token keyword">option</span> go_package <span class="token operator">=</span> <span class="token string">&quot;grpc/service&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> <span class="token keyword">service</span><span class="token punctuation">;</span>  <span class="token comment">// \u8FD9\u4E2A\u4F1A\u5728\u751F\u6210\u7684\u4EE3\u7801\u6CE8\u91CA\u4F1A\u4EE5\u8FD9\u4E2A\u5305\u4F5C\u4E3A\u5305\u540D</span>

<span class="token keyword">service</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  <span class="token keyword">rpc</span> <span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token class-name">HelloRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span><span class="token punctuation">(</span><span class="token class-name">HelloReply</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">HelloRequest</span><span class="token punctuation">{</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">HelloReply</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> message <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u751F\u6210\u4EE3\u7801\uFF0C\u5982\u679C\u751F\u6210\u5176\u4ED6\u4EE3\u7801\u5219--java_out \u7B49
protorc --go_out [options]  

options

# \u5B9A\u4E49protobuf\u6587\u4EF6\u7684\u8DEF\u5F84\u3002\u9ED8\u8BA4\u662F\u5F53\u524D\u7EC8\u7AEF\u4E0B\u7684\u8DEF\u5F84
--proto_path=service

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7F16\u8BD1\u540E\u751F\u6210\u7684\u8DEF\u5F84</strong></p><p>\u7EDD\u5BF9\u8DEF\u5F84</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u9ED8\u8BA4\u9009\u9879
--go_opt=path=import

# go_package
option go_package = &quot;grpc/service&quot;;

# \u7F16\u8BD1
protoc --proto_path=./  --go_out=./ --go_opt=paths=import service/greeter.proto

# \u751F\u6210\u7ED3\u679C
.
\u251C\u2500\u2500 go.mod
\u251C\u2500\u2500 go.sum
\u251C\u2500\u2500 grpc    # \u76F4\u63A5\u4F1A\u751F\u6210go_package\u76EE\u5F55\u4E0B\u7684\u8DEF\u5F84
\u2502   \u2514\u2500\u2500 service
\u2502       \u2514\u2500\u2500 greeter.pb.go
\u251C\u2500\u2500 server.go
\u2514\u2500\u2500 service
    \u2514\u2500\u2500 greeter.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u76F8\u5BF9\u8DEF\u5F84</strong></p><p>\u751F\u6210\u4E0E\u5B9A\u4E49\u7684protobuf\u76F8\u5BF9\u8DEF\u5F84</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--go_opt=path=source_relative

# go_package
option go_package = &quot;grpc/service&quot;;

# \u7F16\u8BD1
protoc --proto_path=./  --go_out=./ --go_opt=paths=source_relative ./service/greeter.proto

# \u751F\u6210\u7ED3\u679C
.
\u251C\u2500\u2500 go.mod
\u251C\u2500\u2500 go.sum
\u251C\u2500\u2500 server.go
\u2514\u2500\u2500 service
    \u251C\u2500\u2500 greeter.pb.go  # \u547D\u4EE4\u4E2D\u6700\u540E\u6307\u5B9A\u7684protobuf\u8DEF\u5F84\u662F./service/\uFF0C \u6240\u4EE5\u4E5F\u4F1A\u751F\u6210\u5230\u8FD9\u4E2A\u4E0B\u9762\u3002\u8FD9\u4E2A\u4E0D\u4F1A\u548C--proto_path\u4E00\u8D77\u7EC4\u5408\uFF0C\u4F8B\u5982\u4E0B\u9762\u8FD9\u79CD\u5B9A\u4E49
    \u2514\u2500\u2500 greeter.proto
    
--------
# \u7F16\u8BD1
protoc --proto_path=./service  --go_out=./ --go_opt=paths=source_relative greeter.proto 

# \u751F\u6210\u7ED3\u679C
.
\u251C\u2500\u2500 go.mod
\u251C\u2500\u2500 go.sum
\u251C\u2500\u2500 greeter.pb.go  # \u6B64\u65F6\u751F\u6210\u5230\u4E86\u6839\u8DEF\u5F84\u4E0B
\u251C\u2500\u2500 server.go
\u2514\u2500\u2500 service
    \u2514\u2500\u2500 greeter.proto
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>module</strong></p><p>paths=import\u7684\u65F6\u5019\u4F1A\u751F\u6210go_package\u4E2D\u5B9A\u4E49\u7684\u76EE\u5F55\uFF0C\u5982\u679C\u53EA\u662F\u60F3\u5176\u4E2D\u7684\u540E\u9762\u4E00\u90E8\u5206\u53EF\u4EE5\u8FD9\u6837\u5B9A\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u7F16\u8BD1
protoc --proto_path=./service  --go_out=./ --go_opt=module=grpc greeter.proto

# \u751F\u6210\u7ED3\u679C
.
\u251C\u2500\u2500 go.mod
\u251C\u2500\u2500 go.sum
\u251C\u2500\u2500 server.go
\u2514\u2500\u2500 service
    \u251C\u2500\u2500 greeter.pb.go  # \u672C\u6765\u9ED8\u8BA4import\u4F1A\u751F\u6210grpc/service\u76EE\u5F55\uFF0C\u4F46\u662F\u4F7F\u7528\u4E86module\uFF0C\u622A\u53D6\u4E86module\u4E2D\u7684\u524D\u7F00
    \u2514\u2500\u2500 greeter.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8986\u76D6go-package" tabindex="-1"><a class="header-anchor" href="#\u8986\u76D6go-package" aria-hidden="true">#</a> \u8986\u76D6go_package</h3><p>\u6709\u65F6\u5019\u5728\u547D\u4EE4\u4E2D\uFF0C\u6216\u4E00\u4E9B\u7B2C\u4E09\u65B9\u7CFB\u7EDF\u4E2D\uFF0C\u7F16\u8BD1\u7684\u65F6\u5019\uFF0C\u81EA\u5B9A\u4E49go_package\u8DEF\u5F84</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u7F16\u8BD1
protoc --proto_path=./  --go_out=./ --go_opt=Mservice/greeter.proto=aa.com/service  service/greeter.proto

\u4F7F\u7528--go_opt=M\u6E90\u6587\u4EF6\u540D=\u66FF\u6362\u7684go_package\u8DEF\u5F84

\u6CE8\u610F\uFF1A\u53EF\u4EE5\u4F7F\u7528go_opt=paths=import/module/source_relative\u7B49\u53C2\u6570\u4E00\u8D77\u7528


# \u751F\u6210\u7ED3\u679C
.
\u251C\u2500\u2500 aa.com
\u2502   \u2514\u2500\u2500 service
\u2502       \u2514\u2500\u2500 greeter.pb.go
\u251C\u2500\u2500 go.mod
\u251C\u2500\u2500 go.sum
\u251C\u2500\u2500 server.go
\u2514\u2500\u2500 service
    \u2514\u2500\u2500 greeter.proto
    
# \u6CE8\u610F\uFF1A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),r=[l];function o(d,c){return n(),s("div",null,r)}var p=e(a,[["render",o],["__file","01-protoc-gen-go.html.vue"]]);export{p as default};

import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as e,e as a}from"./app.870fac28.js";const i={},t=a(`<p>\u4E0B\u9762\u4ECB\u7ECD\u7684\u90FD\u662F\u53C2\u8003<code>proto3</code>\u7684</p><h2 id="protoc\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#protoc\u547D\u4EE4" aria-hidden="true">#</a> protoc\u547D\u4EE4</h2><p>\u901A\u8FC7<code>protoc</code>\u548C\u63D2\u4EF6<code>protoc-gen-go</code>\u53EF\u4EE5\u5C06<code>.proto</code>\u6587\u4EF6\u7F16\u8BD1\u6210<code>go</code>\u4EE3\u7801\u3002\u4E0B\u9762\u4ECB\u7ECD\u4E00\u4E0B\u4E00\u4E9B\u7F16\u8BD1\u53C2\u6570</p><p><strong>\u9879\u76EE\u8DEF\u5F84</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  grpc tree
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="protobuf\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#protobuf\u5B9A\u4E49" aria-hidden="true">#</a> protobuf\u5B9A\u4E49</h2><h3 id="\u7F16\u8BD1\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u89C4\u5219" aria-hidden="true">#</a> \u7F16\u8BD1\u89C4\u5219</h3><p><strong>message\u540D\u5B57\u7F16\u8BD1\u89C4\u5219</strong></p><p><code>protobuf</code>\u7F16\u8BD1\u662F\u6309\u7167\u9A7C\u5CF0\u6CD5\u8FDB\u884C\u7F16\u8BD1\u751F\u6210<code>go</code>\u4E2D\u7684\u7ED3\u6784\u4F53\uFF0C\u4E14\u662F\u80FD\u5BFC\u51FA\u7684\u3002\u4F8B\u5982\u4E0B\u9762\uFF1A</p><div class="language-protobuf ext-protobuf line-numbers-mode"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">FooA</span><span class="token punctuation">{</span><span class="token punctuation">}</span>    <span class="token comment">// struct FooA{}</span>
<span class="token keyword">message</span> <span class="token class-name">foo_b</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token comment">// struct FooB{}</span>
<span class="token keyword">message</span> <span class="token class-name">foo_C</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token comment">// struct Foo_C{}</span>
<span class="token keyword">message</span> <span class="token class-name">Foo_d</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token comment">// struct FooD{}</span>
<span class="token keyword">message</span> <span class="token class-name">Foo_E</span><span class="token punctuation">{</span><span class="token punctuation">}</span>   <span class="token comment">// struct Foo_E{}</span>

<span class="token comment">// \u7F16\u8BD1\u540E\u89C4\u5219</span>
<span class="token comment">// 1. \u5C31\u662F\u6839\u636E\u9A7C\u5CF0\u6CD5\u8FDB\u884C\u8F6C\u6362\u7684</span>
<span class="token comment">// 2. \u9996\u5199\u5B57\u6BCD\u4E0D\u7BA1\u662F\u4EC0\u4E48\u53D8\u5927\u5199</span>
<span class="token comment">// 3. \u4E0B\u5212\u7EBF\u540E\u9762\u7684\u5C0F\u5199\u5B57\u6BCD\u53D8\u5927\u5199\uFF0C\u7136\u540E\u53BB\u6389\u524D\u9762\u7684\u4E0B\u5212\u7EBF</span>
<span class="token comment">// 4. \u4E0B\u5212\u7EBF\u540E\u9762\u662F\u5927\u5199\u5B57\u6BCD\uFF0C\u5219\u4E0B\u5212\u7EBF\u4E0D\u53D8\uFF0C\u5927\u5199\u5B57\u6BCD\u4E5F\u4E0D\u53D8</span>
<span class="token comment">// 5. \u603B\u7ED3\uFF1A\u7B26\u5408\u9A7C\u5CF0\u6CD5\u53D8\u5316\u5C31\u662F\uFF1A\u524D\u9762\u4E0B\u5212\u7EBF\u53BB\u6389\uFF0C\u7136\u540E\u540E\u9762\u5B57\u6BCD\u5927\u5199\uFF0C\u5426\u5219\u4E0D\u7ED9\u8F6C\u6362</span>


<span class="token comment">//\u9488\u5BF9\u4E8E\u5D4C\u5957\uFF0C\u5176\u5B9E\u4E5F\u662F\u5B9A\u4E49\u4E86\u4E24\u4E2A\u7ED3\u6784\u4F53 \uFF0C\u53EA\u662F\u52A0\u4E86\u4E9B\u524D\u7F00\uFF1A\u4F1A\u5C06\u7236\u7EA7\u522B\u548C\u5F53\u524D\u7684\u4EE5\u4E0B\u5212\u7EBF\u8FDB\u884C\u62FC\u63A5\uFF0C\u7136\u540E\u4F7F\u7528\u9A7C\u5CF0\u6CD5\u8FDB\u884C\u8F6C\u6362</span>

<span class="token keyword">message</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>  <span class="token comment">// Foo-&gt;Foo-&gt;struct Foo{}</span>
  <span class="token keyword">message</span> <span class="token class-name">Bar</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// Foo_Bar-&gt;Foo_Bar-&gt;struct Foo_Bar{}</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">foo</span> <span class="token punctuation">{</span>  <span class="token comment">// foo -&gt;Foo-&gt;struct Foo{}</span>
  <span class="token keyword">message</span> <span class="token class-name">bar</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// foo_bar-&gt;FooBar-&gt;struct FooBar{}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>field\u540D\u5B57\u7F16\u8BD1\u89C4\u5219</strong></p><p>\u4E5F\u662F\u548C\u4E0A\u9762message\u4E00\u6837\u9075\u5FAA\u9A7C\u5CF0\u6CD5\u7F16\u8BD1\u8F6C\u6362\u3002</p><p><strong>\u603B\u7ED3</strong></p><p>\u4E00\u822CMessage\u90FD\u662F\u5B9A\u4E49\u4E3A\u9A7C\u5CF0\u6CD5\uFF0Cfield\u90FD\u662F\u5C0F\u5199\u5B57\u6BCD+\u4E0B\u5212\u7EBF</p><h2 id="\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5" aria-hidden="true">#</a> \u5B57\u6BB5</h2><p><code>protobuf</code>\u652F\u6301\u5E38\u89C1\u7684<code>string</code>,<code>int</code>,<code>bool</code>,<code>bytes</code>\u548C\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7C7B\u578B\u4EE5\u53CA\u4E00\u4E9B\u9AD8\u7EA7<code>oneof</code>,<code>enum</code>,\u548C\u6269\u5C55<code>any</code>\u7B49</p><h3 id="\u57FA\u672C\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u672C\u7C7B\u578B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>message Gen {
  int32 age = 1;  // int\u6709\u5F88\u591A\u7C7B\u578B\uFF0Cint32,64\u4EE5\u53CA\u65E0\u7B26\u53F7\u7684\u7B49
  string name = 2;
  bool home = 3;
  bytes avatar = 4;
}

type Gen struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Age    int32  \`protobuf:&quot;varint,1,opt,name=age,proto3&quot; json:&quot;age,omitempty&quot;\` // int\u6709\u5F88\u591A\u7C7B\u578B\uFF0Cint32,64\u4EE5\u53CA\u65E0\u7B26\u53F7\u7684\u7B49
	Name   string \`protobuf:&quot;bytes,2,opt,name=name,proto3&quot; json:&quot;name,omitempty&quot;\`
	Home   bool   \`protobuf:&quot;varint,3,opt,name=home,proto3&quot; json:&quot;home,omitempty&quot;\`
	Avatar []byte \`protobuf:&quot;bytes,4,opt,name=avatar,proto3&quot; json:&quot;avatar,omitempty&quot;\`
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u4E49\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7C7B\u578B" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7C7B\u578B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>message Info {
  string name = 1;
}
message UserDesign {
  int32 age = 1;
  Info info = 2;
}

type Info struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string \`protobuf:&quot;bytes,1,opt,name=name,proto3&quot; json:&quot;name,omitempty&quot;\`
}

type UserDesign struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Age  int32 \`protobuf:&quot;varint,1,opt,name=age,proto3&quot; json:&quot;age,omitempty&quot;\`
	Info *Info \`protobuf:&quot;bytes,2,opt,name=info,proto3&quot; json:&quot;info,omitempty&quot;\`
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u7EC4-\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4-\u5207\u7247" aria-hidden="true">#</a> \u6570\u7EC4/\u5207\u7247</h3><p>\u5728\u5B57\u6BB5\u524D\u9762\u4F7F\u7528<code>repeated</code>\u8FDB\u884C\u4FEE\u9970</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>message Hobby {
  repeated string name = 1;
}

type Hobby struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name []string \`protobuf:&quot;bytes,1,rep,name=name,proto3&quot; json:&quot;name,omitempty&quot;\`
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><p>\u652F\u6301map\u5B9A\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>message Hobby {
  map&lt;string, int32&gt; user = 1;
}

type Hobby struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	User map[string]int32 \`protobuf:&quot;bytes,1,rep,name=user,proto3&quot; json:&quot;user,omitempty&quot; protobuf_key:&quot;bytes,1,opt,name=key,proto3&quot; protobuf_val:&quot;varint,2,opt,name=value,proto3&quot;\`
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enum" tabindex="-1"><a class="header-anchor" href="#enum" aria-hidden="true">#</a> enum</h3><p>\u679A\u4E3E\u5176\u5B9E\u5C31\u662F\u5B9A\u4E49\u4E00\u7CFB\u5217\u5E38\u91CF\uFF0C\u7136\u540E\u8FD9\u4E9B\u5E38\u91CF\u4EE5\u66F4\u52A0\u8BED\u4E49\u7684\u5F62\u5F0F\u8868\u793A\u3002\u5728\u683C\u5F0F\u4E0A\u6CA1\u6709\u7279\u522B\u8981\u6C42\uFF0C\u5176\u5B9E\u4E5F\u662F\u4E00\u4E2Aint32\u7C7B\u578B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>enum Corpus {
  UNIVERSAL = 0;
  WEB = 1;
}
message SearchRequest {
  Corpus corpus = 1;
}

// \u5176\u5B9E\u5C31\u662F\u4E00\u4E2Aint32\u7C7B\u578B
type Corpus int32

type SearchRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Corpus Corpus \`protobuf:&quot;varint,1,opt,name=corpus,proto3,enum=service.Corpus&quot; json:&quot;corpus,omitempty&quot;\`
}

// \u751F\u6210\u5E38\u91CF
const (
	Corpus_UNIVERSAL Corpus = 0
	Corpus_WEB       Corpus = 1
)

// \u800C\u4E14\u4F1A\u751F\u6210\u5E38\u91CF\u548C\u8BED\u8A00\u5185\u5BB9\u7684\u5173\u8054\u5173\u7CFB
var (
	Corpus_name = map[int32]string{
		0: &quot;UNIVERSAL&quot;,
		1: &quot;WEB&quot;,
	}
	Corpus_value = map[string]int32{
		&quot;UNIVERSAL&quot;: 0,
		&quot;WEB&quot;:       1,
	}
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="oneof" tabindex="-1"><a class="header-anchor" href="#oneof" aria-hidden="true">#</a> oneof</h3><p>\u8FD9\u4E2A\u4E5F\u662F\u7ECF\u5E38\u4F1A\u7528\u5230\u7684\uFF0C\u4F8B\u5982\u5728\u8FDB\u884C\u4F20\u8F93\u6570\u636E\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u662F\u4E24\u79CD\u7C7B\u578B\uFF08\u4E0D\u786E\u5B9A\u662Fint,\u8FD8\u662Fstring\uFF09\uFF0C\u6240\u4EE5\u4E00\u822C<code>go</code>\u4E2D\u5C31\u662F\u5B9A\u4E49\u63A5\u53E3\u6765\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>message Profile {
  string name = 1;
  oneof avatar {  // \u4F20\u9012\u5934\u50CF\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u80FD\u662F\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6570
    string image_url = 2;
    bytes image_data = 3;
  }
}

// \u6240\u4EE5\u7F16\u8BD1\u7684\u65F6\u5019\uFF0C\u4F1A\u751F\u6210image_url,image_data\u7ED3\u6784\u4F53\uFF0C\u6765\u5B58\u653E\u4E0D\u503C\u3002\u7136\u540EAvatar \u5C31\u662F\u5B9A\u4E49\u6210\u4E00\u4E2A\u63A5\u53E3\uFF0C\u7136\u540Eimage_url,image_data\u7ED3\u6784\u4F53\u90FD\u5B9E\u73B0\u8FD9\u4E2A\u63A5\u53E3
// \u63A5\u6536\u7AEF\u5728\u63A5\u6536\u6570\u636E\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u6839\u636E\u65AD\u8A00\u5339\u914D\uFF0C\u505A\u4E0D\u540C\u7684\u64CD\u4F5CAvatar.(*ImageUrl)

type Profile struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string \`protobuf:&quot;bytes,1,opt,name=name,proto3&quot; json:&quot;name,omitempty&quot;\`
	// Types that are assignable to Avatar:
	//	*Profile_ImageUrl
	//	*Profile_ImageData
	Avatar isProfile_Avatar \`protobuf_oneof:&quot;avatar&quot;\`
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> any</h3><p><code>any</code>\u7C7B\u578B\u5176\u5B9E\u5C31\u662F\u5728<code>go</code>\u4E2D\u7684<code>interface</code>\uFF0C\u4E0D\u77E5\u9053\u6570\u636E\u7684\u5177\u4F53\u7C7B\u578B\uFF0C\u5728\u63A5\u6536\u5230\u6570\u636E\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u5148\u8981\u5224\u65AD\u671F\u7C7B\u578B\uFF0C\u7136\u540E\u5728\u8FDB\u884C\u4F7F\u7528\uFF1A\u8FD9\u4E2A\u548C<code>oneof</code>\u5DEE\u4E0D\u591A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &quot;google/protobuf/any.proto&quot;;

message A {
  string message = 1;
  google.protobuf.Any details = 2;
}

message User {
  string  name = 1;
}

# \u5C06\u4E00\u4E2Amessage\u8F6C\u6362\u4E3Aany\u7C7B\u578B
any, _ := anypb.New(&amp;service.User{Name: &quot;xx&quot;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u6790any\u5230\u5177\u4F53\u7C7B\u578B</strong></p><p>\u89E3\u6790any <code>any, _ := anypb.New(&amp;service.User{Name: &quot;xx&quot;})</code></p><p><strong>1. \u77E5\u9053Any\u7684\u5177\u4F53\u7C7B\u578B\uFF0C\u76F4\u63A5\u8F6C\u6362</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// any\u662F*Any\u7C7B\u578B\u7684\u6307\u9488\uFF0C\u8FD9\u4E2A\u662F\u901A\u8FC7\u5BF9\u65B9\u4F20\u9012\u8FC7\u6765\u7684</span>
user <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>service<span class="token punctuation">.</span>User<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">:=</span> any<span class="token punctuation">.</span><span class="token function">UnmarshalTo</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;user any\u89E3\u6790\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. \u4E0D\u77E5\u9053Any\u7684\u7C7B\u578B\uFF0C\u901A\u8FC7\u65AD\u8A00</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u5148\u5C06any\u8F6C\u6362\u4E3Amessage\u7C7B\u578B</span>
<span class="token comment">// \u7136\u540E\u901A\u8FC7message\u6765\u8FDB\u884C\u65AD\u8A00\uFF0C\u56E0\u4E3Aproto\u4E2D\u5B9A\u4E49\u7684message\u751F\u6210go\u4EE3\u7801\u90FD\u5B9E\u73B0message\u63A5\u53E3</span>
message<span class="token punctuation">,</span> err <span class="token operator">:=</span> any<span class="token punctuation">.</span><span class="token function">UnmarshalNew</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
user<span class="token punctuation">,</span> ok <span class="token operator">:=</span> message<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token operator">*</span>service<span class="token punctuation">.</span>User<span class="token punctuation">)</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ok<span class="token punctuation">,</span> user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. \u901A\u8FC7Switch\u7C7B\u578B\u5224\u65AD</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>message<span class="token punctuation">,</span> err <span class="token operator">:=</span> any<span class="token punctuation">.</span><span class="token function">UnmarshalNew</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">switch</span> m <span class="token operator">:=</span> message<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token operator">*</span>service<span class="token punctuation">.</span>User<span class="token punctuation">:</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B\u662Fuser&quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
<span class="token keyword">default</span><span class="token punctuation">:</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B\u672A\u77E5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. \u901A\u8FC7\u5185\u7F6E\u65B9\u6CD5\u5224\u65AD</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>user <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>service<span class="token punctuation">.</span>User<span class="token punctuation">)</span>
<span class="token keyword">if</span> ok <span class="token operator">:=</span> any<span class="token punctuation">.</span><span class="token function">MessageIs</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
    <span class="token boolean">_</span> <span class="token operator">=</span> any<span class="token punctuation">.</span><span class="token function">UnmarshalTo</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp" aria-hidden="true">#</a> timestamp</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &quot;google/protobuf/timestamp.proto&quot;;

message User {
  string  name = 1;
  google.protobuf.Timestamp create_time = 2;
}

# \u64CD\u4F5C
user := service.User{
    Name:       &quot;qiqi&quot;,
    CreateTime: timestamppb.Now(),
}

user.CreateTime = timestamppb.New(time.Now())
fmt.Println(user.CreateTime.IsValid())

// \u53EF\u4EE5\u5C06timestamppb\u8F6C\u6362\u4E3A\u5BF9\u5E94\u8BED\u8A00\u7684\u65F6\u95F4\u6233\u5904\u7406,\u7136\u540E\u5C31\u6839\u636E\u6BCF\u4E2A\u8BED\u8A00\u81EA\u5DF1\u5904\u7406\u4E86
goTimestamp := user.CreateTime.AsTime()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,63),o=[t];function l(d,c){return s(),e("div",null,o)}var u=n(i,[["render",l],["__file","01-protoc-gen-go.html.vue"]]);export{u as default};

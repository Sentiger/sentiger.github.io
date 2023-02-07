import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as r,c as k,a as n,b as e,w as t,d as s,e as d}from"./app.edb176f4.js";const v={},g=n("code",null,"proto-gen-go",-1),m=s("\u4E0D\u4F1A\u751F\u6210\u65B9\u6CD5\uFF0C\u53EA\u4F1A\u751F\u6210"),b=n("code",null,"message",-1),f=s("\uFF0C\u901A\u8FC7"),h=n("code",null,"grpc",-1),_=s("\u63D2\u4EF6\u53EF\u4EE5\u751F\u6210\u5BF9\u5E94\u7684"),w=n("code",null,"grpc",-1),y=s("\u65B9\u6CD5: "),x={href:"https://grpc.io/docs/languages/go/quickstart/",target:"_blank",rel:"noopener noreferrer"},q=s("\u5B89\u88C5\u5730\u5740"),H=d(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
go <span class="token function">install</span> google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

<span class="token comment"># \u4F1A\u5C06protoc-gen-go-grpc\u5B89\u88C5\u5230gobin\u76EE\u5F55\u4E0B\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5C31\u52A0\u4E0A\u73AF\u5883\u53D8\u91CF\u5C31\u884C</span>
\u279C  sentiger.github.io git:<span class="token punctuation">(</span>master<span class="token punctuation">)</span> \u2717 <span class="token function">whereis</span> protoc-gen-go-grpc 
protoc-gen-go-grpc: /Users/qi/go/sdk/go1.17.12/bin/protoc-gen-go-gr

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p><strong>\u57FA\u7840\u4EE3\u7801\u7ED3\u6784</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 go.mod
\u251C\u2500\u2500 go.sum
\u251C\u2500\u2500 server.go
\u2514\u2500\u2500 service
    \u251C\u2500\u2500 helloworld.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5B9A\u4E49protobuf\u6587\u4EF6</strong></p><div class="language-protobuf ext-protobuf line-numbers-mode"><pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">option</span> go_package <span class="token operator">=</span> <span class="token string">&quot;grpc/service&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> <span class="token keyword">service</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">HelloRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">HelloReply</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> message <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">service</span> <span class="token class-name">Greeter</span><span class="token punctuation">{</span>
  <span class="token keyword">rpc</span> <span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token class-name">HelloRequest</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token punctuation">(</span><span class="token class-name">HelloReply</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528\u547D\u4EE4\u751F\u6210\u5BF9\u5E94\u7684go\u4EE3\u7801</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>protoc --go_out<span class="token operator">=</span>. --go_opt<span class="token operator">=</span>paths<span class="token operator">=</span>source_relative --go-grpc_out<span class="token operator">=</span>. --go-grpc_opt<span class="token operator">=</span>paths<span class="token operator">=</span>source_relative helloworld.proto 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u751F\u6210\u4EE3\u7801\u7ED3\u6784</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 go.mod
\u251C\u2500\u2500 go.sum
\u251C\u2500\u2500 server.go
\u2514\u2500\u2500 service
    \u251C\u2500\u2500 helloworld.pb.go
    \u251C\u2500\u2500 helloworld.proto
    \u2514\u2500\u2500 helloworld_grpc.pb.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u751F\u6210grpc\u670D\u52A1</strong></p>`,12),C=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"context"'),s(`
	`),n("span",{class:"token string"},'"google.golang.org/grpc"'),s(`
	`),n("span",{class:"token string"},'"grpc/service"'),s(`
	`),n("span",{class:"token string"},'"log"'),s(`
	`),n("span",{class:"token string"},'"net"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"type"),s(" server "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
	service`),n("span",{class:"token punctuation"},"."),s(`UnimplementedGreeterServer
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token operator"},"*"),s("server"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"SayHello"),n("span",{class:"token punctuation"},"("),s("ctx context"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},","),s(" req "),n("span",{class:"token operator"},"*"),s("service"),n("span",{class:"token punctuation"},"."),s("HelloRequest"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("service"),n("span",{class:"token punctuation"},"."),s("HelloReply"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"&"),s("service"),n("span",{class:"token punctuation"},"."),s("HelloReply"),n("span",{class:"token punctuation"},"{"),s("Message"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"\u56DE\u590D\u6D88\u606F"'),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	lis`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" net"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Listen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"tcp"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'":8088"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatal"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	s `),n("span",{class:"token operator"},":="),s(" grpc"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewServer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	service`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"RegisterGreeterServer"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("server"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"server listening at %v"'),n("span",{class:"token punctuation"},","),s(" lis"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Addr"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},":="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Serve"),n("span",{class:"token punctuation"},"("),s("lis"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatalf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"failed to serve: %v"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"context"'),s(`
	`),n("span",{class:"token string"},'"google.golang.org/grpc"'),s(`
	`),n("span",{class:"token string"},'"google.golang.org/grpc/credentials/insecure"'),s(`
	`),n("span",{class:"token string"},'"grpc/service"'),s(`
	`),n("span",{class:"token string"},'"log"'),s(`
	`),n("span",{class:"token string"},'"time"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	conn`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" grpc"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Dial"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"127.0.0.1:8088"'),n("span",{class:"token punctuation"},","),s(" grpc"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WithTransportCredentials"),n("span",{class:"token punctuation"},"("),s("insecure"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewCredentials"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatalf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"did not connect: %v"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(" conn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	c `),n("span",{class:"token operator"},":="),s(" service"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewGreeterClient"),n("span",{class:"token punctuation"},"("),s("conn"),n("span",{class:"token punctuation"},")"),s(`

	ctx`),n("span",{class:"token punctuation"},","),s(" cancel "),n("span",{class:"token operator"},":="),s(" context"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WithTimeout"),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Background"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" time"),n("span",{class:"token punctuation"},"."),s("Second"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(),n("span",{class:"token function"},"cancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	r`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" c"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"SayHello"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("service"),n("span",{class:"token punctuation"},"."),s("HelloRequest"),n("span",{class:"token punctuation"},"{"),s("Name"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"\u4F60\u597D"'),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatalf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"could not greet: %v"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Greeting: %s"'),n("span",{class:"token punctuation"},","),s(" r"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetMessage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function S(N,G){const o=a("ExternalLinkIcon"),c=a("CodeTabs");return r(),k("div",null,[n("p",null,[g,m,b,f,h,_,w,y,n("a",x,[q,e(o)])]),H,e(c,{data:[{title:"\u670D\u52A1\u7AEF"},{title:"\u5BA2\u6237\u7AEF"}],"tab-id":"language"},{tab0:t(({title:l,value:i,isActive:p})=>[C]),tab1:t(({title:l,value:i,isActive:p})=>[R]),_:1})])}var F=u(v,[["render",S],["__file","02-grpc-install.html.vue"]]);export{F as default};

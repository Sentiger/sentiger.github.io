import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as u,c as i,b as r,w as a,e as k,a as n,d as s}from"./app.34caa176.js";const d={},m=k('<h2 id="\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B" aria-hidden="true">#</a> \u6D41\u7A0B</h2><ol><li>\u5BA2\u6237\u7AEF\u53D1\u9001<code>request</code>\u8BF7\u6C42</li><li>\u670D\u52A1\u7AEF\u54CD\u5E94<code>response</code></li><li>\u5BA2\u6237\u7AEF\u53EF\u4EE5\u83B7\u53D6\u8BF7\u6C42header\u7B49\u5404\u79CD\u5B8C\u6574\u4FE1\u606F</li><li>\u670D\u52A1\u7AEF\u4E5F\u662F\u53EF\u4EE5\u83B7\u53D6\u5230http\u8BF7\u6C42\u7684\u5934\u4FE1\u606F\u7B49\u5B8C\u6574\u4FE1\u606F</li></ol><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2>',3),v=n("div",{class:"language-protobuf ext-protobuf line-numbers-mode"},[n("pre",{class:"language-protobuf"},[n("code",null,[n("span",{class:"token comment"},"// product.proto"),s(`
`),n("span",{class:"token keyword"},"syntax"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"proto3"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"option"),s(" go_package "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"./;services"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"package"),s(" services"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"message"),s(),n("span",{class:"token class-name"},"Product"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token builtin"},"int32"),s(" id "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token builtin"},"string"),s(" name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token builtin"},"string"),s(" description "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"message"),s(),n("span",{class:"token class-name"},"ProductId"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token builtin"},"int32"),s(" value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"service"),s(),n("span",{class:"token class-name"},"ProductInfo"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"rpc"),s(),n("span",{class:"token function"},"getProduct"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ProductId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token keyword"},"returns"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Product"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// product.server.go"),s(`
`),n("span",{class:"token operator"},"..."),s(`

`),n("span",{class:"token keyword"},"type"),s(" ProductService "),n("span",{class:"token keyword"},"struct"),s(),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token punctuation"},"("),s("p "),n("span",{class:"token operator"},"*"),s("ProductService"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token function"},"GetProduct"),n("span",{class:"token punctuation"},"("),s("ctx context"),n("span",{class:"token punctuation"},"."),s("Context"),n("span",{class:"token punctuation"},","),s(" id "),n("span",{class:"token operator"},"*"),s("ProductId"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"*"),s("Product"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token builtin"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"&"),s("Product"),n("span",{class:"token punctuation"},"{"),s(`
		Id`),n("span",{class:"token punctuation"},":"),s("          id"),n("span",{class:"token punctuation"},"."),s("Value"),n("span",{class:"token punctuation"},","),s(`
		Name`),n("span",{class:"token punctuation"},":"),s("        "),n("span",{class:"token string"},'"\u83B7\u53D6\u5546\u54C1"'),s(),n("span",{class:"token operator"},"+"),s(" strconv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Itoa"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"int"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},"."),s("Value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
		Description`),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"\u5546\u54C1\u63CF\u8FF0"'),s(),n("span",{class:"token operator"},"+"),s(" strconv"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Itoa"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"int"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},"."),s("Value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"nil"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token operator"},"..."),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// server.go"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"TestServerWithUnaryServerInterceptor"),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"*"),s("testing"),n("span",{class:"token punctuation"},"."),s("T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	rpcServer `),n("span",{class:"token operator"},":="),s(" grpc"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewServer"),n("span",{class:"token punctuation"},"("),s(`
		grpc`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"UnaryInterceptor"),n("span",{class:"token punctuation"},"("),s("productUnaryInterceptor"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
		grpc`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"StreamInterceptor"),n("span",{class:"token punctuation"},"("),s("productUnaryStreamInterceptor"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},")"),s(`
	services`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"RegisterProductInfoServer"),n("span",{class:"token punctuation"},"("),s("rpcServer"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("services"),n("span",{class:"token punctuation"},"."),s("ProductService"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	lis`),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},":="),s(" net"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Listen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"tcp"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'":8090"'),n("span",{class:"token punctuation"},")"),s(`
	log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Fatalln"),n("span",{class:"token punctuation"},"("),s("rpcServer"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Serve"),n("span",{class:"token punctuation"},"("),s("lis"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-go ext-go line-numbers-mode"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token comment"},"// client.go"),s(`
`),n("span",{class:"token comment"},"// \u666E\u901A\u5BA2\u6237\u7AEFrequest-response\u6A21\u5F0F"),s(`
`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"TestClient"),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"*"),s("testing"),n("span",{class:"token punctuation"},"."),s("T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	conn`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" grpc"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Dial"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'":8090"'),n("span",{class:"token punctuation"},","),s(`
		grpc`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WithTransportCredentials"),n("span",{class:"token punctuation"},"("),s("insecure"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewCredentials"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
		grpc`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WithUnaryInterceptor"),n("span",{class:"token punctuation"},"("),s("productInterceptor"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u8FDE\u63A5\u9519\u8BEF"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(),n("span",{class:"token keyword"},"func"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token boolean"},"_"),s(),n("span",{class:"token operator"},"="),s(" conn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"// \u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4"),s(`
	clientDeadline `),n("span",{class:"token operator"},":="),s(" time"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Add"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Duration"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"*"),s(" time"),n("span",{class:"token punctuation"},"."),s("Second"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	ctx`),n("span",{class:"token punctuation"},","),s(" cancel "),n("span",{class:"token operator"},":="),s(" context"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"WithDeadline"),n("span",{class:"token punctuation"},"("),s("context"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Background"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" clientDeadline"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"defer"),s(),n("span",{class:"token function"},"cancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	client `),n("span",{class:"token operator"},":="),s(" services"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"NewProductInfoClient"),n("span",{class:"token punctuation"},"("),s("conn"),n("span",{class:"token punctuation"},")"),s(`
	product`),n("span",{class:"token punctuation"},","),s(" err "),n("span",{class:"token operator"},":="),s(" client"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GetProduct"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"&"),s("services"),n("span",{class:"token punctuation"},"."),s("ProductId"),n("span",{class:"token punctuation"},"{"),s("Value"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"if"),s(" err "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token boolean"},"nil"),s(),n("span",{class:"token punctuation"},"{"),s(`
		log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u670D\u52A1\u7AEF\u9519\u8BEF"'),n("span",{class:"token punctuation"},","),s(" err"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),s("product"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(h,y){const c=p("CodeTabs");return u(),i("div",null,[m,r(c,{data:[{title:"Protobuf"},{title:"\u670D\u52A1\u7AEF\u5B9E\u73B0"},{title:"Server"},{title:"Client"}],"tab-id":"language"},{tab0:a(({title:t,value:e,isActive:o})=>[v]),tab1:a(({title:t,value:e,isActive:o})=>[b]),tab2:a(({title:t,value:e,isActive:o})=>[g]),tab3:a(({title:t,value:e,isActive:o})=>[f]),_:1})])}var x=l(d,[["render",_],["__file","02-\u4E00\u5143.html.vue"]]);export{x as default};

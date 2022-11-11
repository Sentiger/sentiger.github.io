import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as l,c as r,a as e,b as d,d as n,e as c}from"./app.29746ec8.js";var t="/assets/certificate.67ebdf05.png";const v={},u=e("h2",{id:"\u5DE5\u5177",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5DE5\u5177","aria-hidden":"true"},"#"),n(" \u5DE5\u5177")],-1),o={href:"https://www.ssleye.com/ssltool/cer_check.html",target:"_blank",rel:"noopener noreferrer"},b=n("\u8BC1\u4E66\u5DE5\u5177"),m=c(`<h2 id="rsa" tabindex="-1"><a class="header-anchor" href="#rsa" aria-hidden="true">#</a> RSA</h2><p>RSA\u662F\u4E00\u5957\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u52A0\u5BC6\u89E3\u5BC6\u7531\u4E00\u5BF9\u79D8\u94A5\u5BF9\u7EC4\u6210\u3002\u79C1\u94A5\u683C\u5F0F\u4E00\u822C\u540E\u7F00\u4E3A.key\uFF0C\u516C\u94A5\u4FE1\u606F\u662F_pub.key\u3002\u4ECE\u79C1\u94A5\u4E2D\u80FD\u63D0\u53D6\u516C\u94A5\u4FE1\u606F\u3002</p><h3 id="\u76F8\u5173\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u547D\u4EE4" aria-hidden="true">#</a> \u76F8\u5173\u547D\u4EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u751F\u6210\u79C1\u94A5\uFF08\u8FD9\u4E2A\u91CC\u9762\u4E5F\u5305\u542B\u516C\u94A5\u4FE1\u606F\uFF09
openssl genrsa -out ca.key 2048

2. \u63D0\u53D6\u516C\u94A5
openssl rsa -in ca.key -pubout -out ca_pub.key

3. \u52A0\u5BC6\u4FE1\u606F(\u516C\u94A5\u52A0\u5BC6)
openssl rsautl -encrypt -in hello.txt -inkey ca_pub.key -pubin -out hell.en

4. \u89E3\u5BC6(\u79C1\u94A5\u89E3\u5BC6)
openssl rsautl -decrypt -in hell.en -inkey ca.key -out hello.dec

5. \u79C1\u94A5\u7B7E\u540D
openssl dgst -sha1 -sign ca.key -out hello.signed hello.txt

6. \u516C\u94A5\u9A8C\u7B7E
openssl dgst -sha1 -verify ca_pub.key -signature  hello.signed hello.txt

7. \u67E5\u770B\u79C1\u94A5\u4FE1\u606F
openssl rsa -noout -text -in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="csr-certificate-signing-request" tabindex="-1"><a class="header-anchor" href="#csr-certificate-signing-request" aria-hidden="true">#</a> CSR \uFF08certificate signing request\uFF09</h2><p>\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6\uFF0C\u6309\u7167\u4E00\u5B9A\u7684\u683C\u5F0F\u628A\u4EE5\u4E0B\u76F8\u5173\u4FE1\u606F\u5199\u5165\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D</p><ol><li>\u5305\u542B\u57FA\u672C\u4FE1\u606F\uFF08\u7EC4\u7EC7\uFF0C\u56FD\u5BB6\uFF0C\u4E3B\u673A\u7B49\uFF09</li><li>\u5305\u542B\u52A0\u5BC6\u7B97\u6CD5</li><li>\u5305\u542B\u516C\u94A5\u4FE1\u606F</li></ol><h3 id="\u76F8\u5173\u547D\u4EE4-1" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u547D\u4EE4-1" aria-hidden="true">#</a> \u76F8\u5173\u547D\u4EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u751F\u6210\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6
openssl req -new -key ca.key -out ca.csr
# \u7EC4\u7EC7\u53EF\u4EE5\u662F\u591A\u4E2A\uFF0C\u8FD9\u6837\u662F\u4E00\u4E2A\u6570\u7EC4
openssl req -new -key ca.key -subj &#39;/CN=jbeda/O=app1/O=app2&#39; -out ca.csr

2. \u63D0\u53D6\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6\u91CC\u9762\u4FE1\u606F
openssl req -in ca.csr -text -noout

3. \u63D0\u53D6\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6\u91CC\u9762\u7684\u516C\u94A5
openssl req -in ca.csr -pubkey  -noout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#\u8BC1\u4E66" aria-hidden="true">#</a> \u8BC1\u4E66</h2><p>\u6240\u8C13\u7684\u8BC1\u4E66\u5C31\u662F\u901A\u8FC7\u7B2C\u4E09\u65B9\u8BA4\u8BC1\u673A\u6784\u6765\u7ED9\u81EA\u5DF1\u7B7E\u7F72\u76D6\u7AE0\u3002\u5177\u4F53\u8FC7\u7A0B</p><p><img src="`+t+`" alt="img.png" loading="lazy"></p><h3 id="\u76F8\u5173\u547D\u4EE4-2" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u547D\u4EE4-2" aria-hidden="true">#</a> \u76F8\u5173\u547D\u4EE4</h3><p><strong>\u751F\u6210CA\u6839\u8BC1\u4E66</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. (\u81EA\u7B7E\u8BC1\u4E66)\u901A\u8FC7\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6\u751F\u6210\u8BC1\u4E66 (\u53EF\u4EE5\u751F\u6210\u4EFB\u610F\u7684\u8BC1\u4E66\uFF0C\u4F7F\u7528\u8BE5\u8BC1\u4E66\u53BB\u751F\u6210\u5176\u4ED6\u8BC1\u4E66\uFF0C\u7136\u800C\u8FD9\u4E2A\u8BC1\u4E66\u5C31\u53EB\u505A\u6839\u8BC1\u4E66\uFF09
openssl x509 -req -days 365 -in ca.csr -signkey ca.key -out ca.crt

2. \u67E5\u770B\u8BC1\u4E66\u4FE1\u606F
openssl x509 -noout -text -in ca.crt

3. \u63D0\u53D6\u8BC1\u4E66\u516C\u94A5
openssl x509 -pubkey -noout -in ca.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u901A\u8FC7\u6839\u8BC1\u4E66\u751F\u6210\u670D\u52A1\u7AEF\u8BC1\u4E66</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u751F\u6210\u670D\u52A1\u7AEF\u79C1\u94A5
openssl genrsa -out server.key 2048

2. \u63D0\u53D6\u670D\u52A1\u7AEF\u516C\u94A5
openssl rsa -in server.key -pubout -out server_pub.key

3. \u751F\u6210\u670D\u52A1\u7AEF\u8BC1\u4E66\u8BF7\u6C42\u6587\u4EF6
openssl req -new -key server.key -out server.csr

4. \u901A\u8FC7CA\u673A\u6784\u7B7E\u7F72\u670D\u52A1\u7AEF\u8BC1\u4E66(\u8FD9\u4E2A\u8BC1\u4E66\u91CC\u9762\u5305\u542Bserver\u7684csr\u57FA\u672C\u4FE1\u606F\u4EE5\u53CA\u7B7E\u7F72CA\u673A\u6784\u7684CSR\u4FE1\u606F)
openssl x509 -req -sha256 -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -days 3650 -out server.crt

5. \u67E5\u770B\u751F\u6210\u7684\u8BC1\u4E66\u4FE1\u606F
openssl x509 -noout -text -in server.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u9A8C\u8BC1\u8BC1\u4E66\u662F\u5426\u662FCA\u7B7E\u7F72\u7684</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>openssl verify -CAfile ca.crt server.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="https\u9A8C\u8BC1\u8FC7\u7A0B-\u4E3B\u8981" tabindex="-1"><a class="header-anchor" href="#https\u9A8C\u8BC1\u8FC7\u7A0B-\u4E3B\u8981" aria-hidden="true">#</a> https\u9A8C\u8BC1\u8FC7\u7A0B\uFF08\u4E3B\u8981\uFF09</h2><ol><li>\u5BA2\u6237\u7AEF\u8BF7\u6C42\u670D\u52A1\u7AEF\uFF0C\u670D\u52A1\u7AEF\u8FD4\u56DE\u5BA2\u6237\u7AEF\u8BC1\u4E66\u6587\u4EF6\uFF08crt\uFF09</li><li>\u5BA2\u6237\u7AEF\u9A8C\u8BC1crt\u8BC1\u4E66\u627E\u5230\u672C\u5730\u7684ca\u6839\u8BC1\u4E66\uFF0C\u4E00\u822C\u6D4F\u89C8\u5668\u90FD\u4F1A\u5B89\u88C5\uFF08\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u662F\u9A8C\u8BC1\u670D\u52A1\u7AEF\u8BC1\u4E66\u662F\u5426\u662F\u6839\u8BC1\u4E66\u9881\u53D1\u7684\uFF09<code>openssl verify -CAfile ca.crt server.crt</code></li><li>\u9A8C\u8BC1\u901A\u8FC7\u5219\u63D0\u53D6\u670D\u52A1\u7AEF\u8BC1\u4E66\u516C\u94A5\u9A8C\u8BC1\u53D1\u9001\u8FC7\u6765\u7684\u5185\u5BB9\u3002\uFF08\u751F\u6210\u63A5\u4E0B\u6765\u7684\u5BF9\u79F0\u52A0\u5BC6\u516C\u94A5\uFF09</li><li>\u4EA4\u6362\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u7684\u516C\u94A5\u548C\u9009\u62E9\u5BF9\u79F0\u52A0\u5BC6\u7684\u7B97\u6CD5</li><li>\u4F7F\u7528\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u52A0\u5BC6\u4F20\u8F93\u5185\u5BB9</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> https://127.0.0.1:8080 --cacert ca.crt 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22);function p(h,g){const s=a("ExternalLinkIcon");return l(),r("div",null,[u,e("ul",null,[e("li",null,[e("a",o,[b,d(s)])])]),m])}var k=i(v,[["render",p],["__file","02-openssl.html.vue"]]);export{k as default};

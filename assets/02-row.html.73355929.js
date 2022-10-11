import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,e}from"./app.bd6220ad.js";var p="/assets/innodb_row_compact.2899a211.png";const o={},r=e('<p>MySQL\u63D0\u4F9B\u5B58\u50A8\u7684\u63A5\u53E3\u662F\u5E95\u5C42\u7684\u5B58\u50A8\u5F15\u64CE\uFF0C\u6240\u4EE5\u6570\u636E\u4EE5\u4EC0\u4E48\u6837\u7684\u65B9\u5F0F\u5B58\u50A8\u90FD\u662F\u9760\u5B58\u50A8\u5F15\u64CE\u7684\u5B9E\u73B0\uFF0C\u53CD\u6B63\u5BF9\u4E0A\u5C42server\u53EA\u63D0\u4F9B\u63A5\u53E3\u8C03\u7528\u800C\u5DF2\u3002</p><p>\u5BF9\u4E8Einnodb\u5B58\u50A8\u5F15\u64CE\u4E2D\u7684Compact\u683C\u5F0F\u5B58\u50A8\u662F\u600E\u4E48\u6837\u7684\u8BBE\u8BA1\uFF1F</p><h2 id="\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784" aria-hidden="true">#</a> \u7ED3\u6784</h2><p><img src="'+p+'" alt="innodb_row_compact.png" loading="lazy"></p><p>\u4E00\u6761\u8BB0\u5F55\u5206\u4E3A\u8BB0\u5F55\u989D\u5916\u4FE1\u606F\u548C\u771F\u5B9E\u6570\u636E\uFF0C\u989D\u5916\u4FE1\u606F\u5176\u5B9E\u5C31\u662F\u5BF9\u8FD9\u6761\u6570\u636E\u7684\u4E00\u4E9B\u9650\u5236\u63CF\u8FF0\u3002\u8FD9\u91CC\u7B80\u5355\u7684\u63CF\u8FF0\u4E0B\u8FD9\u51E0\u5757\u7684\u4F5C\u7528\u3002</p><h3 id="\u8BB0\u5F55\u989D\u5916\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u8BB0\u5F55\u989D\u5916\u4FE1\u606F" aria-hidden="true">#</a> \u8BB0\u5F55\u989D\u5916\u4FE1\u606F</h3><p><strong>\u53D8\u957F\u5B57\u6BB5\u5217\u8868</strong></p><ul><li>\u56E0\u4E3A\u6570\u636E\u5B58\u50A8\u7684\u65F6\u5019\u662F\u6309\u7740\u7684\uFF0C\u5C31\u662F\u6CA1\u6709\u6240\u8C13\u7684\u8FB9\u754C\uFF0C\u6240\u4EE5\u6CA1\u4E2A\u8BB0\u5F55\u4E2D\u7684\u5B57\u6BB5\u5B58\u50A8\u4E86\u591A\u957F\u7684\u6570\u636E\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u6765\u63CF\u8FF0\u4E0B\u3002 \u53D8\u957F\u5B57\u6BB5\u63CF\u8FF0\u5C31\u53EF\u4EE5\u4E3A\u53D8\u957F\u5B57\u6BB5\u63D0\u4F9B\u8FB9\u754C\u9650\u5236\u3002</li><li>\u5982\u679C\u4E00\u6761\u8BB0\u5F55\u4E2D\u6240\u6709\u5B57\u6BB5\u90FD\u662F\u5B9A\u957F\u7684\uFF0C\u5219\u53D8\u957F\u5B57\u6BB5\u5217\u8868\u662F\u4E3A\u7A7A\u7684\u3002</li><li>\u53D8\u957F\u5B57\u6BB5\u5217\u8868\u662F\u4E2A\u6570\u5B57\u7C7B\u578B\uFF0C\u5176\u5B9E\u4E5F\u6709\u957F\u5EA6\u7684\uFF0C\u4E0D\u53EF\u80FD\u76F4\u63A5\u7528Bigint\u6765\u5B58\u50A8\uFF0C\u6240\u4EE5\u8FD9\u91CC\u4E5F\u662F\u6709\u7B97\u6CD5\u7684\uFF0C\u6839\u636E\u8868\u4E2D\u7684\u7ED3\u6784varchar()\u957F\u5EA6+\u5B57\u7B26\u96C6\u6765\u8BA1\u7B97\u5B58\u50A8\u8FD9\u4E2A\u5B57\u6BB5\u7684\u6700\u5927\u957F\u5EA6\uFF0C\u5E94\u8BE5\u7528\u591A\u5C11\u5B57\u8282\u6765\u5B58\u50A8\u3002</li></ul><p><strong>NULL\u503C\u5217\u8868</strong></p><p>innodb \u4E5F\u662F\u4E3A\u4E86\u5B58\u50A8\u7684\u7A7A\u95F4\u505A\u51FA\u4F18\u5316\uFF0C\u5BF9\u4E8E\u53EF\u4E3Anull\u7684\u5B57\u6BB5\u4E0D\u5B58\u50A8\uFF0C\u76F4\u63A5\u6807\u8BB0\u4E0B\u4F4D\u7F6E\u5C31\u884C\u3002\u8FD9\u4E2A\u548C\u53D8\u957F\u5B57\u6BB5\u4E00\u4E2A\u542B\u4E49\u3002</p><p><strong>\u8BB0\u5F55\u5934\u4FE1\u606F</strong></p><p>\u540E\u9762\u5177\u4F53\u5355\u72EC\u4ECB\u7ECD</p><h3 id="\u771F\u5B9E\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u771F\u5B9E\u6570\u636E" aria-hidden="true">#</a> \u771F\u5B9E\u6570\u636E</h3><p>\u4E00\u6761\u8BB0\u5F55\u5305\u542B\u989D\u5916\u4FE1\u606F\u548C\u771F\u5B9E\u6570\u636E\uFF0C\u771F\u5B9E\u6570\u636E\u4E2D\u9664\u4E86\u8868\u4E2D\u5B9A\u4E49\u7684\u5B57\u6BB5\u8FD8\u6709\u989D\u5916\u7684\u51E0\u4E2A\u5B57\u6BB5</p><p><strong>DB_ROW_ID</strong></p><p>\u5728\u521B\u5EFA\u8868\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u4E3B\u952E\uFF0C\u6216\u8005\u552F\u4E00\u5B57\u6BB5\uFF0C\u5219\u521B\u5EFA\u8868\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u7684\u521B\u5EFA\u4E00\u4E2Arow_id\u4F5C\u4E3A\u9690\u85CF\u552F\u4E00\u5B57\u6BB5</p><p><strong>DB_TRX_ID</strong></p><p>\u8FD9\u4E2A\u4E5F\u662F\u6709\u4E00\u4E2A\u9690\u85CF\u7684\u5217\uFF0C\u4E8B\u7269ID\u3002</p><p><strong>DB_ROLL_PRT</strong></p><p>\u4E8B\u7269\u56DE\u6EDA\u7684id</p><p><strong>\u5B9A\u4E49\u7684\u5217</strong></p><p>\u5269\u4F59\u7684\u5C31\u662F\u8868\u4E2D\u5B9A\u4E49\u7684\u5217\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>MySQL\u4E2D\u4E00\u6761\u8BB0\u5F55\u6700\u5927\u957F\u5EA6\u4E3A65535\u4E2A\u5B57\u8282=\u8BB0\u5F55\u7684\u989D\u5916\u4FE1\u606F\u957F\u5EA6+\u8868\u4E2D\u5B9A\u4E49\u7684\u5217\uFF08\u4E0D\u5305\u542B\u9690\u85CF\u5217\uFF09</p></div><h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><h3 id="varchar-char\u4E2D\u7684\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#varchar-char\u4E2D\u7684\u957F\u5EA6" aria-hidden="true">#</a> varchar/char\u4E2D\u7684\u957F\u5EA6</h3><p>\u5728\u521B\u5EFA\u8868\u7684\u65F6\u5019\uFF0Cvarchar(N)\uFF0Cchar(N)\uFF0C\u8FD9\u91CC\u7684N\u662F\u4EC0\u4E48\u5355\u4F4D\u5462\uFF1F</p><p>\u8FD9\u91CC\u7684N\u662F\u5B57\u7B26\u5355\u4F4D\uFF0C\u90A3\u4E48\u957F\u5EA6\u5C31\u662F\u4E00\u4E2A\u672A\u77E5\u7684\uFF0C\u9700\u8981\u6839\u636E\u5F53\u524D\u5B57\u6BB5\u7684\u5B57\u7B26\u96C6\u6765\u8BA1\u7B97\u957F\u5EA6</p><p>ascii\u5219\u662F\u4E00\u4E2A\u5B57\u7B26\u4E00\u4E2A\u5B57\u8282\uFF0Cutf8\u5219\u662F3\u4E2A\u5B57\u8282\u4E00\u4E2A\u5B57\u7B26\u3002</p><h3 id="varchar\u6700\u5927\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#varchar\u6700\u5927\u957F\u5EA6" aria-hidden="true">#</a> varchar\u6700\u5927\u957F\u5EA6</h3><p>\u4E0A\u9762\u4ECB\u7ECD\u4E86\uFF0CMySQL\u4E2D\u4E00\u884C\u7684\u6700\u5927\u957F\u5EA6\u662F65535\uFF0C\u90A3\u4E48varchar\u5219\u6700\u5927\u662F\u591A\u5C11\u5462\uFF1F</p><p>\u8FD9\u91CC\u8981\u770B\u8868\u7684\u989D\u5916\u4FE1\u606F+\u771F\u5B9E\u6570\u636E</p><p>\u989D\u5916\u4FE1\u606F\u5219\u662Fnull ,\u53D8\u957F\u5B57\u6BB5\u5217\u8868\u3002\u771F\u5B9E\u6570\u636E\uFF1A\u975E\u9690\u85CF\u5217\u957F\u5EA6</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>       <span class="token keyword">Table</span>: varchar_size_demo\n<span class="token keyword">Create</span> <span class="token keyword">Table</span>: <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>varchar_size_demo<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>c<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">65532</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>ascii ROW_FORMAT<span class="token operator">=</span>COMPACT\n<span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u8FD9\u91CCid\u662F\u5B9A\u957F\u7684\uFF0C\u975Enull\uFF0Cascii,\u6240\u4EE5\u5C31\u53601\u4E2A\u5B57\u8282 65535-1=65534</li><li>c \u975Enull\uFF0C\u53D8\u957F\u5B57\u6BB5\u56E0\u4E3A\u8981\u5B58\u50A865535\uFF0C\u5219\u9700\u89812\u4E2A\u5B57\u8282\u300265534-2=65532</li></ol>',34),t=[r];function c(i,l){return n(),s("div",null,t)}var h=a(o,[["render",c],["__file","02-row.html.vue"]]);export{h as default};
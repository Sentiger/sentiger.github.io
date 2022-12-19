import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,e}from"./app.2e6d6fcc.js";const t={},l=e(`<p>\u4F7F\u7528\u7684\u662F16\u683864G\u7684\u670D\u52A1\u5668</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">datadir</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql</span>
<span class="token key attr-name">socket</span><span class="token punctuation">=</span><span class="token value attr-value">/var/lib/mysql/mysql.sock</span>
<span class="token key attr-name">pid-file</span><span class="token punctuation">=</span><span class="token value attr-value">/var/run/mysqld/mysqld.pid</span>

<span class="token comment"># error log</span>
<span class="token key attr-name">log-error</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/mysql/mysqld.log</span>

<span class="token comment"># flow log config</span>
<span class="token key attr-name">slow_query_log</span><span class="token punctuation">=</span><span class="token value attr-value">ON</span>
<span class="token key attr-name">slow_query_log_file</span><span class="token punctuation">=</span><span class="token value attr-value">/var/log/mysql/slow_query.log</span>
<span class="token key attr-name">long_query_time</span><span class="token punctuation">=</span><span class="token value attr-value">2</span>
<span class="token key attr-name">log_output</span><span class="token punctuation">=</span><span class="token value attr-value">TABLE</span>
<span class="token key attr-name">log_timestamps</span><span class="token punctuation">=</span><span class="token value attr-value">SYSTEM</span>
<span class="token key attr-name">log_queries_not_using_indexes</span><span class="token punctuation">=</span><span class="token value attr-value">OFF</span>
<span class="token key attr-name">min_examined_row_limit</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">log_slow_admin_statements</span><span class="token punctuation">=</span><span class="token value attr-value">OFF</span>

<span class="token comment"># general</span>
<span class="token key attr-name">lower_case_table_names</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">character_set_server</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>
<span class="token key attr-name">validate_password_policy</span><span class="token punctuation">=</span><span class="token value attr-value">low</span>

<span class="token comment"># innodb</span>
<span class="token key attr-name">innodb_buffer_pool_size</span><span class="token punctuation">=</span><span class="token value attr-value">48049946624</span>
<span class="token key attr-name">join_buffer_size</span><span class="token punctuation">=</span><span class="token value attr-value">442368</span>
<span class="token key attr-name">sort_buffer_size</span><span class="token punctuation">=</span><span class="token value attr-value">262144</span>
<span class="token key attr-name">read_rnd_buffer_size</span><span class="token punctuation">=</span><span class="token value attr-value">442368</span>
<span class="token key attr-name">thread_cache_size</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">tmp_table_size</span><span class="token punctuation">=</span><span class="token value attr-value">2097152</span>

<span class="token comment">#thread_pool_size=2</span>

<span class="token key attr-name">symbolic-links</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[l];function i(c,o){return a(),s("div",null,p)}var v=n(t,[["render",i],["__file","100-\u81EA\u5EFAMySql\u53CA\u4F18\u5316.html.vue"]]);export{v as default};

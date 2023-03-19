import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.0613cd51.js";const i={},t=e(`<p>laravel(5.8)\u5B9E\u73B0\u961F\u5217\u63D0\u4F9B\u4E86\u4E00\u5957\u63A5\u53E3\uFF0C\u5E95\u5C42\u53EF\u4EE5\u5B58\u50A8\u9A71\u52A8\u53EF\u4EE5\u4F7F\u7528<code>redis</code>,<code>databases</code>\u7B49\u3002\u4E0B\u9762\u901A\u8FC7<code>database</code>\u9A71\u52A8\u6765\u4E86\u89E3\u4E0B\u961F\u5217\u5B9E\u73B0\u539F\u7406\u3002</p><h2 id="\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8868" aria-hidden="true">#</a> \u6570\u636E\u8868</h2><p>\u4F7F\u7528<code>database</code>\u4F5C\u4E3A\u961F\u5217\u9A71\u52A8\u7684\u8BDD\uFF0C\u4F7F\u7528\u4E0B\u9762\u8FD9\u5F20\u8868\u5C31\u53EF\u4EE5\u5B9E\u73B0\u961F\u5217\u7684\u6838\u5FC3\u529F\u80FD\uFF0C\u4E0B\u9762\u901A\u8FC7\u8FD9\u5F20\u8868\u6765\u4ECB\u7ECD\u4E0B\u961F\u5217\u6838\u5FC3\u529F\u80FD\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>CREATE TABLE \`jobs\` (
  \`id\` bigint unsigned NOT NULL AUTO_INCREMENT,
  \`queue\` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  \`payload\` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  \`attempts\` tinyint unsigned NOT NULL,
  \`reserved_at\` int unsigned DEFAULT NULL,
  \`available_at\` int unsigned NOT NULL,
  \`created_at\` int unsigned NOT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`jobs_queue_index\` (\`queue\`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE \`failed_jobs\` (
  \`id\` bigint unsigned NOT NULL AUTO_INCREMENT,
  \`connection\` text COLLATE utf8mb4_unicode_ci NOT NULL,
  \`queue\` text COLLATE utf8mb4_unicode_ci NOT NULL,
  \`payload\` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  \`exception\` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  \`failed_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>jobs\u961F\u5217\u5B57\u6BB5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>queue: \u961F\u5217\u540D\u79F0\uFF0C\u53EF\u4EE5\u5C06\u4E0D\u540C\u573A\u666F\u961F\u5217\u653E\u5728\u4E0D\u540C\u961F\u5217\u4E2D\uFF0C\u9ED8\u8BA4\u6240\u6709\u961F\u5217\u90FD\u5B58\u653E\u5728default\u961F\u5217\u4E2D
payload: \u5B58\u653E\u8FD0\u884C\u961F\u5217\u5BF9\u8C61\u7684\u5FC5\u8981\u53C2\u6570\uFF0C\u4F8B\u5982\u8FD0\u884C\u7684\u662F\u54EA\u4E2A\u5BF9\u8C61\uFF0C\u53C2\u6570\u662F\u4EC0\u4E48\uFF0C\u6240\u4EE5\u6240\u6709\u5F02\u6B65\u4EFB\u52A1\u90FD\u53EF\u4EE5\u5B58\u653E\u5230\u4E00\u4E2A\u961F\u5217\u4E2D
attempts: \u5F53\u4EFB\u52A1\u5931\u8D25\u65F6\u5019\uFF0C\u91CD\u8BD5\u6B21\u6570\uFF0C\u8FBE\u5230\u91CD\u8BD5\u6B21\u6570\u4E4B\u540E\uFF0C\u8FD8\u662F\u5931\u8D25\uFF0C\u5219\u653E\u5165\u5230failed_jobs\u8FD9\u4E2A\u8868\u4E2D\uFF0C\u53EF\u505A\u540E\u7EED\u64CD\u4F5C\u3002
reserved_at: \u961F\u5217\u8FD0\u884C\u65F6\u7684\u65F6\u95F4\uFF0C\u5982\u679C\u91CD\u8BD5\uFF0C\u5219\u5C31\u662F\u91CD\u8BD5\u65F6\u95F4\uFF0C\u603B\u4E4B\u5C31\u662F\u8FD0\u884C\u5F53\u524D\u4EFB\u52A1\u65B9\u6CD5\u7684\u65F6\u95F4\uFF0C\u8FD9\u4E2A\u53C2\u6570\u4F5C\u7528\u4E3B\u8981\u662F\u5F53\u8FD0\u884C\u91CD\u8BD5\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u4F1A\u901A\u8FC7\u914D\u7F6E\u4E2D\u7684 [reserved_at &lt;= now()-retry_after]\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u91CD\u8BD5\u961F\u5217\u3002\u603B\u7ED3\uFF1A\u91CD\u8BD5\u4EFB\u52A1\u95F4\u9694\u65F6\u95F4
available_at: \u5F53\u524D\u4EFB\u52A1\u5F00\u59CB\u6267\u884C\u7684\u65F6\u95F4\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u53EF\u4EE5\u505A\u5EF6\u65F6\u961F\u5217
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u67E5\u8BE2\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u67E5\u8BE2\u961F\u5217" aria-hidden="true">#</a> \u5982\u4F55\u67E5\u8BE2\u961F\u5217</h2><p>\u5728\u6570\u636E\u8868\u4E2D\u67E5\u8BE2\u961F\u5217\u903B\u8F91\u5C31\u662F\u627E\u5230\u6EE1\u8DB3\u65F6\u95F4\u7684job\uFF0C\u7136\u540E\u8FD0\u884C\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">getNextAvailableJob</span><span class="token punctuation">(</span><span class="token variable">$queue</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$job</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">database</span><span class="token operator">-&gt;</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">table</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">lockForUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;queue&#39;</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">getQueue</span><span class="token punctuation">(</span><span class="token variable">$queue</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">isAvailable</span><span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">isReservedButExpired</span><span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;asc&#39;</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">$job</span> <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">DatabaseJobRecord</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword type-casting">object</span><span class="token punctuation">)</span> <span class="token variable">$job</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token class-name return-type">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53EF\u7528\u4EFB\u52A1\u6761\u4EF6</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">isAvailable</span><span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token function">whereNull</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;reserved_at&#39;</span><span class="token punctuation">)</span>
              <span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;available_at&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">currentTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u91CD\u8BD5\u4EFB\u52A1\u6761\u4EF6</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">isReservedButExpired</span><span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$expiration</span> <span class="token operator">=</span> <span class="token class-name static-context">Carbon</span><span class="token operator">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">subSeconds</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">retryAfter</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">getTimestamp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token function">orWhere</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$query</span><span class="token punctuation">)</span> <span class="token keyword">use</span> <span class="token punctuation">(</span><span class="token variable">$expiration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token variable">$query</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;reserved_at&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token variable">$expiration</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4EFB\u52A1" aria-hidden="true">#</a> \u521B\u5EFA\u4EFB\u52A1</h2><p>\u751F\u4EA7\u8005\u901A\u8FC7\u7B80\u5355\u7684\u8C03\u7528\u65B9\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u521B\u5EFA\u5F02\u6B65\u961F\u5217\u4EFB\u52A1\uFF0C\u4E0B\u9762\u662F\u4E3B\u8981\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>use App\\Jobs\\ProcessPodcast;

// \u5728\u9ED8\u8BA4default\u961F\u5217\u4E2D\u6295\u9012\u4EFB\u52A1
ProcessPodcast::dispatch($podcast);

// \u5728\u6307\u5B9A\u961F\u5217\u4E2D\u6295\u653E\u4EFB\u52A1
ProcessPodcast::dispatch($podcast)-&gt;onQueue(&quot;high&quot;);

// \u5B58\u653E\u5230\u6307\u5B9A\u9A71\u52A8\u961F\u5217\u4E2D
ProcessPodcast::dispatch($podcast)-&gt;onConnection(&quot;redis&quot;);

// \u5EF6\u65F6\u961F\u5217
ProcessPodcast::dispatch($podcast)-&gt;addMinutes(10));

// \u540C\u6B65\u6267\u884C
ProcessPodcast::dispatchNow($podcast);

// \u6267\u884C\u591A\u4E2A\u961F\u5217\u94FE
ProcessPodcast::withChain([
    new OptimizePodcast,
    new ReleasePodcast
])-&gt;dispatch();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5931\u8D25\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5931\u8D25\u4EFB\u52A1" aria-hidden="true">#</a> \u5931\u8D25\u4EFB\u52A1</h2><p>\u5931\u8D25\u4EFB\u52A1\u662F\u6307\u961F\u5217job\u5728\u8FD0\u884C\u7684\u65F6\u5019\uFF0C\u629B\u51FA\u4E86\u5F02\u5E38\u3002\u5BF9\u4E8E\u8FD9\u79CD\u4EFB\u52A1\u540E\u7EED\u5904\u7406\u903B\u8F91\u662F\u91CC\u8FDB\u884C\u91CD\u8BD5\u3002\u91CD\u8BD5\u903B\u8F91\u662F\uFF1A\u5148\u5220\u9664\u5F53\u524D\u4EFB\u52A1\uFF0C\u7136\u540E\u518D\u65B0\u589E\u4E00\u4E2A\u4EFB\u52A1\uFF0Cattempts\u589E\u52A01\u3002\u5F53\u91CD\u8BD5\u6B21\u6570\u5B8C\u8FD8\u662F\u5931\u8D25\uFF0C\u4F1A\u56DE\u8C03\u65B9\u6CD5<code>failed($exception)</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u8FD9\u91CC\u662F\u6240\u6709\u91CD\u8BD5\u6B21\u6570\u90FD\u6267\u884C\u5B8C\u4E86\uFF0C\u624D\u629B\u51FA\u9519\u8BEF. \u53EF\u4EE5\u8FDB\u884C\u90AE\u4EF6\u901A\u77E5\u6216\u8005\u7EE7\u7EED\u52A0\u5165\u5230\u961F\u5217\u4E2D
public function failed($exception = null)
{
    dump(&quot;\u9519\u8BEF\u4E86&quot;);
    Log::info(&quot;\u961F\u5217\u5931\u8D25\u4E86&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u961F\u5217\u4E2D\u7684\u76F8\u5173\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217\u4E2D\u7684\u76F8\u5173\u53C2\u6570" aria-hidden="true">#</a> \u961F\u5217\u4E2D\u7684\u76F8\u5173\u53C2\u6570</h2><h3 id="\u6700\u5927\u91CD\u8BD5\u6B21\u6570tries" tabindex="-1"><a class="header-anchor" href="#\u6700\u5927\u91CD\u8BD5\u6B21\u6570tries" aria-hidden="true">#</a> \u6700\u5927\u91CD\u8BD5\u6B21\u6570tries</h3><p>\u5F53\u4EFB\u52A1\u6267\u884C\u5931\u8D25\u7684\u65F6\u5019\uFF0C\u4F1A\u8FDB\u884C\u91CD\u8BD5\u673A\u5236\uFF0C\u6240\u4EE5\u53EF\u4EE5\u6307\u5B9A\u6700\u5927\u91CD\u8BD5\u7684\u6B21\u6570\uFF0C\u5206\u522B\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E09\u79CD\u65B9\u5F0F\u6765\u6307\u5B9A</p><ol><li>\u5728\u4EFB\u52A1\u7C7B\u4E2D\u5B9A\u4E49\u91CD\u8BD5\u6B21\u6570\uFF0C<strong>\u4F18\u5148\u7EA7\u6700\u9AD8</strong></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var int \u91CD\u8BD5\u6B21\u6570\uFF0C\u4F18\u5148\u7EA7\u6700\u9AD8
     */
    public $tries = 5;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5728\u540D\u884C\u4E2D\u5B9A\u4E49\u91CD\u8BD5\u6B21\u6570\uFF0C<strong>\u4F18\u5148\u7EA7\u7B2C\u4E8C</strong></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> php artisan queue:work --tries=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u57FA\u4E8E\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u8BBE\u7F6E\u65E0\u9650\u91CD\u8BD5 <strong>\u4F18\u5148\u7EA7\u6700\u4F4E</strong></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var Podcast $podcast
     */
    protected $podcast;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Podcast $podcast)
    {
        $this-&gt;podcast = $podcast;
    }

    // \u57FA\u4E8E\u65F6\u95F4\u7684\u91CD\u8BD5\uFF0C\u518D\u8BE5\u65F6\u95F4\u5185\u53EF\u4EE5\u65E0\u9650\u91CD\u8BD5\uFF0C\u4F18\u5148\u7EA7\u6700\u4F4E
    public function retryUntil()
    {
        return now()-&gt;addSeconds(100);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4EFB\u52A1\u8D85\u65F6timeout" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u8D85\u65F6timeout" aria-hidden="true">#</a> \u4EFB\u52A1\u8D85\u65F6timeout</h3><p>\u5F53\u8FD0\u884C\u4E00\u4E2A\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u6307\u5B9A\u8D85\u65F6\u65F6\u95F4\uFF0C\u5F53\u8D85\u8FC7\u8FD9\u4E2A\u65F6\u95F4\uFF0C\u5219worker\u5219\u4F1A\u76F4\u63A5\u88ABkill,\u6240\u4EE5\u8FD9\u4E2A\u8981\u914D\u5408<code>supervisor</code>\u4E00\u8D77\u6765\u4F7F\u7528</p><p>\u8D85\u65F6\u88ABkill\u539F\u7406\u662F\u901A\u8FC7pcntl\u4FE1\u53F7\u673A\u5236\u6765\u5B9E\u73B0\u7684\uFF0C\u9996\u5148\u8BBE\u7F6E\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u7136\u540E\u76D1\u63A7\u8D85\u65F6\u4FE1\u53F7\uFF0C\u4E0B\u9762\u662F\u6838\u5FC3\u6E90\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Illuminate\\Queue\\Worker
// \u6CE8\u518C\u8D85\u65F6Handler
protected function registerTimeoutHandler($job, WorkerOptions $options)
{
    // \u575A\u633ASIGALRM\u8D85\u65F6\u4FE1\u53F7
    pcntl_signal(SIGALRM, function () use ($job, $options) {
        if ($job) {
            $this-&gt;markJobAsFailedIfWillExceedMaxAttempts(
                $job-&gt;getConnectionName(), $job, (int) $options-&gt;maxTries, $this-&gt;maxAttemptsExceededException($job)
            );
        }

        $this-&gt;kill(1);
    });
    
    // \u6CE8\u518C\u8D85\u65F6\u4FE1\u53F7\uFF0Ctimeout=0\u8868\u793A\u4E0D\u8D85\u65F6
    pcntl_alarm(
        max($this-&gt;timeoutForJob($job, $options), 0)
    );
}

// \u8D85\u65F6\u6740\u6389worker\u8FDB\u7A0B
public function kill($status = 0)
{
    $this-&gt;events-&gt;dispatch(new Events\\WorkerStopping($status));

    if (extension_loaded(&#39;posix&#39;)) {
        posix_kill(getmypid(), SIGKILL);
    }

    exit($status);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8D85\u65F6kill\u8FDB\u7A0B\u597D\u5904\u5C31\u662F\u9632\u6B62\u8D44\u6E90\u6D88\u8017\u8FC7\u5927\uFF0C\u76F4\u63A5\u7ED3\u675F\u8FDB\u7A0B\u3002\u5F53\u88AB\u6740\u6389\u8FDB\u7A0B\uFF0C\u961F\u5217\u91CD\u542F\u7684\u65F6\u5019\uFF0C\u4F1A\u91CD\u8BD5\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F1A\u914D\u5408<code>retry_after</code>\u53C2\u6570\u4E00\u8D77\u6765\u67E5\u8BE2\u4EFB\u52A1\u8FDB\u884C\u91CD\u8BD5\u8FD0\u884C\u3002</p><h3 id="\u5EF6\u65F6\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u65F6\u961F\u5217" aria-hidden="true">#</a> \u5EF6\u65F6\u961F\u5217</h3><p>\u5EF6\u65F6\u961F\u5217\u5176\u5B9E\u5B9E\u73B0\u4E5F\u7B80\u5355\uFF0C\u5C31\u662F\u5728\u521B\u5EFA\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u6307\u5B9A\u5728\u4EC0\u4E48\u65F6\u5019\u53EF\u4EE5\u5F00\u59CB\u6267\u884C\uFF0C\u5728<code>database</code>\u9A71\u52A8\u4E2D\u901A\u8FC7\u5B57\u6BB5<code>available_at</code>\u6765\u67E5\u8BE2\u4EFB\u52A1\u3002</p><h3 id="\u961F\u5217\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u961F\u5217\u4F18\u5148\u7EA7</h3><p>\u5F53\u8FD0\u884Cworker\u7684\u65F6\u5019\u6307\u5B9A\u591A\u4E2A\u961F\u5217\uFF0C\u987A\u5E8F\u662F\u6839\u636E\u6307\u5B9A\u7684\u961F\u5217\u987A\u5E8F\u3002\u5176\u5B9E\u539F\u7406\u5C31\u662F\u5F53\u4ECE\u7B2C\u4E00\u4E2A\u961F\u5217\u4E2D\u627E\u5230\u4E86job\uFF0C\u5C31\u7EE7\u7EED\u4ECE\u7B2C\u4E00\u4E2A\u4E2D\u627E\uFF0C\u53EA\u6709\u5F53\u6CA1\u6709\u5C31\u4ECE\u7B2C\u4E8C\u4E2A\u961F\u5217\u4E2D\u627E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan queue:work --queue=high,low

// \u901A\u8FC7\u4F20\u9012\u53C2\u6570\uFF0C\u8C03\u7528\u65B9\u5148\u6307\u5B9A(high) \uFF0C\u5982\u679C\u6709\u5C31\u7EE7\u7EED(high), \u5426\u5219\u6267\u884C(low)
protected function getNextAvailableJob($queue){}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F11\u7720sleep" tabindex="-1"><a class="header-anchor" href="#\u4F11\u7720sleep" aria-hidden="true">#</a> \u4F11\u7720sleep</h3><p>\u5F53\u6D88\u8D39\u8005worker\u5728\u67E5\u627E\u961F\u5217\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u5982\u679C\u53D1\u73B0\u4E3A\u7A7A\uFF0C\u5219\u53EF\u4EE5\u4F11\u7720\uFF0C\u51CF\u5C11\u65E0\u7528\u6D88\u8017\u3002\u8FD9\u4E2A\u662F\u5728\u542F\u52A8\u961F\u5217\u7684\u65F6\u5019\u6307\u5B9A\u7684\u53C2\u6570</p><h3 id="\u6307\u5B9A\u961F\u5217-\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u961F\u5217-\u9A71\u52A8" aria-hidden="true">#</a> \u6307\u5B9A\u961F\u5217/\u9A71\u52A8</h3><p>\u8FD0\u884Cworker\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u6307\u5B9A\u8FD0\u884C\u7684queue\uFF0C\u548C\u9A71\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan queue:work redis --queue=high,low --sleep=3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u961F\u5217\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217\u4E8B\u4EF6" aria-hidden="true">#</a> \u961F\u5217\u4E8B\u4EF6</h3><p>\u5BF9\u4E8E\u961F\u5217\u5904\u7406\uFF0C\u4F1A\u6709\u76F8\u5E94\u7684\u4E8B\u4EF6\u65B9\u6CD5\uFF0C\u4E00\u822C\u7528\u53EF\u4EE5\u7528\u6765\u8BB0\u5F55\u65E5\u5FD7\u6216\u8005\u53D1\u9001\u90AE\u4EF6</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Providers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>JobProcessed</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>JobProcessing</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Event</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Auth<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>Registered</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Auth<span class="token punctuation">\\</span>Listeners<span class="token punctuation">\\</span>SendEmailVerificationNotification</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Providers<span class="token punctuation">\\</span>EventServiceProvider</span> <span class="token keyword">as</span> ServiceProvider<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Queue</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Queue<span class="token punctuation">\\</span>Events<span class="token punctuation">\\</span>JobFailed</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">EventServiceProvider</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceProvider</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name static-context">Queue</span><span class="token operator">::</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">JobProcessing</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token function">dump</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;\u8FD0\u884C\u5F00\u59CB\u4E4B\u524D\u4E8B\u4EF6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// $event-&gt;connectionName</span>
        <span class="token comment">// $event-&gt;job</span>
        <span class="token comment">// $event-&gt;job-&gt;payload()</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name static-context">Queue</span><span class="token operator">::</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">JobProcessed</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">dump</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;\u7ED3\u675F\u4E8B\u4EF6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// $event-&gt;connectionName</span>
        <span class="token comment">// $event-&gt;job</span>
        <span class="token comment">// $event-&gt;job-&gt;payload()</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u5931\u8D25\u4E8B\u4EF6</span>
    <span class="token class-name static-context">Queue</span><span class="token operator">::</span><span class="token function">failing</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">JobFailed</span> <span class="token variable">$event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">dump</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;\u5931\u8D25\u4E86\u4EFB\u52A1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// $event-&gt;connectionName</span>
        <span class="token comment">// $event-&gt;job</span>
        <span class="token comment">// $event-&gt;exception</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="horizon" tabindex="-1"><a class="header-anchor" href="#horizon" aria-hidden="true">#</a> horizon</h2><p>\u5BF9\u4E8E\u542F\u52A8\u591A\u4E2A\u6D88\u8D39\u8005\uFF0C\u5219\u9700\u8981\u4F7F\u7528horizon,supervisor\u8FD9\u79CD\u591A\u8FDB\u7A0B\u7BA1\u7406\u5DE5\u5177\u3002</p>`,44),l=[t];function p(c,o){return s(),a("div",null,l)}var r=n(i,[["render",p],["__file","30-laravel-queue.html.vue"]]);export{r as default};

import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.3cecbbff.js";const e={},p=t(`<p>\u4E0B\u6E38\u5BA2\u6237\u7AEF\u94FE\u63A5envoy\u4F7F\u7528https\uFF0Cenvoy\u8FDE\u63A5\u4E0A\u6E38\u670D\u52A1\u4F7F\u7528http</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">admin</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span>
    <span class="token key atrule">socket_address</span><span class="token punctuation">:</span>
      <span class="token key atrule">address</span><span class="token punctuation">:</span> 0.0.0.0
      <span class="token key atrule">port_value</span><span class="token punctuation">:</span> <span class="token number">9901</span>
<span class="token key atrule">static_resources</span><span class="token punctuation">:</span>
  <span class="token key atrule">secrets</span><span class="token punctuation">:</span> <span class="token comment"># \u5B9A\u4E49\u8BC1\u4E66\uFF0C\u4E5F\u53EF\u4EE5\u5728\u4E0B\u9762transport_socket\u4E2D\u914D\u7F6E\uFF0C\u8FD9\u91CC\u5B9A\u4E49\u5219transport_socket\u4E2D\u53EF\u4EE5\u5F15\u7528</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> server_cert
    <span class="token key atrule">tls_certificate</span><span class="token punctuation">:</span>
      <span class="token key atrule">certificate_chain</span><span class="token punctuation">:</span>
        <span class="token key atrule">filename</span><span class="token punctuation">:</span> <span class="token string">&quot;/ssl/xxx.com.pem&quot;</span>
      <span class="token key atrule">private_key</span><span class="token punctuation">:</span>
        <span class="token key atrule">filename</span><span class="token punctuation">:</span> <span class="token string">&quot;/ssl/xxx.com.key&quot;</span>

  <span class="token key atrule">listeners</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> listener_https
    <span class="token key atrule">address</span><span class="token punctuation">:</span>
      <span class="token key atrule">socket_address</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">address</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">,</span> <span class="token key atrule">port_value</span><span class="token punctuation">:</span> <span class="token number">443</span> <span class="token punctuation">}</span>
    <span class="token key atrule">listener_filters</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;envoy.filters.listener.tls_inspector&quot;</span> <span class="token comment"># tls\u63E1\u624B\u76F4\u63A5\u53EF\u4EE5\u914D\u7F6E\u5728listener_filters\u4E2D\u505A\u68C0\u67E5\u3002\u8FD9\u6837\u5F53\u524Dlistener\u4E2D\u7684filter\u90FD\u5FC5\u987B\u4F7F\u7528https</span>
        <span class="token key atrule">typed_config</span><span class="token punctuation">:</span>
          <span class="token key atrule">&quot;@type&quot;</span><span class="token punctuation">:</span> type.googleapis.com/envoy.extensions.filters.listener.tls_inspector.v3.TlsInspector
    <span class="token key atrule">filter_chains</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">filters</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> envoy.filters.network.http_connection_manager
        <span class="token key atrule">typed_config</span><span class="token punctuation">:</span>
          <span class="token key atrule">&quot;@type&quot;</span><span class="token punctuation">:</span> type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
          <span class="token key atrule">stat_prefix</span><span class="token punctuation">:</span> ingress_https
          <span class="token key atrule">codec_type</span><span class="token punctuation">:</span> AUTO
          <span class="token key atrule">route_config</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> https_route
            <span class="token key atrule">virtual_hosts</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> https_route
              <span class="token key atrule">domains</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span>
              <span class="token key atrule">routes</span><span class="token punctuation">:</span>
              <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span> <span class="token punctuation">}</span>
                <span class="token key atrule">route</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">cluster</span><span class="token punctuation">:</span> http <span class="token punctuation">}</span>
          <span class="token key atrule">http_filters</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> envoy.filters.http.router
            <span class="token key atrule">typed_config</span><span class="token punctuation">:</span>
              <span class="token key atrule">&quot;@type&quot;</span><span class="token punctuation">:</span> type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
      <span class="token key atrule">filter_chain_match</span><span class="token punctuation">:</span> <span class="token comment"># \u8FD9\u4E2A\u4E3B\u8981\u914D\u7F6E\u57DF\u540D\u8FC7\u6EE4\uFF0C\u56E0\u4E3Afilter\u662F\u4ECE\u4E0A\u5230\u4E0B\u4F9D\u6B21\u5339\u914D\u7684\uFF0C\u5982\u679C\u914D\u7F6E\u591A\u4E2Ahosts\uFF0C\u5219https\u63E1\u624B\u65F6\u5019\uFF0C\u4F1A\u53D1\u9001SNI\uFF0C\u5C31\u662F\u8FD9\u4E2A\u4F5C\u7528</span>
        <span class="token key atrule">server_names</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;aa.xx.com&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;bb.xx.com&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">transport_socket</span><span class="token punctuation">:</span> <span class="token comment"># \u4F20\u8F93\u5C42socket\u914D\u7F6E\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u914D\u7F6Etls\u7684\u52A0\u89E3\u5BC6</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> envoy.transport_sockets.tls
        <span class="token key atrule">typed_config</span><span class="token punctuation">:</span>
          <span class="token key atrule">&quot;@type&quot;</span><span class="token punctuation">:</span> type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.DownstreamTlsContext
          <span class="token key atrule">common_tls_context</span><span class="token punctuation">:</span>
            <span class="token key atrule">tls_certificate_sds_secret_configs</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> server_cert

  <span class="token key atrule">clusters</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
      <span class="token key atrule">connect_timeout</span><span class="token punctuation">:</span> 0.25s
      <span class="token key atrule">type</span><span class="token punctuation">:</span> STRICT_DNS
      <span class="token key atrule">lb_policy</span><span class="token punctuation">:</span> ROUND_ROBIN
      <span class="token key atrule">load_assignment</span><span class="token punctuation">:</span>
        <span class="token key atrule">cluster_name</span><span class="token punctuation">:</span> http
        <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">lb_endpoints</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
              <span class="token key atrule">address</span><span class="token punctuation">:</span>
                <span class="token key atrule">socket_address</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">address</span><span class="token punctuation">:</span> 172.17.0.4<span class="token punctuation">,</span> <span class="token key atrule">port_value</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token punctuation">}</span>
          <span class="token punctuation">-</span> <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
              <span class="token key atrule">address</span><span class="token punctuation">:</span>
                <span class="token key atrule">socket_address</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">address</span><span class="token punctuation">:</span> 172.17.0.3<span class="token punctuation">,</span> <span class="token key atrule">port_value</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[p];function c(o,u){return s(),a("div",null,l)}var r=n(e,[["render",c],["__file","03-fornt-https.html.vue"]]);export{r as default};

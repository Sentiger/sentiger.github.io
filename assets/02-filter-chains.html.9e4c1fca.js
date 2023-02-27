import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c as l,a as n,b as c,e as s,d as i}from"./app.a872a782.js";const o={},u=s(`<p>filter_chains \u8FD9\u4E2A\u662F\u914D\u7F6E\u5E94\u7528\u7AEF\u7684\u89C4\u5219\uFF0C\u901A\u8FC7\u5339\u914Dfilter_chains\u4E2D\u7684\u94FE\u53BB\u6267\u884C\u3002</p><h2 id="\u914D\u7F6E\u6A21\u7248" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6A21\u7248" aria-hidden="true">#</a> \u914D\u7F6E\u6A21\u7248</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;filter_chain_match&quot;: {...}, # \u5F53\u524Dfilter\u7684\u5339\u914D\u6761\u4EF6\uFF0C\u5982\u679C\u6EE1\u8DB3\uFF0C\u5219\u6267\u884C\u8BE5filter
  &quot;filters&quot;: [], # \u5B9A\u4E49\u7684filters\uFF0C\u8FD9\u4E2A\u91CC\u9762\u5B9A\u4E49\u7684\u6761\u76EE\u6570\u91CF\u6839\u636E\u8BE5filter\u7684\u5B9E\u73B0\u3002\u8FD9\u91CC\u7684\u914D\u7F6E\u5177\u4F53\u53EF\u4EE5\u53C2\u89C1\u6587\u6863\u6709\u652F\u6301\u54EA\u4E9B\u3002\u4F8B\u5982TCP Proxy\u5C31\u53EA\u80FD\u914D\u7F6E\u4E00\u4E2A
  &quot;use_proxy_proto&quot;: {...},
  &quot;transport_socket&quot;: {...},
  &quot;transport_socket_connect_timeout&quot;: {...},
  &quot;name&quot;: ... # \u5B9A\u4E49\u540D\u79F0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u53C2\u8003\u6587\u6863</strong></p>`,4),r={href:"https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#config-listener-v3-filterchain",target:"_blank",rel:"noopener noreferrer"},d=i("filter_chains"),k=s(`<h2 id="\u7B80\u5355\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F8B\u5B50" aria-hidden="true">#</a> \u7B80\u5355\u4F8B\u5B50</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">admin</span><span class="token punctuation">:</span>
  <span class="token key atrule">address</span><span class="token punctuation">:</span>
    <span class="token key atrule">socket_address</span><span class="token punctuation">:</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">address</span><span class="token punctuation">:</span> 0.0.0.0
      <span class="token key atrule">port_value</span><span class="token punctuation">:</span> <span class="token number">9901</span>

<span class="token key atrule">static_resources</span><span class="token punctuation">:</span>
  <span class="token key atrule">listeners</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> listener_0
      <span class="token key atrule">address</span><span class="token punctuation">:</span>
        <span class="token key atrule">socket_address</span><span class="token punctuation">:</span>
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
          <span class="token key atrule">address</span><span class="token punctuation">:</span> 0.0.0.0
          <span class="token key atrule">port_value</span><span class="token punctuation">:</span> <span class="token number">10000</span>
      <span class="token key atrule">filter_chains</span><span class="token punctuation">:</span> <span class="token comment"># \u8FD9\u91CC\u914D\u7F6E\u4E86\u591A\u4E2Afilter,\u7136\u540E\u6839\u636E\u6E90IP\u4E0D\u540C\u7136\u540E\u8F6C\u53D1\u5230\u4E0D\u540C\u7684\u4E0A\u6E38\u670D\u52A1</span>
      <span class="token punctuation">-</span> <span class="token key atrule">filters</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> echo_tcp_8080 <span class="token comment"># \u4F8B\u5982tcpProxy\u5C31\u53EA\u80FD\u5B9A\u4E49\u4E00\u4E2Afilter</span>
            <span class="token key atrule">typed_config</span><span class="token punctuation">:</span>
              <span class="token key atrule">&quot;@type&quot;</span><span class="token punctuation">:</span> type.googleapis.com/envoy.extensions.filters.network.tcp_proxy.v3.TcpProxy
              <span class="token key atrule">stat_prefix</span><span class="token punctuation">:</span> tcp
              <span class="token key atrule">cluster</span><span class="token punctuation">:</span> echo_tcp_8080
        <span class="token key atrule">filter_chain_match</span><span class="token punctuation">:</span> 
          <span class="token key atrule">source_prefix_ranges</span><span class="token punctuation">:</span> <span class="token comment"># \u6839\u636E\u6E90IP\u6765\u505A\u9009\u62E9</span>
            <span class="token punctuation">-</span> <span class="token key atrule">address_prefix</span><span class="token punctuation">:</span> 101.68.68.10
              <span class="token key atrule">prefix_len</span><span class="token punctuation">:</span> <span class="token number">32</span>
      <span class="token punctuation">-</span> <span class="token key atrule">filters</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> echo_tcp_443
            <span class="token key atrule">typed_config</span><span class="token punctuation">:</span>
              <span class="token key atrule">&quot;@type&quot;</span><span class="token punctuation">:</span> type.googleapis.com/envoy.extensions.filters.network.tcp_proxy.v3.TcpProxy
              <span class="token key atrule">stat_prefix</span><span class="token punctuation">:</span> tcp2
              <span class="token key atrule">cluster</span><span class="token punctuation">:</span> echo_tcp_443
        <span class="token key atrule">filter_chain_match</span><span class="token punctuation">:</span>
          <span class="token key atrule">source_prefix_ranges</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">address_prefix</span><span class="token punctuation">:</span> 139.198.165.7
              <span class="token key atrule">prefix_len</span><span class="token punctuation">:</span> <span class="token number">32</span>
        <span class="token key atrule">on_demand_configuration</span><span class="token punctuation">:</span>
          <span class="token key atrule">rebuild_timeout</span><span class="token punctuation">:</span> 3s

  <span class="token key atrule">clusters</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> echo_tcp_443
    <span class="token key atrule">connect_timeout</span><span class="token punctuation">:</span> 0.25s
    <span class="token key atrule">type</span><span class="token punctuation">:</span> STATIC
    <span class="token key atrule">lb_policy</span><span class="token punctuation">:</span> ROUND_ROBIN
    <span class="token key atrule">load_assignment</span><span class="token punctuation">:</span>
      <span class="token key atrule">cluster_name</span><span class="token punctuation">:</span> service_echo
      <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">lb_endpoints</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
            <span class="token key atrule">address</span><span class="token punctuation">:</span>
              <span class="token key atrule">socket_address</span><span class="token punctuation">:</span>
                <span class="token key atrule">address</span><span class="token punctuation">:</span>  47.98.219.45
                <span class="token key atrule">port_value</span><span class="token punctuation">:</span> <span class="token number">443</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> echo_tcp_8080
    <span class="token key atrule">connect_timeout</span><span class="token punctuation">:</span> 0.25s
    <span class="token key atrule">type</span><span class="token punctuation">:</span> STATIC
    <span class="token key atrule">lb_policy</span><span class="token punctuation">:</span> ROUND_ROBIN
    <span class="token key atrule">load_assignment</span><span class="token punctuation">:</span>
      <span class="token key atrule">cluster_name</span><span class="token punctuation">:</span> service_echo
      <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">lb_endpoints</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
                <span class="token key atrule">address</span><span class="token punctuation">:</span>
                  <span class="token key atrule">socket_address</span><span class="token punctuation">:</span>
                    <span class="token key atrule">address</span><span class="token punctuation">:</span> 139.198.191.115
                    <span class="token key atrule">port_value</span><span class="token punctuation">:</span> <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(m,_){const a=t("ExternalLinkIcon");return p(),l("div",null,[u,n("p",null,[n("a",r,[d,c(a)])]),k])}var f=e(o,[["render",v],["__file","02-filter-chains.html.vue"]]);export{f as default};

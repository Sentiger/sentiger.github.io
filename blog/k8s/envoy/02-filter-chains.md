---
title: filter_chains
order: 2
category:
  - k8s
  - envoy
---

filter_chains 这个是配置应用端的规则，通过匹配filter_chains中的链去执行。

## 配置模版

```
{
  "filter_chain_match": {...}, # 当前filter的匹配条件，如果满足，则执行该filter
  "filters": [], # 定义的filters，这个里面定义的条目数量根据该filter的实现。这里的配置具体可以参见文档有支持哪些。例如TCP Proxy就只能配置一个
  "use_proxy_proto": {...},
  "transport_socket": {...},
  "transport_socket_connect_timeout": {...},
  "name": ... # 定义名称
}
```

**参考文档**

[filter_chains]

## 简单例子

```yaml
admin:
  address:
    socket_address:
      protocol: TCP
      address: 0.0.0.0
      port_value: 9901

static_resources:
  listeners:
    - name: listener_0
      address:
        socket_address:
          protocol: TCP
          address: 0.0.0.0
          port_value: 10000
      filter_chains: # 这里配置了多个filter,然后根据源IP不同然后转发到不同的上游服务
      - filters:
          - name: echo_tcp_8080 # 例如tcpProxy就只能定义一个filter
            typed_config:
              "@type": type.googleapis.com/envoy.extensions.filters.network.tcp_proxy.v3.TcpProxy
              stat_prefix: tcp
              cluster: echo_tcp_8080
        filter_chain_match: 
          source_prefix_ranges: # 根据源IP来做选择
            - address_prefix: 101.68.68.10
              prefix_len: 32
      - filters:
          - name: echo_tcp_443
            typed_config:
              "@type": type.googleapis.com/envoy.extensions.filters.network.tcp_proxy.v3.TcpProxy
              stat_prefix: tcp2
              cluster: echo_tcp_443
        filter_chain_match:
          source_prefix_ranges:
            - address_prefix: 139.198.165.7
              prefix_len: 32
        on_demand_configuration:
          rebuild_timeout: 3s

  clusters:
  - name: echo_tcp_443
    connect_timeout: 0.25s
    type: STATIC
    lb_policy: ROUND_ROBIN
    load_assignment:
      cluster_name: service_echo
      endpoints:
      - lb_endpoints:
        - endpoint:
            address:
              socket_address:
                address:  47.98.219.45
                port_value: 443
  - name: echo_tcp_8080
    connect_timeout: 0.25s
    type: STATIC
    lb_policy: ROUND_ROBIN
    load_assignment:
      cluster_name: service_echo
      endpoints:
        - lb_endpoints:
            - endpoint:
                address:
                  socket_address:
                    address: 139.198.191.115
                    port_value: 8080
```


[filter_chains]: https://www.envoyproxy.io/docs/envoy/latest/api-v3/config/listener/v3/listener_components.proto#config-listener-v3-filterchain

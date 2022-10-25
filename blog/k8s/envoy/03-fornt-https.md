---
title: front https
order: 3
category:
  - k8s
  - envoy
---

下游客户端链接envoy使用https，envoy连接上游服务使用http

```yaml
admin:
  address:
    socket_address:
      address: 0.0.0.0
      port_value: 9901
static_resources:
  secrets: # 定义证书，也可以在下面transport_socket中配置，这里定义则transport_socket中可以引用
  - name: server_cert
    tls_certificate:
      certificate_chain:
        filename: "/ssl/xxx.com.pem"
      private_key:
        filename: "/ssl/xxx.com.key"

  listeners:
  - name: listener_https
    address:
      socket_address: { address: 0.0.0.0, port_value: 443 }
    listener_filters:
      - name: "envoy.filters.listener.tls_inspector" # tls握手直接可以配置在listener_filters中做检查。这样当前listener中的filter都必须使用https
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.filters.listener.tls_inspector.v3.TlsInspector
    filter_chains:
    - filters:
      - name: envoy.filters.network.http_connection_manager
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
          stat_prefix: ingress_https
          codec_type: AUTO
          route_config:
            name: https_route
            virtual_hosts:
            - name: https_route
              domains: ["*"]
              routes:
              - match: { prefix: "/" }
                route: { cluster: http }
          http_filters:
          - name: envoy.filters.http.router
            typed_config:
              "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
      filter_chain_match: # 这个主要配置域名过滤，因为filter是从上到下依次匹配的，如果配置多个hosts，则https握手时候，会发送SNI，就是这个作用
        server_names: ["aa.xx.com","bb.xx.com"]
      transport_socket: # 传输层socket配置，这里可以配置tls的加解密
        name: envoy.transport_sockets.tls
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.DownstreamTlsContext
          common_tls_context:
            tls_certificate_sds_secret_configs:
            - name: server_cert

  clusters:
    - name: http
      connect_timeout: 0.25s
      type: STRICT_DNS
      lb_policy: ROUND_ROBIN
      load_assignment:
        cluster_name: http
        endpoints:
        - lb_endpoints:
          - endpoint:
              address:
                socket_address: { address: 172.17.0.4, port_value: 80 }
          - endpoint:
              address:
                socket_address: { address: 172.17.0.3, port_value: 80 }
```
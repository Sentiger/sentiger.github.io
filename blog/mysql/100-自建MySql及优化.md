---
title: 自建MySql及优化
order: 100
date: 2022-01-01
category:
  - MySQL
---

使用的是16核64G的服务器

```ini
[mysqld]
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock
pid-file=/var/run/mysqld/mysqld.pid

# error log
log-error=/var/log/mysql/mysqld.log

# flow log config
slow_query_log=ON
slow_query_log_file=/var/log/mysql/slow_query.log
long_query_time=2
log_output=TABLE
log_timestamps=SYSTEM
log_queries_not_using_indexes=OFF
min_examined_row_limit=0
log_slow_admin_statements=OFF

# general
lower_case_table_names=1
character_set_server=utf8
validate_password_policy=low

# innodb
innodb_buffer_pool_size=48049946624
join_buffer_size=442368
sort_buffer_size=262144
read_rnd_buffer_size=442368
thread_cache_size=100
tmp_table_size=2097152

#thread_pool_size=2

symbolic-links=0
```


## 参数优化

### join_buffer_size

在连接查询的时候，驱动表只查询一次，被驱动表会查询N次，具体看驱动表中返回的记录数。

但是对于被驱动表来说，是基于驱动表记录中做等值查询，所以此时优化，如果被驱动表中的等值查询可以加上索引。

如果如果被驱动表没有索引，则是会进行N次全表扫描，一次对比，所以为了更一步优化，可以全表扫描一次，将扫描的结果存放到内存中，然后和驱动表中的记录一次对比。这里的内存就是`join_buffer_size`。

所以join查询的时候，尽可能让数据小，这样`join_buffer_size`就能存放更多的记录。所以一般不建议`*`查询。

```
join_buffer_size=442368
```




---
title: 自建MySql及优化
order: 100
date: 2022-01-01
category:
  - MySQL
---

线上使用的是16核64G的服务器

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
---
title: explain
order: 8
date: 2022-07-15
category:
  - MySQL
---

explain用于分析语句的运行过程，可以通过这个来优化我们的语句

```
[root@localhost]:test>explain select * from student where number in(select number from score);
+----+-------------+---------+------------+-------+---------------+---------+---------+------+------+----------+----------------------------------------------------+
| id | select_type | table   | partitions | type  | possible_keys | key     | key_len | ref  | rows | filtered | Extra                                              |
+----+-------------+---------+------------+-------+---------------+---------+---------+------+------+----------+----------------------------------------------------+
|  1 | SIMPLE      | score   | NULL       | index | PRIMARY       | PRIMARY | 5       | NULL |    4 |    50.00 | Using index; LooseScan                             |
|  1 | SIMPLE      | student | NULL       | ALL   | PRIMARY       | NULL    | NULL    | NULL |    3 |    50.00 | Using where; Using join buffer (Block Nested Loop) |
+----+-------------+---------+------------+-------+---------------+---------+---------+------+------+----------+----------------------------------------------------+
2 rows in set, 1 warning (0.00 sec)
```

## id

每条查询语句都会产生执行计划，语句中有几个id唯一select，则就会产生几个查询语句。但是有的子查询会被优化器进行优化重写，所以具体看分析结果

## select_type

**simple**

查询语句中不包含 UNION 或者子查询的查询都算作是 SIMPLE 类型，比方说下边这个单表查询的select_type 的值就是 SIMPLE 

**PRIMARY**

对于包含 UNION 、 UNION ALL 或者子查询的大查询来说，它是由几个小查询组成的，其中最左边的那个查询的 select_type 值就是 PRIMARY

```sql
[root@localhost]:test>explain select * from student union select * from student;
+----+--------------+------------+------------+------+---------------+------+---------+------+------+----------+-----------------+
| id | select_type  | table      | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra           |
+----+--------------+------------+------------+------+---------------+------+---------+------+------+----------+-----------------+
|  1 | PRIMARY      | student    | NULL       | ALL  | NULL          | NULL | NULL    | NULL |    3 |   100.00 | NULL            |
|  2 | UNION        | student    | NULL       | ALL  | NULL          | NULL | NULL    | NULL |    3 |   100.00 | NULL            |
| NULL | UNION RESULT | <union1,2> | NULL       | ALL  | NULL          | NULL | NULL    | NULL | NULL |     NULL | Using temporary |
+----+--------------+------------+------------+------+---------------+------+---------+------+------+----------+-----------------+
```

**UNION**

对于包含 UNION 或者 UNION ALL 的大查询来说，它是由几个小查询组成的，其中除了最左边的那个小查询以外，其余的小查询的 select_type 值就是 UNION

**UNION RESULT**

MySQL 选择使用临时表来完成 UNION 查询的去重工作，针对该临时表的查询的 select_type 就是 UNIONRESULT

**SUBQUERY**

1. 如果包含子查询的查询语句不能够转为对应的 semi-join 的形式，并且该子查询是不相关子查询
2. 并且查询优化器决定采用将该子查询物化的方案来执行该子查询时，
3. 该子查询的第一个 SELECT 关键字代表的那个查询的 select_type 就是 SUBQUERY
4. 经过测试有的不相关子查询也可能会出现（DEPENDENT SUBQUERY）

> 注意：
1. 由于select_type为SUBQUERY的子查询由于会被物化，所以只需要执行一遍。
2. select_type为DEPENDENT SUBQUERY的查询可能会被执行多次。

```
 EXPLAIN SELECT * FROM s1 WHERE key1 IN (SELECT key1 FROM s2) OR key3 = 'a';
 ```
 
 **DEPENDENT SUBQUERY**
 
 如果包含子查询的查询语句不能够转为对应的 semi-join 的形式，并且该子查询是相关子查询，则该子查询的第一个 SELECT 关键字代表的那个查询的 select_type 就是 DEPENDENT SUBQUERY ，比如下边这个查询：
 
**DEPENDENT UNION**

**DERIVED**

**MATERIALIZED**

## type

执行计划中每个计划运行的方式，也就是采用那种方式去执行该语句

system ， const ，eq_ref ， ref ， fulltext ， ref_or_null ， index_merge ， unique_subquery ， index_subquery ，range ， index ， ALL 。


## possible_keys

执行过程中可能用到的索引。

注意：这个列的值不是越多越好，因为查询优化器计算的查询成本花的时间就更多。

## keys

执行过程中，使用到的索引

## key_len

key_len 列表示当优化器决定使用某个索引执行查询时，该索引记录的最大长度，它是由这三个部分构成的

1. 对于使用固定长度类型的索引列来说，它实际占用的存储空间的最大长度就是该固定值，对于指定字符集的变长类型的索引列来说，比如某个索引列的类型是 VARCHAR(100) ，使用的字符集是 utf8 ，那么该列实际占用的最大存储空间就是 100 × 3 = 300 个字节。
2. 如果该索引列可以存储 NULL 值，则 key_len 比不可以存储 NULL 值时多1个字节。
3. 对于变长字段来说，都会有2个字节的空间来存储该变长列的实际长度。

注意：这里是key_len不是真正存储的长度，只是用来展示下具体使用的索引组合一起多大。真正存储的底层由各种存储引擎来实现。

## ref
当使用索引列等值匹配的条件去执行查询时，也就是在访问方法是 const 、 eq_ref 、 ref 、 ref_or_null 、unique_subquery 、 index_subquery 其中之一时， ref 列展示的就是与索引列作等值匹配的东东是个啥

## rows
如果查询优化器决定使用全表扫描的方式对某个表执行查询时，执行计划的 rows 列就代表预计需要扫描的行数，如果使用索引来执行查询时，执行计划的 rows 列就代表预计扫描的索引记录行数。


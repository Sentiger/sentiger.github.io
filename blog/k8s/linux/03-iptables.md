---
title: iptables
order: 3
category:
  - linux
tag:
  - linux
  - iptables
---

## 基本命令

```shell
# 完整命令操作
iptables [-t table] CMD [chain] [rules] [-j target]

Usage: iptables -[ACD] chain rule-specification [options]
       iptables -I chain [rulenum] rule-specification [options]
       iptables -R chain rulenum rule-specification [options]
       iptables -D chain rulenum [options]
       iptables -[LS] [chain [rulenum]] [options]
       iptables -[FZ] [chain] [options]
       iptables -[NX] chain
       iptables -E old-chain-name new-chain-name
       iptables -P chain target [options]
```

### CMD

| 缩写  | 完整命令           | 后面跟内容               | 说明                                 |
|-----|----------------|---------------------|------------------------------------|
| -A  | --append       | chain               | 在chain后面追加内容                       |
| -C  | --check        | chain               | 检查链中的规则是否存在                        |
| -D  | --delete       | chain rulenum       | 删除链中的规则                            |
| -I  | --insert       | chain [rulenum]     | 在链中插入规则，这个时候要指出插入的位置 --line-number |
| -R  | --replace      | chain rulenum       | 在链中插入规则，这个时候要指出插入的位置 --line-number |
| -L  | --list         | [chain [rulenum]]   | 列出链上的规则,可以查看指定行                    |
| -S  | --list-rules   | [chain [rulenum]]   | 打印指定链或者所有链的rule，这个就是能操作的命令         |
| -F  | --flush        | [chain]             | 删除所有的规则或者指定链的规则                    |
| -Z  | --zero         | [chain [rulenum]]   | 清除链上的计数器                           |
| -N  | --new          | chain               | 新建一个自定义链                           |
| -X  | --delete-chain | [chain]             | 删除用户自定义链                           |
| -P  | --policy       | chain target        | 修改链默认规则 ACCEPT DROP                |
| -E  | --rename-chain | old-chain new-chain | 更改链名                               |

### Options

| 缩写  | 完整命令                 | 后面跟内容               | 说明                                   |
|-----|----------------------|---------------------|--------------------------------------|
| -4  | --ipv4               |                     |                                      |
| -6  | --ipv6               |                     |                                      |
| -p  | --protocol           | proto               | 指定协议 tcp,udp,icmp                    |
| -s  | --source             | address[/mask][...] | 源地址                                  |
| -d  | --destination        | address[/mask][...] | 目标地址                                 |
| -i  | --in-interface       | input name[+]       | 网卡                                   |
| -j  | --jump               | target              | 执行结果，可以跳转到自定义的操作链                    |
| -g  | --goto               | chain               | 直接跳转到链上，不返回                          |
| -m  | --match              | chain               | 扩展操作                                 |
| -n  | --numeric            |                     | 将输出的语义词为完整的数字表达，例如anywhere-> 0.0.0.0 |
| -v  | --verbose            |                     | 详细信息列出                               |
| -w  | --wait               | [seconds]           | 放弃前获取表锁的最长等待时间                       |
| -W  | --wait-interval      | [usecs]             | 尝试获取                                 |
|     | --line-numbers       |                     | 打印的时候显示行号                            |
| -x  | --exact              |                     | 展开数字(显示精确值)                          |
| -f  | --fragment           |                     | 仅匹配第二个或更多片段                          |
|     | --modprobe=<command> |                     | 尝试使用此命令插入模块                          |
|     | --set-counters       | PKTS BYTES          | 在插入/附加期间设置计数器                        |





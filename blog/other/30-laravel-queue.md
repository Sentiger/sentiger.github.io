---
title: laravel-queue分析
order: 30
category:
---

laravel(5.8)实现队列提供了一套接口，底层可以存储驱动可以使用`redis`,`databases`等。下面通过`database`驱动来了解下队列实现原理。


## 数据表

使用`database`作为队列驱动的话，使用下面这张表就可以实现队列的核心功能，下面通过这张表来介绍下队列核心功能。

```mysql
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

**jobs队列字段**

```
queue: 队列名称，可以将不同场景队列放在不同队列中，默认所有队列都存放在default队列中
payload: 存放运行队列对象的必要参数，例如运行的是哪个对象，参数是什么，所以所有异步任务都可以存放到一个队列中
attempts: 当任务失败时候，重试次数，达到重试次数之后，还是失败，则放入到failed_jobs这个表中，可做后续操作。
reserved_at: 队列运行时的时间，如果重试，则就是重试时间，总之就是运行当前任务方法的时间，这个参数作用主要是当运行重试任务的时候，会通过配置中的 [reserved_at <= now()-retry_after]就可以获取到重试队列。总结：重试任务间隔时间
available_at: 当前任务开始执行的时间，通过这个可以做延时队列
```

## 如何查询队列

在数据表中查询队列逻辑就是找到满足时间的job，然后运行。

```php
protected function getNextAvailableJob($queue)
{
    $job = $this->database->table($this->table)
                ->lockForUpdate()
                ->where('queue', $this->getQueue($queue))
                ->where(function ($query) {
                    $this->isAvailable($query);
                    $this->isReservedButExpired($query);
                })
                ->orderBy('id', 'asc')
                ->first();

    return $job ? new DatabaseJobRecord((object) $job) : null;
}

// 可用任务条件
protected function isAvailable($query)
{
    $query->where(function ($query) {
        $query->whereNull('reserved_at')
              ->where('available_at', '<=', $this->currentTime());
    });
}

// 重试任务条件
protected function isReservedButExpired($query)
{
    $expiration = Carbon::now()->subSeconds($this->retryAfter)->getTimestamp();

    $query->orWhere(function ($query) use ($expiration) {
        $query->where('reserved_at', '<=', $expiration);
    });
}
```

## 创建任务

生产者通过简单的调用方法，就可以创建异步队列任务，下面是主要方法

```
use App\Jobs\ProcessPodcast;

// 在默认default队列中投递任务
ProcessPodcast::dispatch($podcast);

// 在指定队列中投放任务
ProcessPodcast::dispatch($podcast)->onQueue("high");

// 存放到指定驱动队列中
ProcessPodcast::dispatch($podcast)->onConnection("redis");

// 延时队列
ProcessPodcast::dispatch($podcast)->addMinutes(10));

// 同步执行
ProcessPodcast::dispatchNow($podcast);

// 执行多个队列链
ProcessPodcast::withChain([
    new OptimizePodcast,
    new ReleasePodcast
])->dispatch();

```


## 失败任务

失败任务是指队列job在运行的时候，抛出了异常。对于这种任务后续处理逻辑是里进行重试。重试逻辑是：先删除当前任务，然后再新增一个任务，attempts增加1。当重试次数完还是失败，会回调方法`failed($exception)`

```
// 这里是所有重试次数都执行完了，才抛出错误. 可以进行邮件通知或者继续加入到队列中
public function failed($exception = null)
{
    dump("错误了");
    Log::info("队列失败了");
}
```

## 队列中的相关参数

### 最大重试次数tries

当任务执行失败的时候，会进行重试机制，所以可以指定最大重试的次数，分别可以通过以下三种方式来指定

1. 在任务类中定义重试次数，**优先级最高**

```
class ProcessPodcast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var int 重试次数，优先级最高
     */
    public $tries = 5;
```

2. 在名行中定义重试次数，**优先级第二**

```
 php artisan queue:work --tries=1
```

3. 基于在指定时间内设置无限重试 **优先级最低**

```
class ProcessPodcast implements ShouldQueue
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
        $this->podcast = $podcast;
    }

    // 基于时间的重试，再该时间内可以无限重试，优先级最低
    public function retryUntil()
    {
        return now()->addSeconds(100);
    }
```

### 任务超时timeout

当运行一个任务的时候，可以指定超时时间，当超过这个时间，则worker则会直接被kill,所以这个要配合`supervisor`一起来使用

超时被kill原理是通过pcntl信号机制来实现的，首先设置一个定时器，然后监控超时信号，下面是核心源码。

```
// Illuminate\Queue\Worker
// 注册超时Handler
protected function registerTimeoutHandler($job, WorkerOptions $options)
{
    // 坚挺SIGALRM超时信号
    pcntl_signal(SIGALRM, function () use ($job, $options) {
        if ($job) {
            $this->markJobAsFailedIfWillExceedMaxAttempts(
                $job->getConnectionName(), $job, (int) $options->maxTries, $this->maxAttemptsExceededException($job)
            );
        }

        $this->kill(1);
    });
    
    // 注册超时信号，timeout=0表示不超时
    pcntl_alarm(
        max($this->timeoutForJob($job, $options), 0)
    );
}

// 超时杀掉worker进程
public function kill($status = 0)
{
    $this->events->dispatch(new Events\WorkerStopping($status));

    if (extension_loaded('posix')) {
        posix_kill(getmypid(), SIGKILL);
    }

    exit($status);
}
```

超时kill进程好处就是防止资源消耗过大，直接结束进程。当被杀掉进程，队列重启的时候，会重试，这个时候会配合`retry_after`参数一起来查询任务进行重试运行。

### 延时队列

延时队列其实实现也简单，就是在创建任务的时候，指定在什么时候可以开始执行，在`database`驱动中通过字段`available_at`来查询任务。

### 队列优先级

当运行worker的时候指定多个队列，顺序是根据指定的队列顺序。其实原理就是当从第一个队列中找到了job，就继续从第一个中找，只有当没有就从第二个队列中找

```
php artisan queue:work --queue=high,low

// 通过传递参数，调用方先指定(high) ，如果有就继续(high), 否则执行(low)
protected function getNextAvailableJob($queue){}
```

### 休眠sleep

当消费者worker在查找队列任务的时候，如果发现为空，则可以休眠，减少无用消耗。这个是在启动队列的时候指定的参数

### 指定队列/驱动

运行worker的时候，可以指定运行的queue，和驱动

```
php artisan queue:work redis --queue=high,low --sleep=3
```



### 队列事件

对于队列处理，会有相应的事件方法，一般用可以用来记录日志或者发送邮件

```php
<?php

namespace App\Providers;

use Illuminate\Queue\Events\JobProcessed;
use Illuminate\Queue\Events\JobProcessing;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Queue;
use Illuminate\Queue\Events\JobFailed;

class EventServiceProvider extends ServiceProvider

public function boot()
{
    parent::boot();

    Queue::before(function (JobProcessing $event) {

        dump("运行开始之前事件");
        // $event->connectionName
        // $event->job
        // $event->job->payload()
    });

    Queue::after(function (JobProcessed $event) {
        dump("结束事件");
        // $event->connectionName
        // $event->job
        // $event->job->payload()
    });

    // 失败事件
    Queue::failing(function (JobFailed $event) {
        dump("失败了任务");
        // $event->connectionName
        // $event->job
        // $event->exception
    });

}
```


## horizon

对于启动多个消费者，则需要使用horizon,supervisor这种多进程管理工具。
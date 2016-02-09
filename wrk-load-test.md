
### node server load tested with vegeta : normal load

```
➜ ./wrk -t12 -c400 -d30s http://127.0.0.1:3000/

Running 30s test @ http://127.0.0.1:3000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   241.77ms   45.11ms 907.55ms   82.10%
    Req/Sec   133.98     59.75   373.00     71.01%
  47510 requests in 30.10s, 9.06MB read
  Socket errors: connect 0, read 268, write 0, timeout 0
Requests/sec:   1578.63
Transfer/sec:    308.33KB
```
```
Running 30s test @ http://127.0.0.1:3000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   249.21ms   42.95ms 667.09ms   83.70%
    Req/Sec   133.73     69.79   393.00     67.96%
  46766 requests in 30.10s, 8.92MB read
  Socket errors: connect 0, read 248, write 0, timeout 0
Requests/sec:   1553.50
Transfer/sec:    303.43KB

```

### pm2 clustered node server load tested with vegeta : normal load

```
./wrk -t12 -c400 -d30s http://127.0.0.1:3000/

Running 30s test @ http://127.0.0.1:3000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   125.67ms   46.02ms   1.47s    86.24%
    Req/Sec   266.66     73.17     1.13k    76.41%
  95046 requests in 30.04s, 18.13MB read
Requests/sec:   3163.64
Transfer/sec:    617.92KB
```
```
Running 30s test @ http://127.0.0.1:3000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   125.29ms   75.31ms   1.99s    94.54%
    Req/Sec   262.71     82.71     1.10k    76.33%
  93650 requests in 30.08s, 17.86MB read
  Socket errors: connect 0, read 165, write 2, timeout 127
Requests/sec:   3113.67
Transfer/sec:    608.15KB
```
```
Running 30s test @ http://127.0.0.1:3000/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   133.05ms   62.86ms   1.89s    90.94%
    Req/Sec   253.58     80.82     1.09k    77.26%
  90484 requests in 30.06s, 17.26MB read
  Socket errors: connect 0, read 0, write 0, timeout 1
Requests/sec:   3010.31
Transfer/sec:    587.97KB
```


## results under normal load
pm2 has double throughput rate with half latency and much less socket errors in most cases.
But with 4 cores in use on local machine. (worth cost on amazon?)




### pm2 clustered node server load tested with vegeta : high load
```
./wrk -t200 -c1400 -d30s http://127.0.0.1:3000/

Running 30s test @ http://127.0.0.1:3000/
  200 threads and 1400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   238.90ms   90.78ms   1.94s    82.26%
    Req/Sec    30.78     21.65     1.97k    81.28%
  90631 requests in 30.06s, 17.29MB read
  Socket errors: connect 0, read 364, write 0, timeout 534
Requests/sec:   3014.99
Transfer/sec:    588.90KB
```
```
Running 30s test @ http://127.0.0.1:3000/
  200 threads and 1400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   238.31ms   86.37ms   1.97s    73.87%
    Req/Sec    24.15     18.40   820.00     76.29%
  92410 requests in 30.11s, 17.63MB read
  Socket errors: connect 0, read 1165, write 0, timeout 541
Requests/sec:   3069.52
Transfer/sec:    599.52KB
```
```
Running 30s test @ http://127.0.0.1:3000/
  200 threads and 1400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   194.51ms   81.73ms   1.99s    71.10%
    Req/Sec    31.14     22.71   815.00     78.98%
  94246 requests in 30.07s, 17.98MB read
  Socket errors: connect 0, read 1316, write 0, timeout 625
Requests/sec:   3133.84
Transfer/sec:    612.10KB
```


### node server load tested with vegeta : high load

```
./wrk -t200 -c1400 -d30s http://127.0.0.1:3000/

Running 30s test @ http://127.0.0.1:3000/
  200 threads and 1400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   642.84ms  218.53ms   1.94s    70.64%
    Req/Sec    11.69     11.48    70.00     86.48%
  40524 requests in 30.11s, 7.73MB read
  Socket errors: connect 0, read 1560, write 0, timeout 128
Requests/sec:   1345.98
Transfer/sec:    262.89KB
```
```
Running 30s test @ http://127.0.0.1:3000/
  200 threads and 1400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   568.36ms  171.68ms   1.52s    72.48%
    Req/Sec    14.31     15.00   100.00     84.69%
  47154 requests in 30.10s, 8.99MB read
  Socket errors: connect 0, read 1627, write 7, timeout 0
Requests/sec:   1566.46
Transfer/sec:    305.96KB
```
```
Running 30s test @ http://127.0.0.1:3000/
  200 threads and 1400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   581.26ms  186.92ms   1.64s    69.77%
    Req/Sec    13.58     13.81   110.00     86.31%
  44483 requests in 30.11s, 8.48MB read
  Socket errors: connect 0, read 1719, write 2, timeout 0
Requests/sec:   1477.57
Transfer/sec:    288.59KB
```

## results under high load
the timeouts happening are comparable in the given time segment of load, but the request/sec served by pm2 cluster is 2-3 times.
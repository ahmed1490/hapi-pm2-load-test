

```
#### no pm2
➜  wrk git:(master) ✗ ./wrk -t25 -c25 -d30s https://fjord-pm209/cart

Running 30s test @ https://fjord-pm209/cart
  25 threads and 25 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.80s   252.98ms   1.99s    94.66%
    Req/Sec     0.02      0.16     2.00     98.34%
  362 requests in 30.11s, 26.92MB read
  Socket errors: connect 0, read 0, write 0, timeout 100
Requests/sec:     12.02
Transfer/sec:      0.89MB


#### 2 node pm2
➜  wrk git:(master) ✗ ./wrk -t25 -c25 -d30s https://fjord-pm208/cart

Running 30s test @ https://fjord-pm208/cart
  25 threads and 25 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   630.98ms  202.98ms   1.89s    81.20%
    Req/Sec     1.18      0.55     4.00     72.78%
  1172 requests in 30.10s, 87.17MB read
  Socket errors: connect 0, read 0, write 0, timeout 1
Requests/sec:     38.93
Transfer/sec:      2.90MB
```

```
#### no pm2
➜  wrk git:(master) ✗ ./wrk -t25 -c30 -d30s https://fjord-pm209/cart

Running 30s test @ https://fjord-pm209/cart
  25 threads and 30 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.82s   265.02ms   2.00s    93.95%
    Req/Sec     0.02      0.16     2.00     98.09%
  367 requests in 30.11s, 27.33MB read
  Socket errors: connect 0, read 0, write 0, timeout 86
Requests/sec:     12.19
Transfer/sec:      0.91MB


#### 2 node pm2
➜  wrk git:(master) ✗ ./wrk -t25 -c30 -d30s https://fjord-pm208/cart

Running 30s test @ https://fjord-pm208/cart
  25 threads and 30 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   618.14ms  242.83ms   1.73s    74.04%
    Req/Sec     1.44      0.83     5.00     82.86%
  1196 requests in 30.11s, 88.95MB read
Requests/sec:     39.73
Transfer/sec:      2.95MB
```

```
#### no pm2
➜  wrk git:(master) ✗ ./wrk -t30 -c30 -d30s https://fjord-pm209/cart

Running 30s test @ https://fjord-pm209/cart
  30 threads and 30 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.10s   539.91ms   1.96s    58.33%
    Req/Sec     0.03      0.19     2.00     97.88%
  377 requests in 30.10s, 28.06MB read
  Socket errors: connect 0, read 0, write 0, timeout 353
Requests/sec:     12.53
Transfer/sec:      0.93MB


#### 2 node pm2
➜  wrk git:(master) ✗ ./wrk -t30 -c30 -d30s https://fjord-pm208/cart

Running 30s test @ https://fjord-pm208/cart
  30 threads and 30 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   715.12ms  222.22ms   1.90s    81.00%
    Req/Sec     0.99      0.62     9.00     82.13%
  1175 requests in 30.11s, 87.30MB read
  Socket errors: connect 0, read 0, write 0, timeout 15
Requests/sec:     39.03
Transfer/sec:      2.90MB
```

```
#### no pm2
➜  wrk git:(master) ✗ ./wrk -t20 -c40 -d30s https://fjord-pm209/cart

Running 30s test @ https://fjord-pm209/cart
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   955.10ms  315.76ms   1.33s    77.27%
    Req/Sec     1.69      2.95    10.00     88.19%
  374 requests in 30.11s, 27.81MB read
  Socket errors: connect 0, read 0, write 0, timeout 352
Requests/sec:     12.42
Transfer/sec:      0.92MB


#### 2 node pm2
➜  wrk git:(master) ✗ ./wrk -t20 -c40 -d30s https://fjord-pm208/cart

Running 30s test @ https://fjord-pm208/cart
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   950.47ms  298.35ms   1.99s    80.41%
    Req/Sec     2.70      2.71    20.00     87.88%
  1108 requests in 30.11s, 82.40MB read
  Socket errors: connect 0, read 0, write 0, timeout 26
Requests/sec:     36.80
Transfer/sec:      2.74MB
```

```
#### no pm2
➜  wrk git:(master) ✗ ./wrk -t20 -c100 -d30s https://fjord-pm209/cart

Running 30s test @ https://fjord-pm209/cart
  20 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    36.38ms   76.25ms   1.98s    99.26%
    Req/Sec   132.76     55.11   202.00     77.96%
  33990 requests in 30.10s, 24.90MB read
  Socket errors: connect 0, read 0, write 0, timeout 267
  Non-2xx or 3xx responses: 33703
Requests/sec:   1129.33
Transfer/sec:    847.29KB


#### 2 node pm2
➜  wrk git:(master) ✗ ./wrk -t20 -c100 -d30s https://fjord-pm208/cart

Running 30s test @ https://fjord-pm208/cart
  20 threads and 100 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.23s   477.58ms   2.00s    57.72%
    Req/Sec     3.50      3.69    29.00     80.24%
  1007 requests in 30.10s, 75.75MB read
  Socket errors: connect 0, read 0, write 0, timeout 638
Requests/sec:     33.45
Transfer/sec:      2.52MB
```

```
#### no pm2
➜  wrk git:(master) ✗ ./wrk -t40 -c40 -d30s https://fjord-pm209/cart

Running 30s test @ https://fjord-pm209/cart
  40 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.09s   522.83ms   1.92s    57.89%
    Req/Sec     0.02      0.15     2.00     98.38%
  371 requests in 30.10s, 27.61MB read
  Socket errors: connect 0, read 0, write 0, timeout 352
Requests/sec:     12.32
Transfer/sec:      0.92MB


#### 2 node pm2
➜  wrk git:(master) ✗ ./wrk -t40 -c40 -d30s https://fjord-pm208/cart

Running 30s test @ https://fjord-pm208/cart
  40 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   887.02ms  277.89ms   1.97s    79.68%
    Req/Sec     0.84      0.73     9.00     70.72%
  1192 requests in 30.10s, 88.56MB read
  Socket errors: connect 0, read 0, write 0, timeout 21
Requests/sec:     39.60
Transfer/sec:      2.94MB
```

```
#### no pm2
➜  wrk git:(master) ✗ ./wrk -t50 -c50 -d30s https://fjord-pm209/cart

Running 30s test @ https://fjord-pm209/cart
  50 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    43.24ms  112.29ms   1.97s    98.38%
    Req/Sec    29.50     10.21    40.00     70.80%
  11238 requests in 30.11s, 24.27MB read
  Socket errors: connect 0, read 0, write 0, timeout 287
  Non-2xx or 3xx responses: 10927
Requests/sec:    373.25
Transfer/sec:    825.50KB


#### 2 node pm2
➜  wrk git:(master) ✗ ./wrk -t50 -c50 -d30s https://fjord-pm208/cart

Running 30s test @ https://fjord-pm208/cart
  50 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.13s   177.14ms   1.99s    86.57%
    Req/Sec     0.11      0.32     2.00     89.75%
  1190 requests in 30.11s, 88.55MB read
  Socket errors: connect 0, read 0, write 0, timeout 66
Requests/sec:     39.53
Transfer/sec:      2.94MB
```

```
#### no pm2
➜  wrk git:(master) ✗ ./wrk -t50 -c70 -d30s https://fjord-pm209/cart

Running 30s test @ https://fjord-pm209/cart
  50 threads and 70 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    38.40ms   89.29ms   1.94s    99.03%
    Req/Sec    29.72     10.09    40.00     73.06%
  11520 requests in 30.11s, 23.78MB read
  Socket errors: connect 0, read 0, write 0, timeout 284
  Non-2xx or 3xx responses: 11216
Requests/sec:    382.65
Transfer/sec:    808.97KB


#### 2 node pm2
➜  wrk git:(master) ✗ ./wrk -t50 -c70 -d30s https://fjord-pm208/cart

Running 30s test @ https://fjord-pm208/cart
  50 threads and 70 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.06s   253.43ms   1.99s    84.29%
    Req/Sec     0.29      0.64     4.00     77.53%
  1184 requests in 30.10s, 88.00MB read
  Socket errors: connect 0, read 0, write 0, timeout 83
Requests/sec:     39.33
Transfer/sec:      2.92MB
```



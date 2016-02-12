### raw node server
```
➜  wrk git:(master) ✗ ./wrk -t20 -c40 -d30s http://127.0.0.1:8080/cart
Running 30s test @ http://127.0.0.1:8080/cart
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.26s   136.73ms   1.86s    87.20%
    Req/Sec     3.05      3.93    10.00     72.43%
  930 requests in 30.07s, 68.49MB read
Requests/sec:     30.92
Transfer/sec:      2.28MB

➜  wrk git:(master) ✗ ./wrk -t20 -c40 -d30s http://127.0.0.1:8080/cart
Running 30s test @ http://127.0.0.1:8080/cart
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.05s   169.80ms   1.99s    86.26%
    Req/Sec     2.92      3.59    19.00     77.53%
  1121 requests in 30.08s, 82.54MB read
Requests/sec:     37.27
Transfer/sec:      2.74MB
```

### 1 node cluster
```
➜  wrk git:(master) ✗ ./wrk -t20 -c40 -d30s http://localhost:8080/cart
Running 30s test @ http://localhost:8080/cart
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   800.20ms  260.64ms   1.80s    71.01%
    Req/Sec     3.81      3.59    20.00     66.67%
  1091 requests in 30.08s, 80.33MB read
  Socket errors: connect 0, read 0, write 0, timeout 32
Requests/sec:     36.27
Transfer/sec:      2.67MB

➜  wrk git:(master) ✗ ./wrk -t20 -c40 -d30s http://127.0.0.1:8080/cart
Running 30s test @ http://127.0.0.1:8080/cart
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   808.02ms  272.35ms   1.99s    72.61%
    Req/Sec     3.68      3.53    20.00     67.98%
  1069 requests in 30.09s, 78.71MB read
  Socket errors: connect 0, read 0, write 0, timeout 32
Requests/sec:     35.52
Transfer/sec:      2.62MB
```

### 2 node cluster
```
➜  wrk git:(master) ✗ ./wrk -t20 -c40 -d30s http://127.0.0.1:8080/cart
Running 30s test @ http://127.0.0.1:8080/cart
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   674.98ms  229.12ms   1.82s    80.14%
    Req/Sec     4.53      3.78    19.00     58.97%
  1557 requests in 30.10s, 114.63MB read
  Socket errors: connect 0, read 0, write 0, timeout 28
Requests/sec:     51.72
Transfer/sec:      3.81MB

➜  wrk git:(master) ✗ ./wrk -t20 -c40 -d30s http://127.0.0.1:8080/cart
Running 30s test @ http://127.0.0.1:8080/cart
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   553.41ms  129.18ms   1.88s    82.60%
    Req/Sec     4.23      3.20    38.00     65.18%
  2023 requests in 30.09s, 148.93MB read
  Socket errors: connect 0, read 0, write 0, timeout 20
Requests/sec:     67.23
Transfer/sec:      4.95MB
```

### 4 node cluster

```
➜  wrk git:(master) ✗ ./wrk -t20 -c40 -d30s http://127.0.0.1:8080/cart
Running 30s test @ http://127.0.0.1:8080/cart
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   591.75ms  147.60ms   2.00s    86.23%
    Req/Sec     3.99      2.80    20.00     69.26%
  1963 requests in 30.09s, 144.54MB read
  Socket errors: connect 0, read 0, write 0, timeout 12
Requests/sec:     65.24
Transfer/sec:      4.80MB

➜  wrk git:(master) ✗ ./wrk -t20 -c40 -d30s http://127.0.0.1:8080/cart
Running 30s test @ http://127.0.0.1:8080/cart
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   587.05ms  144.28ms   1.84s    85.74%
    Req/Sec     4.09      3.02    20.00     62.89%
  1974 requests in 30.09s, 145.36MB read
  Socket errors: connect 0, read 0, write 0, timeout 12
Requests/sec:     65.61
Transfer/sec:      4.83MB
```



### node server load tested with vegeta : 1500r/sec load

2 sample tests

```
➜  Downloads  echo "GET http://localhost:3000/" | vegeta attack -duration=30s -connections=400 -rate=1500 | tee results.bin | vegeta report

Requests      [total, rate]            45000, 1500.03
Duration      [total, attack, wait]    31.482862061s, 29.999303235s, 1.483558826s
Latencies     [mean, 50, 95, 99, max]  1.209747877s, 15.377214ms, 3.332388444s, 4.167672093s, 7.716878579s
Bytes In      [total, mean]            276744, 6.15
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  47.31%
Status Codes  [code:count]             200:21288  0:23712
```
```

Requests      [total, rate]            45000, 1500.03
Duration      [total, attack, wait]    31.569965911s, 29.999303262s, 1.570662649s
Latencies     [mean, 50, 95, 99, max]  1.196673515s, 873.232485ms, 3.409811142s, 4.008301372s, 4.933461642s
Bytes In      [total, mean]            296777, 6.60
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  50.73%
Status Codes  [code:count]             200:22829  0:22171
Error Set:
```


### pm2 clustered node server load tested with vegeta : 1500r/s load

```
➜  Downloads  echo "GET http://localhost:3000/" | vegeta attack -duration=30s -connections=400 -rate=1500 | tee results.bin | vegeta report

Requests      [total, rate]            45000, 1500.03
Duration      [total, attack, wait]    30.007304814s, 29.999303115s, 8.001699ms
Latencies     [mean, 50, 95, 99, max]  343.314164ms, 193.778434ms, 1.231073328s, 3.428470598s, 5.438008221s
Bytes In      [total, mean]            560391, 12.45
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  95.79%
Status Codes  [code:count]             200:43107  0:1893
Error Set:
```
```
Requests      [total, rate]            45000, 1500.03
Duration      [total, attack, wait]    36.446199795s, 29.999303206s, 6.446896589s
Latencies     [mean, 50, 95, 99, max]  735.524662ms, 442.744897ms, 2.589485755s, 6.984564066s, 10.410978951s
Bytes In      [total, mean]            546338, 12.14
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  93.39%
Status Codes  [code:count]             200:42026  0:2974

```

## results under high load

The errors are all `Too many files open`

Error rate is drastically low with pm2, however with increased latency.



### normal node server load tested with vegeta : 500r/s load

```
➜  Downloads  echo "GET http://localhost:3000/" | vegeta attack -duration=30s -connections=400 -rate=500 | tee results.bin | vegeta report

Requests      [total, rate]            15000, 500.03
Duration      [total, attack, wait]    29.999392066s, 29.997999903s, 1.392163ms
Latencies     [mean, 50, 95, 99, max]  2.945624ms, 1.49045ms, 8.108307ms, 46.927358ms, 89.685651ms
Bytes In      [total, mean]            195000, 13.00
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  100.00%
Status Codes  [code:count]             200:15000
Error Set:
```
```
Requests      [total, rate]            15000, 500.03
Duration      [total, attack, wait]    29.999699468s, 29.997999892s, 1.699576ms
Latencies     [mean, 50, 95, 99, max]  4.336593ms, 1.503003ms, 11.191971ms, 99.141573ms, 208.070885ms
Bytes In      [total, mean]            195000, 13.00
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  100.00%
Status Codes  [code:count]             200:15000
Error Set:
```


### pm2 clustered node server load tested with vegeta : 500r/s load

```
➜  Downloads  echo "GET http://localhost:3000/" | vegeta attack -duration=30s -connections=400 -rate=500 | tee results.bin | vegeta report

Requests      [total, rate]            15000, 500.03
Duration      [total, attack, wait]    30.003100044s, 29.997999799s, 5.100245ms
Latencies     [mean, 50, 95, 99, max]  1.586005ms, 1.411899ms, 2.062763ms, 4.367381ms, 49.85332ms
Bytes In      [total, mean]            195000, 13.00
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  100.00%
Status Codes  [code:c
```
```
Requests      [total, rate]            15000, 500.03
Duration      [total, attack, wait]    29.999575888s, 29.99799988s, 1.576008ms
Latencies     [mean, 50, 95, 99, max]  2.205785ms, 1.5073ms, 5.56287ms, 13.228677ms, 48.67748ms
Bytes In      [total, mean]            195000, 13.00
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  100.00%
Status Codes  [code:count]             200:15000
Error Set:
```

## results under normal load

0% error rate in both cases with negligible reduction in latency with pm2
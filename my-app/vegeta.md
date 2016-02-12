### raw node server
```
➜  Downloads  echo "GET http://localhost:8080/cart" | vegeta attack -duration=30s -connections=100 -rate=500 | tee results.bin | vegeta report
Requests      [total, rate]            15000, 500.03
Duration      [total, attack, wait]    33.902570526s, 29.997999868s, 3.904570658s
Latencies     [mean, 50, 95, 99, max]  550.982195ms, 391.701µs, 9.093372139s, 12.494744808s, 13.941839711s
Bytes In      [total, mean]            66121177, 4408.08
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  5.73%
Status Codes  [code:count]             0:14140  200:860
Error Set:
Get http://localhost:8080/cart: dial tcp 0.0.0.0:0->127.0.0.1:8080: socket: too many open files
```

### 1 node cluster
```
➜  Downloads  echo "GET http://localhost:8080/cart" | vegeta attack -duration=30s -connections=100 -rate=500 | tee results.bin | vegeta report
Requests      [total, rate]            15000, 500.03
Duration      [total, attack, wait]    31.542667128s, 29.997999868s, 1.54466726s
Latencies     [mean, 50, 95, 99, max]  509.924053ms, 369.013µs, 1.506207064s, 30.001111656s, 31.006595554s
Bytes In      [total, mean]            83113712, 5540.91
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  7.21%
Status Codes  [code:count]             200:1081  0:13919
Error Set:
Get http://localhost:8080/cart: dial tcp 0.0.0.0:0->127.0.0.1:8080: socket: too many open files
Get http://localhost:8080/cart: net/http: timeout awaiting response headers

➜  Downloads  echo "GET http://localhost:8080/cart" | vegeta attack -duration=30s -connections=100 -rate=500 | tee results.bin | vegeta report
Requests      [total, rate]            15000, 500.03
Duration      [total, attack, wait]    31.57062262s, 29.997999882s, 1.572622738s
Latencies     [mean, 50, 95, 99, max]  509.110021ms, 369.455µs, 1.477881836s, 30.000659227s, 30.385763095s
Bytes In      [total, mean]            87132040, 5808.80
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  7.55%
Status Codes  [code:count]             200:1133  0:13867
Error Set:
Get http://localhost:8080/cart: dial tcp 0.0.0.0:0->127.0.0.1:8080: socket: too many open files
Get http://localhost:8080/cart: net/http: timeout awaiting response headers
```

### 2 node cluster
```
➜  Downloads  echo "GET http://localhost:8080/cart" | vegeta attack -duration=30s -connections=100 -rate=500 | tee results.bin | vegeta report
Requests      [total, rate]            15000, 500.03
Duration      [total, attack, wait]    31.532691461s, 29.997999844s, 1.534691617s
Latencies     [mean, 50, 95, 99, max]  509.283383ms, 409.061µs, 2.117676442s, 20.871292828s, 30.568153003s
Bytes In      [total, mean]            122493294, 8166.22
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  10.62%
Status Codes  [code:count]             200:1593  0:13407
Error Set:
Get http://localhost:8080/cart: dial tcp 0.0.0.0:0->127.0.0.1:8080: socket: too many open files
Get http://localhost:8080/cart: net/http: timeout awaiting response headers

➜  Downloads  echo "GET http://localhost:8080/cart" | vegeta attack -duration=30s -connections=100 -rate=500 | tee results.bin | vegeta report
Requests      [total, rate]            15000, 500.03
Duration      [total, attack, wait]    32.676671067s, 29.997999881s, 2.678671186s
Latencies     [mean, 50, 95, 99, max]  510.269325ms, 407.547µs, 2.15319627s, 17.75104131s, 30.73430124s
Bytes In      [total, mean]            132721951, 8848.13
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  11.51%
Status Codes  [code:count]             200:1726  0:13274
Error Set:
Get http://localhost:8080/cart: dial tcp 0.0.0.0:0->127.0.0.1:8080: socket: too many open files
Get http://localhost:8080/cart: net/http: timeout awaiting response headers
```

### 4 node cluster
```
➜  Downloads  echo "GET http://localhost:8080/cart" | vegeta attack -duration=30s -connections=100 -rate=500 | tee results.bin | vegeta report
Requests      [total, rate]            15000, 500.03
Duration      [total, attack, wait]    32.320021465s, 29.997999866s, 2.322021599s
Latencies     [mean, 50, 95, 99, max]  518.526284ms, 444.597µs, 2.92928539s, 9.642584652s, 30.806934384s
Bytes In      [total, mean]            143400856, 9560.06
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  12.43%
Status Codes  [code:count]             200:1865  0:13135
Error Set:
Get http://localhost:8080/cart: dial tcp 0.0.0.0:0->127.0.0.1:8080: socket: too many open files
Get http://localhost:8080/cart: net/http: timeout awaiting response headers

➜  Downloads  echo "GET http://localhost:8080/cart" | vegeta attack -duration=30s -connections=100 -rate=500 | tee results.bin | vegeta report
Requests      [total, rate]            15000, 500.03
Duration      [total, attack, wait]    32.728964787s, 29.997999591s, 2.730965196s
Latencies     [mean, 50, 95, 99, max]  522.528569ms, 465.825µs, 2.989314987s, 9.543127183s, 32.012734877s
Bytes In      [total, mean]            123107431, 8207.16
Bytes Out     [total, mean]            0, 0.00
Success       [ratio]                  10.67%
Status Codes  [code:count]             200:1601  0:13399
Error Set:
Get http://localhost:8080/cart: dial tcp 0.0.0.0:0->[::1]:8080: socket: too many open files
Get http://localhost:8080/cart: dial tcp 0.0.0.0:0->127.0.0.1:8080: socket: too many open files
Get http://localhost:8080/cart: net/http: timeout awaiting response headers
```
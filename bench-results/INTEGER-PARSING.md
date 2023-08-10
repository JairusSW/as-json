# Comparison between integer parsing algorithms

SNIP: 261M iterations over 5000ms
ATOI: 285M iterations over 5000ms


### Log

```
yarn run v1.22.19
$ astral -Ospeed --noAssert --uncheckedBehavior always --runtime stub
Compiling assembly/__benches__/as-json.ts

Benchmarking Parse Number SNIP: Warming up for 3000ms
Benchmarking Parse Number SNIP: Collecting 100 samples in estimated 5000ms (261M iterations)
Benchmarking Parse Number SNIP: Analyzing
Parse Number SNIP       time: [18.146ns 18.381ns 18.624ns]
                        change: [-13.073% -10.614% -8.1347%] (p = 0.00 < 0.05)
                        Performance has improved.
Found 9 outliers among 100 measurements (9%)
  8 (8%) high mild
  1 (1%) high severe

Benchmarking Parse Number ATOI: Warming up for 3000ms
Benchmarking Parse Number ATOI: Collecting 100 samples in estimated 5000ms (285M iterations)
Benchmarking Parse Number ATOI: Analyzing
Parse Number ATOI       time: [16.962ns 17.219ns 17.501ns]
                        change: [-3.5659% -0.8496% +2.0516%] (p = 0.00 < 0.05)
                        Change within noise threshold.
Found 7 outliers among 100 measurements (7%)
  2 (2%) high mild
  5 (5%) high severe

Benchmarking Parse Number STDLIB: Warming up for 3000ms
Benchmarking Parse Number STDLIB: Collecting 100 samples in estimated 5000ms (176M iterations)
Benchmarking Parse Number STDLIB: Analyzing
Parse Number STDLIB     time: [28.298ns 28.763ns 29.383ns]
                        change: [-3.3724% -1.5367% +0.1796%] (p = 0.00 < 0.05)
                        Change within noise threshold.
Found 5 outliers among 100 measurements (5%)
  3 (3%) high mild
  2 (2%) high severe

Benchmarking Parse Number OLD: Warming up for 3000ms
Benchmarking Parse Number OLD: Collecting 100 samples in estimated 5000ms (171M iterations)
Benchmarking Parse Number OLD: Analyzing
Parse Number OLD        time: [28.888ns 29.341ns 29.804ns]
                        change: [-2.123% -0.5458% +1.1939%] (p = 0.00 < 0.05)
                        Change within noise threshold.
Found 3 outliers among 100 measurements (3%)
  3 (3%) high mild
  ```
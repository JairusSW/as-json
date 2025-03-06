import { Bench } from "tinybench";
// Trying a new benchmarking lib.

// JavaScript Results
// ┌─────────┬───────────────────────────┬─────────────┬────────────────────┬──────────┬─────────┐
// │ (index) │         Task Name         │  ops / sec  │  Average Time(ns)  │  Margin  │ Samples │
// ├─────────┼───────────────────────────┼─────────────┼────────────────────┼──────────┼─────────┤
// │    0    │ 'Stringify Object (Vec3)' │  '817,816'  │      1222.76       │ '±3.55%' │  81782  │
// │    1    │   'Parse Object (Vec3)'   │  '726,115'  │      1377.19       │ '±3.21%' │  72612  │
// │    2    │ 'Stringify Number Array'  │ '1,104,036' │      905.77        │ '±6.48%' │ 110404  │
// │    3    │   'Parse Number Array'    │ '1,114,053' │      897.62        │ '±2.58%' │ 111406  │
// │    4    │    'Stringify String'     │ '1,565,716' │      638.69        │ '±2.04%' │ 156572  │
// │    5    │      'Parse String'       │  '69,568'   │      14374.22      │ '±2.55%' │  6957   │
// └─────────┴───────────────────────────┴─────────────┴────────────────────┴──────────┴─────────┘

// AssemblyScript Results (Runtime Minimal)
// ┌─────────┬───────────────────────────┬─────────────┬────────────────────┬──────────┬─────────┐
// │ (index) │         Task Name         │  ops / sec  │  Average Time(ns)  │   Diff   │ Samples │
// ├─────────┼───────────────────────────┼─────────────┼────────────────────┼──────────┼─────────┤
// │    0    │ 'Stringify Object (Vec3)' │ '2,091,000' │       417.22       │  -805ns  │ ------- │
// │    1    │   'Parse Object (Vec3)'   │ '1,780,000' │       539.02       │  -838ns  │ ------- |
// │    2    │ 'Stringify Number Array'  │ '1,920,000' │       445.43       │  -460ns  │ ------- │
// │    3    │   'Parse Number Array'    │ '1,660,000' │       597.17       │  -300ns  │ ------- │
// │    4    │    'Stringify String'     │ '1,280,000' │       736.27       │   +97ns  │ ------- │
// │    5    │      'Parse String'       │ '4,230,000' │       239.21       │ -14135ns │ ------- │
// └─────────┴───────────────────────────┴─────────────┴────────────────────┴──────────┴─────────┘

const vec = {
  x: 3,
  y: 1,
  z: 8,
};

let data;

const bench = new Bench({ time: 1000 })
  .add("serialize vec3", () => (data = JSON.stringify(vec)))
  .add("deserialize vec3", () => {
    data = JSON.parse('{"x":3,"y":1,"z":8}');
  })
  .add("serialize alphabet string", () => {
    data = JSON.stringify("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()-_=+{[}]|\\:;\"'?/>.<,'\"}");
  })
  .add("deserialize alphabet string", () => {
    data = JSON.parse('"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()-_=+{[}]|\\\\:;\\"\'?/>.<,\'\\"}"');
  }) /*
    .add("parse float", () => {
        data = JSON.parse("1.2345")
    })
    .add("stringify iny", () => {
        data = JSON.stringify(12345)
    })
    .add("parse int", () => {
        data = JSON.parse("12345")
    })
    .add("Stringify Object (Vec3)", () => {
        data = JSON.stringify(vec);
    })

    .add("Parse Object (Vec3)", () => {
        data = JSON.parse('{"x":0,"y":0,"z":0}');
    })

    .add("Stringify Number Array", () => {
        data = JSON.stringify([1, 2, 3]);
    })

    .add("Parse Number Array", () => {
        data = JSON.parse("[1,2,3]");
    })

    .add("Stringify String", () => {
        data = JSON.stringify('Hello "World!');
    })

  .add("Parse String", () => {
    data = JSON.stringify('hello "world abc');
  })*/
  .todo("unimplemented .add");

await bench.run();

console.table(bench.table());

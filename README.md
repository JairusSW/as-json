# AS-JSON

![AssemblyScript](https://img.shields.io/badge/AssemblyScript-blue)
![WebAssembly](https://img.shields.io/badge/WebAssemby-purple)

JSON for AssemblyScript focused on performance, low-overhead, and ease-of-use.

## Installation

```bash
npm install json-as
```

Add the transform to your `asc` command (e.g. in package.json)

```bash
--transform json-as/transform
```

Alternatively, add it to your `asconfig.json`

```
{
  "options": {
    "transform": ["json-as/transform"]
  }
}
```

## Usage

```js
import { JSON } from "json-as/assembly";

// @json or @serializable work here
@json
class Vec3 {
  x!: f32;
  y!: f32;
  z!: f32;
}

@json
class Player {
  firstName!: string;
  lastName!: string;
  lastActive!: i32[];
  age!: i32;
  pos!: Vec3 | null;
  isVerified!: boolean;
}

const player: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: 23,
  pos: {
    x: 3.4,
    y: 1.2,
    z: 8.3
  },
  isVerified: true
};

const stringified = JSON.stringify<Player>(player);

const parsed = JSON.parse<Player>(stringified);
```

## Performance

Here are some benchmarks I took with `tinybench` (JavaScript) and `astral` (AssemblyScript).
I took the benchmarks using the minimal runtime which doesn't call the Garbage Collector, so you may expect a 10% to 40% decrease from low to high throughput.

Tests are run on Ubuntu/WSL2 with a AMD Ryzen 9 CPU

JavaScript Results (TinyBench/NodeJS 19)
```
┌───────────────────────────┬─────────────┬────────────────────┬──────────┐
│         Task Name         │  ops / sec  │  Average Time(ns)  │  Margin  │
├───────────────────────────┼─────────────┼────────────────────┼──────────┤
│ 'Stringify Object (Vec3)' │  '817,816'  │      1222.76       │ '±3.55%' │
│   'Parse Object (Vec3)'   │  '726,115'  │      1377.19       │ '±3.21%' │
│ 'Stringify Number Array'  │ '1,104,036' │      905.77        │ '±6.48%' │
│   'Parse Number Array'    │ '1,114,053' │      897.62        │ '±2.58%' │
│    'Stringify String'     │ '1,565,716' │      638.69        │ '±2.04%' │
│      'Parse String'       │  '69,568'   │      14374.22      │ '±2.55%' │
└───────────────────────────┴─────────────┴────────────────────┴──────────┘
```

AssemblyScript Results (Runtime Minimal)
```
┌───────────────────────────┬─────────────┬────────────────────┬──────────┐
│         Task Name         │  ops / sec  │  Average Time(ns)  │   Diff   │
├───────────────────────────┼─────────────┼────────────────────┼──────────┤
│ 'Stringify Object (Vec3)' │ '2,091,000' │       417.22       │  -805ns  │
│   'Parse Object (Vec3)'   │ '1,780,000' │       539.02       │  -838ns  |
│ 'Stringify Number Array'  │ '1,920,000' │       445.43       │  -460ns  │
│   'Parse Number Array'    │ '1,660,000' │       597.17       │  -300ns  │
│    'Stringify String'     │ '1,280,000' │       736.27       │   +97ns  │
│      'Parse String'       │ '4,230,000' │       239.21       │ -14135ns │
└───────────────────────────┴─────────────┴────────────────────┴──────────┘
```

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library

<h5 align="center">
<pre>    __  _____  _____  _____       _____  _____ 
 __|  ||   __||     ||   | | ___ |  _  ||   __|
|  |  ||__   ||  |  || | | ||___||     ||__   |
|_____||_____||_____||_|___|     |__|__||_____|
v0.9.21
</pre>
</h5>

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
  // ...
  "options": {
    "transform": ["json-as/transform"]
  }
}
```

If you'd like to see the code that the transform generates, run with `JSON_DEBUG=true`

## Usage

```js
import { JSON } from "json-as/assembly";

// @json or @serializable work here
@json
class Vec3 {
  x: f32 = 0.0;
  y: f32 = 0.0;
  z: f32 = 0.0;
}

@json
class Player {
  @alias("first name")
  firstName!: string;
  lastName!: string;
  lastActive!: i32[];
  // Drop in a code block, function, or expression that evaluates to a boolean
  @omitif("this.age < 18")
  age!: i32;
  @omitnull()
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

Classes can even have inheritance. Here's a nasty example

```js
@json
class Base {}

@json
class Vec1 extends Base {
  x: f32 = 1.0;
}
@json
class Vec2 extends Vec1 {
  y: f32 = 2.0;
}
@json
class Vec3 extends Vec2 {
  z: f32 = 3.0;
}

const arr: Base[] = [
  new Vec1(),
  new Vec2(),
  new Vec3()
];

const serialized = JSON.stringify(arr);
// [{"x":1.0},{"x":1.0,"y":2.0},{"y":2.0,"x":1.0,"z":3.0}]
const parsed = JSON.parse<Base[]>(serialized);
```

You can also add it to your `asconfig.json`

```json
{
  // ...
  "options": {
    "transform": ["json-as/transform"]
  }
}
````

If you use this project in your codebase, consider dropping a [star](https://github.com/JairusSW/as-json). I would really appreciate it!

## Notes

If you want a feature, drop an issue (and again, maybe a star). I'll likely add it in less than 7 days.

## Contact

Contact me at:

Email: `me@jairus.dev`
GitHub: `JairusSW`
Discord: `jairussw`

## Performance

Run or view the benchmarks [here](https://github.com/JairusSW/as-json/tree/master/bench)

Below are benchmark results comparing JavaScript's built-in JSON implementation and `JSON-AS`

My library beats JSON (written in C++) on all counts _and_, I see many places where I can pull at least a 60% uplift in performance if I implement it.

Note: SIMD is in-development and only available on the `v1` branch on GitHub

Serialization Benchmarks:

| Value                      | JavaScript (ops/s) | JSON-AS (ops/s)    | JSON-AS (Pages)     | JSON-AS (SIMD+Pages) | Max Throughput |
| -------------------------- | ------------------ | ------------------ | ------------------- | -------------------- | -------------- |
| "hello world"              | 7,124,361          | 44,290,480 (6.2x)  | 73,601,235 (10.3x)  | NOT IMPLEMENTED      | 1.91 GB/s      |
| 12345                      | 9,611,677          | 66,900,642 (6.9x)  | 145,924,333 (15.2x) | NOT IMPLEMENTED      | 0.58 GB/s      |
| 1.2345                     | 7,227,259          | 20,322,939 (2.8x)  | NOT IMPLEMENTED     | NOT IMPLEMENTED      | 0.16 GB/s      |
| [[],[[]],[[],[[]]]]        | 5,655,429          | 34,453,102 (6.0x)  | NOT IMPLEMENTED     | NOT IMPLEMENTED      | 1.32 GB/s      |
| { x: f64, y: f64, z: f64 } | 3,878,604          | 44,557,996 (11.5x) | 113,203,242 (29.2x) | 172,023,231 (44.4x)  | 8.61 GB/s      |

Deserialization Benchmarks:

| Value                      | JavaScript (ops/s) | JSON-AS (ops/s) | Difference |
| -------------------------- | ------------------ | --------------- | ---------- |
| "hello world"              | 12,210,131         | 24,274,496      | + 98%      |
| "12345"                    | 21,376,873         | 254,640,930     | + 1,191%   |
| 1.2345                     | 23,193,902         | 221,869,840     | + 987%     |
| [[],[[]],[[],[[]]]]        | 4,777,227          | 74,921,123      | + 1,568%   |
| { x: f64, y: f64, z: f64 } | 10,973,723         | 25,214,019      | + 230%     |

And my PC specs:

| Component      | Specification                  |
| -------------- | ------------------------------ |
| Wasmer Version | v4.3.0                         |
| CPU            | AMD Ryzen 7 7800x3D @ 6.00 GHz |
| Memory         | T-Force DDR5 6000 MHz          |
| OS             | Ubuntu WSL2                    |

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library

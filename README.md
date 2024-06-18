<h3 align="center">
<pre>
 ╦╔═╗╔═╗╔╗╔   ╔═╗╔═╗
 ║╚═╗║ ║║║║───╠═╣╚═╗
╚╝╚═╝╚═╝╝╚╝   ╩ ╩╚═╝

v0.9.6
</pre>
</h3>

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

Classes can even have inheritance. Here's a nasty example

```js
@json
class Base {}

const serialized = JSON.stringify(arr);
// [{"x":1.0},{"x":1.0,"y":2.0},{"y":2.0,"x":1.0,"z":3.0}]
const parsed = JSON.parse<Base[]>(serialized);
```

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

My library beats JSON (written in C++) on all counts *and*, I see many places where I can pull at least a 60% uplift in performance if I implement it.


Serialization Benchmarks:

| Value                      | JavaScript (ops/s) | JSON-as (ops/s) | Difference |
|----------------------------|--------------------|-----------------|------------|
| "hello world"              | 28,629,598         | 64,210,666      | + 124%     |
| 12345                      | 31,562,431         | 56,329,066      | + 78%      |
| 1.2345                     | 15,977,278         | 20,322,939      | + 27%      |
| [[],[[]],[[],[[]]]]        | 8,998,624          | 34,453,102      | + 283%     |
| { x: f64, y: f64, z: f64 } | 15,583,686         | 17,604,821      | + 12%      |



Deserialization Benchmarks:

| Value                      | JavaScript (ops/s) | JSON-AS (ops/s) | Difference|
|----------------------------|--------------------|-----------------|-----------|
| "hello world"              | 12,210,131         | 24,274,496      | + 98%     |
| "12345"                    | 21,376,873         | 254,640,930     | + 1,191%  |
| 1.2345                     | 23,193,902         | 221,869,840     | + 987%    |
| [[],[[]],[[],[[]]]]        | 4,777,227          | 74,921,123      | + 1,568%  |
| { x: f64, y: f64, z: f64 } | 10,973,723         | 25,214,019      | + 230%    |

And my PC specs:

| Component       | Specification                        |
|-----------------|--------------------------------------|
| Wasmer Version  | v4.3.0                               |
| CPU             | AMD Ryzen 7 7800x3D @ 6.00 GHz       |
| Memory          | T-Force DDR5 6000 MHz                |
| OS              | Ubuntu WSL2                          |

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library
<h3 align="center">
<pre>
 █████╗ ███████╗           ██╗███████╗ ██████╗ ███╗   ██╗
██╔══██╗██╔════╝           ██║██╔════╝██╔═══██╗████╗  ██║
███████║███████╗█████╗     ██║███████╗██║   ██║██╔██╗ ██║
██╔══██║╚════██║╚════╝██   ██║╚════██║██║   ██║██║╚██╗██║
██║  ██║███████║      ╚█████╔╝███████║╚██████╔╝██║ ╚████║
╚═╝  ╚═╝╚══════╝       ╚════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝

v0.8.6
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

const stringified = JSON.stringify<Player>(player, true);
// You can toggle on setting default values with the 2nd parameter
// Alternative: use JSON.serializeTo(player, out);

const parsed = JSON.parse<Player>(stringified);
```

If you use this project in your codebase, consider dropping a [star](https://github.com/JairusSW/as-json). I would really appreciate it!

## Performance

Run or view the benchmarks [here](https://github.com/JairusSW/as-json/tree/master/bench)

Below are benchmark results comparing JavaScript's built-in JSON implementation and `JSON-AS`

My library beats JSON (written in C++) on all counts *and*, I see many places where I can pull at least a 60% uplift in performance if I implement it.


Serialization Benchmarks:

| Value                      | JavaScript (ops/s) | JSON-as (ops/s) | JSON-AS with Pages |
|----------------------------|--------------------|-----------------|--------------------|
| "hello world"              | 28,629,598         | 64,210,666      | + 124%             |
| 12345                      | 31,562,431         | 56,329,066      | 321,783,941 ops/s  |
| 1.2345                     | 15,977,278         | 20,322,939      | 30,307,616 ops/s  |
| [[],[[]],[[],[[]]]]        | 8,998,624          | 34,453,102      | + 283% |



Deserialization Benchmarks: (WIP)

| Value                      | JavaScript (ops/s) | JSON-AS (ops/s) | % Diff |
|----------------------------|--------------------|-----------------|--------|
| "12345"                    | 34,647,886         | 254,640,930     | + 635% |


And my PC specs:

| Component       | Specification                        |
|-----------------|--------------------------------------|
| Wasmer Version  | v4.3.0                               |
| CPU             | AMD Ryzen 7 7800x3D @ 6.00 GHz       |
| Memory          | T-Force DDR5 6000 MHz                |
| OS              | Ubuntu WSL2                          |
| Graphics        | AMD Radeon RX 6750XT                 |

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library
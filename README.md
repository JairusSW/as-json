
<h3 align="center">
<pre>
 █████╗ ███████╗           ██╗███████╗ ██████╗ ███╗   ██╗
██╔══██╗██╔════╝           ██║██╔════╝██╔═══██╗████╗  ██║
███████║███████╗█████╗     ██║███████╗██║   ██║██╔██╗ ██║
██╔══██║╚════██║╚════╝██   ██║╚════██║██║   ██║██║╚██╗██║
██║  ██║███████║      ╚█████╔╝███████║╚██████╔╝██║ ╚████║
╚═╝  ╚═╝╚══════╝       ╚════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝

v1.0.0
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
  x!: f32;
  y!: f32;
  z!: f32;
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

**Serialize String**

- Value: "hello world"

JavaScript: 28,629,598 ops/s

AssemblyScript: 64,210,666 ops/s

**Serialize Integer**

- Value 12345

JavaScript: 31,562,431 ops/s

AssemblyScript: 48,035,001 ops/s

**Serialize Float**

- Value 1.2345

JavaScript: 15,977,278 ops/s

AssemblyScript: 20,322,939 ops/s

**Serialize Set Theoretical Representation**

- Value [[],[[]],[[],[[]]]]

JavaScript: 8,998,624 ops/s

AssemblyScript: 34,453,102 ops/s

**Parse Integer**

- Value: "12345"

JavaScript: 34,647,886 ops/s

AssemblyScript: 254,640,930 ops/s

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library
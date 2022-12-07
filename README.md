# AS-JSON
![AssemblyScript](https://img.shields.io/badge/AssemblyScript-blue)
![WebAssembly](https://img.shields.io/badge/WebAssemby-purple)
## Installation

```bash
~ npm install json-as
```
```bash
~ npm install visitor-as
```

For arbitrary-length numbers, use

```bash
~ npm install as-bignum
```

Add the transform to your `asc` command

```bash
--transform json-as/transform
```

Or, add it to `asconfig.json`

```
{
  "options": {
    "transform": "json-as/transform"
  }
}
```

## Usage

```js
import { JSON } from "json-as/assembly";
import { u128 } from "as-bignum/assembly";

// @ts-ignore
@json
class Stats {
  wins: u128
  loss: u128
}
// @ts-ignore
@json
class Vec3 {
  x: f32;
  y: f32;
  z: f32;
}

// @ts-ignore
@json
class Player {
  firstName: string;
  lastName: string;
  lastActive: i32[];
  age: i32;
  pos: Vec3 | null;
  isVerified: boolean;
  stats: Stats
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
  isVerified: true,
  stats: {
    wins: u128.fromString("443"),
    loss: u128.fromString("693")
  }
};

const stringified = JSON.stringify<Player>(data);

const parsed = JSON.parse<Player>(stringified);
```

# FAQ

**Does it support the JSON specification?**
Yes, it does. However, dynamic objects and arrays are not supported, but planned in the near future.

**Is it fast?**
Look below

**How does it compare to other librarys?**
Its pretty much the same as the other libraries out there (near/assemblyscript-json and @serial-as/json), but it focuses highly on performance

**Will it catch invalid JSON?**
No, it does not check for invalid JSON, but gives its best shot at parsing instead. Will probably throw an error.

## Performance

**Serialize Object (Vec2):** ~7.20m ops/s

**Deserialize Object (Vec2):** ~2.2m ops/s

**Serialize Array (int[4]):** ~1.4m ops/s

**Deserialize Array (int[4]):** ~2.8m ops/s

**Serialize String (5):** ~5.2m ops/sw

**Deserialize String (5):** ~1.36m ops/s

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library
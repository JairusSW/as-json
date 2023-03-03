# AS-JSON
![AssemblyScript](https://img.shields.io/badge/AssemblyScript-blue)
![WebAssembly](https://img.shields.io/badge/WebAssemby-purple)

Probably the fastest JSON implementation for AssemblyScript with many more optimizations coming down the pipeline.
## Installation

```bash
npm install json-as
```
```bash
npm install visitor-as --save-dev
```

For arbitrary-length numbers, use

```bash
npm install as-bignum
```

Add the transform to your `asc` command

```bash
--transform json-as/transform
```

Or, add it to `asconfig.json`

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

## Notes

Performance exceeds JavaScript JSON implementation by an average of 230% but this decreases with larger data packets.

## Planned Features

- [x] Serialize
  - [x] Objects
  - [x] Other Types
  - [ ] Dynamic Types
- [x] Deserialize
  - [x] Objects
  - [x] Other Types
  - [ ] Dynamic Types
- [ ] Streaming API
- [ ] Whitespace support
- [ ] Integrate features from SIMDJson
- [x] Optimize
  - [x] Strings
  - [x] Int/Float
  - [x] Bool
  - [x] Object Serialization
  - [ ] Object Parsing
  - [ ] Arrays
## Performance

**Serialize Object (Vec3):** ~11.1m ops/s

**Deserialize Object (Vec3):** ~3.2m ops/s

**Serialize Array (int[]):** ~1.4m ops/s

**Deserialize Array (int[]):** ~2.8m ops/s

**Serialize String (5):** ~4.2m ops/s

**Deserialize String (5):** ~12m ops/s

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library
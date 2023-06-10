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

## Deviations from the spec

This implementation does not hold strongly to the JSON specification. Rather, design and behavior are inspired by the JSON implementation found in Google's v8 engine.

- No support for dynamic types
- Unsafe by design--parser assumes valid JSON
- Partial whitespace support--parser prefers speed over handling whitespace effectively. Users may use the `removeWhitespace` function provided by `json-as/src/util.ts`
- Is not based off of the official spec, but rather the behavior of the JSON C implementation found in google's v8 engine
- Support for scientific notation on integers. Float support coming soon.

## Implemented features

Fully supports:

- Strings
- Integers
- Floats (Scientific notation not implemented)
- Booleans
- Arrays
- Objects
- Date
- Null

## Performance

Number parsing speed has doubled over the last 5 versions due to the use of a `atoi_fast` function found in `assembly/util.ts`. This can be further optimized with SIMD.

String serialization has more than tripled in performance (+360%). The algorithm was rewritten for less if statements and more traps.

String deserialization was quadrupled from 3.4m ops to 14.8 ops (435%). It went from using `.replaceAll` to a specialized algorithm.

Schema (object) parsing is being optimized on GitHub and should be at least doubled if not tripled. (Current speed of barely-optimized version is 6.9m ops) This is due to taking advantage of the types with a type map and eliminating extra checking.

**Serialize Object (Vec3):** 6.7m ops/5s

**Deserialize Object (Vec3):** 5.1m ops/5s

**Serialize Array (int[]):** 6.6m ops/5s

**Deserialize Array (int[]):** 8.6m ops/5s

**Serialize String (5):** 5.9m ops/5s

**Deserialize String (5):** 16.3m ops/5s

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library

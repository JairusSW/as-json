# AS-JSON

**JSON serializer/deserializer for AssemblyScript**

## Installation

```bash
~ npm install json-as
```
```bash
~ npm install visitor-as
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

@json
class Vec2 {
  x: f32
  y: f32
}

@json
class Player {
  firstName: string
  lastName: string
  lastActive: i32[]
  age: i32
  pos: Vec2
  isVerified: boolean
}

const data: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: 23,
  pos: {
    x: -3.4,
    y: 1.2
  },
  isVerified: true
}

const stringified = JSON.stringify<Player>(data);

const parsed = JSON.parse<Player>(stringified);
```

## Performance

**Serialize Object (Vec2):** ~7.29m ops/s

**Deserialize Object (Vec2):** ~1.36m ops/s

**Serialize Array (int[4]):** ~1.4m ops/s

**Deserialize Array (int[4]):** ~2.8m ops/s

**Serialize String (5):** ~5.2m ops/sw

**Deserialize String (5):** ~1.36m ops/s

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library
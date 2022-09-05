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

## Support

- ✅ Objects (Supported)
- ✅ Arrays (Supported)
- ✅ Numbers (Supported)
- ✅ Integers (Supported)
- ✅ Null (Supported)
- ❌ Dynamic Variants (Not supported)

## Usage

```js
import { JSON } from "json-as";

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
}

const data: Player = {
  firstName: "Emmet",
  lastName: "West",
  lastActive: [8, 27, 2022],
  age: 23,
  pos: {
    x: -3.4,
    y: 1.2
  }
}

const stringified = JSON.stringify<Player>(data);
// '{"firstName":"Emmet","lastName":"West","lastActive":[8,27,2022],"age":23}'
console.log(`Stringified: ${stringified}`);

const parsed = JSON.parse<Player>(stringified)
// { firstName: "Emmet", lastName: "West", "lastActive": [8,27,2022], age: 23 }
console.log(`Parsed: ${JSON.stringify(parsed)}`)
```

## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library
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
// {
//  "firstName": "Emmet",
//  "lastName": "West",
// "lastActive": [8, 27, 2022],
//  "age": 23,
//  "pos": {
//    "x": -3.4000000953674318,
//    "y": 1.2000000476837159
//  }
// }
console.log(`Stringified: ${stringified}`);

const parsed = JSON.parse<Player>(stringified);
// Player {
//  firstName: "Emmet",
//  lastName: "West",
//  lastActive: [8, 27, 2022],
//  age: 23,
//  pos: {
//    x: -3.4000000953674318,
//    y: 1.2000000476837159
//  }
// }
console.log(`Parsed: ${JSON.stringify(parsed)}`);
```

## FAQ

- Does it support the full JSON spec?
  Yes, as-json supports the full JSON specification and trys to mimic the JSON API as much as possible
- What are the differences between as-json and the JSON API?
  The main difference between as-json and the JSON API is the ability to create new fields in objects during runtime. Since classes are static, Map ser/de support will be added soon allowing the user to parse and stringify dynamic objects and their properties
- Does this support nested structures?
  Yes, as-json supports nested structures
- Does this support whitespace?
  No, as-json does not support whitespace yet. That will come once we find a performant way to work around whitespace.
- How fast is it?
  Really fast. For example, here are some benchmarks for ser/de a Vec2 with as-json
## Issues

Please submit an issue to https://github.com/JairusSW/as-json/issues if you find anything wrong with this library
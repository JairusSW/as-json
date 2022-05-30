# AS-JSON

# Total time

77 hours 16 minutes

**JSON encoder/decoder for AssemblyScript**

## Installation

```bash
~ npm install json-as
~ yarn add json-as
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

- ✅ Objects (Serializing only)
- ✅ Map (Partial Parsing, Serializing good)
- ✅ Arrays (Basic parsing. Serializing good)
- ✅ Numbers
- ✅ Integers
- ✅ Null (Not tested yet, but should work)
- ✅ Dynamic Arrays (Objects not supported)
- ✅ Dynamic Types (Objects not supported)
- ✅ Dynamic Objects (Stringify only. Objects not supported as values)
- ✅ Whitespace

## Usage

```js
import { JSON } from 'json-as'

@json
class JSONSchema {
  firstName: string
  lastName: string
  age: i32
}

const data: JSONSchema = {
  firstName: 'Emmet',
  lastName: 'Smith',
  age: 23,
}

const stringified = JSON.stringify(data)
// '{"firstName":"Emmet","lastName":"Smith","age":23}'
console.log(`Stringified: ${stringified}`)

// PARSING DOES NOT WORK QUITE YET!
const parsed = JSON.parse<JSONSchema>(stringified)
// { firstName: "Emmet", lastName: "Smith", age: 23 }
console.log(`Parsed: ${JSON.stringify(parsed)}`)
```

## Todo

Add [Envy](https://github.com/jtenner/envy) as the testing framework. Remove as-pect

Finish parsing objects into classes

Work on jsonType and support dynamic types

Optimize!

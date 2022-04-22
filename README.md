# AS-JSON

# Total time
30 hours 20m

**JSON encoder/decoder for AssemblyScript**

## Installation

```bash
~ npm install json-as
~ yarn add json-as
```

Add the transform to your `asc` command
```bash
--transform json-as
```
Or, add it to `asconfig.json`
```
{
  "targets": {
  },
  "options": {
    "transform": "json-as"
  }
}
```

## Support

- ✅ Objects
- ✅ Arrays
- ✅ Numbers
- ✅ Integers
- ✅ Null
- ✅ Dynamic Arrays
- ✅ Dynamic Types
- ✅ Dynamic Objects
- ✅ Whitespace

## Usage

```js
import { JSON } from "json-as";

@json
class JSONSchema {
    firstName: string
    lastName: string
    age: i32
}

const data: JSONSchema = {
    firstName: 'Emmet',
    lastName: 'Hutchison',
    age: 23
}

const stringified = JSON.stringify(data)
// '{"firstName":"Emmet","lastName":"Hutchison","age":23}'

const parsed = JSON.parse<JSONSchema>(stringified)
// { firstName: "Emmet", lastName: "Hutchison", age: 23 }
```

## Todo
Add [Envy](https://github.com/jtenner/envy) as the testing framework. Remove as-pect

Finish parsing objects into classes

Work on jsonType and support dynamic types

Optimize!
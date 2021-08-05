# AS-JSON
**JSON encoder/decoder for AssemblyScript**

## Installation

```bash
~ npm install json-as
```
```bash
--transform json-as/transform
```

## Support 
- ✅ Objects
- ✅ Arrays
- ✅ Numbers
- ✅ Integers
- ✅ Null
- ❌ Dynamic Arrays
- ❌ Dynamic Types
- ❌ Dynamic Objects
Note: Dynamic types are planned in the near future.

## Usage

```js
import { JSON } from 'json-as'
```

**Object**
```js
@json
class JSONSchema {
    firstName: string
    lastName: string
    age: i32
}

const data: JSONSchema {
    firstName: 'Jairus',
    lastName: 'Tanaka',
    age: 14
}

const stringified = JSON.stringify(data)
// '{"firstName":"Jairus","lastName":"Tanaka","age":14}'

const parsed = JSON.parse<JSONSchema>(stringified)
// { firstName: "Jairus", lastName: "Tanaka", age: 14 }
```

**Array**

```js
const stringified = JSON.stringify(['Hello', 'World'])
// '["Hello","World"]'

const parsed = JSON.parse<JSONSchema>(stringified)
// ["Hello", "World"]
```

**Float**

```js
const stringified = JSON.stringify(3.14)
// '3.14'

const parsed = JSON.parse<f64>(stringified)
// 3.14
```

**Integer**

```js
const stringified = JSON.stringify(14)
// '14'

const parsed = JSON.parse<i32>(stringified)
// 14
```

**Boolean**

```js
const stringified = JSON.stringify(true)
// 'true'

const parsed = JSON.parse<boolean>(stringified)
// true
```

**Bool**

```js
const stringified = JSON.stringify(true)
// 'true'

const parsed = JSON.parse<bool>(stringified)
// true
```

**Null**

```js
const stringified = JSON.stringify(true)
// 'true'

const parsed = JSON.parse<boolean>(stringified)
// true
```
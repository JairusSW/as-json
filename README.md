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
- ✅ Dynamic Arrays
- ✅ Dynamic Types
- ❌ Dynamic Objects (Soon!)
- ✅ Whitespace

## WARNING: Possible breaking changes coming for v2.0.0

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

**Array (Typed)**

```js
const stringified = JSON.stringify(['Hello', 'World'])
// '["Hello","World"]'

const parsed = JSON.parse<JSONSchema>(stringified)
// ["Hello", "World"]
```

**Array (Dynamic)**

```js
const stringified = JSON.stringify(["Welcome to dynamic arrays", 3.14, ["Deep"], true, "It also supports nulls", null])
// '["Welcome to dynamic arrays",3.14,["Deep"],true,"It also supports nulls",null]'

const parsed = JSON.parse<unknown[]>(stringified)
// ["Welcome to dynamic arrays", 3.14, ["Deep"], true, "It also supports nulls", null]
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
const stringified = JSON.stringify(null)
// 'null'

const parsed = JSON.parse(stringified)
// null
```

## Accessing unknown types
**Breaking changes for v2.0.0!**
**Experimental usage only**

```js
const parsed = JSON.parse<unknown[]>(["Welcome to dynamic arrays",3.14,["Deep"],true,"It also supports nulls",null])
console.log(parsed[0].get<string>())
// "Welcome to dynamic arrays"
console.log(parsed[1].get<f64>().toString())
// 3.14
```

## Benchmarks


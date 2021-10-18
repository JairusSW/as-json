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
- ✅ Dynamic Objects
- ✅ Whitespace

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
const stringified = JSON.stringify(null)
// 'null'

const parsed = JSON.parse(stringified)
// null
```
## Benchmarks

```
AS-JSON Stringify String: ~4191267.51 ops/s | 23.86ms
AS-JSON Parse String: ~6218119.99 ops/s | 16.08ms
AS-JSON Stringify Integer: ~13775012.61 ops/s | 7.26ms
AS-JSON Parse Integer: ~55061164.13 ops/s | 1.82ms
AS-JSON Stringify Float: ~7739399.89 ops/s | 12.92ms
AS-JSON Parse Float: ~37522902.16 ops/s | 2.67ms
AS-JSON Stringify Boolean: ~615015015.02 ops/s | 0.16ms
AS-JSON Parse Boolean: ~93901879.87 ops/s | 1.06ms
AS-JSON Stringify Array: ~2380329.74 ops/s | 42.01ms
AS-JSON Parse Array: ~6258786.14 ops/s | 15.98ms
AS-JSON Stringify Object: ~5245632.91 ops/s | 19.06ms
AS-JSON Parse Object: ~1328576.06 ops/s | 75.27ms
```
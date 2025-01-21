<h5 align="center">
  <pre>
<span style="font-size: 0.5em;">██████  ██    ██ ███████ ███████ ███████ ██████  ███████ ██ ███    ██ ██   ██ 
██   ██ ██    ██ ██      ██      ██      ██   ██ ██      ██ ████   ██ ██  ██  
██████  ██    ██ █████   █████   █████   ██████  ███████ ██ ██ ██  ██ █████   
██   ██ ██    ██ ██      ██      ██      ██   ██      ██ ██ ██  ██ ██ ██  ██  
██████   ██████  ██      ██      ███████ ██   ██ ███████ ██ ██   ████ ██   ██ 
</span>
    AssemblyScript - v1.0.1
  </pre>
</h5>

## About

This library provides a centralized buffer for managing memory in AssemblyScript. It keeps track of a single buffer, the current offset, and handles allocations. Using a singular buffer essentially eliminates the need for any calls to `memory.copy()` as well as any `malloc()` or `realloc()`-type calls. Highly unsafe, but extremely useful for extraordinarily high-performance scenarios.

[This library](https://github.com/JairusSW/as-bs) is what makes [as-json](https://github.com/JairusSW/as-json) operate in the multi-gigabyte-per-second ranges

To take a look at some practical uses of as-bs, check out the functions [here](https://github.com/JairusSW/as-json/tree/master/assembly/serialize/simple)

## Installation

```bash
npm install as-bs
```

**🚨 IMPORTANT 🚨**

To make sure we all depend on the same version of as-bs, please modify your package.json to meet the following

Forgoing this will result in fragmentation and just a lot of problems.

```json
"dependencies": {
  "as-bs": "latest"
}
```

## Usage

Here's an example taken out of [as-json](https://github.com/JairusSW/as-json/tree/master/assembly/serialize/simple/string.ts)

This is an example of as-bs used right

```js
import { bs } from "as-bs";

function serializeString(src: string): string {
  const srcSize = bytes(src);
  bs.ensureSize(srcSize + 4);

  let srcPtr = changetype<usize>(src);

  const srcEnd = srcPtr + srcSize;

  store<u16>(bs.offset, QUOTE);

  bs.offset += 2;

  let lastPtr: i32 = srcPtr;
  while (srcPtr < srcEnd) {
    const code = load<u16>(srcPtr);
    if (code == 34 || code == 92 || code < 32) {
      const remBytes = srcPtr - lastPtr;
      memory.copy(bs.offset, lastPtr, remBytes);
      bs.offset += remBytes;
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + (code << 2));
      if ((escaped & 0xffff) != BACK_SLASH) {
        bs.ensureCapacity(12);
        store<u64>(bs.offset, 13511005048209500, 0);
        store<u32>(bs.offset, escaped, 8);
        bs.offset += 12;
      } else {
        bs.ensureCapacity(4);
        store<u32>(bs.offset, escaped, 0);
        bs.offset += 4;
      }
      lastPtr = srcPtr + 2;
    }
    srcPtr += 2;
  }
  const remBytes = srcEnd - lastPtr;
  memory.copy(bs.offset, lastPtr, remBytes);
  bs.offset += remBytes;
  store<u16>(bs.offset, QUOTE);
  bs.offset += 2;
  return bs.out<string>();
}
```

If you use this project in your codebase, consider dropping a [star](https://github.com/JairusSW/as-bs). I would really appreciate it!

## Issues

Please submit an issue to https://github.com/JairusSW/as-bs/issues if you find anything wrong with this library

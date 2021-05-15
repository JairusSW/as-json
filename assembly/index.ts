// TODO: Handle circular data
// TODO: Add Object support
// TODO: Add AS deserialize (SIMD?)

import { StringSink } from '../node_modules/as-string-sink/assembly/index'

// Pre-alloc in memory. (faster)
const nullVal = `null`

// Doesn't support Objects. 😭
// But, it has string-sink! 🤑
export function stringify<T>(data: T): string {
  let result = new StringSink()
  if (isString<T>(data)) {
    if (data.includes(`"`)) {
      result.write(`"${data.replaceAll(`"`, `\\"`)}"`)
    } else {
      result.write(`"${data}"`)
    }
  } else if (isBoolean<T>(data)) {
    result.write(data ? `true` : `false`)
  } else if (isArrayLike(data)) {
    // @ts-ignore
    result.write('[')
    const len = data.length - 1
    // Just loop through all the chunks and stringify them.
    for (let i = 0; i < len; i++) {
      // @ts-ignore
      const chunk = data[i]
      result.write(`${stringify(chunk)},`)
    }
    // @ts-ignore
    result.write(`${stringify(data[len])}]`)
  } else if (isFinite<T>(data)) {
    result.write(`${f64(data).toString()}`)
  } else {
    result.write(nullVal)
  }
  return result.toString()
}
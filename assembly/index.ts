import { StringSink } from 'as-string-sink'

// TODO: Remove string equality checks and replace them with number checks
// TODO: Use String.UTF8.encode() and decode. Serialize takes place for binary data.
const quote = '"'
const comma = ","
const rbracket = "]"
const lbracket = "["
const rcbracket = "}"
const lcbracket = "{"
const trueVal = "true"
const falseVal = "false"
const nullVal = "null"
const escapeQuote = '\\"'

const quoteCode: u32 = 34// '"'
const commaCode: u32 = 44// ","
const rbracketCode: u32 = 93// "]"
const lbracketCode: u32 = 91// "["
const rcbracketCode: u32 = 125// "}"
const lcbracketCode: u32 = 123// "{"
const colonCode: u32 = 58// ":"
const empty_stringCode: u32 = 32// " "
const fwd_slashCode: u32 = "\\".charCodeAt(0)
const true_charCode: u32 = 116// "t"

// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
// @ts-ignore
@inline
export function removeJSONWhitespace(data: string): string {
  const binaryData: Uint8Array = unchecked(Uint8Array.wrap(unchecked(String.UTF8.encode(data))))
  let instr: u32 = 0
  // 0 = off
  // 1 = on
  // Numbers are faster in JS than bools
  let char: u32 = 0
  let pos: u32 = 0
  for (let i = 0; i < binaryData.length; i++) {
    unchecked(char = binaryData[i])
    // This reverses and catches the 'instring' property.
    if (char === quoteCode && unchecked(binaryData[i - 1] !== fwd_slashCode)) instr = (instr ? 0 : 1)
    if (instr === 1) {
      unchecked(binaryData[pos] = char)
      pos++
    } else if (instr === 0 && char !== empty_stringCode) {
      unchecked(binaryData[pos] = char)
      pos++
      // We reuse the same Uint8Array here. We'll slice later.
    }
  }
  return unchecked(String.UTF8.decodeUnsafe(changetype<usize>(binaryData.buffer), pos))
  // This performs a fast .slice method
}

//trace(`StripWhitespace: ${removeJSONWhitespace(`{"firstName"  :  "Jairus",  "lastName":  "Tanaka"  ,  "human":true,"age":14,"meta":{"country":"US","awesome":true},"language":"english","location":[-43.130850291,32.926401705]}`)}\nLength: ${removeJSONWhitespace(`{"firstName"  :  "Jairus",  "lastName":  "Tanaka"  ,  "human":true,"age":14,"meta":{"country":"US","awesome":true},"language":"english","location":[-43.130850291,32.926401705]}`).length}`)

/**
 * JSON encoder/decoder for AssemblyScript
 */
export namespace JSON {
  /**
   * Stringifies valid JSON data.
   * ```js
   * JSON.stringify<T>(data)
   * ```
   * @param data any
   * @returns string
  */
  // @ts-ignore
  @inline
  export function stringify<T>(data: T): string {
    if (isString(data)) {
      return serializeString(<string>data)
    } else if (isBoolean(data)) {
      return serializeBoolean(data)
    } else if (data == null) {
      return nullVal;
    } else if (isFloat(data) || isInteger(data)) {
      return data.toString()
    } else if (isArray(data)) {
      // @ts-ignore
      return serializeArray<T>(data)
    }

    // @ts-ignore
    if (data.__encoded.length === 0) data.__encode()
    // @ts-ignore
    return unchecked(lcbracket + data.__encoded + rcbracket)
  }
  /**
   * Parses valid JSON strings into their original format.
   * Useful for exchanging data and cloning.
   * ```js
   * JSON.parse<T>(data)
   * ```
   * @param data string
   * @returns any
   */
  // TODO: Us as-runtype to remove the need for the <T>?
  // @ts-ignore
  @inline
  export function parse<T>(data: string): T {
    data = removeJSONWhitespace(data)
    // ^ Need to optimize
    // @ts-ignore
    if (isString<T>()) return parseString(data)
    // @ts-ignore
    else if (isBoolean<T>()) return parseBoolean(data)
    // @ts-ignore
    else if (isArray<T>()) return parseArray<T>(data)
    // @ts-ignore
    else if (isFloat<T>() || isInteger<T>()) return parseNumber<T>(data)
    // @ts-ignore
    return parseObject<T>(data)
    // TODO: Add dynamic types.
  }
}

// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function serializeNumber<T>(data: T): string {
  // @ts-ignore
  return unchecked(data.toString())
}

// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function serializeString(data: string): string {
  /*const binaryData = Uint8Array.wrap(String.UTF8.encode(data))
  const resultData = new StringSink(quote)
  let char: u32 = 0
  for (let i = 0; i < binaryData.length; i++) {
    unchecked(char = binaryData[i])
    if (char === quoteCode) {
      resultData.writeCodePoint(fwd_slashCode)
      resultData.writeCodePoint(quoteCode)
    } else {
      resultData.writeCodePoint(char)
    }
  }
  resultData.writeCodePoint(quoteCode)
  console.log(`Output: ${resultData.toString()}`)*/
  // TODO: How fast is it without the includes? Just plain replaceAll?

  if (data.includes(quote)) {
    return unchecked(quote + data.replaceAll(quote, escapeQuote) + quote)
  }
  return unchecked(quote + data + quote)
}

// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function serializeBoolean(data: number): string {
  return data ? trueVal : falseVal
}
// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function serializeArray<T extends Array<any>>(data: T): string {
  const len = data.length - 1;
  if (len === -1) return unchecked(lbracket + lbracket)
  let result = lbracket;
  if (isString<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      unchecked(result += serializeString(unchecked(data[i])) + comma)
    }
    unchecked(result += serializeString(unchecked(data[len])) + rbracket)
    return result
  } else if (isFloat<valueof<T>>() || isInteger<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      unchecked(result += serializeNumber<valueof<T>>(unchecked(data[i])) + comma)
    }
    unchecked(result += serializeNumber<valueof<T>>(unchecked(data[len])) + rbracket)
    return result
  } else if (isBoolean<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      unchecked(result += serializeBoolean(unchecked(data[i])) + comma)
    }
    unchecked(result += serializeBoolean(unchecked(data[len])) + rbracket)
    return result
  } else if (isArray<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      unchecked(result += serializeArray<valueof<T>>(unchecked(data[i])) + comma)
    }
    unchecked(result += serializeArray<valueof<T>>(unchecked(data[len])) + rbracket)
    return result
  }

  for (let i = 0; i < len; i++) {
    const elem = unchecked(data[i])
    // @ts-ignore
    if (elem.__encoded.length === 0) elem.__encode()
  }
  // @ts-ignore
  return unchecked(lcbracket + elem.__encoded + rcbracket)
}

// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function parseBoolean(data: string): boolean {
  return unchecked(data.charAt(0) == "t") ? true : false
}

// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function parseString(data: string): string {
  return unchecked(data.slice(1, data.length - 1).replaceAll(escapeQuote, quote))
}

// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function parseNumber<T>(data: string): T {
  let type: T
  // @ts-ignore
  if (type instanceof f64) return f64(parseFloat(data))
  // @ts-ignore
  else if (type instanceof f32) return f32(parseFloat(data))
  // @ts-ignore
  else if (type instanceof i32) return i32(parseInt(data))
  // @ts-ignore
  else if (type instanceof u32) return u32(parseInt(data))
  // @ts-ignore
  else if (type instanceof u64) return u64(parseInt(data))
  // @ts-ignore
  else if (type instanceof i64) return i64(parseInt(data))
  // @ts-ignore
  else if (type instanceof u8) return u8(parseInt(data))
  // @ts-ignore
  else if (type instanceof u16) return u16(parseInt(data))
  // @ts-ignore
  else if (type instanceof i16) return i16(parseInt(data))
  // @ts-ignore
  return i8(parseInt(data))
}

// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function parseArray<T extends Array<any>>(data: string): T {
  // @ts-ignore
  if (isString<valueof<T>>()) return parseStringArray(data)
  // @ts-ignore
  else if (isBoolean<valueof<T>>()) return parseBooleanArray(data)
  // @ts-ignore
  else if (isArray<valueof<T>>()) return parseArrayArray<T>(data)
  // @ts-ignore
  return parseNumberArray<valueof<T>>(data)
}

// String Array
// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function parseStringArray(data: string): Array<string> {
  const result = new Array<string>()
  let lastPos: u32 = 2
  let char: u32 = 0
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    unchecked(char = data.charCodeAt(i))
    if (char === commaCode) {
      unchecked(result.push(unchecked(unchecked(data.slice(lastPos, i - 1)).replaceAll(escapeQuote, quote))))
      lastPos = i + 2
    }
  }
  unchecked(result.push(unchecked(data.slice(lastPos, data.length - 2))))
  return result
}

// Boolean Array
// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function parseBooleanArray(data: string): Array<boolean> {
  const result = new Array<boolean>()
  let char: u32 = 0
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    unchecked(char = data.charCodeAt(i))
    if (char === true_charCode) {
      unchecked(result.push(true))
    } else {
      unchecked(result.push(false))
    }
  }
  return result
}

// Number Array
// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function parseNumberArray<T>(data: string): Array<T> {
  const result = new Array<T>()
  let lastPos: u32 = 0
  let char: u32 = 0
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    unchecked(char = data.charCodeAt(i))
    if (char === commaCode) {
      unchecked(result.push(parseNumber<T>(unchecked(data.slice(lastPos + 1, i)))))
      lastPos = i
    }
  }
  unchecked(result.push(parseNumber<T>(unchecked(data.slice(lastPos + 1, data.length - 1)))))
  return result
}

// Dynamic Array
// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
/*
function parseDynamicArray(data: string): Array<unknown> {
  const result = new Array<unknown>()
  let lastPos: u32 = 0
  let char: u32 = 0
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    unchecked(char = data.charCodeAt(i))
    if (char === commaCode) {
      unchecked(result.push(parseDynamic(unchecked(data.slice(lastPos + 1, i)))))
      lastPos = i
    }
  }
  unchecked(result.push(parseDynamic(unchecked(data.slice(lastPos + 1, data.length - 1)))))
  return result
}*/

// Array Array
// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function parseArrayArray<T extends Array<any>>(data: string): T {
  const result = instantiate<T>()
  let lastPos: i32 = -1
  let char: u32 = 0
  let depth: u32 = 0
  let fdepth: u32 = 0
  let instr: u32 = 0
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    unchecked(char = data.charCodeAt(i))
    // This ignores [ and ] if they are inside a string.
    if (char === quoteCode && unchecked(data.charCodeAt(i - 1) !== fwd_slashCode)) instr = instr ? 0 : 1
    // This gets the depth of the array.
    if (instr === 0) {
      if (char === lbracketCode) depth++
      if (char === rbracketCode) fdepth++
      // If the depth and found depth are equal, that is an array. Push it.
      if (depth > 0 && depth === fdepth) {
        result.push(
          parseArray<valueof<T>>(unchecked(data.slice(lastPos + 2, i + 1)))
        )
        // Reset the depth
        depth = 0
        fdepth = 0
        // Set new lastPos
        lastPos = i
      }
    }
  }
  // Return the final array
  return result
}

// TODO: Add @DogWhich's Objects
// TODO: ^ Add `instanceof Object` check
// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function parseObject<T>(data: string): T {
  //console.log('Data ' + data)
  const len: u32 = data.length - 1
  let schema: T
  const result = new Map<string, string>()
  let lastPos: u32 = 1
  let key: string = ''
  let instr: u32 = 0
  let char: u32 = 0
  let depth: u32 = 0
  let fdepth: u32 = 0
  for (let i: u32 = 1; i < len; i++) {
    unchecked(char = data.charCodeAt(i))
    if (char === quoteCode && unchecked(data.charCodeAt(i - 1) !== fwd_slashCode)) instr = (instr ? 0 : 1)
    else if (instr === 0) {
      if (char === lcbracketCode || char === lbracketCode) depth++
      if (char === rcbracketCode || char === rbracketCode) fdepth++
    }
    if (depth !== 0 && depth === fdepth) {
      //console.log(`Deep: ${prependType(data.slice(lastPos + 1, i + 1))}`)
      unchecked(result.set(key, data.slice(lastPos + 1, i + 1)))
      // Reset the depth
      depth = 0
      fdepth = 0
      // Set new lastPos
      lastPos = i + 1
    }
    if (depth === 0) {
      if (char === colonCode) {
        //console.log(`Key: ${prependType(data.slice(lastPos + 1, i - 1))}`)
        unchecked(key = data.slice(lastPos + 1, i - 1))
        lastPos = i
      }
      else if (char === commaCode) {
        //console.log(`Value: ${prependType(data.slice(lastPos + 1, i))}`)
        if ((i - lastPos) > 0) unchecked(result.set(key, unchecked(data.slice(lastPos + 1, i))))
        lastPos = i + 1
      }
    }
  }
  //console.log(`Trailing: ${prependType(data.slice(lastPos + 1, len))}\n\t\sValid: ${data.slice(lastPos + 1, len).length > 0}`)

  if ((len - lastPos) > 0) unchecked(result.set(key, unchecked(data.slice(lastPos + 1, len))))
  // @ts-ignore
  return schema.__decode(result)
}

/**
 * Prepend the type to a JSON string.
 * @param data string
 * @returns string
 */
// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function prependType(data: string): string {
  const start: string = data.charAt(0)
  if (start == quote) return `<string>${data}`
  else if (start == 't' || start == 'f') return `<boolean>${data}`
  else if (start == '{') return `<object>${data}`
  else if (start == '[') return `<array>${data}`
  else if (start == 'n') return `<null>${data}`
  else return `<number>${data}`
}

/**
 * Get the type of a JSON string.
 * For JSON-AS >v0.2.0
 * @param data string
 * @returns string
 */
// <inline> (Placeholder for when I want to swap it out for inline testing. I just use the replace in VScode)
function getType(data: string): string {
  const start: string = data.charAt(0)
  if (start == quote) return `string`
  else if (start == 't' || start == 'f') return `boolean`
  else if (start == '{') return `Object`
  else if (start == '[') return `Array<unknown>`
  else if (start == 'n') return `null`
  else if (data.includes('.')) return `f64`
  else return `i64`
}
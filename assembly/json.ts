import { StringSink } from 'as-string-sink'

import { unknown } from './unknown'

const unknown_idof = idof<unknown>()
class DynamicSchema { }

const quote = '"'
const lbracket = "["
const rcbracket = "}"
const lcbracket = "{"
const trueVal = "true"
const falseVal = "false"
const nullVal = "null"
const escapeQuote = '\\"'

const quoteCode: u16 = 34// '"'
const commaCode: u16 = 44// ","
const rbracketCode: u16 = 93// "]"
const lbracketCode: u16 = 91// "["
const rcbracketCode: u16 = 125// "}"
const lcbracketCode: u16 = 123// "{"
const colonCode: u16 = 58// ":"
const empty_stringCode: u16 = 32// " "
const fwd_slashCode: u16 = 92// "/"
const true_charCode: u16 = 116// "t"

export function removeJSONWhitespace(data: string): string {
  const binaryData: Uint8Array = Uint8Array.wrap(String.UTF16.encode(data))
  let instr: u8 = 0
  // 0 = off
  // 1 = on
  // Numbers are faster in JS than bools
  let char: u16 = 0
  let pos: u32 = 0
  for (let i: u32 = 0; i < u32(binaryData.length); i++) {
    char = unchecked(binaryData[i])
    // This reverses and catches the 'instring' property.
    if (char === quoteCode && unchecked(binaryData[i - 1]) !== fwd_slashCode) instr = (instr ? 0 : 1)
    if (instr === 1) {
      unchecked(binaryData[pos] = char)
      pos++
    } else if (instr === 0 && char !== empty_stringCode) {
      unchecked(binaryData[pos] = char)
      pos++
      // We reuse the same Uint8Array here. We'll slice later.
    }
  }
  return String.UTF16.decodeUnsafe(changetype<usize>(binaryData.buffer), pos)
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
  export function stringify<T>(data: T): string {
    // @ts-ignore
    if (isString(data)) {
      return serializeString(<string>data)
    } else if (isBoolean(data)) {
      return serializeBoolean(data)
    } else if (data == null) {
      return nullVal
    } else if (isFloat(data) || isInteger(data)) {
      return data.toString()
    } else if (isArray(data)) {
      // @ts-ignore
      return serializeArray<T>(data)
      // @ts-ignore
    } else if (data instanceof unknown) {
      return serializeUnknown(data)
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
  export function parse<T>(data: string): T {
    data = removeJSONWhitespace(data)
    if (idof<T>() === unknown_idof) {
      const first = data.charCodeAt(0)
      if (first === quoteCode) {
        // @ts-ignore
        return unknown.from(parseString(data))
      } else if (first === true_charCode) {
        // @ts-ignore
        return unknown.from(true)
      } else if (first === 'f'.charCodeAt(0)) {
        // @ts-ignore
        return unknown.from(false)
      } else if (first === lbracketCode) {
        // @ts-ignore
        return unknown.from(parseUnknownArray(data))
      }
      else if (data.includes('.')) {
        // @ts-ignore
        return unknown.from(parseNumber<f64>(data))
      } else {
        // @ts-ignore
        return unknown.from(parseNumber<i64>(data))
      }
    } else {
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
}

function serializeNumber<T>(data: T): string {
  // @ts-ignore
  return data.toString()
}

function serializeUnknown(data: unknown): string {
  // @ts-ignore
  if (data.is<string>()) {
    // @ts-ignore
    return serializeString(data.get<string>())
    // @ts-ignore
  } else if (data.is<boolean>()) {
    // @ts-ignore
    return serializeBoolean(data.get<boolean>())
    // @ts-ignore
  } else if (data.is<i8>()) {
    // @ts-ignore
    return serializeNumber(data.get<i8>())
    // @ts-ignore
  } else if (data.is<u8>()) {
    // @ts-ignore
    return serializeNumber(data.get<u8>())
    // @ts-ignore
  } else if (data.is<u8>()) {
    // @ts-ignore
    return serializeNumber(data.get<i16>())
    // @ts-ignore
  } else if (data.is<i16>()) {
    // @ts-ignore
    return serializeNumber(data.get<u16>())
    // @ts-ignore
  } else if (data.is<u16>()) {
    // @ts-ignore
    return serializeNumber(data.get<i32>())
    // @ts-ignore
  } else if (data.is<i32>()) {
    // @ts-ignore
    return serializeNumber(data.get<u32>())
    // @ts-ignore
  } else if (data.is<u32>()) {
    // @ts-ignore
    return serializeNumber(data.get<i64>())
    // @ts-ignore
  } else if (data.is<i64>()) {
    // @ts-ignore
    return serializeNumber(data.get<u64>())
    // @ts-ignore
  } else if (data.is<u64>()) {
    // @ts-ignore
    return serializeNumber(data.get<f32>())
    // @ts-ignore
  } else if (data.is<unknown>()) {
    // @ts-ignore
    return serializeUnknown(data.get<unknown>())
    // @ts-ignore
  } else if (data.is<f64>()) {
    // @ts-ignore
    return serializeNumber(data.get<f64>())
    // @ts-ignore
  } else if (data.type.toLowerCase().includes('array')) {
    // @ts-ignore
    return serializeArray<Array<unknown>>(data.get<Array<unknown>>())
  } else {
    // @ts-ignore
    const grabbed = data.get<DynamicSchema>()
    // @ts-ignore
    console.log(`grabbed.__encoded: ${isDefined(grabbed.__encoded)}`)
    return ''
  }
}

function serializeString(data: string): string {
  const resultData = new StringSink(quote)
  resultData.write(data.replaceAll(quote, escapeQuote))
  resultData.writeCodePoint(quoteCode)
  return resultData.toString()
}

function serializeBoolean(data: number): string {
  return data ? trueVal : falseVal
}

function serializeArray<T extends Array<any>>(data: T): string {
  const len = data.length - 1;
  if (len === -1) return lbracket + lbracket
  let result = new StringSink(lbracket);
  if (isString<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      result.write(serializeString(unchecked(data[i])))
      result.writeCodePoint(commaCode)
    }
    result.write(serializeString(unchecked(data[len])))
    result.writeCodePoint(rbracketCode)
    return result.toString()
  } else if (isFloat<valueof<T>>() || isInteger<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      result.write(serializeNumber<valueof<T>>(unchecked(data[i])))
      result.writeCodePoint(commaCode)
    }
    result.write(serializeNumber<valueof<T>>(unchecked(data[len])))
    result.writeCodePoint(rbracketCode)
    return result.toString()
  } else if (isBoolean<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      result.write(serializeBoolean(unchecked(data[i])))
      result.writeCodePoint(commaCode)
    }
    result.write(serializeBoolean(unchecked(data[len])))
    result.writeCodePoint(rbracketCode)
    return result.toString()
  } else if (idof<valueof<T>>() === idof<unknown>()) {
    for (let i = 0; i < len; i++) {
      result.write(serializeUnknown(unchecked(data[i])))
      result.writeCodePoint(commaCode)
    }
    result.write(serializeUnknown(unchecked(data[len])))
    result.writeCodePoint(rbracketCode)
    return result.toString()
  } else if (isArray<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      result.write(serializeArray<valueof<T>>(unchecked(data[i])))
      result.writeCodePoint(commaCode)
    }
    result.write(serializeArray<valueof<T>>(unchecked(data[len])))
    result.writeCodePoint(rbracketCode)
    return result.toString()
  } else {
    for (let i = 0; i < len; i++) {
      const elem = unchecked(data[i])
      // @ts-ignore
      if (elem.__encoded.length === 0) elem.__encode()
    }
    // @ts-ignore
    result.write(elem.__encoded)
    result.writeCodePoint(rcbracketCode)
  }
  return result.toString()
}

function parseBoolean(data: string): boolean {
  return data.charCodeAt(0) === true_charCode ? true : false
}

function parseString(data: string): string {
  return data.slice(1, data.length - 1).replaceAll(escapeQuote, quote)
}

export function parseNull<T>(): T | null {
  return null
}

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

// Unknown Array
export function parseUnknownArray(data: string): Array<unknown> {
  data = data.replaceAll(escapeQuote, quote)
  const result = new Array<unknown>()
  let lastPos: u32 = 1
  let key: string = ''
  let instr: u32 = 0
  let char: u32 = 0
  let depth: u32 = 0
  let fdepth: u32 = 0
  const len: u32 = data.length - 1
  for (let i: u32 = 1; i < len; i++) {
    char = data.charCodeAt(i)
    if (char === quoteCode && data.charCodeAt(i - 1) !== fwd_slashCode) instr = (instr ? 0 : 1)
    else if (instr === 0) {
      if (char === lcbracketCode || char === lbracketCode) depth++
      if (char === rcbracketCode || char === rbracketCode) fdepth++
    }
    if (depth !== 0 && depth === fdepth) {
      //console.log(`Deep: ${prependType(data.slice(lastPos, i + 1))}`)
      result.push(JSON.parse<unknown>(data.slice(lastPos, i + 1)))
      // Reset the depth
      depth = 0
      fdepth = 0
      // Set new lastPos
      lastPos = i + 1
    }
    if (depth === 0) {
      if (char === commaCode) {
        //console.log(`Value: ${data.slice(lastPos, i)}`)
        result.push(JSON.parse<unknown>(data.slice(lastPos, i)))
        lastPos = i + 1
      }
    }
  }
  //console.log(`Trailing: ${data.slice(lastPos, data.length - 1)} ${(lastPos - len)}`)
  if ((lastPos - len) !== 0) result.push(JSON.parse<unknown>(data.slice(lastPos, len)))
  return result
}

// String Array
function parseStringArray(data: string): Array<string> {
  data = data.replaceAll(escapeQuote, quote)
  const result = new Array<string>()
  let lastPos: u32 = 2
  let char: u32 = 0
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i)
    if (char === commaCode) {
      result.push(data.slice(lastPos, i - 1))
      lastPos = i + 2
    }
  }
  result.push(data.slice(lastPos, data.length - 2))
  return result
}

// Boolean Array
function parseBooleanArray(data: string): Array<boolean> {
  const result = new Array<boolean>()
  let char: u32 = 0
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i)
    if (char === true_charCode) {
      result.push(true)
    } else {
      result.push(false)
    }
  }
  return result
}

// Number Array
function parseNumberArray<T>(data: string): Array<T> {
  const result = new Array<T>()
  let lastPos: u32 = 0
  let char: u32 = 0
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i)
    if (char === commaCode) {
      result.push(parseNumber<T>(data.slice(lastPos + 1, i)))
      lastPos = i
    }
  }
  result.push(parseNumber<T>(data.slice(lastPos + 1, data.length - 1)))
  return result
}

// Dynamic Array
/*
function parseDynamicArray(data: string): Array<unknown> {
  const result = new Array<unknown>()
  let lastPos: u32 = 0
  let char: u32 = 0
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i)
    if (char === commaCode) {
      unchecked(result.push(parseDynamic(unchecked(data.slice(lastPos + 1, i)))))
      lastPos = i
    }
  }
  unchecked(result.push(parseDynamic(unchecked(data.slice(lastPos + 1, data.length - 1)))))
  return result
}*/

// Array Array
function parseArrayArray<T extends Array<any>>(data: string): T {
  const result = instantiate<T>()
  let lastPos: i32 = -1
  let char: u32 = 0
  let depth: u32 = 0
  let fdepth: u32 = 0
  let instr: u32 = 0
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i)
    // This ignores [ and ] if they are inside a string.
    if (char === quoteCode && data.charCodeAt(i - 1) !== fwd_slashCode) instr = instr ? 0 : 1
    // This gets the depth of the array.
    if (instr === 0) {
      if (char === lbracketCode) depth++
      if (char === rbracketCode) fdepth++
      // If the depth and found depth are equal, that is an array. Push it.
      if (depth > 0 && depth === fdepth) {
        result.push(
          parseArray<valueof<T>>(data.slice(lastPos + 2, i + 1))
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
    char = data.charCodeAt(i)
    if (char === quoteCode && data.charCodeAt(i - 1) !== fwd_slashCode) instr = (instr ? 0 : 1)
    else if (instr === 0) {
      if (char === lcbracketCode || char === lbracketCode) depth++
      if (char === rcbracketCode || char === rbracketCode) fdepth++
    }
    if (depth !== 0 && depth === fdepth) {
      //console.log(`Deep: ${prependType(data.slice(lastPos + 1, i + 1))}`)
      result.set(key, data.slice(lastPos + 1, i + 1))
      // Reset the depth
      depth = 0
      fdepth = 0
      // Set new lastPos
      lastPos = i + 1
    }
    if (depth === 0) {
      if (char === colonCode) {
        //console.log(`Key: ${prependType(data.slice(lastPos + 1, i - 1))}`)
        key = data.slice(lastPos + 1, i - 1)
        lastPos = i
      }
      else if (char === commaCode) {
        //console.log(`Value: ${prependType(data.slice(lastPos + 1, i))}`)
        if ((i - lastPos) > 0) result.set(key, unchecked(data.slice(lastPos + 1, i)))
        lastPos = i + 1
      }
    }
  }
  //console.log(`Trailing: ${prependType(data.slice(lastPos + 1, len))}\n\t\sValid: ${data.slice(lastPos + 1, len).length > 0}`)

  if ((len - lastPos) > 0) result.set(key, unchecked(data.slice(lastPos + 1, len)))
  // @ts-ignore
  return schema.__decode(result)
}

/**
 * Prepend the type to a JSON string.
 * @param data string
 * @returns string
 */
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
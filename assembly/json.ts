import { StringSink } from 'as-string-sink'

import { unknown, unknownTypes } from './unknown'

@global
export class Nullable { }

const quote = '"'
const lbracket = "["
const rbracket = "]"
const rcbracket = "}"
const lcbracket = "{"
const trueVal = "true"
const falseVal = "false"
const nullVal = "null"
const escapeQuote = '\\"'
const fwd_slash = "\\"
const empty_string = " "

const quoteCode: u16 = 34// '"'
const commaCode: u16 = 44// ","
const rbracketCode: u16 = 93// "]"
const lbracketCode: u16 = 91// "["
const rcbracketCode: u16 = 125// "}"
const lcbracketCode: u16 = 123// "{"
const colonCode: u16 = 58// ":"
const fwd_slashCode: u16 = 92// "/"
const true_charCode: u16 = 116// "t"
const nCode: u16 = 110// "n"

const unknownId = idof<unknown>()
const stringId = idof<string>()
const arrayStringId = idof<string[]>()
const arrayBooleanId = idof<boolean[]>()
const arrayBoolId = idof<bool[]>()
const arrayU8Id = idof<u8[]>()
const arrayU16Id = idof<u16[]>()
const arrayU32Id = idof<u32[]>()
const arrayU64Id = idof<u64[]>()
const arrayI8Id = idof<i8[]>()
const arrayI16Id = idof<i16[]>()
const arrayI32Id = idof<i32[]>()
const arrayI64Id = idof<i64[]>()
const arrayF32Id = idof<f32[]>()
const arrayF64Id = idof<f64[]>()
const arrayUnknownId = idof<unknown[]>()

const WS1 = " "
const WS2 = '\u0020'
const WS3 = '\u000A'
const WS4 = '\u000D'
const WS5 = '\u0009'

export function removeJSONWhitespace(data: string): string {
  let result = ''
  let instr = false
  let char: string = ''
  for (let i = 0; i < data.length; i++) {
    char = data.charAt(i)
    if (char === quote && data.charAt(i - 1) === fwd_slash) {
      instr = !instr
    }
    if (instr === true) {
      result += char
    } else if (instr === false && char !== WS1 && char !== WS2 && char !== WS3 && char !== WS4 && char !== WS5) {
      result += char
    }
  }
  return result
}

/**
 * JSON Encoder/Decoder for AssemblyScript
 */
export namespace JSON {
  /**
   * Stringifies valid JSON data.
   * ```js
   * JSON.stringify<T>(data)
   * ```
   * @param data unknown
   * @returns string
  */
  export function stringify<T = Nullable | null>(data: T): string {
    // @ts-ignore
    if (isString(data)) {
      return serializeString(<string>data)
    } else if (isBoolean(data)) {
      return serializeBoolean(data)
      // @ts-ignore
    } else if (isNullable(data) && data == null) {
      return nullVal
    } else if (isFloat(data) || isInteger(data)) {
      return data.toString()
    } else if (isArrayLike(data)) {
      // @ts-ignore
      return serializeArray<T>(data)
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
   * @returns T
   */
  export function parse<T = Nullable>(data: string): T {
    data = removeJSONWhitespace(data)
    const char = data.charCodeAt(0)
    // @ts-ignore
    if (isString<T>()) return parseString(data.trim())
    // @ts-ignore
    else if (isBoolean<T>()) return parseBoolean(data.trimStart())
    // @ts-ignore
    else if (isArrayLike<T>()) return parseArray<T>(removeJSONWhitespace(data))
    // @ts-ignore
    else if (isNullable<T>() && char === nCode) return parseNull<T>()
    // @ts-ignore
    else if (isFloat<T>() || isInteger<T>()) return parseNumber<T>(data.trim())
    // @ts-ignore
    return parseObject<T>(removeJSONWhitespace(data))
    // TODO: Add dynamic types.
  }
}

export function serializeUnknown(data: unknown): string {
  // @ts-ignore
  if (data.type === unknownId) {
    // @ts-ignore
    return serializeUnknown(data.get<unknown>())
  }
  // @ts-ignore
  if (data.type === stringId) {
    // @ts-ignore
    return serializeString(data.get<string>())
  }
  // @ts-ignore
  if (data.type === arrayUnknownId) {
    // @ts-ignore
    return serializeArray(data.get<unknown[]>())
  }
  // @ts-ignore
  if (data.type === unknownTypes.boolean) {
    // @ts-ignore
    return serializeBoolean(data.get<boolean>())
  }
  // @ts-ignore
  if (data.type === unknownTypes.i8) {
    // @ts-ignore
    return data.get<i8>().toString()
  }
  // @ts-ignore
  if (data.type === unknownTypes.i16) {
    // @ts-ignore
    return data.get<i16>().toString()
  }
  // @ts-ignore
  if (data.type === unknownTypes.i32) {
    // @ts-ignore
    return data.get<i32>().toString()
  }
  // @ts-ignore
  if (data.type === unknownTypes.i64) {
    // @ts-ignore
    return data.get<i64>().toString()
  }
  // @ts-ignore
  if (data.type === unknownTypes.u8) {
    // @ts-ignore
    return data.get<u8>().toString()
  }
  // @ts-ignore
  if (data.type === unknownTypes.u16) {
    // @ts-ignore
    return data.get<u16>().toString()
  }
  // @ts-ignore
  if (data.type === unknownTypes.u32) {
    // @ts-ignore
    return data.get<u32>().toString()
  }
  // @ts-ignore
  if (data.type === unknownTypes.u64) {
    // @ts-ignore
    return data.get<u64>().toString()
  }
  // @ts-ignore
  if (data.type === unknownTypes.f32) {
    // @ts-ignore
    return data.get<f32>().toString()
  }
  // @ts-ignore
  if (data.type === unknownTypes.f64) {
    // @ts-ignore
    return data.get<f64>().toString()
  }
  // @ts-ignore
  if (data.type === unknownTypes.null) {
    return nullVal
  }
  return 'idk!'
}

// @ts-ignore
@inline
function serializeNumber<T>(data: T): string {
  // @ts-ignore
  return data.toString()
}

// @ts-ignore
@inline
function serializeString(data: string): string {
  const resultData = new StringSink(quote)
  resultData.write(data.replaceAll(quote, escapeQuote))
  resultData.writeCodePoint(quoteCode)
  return resultData.toString()
}

// @ts-ignore
@inline
function serializeBoolean(data: number): string {
  return data ? trueVal : falseVal
}

// @ts-ignore
@inline
function serializeArray<T extends Array<unknown>>(data: T): string {
  let type!: valueof<T>
  const len = data.length - 1;
  if (len === -1) return lbracket + rbracket
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
    // @ts-ignore
  } else if (type instanceof unknown) {
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

// @ts-ignore
@inline
function parseBoolean(data: string): boolean {
  return data.charCodeAt(0) === true_charCode ? true : false
}

// @ts-ignore
@inline
function parseString(data: string): string {
  return sliceQuotes(data).replaceAll(escapeQuote, quote)
}

// @ts-ignore
@inline
function parseNull<T>(): T | null {
  return null
}

// @ts-ignore
@inline
function parseNumber<T>(data: string): T {
  let type: T
  // @ts-ignore
  if (type instanceof f64) return F64.parseFloat(data)
  // @ts-ignore
  else if (type instanceof f32) return F32.parseFloat(data)
  // @ts-ignore
  else if (type instanceof i32) return I32.parseInt(data)
  // @ts-ignore
  else if (type instanceof u32) return U32.parseInt(data)
  // @ts-ignore
  else if (type instanceof u64) return U64.parseInt(data)
  // @ts-ignore
  else if (type instanceof i64) return I64.parseInt(data)
  // @ts-ignore
  else if (type instanceof u8) return U8.parseInt(data)
  // @ts-ignore
  else if (type instanceof u16) return U16.parseInt(data)
  // @ts-ignore
  else if (type instanceof i16) return I16.parseInt(data)
  // @ts-ignore
  return I8.parseInt(data)
}

// @ts-ignore
@inline
function parseArray<T extends Array<unknown>>(data: string): T {
  // @ts-ignore
  if (isString<valueof<T>>()) return parseStringArray(data)
  // @ts-ignore
  else if (isBoolean<valueof<T>>()) return parseBooleanArray(data)
  // @ts-ignore
  else if (isArray<valueof<T>>()) return parseArrayArray<T>(data)
  // @ts-ignore
  return parseNumberArray<valueof<T>>(data)
}

// @ts-ignore
@inline
function parseStringArray(data: string): Array<string> {
  data = data.replaceAll(escapeQuote, quote)
  const result = new Array<string>()
  if (data.length === 2) return result
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

// @ts-ignore
@inline
function parseBooleanArray(data: string): Array<boolean> {
  const result = new Array<boolean>()
  if (data.length === 2) return result
  let char: u32 = 0
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i)
    if (char === true_charCode) {
      result.push(true)
      i += 4
    } else {
      result.push(false)
      i += 5
    }
  }
  return result
}

// @ts-ignore
@inline
function parseNumberArray<T>(data: string): Array<T> {
  const result = new Array<T>()
  if (data.length === 2) return result
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

// @ts-ignore
@inline
function parseArrayArray<T extends Array<unknown>>(data: string): T {
  const result = instantiate<T>()
  if (data.length === 2) return result
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

// @ts-ignore
@inline
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

// @ts-ignore
@inline
export function sliceQuotes(data: string): string {
  const len = data.length - 2
  if (len <= 0) return changetype<string>("");
  const out = changetype<string>(__new(len << 1, stringId));
  memory.copy(changetype<usize>(out), changetype<usize>(data) + (<usize>2), <usize>len << 1);
  return out;
}
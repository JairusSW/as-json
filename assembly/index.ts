import { stringify } from "as-console";

const quote = '"';
const comma = ",";
const rbracket = "]";
const lbracket = "[";
const colon = ":"
const trueVal = "true";
const falseVal = "false";
const nullVal = "null";
const escapeQuote = '\\"'
const empty_string = " "
const fwd_slash = "\\"
const true_char = "t"
const false_char = "f"
const nullStr = ""

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
    if (isString(data)) {
      if (data.includes('"')) {
        return quote + data.replaceAll(quote, escapeQuote) + quote
      }
      return quote + data + quote;
    } else if (isBoolean(data)) {
      return data ? trueVal : falseVal;
    } else if (data == null) {
      return nullVal;
    } else if (isFloat(data) || isInteger(data)) {
      return data.toString();
    } else if (isArray(data)) {
      // @ts-ignore
      return serializeArray<T>(data);
    }

    // @ts-ignore
    if (data.__encoded == "") data.__encode();
    // @ts-ignore
    return `{${data.__encoded}}`;
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
    //let type: T;
    // @ts-ignore
    if (isString<T>()) return deserializeString(data);
    // @ts-ignore
    if (isBoolean<T>()) return deserializeBoolean(data);
    // @ts-ignore
    if (isArray<T>()) return deserializeArray<T>(data);
    // @ts-ignore
    if (isInteger<T>() || isFloat<T>()) return deserializeNumber<T>(data);
    // @ts-ignore
    return deserializeObject<T>(data);
  }
}

// @ts-ignore
@inline
function serializeNumber<T>(data: T): string {
  // @ts-ignore
  return data.toString();
}

// @ts-ignore
@inline
function serializeString(data: string): string {
  if (data.includes('"')) {
    return quote + data.replaceAll(quote, escapeQuote) + quote
  }
  return quote + data + quote;
}

// @ts-ignore
@inline
function serializeBoolean(data: number): string {
  return data ? trueVal : falseVal;
}

function serializeArray<T extends Array<any>>(data: T): string {
  const len = data.length - 1;
  if (len === -1) return lbracket + lbracket;
  let result = lbracket;
  if (isString<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      result += serializeString(data[i]) + comma;
    }
    result += serializeString(data[len]) + rbracket;
    return result;
  } else if (isFloat<valueof<T>>() || isInteger<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      result += serializeNumber<valueof<T>>(data[i]) + comma;
    }
    result += serializeNumber<valueof<T>>(data[len]) + rbracket;
    return result;
  } else if (isBoolean<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      result += serializeBoolean(data[i]) + comma;
    }
    result += serializeBoolean(data[len]) + rbracket;
    return result;
  } else if (isArray<valueof<T>>()) {
    for (let i = 0; i < len; i++) {
      result += serializeArray<valueof<T>>(data[i]) + comma;
    }
    result += serializeArray<valueof<T>>(data[len]) + rbracket;
    return result;
  }

  for (let i = 0; i < len; i++) {
    const elem = data[i];
    // @ts-ignore
    if (elem.__encoded == nullStr) elem.__encode();
  }
  // @ts-ignore
  return `{${elem.__encoded}}`;
}

function deserializeBoolean(data: string): boolean {
  return data.charAt(0) == "t" ? true : false;
}

function deserializeString(data: string): string {
  return data.slice(1, data.length - 1);
}

function deserializeNumber<T>(data: string): T {
  let type: T;
  // @ts-ignore
  if (type instanceof u8) return u8(parseInt(data));
  // @ts-ignore
  if (type instanceof i8) return i8(parseInt(data));
  // @ts-ignore
  if (type instanceof u16) return u16(parseInt(data));
  // @ts-ignore
  if (type instanceof i16) return i16(parseInt(data));
  // @ts-ignore
  if (type instanceof u32) return u32(parseInt(data));
  // @ts-ignore
  if (type instanceof i32) return i32(parseInt(data));
  // @ts-ignore
  if (type instanceof u64) return u64(parseInt(data));
  // @ts-ignore
  if (type instanceof i64) return i64(parseInt(data));
  // @ts-ignore
  if (type instanceof f32) return f32(parseFloat(data));
  // @ts-ignore
  return f64(parseFloat(data));
}

// Array Deserialization
// TODO: Add objects
// TODO: Maybe add null array?
function deserializeArray<T extends Array<any>>(data: string): T {
  // @ts-ignore
  if (isString<valueof<T>>()) return deserializeStringArray(data);
  // @ts-ignore
  else if (isBoolean<valueof<T>>()) return deserializeBooleanArray(data);
  // @ts-ignore
  else if (isArray<valueof<T>>()) return deserializeArrayArray<T>(data);
  // @ts-ignore
  return deserializeNumberArray<valueof<T>>(data);
}

// String Array
function deserializeStringArray(data: string): Array<string> {
  const result = new Array<string>();
  let lastPos: u32 = 2;
  let char: string;
  for (let i = 1; i < data.length - 1; i++) {
    char = data.charAt(i);
    if (char == comma) {
      result.push(data.slice(lastPos, i - 1).replaceAll(escapeQuote, quote));
      lastPos = i + 2;
    }
  }
  result.push(data.slice(lastPos, data.length - 2));
  return result;
}

// Boolean Array
function deserializeBooleanArray(data: string): Array<boolean> {
  const result = new Array<boolean>();
  let char: string;
  for (let i = 1; i < data.length - 1; i++) {
    char = data.charAt(i);
    if (char == true_char) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

// Number Array

function deserializeNumberArray<T>(data: string): Array<T> {
  const result = new Array<T>();
  let lastPos: u32 = 0;
  let char: string;
  for (let i = 1; i < data.length - 1; i++) {
    char = data.charAt(i);
    if (char == comma) {
      result.push(deserializeNumber<T>(data.slice(lastPos + 1, i)));
      lastPos = i;
    }
  }
  result.push(deserializeNumber<T>(data.slice(lastPos + 1, data.length - 1)))
  return result;
}

// Array Array
function deserializeArrayArray<T extends Array<any>>(data: string): T {
  const result = instantiate<T>();
  let lastPos: i32 = -1;
  let char: string;
  let depth: u32 = 0;
  let fdepth: u32 = 0;
  let instr: boolean = false;
  for (let i = 1; i < data.length - 1; i++) {
    char = data.charAt(i);
    // This ignores [ and ] if they are inside a string.
    if (data.charAt(i - 1) != fwd_slash && char == quote)
      instr = (instr ? false : true);
    // This gets the depth of the array.
    if (instr === false && char == lbracket) depth++;
    if (instr === false && char == rbracket) fdepth++;
    // If the depth and found depth are equal, that is an array. Push it.
    if (instr === false && depth > 0 && depth === fdepth) {
      result.push(
        deserializeArray<valueof<T>>(data.slice(lastPos + 2, i + 1))
      )
      // Reset the depth
      depth = 0;
      fdepth = 0;
      // Set new lastPos
      lastPos = i;
    }
  }
  // Return the final array
  return result;
}

// TODO: Rewrite and finish up.
export function deserializeObject<T>(data: string): T {
  let schema: T;
  const result = new Map<string, string>();
  let lastPos: u32 = 1
  let key: string = ''
  let instr: u32 = 0
  let char: string = ''
  let depth: u32 = 0
  let fdepth: u32 = 0
  let inData: u32 = 0
  for (let i: u32 = 1; i < u32(data.length); i++) {
    char = data.charAt(i)
    if (char == '"') instr = (instr ? 0 : 1)
    if (instr === 0 && (char == "{" || char == "[")) {
      inData = (inData === 0 && depth > 0 && depth === fdepth) ? 0 : 1
      depth++
    }
    if (instr === 0 && (char == "}" || char == "]")) fdepth++;
    if (depth !== 0 && depth === fdepth) {
      result.set(key, data.slice(lastPos + 1, i + 1))
      // Reset the depth
      depth = 0
      fdepth = 0
      // Set new lastPos
      lastPos = (i + 1);
      inData = 0
    }
    else if (inData === 0) {
      if (char == ":") {
        key = data.slice(lastPos + 1, i - 1)
        lastPos = (i)
      }
      else if (char == "}") {
        char = data.slice(lastPos + 1, i)
        if (char && char !== "") result.set(key, char)
        key = ''
        lastPos = (i + 1)
      }
      else if (char == ",") {
        char = data.slice(lastPos + 1, i)
        if (char && char !== "") result.set(key, char)
        key = ''
        lastPos = (i + 1)
      }
    }
  }
  // @ts-ignore
  return schema.__decode(result);
}

/**
 * Get the type of a JSON string.
 * @param data string
 * @returns string
 */
function getType(data: string): string {
  const start: string = data.charAt(0)
  if (start == quote) return 'string'
  else if (start == 't' || start == 'f') return 'boolean'
  else if (start == '{') return 'object'
  else if (start == '[') return 'array'
  else if (start == 'n') return 'null'
  else return 'number'
}

export function removeJSONWhitespace(data: string): string {
  let result: string = ''
  let instr: u32 = 0
  // 0 = off
  // 1 = on
  // Numbers are faster in JS than bools
  let char: string = ''
  for (let i = 0; i < data.length; i++) {
    char = data.charAt(i);
    // Assign character to `char` variable.
    // It helps to pre-define a variable.
    if (char == '"' && data.charAt(i-1) != "\\\"") instr = (instr ? 0 : 1);
    if (instr === 0 && char != ' ') result += char
    else if (instr === 1) result += char
  }
  return result
}
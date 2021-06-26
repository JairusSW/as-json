// @ts-ignore
import { StringSink } from "as-string-sink";

const quote = '"'
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
      return quote + data + quote
    } else if (data == null) {
      return `null`
    } else if (isFloat(data) || isSigned(data) || isInteger(data)) {
      return `${data}`;
    } else if (isBoolean(data)) {
      return data ? `true` : `false`;
    } else if (isArray(data)) {
      const len = data.length - 1;
      // TODO: Handle empty arrays
      // if (len === 0) return '[]'
      const result = new StringSink("[");
      for (let i = 0; i < len; i++) {
        result.write(`${stringify(unchecked(data[i]))},`);
      }
      result.write(`${stringify(unchecked(data[len]))}]`);
      return result.toString();
    }

    // Schema/Class serialization
    // @ts-ignore
    if (data.__encoded == '') data.__encode()
    // @ts-ignore
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

export function deserializeBoolean(data: string): boolean {
  return data === "true" ? true : false;
}

export function deserializeString(data: string): string {
  return data.slice(1, data.length - 1);
}

export function deserializeNumber<T>(data: string): T {
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
  if (isString<valueof<T>>()) return parseStringArray(data);
  // @ts-ignore
  else if (isBoolean<valueof<T>>()) return parseBooleanArray(data);
  // @ts-ignore
  else if (isArray<valueof<T>>()) return parseArrayArray<T>(data);
  // @ts-ignore
  return parseNumberArray<valueof<T>>(data);
}

// String Array
function parseStringArray(data: string): Array<string> {
  const result = new Array<string>();
  let lastPos = 0;
  let char: string;
  for (let i = 2; i < data.length - 1; i++) {
    char = data.charAt(i);
    // @ts-ignore
    if (char == ",") {
      result.push(data.slice(lastPos + 2, i - 2));
      lastPos = i;
    }
  }
  result.push(data.slice(lastPos + 2, data.length - 2));
  return result;
}

// Boolean Array
function parseBooleanArray(data: string): Array<boolean> {
  const result = new Array<boolean>();
  let char: string;
  for (let i = 1; i < data.length - 1; i++) {
    char = unchecked(data.charAt(i));
    if (char == "t") {
      unchecked(result.push(true));
    } else if (char == "f") {
      unchecked(result.push(false));
    }
  }
  return result;
}

// Number Array

function parseNumberArray<T>(data: string): Array<T> {
  const result = new Array<T>();
  let lastPos = 0;
  let char: string;
  for (let i = 1; i < data.length - 1; i++) {
    char = unchecked(data.charAt(i));
    if (char == ",") {
      unchecked(result.push(deserializeNumber<T>(data.slice(lastPos + 1, i))));
      lastPos = i;
    }
  }
  unchecked(result.push(deserializeNumber<T>(data.slice(lastPos + 1, data.length - 1))));
  return result;
}

// Array Array
function parseArrayArray<T extends Array<any>>(data: string): T {
  const result = instantiate<T>();
  let lastPos = -1;
  let char: string;
  let depth = 0;
  let fdepth = 0;
  let instr = 0
  for (let i = 1; i < data.length - 1; i++) {
    char = unchecked(data.charAt(i));
    // Remove whitespace only if it isn't in a string. (strings can have whitespace)
    if (instr === 0 && char == ' ') break
    // This ignores [ and ] if they are inside a string.
    if (unchecked(data.charAt(i-1)) != '\\' && char == '"') instr = instr === 0 ? 1 : 0
    // This gets the depth of the array.
    if (instr === 0 && char == "[") depth++;
    if (instr === 0 && char == "]") fdepth++;
    // If the depth and found depth are equal, that is an array. Push it.
    if (instr === 0 && depth > 0 && depth === fdepth) {
      unchecked(result.push(deserializeArray<valueof<T>>(data.slice(lastPos + 2, i+1))))
      // Reset the depth
      depth = 0
      fdepth = 0
      // Set new lastPos
      lastPos = i
    }
  }
  // Return the final array
  return result;
}

// TODO: Rewrite and finish up.
export function deserializeObject<T>(data: string): T {
  let schema: T;
  const values = new Array<string>();
  let lastPos = 1;
  for (let i = 0; i < data.length - 1; i++) {
    const char = unchecked(data.charAt(i));
    if (char == ",") {
      unchecked(values.push(data.slice(lastPos, i)));
      lastPos = i + 1;
    }
    if (char == ":") {
      lastPos = i + 1;
    }
  }
  const lastChunk = unchecked(data.slice(lastPos, data.length - 1));
  if (lastChunk) unchecked(values.push(lastChunk))
  // @ts-ignore
  return schema.__decode(unchecked(values));
}

import { StringSink } from "as-string-sink/assembly";
import { Variant } from "as-variant/assembly";
import {
  backSlashCode,
  colonCode,
  commaCode,
  leftBraceCode,
  leftBracketCode,
  quoteCode,
  rightBraceCode,
  rightBracketCode
} from "./chars";

/**
 * JSON Encoder/Decoder for AssemblyScript
 */
export namespace JSON {
  export type _Variant = Variant;
  /**
   * Stringifies valid JSON data.
   * ```js
   * JSON.stringify<T>(data)
   * ```
   * @param data T
   * @returns string
   */
  export function stringify<T = Nullable | null>(data: T): string {
    // String
    if (isString<T>()) {
      return '"' + (<string>data).replaceAll('"', '\\"') + '"';
    }
    // Boolean
    else if (isBoolean<T>()) {
      return data ? "true" : "false";
    }
    // Integers/Floats
    // @ts-ignore
    else if ((isInteger<T>() || isFloat<T>()) && isFinite(data)) {
      // @ts-ignore
      return data.toString();
    }
    // Class-Based serialization
    // @ts-ignore
    else if (isDefined(data.__JSON_Serialize)) {
      // @ts-ignore
      return data.__JSON_Serialize();
    }
    // ArrayLike
    else if (isArrayLike<T>()) {
      let result = new StringSink("[");
      // @ts-ignore
      if (data.length == 0) return "[]";
      // @ts-ignore
      for (let i = 0; i < data.length - 1; i++) {
        // @ts-ignore
        result.write(stringify(unchecked(data[i])));
        result.write(",");
      }
      // @ts-ignore
      result.write(stringify(unchecked(data[data.length - 1])));
      result.write("]");
      return result.toString();
    }
    // Null
    else if (isNullable<T>() && data == null) {
      return "null";
    } else {
      return "null";
    }
  }
  /**
   * Parses valid JSON strings into their original format.
   * ```js
   * JSON.parse<T>(data)
   * ```
   * @param data string
   * @returns T
   */
  export function parse<T = Variant>(data: string): T {
    let type!: T;
    if (isString<T>()) {
      // @ts-ignore
      return parseString(data);
    } else if (isBoolean<T>()) {
      // @ts-ignore
      return parseBoolean<T>(data);
    } else if (isFloat<T>() || isInteger<T>()) {
      return parseNumber<T>(data);
    } else if (isArrayLike<T>()) {
      return parseArray<T>(data);
      // @ts-ignore
    } else if (isDefined(type.__JSON_Deserialize)) {
      const len: u32 = data.length - 1
      let schema!: T
      const result = new Map<string, string>()
      let lastPos: u32 = 1
      let key: string = ''
      let instr: boolean = false
      let char: u32 = 0
      let depth: u32 = 0
      let fdepth: u32 = 0
      for (let i: u32 = 1; i < len; i++) {
        char = data.charCodeAt(i);
        if (instr === false && char === quoteCode) instr = true;
        else if (instr === true && char === quoteCode && data.charCodeAt(i - 1) !== "/".charCodeAt(0)) instr = false;
        if (instr === false) {
          if (char === leftBraceCode || char === leftBracketCode) depth++
          if (char === rightBraceCode || char === rightBracketCode) fdepth++
        }
        if (depth !== 0 && depth === fdepth) {
          //console.log(`Found Struct: ${data.slice(lastPos + 1, i + 1)}`)
          result.set(key, data.slice(lastPos + 1, i + 1))
          // Reset the depth
          depth = 0
          fdepth = 0
          // Set new lastPos
          lastPos = i + 1
        }
        if (!instr && depth === 0) {
          if (char === colonCode) {
            key = data.slice(lastPos + 1, i - 1)
           //console.log(`Found Key: ${data.slice(lastPos + 1, i - 1)}`)
            lastPos = i
          } else if (char === commaCode) {
            //console.log(`Found Comma: ${data.slice(lastPos + 1, i)}`)
            if ((i - lastPos) > 0) result.set(key, data.slice(lastPos + 1, i))
            lastPos = i + 1
          }
        }
      }

      if ((len - lastPos) > 1 && (len - lastPos) !== 0) {
        result.set(key, data.slice(lastPos + 1, len))
      }
      // @ts-ignore
      return schema.__JSON_Deserialize(result)
    } else {
      // @ts-ignore
      return null;
    }
  }
}


// @ts-ignore
@inline
  function parseString(data: string): string {
  return data.slice(1, data.length - 1).replaceAll('\\"', '"');
}

// @ts-ignore
@inline
  function parseBoolean<T extends boolean>(data: string): T {
  if (data.length > 3 && data.startsWith("true")) return <T>true;
  else if (data.length > 4 && data.startsWith("false")) return <T>false;
  else throw new Error(`JSON: Cannot parse "${data}" as boolean`);
}
// @ts-ignore
@inline
  function parseNumber<T>(data: string): T {
  let type: T;
  // @ts-ignore
  if (type instanceof f64) return F64.parseFloat(data);
  // @ts-ignore
  else if (type instanceof f32) return F32.parseFloat(data);
  // @ts-ignore
  else if (type instanceof i32) return I32.parseInt(data);
  // @ts-ignore
  else if (type instanceof u32) return U32.parseInt(data);
  // @ts-ignore
  else if (type instanceof u8) return U8.parseInt(data);
  // @ts-ignore
  else if (type instanceof u16) return U16.parseInt(data);
  // @ts-ignore
  else if (type instanceof i16) return I16.parseInt(data);
  // @ts-ignore
  else if (type instanceof i8) return I8.parseInt(data);
  else
    throw new Error(
      `JSON: Cannot parse invalid data into a number. Either "${data}" is not a valid number, or <${nameof<T>()}> is an invald number type.`
    );
}

// @ts-ignore
@inline
  export function parseNumberArray<T>(data: string): T {
  const result = instantiate<T>();
  if (data.length == 0) return result;
  let lastPos: u32 = 1;
  let i: u32 = 1;
  let char: u32 = 0;
  for (; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i);
    if (char == commaCode) {
      // console.log(data.slice(lastPos, i))
      // @ts-ignore
      result.push(parseNumber<valueof<T>>(data.slice(lastPos, i).trim()));
      lastPos = ++i;
    }
  }
  //console.log(data.slice(lastPos, data.length - 1))
  // @ts-ignore
  result.push(
    // @ts-ignore
    parseNumber<valueof<T>>(data.slice(lastPos, data.length - 1).trimStart())
  );
  return result;
}

// @ts-ignore
@inline
  export function parseBooleanArray<T>(data: string): T {
  const result = instantiate<T>();
  if (data.length == 0) return result;
  let lastPos: u32 = 1;
  let i: u32 = 1;
  let char: u32 = 0;
  for (; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i);
    if (char == commaCode) {
      // @ts-ignore
      result.push(parseBoolean<valueof<T>>(data.slice(lastPos, i).trimStart()));
      lastPos = ++i;
    }
  }
  // @ts-ignore
  result.push(
    // @ts-ignore
    parseBoolean<valueof<T>>(data.slice(lastPos, data.length - 1).trimStart())
  );
  return result;
}

// @ts-ignore
@inline
  export function parseArray<T>(data: string): T {
  const result = instantiate<T>();
  data = data.trim();
  let len: u32 = data.length - 1;
  let lastPos: u32 = 1;
  let i: u32 = 1;
  let char: u32 = 0;
  // Is struct such as Object, or Array
  let isStruct: boolean = false;
  let isStr: boolean = false;
  //let offset: u32 = 0;
  // Depth for finding matching brackets
  let inDepth: u32 = 0;
  let outDepth: u32 = 0;
  for (; i < len; i++) {
    char = data.charCodeAt(i);
    if (char == quoteCode && data.charCodeAt(i - 1) != backSlashCode)
      isStr = !isStr;
    if (char == leftBraceCode || char == leftBracketCode) {
      inDepth++;
      isStruct = true;
    } else if (char == rightBraceCode || char == rightBracketCode) {
      outDepth++;
      isStruct = true;
    }
    if (!isStr) {
      if (!isStruct) {
        // This removes whitespace before and after an element
        /*if (offset != 0 && isSpace(char)) {
          lastPos++;
        } else {
          if (isSpace(char)) offset++;
        }*/
        // This checks to see if we are dealing with structures such as Objects and Arrays
        if (char == commaCode) {
          // @ts-ignore
          result.push(JSON.parse<valueof<T>>(data.slice(lastPos, i).trim()));
          //offset = 0;
          lastPos = i + 1;
        }
      } else {
        if (inDepth == outDepth) {
          i++;
          //console.log(`Struct-${data.slice(lastPos, i).trim()}-`)
          lastPos = i + 1;
          inDepth = 0;
          outDepth = 0;
          isStruct = false;
        }
      }
    }
  }
  /*char = data.charCodeAt(lastPos)
  // Remove preceeding whitespace
  while (isSpace(char)) {
    lastPos++;
    char = data.charCodeAt(lastPos);
  }
  char = data.charCodeAt(--len);
  while (isSpace(char)) {
    len--;
    char = data.charCodeAt(len);
  }*/

  // @ts-ignore
  // Handle empty arrays
  data = data.slice(lastPos, len).trim();
  // @ts-ignore
  if (data.length != 0) result.push(JSON.parse<valueof<T>>(data));
  //if (data.length != 0) console.log(`Trailing-${data.slice(lastPos, len).trim()}-`)
  return result;
}

class Nullable { }
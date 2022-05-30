import { StringSink } from "as-string-sink/assembly";
import { Variant } from "as-variant/assembly";

import { isSpace } from "util/string";
import { aCode, backSlashCode, colonCode, commaCode, eCode, fCode, lCode, leftBraceCode, leftBracketCode, quoteCode, rCode, rightBraceCode, rightBracketCode, sCode, tCode, uCode } from "./chars";
// Discriminator from as-variant
const enum Discriminator {
  Bool,
  I8, I16, I32, I64,
  U8, U16, U32, U64,
  F32, F64,
  UnmanagedRef,
  ManagedRef
}

//export declare let json: (...a: any) => any;

/**
 * JSON Encoder/Decoder for AssemblyScript
 */
export namespace JSON {
  //export type _Variant = Variant;
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
    if (isString(data)) {
      return serializeString(<string>data);
    }
    // Boolean
    else if (isBoolean(data)) {
      return data ? "true" : "false";
    }
    // Null
    else if (isNullable<T>() && data == null) {
      return "null";
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
      //@ts-ignore
      return data.__JSON_Serialize();
    }
    // Map
    else if (data instanceof Map) {
      let result = new StringSink("{");
      let i = 0;
      const keys = data.keys();
      const values = data.values();
      for (; i < keys.length - 1; i++) {
        result.write(`"${unchecked(keys[i])}":${stringify(unchecked(values[i]))},`);
      }
      result.write(`"${unchecked(keys[keys.length - 1])}":${stringify(unchecked(values[keys.length - 1]))}}`);
      return result.toString();
    }
    // ArrayLike
    else if (isArrayLike(data)) {
      let result = new StringSink("[");
      if (data.length == 0) return "[]";
      for (let i = 0; i < data.length - 1; i++) {
        result.write(stringify(unchecked(data[i])));
        result.write(",");
      }
      result.write(stringify(unchecked(data[data.length - 1])));
      result.write("]");
      return result.toString();
    } else if (data instanceof Variant) {
      if (data.is<string>()) {
        return JSON.stringify<string>(data.getUnchecked<string>());
      } else if (data.is<boolean>()) {
        return JSON.stringify<boolean>(data.getUnchecked<boolean>());
      } else if (data.is<bool>()) {
        return JSON.stringify<bool>(data.getUnchecked<bool>());
      } else if (data.is<i8>()) {
        return JSON.stringify<i8>(data.getUnchecked<i8>());
      } else if (data.is<i16>()) {
        return JSON.stringify<i16>(data.getUnchecked<i16>());
      } else if (data.is<i32>()) {
        return JSON.stringify<i32>(data.getUnchecked<i32>());
      } else if (data.is<u8>()) {
        return JSON.stringify<u8>(data.getUnchecked<u8>());
      } else if (data.is<u16>()) {
        return JSON.stringify<u16>(data.getUnchecked<u16>());
      } else if (data.is<u32>()) {
        return JSON.stringify<u32>(data.getUnchecked<u32>());
      } else if (data.is<f32>()) {
        return JSON.stringify<f32>(data.getUnchecked<f32>());
      } else if (data.is<f64>()) {
        return JSON.stringify<f64>(data.getUnchecked<f64>());
        // @ts-ignore
      } else if (data.discriminator >= Discriminator.ManagedRef) {
        // TODO: We know it is a Object, but how to call __JSON_Stringify()?
      } else if (data.is<string[]>()) {
        return JSON.stringify<string[]>(data.getUnchecked<string[]>());
      } else if (data.is<boolean[]>()) {
        return JSON.stringify<boolean[]>(data.getUnchecked<boolean[]>());
      } else if (data.is<bool[]>()) {
        return JSON.stringify<bool[]>(data.getUnchecked<bool[]>());
      } else if (data.is<i8[]>()) {
        return JSON.stringify<i8[]>(data.getUnchecked<i8[]>());
      } else if (data.is<i16[]>()) {
        return JSON.stringify<i16[]>(data.getUnchecked<i16[]>());
      } else if (data.is<i32[]>()) {
        return JSON.stringify<i32[]>(data.getUnchecked<i32[]>());
      } else if (data.is<u8[]>()) {
        return JSON.stringify<u8[]>(data.getUnchecked<u8[]>());
      } else if (data.is<u16[]>()) {
        return JSON.stringify<u16[]>(data.getUnchecked<u16[]>());
      } else if (data.is<u32[]>()) {
        return JSON.stringify<u32[]>(data.getUnchecked<u32[]>());
      } else if (data.is<f32[]>()) {
        return JSON.stringify<f32[]>(data.getUnchecked<f32[]>());
      } else if (data.is<f64[]>()) {
        return JSON.stringify<f64[]>(data.getUnchecked<f64[]>());
      } else {
        return "null";
      }
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
    let type!: T
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
    } else if (type instanceof Map) {
      return parseMap<T>(data);
      // @ts-ignore
    } else if (type instanceof Variant) {
      // @ts-ignore
      return Variant.from(JSON.parse<T>(data));
      // @ts-ignore
    } else if (isDefined(type.__JSON_Parse)) {
      const result = new Map<string, Variant>();
      let lastPos: u32 = 0;
      let char: u32 = 0;
      let i: u32 = 1;
      let key: string = "";
      let isKey: boolean = false;
      for (; i < u32(data.length - 1); i++) {
        char = data.charCodeAt(i);
        if (isKey == false) {
          if (char == colonCode) {
            key = data.slice(lastPos + 2, i - 1);
            //console.log(`Found Key: ${key}`)
            lastPos = ++i;
            isKey = true;
          }
        } else {
          if (char == commaCode) {
            const val = data.slice(lastPos, i);
            lastPos = i;
            isKey = false;
            //console.log(`Found Val: ${val}`)
            // @ts-ignore
            result.set(key, JSON.parse<Variant>(val));
          }
        }
      }
      // @ts-ignore
      result.set(key, JSON.parse<Variant>(data.slice(lastPos, data.length - 1)));
      // @ts-ignore
      return type.__JSON_Parse(result);
    } else {
      // @ts-ignore
      return null;
    }
  }
}

// @ts-ignore
//@inline
function serializeString(data: string): string {
  return "\"" + data.replaceAll("\"", "\\\"") + "\"";
}
// @ts-ignore
//@inline
function parseString(data: string): string {
  return data.slice(1, data.length - 1).replaceAll("\\\"", "\"");
}

// @ts-ignore
//@inline
function parseBoolean<T extends boolean>(data: string): T {
  if (data.length > 3 && data.startsWith("true")) return <T>true;
  else if (data.length > 4 && data.startsWith("false")) return <T>false;
  else throw new Error(`JSON: Cannot parse "${data}" as boolean`);
}
// @ts-ignore
//@inline
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
  else throw new Error(`JSON: Cannot parse invalid data into a number. Either "${data}" is not a valid number, or <${nameof<T>()}> is an invald number type.`);
}

// @ts-ignore
//@inline
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
  result.push(parseNumber<valueof<T>>(data.slice(lastPos, data.length - 1).trimStart()));
  return result;
}

// @ts-ignore
//@inline
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
  result.push(parseBoolean<valueof<T>>(data.slice(lastPos, data.length - 1).trimStart()));
  return result;
}

// @ts-ignore
//@inline
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
    if (char == quoteCode && data.charCodeAt(i - 1) != backSlashCode) isStr = !isStr;
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

export function parseObject(data: string): void {
  //const obj = instantiate<T>()
  const result = new Array<string>();
  let lastPos: u32 = 0;
  let char: u32 = 0;
  let i: u32 = 1;
  let key: string = "";
  let isKey: boolean = false;
  for (; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i);
    if (isKey == false) {
      if (char == colonCode) {
        key = data.slice(lastPos + 2, i - 1);
        //console.log(`Found Key: ${key}`);
        result.push(key);
        lastPos = ++i;
        isKey = true;
      }
    } else {
      if (char == commaCode) {
        const val = data.slice(lastPos, i);
        lastPos = i;
        isKey = false;
        //console.log(`Found Val: ${val}`)
        result.push(val);
      }
    }
  }
  result.push(data.slice(lastPos, data.length - 1));
  //console.log(stringify(result))
  //return obj
}

export function parseMap<T>(data: string): T {
  //const obj = instantiate<T>()
  const result = instantiate<T>();
  let lastPos: u32 = 0;
  let char: u32 = 0;
  let i: u32 = 1;
  let key: string = "";
  let isKey: boolean = false;
  for (; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i);
    if (isKey == false) {
      if (char == colonCode) {
        key = data.slice(lastPos + 2, i - 1);
        //console.log(`Found Key: ${key}`)
        lastPos = ++i;
        isKey = true;
      }
    } else {
      if (char == commaCode) {
        const val = data.slice(lastPos, i);
        lastPos = i;
        isKey = false;
        //console.log(`Found Val: ${val}`)
        // @ts-ignore
        result.set(key, JSON.parse<f32>(val));
      }
    }
  }
  // @ts-ignore
  result.set(key, JSON.parse<f32>(data.slice(lastPos, data.length - 1)));
  return result;
}

class Nullable { }
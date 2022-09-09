import { StringSink } from "as-string-sink/assembly";
import { Variant } from "as-variant/assembly";
import { isSpace } from "assemblyscript/std/assembly/util/string";
import {
  backSlashCode,
  colonCode,
  commaCode,
  eCode,
  fCode,
  forwardSlashCode,
  leftBraceCode,
  leftBracketCode,
  quoteCode,
  rightBraceCode,
  rightBracketCode,
  tCode,
} from "./chars";
import { removeWhitespace, unsafeCharCodeAt } from "./util";

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
      // @ts-ignore
      return parseArray<T>(data);
      // @ts-ignore
    } else if (isDefined(type.__JSON_Deserialize)) {
      return parseObject<T>(data);
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

export function parseObject<T>(data: string): T {
  let schema!: T;
  let lastPos = 0;
  let depth = 1;
  let char = 0;
  for (let i = 1; i < data.length - 1; i++) {
    char = unsafeCharCodeAt(data, i);
    //if () {
    //}
  }
  // @ts-ignore
  return schema.__JSON_Deserialize(result);
}
// @ts-ignore
@inline
export function parseArray<T extends unknown[]>(data: string): T {
  data = data.trimStart();
  // TODO: Replace with opt
  let type!: valueof<T>;
  if (type instanceof String) {
    return <T>parseStringArray(data);
  } else if (isBoolean<valueof<T>>()) {
    // @ts-ignore
    return parseBooleanArray<T>(data);
  } else if (isFloat<valueof<T>>() || isInteger<valueof<T>>()) {
    // @ts-ignore
    return parseNumberArray<T>(data);
  } else if (isArrayLike<valueof<T>>()) {
    // @ts-ignore
    return parseArrayArray<T>(data);
    // @ts-ignore
  } else if (isDefined(type.__JSON_Deserialize)) {
    // @ts-ignore
    return parseObjectArray<T>(data);
  }
}

// @ts-ignore
@inline
export function parseStringArray(data: string): string[] {
  const result: string[] = [];
  let lastPos = 0;
  let instr = false;
  for (let i = 1; i < data.length - 1; i++) {
    if (unsafeCharCodeAt(data, i) === quoteCode) {
      if (instr === false) {
        instr = true;
        lastPos = i;
      } else if (unsafeCharCodeAt(data, i - 1) !== backSlashCode) {
        instr = false;
        //console.log(`Value: ${data.slice(lastPos + 1, i)}`);
        result.push(data.slice(lastPos + 1, i).replaceAll('\\"', '"'));
      }
    }
  }
  return result;
}

// @ts-ignore
@inline
export function parseBooleanArray<T extends boolean[]>(data: string): T {
  const result = instantiate<T>();
  let lastPos = 1;
  let char = 0;
  for (let i = 1; i < data.length - 1; i++) {
    char = unsafeCharCodeAt(data, i);
    /*// if char == "t" && i+3 == "e"
    if (char === tCode && data.charCodeAt(i + 3) === eCode) {
      //i += 3;
      result.push(parseBoolean<valueof<T>>(data.slice(lastPos, i+2)));
      //i++;
    } else if (char === fCode && data.charCodeAt(i + 4) === eCode) {
      //i += 4;
      result.push(parseBoolean<valueof<T>>(data.slice(lastPos, i+3)));
      //i++;
    }*/
    if (char === tCode || char === fCode) {
      lastPos = i;
    } else if (char === eCode) {
      i++;
      //console.log(`Value: ${data.slice(lastPos, i)}`);
      result.push(parseBoolean<valueof<T>>(data.slice(lastPos, i)));
    }
  }
  return result;
}

// @ts-ignore
@inline
export function parseNumberArray<T extends number[]>(data: string): T {
  const result = instantiate<T>();
  let lastPos = 0;
  let char = 0;
  for (let i = 1; i < data.length - 1; i++) {
    char = unsafeCharCodeAt(data, i);
    if (char >= 48 && char <= 57) {
      //console.log(`Code: ${char} Char: ${data.charAt(i)} Index: ${i}`)
      lastPos = i;
    } else if ((isSpace(char) || char == commaCode) && lastPos > 0) {
      //console.log(`Found Number: ${data.slice(lastPos, i)}`)
      result.push(parseNumber<valueof<T>>(data.slice(lastPos, i)));
      lastPos = 0;
    }
  }
  return result;
}

// @ts-ignore
@inline
export function parseArrayArray<T extends unknown[][]>(data: string): T {
  const result = instantiate<T>();
  let char = 0;
  let lastPos = 0;
  let depth = 1;
  let i = 1;
  // Find start of bracket
  //for (; unsafeCharCodeAt(data, i) !== leftBracketCode; i++) {}
  //i++;
  for (; i < data.length - 1; i++) {
    char = unsafeCharCodeAt(data, i);
    if (char === leftBracketCode) {
      if (depth === 1) {
        lastPos = i;
      }
      // Shifting is 6% faster than incrementing
      depth = depth << 1;
    } else if (char === rightBracketCode) {
      depth = depth >> 1;
      if (depth === 1) {
        i++;
        //console.log(`Found Nested Array: -${data.slice(lastPos, i)}-`);
        result.push(JSON.parse<valueof<T>>(data.slice(lastPos, i)));
      }
    }
  }
  return result;
}

// @ts-ignore
@inline
export function parseObjectArray<T extends unknown[][]>(data: string): T {
  const result = instantiate<T>();
  let char = 0;
  let lastPos = 1;
  let depth = 1;
  let i = 1;
  // Find start of bracket
  //for (; unsafeCharCodeAt(data, i) !== leftBracketCode; i++) { }
  //i++;
  for (; i < data.length - 1; i++) {
    char = unsafeCharCodeAt(data, i);
    if (char === leftBraceCode) {
      if (depth === 1) {
        lastPos = i;
      }
      // Shifting is 6% faster than incrementing
      depth = depth << 1;
    } else if (char === rightBraceCode) {
      depth = depth >> 1;
      if (depth === 1) {
        i++;
        //console.log(`Found Nested Object: -${data.slice(lastPos, i)}-`);
        //result.push(JSON.parse<valueof<T>>(data.slice(lastPos, i)));
      }
    }
  }
  return result;
}

class Nullable {}

// @ts-ignore
import { StringSink } from "as-string-sink";

import { console, stringify } from "as-console";

class JSONtypes {
  unknown: i32;
  str: i32;
  arr: i32;
  obj: i32;
}

const jsonTypes: JSONtypes = {
  unknown: 0,
  str: 1,
  arr: 2,
  obj: 3,
};

function isNull<T>(value: T): boolean {
  return changetype<usize>(value) == 0;
}

export namespace JSON {
  export function stringify<T>(data: T): string {
    if (isString(data)) {
      return `"${data}"`;
      //return `"${data.replaceAll('"', '\\"')}"`
    } else if (isFloat(data) || isSigned(data)) {
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
    } else if (isNull<T>(data)) {
      return `null`;
    }

    // Schema/Class serialization
    // @ts-ignore
    data.__encode();
    // @ts-ignore
    return `{${data.__encoded.slice(0, data.__encoded.length - 1)}}`;
  }
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

export function deserializeArray<T extends Array<any>>(data: string): T {
  // Declare T
  let result: T;
  // Empty Array
  //if (data.charAt(1) == "[") return instantiate<T>(0);
  // Create new T
  result = instantiate<T>();
  // Decoding Loop
  let lastPos = 1;
  let token: i32 = jsonTypes.unknown;
  for (let i = 1; i < data.length - 1; i++) {
    const char = data.charAt(i);
    // Unknown
    if (token === jsonTypes.unknown) {
      // String
      if (char == '"') {
        //console.log(`Found String Start: ${i}`);
        lastPos = i;
        token = jsonTypes.str;
      }
      // Array
      else if (char == "[") {
        //console.log(`Found Array Start: ${i}`);
        lastPos = i;
        token = jsonTypes.arr;
      }
    }
    // Strings
    else if (token === jsonTypes.str) {
      if (char == '"' && data.charAt(i - 1) != "\\") {
        //console.log(`Found String: ${data.slice(lastPos, i + 1)}`);
        result.push(deserializeString(data.slice(lastPos, i + 1)));
        lastPos = i;
        token = jsonTypes.unknown;
      }
    }
    // Arrays
    else if (token === jsonTypes.arr) {
      if (char == "]") {
        //console.log(`Found Array: ${data.slice(lastPos, i + 1)})}`);
        result.push(data.slice(lastPos, i + 1));
        lastPos = i;
        token = jsonTypes.unknown;
      }
    }
  }
  //console.log("Result: " + stringify(result));
  return result
}

export function deserializeObject<T>(data: string): T {
  let schema: T;
  const values = new Array<string>();
  let lastPos = 1;
  for (let i = 0; i < data.length - 1; i++) {
    const char = data.charAt(i);
    if (char == ",") {
      values.push(data.slice(lastPos, i));
      lastPos = i + 1;
    }
    if (char == ":") {
      lastPos = i + 1;
    }
  }
  const lastChunk = data.slice(lastPos, data.length - 1);
  if (lastChunk) values.push(lastChunk);
  // @ts-ignore
  return schema.__decode(unchecked(values));
}

import { StringSink } from "as-string-sink/assembly";
import { JSONArray, JSONObject, JSONValue } from "./jsonType";
import { isSpace } from "util/string"


export declare let json: (...a: any) => any;

/**
 * JSON Encoder/Decoder for AssemblyScript
 */
export namespace JSON {
  /**
   * Validates JSON data
   * ```js
   * JSON.verify<T>("{word:"Hi!"}")
   * // Valid
   * JSON.verify<T>("{er@#]23d}")
   * // Invalid
   */
  export function verify(data: string): boolean {
    let i = 0
    // Remove preceeding whitespace
    data = data.trim()
    let char: u32 = data.charCodeAt(i)
    if (char == "\"".charCodeAt(0) && data.charCodeAt(data.length - 1) == "\"".charCodeAt(0)) {
      return true
    } else if (char == "t".charCodeAt(0) && data.charCodeAt(i + 1) == "r".charCodeAt(0) && data.charCodeAt(i + 2) == "u".charCodeAt(0) && data.charCodeAt(i + 3) == "e".charCodeAt(0)) {
      return true
    } else if (char == "f".charCodeAt(0) && data.charCodeAt(i + 1) == "a".charCodeAt(0) && data.charCodeAt(i + 2) == "l".charCodeAt(0) && data.charCodeAt(i + 3) == "s".charCodeAt(0) && data.charCodeAt(i + 4) == "e".charCodeAt(0)) {
      return true
    }
    return false
  }
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
      return serializeString(<string>data)
    }
    // Boolean
    else if (isBoolean(data)) {
      return data ? "true" : "false"
    }
    // Null
    else if (isNullable<T>() && data == null) {
      return "null"
    }
    // Integers/Floats
    // @ts-ignore
    else if ((isInteger<T>() || isFloat<T>()) && isFinite(data)) {
      // @ts-ignore
      return data.toString()
    }
    // Class-Based serialization
    // @ts-ignore
    else if (isDefined(data.__JSON_Serialize)) {
      //@ts-ignore
      return data.__JSON_Serialize()
    }
    // Map
    else if (data instanceof Map) {
      let result = new StringSink("{")
      let i = 0;
      const keys = data.keys()
      const values = data.values()
      for (; i < keys.length - 1; i++) {
        result.write(`"${unchecked(keys[i])}":${stringify(unchecked(values[i]))},`)
      }
      result.write(`"${unchecked(keys[keys.length - 1])}":${stringify(unchecked(values[keys.length - 1]))}}`)
      return result.toString()
    }
    // ArrayLike
    else if (isArrayLike(data)) {
      let result = "["
      const len = data.length - 1;
      if (len == -1) return "[]";
      for (let i = 0; i < len; i++) {
        result += stringify(unchecked(data[i])) + ","
      }
      result += stringify(unchecked(data[data.length - 1])) + "]"
      return result
    } else if (data instanceof JSONValue) {
      if (data.kind == 0) {
        return '"' + changetype<string>(usize(data.value)) + '"';
      }
      // @ts-ignore
      else if (data.kind == 1) return reinterpret<f64>(data.value).toString();
      else if (data.kind == 2) return stringify(changetype<JSONObject>(usize(data.value)))
      else if (data.kind == 3) return stringify(changetype<JSONArray>(usize(data.value)))
      else if (data.kind == 4) return "null";
      else if (data.kind == 5) return bool(data.value) ? "true" : "false"
      else throw new Error("Unreachable: Jsontype is not of correct kind.")
    } else if (data instanceof JSONArray) {
      let result = "[";
      const len = data.length - 1;
      if (len == -1) return "[]";
      for (let i = 0; i < len; i++) {
        result += stringify(unchecked(data[i])) + ","
      }
      result += stringify(unchecked(data[len])) + "]"
      return result
    } else {
      return "null"
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
  export function parse<T>(data: string): T {
    let type!: T
    if (isString<T>()) {
      // @ts-ignore
      return parseString(data)
    } else if (isBoolean<T>()) {
      // @ts-ignore
      return parseBoolean(data)
    } else if (isFloat<T>() || isInteger<T>()) {
      return parseNumber<T>(data)
    } else if (isArrayLike<T>()) {
      return parseArray<T>(data)
    } else if (type instanceof Map) {
      return parseMap<T>(data)
    } else if (type instanceof JSONValue) {
      // @ts-ignore
      return JSONValue.from<string>(parseString(data))

    } else {
      // @ts-ignore
      return null
    }
  }
}

// @ts-ignore
@inline
function serializeString(data: string): string {
  return "\"" + data.replaceAll("\"", "\\\"") + "\""
}
// @ts-ignore
@inline
function parseString(data: string): string {
  return data.slice(1, data.length - 1).replaceAll("\\\"", "\"")
}

// @ts-ignore
@inline
function parseBoolean(data: string): boolean {
  return data.trim() == "true"
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
export function parseArray<T>(data: string): string[] {
  const result: string[] = []
  data = data.trim();
  let len: u32 = data.length - 1;
  let lastPos: u32 = 1;
  let i: u32 = 1;
  let char: u32 = 0;
  // Is struct such as String, Object, or Array
  let isStruct: boolean = false;
  let offset: u32 = 0;
  for (; i < len; i++) {
    char = data.charCodeAt(i);
    if (!isStruct && isSpace(char)) {
      lastPos++;
    } else {
      if (isSpace(char)) offset++;
      isStruct = true
    }
    if (char == ",".charCodeAt(0)) {
      console.log(`-${data.slice(lastPos, i - offset)}-`)
      // @ts-ignore
      result.push(JSON.parse<valueof<T>>(data.slice(lastPos, i - offset)))
      offset = 0;
      lastPos = ++i;
    }
  }
  char = data.charCodeAt(lastPos)
  // Remove preceeding whitespace
  while (isSpace(char)) {
    lastPos++;
    char = data.charCodeAt(lastPos);
  }
  char = data.charCodeAt(--len);
  while (isSpace(char)) {
    len--;
    char = data.charCodeAt(len);
  }

  // @ts-ignore
  // TODO: Make sure to handle empty arrays with and without whitespace between both brackets
  console.log(`-${data.slice(lastPos, len + 1)}-`)
  console.log(`len: ${len}`)
  console.log(`lastPos: ${lastPos}`)
  if (len != 0) result.push(JSON.parse<valueof<T>>(data.slice(lastPos, len + 1)))
  return result;
}

export function parseObject(data: string): void {
  //const obj = instantiate<T>()
  const result = new Array<string>()
  let lastPos: u32 = 0
  let char: u32 = 0
  let i: u32 = 1
  let key: string = ""
  let isKey: boolean = false
  for (; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i)
    if (isKey == false) {
      if (char == ":".charCodeAt(0)) {
        key = data.slice(lastPos + 2, i - 1)
        console.log(`Found Key: ${key}`)
        result.push(key)
        lastPos = ++i
        isKey = true
      }
    } else {
      if (char == ",".charCodeAt(0)) {
        const val = data.slice(lastPos, i)
        lastPos = i
        isKey = false
        console.log(`Found Val: ${val}`)
        result.push(val)
      }
    }
  }
  result.push(data.slice(lastPos, data.length - 1))
  //console.log(stringify(result))
  //return obj
}

export function parseMap<T>(data: string): T {
  //const obj = instantiate<T>()
  const result = instantiate<T>()
  let lastPos: u32 = 0
  let char: u32 = 0
  let i: u32 = 1
  let key: string = ""
  let isKey: boolean = false
  for (; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i)
    if (isKey == false) {
      if (char == ":".charCodeAt(0)) {
        key = data.slice(lastPos + 2, i - 1)
        //console.log(`Found Key: ${key}`)
        lastPos = ++i
        isKey = true
      }
    } else {
      if (char == ",".charCodeAt(0)) {
        const val = data.slice(lastPos, i)
        lastPos = i
        isKey = false
        //console.log(`Found Val: ${val}`)
        // @ts-ignore
        result.set(key, parseString(val))
      }
    }
  }
  // @ts-ignore
  result.set(key, parseString(data.slice(lastPos, data.length - 1)))
  return result
}
/*
//@ts-ignore
@inline
function parseNum(e: u32): f64 {
  switch (e) {
    case "0".charCodeAt(0):
      return 0;
    case "1".charCodeAt(0):
      return 1;
    case "2".charCodeAt(0):
      return 2;
    case "3".charCodeAt(0):
      return 3;
    case "4".charCodeAt(0):
      return 4;
    case "5".charCodeAt(0):
      return 5;
    case "6".charCodeAt(0):
      return 6;
    case "7".charCodeAt(0):
      return 7;
    case "8".charCodeAt(0):
      return 8;
    case "9".charCodeAt(0):
      return 9;
    default: return -1;
  }
}
export class boxed { value: i32 }

export function parseOnStr(data: string, i1: boxed): JSONValue {
  let index = i1.value;
  while (true) { if (data.charCodeAt(index) == " ".charCodeAt(0)) index++; else break; }
  // TODO: add other whitespace codes later

  switch (data.charCodeAt(index)) {

    case "{".charCodeAt(0):

      index++;
      while (true) { if (data.charCodeAt(index) == " ".charCodeAt(0)) index++; else break; }
      let obj = new JSONobject();
      while (true) {

        let nchar = data.charCodeAt(index);

        if (nchar == '"'.charCodeAt(0)) {

          index++;
          let keyChars = ''
          while (true) {

            nchar = data.charCodeAt(index);
            if (nchar == "\\".charCodeAt(0)) {
              index++;
              keyChars += data.charAt(index);
              index++;
            } else {
              if (nchar == '"'.charCodeAt(0)) break;
              else {
                keyChars += data.charAt(index);
                index++;
              }
            }
          }
          index++;
          while (true) { if (data.charCodeAt(index) == " ".charCodeAt(0)) index++; else break; }
          if (data.charCodeAt(index) == ":".charCodeAt(0)) {
            index++;
            while (true) { if (data.charCodeAt(index) == " ".charCodeAt(0)) index++; else break; }
            let newBoxed: boxed = { value: index };
            let value = parseOnStr(data, newBoxed);
            index = newBoxed.value;
            obj.set(keyChars, value);
            while (true) { if (data.charCodeAt(index) == " ".charCodeAt(0)) index++; else break; }
            nchar = data.charCodeAt(index);
            if (nchar == ",".charCodeAt(0)) {
              index++; continue;
            }
            else if (nchar == "}".charCodeAt(0)) {
              index++;
              i1.value = index;
              return JSONValue.from(obj);
            };
          }
          else {
            throw new Error("Parsing object field: Unexpected `" + data.charAt(index) + "` -- Expected `:`");
          }
        }
        else if (nchar == " ".charCodeAt(0)) {
          index++;
        }
        else if (nchar == '}'.charCodeAt(0)) {
          index++;
          break;
        }
        else throw new Error("Parsing object: unexepcted character")
      }
      i1.value = index;

      return JSONValue.from(obj);
    case "\"".charCodeAt(0):
      index++;
      let keyChars = ''
      let nchar: number;
      while (true) {
        nchar = data.charCodeAt(index);
        if (nchar == "\\".charCodeAt(0)) {
          index++;
          keyChars += data.charAt(index);
          index++;

        }
        else {
          if (nchar == '"'.charCodeAt(0)) {
            index++;
            i1.value = index;
            return JSONValue.from(keyChars)
          }
          else {
            keyChars += data.charAt(index);
            index++;
          }
        }

      }
      break;
    case "t".charCodeAt(0):
      if (data.slice(index + 1, index + 3) == "rue") {
        i1.value = index + 4;
        return JSONValue.from<bool>(true)
      }
      else
        throw new Error("Unexpected character after 't'");

    case "f".charCodeAt(0):
      if (data.slice(index + 1, index + 4) == "alse") {
        i1.value = index + 4;
        return JSONValue.from<bool>(false);
      }
      break;
    case "[".charCodeAt(0):
      index++;
      let arr = (new JSONArray());
      while (true) { if (data.charCodeAt(index) == " ".charCodeAt(0)) index++; else break; }
      if (data.charCodeAt(index) == "]".charCodeAt(0)) {
        index++;
        i1.value = index;
        return JSONValue.from(arr);
      }
      while (true) {
        i1.value = index;

        let value = parseOnStr(data, i1);

        arr.push(value);
        index = i1.value;

        while (true) { if (data.charCodeAt(index) == " ".charCodeAt(0)) index++; else break; }
        let char = data.charCodeAt(index);

        if (char == ",".charCodeAt(0)) {
          index++;
          continue;
        }
        else if (char == "]".charCodeAt(0)) {

          index++;
          i1.value = index;
          return JSONValue.from(arr);
        }

        else throw new Error("Unexpected character when parsing array.")



      }
      break;
    default:// lol. idk
      if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(data.charAt(index))) {

        let num: f64 = parseNum(data.charCodeAt(index));


        index++;
        let _num: number;
        let periodFound = false;
        while (true) {
          _num = parseNum(data.charCodeAt(index));

          if (_num != -1) {
            num *= 10;
            num += _num;
          } else if (data.charCodeAt(index) == ".".charCodeAt(0)) {
            let ival = 1;
            while (true) {
              index++;
              _num = parseNum(data.charCodeAt(index));
              if (_num != -1) {
                num += (_num / 10 ** ival);
                ival++;
              } else {
                i1.value = index;
                return JSONValue.from(num);
              }
            }

          }
          index++;
        }
        return JSONValue.from(parseNumber<f64>(data.slice(index)))
      }
      else throw new Error("PANIC: NOT JSON");

  }
  throw new Error("Unreachable")
}

export function parseDynamic(data: string): JSONValue {
  let index = 0;

  while (true) {

    switch (data.charCodeAt(index)) {
      case " ".charCodeAt(0):
        index++;
        continue;
      case "{".charCodeAt(0):
        throw new Error("dyn object not implemented")
        parseDynamicObject(data.slice(index))
      case "\"".charCodeAt(0):

        return JSONValue.from(parseString(data.slice(index)));
      case "[".charCodeAt(0):
        throw new Error("dyn array not implemented");
        parseDynamicArray(data.slice(index))
        break;
      default:
        if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(data.charAt(index))) {

          return JSONValue.from(parseNumber<f64>(data.slice(index)))
        }
        else throw new Error("PANIC: NOT JSON")

    }
  }
  // oh, yuk. just default parsenumber.

}
*/
class Nullable { }

function intToString(num: number): string {
  const result = new StringSink()
  while (num > 0) {

  }
}
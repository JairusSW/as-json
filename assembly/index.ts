import { StringSink } from "as-string-sink/assembly";
import { Variant } from "as-variant/assembly";
import { isSpace } from "util/string"

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
      let result = new StringSink("[")
      if (data.length == 0) return "[]";
      for (let i = 0; i < data.length - 1; i++) {
        result.write(stringify(unchecked(data[i])))
        result.write(",")
      }
      result.write(stringify(unchecked(data[data.length - 1])))
      result.write("]")
      return result.toString()
    } else if (data instanceof Variant) {
      if (data.is<string>()) {
        return JSON.stringify<string>(data.getUnchecked<string>())
      } else if (data.is<boolean>()) {
        return JSON.stringify<boolean>(data.getUnchecked<boolean>())
      } else if (data.is<bool>()) {
        return JSON.stringify<bool>(data.getUnchecked<bool>())
      } else if (data.is<i8>()) {
        return JSON.stringify<i8>(data.getUnchecked<i8>())
      } else if (data.is<i16>()) {
        return JSON.stringify<i16>(data.getUnchecked<i16>())
      } else if (data.is<i32>()) {
        return JSON.stringify<i32>(data.getUnchecked<i32>())
      } else if (data.is<u8>()) {
        return JSON.stringify<u8>(data.getUnchecked<u8>())
      } else if (data.is<u16>()) {
        return JSON.stringify<u16>(data.getUnchecked<u16>())
      } else if (data.is<u32>()) {
        return JSON.stringify<u32>(data.getUnchecked<u32>())
      } else if (data.is<f32>()) {
        return JSON.stringify<f32>(data.getUnchecked<f32>())
      } else if (data.is<f64>()) {
        return JSON.stringify<f64>(data.getUnchecked<f64>())
        // @ts-ignore
      } else if (data.discriminator >= Discriminator.ManagedRef) {
        // TODO: We know it is a Object, but how to call __JSON_Stringify()?
      } else if (data.is<string[]>()) {
        return JSON.stringify<string[]>(data.getUnchecked<string[]>())
      } else if (data.is<boolean[]>()) {
        return JSON.stringify<boolean[]>(data.getUnchecked<boolean[]>())
      } else if (data.is<bool[]>()) {
        return JSON.stringify<bool[]>(data.getUnchecked<bool[]>())
      } else if (data.is<i8[]>()) {
        return JSON.stringify<i8[]>(data.getUnchecked<i8[]>())
      } else if (data.is<i16[]>()) {
        return JSON.stringify<i16[]>(data.getUnchecked<i16[]>())
      } else if (data.is<i32[]>()) {
        return JSON.stringify<i32[]>(data.getUnchecked<i32[]>())
      } else if (data.is<u8[]>()) {
        return JSON.stringify<u8[]>(data.getUnchecked<u8[]>())
      } else if (data.is<u16[]>()) {
        return JSON.stringify<u16[]>(data.getUnchecked<u16[]>())
      } else if (data.is<u32[]>()) {
        return JSON.stringify<u32[]>(data.getUnchecked<u32[]>())
      } else if (data.is<f32[]>()) {
        return JSON.stringify<f32[]>(data.getUnchecked<f32[]>())
      } else if (data.is<f64[]>()) {
        return JSON.stringify<f64[]>(data.getUnchecked<f64[]>())
      } else {
        return "null"
      }
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
      return parseArray<T>(data)
    } else if (type instanceof Map) {
      return parseMap<T>(data);
      // @ts-ignore
    } else if (type instanceof Variant) {
      // @ts-ignore
      return Variant.from(JSON.parse<T>(data))
      // @ts-ignore
    } else if (isDefined(type.__JSON_Parse)) {
      const result = new Map<string, Variant>()
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
            result.set(key, JSON.parse<Variant>(val))
          }
        }
      }
      // @ts-ignore
      result.set(key, JSON.parse<Variant>(data.slice(lastPos, data.length - 1)))
      // @ts-ignore
      return type.__JSON_Parse(result)
    } else {
      // @ts-ignore
      return null;
    }
  }
}

// @ts-ignore
//@inline
function serializeString(data: string): string {
  return "\"" + data.replaceAll("\"", "\\\"") + "\""
}
// @ts-ignore
//@inline
function parseString(data: string): string {
  return data.slice(1, data.length - 1).replaceAll("\\\"", "\"")
}

// @ts-ignore
//@inline
function parseBoolean<T extends boolean>(data: string): T {
  if (data.charCodeAt(0) == "t".charCodeAt(0)) return <T>true
  else return <T>false
}
// @ts-ignore
//@inline
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
  else if (type instanceof u8) return U8.parseInt(data)
  // @ts-ignore
  else if (type instanceof u16) return U16.parseInt(data)
  // @ts-ignore
  else if (type instanceof i16) return I16.parseInt(data)
  // @ts-ignore
  return I8.parseInt(data)
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
    if (char == ",".charCodeAt(0)) {
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
    if (char == ",".charCodeAt(0)) {
      // console.log(data.slice(lastPos, i))
      // @ts-ignore
      result.push(parseBoolean<valueof<T>>(data.slice(lastPos, i).trimStart()));
      lastPos = ++i;
    }
  }
  //console.log(data.slice(lastPos, data.length - 1))
  // @ts-ignore
  result.push(parseBoolean<valueof<T>>(data.slice(lastPos, data.length - 1).trimStart()));
  return result;
}

// @ts-ignore
//@inline
export function parseArray<T>(data: string): T {
  const result = instantiate<T>()
  data = data.trim();
  let len: u32 = data.length - 1;
  let lastPos: u32 = 1;
  let i: u32 = 1;
  let char: u32 = 0;
  // Is struct such as Object, or Array
  let isStruct: boolean = false;
  let isStr: boolean = false;
  let offset: u32 = 0;
  // Depth for finding matching brackets
  let inDepth: u32 = 0;
  let outDepth: u32 = 0;
  for (; i < len; i++) {
    char = data.charCodeAt(i);
    if (char == "\"".charCodeAt(0) && data.charCodeAt(i - 1) != "\\".charCodeAt(0)) isStr = !isStr
    if (char == "{".charCodeAt(0) || char == "[".charCodeAt(0)) {
      inDepth++;
      isStruct = true;
    } else if (char == "}".charCodeAt(0) || char == "]".charCodeAt(0)) {
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
        if (char == ",".charCodeAt(0)) {
          // @ts-ignore 
          result.push(JSON.parse<valueof<T>>(data.slice(lastPos, i - offset).trim()))
          //console.log(`Value-${data.slice(lastPos, i - offset).trim()}-`)
          offset = 0;
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
  data = data.slice(lastPos, len).trim()
  // @ts-ignore
  if (data.length != 0) result.push(JSON.parse<valueof<T>>(data))
  //if (data.length != 0) console.log(`Trailing-${data.slice(lastPos, len).trim()}-`)
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
        result.set(key, JSON.parse<f32>(val))
      }
    }
  }
  // @ts-ignore
  result.set(key, JSON.parse<f32>(data.slice(lastPos, data.length - 1)))
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
    default:
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

}
*/
class Nullable { }
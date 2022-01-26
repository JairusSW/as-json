import { StringSink } from "as-string-sink"
import { Variant } from "as-variant"
import { JSONValue, JSONobject } from "./jsonType"
import "assemblyscript/std/util/string"
/**
 * JSON Encoder/Decoder for AssemblyScript
 */
export namespace JSON {
  /**
   * Stringifies valid JSON data.
   * ```js
   * JSON.stringify<T>(data)
   * ```
   * @param data Unknown
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
    else if (isInteger<T>() || isFloat<T>()) {
      // @ts-ignore
      return data.toString()
    }
    // Class-Based serialization
    // @ts-ignore
    else if (isDefined(data.__JSON_Serialize)) {
      //@ts-ignore
      return data.__JSON_Serialize()
    }
    // Variants
    // @ts-ignore
    else if (data instanceof Variant) {
      return serializeVariant(<Variant>data)
    }
    // ArrayLike
    else if (isArrayLike(data)) {
      const result = new StringSink("[")
      for (let i = 0; i < data.length - 1; i++) {
        result.write(JSON.stringify(unchecked(data[i])))
        result.write(",")
      }
      result.write(JSON.stringify(unchecked(data[data.length - 1])))
      result.write("]")
      return result.toString()
    } else {
      return "null"
    }
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
  export function parse<T>(data: string): T {
    let type!: T
    // This treats type as if it were actually an instantiated T
    if (isString<T>()) {
      // @ts-ignore
      return parseString(data)
    } else if (isBoolean<T>()) {
      // @ts-ignore
      return parseBoolean(data)
    } else if (isFloat<T>() || isInteger<T>()) {
      // @ts-ignore
      return parseNumber<T>(data)
    } else if (type instanceof Variant) {
      // @ts-ignore
      return parseVariant(data)
    } else if (isArrayLike<T>()) {
      // @ts-ignore
      return parseArray<T>(data)
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

function serializeVariant(data: Variant): string {
  // String
  if (data.is<string>()) {
    // @ts-ignore
    return serializeString(data.get<string>())
  }
  // @ts-ignore
  // Boolean
  else if (data.is<boolean>()) {
    // @ts-ignore
    return data.get<boolean>() ? "true" : "false"
  }
  // @ts-ignore
  // Unknown
  else if (data.is<Variant>()) {
    // @ts-ignore
    return serializeVariant(data.get<Variant>())
  }
  // @ts-ignore
  // Null
  else if (data.getUnchecked<usize>() == 0) {
    return "null"
  }
  // @ts-ignore
  // i8
  else if (data.is<i8>()) {
    return data.get<i8>().toString()
  }
  // @ts-ignore
  // i16
  else if (data.is<i16>()) {
    return data.get<i16>().toString()
  }
  // @ts-ignore
  // i32
  else if (data.is<i32>()) {
    return data.get<i32>().toString()
  }
  //@ts-ignore
  else {
    return "idk"
  }
}
// @ts-ignore
@inline
function parseString(data: string): string {
  return data.slice(1, data.length - 1).replaceAll("\\\"", "\"")
}

// @ts-ignore
@inline
function parseBoolean(data: string): boolean {
  return data.charCodeAt(0) === "t".charCodeAt(0)
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
function parseArray<T>(data: string): T {
  // @ts-ignore
  if (isString<valueof<T>>()) return parseStringArray(data)
  // @ts-ignore
  else if (isBoolean<valueof<T>>()) return parseBooleanArray(data)
  // @ts-ignore
  return parseNumberArray<valueof<T>>(data)
}

function parseStringArray(data: string): Array<string> {
  const result = new Array<string>()
  if (data.length === 2) return result
  let lastPos: u32 = 1
  let char: u32 = 0
  let instr: boolean = false
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i)
    // This ignores [ and ] or { and } if they are inside a string.
    if (char === "\"".charCodeAt(0) && data.charCodeAt(i - 1) !== "/".charCodeAt(0)) instr = instr ? false : true
    if (instr === false) {
      // Handles whitespace after a comma
      if (char === " ".charCodeAt(0) || char === 0x0020 || char === 0x000A || char === 0x000D || char === 0x0009) lastPos++
      // @gagdiez from serial-as/json notified me that there are other charcodes used for whitespace.
      if (char === "\"".charCodeAt(0)) {
        result.push(parseString(data.slice(lastPos, i + 1)))
        lastPos = i + 2
      }
    }
  }
  return result
}

function parseBooleanArray(data: string): Array<boolean> {
  const result = new Array<boolean>()
  if (data.length === 2) return result
  let char: u32 = 0
  let instr: boolean = false
  for (let i: u32 = 1; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i)
    if (instr === false) {
      if (char === "t".charCodeAt(0)) {
        result.push(true)
        i += 4
        // +4 to skip the 'true'
        // Possible bug when: [true, tada, true]
        // It will believe it is [true, true, true]
      } else {
        result.push(false)
        // If it is only booleans, we can safely assume this
        i += 5
      }
    }
  }
  return result
}

function parseNumberArray<T>(data: string): Array<T> {
  const result = new Array<T>()
  if (data.length === 2) return result
  let lastPos: u32 = 0
  let char: u32 = 0
  let i: u32 = 1
  for (; i < u32(data.length - 1); i++) {
    char = data.charCodeAt(i)
    if (char === ",".charCodeAt(0)) {
      result.push(parseNumber<T>(data.slice(lastPos + 1, i)))
      lastPos = i
    }
  }
  result.push(parseNumber<T>(data.slice(lastPos + 1, i)))
  return result
}

// @ts-ignore
@inline
function parseVariant(data: string): Variant {
  const firstChar = data.charCodeAt(0)
  if (firstChar == "\"".charCodeAt(0)) {
    return Variant.from(parseString(data))
  } else if (firstChar == "t".charCodeAt(0) || firstChar == "f".charCodeAt(0)) {
    return Variant.from(parseBoolean(data))
  } else {
    throw new Error('Unknown identifying token at variant parsing')
  }
}

function parseDynamicObject(data: string): void {

}

function parseDynamicArray(data: string): void {
  // need deep array

}

//@ts-ignore
@inline
function parseNum(e: number): f64 {
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
          /** warning: code is duplicated to str parsing later in fn*/
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
            /** parse field */
            let value = parseOnStr(data, newBoxed);
            index = newBoxed.value;
            obj.set(keyChars, value);
            while (true) { if (data.charCodeAt(index) == " ".charCodeAt(0)) index++; else break; }
            nchar = data.charCodeAt(index);
            /** more fields */
            if (nchar == ",".charCodeAt(0)) continue;
            /** early exit */
            else if (nchar == "}".charCodeAt(0)) {
              /** return new index. */
              i1.value = index;
              /** break out of key/value setting and exit fn. */
              return JSONValue.from(obj);
            };
          }
          else {
            throw new Error("Parsing object field: Unexpected `" + data.charAt(index) + "` -- Expected `:`");
          }
        }
        else if (nchar = " ".charCodeAt(0))
          index++;
        /** object ends */
        else if (nchar == '}'.charCodeAt(0)) break;
        else throw new Error("Parsing object: unexepcted character")
      }
      return JSONValue.from(obj);
    case "\"".charCodeAt(0):
      index++;
      let keyChars = ''
      /** warning: code is duplicated to str parsing later in fn*/
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
      throw new Error("dyn array not implemented");
      parseDynamicArray(data.slice(index))
      break;
    default:
      if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(data.charAt(index))) {

        let num: f64 = parseNum(data.charCodeAt(index));
        index++;
        let _num;
        let periodFound=false;
        while (true) {
          _num = parseNum(data.charCodeAt(index));
          if (_num != -1) {
            num **= 10;
            num += _num;
          } else if(data.charCodeAt(index)==".".charCodeAt(0)) {


          }
          index++;
        }
        return JSONValue.from(parseNumber<f64>(data.slice(index)))
      }
      else throw new Error("PANIC: NOT JSON");

  }

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

export class Nullable { }
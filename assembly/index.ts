import { StringSink } from "as-string-sink"
import { Variant } from "as-variant"
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
    // Variants
    // @ts-ignore
    else if (data instanceof Variant) {
      return serializeVariant(<Variant>data)
    }
    // Arrays
    else if (isArrayLike(data)) {
      const result = new StringSink("[")
      for (let i = 0; i < data.length - 1; i++) {
        result.write(stringify(unchecked(data[i])))
        result.write(",")
      }
      result.write(stringify(unchecked(data[data.length - 1])))
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
    } else {
      // @ts-ignore
      throw new Error("Unrecognized data. Cannot parse.")
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
  // @ts-ignore
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
  return data.charCodeAt(0) === 't'.charCodeAt(0)
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
function parseVariant(data: string): Variant {
  const firstChar = data.charAt(0)
  if (firstChar == "\"") {
    return Variant.from(parseString(data))
  } else if (firstChar == "t" || firstChar == "f") {
    return Variant.from(parseBoolean(data))
  } else {
    throw new Error('Unknown identifying token at variant parsing')
  }
}

export class Nullable { }
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
      // @ts-ignore
      return serializeString(data);
    } else if (data == null) {
      return nullVal;
    } else if (isFloat(data) || isInteger(data)) {
      return serializeNumber<T>(data);
    } else if (isBoolean(data)) {
      return serializeBoolean(data);
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

function serializeNumber<T>(data: T): string {
  // @ts-ignore
  return data.toString()
}

function serializeString(data: string): string {
  if (data.includes('"')) {
    return quote + data.replaceAll(quote, escapeQuote) + quote
  }
  return quote + data + quote;
}

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
  return data === trueVal ? true : false;
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
    if (char == comma) {
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
    char = data.charAt(i);
    if (char == true_char) {
      result.push(true);
    } else if (char == false_char) {
      result.push(false);
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
function parseArrayArray<T extends Array<any>>(data: string): T {
  const result = instantiate<T>();
  let lastPos = -1;
  let char: string;
  let depth = 0;
  let fdepth = 0;
  let instr = 0;
  for (let i = 1; i < data.length - 1; i++) {
    char = data.charAt(i);
    // Remove whitespace only if it isn't in a string. (strings can have whitespace)
    if (instr === 0 && char == empty_string) break;
    // This ignores [ and ] if they are inside a string.
    if (data.charAt(i - 1) != fwd_slash && char == quote)
      instr = instr === 0 ? 1 : 0;
    // This gets the depth of the array.
    if (instr === 0 && char == lbracket) depth++;
    if (instr === 0 && char == rbracket) fdepth++;
    // If the depth and found depth are equal, that is an array. Push it.
    if (instr === 0 && depth > 0 && depth === fdepth) {
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
function deserializeObject<T>(data: string): T {
  let schema: T;
  const len = data.length - 1
  const values = new Array<string>();
  let lastPos: u32 = 2;
  let char: string = ''
  for (let i: i32 = 0; i < len; i++) {
    char = data.charAt(i);
    if (char == colon) lastPos = i + 1
    else if (char == comma) {
      values.push(data.slice(lastPos, i));
      lastPos = i
    }
  }
  values.push(data.slice(lastPos, len));
  // @ts-ignore
  return schema.__decode(values);
}

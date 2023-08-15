import { StringSink } from "as-string-sink/assembly";
import { isSpace } from "util/string";
import {
  backSlashCode,
  commaCode,
  commaWord,
  eCode,
  fCode,
  leftBraceCode,
  leftBracketCode,
  leftBracketWord,
  nCode,
  nullWord,
  quoteCode,
  rCode,
  rightBraceCode,
  rightBracketCode,
  rightBracketWord,
  tCode,
  trueWord,
  uCode,
  emptyArrayWord,
  falseWord,
  newLineCode,
} from "./chars";
import { snip_fast, unsafeCharCodeAt } from "./util";
import { Virtual } from "as-virtual/assembly";

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
  // @ts-ignore: Decorator
  @inline export function stringify<T>(data: T): string {
    // String
    if (isString<T>() && data != null) {
      return serializeString(data as string);
    } else if (isBoolean<T>()) {
      return data ? "true" : "false";
    } else if (isNullable<T>() && data == null) {
      return "null";
      // @ts-ignore
    } else if ((isInteger<T>() || isFloat<T>()) && isFinite(data)) {
      // @ts-ignore
      return data.toString();
      // @ts-ignore: Hidden function
    } else if (isDefined(data.__JSON_Serialize)) {
      // @ts-ignore: Hidden function
      return data.__JSON_Serialize();
    } else if (data instanceof Date) {
      return data.toISOString();
    } else if (isArrayLike<T>()) {
      // @ts-ignore
      if (data.length == 0) {
        return emptyArrayWord;
        // @ts-ignore
      } else if (isString<valueof<T>>()) {
        let result = "[";
        // @ts-ignore
        for (let i = 0; i < data.length - 1; i++) {
          // @ts-ignore
          result += serializeString(unchecked(data[i]));
          result += commaWord;
        }
        // @ts-ignore
        result += serializeString(unchecked(data[data.length - 1]));
        result += rightBracketWord;
        return result;
        // @ts-ignore
      } else if (isBoolean<valueof<T>>()) {
        // @ts-ignore
        return leftBracketWord + data.join(commaWord) + rightBracketWord;
        // @ts-ignore
      } else if (isFloat<valueof<T>>() || isInteger<valueof<T>>()) {
        // @ts-ignore
        return leftBracketWord + data.join(commaWord) + rightBracketWord;
      } else {
        let result = new StringSink(leftBracketWord);
        // @ts-ignore
        for (let i = 0; i < data.length - 1; i++) {
          // @ts-ignore
          result.write(JSON.stringify(unchecked(data[i])));
          result.write(commaWord);
        }
        // @ts-ignore
        result.write(JSON.stringify(unchecked(data[data.length - 1])));
        result.write(rightBracketWord);
        return result.toString();
      }
    } else {
      throw new Error(
        `Could not serialize data of type ${nameof<T>()}. Make sure to add the correct decorators to classes.`
      );
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

  // @ts-ignore: Decorator
  @inline export function parse<T>(data: string): T {
    let type: T;
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
      return parseArray<T>(data.trimStart());
      // @ts-ignore
    } else if (isNullable<T>() && data == "null") {
      // @ts-ignore
      return null;
      // @ts-ignore
    } else if (isDefined(type.__JSON_Set_Key)) {
      return parseObject<T>(data.trimStart());
    } else if (idof<nonnull<T>>() == idof<Date>()) {
      // @ts-ignore
      return Date.fromString(data);
    } else {
      // @ts-ignore
      throw new Error(
        `Could not deserialize data ${data} to type ${nameof<T>()}. Make sure to add the correct decorators to classes.`
      );
    }
  }
}

// @ts-ignore: Decorator
@global @inline function __parseObjectValue<T>(data: string): T {
  let type: T;
  if (isString<T>()) {
    // @ts-ignore
    let result = "";
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      // \\"
      if (unsafeCharCodeAt(data, i) === backSlashCode) {
        const char = unsafeCharCodeAt(data, ++i);
        result += data.slice(last, i - 1);
        if (char === 34) {
          result += '"';
          last = ++i;
        } else if (char === 110) {
          result += "\n";
          last = ++i;
          // 92 98 114 116 102 117
        } else if (char >= 92 && char <= 117) {
          if (char === 92) {
            result += "\\";
            last = ++i;
          } else if (char === 98) {
            result += "\b";
            last = ++i;
          } else if (char === 102) {
            result += "\f";
            last = ++i;
          } else if (char === 114) {
            result += "\r";
            last = ++i;
          } else if (char === 116) {
            result += "\t";
            last = ++i;
          } else if (
            char === 117 &&
            load<u64>(changetype<usize>(data) + <usize>((i + 1) << 1)) ===
            27584753879220272
          ) {
            result += "\u000b";
            i += 4;
            last = ++i;
          }
        }
      }
    }
    result += data.slice(last);
    // @ts-ignore
    return result;
  } else if (isBoolean<T>()) {
    // @ts-ignore
    return parseBoolean<T>(data);
  } else if (isFloat<T>() || isInteger<T>()) {
    return parseNumber<T>(data);
  } else if (isArrayLike<T>()) {
    // @ts-ignore
    return parseArray<T>(data);
    // @ts-ignore
  } else if (isNullable<T>() && data == "null") {
    // @ts-ignore
    return null;
    // @ts-ignore
  } else if (isDefined(type.__JSON_Set_Key)) {
    return parseObject<T>(data.trimStart());
  } else if (idof<nonnull<T>>() == idof<Date>()) {
    // @ts-ignore
    return Date.fromString(data);
  } else {
    // @ts-ignore
    throw new Error(
      `Could not deserialize data ${data} to type ${nameof<T>()}. Make sure to add the correct decorators to classes.`
    );
  }
}

// @ts-ignore: Decorator
@inline export function serializeString(data: string): string {
  let result = new StringSink('"');

  let last: i32 = 0;
  // @ts-ignore
  for (let i = 0; i < data.length; i++) {
    const char = unsafeCharCodeAt(<string>data, i);
    if (char === 34 || char === 92) {
      result.write(<string>data, last, i);
      result.writeCodePoint(backSlashCode);
      last = i;
    } else if (char <= 13 && char >= 8) {
      result.write(<string>data, last, i);
      last = i + 1;
      switch (char) {
        case 8: {
          result.write("\\b");
          break;
        }
        case 9: {
          result.write("\\t");
          break;
        }
        case 10: {
          result.write("\\n");
          break;
        }
        case 11: {
          result.write("\\x0B"); // \\u000b
          break;
        }
        case 12: {
          result.write("\\f");
          break;
        }
        case 13: {
          result.write("\\r");
          break;
        }
      }
    }
  }
  if (result.length === 1) return '"' + data + '"';
  else result.write(<string>data, last);
  result.write("\"");
  return result.toString();
}

// @ts-ignore: Decorator
@inline export function parseString(data: string): string {
  let result = new StringSink();
  let last = 1;
  for (let i = 1; i < data.length - 1; i++) {
    // \\"
    if (unsafeCharCodeAt(data, i) === backSlashCode) {
      const char = unsafeCharCodeAt(data, ++i);
      result.write(data, last, i - 1);
      if (char === 34) {
        result.writeCodePoint(quoteCode);
        last = i + 1;
      } else if (char >= 92 && char <= 117) {
        switch (char) {
          case 92: {
            result.writeCodePoint(backSlashCode);
            last = i + 1;
            break;
          }
          case 98: {
            result.write("\b");
            last = i + 1;
            break;
          }
          case 102: {
            result.write("\f");
            last = i + 1;
            break;
          }
          case 110: {
            result.writeCodePoint(newLineCode);
            last = i + 1;
            break;
          }
          case 114: {
            result.write("\r");
            last = i + 1;
            break;
          }
          case 116: {
            result.write("\t");
            last = i + 1;
            break;
          }
          default: {
            if (
              char === 117 &&
              load<u64>(changetype<usize>(data) + <usize>((i + 1) << 1)) ===
              27584753879220272
            ) {
              result.write("\u000b");
              i += 4;
              last = i + 1;
            }
            break;
          }
        }
      }
    }
  }
  if ((data.length - 1) > last) result.write(data, last, data.length - 1);
  return result.toString();
}

// @ts-ignore: Decorator
@inline function parseBoolean<T extends boolean>(data: string): T {
  if (data.length > 3 && data.startsWith("true")) return <T>true;
  else if (data.length > 4 && data.startsWith("false")) return <T>false;
  else throw new Error(`JSON: Cannot parse "${data}" as boolean`);
}

// @ts-ignore: Decorator
@inline export function parseNumber<T>(data: string): T {
  if (isInteger<T>()) {
    // @ts-ignore
    return snip_fast<T>(data);
  }
  // @ts-ignore
  const type: T = 0;
  // @ts-ignore
  if (type instanceof f64) return f64.parse(data);
  // @ts-ignore
  else if (type instanceof f32) return f32.parse(data);
}

// @ts-ignore: Decorator
@inline function parseObject<T>(data: string): T {
  let schema: nonnull<T> = changetype<nonnull<T>>(
    __new(offsetof<nonnull<T>>(), idof<nonnull<T>>())
  );
  let key = Virtual.createEmpty<string>();
  let isKey = false;
  let depth = 0;
  let outerLoopIndex = 1;
  for (; outerLoopIndex < data.length - 1; outerLoopIndex++) {
    const char = unsafeCharCodeAt(data, outerLoopIndex);
    if (char === leftBracketCode) {
      for (
        let arrayValueIndex = outerLoopIndex;
        arrayValueIndex < data.length - 1;
        arrayValueIndex++
      ) {
        const char = unsafeCharCodeAt(data, arrayValueIndex);
        if (char === leftBracketCode) {
          depth++;
        } else if (char === rightBracketCode) {
          depth--;
          if (depth === 0) {
            ++arrayValueIndex;
            // @ts-ignore
            schema.__JSON_Set_Key<Virtual<string>>(key, data, outerLoopIndex, arrayValueIndex);
            outerLoopIndex = arrayValueIndex;
            isKey = false;
            break;
          }
        }
      }
    } else if (char === leftBraceCode) {
      for (
        let objectValueIndex = outerLoopIndex;
        objectValueIndex < data.length - 1;
        objectValueIndex++
      ) {
        const char = unsafeCharCodeAt(data, objectValueIndex);
        if (char === leftBraceCode) {
          depth++;
        } else if (char === rightBraceCode) {
          depth--;
          if (depth === 0) {
            ++objectValueIndex;
            // @ts-ignore
            schema.__JSON_Set_Key<Virtual<string>>(key, data, outerLoopIndex, objectValueIndex);
            outerLoopIndex = objectValueIndex;
            isKey = false;
            break;
          }
        }
      }
    } else if (char === quoteCode) {
      for (
        let stringValueIndex = ++outerLoopIndex;
        stringValueIndex < data.length - 1;
        stringValueIndex++
      ) {
        const char = unsafeCharCodeAt(data, stringValueIndex);
        if (
          char === quoteCode &&
          unsafeCharCodeAt(data, stringValueIndex - 1) !== backSlashCode
        ) {
          if (isKey === false) {
            key.reinst(data, outerLoopIndex, stringValueIndex);
            isKey = true;
          } else {
            // @ts-ignore
            schema.__JSON_Set_Key<Virtual<string>>(key, data, outerLoopIndex, stringValueIndex);
            isKey = false;
          }
          outerLoopIndex = ++stringValueIndex;
          break;
        }
      }
    } else if (char == nCode) {
      // @ts-ignore
      schema.__JSON_Set_Key<Virtual<string>>(key, nullWord, 0, 4);
      isKey = false;
    } else if (
      char === tCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === rCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === uCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === eCode
    ) {
      // @ts-ignore
      schema.__JSON_Set_Key<Virtual<string>>(key, trueWord, 0, 4);
      isKey = false;
    } else if (
      char === fCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === "a".charCodeAt(0) &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === "l".charCodeAt(0) &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === "s".charCodeAt(0) &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === eCode
    ) {
      // @ts-ignore
      schema.__JSON_Set_Key<Virtual<string>>(key, falseWord, 0, 5);
      isKey = false;
    } else if ((char >= 48 && char <= 57) || char === 45) {
      let numberValueIndex = ++outerLoopIndex;
      for (; numberValueIndex < data.length; numberValueIndex++) {
        const char = unsafeCharCodeAt(data, numberValueIndex);
        if (char === commaCode || char === rightBraceCode || isSpace(char)) {
          // @ts-ignore
          schema.__JSON_Set_Key<Virtual<string>>(key, data, outerLoopIndex - 1, numberValueIndex);
          outerLoopIndex = numberValueIndex;
          isKey = false;
          break;
        }
      }
    }
  }
  return schema;
}

// @ts-ignore: Decorator
@inline function parseArray<T extends unknown[]>(data: string): T {
  if (isString<valueof<T>>()) {
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
  } else if (isManaged<valueof<T>>() || isReference<valueof<T>>()) {
    // We instantiate the required memory for the class and fill it. This is extremely unsafe and uses "a bit of magic".
    const type = changetype<nonnull<valueof<T>>>(
      __new(offsetof<nonnull<valueof<T>>>(), idof<nonnull<valueof<T>>>())
    );
    // @ts-ignore
    if (isDefined(type.__JSON_Set_Key)) {
      // @ts-ignore
      return parseObjectArray<T>(data);
    }
    return unreachable();
  }
  return unreachable();
}

// @ts-ignore: Decorator
@inline function parseStringArray(data: string): string[] {
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
        result.push(parseString(data.slice(lastPos, i)));
      }
    }
  }
  return result;
}

// @ts-ignore: Decorator
@inline function parseBooleanArray<T extends boolean[]>(data: string): T {
  const result = instantiate<T>();
  let lastPos = 1;
  for (let i = 1; i < data.length - 1; i++) {
    const char = unsafeCharCodeAt(data, i);
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
      result.push(parseBoolean<valueof<T>>(data.slice(lastPos, i)));
    }
  }
  return result;
}

// @ts-ignore: Decorator
@inline function parseNumberArray<T extends number[]>(data: string): T {
  const result = instantiate<T>();
  let lastPos = 0;
  let i = 1;
  for (; i < data.length - 1; i++) {
    const char = unsafeCharCodeAt(data, i);
    if ((lastPos === 0 && char >= 48 && char <= 57) || char === 45) {
      lastPos = i;
    } else if ((isSpace(char) || char == commaCode) && lastPos > 0) {
      result.push(parseNumber<valueof<T>>(data.slice(lastPos, i)));
      lastPos = 0;
    }
  }
  for (; i > lastPos - 1; i--) {
    const char = unsafeCharCodeAt(data, i);
    if (char !== rightBracketCode) {
      result.push(parseNumber<valueof<T>>(data.slice(lastPos, i + 1)));
      break;
    }
  }
  return result;
}

// @ts-ignore: Decorator
@inline function parseArrayArray<T extends unknown[][]>(data: string): T {
  const result = instantiate<T>();
  let lastPos = 0;
  let depth = 0;
  let i = 1;
  // Find start of bracket
  //for (; unsafeCharCodeAt(data, i) !== leftBracketCode; i++) {}
  //i++;
  for (; i < data.length - 1; i++) {
    const char = unsafeCharCodeAt(data, i);
    if (char === leftBracketCode) {
      if (depth === 0) {
        lastPos = i;
      }
      // Shifting is 6% faster than incrementing
      depth++;
    } else if (char === rightBracketCode) {
      depth--;
      if (depth === 0) {
        i++;
        result.push(JSON.parse<valueof<T>>(data.slice(lastPos, i)));
      }
    }
  }
  return result;
}

// @ts-ignore: Decorator
@inline export function parseObjectArray<T extends unknown[]>(data: string): T {
  const result = instantiate<T>();
  let lastPos: u32 = 1;
  let depth: u32 = 0;
  for (let pos: u32 = 0; pos < <u32>data.length; pos++) {
    const char = unsafeCharCodeAt(data, pos);
    if (char === leftBraceCode) {
      if (depth === 0) {
        lastPos = pos;
      }
      depth++;
    } else if (char === rightBraceCode) {
      depth--;
      if (depth === 0) {
        pos++;
        result.push(JSON.parse<valueof<T>>(data.slice(lastPos, pos)));
        //lastPos = pos + 2;
      }
    }
  }
  return result;
}

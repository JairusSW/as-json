import { StringSink } from "as-string-sink/assembly";
import { isSpace } from "util/string";
import {
  aCode,
  bCode,
  eCode,
  fCode,
  lCode,
  nCode,
  rCode,
  sCode,
  tCode,
  uCode,

  backSlashCode,
  colonCode,
  commaCode,
  forwardSlashCode,
  leftBraceCode,
  leftBracketCode,
  quoteCode,
  rightBraceCode,
  rightBracketCode,

  backspaceCode,
  carriageReturnCode,
  tabCode,
  formFeedCode,
  newLineCode,
  
  commaWord,
  quoteWord,

  leftBraceWord,
  leftBracketWord,
  rightBracketWord,
  emptyArrayWord,

  trueWord,
  falseWord,
  nullWord,
} from "./chars";
import { snip_fast, unsafeCharCodeAt, containsCodePoint } from "./util";
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
      return nullWord;
      // @ts-ignore
    } else if ((isInteger<T>() || isFloat<T>()) && isFinite(data)) {
      // @ts-ignore
      return data.toString();
      // @ts-ignore: Hidden function
    } else if (isDefined(data.__JSON_Serialize)) {
      // @ts-ignore: Hidden function
      return data.__JSON_Serialize();
    } else if (data instanceof Date) {
      return `"${data.toISOString()}"`;
    } else if (isArrayLike<T>()) {
      // @ts-ignore
      if (data.length == 0) {
        return emptyArrayWord;
        // @ts-ignore
      } else if (isString<valueof<T>>()) {
        let result = leftBracketWord;
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
          result.writeCodePoint(commaCode);
        }
        // @ts-ignore
        result.write(JSON.stringify(unchecked(data[data.length - 1])));
        result.writeCodePoint(rightBracketCode);
        return result.toString();
      }
    } else if (data instanceof Map) {
      let result = new StringSink(leftBraceWord);
      let keys = data.keys();
      let values = data.values();
      for (let i = 0; i < data.size; i++) {
        result.write(serializeString(unchecked(keys[i]).toString()));
        result.writeCodePoint(colonCode);
        result.write(JSON.stringify(unchecked(values[i])));
        if (i < data.size - 1) {
          result.writeCodePoint(commaCode);
        }
      }
      result.writeCodePoint(rightBraceCode);
      return result.toString();
    } else {
      throw new Error(
        `Could not serialize data of type ${nameof<T>()}. Make sure to add the correct decorators to classes.`
      );
    }
  }
  /**
   * Stringifies valid JSON data.
   * ```js
   * JSON.stringify<T>(data)
   * ```
   * @param data T
   * @returns string
   */
  // @ts-ignore: Decorator
  @inline export function stringifyTo<T>(data: T, out: string): void {
    // String
    if (isString<T>() && data != null) {
      out = serializeString(data as string);
      return;
    } else if (isBoolean<T>()) {
      out = data ? trueWord : falseWord;
      return;
    } else if (isNullable<T>() && data == null) {
      out = nullWord;
      return;
      // @ts-ignore
    } else if ((isInteger<T>() || isFloat<T>()) && isFinite(data)) {
      // @ts-ignore
      out = data.toString();
      return;
      // @ts-ignore: Hidden function
    } else if (isDefined(data.__JSON_Serialize)) {
      // @ts-ignore: Hidden function
      out = data.__JSON_Serialize();
      return;
    } else if (data instanceof Date) {
      out = quoteWord + data.toISOString() + quoteWord;
      return;
    } else if (isArrayLike<T>()) {
      // @ts-ignore
      if (data.length == 0) {
        out = emptyArrayWord;
        return;
        // @ts-ignore
      } else if (isString<valueof<T>>()) {
        out = leftBracketWord;
        // @ts-ignore
        for (let i = 0; i < data.length - 1; i++) {
          // @ts-ignore
          out += serializeString(unchecked(data[i]));
          out += commaWord;
        }
        // @ts-ignore
        out += serializeString(unchecked(data[data.length - 1]));
        out += rightBracketWord;
        return;
        // @ts-ignore
      } else if (isBoolean<valueof<T>>()) {
        // @ts-ignore
        out = leftBracketWord + data.join(commaWord) + rightBracketWord;
        return;
        // @ts-ignore
      } else if (isFloat<valueof<T>>() || isInteger<valueof<T>>()) {
        // @ts-ignore
        out = leftBracketWord + data.join(commaWord) + rightBracketWord;
        return;
      } else {
        let result = new StringSink(leftBracketWord);
        // @ts-ignore
        for (let i = 0; i < data.length - 1; i++) {
          // @ts-ignore
          result.write(JSON.stringify(unchecked(data[i])));
          result.writeCodePoint(commaCode);
        }
        // @ts-ignore
        result.write(JSON.stringify(unchecked(data[data.length - 1])));
        result.writeCodePoint(rightBracketCode);
        out = result.toString();
        return;
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
  @inline export function parse<T>(data: string, initializeDefaultValues: boolean = false): T {
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
    } else if (isNullable<T>() && data == nullWord) {
      // @ts-ignore
      return null;
      // @ts-ignore
    } else if (isDefined(type.__JSON_Set_Key)) {
      return parseObject<T>(data.trimStart(), initializeDefaultValues);
    } else if (isMap<T>()) {
      return parseMap<T>(data.trimStart(), initializeDefaultValues);
    } else if (idof<nonnull<T>>() == idof<Date>()) {
      // @ts-ignore
      return parseDate(data);
    } else {
      throw new Error(
        `Could not deserialize data ${data} to type ${nameof<T>()}. Make sure to add the correct decorators to classes.`
      );
    }
  }
}

// @ts-ignore: Decorator
@global @inline function __parseObjectValue<T>(data: string, initializeDefaultValues: boolean): T {
  let type: T;
  if (isString<T>()) {
    // @ts-ignore
    return data;
  } else if (isBoolean<T>()) {
    // @ts-ignore
    return parseBoolean<T>(data);
  } else if (isFloat<T>() || isInteger<T>()) {
    return parseNumber<T>(data);
  } else if (isArrayLike<T>()) {
    // @ts-ignore
    return parseArray<T>(data);
  } else if (isNullable<T>() && data == nullWord) {
    // @ts-ignore
    return null;
    // @ts-ignore
  } else if (isDefined(type.__JSON_Set_Key)) {
    return parseObject<T>(data.trimStart(), initializeDefaultValues);
  } else if (isMap<T>()) {
    return parseMap<T>(data.trimStart(), initializeDefaultValues);
  } else if (idof<nonnull<T>>() == idof<Date>()) {
    // @ts-ignore
    return parseDate(data);
  } else {
    throw new Error(
      `Could not deserialize data ${data} to type ${nameof<T>()}. Make sure to add the correct decorators to classes.`
    );
  }
}

// @ts-ignore: Decorator
@inline function serializeString(data: string): string {
  if (data.length === 0) {
    return quoteWord + quoteWord;
  }

  let result = new StringSink(quoteWord);

  let last: i32 = 0;
  for (let i = 0; i < data.length; i++) {
    const char = unsafeCharCodeAt(<string>data, i);
    if (char === quoteCode || char === backSlashCode) {
      result.write(<string>data, last, i);
      result.writeCodePoint(backSlashCode);
      last = i;
    } else if (char < 16) {
      result.write(<string>data, last, i);
      last = i + 1;
      switch (char) {
        case backspaceCode: {
          result.write("\\b");
          break;
        }
        case tabCode: {
          result.write("\\t");
          break;
        }
        case newLineCode: {
          result.write("\\n");
          break;
        }
        case formFeedCode: {
          result.write("\\f");
          break;
        }
        case carriageReturnCode: {
          result.write("\\r");
          break;
        }
        default: {
          // all chars 0-31 must be encoded as a four digit unicode escape sequence
          // \u0000 to \u000f handled here
          result.write("\\u000");
          result.write(char.toString(16));
          break;
        }
      }
    } else if (char < 32) {
      result.write(<string>data, last, i);
      last = i + 1;
      // all chars 0-31 must be encoded as a four digit unicode escape sequence
      // \u0010 to \u001f handled here
      result.write("\\u00");
      result.write(char.toString(16));
    }
  }
  result.write(<string>data, last);
  result.writeCodePoint(quoteCode);
  return result.toString();
}

// @ts-ignore: Decorator
@inline function parseString(data: string, start: i32 = 0, end: i32 = 0): string {
  end = end || data.length - 1; 
  let result = StringSink.withCapacity(end - start - 1);
  let last = start + 1;
  for (let i = last; i < end; i++) {
    if (unsafeCharCodeAt(data, i) !== backSlashCode) {
      continue;
    }
    const char = unsafeCharCodeAt(data, ++i);
    result.write(data, last, i - 1);
    switch (char) {
      case quoteCode: {
        result.writeCodePoint(quoteCode);
        last = i + 1;
        break;
      }
      case backSlashCode: {
        result.writeCodePoint(backSlashCode);
        last = i + 1;
        break;
      }
      case forwardSlashCode: {
        result.writeCodePoint(forwardSlashCode);
        last = i + 1;
        break;
      }
      case bCode: {
        result.writeCodePoint(backspaceCode);
        last = i + 1;
        break;
      }
      case fCode: {
        result.writeCodePoint(formFeedCode);
        last = i + 1;
        break;
      }
      case nCode: {
        result.writeCodePoint(newLineCode);
        last = i + 1;
        break;
      }
      case rCode: {
        result.writeCodePoint(carriageReturnCode);
        last = i + 1;
        break;
      }
      case tCode: {
        result.writeCodePoint(tabCode);
        last = i + 1;
        break;
      }
      case uCode: {
        const code = u16.parse(data.slice(i + 1, i + 5), 16);
        result.writeCodePoint(code);
        i += 4;
        last = i + 1;
        break;
      }
      default: {
        throw new Error(`JSON: Cannot parse "${data}" as string. Invalid escape sequence: \\${data.charAt(i)}`);
      }
    }
  }
  if (end > last) {
    result.write(data, last, end);
  }
  return result.toString()
}

// @ts-ignore: Decorator
@inline function parseBoolean<T extends boolean>(data: string): T {
  if (data.length > 3 && data.startsWith(trueWord)) return <T>true;
  else if (data.length > 4 && data.startsWith(falseWord)) return <T>false;
  else throw new Error(`JSON: Cannot parse "${data}" as boolean`);
}

// @ts-ignore: Decorator
@inline function parseNumber<T>(data: string): T {
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
@inline function parseObject<T>(data: string, initializeDefaultValues: boolean): T {
  const schema: nonnull<T> = changetype<nonnull<T>>(
    __new(offsetof<nonnull<T>>(), idof<nonnull<T>>())
  );
  
  // @ts-ignore
  if (initializeDefaultValues) schema.__JSON_Initialize();

  const key = Virtual.createEmpty<string>();
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
            schema.__JSON_Set_Key(key, data, outerLoopIndex, arrayValueIndex, initializeDefaultValues);
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
            schema.__JSON_Set_Key(key, data, outerLoopIndex, objectValueIndex, initializeDefaultValues);
            outerLoopIndex = objectValueIndex;
            isKey = false;
            break;
          }
        }
      }
    } else if (char === quoteCode) {
      let escaping = false;
      for (
        let stringValueIndex = ++outerLoopIndex;
        stringValueIndex < data.length - 1;
        stringValueIndex++
      ) {
        const char = unsafeCharCodeAt(data, stringValueIndex);
        if (char === backSlashCode && !escaping) {
          escaping = true;
        } else {
          if (char === quoteCode && !escaping) {
            if (isKey === false) {
              // perf: we can avoid creating a new string here if the key doesn't contain any escape sequences
              if (containsCodePoint(data, backSlashCode, outerLoopIndex, stringValueIndex)) {
                key.reinst(parseString(data, outerLoopIndex - 1, stringValueIndex));
              } else {
                key.reinst(data, outerLoopIndex, stringValueIndex);
              }
              isKey = true;
            } else {
              const value = parseString(data, outerLoopIndex - 1, stringValueIndex);
              // @ts-ignore
              schema.__JSON_Set_Key(key, value, 0, value.length, initializeDefaultValues);
              isKey = false;
            }
            outerLoopIndex = ++stringValueIndex;
            break;
          }
          escaping = false;
        }
      }
    } else if (
      char == nCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === uCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === lCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === lCode
    ) {
      // @ts-ignore
      schema.__JSON_Set_Key(key, nullWord, 0, 4, initializeDefaultValues);
      isKey = false;
    } else if (
      char === tCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === rCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === uCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === eCode
    ) {
      // @ts-ignore
      schema.__JSON_Set_Key(key, trueWord, 0, 4, initializeDefaultValues);
      isKey = false;
    } else if (
      char === fCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === aCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === lCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === sCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === eCode
    ) {
      // @ts-ignore
      schema.__JSON_Set_Key(key, falseWord, 0, 5, initializeDefaultValues);
      isKey = false;
    } else if ((char >= 48 && char <= 57) || char === 45) {
      let numberValueIndex = ++outerLoopIndex;
      for (; numberValueIndex < data.length; numberValueIndex++) {
        const char = unsafeCharCodeAt(data, numberValueIndex);
        if (char === commaCode || char === rightBraceCode || isSpace(char)) {
          // @ts-ignore
          schema.__JSON_Set_Key(key, data, outerLoopIndex - 1, numberValueIndex, initializeDefaultValues);
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
@inline function parseMap<T extends Map>(data: string, initializeDefaultValues: boolean): T {

  const map: nonnull<T> = changetype<nonnull<T>>(
    __new(offsetof<nonnull<T>>(), idof<nonnull<T>>())
  );
  
  if (!isDefined(map.set)) {
    return unreachable();
  }

  const key = Virtual.createEmpty<string>();
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
            map.set(parseMapKey<indexof<T>>(key), JSON.parse<valueof<T>>(data.slice(outerLoopIndex, arrayValueIndex), initializeDefaultValues));
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
            map.set(parseMapKey<indexof<T>>(key), JSON.parse<valueof<T>>(data.slice(outerLoopIndex, objectValueIndex), initializeDefaultValues));
            outerLoopIndex = objectValueIndex;
            isKey = false;
            break;
          }
        }
      }
    } else if (char === quoteCode) {
      let escaping = false;
      for (
        let stringValueIndex = ++outerLoopIndex;
        stringValueIndex < data.length - 1;
        stringValueIndex++
      ) {
        const char = unsafeCharCodeAt(data, stringValueIndex);
        if (char === backSlashCode && !escaping) {
          escaping = true;
        } else {
          if (
            char === quoteCode && !escaping
          ) {
            if (isKey === false) {
              // perf: we can avoid creating a new string here if the key doesn't contain any escape sequences
              if (containsCodePoint(data, backSlashCode, outerLoopIndex, stringValueIndex)) {
                key.reinst(parseString(data, outerLoopIndex - 1, stringValueIndex));
              } else {
                key.reinst(data, outerLoopIndex, stringValueIndex);
              }
              isKey = true;
            } else {              
              if (isString<valueof<T>>()) {
                const value = parseString(data, outerLoopIndex - 1, stringValueIndex);
                map.set(parseMapKey<indexof<T>>(key), value);
              }
              isKey = false;
            }
            outerLoopIndex = ++stringValueIndex;
            break;
          }
          escaping = false;
        }
      }
    } else if (
      char == nCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === uCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === lCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === lCode) {
      if (isNullable<valueof<T>>()) {
        map.set(parseMapKey<indexof<T>>(key), null);
      }
      isKey = false;
    } else if (
      char === tCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === rCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === uCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === eCode
    ) {
      if (isBoolean<valueof<T>>()) {
        map.set(parseMapKey<indexof<T>>(key), true);
      }
      isKey = false;
    } else if (
      char === fCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === aCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === lCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === sCode &&
      unsafeCharCodeAt(data, ++outerLoopIndex) === eCode
    ) {
      if (isBoolean<valueof<T>>()) {
        map.set(parseMapKey<indexof<T>>(key), false);
      }
      isKey = false;
    } else if ((char >= 48 && char <= 57) || char === 45) {
      let numberValueIndex = ++outerLoopIndex;
      for (; numberValueIndex < data.length; numberValueIndex++) {
        const char = unsafeCharCodeAt(data, numberValueIndex);
        if (char === colonCode || char === commaCode || char === rightBraceCode || isSpace(char)) {
          if (isFloat<valueof<T>>() || isInteger<valueof<T>>()) {
            map.set(parseMapKey<indexof<T>>(key), parseNumber<valueof<T>>(data.slice(outerLoopIndex - 1, numberValueIndex)));
          }          
          outerLoopIndex = numberValueIndex;
          isKey = false;
          break;
        }
      }
    }
  }

  return map;
}

//@ts-ignore: Decorator
@inline function parseMapKey<T>(key: Virtual<string>): T {
  const k = key.copyOut();
  if (isString<T>()) {
    return k as T;
  } else if (isBoolean<T>()) {
    // @ts-ignore
    return parseBoolean<T>(k) as T;
  } else if (isInteger<T>() || isFloat<T>()) {
    return parseNumber<T>(k);
  }

  throw new Error(`JSON: Cannot parse JSON object to a Map with a key of type ${nameof<T>()}`);
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
  } else if (isMap<valueof<T>>()) {
    return parseObjectArray<T>(data);
  } else if (isManaged<valueof<T>>() || isReference<valueof<T>>()) {
    // We instantiate the required memory for the class and fill it. This is extremely unsafe and uses "a bit of magic".
    const type = changetype<nonnull<valueof<T>>>(
      __new(offsetof<nonnull<valueof<T>>>(), idof<nonnull<valueof<T>>>())
    );
    // @ts-ignore
    if (isDefined(type.__JSON_Set_Key)) {
      return parseObjectArray<T>(data);
    }
  }
  
  return unreachable();
}

// @ts-ignore: Decorator
@inline function parseStringArray(data: string): string[] {
  const result: string[] = [];
  let lastPos = 0;
  let instr = false;
  let escaping = false;
  for (let i = 1; i < data.length - 1; i++) {
    const char = unsafeCharCodeAt(data, i);
    if (char === backSlashCode && !escaping) {
      escaping = true;
    } else {
      if (char === quoteCode && !escaping) {
        if (instr === false) {
          instr = true;
          lastPos = i;
        } else {
          instr = false;
          result.push(parseString(data, lastPos, i));
        }
      }
      escaping = false;
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
    if (lastPos === 0 && ((char >= 48 && char <= 57) || char === 45)) {
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
@inline function parseObjectArray<T extends unknown[]>(data: string): T {
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

function parseDate(dateTimeString: string): Date { 
  // Use AssemblyScript's date parser
  const d = Date.fromString(dateTimeString);

  // Return a new object instead of the one that the parser returned.
  // This may seem redundant, but addreses the issue when Date
  // is globally aliased to wasi_Date (or some other superclass).
  return new Date(d.getTime());
}

// @ts-ignore: Decorator
@inline function isMap<T>(): bool {
  let type = changetype<T>(0);
  return type instanceof Map;
}

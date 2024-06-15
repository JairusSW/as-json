import { containsCodePoint, unsafeCharCodeAt } from "../src/util";
import { aCode, backSlashCode, commaCode, eCode, fCode, lCode, leftBraceCode, leftBracketCode, nCode, quoteCode, rCode, rightBraceCode, rightBracketCode, sCode, tCode, uCode } from "../src/chars";
import { isSpace } from "util/string";

// @ts-ignore: Decorator
@inline export function deserializeObject<T>(data: string): T {
  const schema: nonnull<T> = changetype<nonnull<T>>(
    __new(offsetof<nonnull<T>>(), idof<nonnull<T>>())
  );

  // @ts-ignore
  schema.__INITIALIZE();

  let key_start: i32 = 0;
  let key_end: i32 = 0;
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
            schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, arrayValueIndex);
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
            schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, objectValueIndex);
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
              key_start = outerLoopIndex;
              key_end = stringValueIndex;
              isKey = true;
            } else {
              // @ts-ignore
              schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex - 1, stringValueIndex + 1);
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
      unsafeCharCodeAt(data, outerLoopIndex + 1) === uCode &&
      unsafeCharCodeAt(data, outerLoopIndex + 2) === lCode &&
      unsafeCharCodeAt(data, outerLoopIndex + 3) === lCode
    ) {
      // @ts-ignore
      schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, outerLoopIndex + 4);
      outerLoopIndex += 3;
      isKey = false;
    } else if (
      char === tCode &&
      unsafeCharCodeAt(data, outerLoopIndex + 1) === rCode &&
      unsafeCharCodeAt(data, outerLoopIndex + 2) === uCode &&
      unsafeCharCodeAt(data, outerLoopIndex + 3) === eCode
    ) {
      // @ts-ignore
      schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, outerLoopIndex + 4);
      outerLoopIndex += 3;
      isKey = false;
    } else if (
      char === fCode &&
      unsafeCharCodeAt(data, outerLoopIndex + 1) === aCode &&
      unsafeCharCodeAt(data, outerLoopIndex + 2) === lCode &&
      unsafeCharCodeAt(data, outerLoopIndex + 3) === sCode &&
      unsafeCharCodeAt(data, outerLoopIndex + 4) === eCode
    ) {
      // @ts-ignore
      schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, outerLoopIndex + 5);
      outerLoopIndex += 4;
      isKey = false;
    } else if ((char >= 48 && char <= 57) || char === 45) {
      let numberValueIndex = ++outerLoopIndex;
      for (; numberValueIndex < data.length; numberValueIndex++) {
        const char = unsafeCharCodeAt(data, numberValueIndex);
        if (char === commaCode || char === rightBraceCode || isSpace(char)) {
          // @ts-ignore
          schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex - 1, numberValueIndex);
          outerLoopIndex = numberValueIndex;
          isKey = false;
          break;
        }
      }
    }
  }
  return schema;
}
import { unsafeCharCodeAt } from "../custom/util";
import { CHAR_A, BACK_SLASH, COMMA, CHAR_E, CHAR_F, CHAR_L, BRACE_LEFT, BRACKET_LEFT, CHAR_N, QUOTE, CHAR_R, BRACE_RIGHT, BRACKET_RIGHT, CHAR_S, CHAR_T, CHAR_U } from "../custom/chars";
import { isSpace } from "util/string";

// @ts-ignore: Decorator valid here
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
    if (char === BRACKET_LEFT) {
      for (
        let arrayValueIndex = outerLoopIndex;
        arrayValueIndex < data.length - 1;
        arrayValueIndex++
      ) {
        const char = unsafeCharCodeAt(data, arrayValueIndex);
        if (char === BRACKET_LEFT) {
          depth++;
        } else if (char === BRACKET_RIGHT) {
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
    } else if (char === BRACE_LEFT) {
      for (
        let objectValueIndex = outerLoopIndex;
        objectValueIndex < data.length - 1;
        objectValueIndex++
      ) {
        const char = unsafeCharCodeAt(data, objectValueIndex);
        if (char === BRACE_LEFT) {
          depth++;
        } else if (char === BRACE_RIGHT) {
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
    } else if (char === QUOTE) {
      let escaping = false;
      for (
        let stringValueIndex = ++outerLoopIndex;
        stringValueIndex < data.length - 1;
        stringValueIndex++
      ) {
        const char = unsafeCharCodeAt(data, stringValueIndex);
        if (char === BACK_SLASH && !escaping) {
          escaping = true;
        } else {
          if (char === QUOTE && !escaping) {
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
      char == CHAR_N &&
      unsafeCharCodeAt(data, outerLoopIndex + 1) === CHAR_U &&
      unsafeCharCodeAt(data, outerLoopIndex + 2) === CHAR_L &&
      unsafeCharCodeAt(data, outerLoopIndex + 3) === CHAR_L
    ) {
      // @ts-ignore
      schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, outerLoopIndex + 4);
      outerLoopIndex += 3;
      isKey = false;
    } else if (
      char === CHAR_T &&
      unsafeCharCodeAt(data, outerLoopIndex + 1) === CHAR_R &&
      unsafeCharCodeAt(data, outerLoopIndex + 2) === CHAR_U &&
      unsafeCharCodeAt(data, outerLoopIndex + 3) === CHAR_E
    ) {
      // @ts-ignore
      schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, outerLoopIndex + 4);
      outerLoopIndex += 3;
      isKey = false;
    } else if (
      char === CHAR_F &&
      unsafeCharCodeAt(data, outerLoopIndex + 1) === CHAR_A &&
      unsafeCharCodeAt(data, outerLoopIndex + 2) === CHAR_L &&
      unsafeCharCodeAt(data, outerLoopIndex + 3) === CHAR_S &&
      unsafeCharCodeAt(data, outerLoopIndex + 4) === CHAR_E
    ) {
      // @ts-ignore
      schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, outerLoopIndex + 5);
      outerLoopIndex += 4;
      isKey = false;
    } else if ((char >= 48 && char <= 57) || char === 45) {
      let numberValueIndex = ++outerLoopIndex;
      for (; numberValueIndex < data.length; numberValueIndex++) {
        const char = unsafeCharCodeAt(data, numberValueIndex);
        if (char === COMMA || char === BRACE_RIGHT || isSpace(char)) {
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
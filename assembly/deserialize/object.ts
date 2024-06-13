import { Virtual } from "as-virtual/assembly";
import { containsCodePoint, unsafeCharCodeAt } from "../src/util";
import { nullWord,trueWord,falseWord,aCode, backSlashCode, commaCode, eCode, fCode, lCode, leftBraceCode, leftBracketCode, nCode, quoteCode, rCode, rightBraceCode, rightBracketCode, sCode, tCode, uCode } from "../src/chars";
import { deserializeString } from "./string";
import { isSpace } from "util/string";

// @ts-ignore: Decorator
@inline export function deserializeObject<T>(data: string, initializeDefaultValues: boolean): T {
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
                  key.reinst(deserializeString(data, outerLoopIndex - 1, stringValueIndex));
                } else {
                  key.reinst(data, outerLoopIndex, stringValueIndex);
                }
                isKey = true;
              } else {
                const value = deserializeString(data, outerLoopIndex - 1, stringValueIndex);
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
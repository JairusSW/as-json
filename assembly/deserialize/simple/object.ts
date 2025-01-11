import { unsafeCharCodeAt } from "../../custom/util";
import { CHAR_A, BACK_SLASH, COMMA, CHAR_E, CHAR_F, CHAR_L, BRACE_LEFT, BRACKET_LEFT, CHAR_N, QUOTE, CHAR_R, BRACE_RIGHT, BRACKET_RIGHT, CHAR_S, CHAR_T, CHAR_U, COLON } from "../../custom/chars";
import { isSpace } from "../../util";

export function deserializeObject<T>(data: string): T {
  const schema: nonnull<T> = changetype<nonnull<T>>(__new(offsetof<nonnull<T>>(), idof<nonnull<T>>()));

  // @ts-ignore
  schema.__INITIALIZE();

  let key_start: i32 = 0;
  let key_end: i32 = 0;
  let isKey = false;
  let depth = 0;
  let outerLoopIndex = 1;
  for (; outerLoopIndex < data.length - 1; outerLoopIndex++) {
    const char = unsafeCharCodeAt(data, outerLoopIndex);
    if (char == BRACKET_LEFT) {
      for (let arrayValueIndex = outerLoopIndex; arrayValueIndex < data.length - 1; arrayValueIndex++) {
        const char = unsafeCharCodeAt(data, arrayValueIndex);
        if (char == BRACKET_LEFT) {
          depth++;
        } else if (char == BRACKET_RIGHT) {
          depth--;
          if (depth == 0) {
            ++arrayValueIndex;
            // @ts-ignore
            schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, arrayValueIndex);
            outerLoopIndex = arrayValueIndex;
            isKey = false;
            break;
          }
        }
      }
    } else if (char == BRACE_LEFT) {
      for (let objectValueIndex = outerLoopIndex; objectValueIndex < data.length - 1; objectValueIndex++) {
        const char = unsafeCharCodeAt(data, objectValueIndex);
        if (char == BRACE_LEFT) {
          depth++;
        } else if (char == BRACE_RIGHT) {
          depth--;
          if (depth == 0) {
            ++objectValueIndex;
            // @ts-ignore
            schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, objectValueIndex);
            outerLoopIndex = objectValueIndex;
            isKey = false;
            break;
          }
        }
      }
    } else if (char == QUOTE) {
      let escaping = false;
      for (let stringValueIndex = ++outerLoopIndex; stringValueIndex < data.length - 1; stringValueIndex++) {
        const char = unsafeCharCodeAt(data, stringValueIndex);
        if (char == BACK_SLASH && !escaping) {
          escaping = true;
        } else {
          if (char == QUOTE && !escaping) {
            if (isKey == false) {
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
    } else if (char == CHAR_N && unsafeCharCodeAt(data, outerLoopIndex + 1) == CHAR_U && unsafeCharCodeAt(data, outerLoopIndex + 2) == CHAR_L && unsafeCharCodeAt(data, outerLoopIndex + 3) == CHAR_L) {
      // @ts-ignore
      schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, outerLoopIndex + 4);
      outerLoopIndex += 3;
      isKey = false;
    } else if (char == CHAR_T && unsafeCharCodeAt(data, outerLoopIndex + 1) == CHAR_R && unsafeCharCodeAt(data, outerLoopIndex + 2) == CHAR_U && unsafeCharCodeAt(data, outerLoopIndex + 3) == CHAR_E) {
      // @ts-ignore
      schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, outerLoopIndex + 4);
      outerLoopIndex += 3;
      isKey = false;
    } else if (char == CHAR_F && unsafeCharCodeAt(data, outerLoopIndex + 1) == CHAR_A && unsafeCharCodeAt(data, outerLoopIndex + 2) == CHAR_L && unsafeCharCodeAt(data, outerLoopIndex + 3) == CHAR_S && unsafeCharCodeAt(data, outerLoopIndex + 4) == CHAR_E) {
      // @ts-ignore
      schema.__DESERIALIZE(data, key_start, key_end, outerLoopIndex, outerLoopIndex + 5);
      outerLoopIndex += 4;
      isKey = false;
    } else if ((char >= 48 && char <= 57) || char == 45) {
      let numberValueIndex = ++outerLoopIndex;
      for (; numberValueIndex < data.length; numberValueIndex++) {
        const char = unsafeCharCodeAt(data, numberValueIndex);
        if (char == COMMA || char == BRACE_RIGHT || isSpace(char)) {
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

export function deserializeObject_NEW<T>(srcStart: usize, srcEnd: usize): T {
  console.log("Data: " + str(srcStart, srcEnd));
  const schema: nonnull<T> = changetype<nonnull<T>>(__new(offsetof<nonnull<T>>(), idof<nonnull<T>>()));

  const srcPtr = srcStart;

  let keyStart: usize = 0;
  let keyEnd: usize = 0;
  let isKey = false;
  let depth = 0;
  let lastIndex = 0;

  // while (srcStart < srcEnd && isSpace(load<u16>(srcStart))) srcStart += 2;
  // while (srcEnd > srcStart && isSpace(load<u16>(srcEnd))) srcEnd -= 2;

  while (srcStart < srcEnd) {
    let code = load<u16>(srcStart);// while (isSpace(code)) code = load<u16>(srcStart += 2);
    if (keyStart == 0) {
      if (code == QUOTE && load<u16>(srcStart - 2) !== BACK_SLASH) {
        if (isKey) {
          keyStart = lastIndex;
          keyEnd = srcStart;
          console.log("Key: " + str(lastIndex, srcStart));
          while (isSpace(code = load<u16>(srcStart += 2))) { /* empty */ }
          if (code !== COLON)
            throw new Error(
              "Expected ':' after key at position " + (srcStart - srcPtr).toString(),
            );
          isKey = false;
        } else {
          isKey = true; // i don't like this
          lastIndex = srcStart + 2;
        }
      }
      // isKey = !isKey;
      srcStart += 2;
    } else {
      if (code == QUOTE) {
        lastIndex = srcStart;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (code == QUOTE && load<u16>(srcStart - 2) !== BACK_SLASH) {
            while (isSpace(load<u16>(srcStart += 2))) { /* empty */ }
            console.log("Value (string): " + str(lastIndex, srcStart));
            // @ts-ignore: exists
            schema.__DESERIALIZE(keyStart, keyEnd, lastIndex, srcStart);
            keyStart = 0;
            break;
          }
          srcStart += 2;
        }
      } else if (code - 48 <= 9 || code == 45) {
        lastIndex = srcStart;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (code == COMMA || code == BRACE_RIGHT || isSpace(code)) {
            // @ts-ignore: exists
            schema.__DESERIALIZE(keyStart, keyEnd, lastIndex, srcStart);
            console.log("Value (number): " + str(lastIndex, srcStart));
            while (isSpace(load<u16>(srcStart += 2))) { /* empty */ }
            keyStart = 0;
            break;
          }
          srcStart += 2;
        }
      } else if (code == BRACE_LEFT) {
        lastIndex = srcStart;
        depth++;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (((code ^ BRACE_RIGHT) | (code ^ BRACKET_RIGHT)) == 32) {
            if (--depth == 0) {
              // @ts-ignore: exists
              schema.__DESERIALIZE(keyStart, keyEnd, lastIndex, srcStart);
              console.log("Value (object): " + str(lastIndex, srcStart));
              keyStart = 0;
              while (isSpace(load<u16>(srcStart += 2))) { /* empty */ }
              break;
            }
          } else if (((code ^ BRACE_LEFT) | (code ^ BRACKET_LEFT)) == 220) depth++;
          srcStart += 2;
        }
      } else if (code == CHAR_T) {
        if (load<u64>(srcStart) == 28429475166421108) {
          // @ts-ignore: exists
          schema.__DESERIALIZE(keyStart, keyEnd, srcStart, srcStart += 8);
          console.log("Value (bool): " + str(srcStart - 8, srcStart));
          while (isSpace(load<u16>(srcStart += 2))) { /* empty */ }
          keyStart = 0;
        }
      } else if (code == CHAR_F) {
        if (load<u64>(srcStart, 2) == 28429466576093281) {
          // @ts-ignore: exists
          schema.__DESERIALIZE(keyStart, keyEnd, srcStart, srcStart += 10);
          console.log("Value (bool): " + str(srcStart - 10, srcStart));
          while (isSpace(load<u16>(srcStart += 2))) { /* empty */ }
          keyStart = 0;
        }
      } else if (code == CHAR_N) {
        if (load<u64>(srcStart) == 30399761348886638) {
          // @ts-ignore: exists
          schema.__DESERIALIZE(keyStart, keyEnd, srcStart, srcStart += 8);
          console.log("Value (null): " + str(srcStart - 8, srcStart));
          while (isSpace(load<u16>(srcStart += 2))) { /* empty */ }
        }
      }
    }
  }
  return schema;
}

function str(start: usize, end: usize): string {
  const size = end - start;
  const out = __new(size, idof<string>());
  memory.copy(out, start, size);
  return changetype<string>(out);
}
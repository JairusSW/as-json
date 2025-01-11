import { JSON } from "../..";
import { BACK_SLASH, COMMA, CHAR_F, BRACE_LEFT, BRACKET_LEFT, CHAR_N, QUOTE, BRACE_RIGHT, BRACKET_RIGHT, CHAR_T, COLON } from "../../custom/chars";
import { isSpace } from "../../util";

export function deserializeMap<T extends Map<any, any>>(srcStart: usize, srcEnd: usize, dst: T | null = null): T {
  // @ts-ignore: type
  if (!isString<indexof<T>>() && !isInteger<indexof<T>>()) ERROR("Map key must be of type string | number!");
  dst = dst || changetype<nonnull<T>>(__new(offsetof<nonnull<T>>(), idof<nonnull<T>>()));
  console.log("Data: " + str(srcStart, srcEnd));

  const srcPtr = srcStart;
  let key: string | null = null;
  let isKey = false;
  let depth = 0;
  let lastIndex = 0;

  // while (srcStart < srcEnd && isSpace(load<u16>(srcStart))) srcStart += 2;
  // while (srcEnd > srcStart && isSpace(load<u16>(srcEnd))) srcEnd -= 2;

  while (srcStart < srcEnd) {
    let code = load<u16>(srcStart); // while (isSpace(code)) code = load<u16>(srcStart += 2);
    if (key == null) {
      if (code == QUOTE && load<u16>(srcStart - 2) !== BACK_SLASH) {
        if (isKey) {
          key = sliceTo(lastIndex, srcStart);
          console.log("Key: " + key);
          while (isSpace((code = load<u16>((srcStart += 2))))) {
            /* empty */
          }
          if (code !== COLON) throw new Error("Expected ':' after key at position " + (srcStart - srcPtr).toString());
          isKey = false;
        } else {
          isKey = true; // i don't like this
          lastIndex = srcStart + 2;
        }
      }
      // isKey = !isKey;
      srcStart += 2;
    } else {
      if (isString<valueof<T>>() && code == QUOTE) {
        lastIndex = srcStart;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (code == QUOTE && load<u16>(srcStart - 2) !== BACK_SLASH) {
            while (isSpace(load<u16>((srcStart += 2)))) {
              /* empty */
            }
            console.log("Value (string): " + str(lastIndex, srcStart));
            dst.set(key, JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
            key = null;
            break;
          }
          srcStart += 2;
        }
      } else if (!isBoolean<valueof<T>>() && isInteger<valueof<T>>() && code - 48 <= 9 || code == 45) {
        lastIndex = srcStart;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (code == COMMA || isSpace(code) || code == BRACE_RIGHT) {
            dst.set(key, JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
            console.log("Value (number): " + str(lastIndex, srcStart));
            while (isSpace(load<u16>((srcStart += 2)))) {
              /* empty */
            }
            key = null;
            break;
          }
          srcStart += 2;
        }
      } else if (isArray<valueof<T>>() && code == BRACKET_LEFT) {
        lastIndex = srcStart;
        depth++;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (((code ^ BRACE_RIGHT) | (code ^ BRACKET_RIGHT)) == 32) {
            if (--depth == 0) {
              dst.set(key, JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
              while (isSpace(load<u16>((srcStart += 2)))) {
                /* empty */
              }
              key = null;
              break;
            }
          } else if (code == BRACKET_LEFT) depth++;
          srcStart += 2;
        }
      } else if (isDefined(changetype<nonnull<valueof<T>>>(0).__DESERIALIZE) && code == BRACE_LEFT) {
        lastIndex = srcStart;
        depth++;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (code == BRACE_RIGHT) {
            if (--depth == 0) {
              dst.set(key, JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
              while (isSpace(load<u16>((srcStart += 2)))) {
                /* empty */
              }
              key = null;
              break;
            }
          } else if (code == BRACE_LEFT) depth++;
          srcStart += 2;
        }
      } else if (isBoolean<valueof<T>>() && code == CHAR_T) {
        if (load<u64>(srcStart) == 28429475166421108) {
          dst.set(key, JSON.__deserialize<valueof<T>>(srcStart, srcStart += 8));
          console.log("Value (bool): " + str(srcStart - 8, srcStart));
          while (isSpace(load<u16>((srcStart += 2)))) {
            /* empty */
          }
          key = null;
        }
      } else if (isBoolean<valueof<T>>() && code == CHAR_F) {
        if (load<u64>(srcStart, 2) == 28429466576093281) {
          dst.set(key, JSON.__deserialize<valueof<T>>(srcStart, srcStart += 10));
          console.log("Value (bool): " + str(srcStart - 10, srcStart));
          while (isSpace(load<u16>((srcStart += 2)))) {
            /* empty */
          }
          key = null;
        }
      } else if ((isNullable<T>() || nameof<T>() == "usize") && code == CHAR_N) {
        if (load<u64>(srcStart) == 30399761348886638) {
          dst.set(key, JSON.__deserialize<valueof<T>>(srcStart, srcStart += 8));
          console.log("Value (null): " + str(srcStart - 8, srcStart));
          while (isSpace(load<u16>((srcStart += 2)))) {
            /* empty */
          }
        }
      }
    }
  }
  return dst;
}

function str(start: usize, end: usize): string {
  const size = end - start;
  const out = __new(size, idof<string>());
  memory.copy(out, start, size);
  return changetype<string>(out);
}

// @ts-ignore: Decorator valid here
@inline function sliceTo(srcStart: usize, srcEnd: usize): string {
  const dstSize = srcEnd - srcStart;
  const dst = __new(dstSize, idof<string>());
  memory.copy(dst, srcStart, dstSize);
  return changetype<string>(dst);
}
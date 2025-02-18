import { JSON } from "../..";
import { BACK_SLASH, COMMA, CHAR_F, BRACE_LEFT, BRACKET_LEFT, CHAR_N, QUOTE, BRACE_RIGHT, BRACKET_RIGHT, CHAR_T, COLON } from "../../custom/chars";
import { isSpace } from "../../util";

export function deserializeMap<T extends Map<any, any>>(srcStart: usize, srcEnd: usize, dst: usize): T {
  const out = changetype<T>(dst || __new(offsetof<T>(), idof<T>()));
  // @ts-ignore: type
  if (!isString<indexof<T>>() && !isInteger<indexof<T>>() && !isFloat<indexof<T>>()) throw new Error("Map key must also be a valid JSON key!");

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
          while (isSpace((code = load<u16>((srcStart += 2))))) {
            /* empty */
          }
          if (code !== COLON) throw new Error("Expected ':' after key at position " + (srcStart - srcPtr).toString());
          isKey = false;
        } else {
          isKey = true;
          lastIndex = srcStart + 2;
        }
      }
      // isKey = !isKey;
      srcStart += 2;
    } else {
      // @ts-ignore: type
      if (isString<valueof<T>>() && code == QUOTE) {
        lastIndex = srcStart;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (code == QUOTE && load<u16>(srcStart - 2) !== BACK_SLASH) {
            while (isSpace(load<u16>((srcStart += 2)))) {
              /* empty */
            }
            // @ts-ignore: type
            out.set(key, JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
            key = null;
            break;
          }
          srcStart += 2;
        }
        // @ts-ignore: type
      } else if ((!isBoolean<valueof<T>>() && isInteger<valueof<T>>() && code - 48 <= 9) || code == 45) {
        lastIndex = srcStart;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (code == COMMA || isSpace(code) || code == BRACE_RIGHT) {
            // @ts-ignore: type
            out.set(key, JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
            while (isSpace(load<u16>((srcStart += 2)))) {
              /* empty */
            }
            key = null;
            break;
          }
          srcStart += 2;
        }
        // @ts-ignore: type
      } else if (isArray<valueof<T>>() && code == BRACKET_LEFT) {
        lastIndex = srcStart;
        depth++;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (code == BRACKET_RIGHT) {
            if (--depth == 0) {
              // @ts-ignore: type
              out.set(key, JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
              while (isSpace(load<u16>((srcStart += 2)))) {
                /* empty */
              }
              key = null;
              break;
            }
          } else if (code == BRACKET_LEFT) depth++;
          srcStart += 2;
        }
        // @ts-ignore: type
      } else if (isDefined(changetype<nonnull<valueof<T>>>(0).__DESERIALIZE) && code == BRACE_LEFT) {
        lastIndex = srcStart;
        depth++;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (code == BRACE_RIGHT) {
            if (--depth == 0) {
              // @ts-ignore: type
              out.set(key, JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
              while (isSpace(load<u16>((srcStart += 2)))) {
                /* empty */
              }
              key = null;
              break;
            }
          } else if (code == BRACE_LEFT) depth++;
          srcStart += 2;
        }
        // @ts-ignore: type
      } else if (isBoolean<valueof<T>>() && code == CHAR_T) {
        if (load<u64>(srcStart) == 28429475166421108) {
          // @ts-ignore: type
          out.set(key, JSON.__deserialize<valueof<T>>(srcStart, (srcStart += 8)));
          while (isSpace(load<u16>((srcStart += 2)))) {
            /* empty */
          }
          key = null;
        }
        // @ts-ignore: type
      } else if (isBoolean<valueof<T>>() && code == CHAR_F) {
        if (load<u64>(srcStart, 2) == 28429466576093281) {
          // @ts-ignore: type
          out.set(key, JSON.__deserialize<valueof<T>>(srcStart, (srcStart += 10)));
          while (isSpace(load<u16>((srcStart += 2)))) {
            /* empty */
          }
          key = null;
        }
      } else if ((isNullable<T>() || nameof<T>() == "usize") && code == CHAR_N) {
        if (load<u64>(srcStart) == 30399761348886638) {
          // @ts-ignore: type
          out.set(key, JSON.__deserialize<valueof<T>>(srcStart, (srcStart += 8)));
          while (isSpace(load<u16>((srcStart += 2)))) {
            /* empty */
          }
        }
      } else {
        // @ts-ignore: type
        throw new Error("Unexpected character " + String.fromCharCode(code) + " or type " + nameof<valueof<T>>() + " does not match found type!");
      }
    }
  }
  return out;
}

function sliceTo(srcStart: usize, srcEnd: usize): string {
  const dstSize = srcEnd - srcStart;
  const dst = __new(dstSize, idof<string>());
  memory.copy(dst, srcStart, dstSize);
  return changetype<string>(dst);
}

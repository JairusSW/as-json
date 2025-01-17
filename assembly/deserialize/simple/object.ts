import { BACK_SLASH, COMMA, CHAR_F, BRACE_LEFT, BRACKET_LEFT, CHAR_N, QUOTE, BRACE_RIGHT, BRACKET_RIGHT, CHAR_T, COLON } from "../../custom/chars";
import { isSpace } from "../../util";
import { ptrToStr } from "../../util/ptrToStr";

export function deserializeObject<T>(srcStart: usize, srcEnd: usize, dst: usize): T {
  const out = changetype<T>(dst);
  const srcPtr = srcStart;

  let keyStart: usize = 0;
  let keyEnd: usize = 0;
  let isKey = false;
  let depth = 0;
  let lastIndex = 0;

  // while (srcStart < srcEnd && isSpace(load<u16>(srcStart))) srcStart += 2;
  // while (srcEnd > srcStart && isSpace(load<u16>(srcEnd))) srcEnd -= 2;

  while (srcStart < srcEnd) {
    let code = load<u16>(srcStart); // while (isSpace(code)) code = load<u16>(srcStart += 2);
    if (keyStart == 0) {
      if (code == QUOTE && load<u16>(srcStart - 2) !== BACK_SLASH) {
        if (isKey) {
          keyStart = lastIndex;
          keyEnd = srcStart;
          console.log("Key: " + ptrToStr(lastIndex, srcStart));
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
      if (code == QUOTE) {
        lastIndex = srcStart;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (code == QUOTE && load<u16>(srcStart - 2) !== BACK_SLASH) {
            while (isSpace(load<u16>((srcStart += 2)))) {
              /* empty */
            }
            console.log("Value (string): " + ptrToStr(lastIndex, srcStart));
            // @ts-ignore: exists
            out.__DESERIALIZE(keyStart, keyEnd, lastIndex, srcStart, dst);
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
            out.__DESERIALIZE(keyStart, keyEnd, lastIndex, srcStart, dst);
            console.log("Value (number): " + ptrToStr(lastIndex, srcStart));
            while (isSpace(load<u16>((srcStart += 2)))) {
              /* empty */
            }
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
          if (code == BRACE_RIGHT) {
            if (--depth == 0) {
              // @ts-ignore: exists
              out.__DESERIALIZE(keyStart, keyEnd, lastIndex, srcStart += 2, dst);
              console.log("Value (object): " + ptrToStr(lastIndex, srcStart));
              keyStart = 0;
              // while (isSpace(load<u16>(srcStart))) {
              //   /* empty */
              // }
              break;
            }
          } else if (code == BRACE_LEFT) depth++;
          srcStart += 2;
        }
      } else if (code == BRACKET_LEFT) {
        lastIndex = srcStart;
        depth++;
        srcStart += 2;
        while (srcStart < srcEnd) {
          const code = load<u16>(srcStart);
          if (code == BRACKET_RIGHT) {
            if (--depth == 0) {
              // @ts-ignore: exists
              out.__DESERIALIZE(keyStart, keyEnd, lastIndex, srcStart, dst);
              console.log("Value (array): " + ptrToStr(lastIndex, srcStart));
              keyStart = 0;
              while (isSpace(load<u16>((srcStart += 2)))) {
                /* empty */
              }
              break;
            }
          } else if (code == BRACKET_LEFT) depth++;
          srcStart += 2;
        }
      } else if (code == CHAR_T) {
        if (load<u64>(srcStart) == 28429475166421108) {
          // @ts-ignore: exists
          out.__DESERIALIZE(keyStart, keyEnd, srcStart, (srcStart += 8), dst);
          console.log("Value (bool): " + ptrToStr(srcStart - 8, srcStart));
          while (isSpace(load<u16>((srcStart += 2)))) {
            /* empty */
          }
          keyStart = 0;
        }
      } else if (code == CHAR_F) {
        if (load<u64>(srcStart, 2) == 28429466576093281) {
          // @ts-ignore: exists
          out.__DESERIALIZE(keyStart, keyEnd, srcStart, (srcStart += 10), dst);
          console.log("Value (bool): " + ptrToStr(srcStart - 10, srcStart));
          while (isSpace(load<u16>((srcStart += 2)))) {
            /* empty */
          }
          keyStart = 0;
        }
      } else if (code == CHAR_N) {
        if (load<u64>(srcStart) == 30399761348886638) {
          // @ts-ignore: exists
          out.__DESERIALIZE(keyStart, keyEnd, srcStart, (srcStart += 8), dst);
          console.log("Value (null): " + ptrToStr(srcStart - 8, srcStart));
          while (isSpace(load<u16>((srcStart += 2)))) {
            /* empty */
          }
        }
      }
    }
  }
  return out;
}

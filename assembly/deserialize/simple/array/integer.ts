import { isSpace } from "../../../util";
import { COMMA, BRACE_RIGHT, BRACKET_RIGHT } from "../../../custom/chars";
import { JSON } from "../../..";
import { ptrToStr } from "../../../util/ptrToStr";

export function deserializeIntegerArray<T extends number[]>(srcStart: usize, srcEnd: usize, dst: usize): T {
  const out = changetype<T>(dst || __new(offsetof<T>(), idof<T>()));
  let lastIndex: usize = 0;
  while (srcStart < srcEnd) {
    const code = load<u16>(srcStart);
    if (code - 48 <= 9 || code == 45) {
      lastIndex = srcStart;
      srcStart += 2;
      while (srcStart < srcEnd) {
        const code = load<u16>(srcStart);
        if (code == COMMA || code == BRACKET_RIGHT || isSpace(code)) {
          console.log("element: " + ptrToStr(lastIndex, srcStart))
          // out.push(JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
          // while (isSpace(load<u16>((srcStart += 2)))) {
          //   /* empty */
          // }
          break;
        }
        srcStart += 2;
      }
    }
    srcStart += 2;
  }
  return out;
}

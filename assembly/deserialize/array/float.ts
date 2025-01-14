import { isSpace } from "util/string";
import { unsafeCharCodeAt } from "../../custom/util";
import { COMMA, BRACKET_RIGHT } from "../../custom/chars";
import { deserializeFloat } from "../float";

// @ts-ignore: Decorator valid here
@inline export function deserializeFloatArray<T extends number[]>(data: string): T {
    const result = instantiate<T>();
    let lastPos = 0;
    let i = 1;
    let awaitingParse = false;
    for (; i < data.length; i++) {
      const char = unsafeCharCodeAt(data, i);
      if (lastPos === 0 && ((char >= 48 && char <= 57) || char === 45)) {
        awaitingParse = true;
        lastPos = i;
      } else if (awaitingParse && (isSpace(char) || char == COMMA || char == BRACKET_RIGHT) && lastPos > 0) {
        awaitingParse = false;
        result.push(deserializeFloat<valueof<T>>(data.slice(lastPos, i)));
        lastPos = 0;
      }
    }
    return result;
  }
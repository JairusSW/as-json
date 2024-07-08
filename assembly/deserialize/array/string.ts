import { BACK_SLASH, QUOTE } from "../../custom/chars";
import { unsafeCharCodeAt } from "../../custom/util";
import { deserializeString } from "../string";

// @ts-ignore: Decorator valid here
@inline export function deserializeStringArray(data: string): string[] {
  const result: string[] = [];
  let lastPos = 0;
  let instr = false;
  let escaping = false;
  for (let i = 1; i < data.length - 1; i++) {
    const char = unsafeCharCodeAt(data, i);
    if (char === BACK_SLASH && !escaping) {
      escaping = true;
    } else {
      if (char === QUOTE && !escaping) {
        if (instr === false) {
          instr = true;
          lastPos = i;
        } else {
          instr = false;
          result.push(deserializeString(data, lastPos, i));
        }
      }
      escaping = false;
    }
  }
  return result;
}
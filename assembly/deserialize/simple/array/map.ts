import { BRACE_LEFT, BRACE_RIGHT } from "../../../custom/chars";
import { JSON } from "../../..";
import { unsafeCharCodeAt } from "../../../custom/util";

export function deserializeMapArray<T extends Map<any, any>[]>(srcStart: usize, srcEnd: usize, dst: usize): T {
  const out = instantiate<T>();
  let lastPos: usize = 2;
  let depth: u32 = 0;
  while (srcStart < srcEnd) {
    
  }
  return out;
}

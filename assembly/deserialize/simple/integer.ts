import { snip_fast } from "../../custom/util";
import { strToInt } from "../../util/strToInt";

// @ts-ignore: Decorator valid here
@inline export function deserializeInteger<T>(data: string): T {
  // @ts-ignore
  return snip_fast<T>(data);
}

// @ts-ignore: Decorator valid here
@inline export function deserializeInteger_NEW<T>(srcStart: usize, srcEnd: usize): T {
  return strToInt<T>(srcStart, srcEnd);
}
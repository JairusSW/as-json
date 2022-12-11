import { StringSink } from "as-string-sink/assembly";
import { isSpace } from "assemblyscript/std/assembly/util/string";
import { backSlashCode, quoteCode } from "./chars";
import { u128, u128Safe, u256, u256Safe, i128, i128Safe, i256Safe } from "as-bignum/assembly";

// @ts-ignore
@inline
export function isBigNum<T>(): boolean {
  if (idof<T>() == idof<u128>()) return true;
  if (idof<T>() == idof<u128Safe>()) return true;
  if (idof<T>() == idof<u256>()) return true;
  if (idof<T>() == idof<u256Safe>()) return true;
  if (idof<T>() == idof<i128>()) return true;
  if (idof<T>() == idof<i128Safe>()) return true;
  if (idof<T>() == idof<i256Safe>()) return true;
  return false;
}

// @ts-ignore
@inline
export function unsafeCharCodeAt(data: string, pos: i32): i32 {
  return load<u16>(changetype<usize>(data) + ((<usize>pos) << 1));
}

export function removeWhitespace(data: string): string {
  const result = new StringSink();
  let instr = false;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    if (instr === false && char === quoteCode) instr = true;
    else if (
      instr === true &&
      char === quoteCode &&
      data.charCodeAt(i - 1) !== backSlashCode
    )
      instr = false;

    if (instr === false) {
      if (!isSpace(char)) result.write(data.charAt(i));
    } else {
      result.write(data.charAt(i));
    }
  }
  return result.toString();
}

// @ts-ignore
@inline
export function escapeChar(char: string): string {
  switch (unsafeCharCodeAt(char, 0)) {
    case 0x22: return '\\"';
    case 0x5C: return "\\\\";
    case 0x08: return "\\b";
    case 0x0A: return "\\n";
    case 0x0D: return "\\r";
    case 0x09: return "\\t";
    case 0x0C: return "\\f";
    case 0x0B: return "\\u000b";
    default: return char;
  }
}
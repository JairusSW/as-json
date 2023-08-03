import { StringSink } from "as-string-sink/assembly";
import { isSpace } from "util/string";
import { backSlashCode, quoteCode } from "./chars";

// @ts-ignore
@inline
export function unsafeCharCodeAt(data: string, pos: i32): i32 {
  return load<u16>(changetype<usize>(data) + ((<usize>pos) << 1));
}

// @ts-ignore
@inline
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
    case 0x22:
      return '\\"';
    case 0x5c:
      return "\\\\";
    case 0x08:
      return "\\b";
    case 0x0a:
      return "\\n";
    case 0x0d:
      return "\\r";
    case 0x09:
      return "\\t";
    case 0x0c:
      return "\\f";
    case 0x0b:
      return "\\u000b";
    default:
      return char;
  }
}

/**
 * A terrible function which finds the depth of a certain array.
 * Suffers no overhead besides function calling and a if/else.
 * @returns depth of array
 */

// @ts-ignore
@inline
export function getArrayDepth<T>(depth: i32 = 1): i32 {
  // @ts-ignore
  if (!isArray<T>()) {
    return 0;
    // @ts-ignore
  } else if (isArray<valueof<T>>()) {
    depth++;
    // @ts-ignore
    return getArrayDepth<valueof<T>>(depth);
  } else {
    return depth;
  }
}

/**
 * Implementation of ATOI. Can be much much faster with SIMD.
 * Benchmark: 40-46m ops/s
 */

// @ts-ignore
@inline
export function atoi_fast<T extends number>(str: string, offset: i32 = 0): T {
  // @ts-ignore
  let val: T = 0;
  let firstChar = load<u16>(changetype<usize>(str) + <usize>offset);
  if (firstChar === 45) {
    offset += 2;
    for (; offset < str.length << 1; offset += 2) {
      // @ts-ignore
      val =
        (val << 1) +
        (val << 3) +
        (load<u16>(changetype<usize>(str) + <usize>offset) - 48);
      // We use load because in this case, there is no need to have bounds-checking
    }
    // @ts-ignore
    val = -val;
  } else {
    for (; offset < str.length << 1; offset += 2) {
      // @ts-ignore
      val =
        (val << 1) +
        (val << 3) +
        (load<u16>(changetype<usize>(str) + <usize>offset) - 48);
      // We use load because in this case, there is no need to have bounds-checking
    }
  }
  return val;
}

/**
 * Parses an integer using atoi_fast and applies the appended exponential number to it as scientific notation.
 * Benchmark: Hovers around 30m ops/s
 * Only safe if the string is valid.
 * @param str integer to parse. example: 123e1, 123e-1, 123E100
 * @returns
 */

// @ts-ignore
@inline
export function parseSciInteger<T extends number>(str: string): T {
  // @ts-ignore
  let val: T = 0;
  let offset = 0;
  let firstChar = load<u16>(changetype<usize>(str) + <usize>offset);
  if (firstChar === 45) {
    offset = 2;
  }
  for (; offset < str.length << 1; offset += 2) {
    const char = load<u16>(changetype<usize>(str) + <usize>offset);
    if (char === 101 || char === 69) {
      const char = load<u16>(changetype<usize>(str) + <usize>(offset += 2));
      if (char === 45) {
        // @ts-ignore
        val /= sciNote<T>(atoi_fast<T>(str, (offset += 2)));
        // @ts-ignore
        return val;
      } else {
        // @ts-ignore
        val *= sciNote<T>(atoi_fast<T>(str, offset));
        // @ts-ignore
        return val;
      }
    }
    // @ts-ignore
    val = (val << 1) + (val << 3) + (char - 48);
    // We use load because in this case, there is no need to have bounds-checking
  }
  if (firstChar === 45) {
    val = -val;
  }
  return val;
}

// @ts-ignore
@inline
function sciNote<T extends number>(num: T): T {
  let res = 1;
  // @ts-ignore
    if (num > 0) {
      for (let i: T = 0; i < num; i++) {
        res *= 10;
      }
    } else {
      for (let i: T = 0; i < num; i++) {
        res /= 10;
      }
    }
  // @ts-ignore
  return res;
}
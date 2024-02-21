import { StringSink } from "as-string-sink/assembly";
import { isSpace } from "util/string";
import { backSlashCode, quoteCode } from "./chars";

// @ts-ignore: Decorator
@inline export function unsafeCharCodeAt(data: string, pos: i32): i32 {
  return load<u16>(changetype<usize>(data) + ((<usize>pos) << 1));
}

// @ts-ignore: Decorator
@inline export function removeWhitespace(data: string): string {
  const result = new StringSink();
  let instr = false;
  for (let i = 0; i < data.length; i++) {
    const char = unsafeCharCodeAt(data, i);
    if (instr === false && char === quoteCode) instr = true;
    else if (
      instr === true && char === quoteCode
      && unsafeCharCodeAt(data, i - 1) !== backSlashCode
    ) instr = false;

    if (instr === false) {
      if (!isSpace(char)) result.write(data.charAt(i));
    } else {
      result.write(data.charAt(i));
    }
  }
  return result.toString();
}

// @ts-ignore: Decorator
@inline export function escapeChar(char: string): string {
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

// @ts-ignore: Decorator
@inline export function getArrayDepth<T extends ArrayLike>(depth: i32 = 1): i32 {
  if (!isArray<T>()) {
    return 0;
  } else if (isArray<valueof<T>>()) {
    depth++;
    return getArrayDepth<valueof<T>>(depth);
  } else {
    return depth;
  }
}

/** Scientific Notation Integer Parsing - SNIP
 * This is absolutely the fastest algorithm I could think of while adding full support for Scientific Notation
 * Loads 32 bits and retrieves the high/low bits.
 * The reason why we only load 4 bytes at a time is that numbers in the 32-bit range are 7 chars long at most.
 * Using SIMD or 64 bit loads would only work well when parsing large 128+ numbers.
 * 
 * Here are some benchmarks
 * Parsing: "12345" 
 * Results are spread over 5000ms
 * 
 * SNIP: 270M iterations
 * ATOI: 285M iterations
 * ParseInt: 176M iterations 
 * 
 * @param str - Any number. Can include scientific notation.
*/
// @ts-ignore: Decorator
@inline export function snip_fast<T extends number>(str: string, len: u32 = 0, offset: u32 = 0): T {
  if (isSigned<T>()) {
    const firstChar: u32 = load<u16>(changetype<usize>(str));
    if (firstChar === 48) return 0 as T;
    const isNegative = firstChar === 45; // Check if the number is negative
    let val: T = 0 as T;
    if (len == 0) len = u32(str.length << 1);
    if (isNegative) {
      offset += 2;
      if (len >= 4) {
        // 32-bit route
        for (; offset < (len - 3); offset += 4) {
          const ch = load<u32>(changetype<usize>(str) + <usize>offset);
          const low = ch & 0xFFFF;
          const high = ch >> 16;
          // 9 is 57. The highest group of two numbers is 114, so if a e or an E is included, this will fire.
          if (low > 57) {
            // The first char (f) is E or e
            // We push the offset up by two and apply the notation.
            if (load<u16>(changetype<usize>(str) + <usize>offset + 2) == 45) {
              return -(val / (10 ** (__atoi_fast<u32>(str, offset + 6, offset + 8) - 1))) as T;
            } else {
              // Inlined this operation instead of using a loop
              return -(val * (10 ** (__atoi_fast<u32>(str, offset + 2, offset + 4) + 1))) as T;
            }
          } else if (high > 57) {
            // The first char (f) is E or e
            // We push the offset up by two and apply the notation.
            if (load<u16>(changetype<usize>(str) + <usize>offset + 4) == 45) {
              return -(val / (10 ** (__atoi_fast<u32>(str, offset + 6, offset + 8) - 1))) as T;
            } else {
              // Inlined this operation instead of using a loop
              return -(val * (10 ** (__atoi_fast<u32>(str, offset + 4, offset + 6) + 1))) as T;
            }
          } else {
            val = (val * 100 + ((low - 48) * 10) + (high - 48)) as T;
          }
        }
      }
      // Finish up the remainder with 16 bits.
      for (; offset < len; offset += 2) {
        const ch = load<u16>(changetype<usize>(str) + <usize>offset);
        // 9 is 57. E and e are larger. Assumes valid JSON.
        if (ch > 57) {
          // The first char (f) is E or e
          // We push the offset up by two and apply the notation.
          if (load<u16>(changetype<usize>(str) + <usize>offset + 2) == 45) {
            return -(val / (10 ** (__atoi_fast<u32>(str, offset + 6, offset + 8) - 1))) as T;
          } else {
            // Inlined this operation instead of using a loop
            return -(val * (10 ** (__atoi_fast<u32>(str, offset + 2, offset + 4) + 1))) as T;
          }
        } else {
          val = (val * 10) + (ch - 48) as T;
        }
      }
      return -val as T;
    } else {
      if (len >= 4) {
        // Duplet 16 bit lane load
        for (; offset < (len - 3); offset += 4) {
          const ch = load<u32>(changetype<usize>(str) + <usize>offset);
          const low = ch & 0xFFFF;
          const high = ch >> 16;
          // 9 is 57. The highest group of two numbers is 114, so if a e or an E is included, this will fire.
          if (low > 57) {
            // The first char (f) is E or e
            // We push the offset up by two and apply the notation.
            if (load<u16>(changetype<usize>(str) + <usize>offset + 2) == 45) {
              return (val / (10 ** (__atoi_fast<u32>(str, offset + 6, offset + 8) - 1))) as T;
            } else {
              // Inlined this operation instead of using a loop
              return (val * (10 ** (__atoi_fast<u32>(str, offset + 2, offset + 4) + 1))) as T;
            }
          } else if (high > 57) {
            if (load<u16>(changetype<usize>(str) + <usize>offset + 4) == 45) {
              return (val / (10 ** (__atoi_fast<u32>(str, offset + 6, offset + 8) - 1))) as T;
            } else {
              // Inlined this operation instead of using a loop
              return (val * (10 ** (__atoi_fast<u32>(str, offset + 4, offset + 6) + 1))) as T;
            }
          } else {
            // Optimized with multiplications and shifts.
            val = (val * 100 + ((low - 48) * 10) + (high - 48)) as T;
          }
        }
      }
      // Cover the remaining numbers with 16 bit loads.
      for (; offset < len; offset += 2) {
        const ch = load<u16>(changetype<usize>(str) + <usize>offset);
        // 0's char is 48 and 9 is 57. Anything above this range would signify an exponent (e or E).
        // e is 101 and E is 69.
        if (ch > 57) {
          if (load<u16>(changetype<usize>(str) + <usize>offset + 2) == 45) {
            val = (val / (10 ** (__atoi_fast<u32>(str, offset + 6, offset + 8) - 1))) as T;
          } else {
            // Inlined this operation instead of using a loop
            val = (val * (10 ** (__atoi_fast<u32>(str, offset + 2, offset + 4) + 1))) as T;
          }
          return val as T;
        } else {
          val = (val * 10) + (ch - 48) as T;
        }
      }
      return val as T;
    }
  } else {
    const firstChar: u32 = load<u16>(changetype<usize>(str));
    if (firstChar === 48) return 0 as T;
    let val: T = 0 as T;
    if (len == 0) len = u32(str.length << 1);
    if (len >= 4) {
      // Duplet 16 bit lane load
      for (; offset < (len - 3); offset += 4) {
        const ch = load<u32>(changetype<usize>(str) + <usize>offset);
        const low = ch & 0xFFFF;
        const high = ch >> 16;
        // 9 is 57. The highest group of two numbers is 114, so if a e or an E is included, this will fire.
        if (low > 57) {
          // The first char (f) is E or e
          // We push the offset up by two and apply the notation.
          if (load<u16>(changetype<usize>(str) + <usize>offset + 2) == 45) {
            return (val / (10 ** (__atoi_fast<u32>(str, offset + 6, offset + 8) - 1))) as T;
          } else {
            // Inlined this operation instead of using a loop
            return (val * (10 ** (__atoi_fast<u32>(str, offset + 2, offset + 4) + 1))) as T;
          }
        } else if (high > 57) {
          if (load<u16>(changetype<usize>(str) + <usize>offset + 4) == 45) {
            return (val / (10 ** (__atoi_fast<u32>(str, offset + 6, offset + 8) - 1))) as T;
          } else {
            // Inlined this operation instead of using a loop
            return (val * (10 ** (__atoi_fast<u32>(str, offset + 4, offset + 6) + 1))) as T;
          }
        } else {
          // Optimized with multiplications and shifts.
          val = (val * 100 + ((low - 48) * 10) + (high - 48)) as T;
        }
      }
    }
    // Cover the remaining numbers with 16 bit loads.
    for (; offset < len; offset += 2) {
      const ch = load<u16>(changetype<usize>(str) + <usize>offset);
      // 0's char is 48 and 9 is 57. Anything above this range would signify an exponent (e or E).
      // e is 101 and E is 69.
      if (ch > 57) {
        if (load<u16>(changetype<usize>(str) + <usize>offset + 2) == 45) {
          return (val / (10 ** (__atoi_fast<u32>(str, offset + 6, offset + 8) - 1))) as T;
        } else {
          // Inlined this operation instead of using a loop
          return (val * (10 ** (__atoi_fast<u32>(str, offset + 2, offset + 4) + 1))) as T;
        }
      } else {
        val = (val * 10) + (ch - 48) as T;
      }
    }
    return val as T;
  }
}

/**
 * Implementation of ATOI. Can be much much faster with SIMD.
 */

// @ts-ignore
@global @inline export function __atoi_fast<T extends number>(str: string, start: u32 = 0, end: u32 = 0): T {
  // @ts-ignore
  let val: T = 0;
  if (!end) end = start + u32(str.length << 1);
  if (isSigned<T>()) {
    // Negative path
    if (load<u16>(changetype<usize>(str) + <usize>start) === 45) {
      start += 2;
      for (; start < end; start += 2) {
        val = (val * 10) + (load<u16>(changetype<usize>(str) + <usize>start) - 48) as T;
      }
      return -val as T;
    } else {
      for (; start < end; start += 2) {
        val = ((val * 10) + (load<u16>(changetype<usize>(str) + <usize>start) - 48)) as T;
      }
      return val as T;
    }
  } else {
    for (; start < end; start += 2) {
      val = ((val * 10) + (load<u16>(changetype<usize>(str) + <usize>start) - 48)) as T;
    }
    return val as T;
  }
}

/**
 * Parses an integer using __atoi_fast and applies the appended exponential number to it as scientific notation.
 * Benchmark: Hovers around 30m ops/s
 * Only safe if the string is valid.
 * @param str integer to parse. example: 123e1, 123e-1, 123E100
 * @returns
 */

// @ts-ignore
@inline export function parseSciInteger<T extends number>(str: string): T {
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
        val /= sciNote<T>(__atoi_fast<T>(str, (offset += 2)));
        // @ts-ignore
        return val;
      } else {
        // @ts-ignore
        val *= sciNote<T>(__atoi_fast<T>(str, offset));
        // @ts-ignore
        return val;
      }
    }
    // @ts-ignore
    val = (val << 1) + (val << 3) + (char - 48);
    // We use load because in this case, there is no need to have bounds-checking
  }
  if (firstChar === 45) {
    val = -val as T;
  }
  return val;
}

// @ts-ignore
@inline function sciNote<T extends number>(num: T): T {
  let res = 1;
  // @ts-ignore
  if (num > 0) {
    for (let i: T = <T>0; i < num; i++) {
      res *= 10;
    }
  } else {
    for (let i: T = <T>0; i < num; i++) {
      res /= 10;
    }
  }
  // @ts-ignore
  return res;
}

// @ts-ignore
@inline function equalsSlice(p1_data: string, p1_start: i32, p1_end: i32, p2_data: string, p2_start: i32, p2_end: i32): boolean {
  const p1_len = p1_end - p1_start;
  const p2_len = p2_end - p2_start;
  if (p1_len != p2_len) return false;
  if (p1_len == 2) {
    return load<u16>(changetype<usize>(p1_data) + p1_start) == load<u16>(changetype<usize>(p2_data) + p2_start)
  }
  return memory.compare(changetype<usize>(p1_data) + p1_start, changetype<usize>(p2_data) + p2_start, p1_len) === 0;
}

// @ts-ignore
@inline export function containsCodePoint(str: string, code: u32, start: i32, end: i32): bool {
  for (let i = start; i <= end; i++) {
    if (unsafeCharCodeAt(str, i) == code) return true;
  }
  return false;
}

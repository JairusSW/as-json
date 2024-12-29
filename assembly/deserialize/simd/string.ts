import { OBJECT, TOTAL_OVERHEAD } from "rt/common";
import { BACK_SLASH } from "../../custom/chars";
import { JSON } from "../..";

const ESCAPE_TABLE = memory.data<u8>([
  0, 0, 0, 0, 0, 0, 0, 0, // 0-7
  0, 0, 0, 0, 0, 0, 0, 0, // 8-15
  0, 0, 0, 0, 0, 0, 0, 0, // 16-23
  0, 0, 0, 0, 0, 0, 0, 0, // 24-31
  0, 0, 34, 0, 0, 0, 0, 0, // 32-39
  0, 0, 0, 0, 0, 0, 0, 0, // 40-47
  0, 0, 0, 0, 0, 0, 0, 0, // 48-55
  0, 0, 0, 0, 0, 0, 0, 0, // 56-63
  0, 0, 0, 0, 0, 0, 0, 0, // 64-71
  0, 0, 0, 0, 0, 0, 0, 0, // 72-79
  0, 0, 0, 0, 0, 0, 0, 0, // 80-87
  0, 0, 0, 0, 92, 0, 0, 0, // 88-95
  0, 0, 8, 0, 0, 0, 12, 0, // 96-103
  0, 0, 0, 0, 0, 0, 10, 0, // 104-111
  0, 0, 13, 0, 9, 117, 0, 0, // 112-119
  0, 0, 0, 0, 0, 0, 0, 0, // 120-127
  0, 0, 0, 0, 0, 0, 0, 0, // 128-135
  0, 0, 0, 0, 0, 0, 0, 0, // 136-143
  0, 0, 0, 0, 0, 0, 0, 0, // 144-151
]);

const ESCAPE_HEX_TABLE = memory.data<u8>([
  0, 1, 2, 3, 4, 5, 6, 7, // 0-7
  8, 9, 0, 0, 0, 0, 0, 0, // 8-15
  0, 0, 0, 0, 0, 0, 0, 0, // 16-23
  0, 0, 0, 0, 0, 0, 0, 0, // 24-31
  0, 0, 0, 0, 0, 0, 0, 0, // 32-39
  0, 0, 0, 0, 0, 0, 0, 0, // 40-47
  0, 10, 11, 12, 13, 14, 15, // 48-54
]) - 48;

const SPLAT_92 = i16x8.splat(92); /* \ */

/**
 * Deserializes strings back into into their original form using SIMD operations
 * @param src string to deserialize
 * @param dst buffer to write to
 * @returns number of bytes written
 */
// @ts-ignore: Decorator
@inline export function deserializeString_SIMD(src: string, dst: usize): usize {
  let src_ptr = changetype<usize>(src) + 2;
  let dst_ptr = changetype<usize>(dst);

  const src_end = src_ptr + changetype<OBJECT>(changetype<usize>(src) - TOTAL_OVERHEAD).rtSize - 4;
  const src_end_15 = src_end - 15;

  while (src_ptr < src_end_15) {
    const block = v128.load(src_ptr);
    v128.store(dst_ptr, block);

    const backslash_indices = i16x8.eq(block, SPLAT_92);
    let mask = i16x8.bitmask(backslash_indices);

    while (mask != 0) {
      const lane_index = ctz(mask) << 1;
      const dst_offset = dst_ptr + lane_index;
      const src_offset = src_ptr + lane_index;
      const code = load<u16>(src_offset, 2);

      mask &= mask - 1;
      if (code == 117 && load<u32>(src_offset, 4) == 3145776) {
        const block = load<u32>(src_offset, 8);
        const codeA = block & 0xFFFF;
        const codeB = (block >> 16) & 0xFFFF;
        const escapedA = load<u8>(ESCAPE_HEX_TABLE + codeA);
        const escapedB = load<u8>(ESCAPE_HEX_TABLE + codeB);
        const escaped = (escapedA << 4) + escapedB;
        // console.log("Escaped:");
        // console.log("  a: " + escapedA.toString())
        // console.log("  b: " + escapedB.toString());
        // console.log("  c: " + escaped.toString());
        // console.log("  o: " + (dst_ptr - dst).toString());
        // console.log("  d: " + (dst_offset - dst).toString())
        // console.log("  l: " + (lane_index).toString())
        store<u16>(dst_offset, escaped);
        v128.store(dst_offset, v128.load(src_offset, 4), 2);
        if (lane_index >= 6) {
          const bytes_left = lane_index - 4;
          src_ptr += bytes_left;
          dst_ptr += bytes_left;
          // console.log("  e: " + (bytes_left).toString())
        }
        dst_ptr -= 10;
      } else {
        const escaped = load<u8>(ESCAPE_TABLE + code);
        store<u16>(dst_offset, escaped);
        v128.store(dst_offset, v128.load(src_offset, 4), 2);
        // console.log("Escaped:");
        if (lane_index == 14) {
          src_ptr += 2;
        } else {
          dst_ptr -= 2;
        }
      }
    }

    src_ptr += 16;
    dst_ptr += 16;

    // console.log("src: " + (src_ptr - changetype<usize>(src)).toString());
    // console.log("dst: " + (dst_ptr - dst).toString());
  }
  while (src_ptr < src_end) {
    let code = load<u16>(src_ptr);
    if (code == BACK_SLASH) {
      code = load<u16>(ESCAPE_TABLE + load<u8>(src_ptr, 2));
      if (code == 117 && load<u32>(src_ptr, 4) == 3145776) {
        const block = load<u32>(src_ptr, 8);
        const codeA = block & 0xFFFF;
        const codeB = (block >> 16) & 0xFFFF;
        const escapedA = load<u8>(ESCAPE_HEX_TABLE + codeA);
        const escapedB = load<u8>(ESCAPE_HEX_TABLE + codeB);
        const escaped = (escapedA << 4) + escapedB;
        store<u16>(dst_ptr, escaped);
        dst_ptr += 2;
        src_ptr += 12;
      } else {
        store<u16>(dst_ptr, code);
        dst_ptr += 2;
        src_ptr += 4;
      }
    } else {
      store<u16>(dst_ptr, code);
      dst_ptr += 2;
      src_ptr += 2;
    }
  }

  return dst_ptr - dst;
}
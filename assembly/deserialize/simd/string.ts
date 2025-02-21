import { BACK_SLASH } from "../../custom/chars";
import { DESERIALIZE_ESCAPE_TABLE, ESCAPE_HEX_TABLE } from "../../globals/tables";

const SPLAT_92 = i16x8.splat(92); /* \ */

/**
 * Deserializes strings back into into their original form using SIMD operations
 * @param src string to deserialize
 * @param dst buffer to write to
 * @returns number of bytes written
 */
// todo: optimize and stuff. it works, its not pretty. ideally, i'd like this to be (nearly) branchless
export function deserializeString_SIMD(srcStart: usize, srcEnd: usize, dst: usize): usize {
  let src_ptr = srcStart + 2;
  let dst_ptr = changetype<usize>(dst);

  const src_end = srcEnd - 2;
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
        const codeA = block & 0xffff;
        const codeB = (block >> 16) & 0xffff;
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
        const escaped = load<u8>(DESERIALIZE_ESCAPE_TABLE + code);
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
      code = load<u16>(DESERIALIZE_ESCAPE_TABLE + load<u8>(src_ptr, 2));
      if (code == 117 && load<u32>(src_ptr, 4) == 3145776) {
        const block = load<u32>(src_ptr, 8);
        const codeA = block & 0xffff;
        const codeB = (block >> 16) & 0xffff;
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

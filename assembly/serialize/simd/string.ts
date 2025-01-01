import { OBJECT, TOTAL_OVERHEAD } from "rt/common";
import { BACK_SLASH } from "../../custom/chars";
import { SERIALIZE_ESCAPE_TABLE } from "../../globals/tables";

const SPLAT_34 = i16x8.splat(34); /* " */
const SPLAT_92 = i16x8.splat(92); /* \ */

const SPLAT_32 = i16x8.splat(32); /* [ESC] */
const SPLAT_0 = i16x8.splat(0); /* 0 */

/**
 * Serializes strings into their JSON counterparts using SIMD operations
 * @param src string to serialize
 * @param dst buffer to write to
 * @returns number of bytes written
 */
export function serializeString_SIMD(src: string, dst: usize): usize {
  let src_ptr = changetype<usize>(src);
  let dst_ptr = changetype<usize>(dst) + 2;

  const src_end = src_ptr + changetype<OBJECT>(changetype<usize>(src) - TOTAL_OVERHEAD).rtSize;
  const src_end_15 = src_end - 15;

  store<u8>(changetype<usize>(dst), 34); /* " */

  while (src_ptr < src_end_15) {
    const block = v128.load(src_ptr);
    v128.store(dst_ptr, block);

    const backslash_indices = i16x8.eq(block, SPLAT_92);
    const quote_indices = i16x8.eq(block, SPLAT_34);
    const escape_indices = i16x8.lt_u(block, SPLAT_32);
    const sieve = v128.or(v128.or(backslash_indices, quote_indices), escape_indices);

    let mask = i16x8.bitmask(sieve);

    while (mask != 0) {
      const lane_index = ctz(mask) << 1;
      const dst_offset = dst_ptr + lane_index;
      const src_offset = src_ptr + lane_index;
      const code = load<u16>(src_offset) << 2;
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + code);

      mask &= mask - 1;

      if ((escaped & 0xffff) != BACK_SLASH) {
        store<u64>(dst_offset, 13511005048209500);
        store<u32>(dst_offset, escaped, 8);
        v128.store(dst_offset, v128.load(src_offset, 2), 12);
        dst_ptr += 10;
      } else {
        store<u32>(dst_offset, escaped);
        v128.store(dst_offset, v128.load(src_offset, 2), 4);
        dst_ptr += 2;
      }
    }

    src_ptr += 16;
    dst_ptr += 16;
  }

  let rem = src_end - src_ptr;

  if (rem & 8) {
    const block = v128.load64_zero(src_ptr);
    v128.store64_lane(dst_ptr, block, 0);

    const backslash_indices = i16x8.eq(block, SPLAT_92);
    const quote_indices = i16x8.eq(block, SPLAT_34);
    const escape_indices = i16x8.lt_u(block, SPLAT_32);
    const zero_indices = i16x8.eq(block, SPLAT_0);
    const sieve = v128.and(v128.or(v128.or(backslash_indices, quote_indices), escape_indices), v128.not(zero_indices));

    let mask = i16x8.bitmask(sieve);
    while (mask != 0) {
      let lane_index = ctz(mask) << 1;
      const dst_offset = dst_ptr + lane_index;
      const src_offset = src_ptr + lane_index;
      const code = load<u16>(src_offset) << 2;
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + code);
      mask &= mask - 1;

      if ((escaped & 0xffff) != BACK_SLASH) {
        store<u64>(dst_offset, 13511005048209500);
        store<u32>(dst_offset, escaped, 8);
        while (lane_index < 6) {
          store<u8>(dst_ptr + lane_index, load<u8>(src_ptr + lane_index, 2), 12);
          lane_index += 2;
        }
        dst_ptr += 10;
      } else {
        store<u32>(dst_offset, escaped);

        while (lane_index < 6) {
          store<u8>(dst_ptr + lane_index, load<u8>(src_ptr + lane_index, 2), 4);
          lane_index += 2;
        }
        dst_ptr += 2;
      }
    }

    dst_ptr += 8;
    src_ptr += 8;
  }
  if (rem & 4) {
    const block = load<u32>(src_ptr);
    const codeA = block & 0xffff;
    const codeB = (block >> 16) & 0xffff;

    if (codeA == 92 || codeA == 34 || codeA < 32) {
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + (codeA << 2));

      if ((escaped & 0xffff) != BACK_SLASH) {
        store<u64>(dst_ptr, 13511005048209500);
        store<u32>(dst_ptr, escaped, 8);
        dst_ptr += 12;
      } else {
        store<u32>(dst_ptr, escaped);
        dst_ptr += 4;
      }
    } else {
      store<u16>(dst_ptr, codeA);
      dst_ptr += 2;
    }

    if (codeB == 92 || codeB == 34 || codeB < 32) {
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + (codeB << 2));

      if ((escaped & 0xffff) != BACK_SLASH) {
        store<u64>(dst_ptr, 13511005048209500);
        store<u32>(dst_ptr, escaped, 8);
        dst_ptr += 12;
      } else {
        store<u32>(dst_ptr, escaped);
        dst_ptr += 4;
      }
    } else {
      store<u16>(dst_ptr, codeB);
      dst_ptr += 2;
    }

    src_ptr += 4;
  }
  if (rem & 2) {
    const code = load<u16>(src_ptr);
    if (code == 92 || code == 34 || code < 32) {
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + (code << 2));

      if ((escaped & 0xffff) != BACK_SLASH) {
        store<u64>(dst_ptr, 13511005048209500);
        store<u32>(dst_ptr, escaped, 8);
        dst_ptr += 12;
      } else {
        store<u32>(dst_ptr, escaped);
        dst_ptr += 4;
      }
    } else {
      store<u16>(dst_ptr, code);
      dst_ptr += 2;
    }
  }

  store<u8>(dst_ptr, 34); /* " */
  return dst_ptr - changetype<usize>(dst) + 2;
}

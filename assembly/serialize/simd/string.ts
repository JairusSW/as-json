import { bs } from "as-bs";
import { BACK_SLASH } from "../../custom/chars";
import { SERIALIZE_ESCAPE_TABLE } from "../../globals/tables";
import { OBJECT, TOTAL_OVERHEAD } from "rt/common";

const SPLAT_34 = i16x8.splat(34); /* " */
const SPLAT_92 = i16x8.splat(92); /* \ */

const SPLAT_32 = i16x8.splat(32); /* [ESC] */
const SPLAT_0 = i16x8.splat(0); /* 0 */

/**
 * Serializes strings into their JSON counterparts using SIMD operations
 * @param srcStart pointer to begin serializing at
 * @param srcEnd pointer to end serialization at
 */
export function serializeString_SIMD(src: string): void {
  const srcSize = changetype<OBJECT>(changetype<usize>(src) - TOTAL_OVERHEAD).rtSize;
  let srcStart = changetype<usize>(src);
  const srcEnd = srcStart + srcSize;
  bs.ensureSize(srcSize + 4);
  const srcEnd16 = srcEnd - 15;

  store<u8>(changetype<usize>(bs.offset), 34); /* " */
  bs.offset += 2;

  while (srcStart < srcEnd16) {
    const block = v128.load(srcStart);
    v128.store(bs.offset, block);

    const backslash_indices = i16x8.eq(block, SPLAT_92);
    const quote_indices = i16x8.eq(block, SPLAT_34);
    const escape_indices = i16x8.lt_u(block, SPLAT_32);
    const sieve = v128.or(v128.or(backslash_indices, quote_indices), escape_indices);

    let mask = i16x8.bitmask(sieve);

    while (mask != 0) {
      const lane_index = ctz(mask) << 1;
      const dst_offset = bs.offset + lane_index;
      const src_offset = srcStart + lane_index;
      const code = load<u16>(src_offset) << 2;
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + code);

      mask &= mask - 1;

      if ((escaped & 0xffff) != BACK_SLASH) {
        bs.ensureSize(10);
        store<u64>(dst_offset, 13511005048209500);
        store<u32>(dst_offset, escaped, 8);
        v128.store(dst_offset, v128.load(src_offset, 2), 12);
        bs.offset += 10;
      } else {
        bs.ensureSize(2);
        store<u32>(dst_offset, escaped);
        v128.store(dst_offset, v128.load(src_offset, 2), 4);
        bs.offset += 2;
      }
    }

    srcStart += 16;
    bs.offset += 16;
  }

  let rem = srcEnd - srcStart;

  if (rem & 8) {
    const block = v128.load64_zero(srcStart);
    v128.store64_lane(bs.offset, block, 0);

    const backslash_indices = i16x8.eq(block, SPLAT_92);
    const quote_indices = i16x8.eq(block, SPLAT_34);
    const escape_indices = i16x8.lt_u(block, SPLAT_32);
    const zero_indices = i16x8.eq(block, SPLAT_0);
    const sieve = v128.and(v128.or(v128.or(backslash_indices, quote_indices), escape_indices), v128.not(zero_indices));

    let mask = i16x8.bitmask(sieve);
    while (mask != 0) {
      let lane_index = ctz(mask) << 1;
      const dst_offset = bs.offset + lane_index;
      const src_offset = srcStart + lane_index;
      const code = load<u16>(src_offset) << 2;
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + code);
      mask &= mask - 1;

      if ((escaped & 0xffff) != BACK_SLASH) {
        bs.ensureSize(10);
        store<u64>(dst_offset, 13511005048209500);
        store<u32>(dst_offset, escaped, 8);
        while (lane_index < 6) {
          store<u8>(bs.offset + lane_index, load<u8>(srcStart + lane_index, 2), 12);
          lane_index += 2;
        }
        bs.offset += 10;
      } else {
        bs.ensureSize(2);
        store<u32>(dst_offset, escaped);

        while (lane_index < 6) {
          store<u8>(bs.offset + lane_index, load<u8>(srcStart + lane_index, 2), 4);
          lane_index += 2;
        }
        bs.offset += 2;
      }
    }

    bs.offset += 8;
    srcStart += 8;
  }
  if (rem & 4) {
    const block = load<u32>(srcStart);
    const codeA = block & 0xffff;
    const codeB = (block >> 16) & 0xffff;

    if (codeA == 92 || codeA == 34 || codeA < 32) {
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + (codeA << 2));

      if ((escaped & 0xffff) != BACK_SLASH) {
        bs.ensureSize(10);
        store<u64>(bs.offset, 13511005048209500);
        store<u32>(bs.offset, escaped, 8);
        bs.offset += 12;
      } else {
        bs.ensureSize(2);
        store<u32>(bs.offset, escaped);
        bs.offset += 4;
      }
    } else {
      store<u16>(bs.offset, codeA);
      bs.offset += 2;
    }

    if (codeB == 92 || codeB == 34 || codeB < 32) {
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + (codeB << 2));

      if ((escaped & 0xffff) != BACK_SLASH) {
        bs.ensureSize(10);
        store<u64>(bs.offset, 13511005048209500);
        store<u32>(bs.offset, escaped, 8);
        bs.offset += 12;
      } else {
        bs.ensureSize(2);
        store<u32>(bs.offset, escaped);
        bs.offset += 4;
      }
    } else {
      store<u16>(bs.offset, codeB);
      bs.offset += 2;
    }

    srcStart += 4;
  }
  if (rem & 2) {
    const code = load<u16>(srcStart);
    if (code == 92 || code == 34 || code < 32) {
      const escaped = load<u32>(SERIALIZE_ESCAPE_TABLE + (code << 2));

      if ((escaped & 0xffff) != BACK_SLASH) {
        bs.ensureSize(10);
        store<u64>(bs.offset, 13511005048209500);
        store<u32>(bs.offset, escaped, 8);
        bs.offset += 12;
      } else {
        bs.ensureSize(2);
        store<u32>(bs.offset, escaped);
        bs.offset += 4;
      }
    } else {
      store<u16>(bs.offset, code);
      bs.offset += 2;
    }
  }

  bs.offset += 2;
  store<u8>(bs.offset, 34); /* " */
}

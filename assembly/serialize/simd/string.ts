import { OBJECT, TOTAL_OVERHEAD } from "rt/common";

const ESCAPE_TABLE = memory.data<u16>([
  48,  48,  48,  49,  48,  50,  48,  51, // 0-7
  48,  52,  48,  53,  48,  54,  48,  55, // 8-15
  48,  56,  92, 116,  92, 110,  48,  98, // 16-23
  92, 102,  92, 114,  48, 101,  48, 102, // 24-31
  49,  48,  49,  49,  49,  50,  49,  51, // 32-39
  49,  52,  49,  53,  49,  54,  49,  55, // 40-47
  49,  56,  49,  57,  49,  97,  49,  98, // 48-55
  49,  99,  49, 100,  49, 101,  49, 102, // 56-63
   0,   0,   0,   0,  92,  34,   0,   0, // 64-71
   0,   0,   0,   0,   0,   0,   0,   0, // 72-79
   0,   0,   0,   0,   0,   0,   0,   0, // 80-87
   0,   0,   0,   0,   0,   0,   0,   0, // 88-95
   0,   0,   0,   0,   0,   0,   0,   0, // 96-103
   0,   0,   0,   0,   0,   0,   0,   0, // 104-111
   0,   0,   0,   0,   0,   0,   0,   0, // 112-119
   0,   0,   0,   0,   0,   0,   0,   0, // 120-127
   0,   0,   0,   0,   92,  92,   0,   0, // 128-135
   0,   0,   0,   0,   0,   0,   0,   0, // 136-143
   0,   0,   0,   0,   0,   0,   0,   0, // 144-151
]);

const SPLAT_34 = i16x8.splat(34); /* " */
const SPLAT_92 = i16x8.splat(92); /* \ */

const SPLAT_32 = i16x8.splat(32); /* [ESC] */

/**
 * Serializes strings into their JSON counterparts using SIMD operations
 * @param src string to serialize
 * @param dst buffer to write to
 * @returns number of bytes written
 */
// @ts-ignore: Decorator
@inline export function serializeString_SIMD(src: string, dst: usize): usize {
  let src_ptr = changetype<usize>(src);
  let dst_ptr = changetype<usize>(dst) + 2;

  const src_end = src_ptr + changetype<OBJECT>(changetype<usize>(src) - TOTAL_OVERHEAD).rtSize;
  const src_end_15 = src_end - 15;

  store<u8>(changetype<usize>(dst), 34); /* " */

  while (src_ptr < src_end_15) {
    const block = v128.load(src_ptr);

    const backslash_indices = i16x8.eq(block, SPLAT_92);
    const quote_indices = i16x8.eq(block, SPLAT_34);
    const escape_indices = i16x8.lt_u(block, SPLAT_32);
    const sieve = v128.or(v128.or(backslash_indices, quote_indices), escape_indices);

    v128.store(dst_ptr, block);

    let mask = i16x8.bitmask(sieve);

    while (mask != 0) {
      const lane_index = ctz(mask) << 1;
      const dst_offset = dst_ptr + lane_index;
      const src_offset = src_ptr + lane_index;
      const code = load<u16>(src_offset) << 2;
      const escaped = load<u32>(ESCAPE_TABLE + code);
      if (escaped < 6684764) {
        store<u64>(dst_offset, 13511005048209500);
        store<u32>(dst_offset, escaped, 8);
        v128.store(dst_offset, v128.load(src_offset, 2), 12);
        mask &= mask - 1;
        dst_ptr += 10;
      } else {
        store<u32>(dst_offset, escaped);
        v128.store(dst_offset, v128.load(src_offset, 2), 4);
        mask &= mask - 1;
        dst_ptr += 2;
      }
    }

    src_ptr += 16;
    dst_ptr += 16;
  }

  while (src_ptr < src_end) {
    const char_code = load<u16>(src_ptr);
    if (char_code == 92 || char_code == 34 || char_code < 32) {
      const escaped = load<u32>(ESCAPE_TABLE + (char_code << 2));
      store<u32>(dst_ptr, escaped);
      dst_ptr += 2;
    }
    store<u16>(dst_ptr, char_code);
    dst_ptr += 2;
    src_ptr += 2;
  }

  store<u8>(dst_ptr, 34); /* " */
  return dst_ptr - changetype<usize>(dst) + 2;
}

import { OBJECT, TOTAL_OVERHEAD } from "rt/common";

const ESCAPE_TABLE = memory.data<u16>([
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 0-3
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 4-7
  
  92, 98,   92, 116,  92, 110,  0,  0, // Pair 8-11
  92, 102,  92, 114,  0,  0,    0,  0, // Pair 12-15
  
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 16-19
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 20-23
  
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 24-27
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 28-31
  
  0,  0,    0,  0,    92, 34,   0,  0, // Pair 32-35
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 36-39
  
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 40-43
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 44-47
  
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 48-51
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 52-55
  
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 56-59
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 60-63
  
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 64-67
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 68-71
  
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 72-75
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 76-79
  
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 80-83
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 84-87
  
  0,  0,    0,  0,    0,  0,    0,  0, // Pair 88-91
  92, 92,   0,  0,    0,  0,    0,  0, // Pair 92-95
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
    // console.log("Lanes: " + lanes<u16>(block));
    // console.log("Bits:  " + bits(mask));
    while (mask != 0) {
      const lane_index = ctz(mask) << 1;
      const dst_offset = dst_ptr + lane_index;
      const src_offset = src_ptr + lane_index;
      const code = load<u16>(src_offset) << 2;
      // console.log("Code: " + (code >> 2).toString());
      const escaped = load<u32>(ESCAPE_TABLE + code);
      // console.log("Escaped: " + String.fromCharCode(load<u16>(ESCAPE_TABLE + code)) + String.fromCharCode(load<u16>(ESCAPE_TABLE + code, 2)))
      // if (escaped < 6684764) {
      //   store<u64>(dst_offset, 13511005048209500);
      //   store<u32>(dst_offset, escaped, 8);
      //   v128.store(dst_offset, v128.load(src_offset, 2), 12);
      //   mask &= mask - 1;
      //   dst_ptr += 10;
      // } else {
      store<u32>(dst_offset, escaped);
      v128.store(dst_offset, v128.load(src_offset, 2), 4);
      mask &= mask - 1;
      dst_ptr += 2;
      // }
    }

    src_ptr += 16;
    dst_ptr += 16;
  }

  while (src_ptr < src_end) {
    const code = load<u16>(src_ptr);
    if (code == 92 || code == 34 || code < 32) {
      // console.log("Escaped: " + String.fromCharCode(load<u16>(ESCAPE_TABLE + (code << 2))) + String.fromCharCode(load<u16>(ESCAPE_TABLE + (code << 2), 2)))
      const escaped = load<u32>(ESCAPE_TABLE + (code << 2));
      store<u32>(dst_ptr, escaped);
      dst_ptr += 4;
      src_ptr += 2;
    } else {
      store<u16>(dst_ptr, code);
      dst_ptr += 2;
      src_ptr += 2;
    }
  }

  store<u8>(dst_ptr, 34); /* " */
  return dst_ptr - changetype<usize>(dst) + 2;
}



function bits(mask: u32): string {
  let out = ""
  for (let i = 31; i >= 0; i--) {
    const bit = (mask >> i) & 1;
    out += bit.toString();
  }
  return out;
}


function lanes<T extends number>(vec: v128): string {
  let buf = new ArrayBuffer(16);
  v128.store(changetype<usize>(buf), vec);
  let out = "";
  for (let i = 0; i < 16; i += sizeof<T>()) {
    const lane = load<T>(changetype<usize>(buf) + i);
    out += abs(lane).toString() + " ";
  }
  return out.trimEnd();
}

function str(vec: v128): string {
  let buf = new ArrayBuffer(16);
  v128.store(changetype<usize>(buf), vec);
  return String.UTF16.decode(buf);
}
import { OBJECT, TOTAL_OVERHEAD } from "rt/common";

const ESCAPE_TABLE = memory.data<u16>([
    48,  48,    48,  49,   48,  50,    48,  51, // 0-3
    48,  52,    48,  53,   48,  54,    48,  55, // 4-7
    48,  56,    92, 116,   92, 110,    48,  98, // 8-11
    92, 102,    92, 114,   48, 101,    48, 102, // 12-15
    49,  48,    49,  49,   49,  50,    49,  51, // 16-19
    49,  52,    49,  53,   49,  54,    49,  55, // 20-23
    49,  56,    49,  57,   49,  97,    49,  98, // 24-27
    49,  99,    49, 100,   49, 101,    49, 102, // 28-31
]);

const SPLAT_34 = i16x8.splat(34); /* " */
const SPLAT_92 = i16x8.splat(92); /* \ */

const SPLAT_32 = i16x8.splat(32); /* [ESC] */

/**
 * SSE2 implementation
 * @param src 
 * @param dst 
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
        const char_indices = v128.or(quote_indices, backslash_indices);

        const escape_indices = i16x8.lt_u(block, SPLAT_32);
        const sieve = v128.or(char_indices, escape_indices);

        if (v128.any_true(sieve)) {
            let char_mask = i16x8.bitmask(char_indices);
            let escape_mask = i16x8.bitmask(escape_indices);

            v128.store(dst_ptr, block);

            if (char_mask != 0) {
                do {
                    const lane_index = ctz(char_mask) << 1;
                    const dst_offset = dst_ptr + lane_index;
                    store<u16>(dst_offset, 92); /* \ */
                    v128.store(dst_offset, v128.load(src_ptr + lane_index), 2);
                    char_mask &= char_mask - 1;
                    dst_ptr += 2;
                } while (char_mask != 0);
                // dst_ptr += offset;
            }
            if (escape_mask != 0) {
                do {
                    const lane_index = ctz(escape_mask) << 1;
                    const dst_offset = dst_ptr + lane_index;
                    const src_offset = src_ptr + lane_index;
                    const table_index = load<u16>(src_offset) << 2;
                    store<u32>(dst_offset, load<u32>(ESCAPE_TABLE + table_index));
                    v128.store(dst_offset, v128.load(src_offset, 2), 4);
                    escape_mask &= escape_mask - 1;
                    dst_ptr += 4;
                } while (escape_mask != 0);
            }
        } else {
            v128.store(dst_ptr, block);
        }

        src_ptr += 16;
        dst_ptr += 16;
    }

    do {
        let char_code = load<u16>(src_ptr);
        if (char_code == 92 || char_code == 34) {
            store<u16>(dst_ptr, 92);
            dst_ptr += 2;
        }
        store<u16>(dst_ptr, char_code);
        dst_ptr += 2;
        src_ptr += 2;
    } while (src_ptr < src_end);

    store<u8>(dst_ptr, 34); /* " */
    return 0//dst_ptr - changetype<usize>(dst) + 2;
}
const SPLAT_32 = i16x8.splat(32);
const SPLAT_34 = i16x8.splat(34);
const SPLAT_92 = i16x8.splat(92);

/**
 * Prototype SSE2 implementation
 * Example: he\llo w"orld
 * 1. Write " to output
 * 2. Load a i16x8 block
 * 3. Check for chars that need to be escaped
 * 4. If there are chars to be escaped
 *  a. Copy block to output
 *  b. Write "\" (92)
 *  c. Write the rest of the block
 *  d. Repeat
 * 5. If src.byte_length is not a multiple of 8
 *  a. Iterate char-by-char
 *  b. Check if it needs to be escaped
 *  c. Escape char
 * 6. Append " to output
 * @param src 
 * @param dst 
 */
// @ts-ignore: Decorator
@inline export function serialize_simd_v1(src: string, dst: usize): usize {
    let src_ptr = changetype<usize>(src);
    let dst_ptr = changetype<usize>(dst) + 2;

    store<u8>(changetype<usize>(dst), 34); /* " */

    const src_end = src_ptr + u32(src.length << 1);
    const src_end_15 = src_end - 15;

    while (src_ptr < src_end_15) {
        const block = v128.load(src_ptr);

        const backslash_indices = i16x8.eq(block, SPLAT_92);
        const quote_indices = i16x8.eq(block, SPLAT_34);
        const char_indices = v128.or(quote_indices, backslash_indices);

        // const escape_indices = i16x8.lt_u(block, SPLAT_32);

        if (v128.any_true(char_indices)) {
            let mask = i16x8.bitmask(char_indices);
            let lane_index = ctz(mask) << 1;

            v128.store(dst_ptr, v128.load(src_ptr));
            while (mask != 0) {
                const dst_offset = dst_ptr + lane_index;
                store<u16>(dst_offset, 92);
                v128.store(dst_offset, v128.load(src_ptr + lane_index), 2);
                mask &= mask - 1;
                lane_index = ctz(mask) << 1;
                dst_ptr += 2;
            }

            dst_ptr += 16;
            src_ptr += 16;
        } else {
            v128.store(dst_ptr, block);
            src_ptr += 16;
            dst_ptr += 16;
        }
    }

    while (src_ptr < src_end) {
        let char_code = load<u16>(src_ptr);
        if (char_code == 92 || char_code == 34) {
            store<u16>(dst_ptr, 92);
            dst_ptr += 2;
        }
        store<u16>(dst_ptr, char_code);
        dst_ptr += 2;
        src_ptr += 2;
    }

    store<u8>(dst_ptr, 34);
    return dst_ptr - changetype<usize>(dst);
}
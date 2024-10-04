import {
    BACK_SLASH,
    BACKSPACE,
    CARRIAGE_RETURN,
    FORM_FEED,
    NEW_LINE,
    QUOTE,
    TAB
} from "../custom/chars";
import { OBJECT, TOTAL_OVERHEAD } from "rt/common";
import { bs } from "../custom/bs";
import { _intTo16, intTo16, unsafeCharCodeAt } from "../custom/util";
import { Sink } from "../custom/sink";

function needsEscaping(data: string): bool {
    let len = data.length;

    // if (len < 16) {
    //     while (len--) {
    //         const char = load<u16>(changetype<usize>(data) + len);
    //         if (char == 34 || char == 92 || char <= 31) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    let running = v128.splat<i64>(0);
    //let i = 0;

    //while (i + 15 < len) {
    let w = v128.load(changetype<usize>(data));
    running = v128.or(running, v128.eq<i16>(w, i16x8.splat(34)));
    running = v128.or(running, v128.eq<i16>(w, i16x8.splat(92)));

    let subtracted = v128.sub<i16>(w, i8x16.splat(31));
    running = v128.or(running, v128.eq<i16>(subtracted, v128.splat<i64>(0)));
    //i += 16;
    //}

    return v128.any_true(running);
}

/**
 * A prototype SIMD implementation for string serialization which can only work in 128-byte (or 16 chars with wtf-16).
 * 
 * A faster version could perhaps look like the following:
 */
// @ts-ignore: Decorator
@inline export function serialize_simd_v1(src: string, dst: usize): void {
    let src_ptr = changetype<usize>(src);
    let dst_ptr = changetype<usize>(dst) + 2;

    store<u16>(changetype<usize>(dst), 34); /* " */

    const src_end = src_ptr + u32(src.length << 1);
    const src_end_15 = src_end - 15;

    while (src_ptr < src_end_15) {
        const currentBlock = v128.load(src_ptr);
        const backslash_indices = i16x8.eq(currentBlock, i16x8.splat(92));
        const quote_indices = i16x8.eq(currentBlock, i16x8.splat(34));
        const concat_indices = v128.or(quote_indices, backslash_indices);

        const escape_indices = i16x8.lt_u(currentBlock, i16x8.splat(32));

        if (v128.any_true(v128.or(escape_indices, concat_indices))) {
            const mask = i16x8.bitmask(concat_indices);

            const anomalies = popcnt(mask);
            const start_index = (clz(mask) & ~1) + 2 // This essentially floors to the nearest even integer
            if (anomalies === 1) {
                memory.copy(dst_ptr, src_ptr, start_index >> 1);
                store<u16>(dst_ptr + start_index, 34);
                memory.copy(dst_ptr + start_index + 2, src_ptr + start_index, (32 - start_index) >> 1)
            }

            if (v128.any_true(escape_indices)) {

            }
            dst_ptr += 16;
            src_ptr += 16;
        } else {
            v128.store(dst_ptr, currentBlock);
            src_ptr += 16;
            dst_ptr += 16;
        }
    }
}

const back_slash_reg = i16x8.splat(92); // "\"
const quote_reg = i16x8.splat(34); // "\""

// @ts-ignore: Decorator
@inline export function serialize_simd_v2(src: string, dst: usize): void {
    let src_ptr = changetype<usize>(src);
    let dst_ptr = changetype<usize>(dst);

    let i = 0;
    const len = src.length;

    while (i < len) {
        const block = v128.load16x4_u(src_ptr);
        console.log("block: " + prt(block));
        const backslash_mask = i16x8.eq(block, back_slash_reg);
        const quote_mask = i16x8.eq(block, quote_reg);
        const is_quote_or_backslash = v128.or(quote_mask, backslash_mask);
        console.log("mask:  " + prt10(is_quote_or_backslash))
        

        // store<v128>(dst_ptr, expanded);
        src_ptr += 8;
        dst_ptr += 16;
        i += 8;
    }
}

function prt(obj: v128): string {
    let out = "";
    out += i16x8.extract_lane_u(obj, 0).toString() + " ";
    out += i16x8.extract_lane_u(obj, 1).toString() + " ";
    out += i16x8.extract_lane_u(obj, 2).toString() + " ";
    out += i16x8.extract_lane_u(obj, 3).toString() + " ";
    out += i16x8.extract_lane_u(obj, 4).toString() + " ";
    out += i16x8.extract_lane_u(obj, 5).toString() + " ";
    out += i16x8.extract_lane_u(obj, 6).toString() + " ";
    out += i16x8.extract_lane_u(obj, 7).toString();
    return out;
}

function prt10(obj: v128): string {
    let out = "";
    out += (i16x8.extract_lane_u(obj, 0) ? "1" : "0") + " ";
    out += (i16x8.extract_lane_u(obj, 1) ? "1" : "0") + " ";
    out += (i16x8.extract_lane_u(obj, 2) ? "1" : "0") + " ";
    out += (i16x8.extract_lane_u(obj, 3) ? "1" : "0") + " ";
    out += (i16x8.extract_lane_u(obj, 4) ? "1" : "0") + " ";
    out += (i16x8.extract_lane_u(obj, 5) ? "1" : "0") + " ";
    out += (i16x8.extract_lane_u(obj, 6) ? "1" : "0") + " ";
    out += i16x8.extract_lane_u(obj, 7) ? "1" : "0";
    return out;
}

function vis(src_ptr: usize, mask: i32): void {
    let chars = "";
    let bits = "";
    for (let i = 0; i < 8; i++) {
        const char = load<u16>(src_ptr + (i << 1));
        const bit = (mask >> i) & 1;
        chars += String.fromCharCode(char) + " ";
        bits += bit.toString() + " ";
    }
    console.log(chars);
    console.log(bits);
}

// @ts-ignore: Decorator
@inline export function serializeString(data: string): string {
    if (!needsEscaping(data)) {
        return "\"" + data + "\"";
    }

    if (data.length === 0) {
        return "\"\"";
    }
    let result = Sink.fromString("\"");

    let last: i32 = 0;
    for (let i = 0; i < data.length; i++) {
        const char = unsafeCharCodeAt(<string>data, i);
        if (char === 34 || char === 92) {
            result.write(<string>data, last, i);
            result.writeCodePoint(92);
            last = i;
        } else if (char < 16) {
            result.write(<string>data, last, i);
            last = i + 1;
            switch (char) {
                case 8: {
                    result.write("\\b");
                    break;
                }
                case 9: {
                    result.write("\\t");
                    break;
                }
                case 10: {
                    result.write("\\n");
                    break;
                }
                case 12: {
                    result.write("\\f");
                    break;
                }
                case 13: {
                    result.write("\\r");
                    break;
                }
                default: {
                    // all chars 0-31 must be encoded as a four digit unicode escape sequence
                    // \u0000 to \u000f handled here
                    result.write("\\u000");
                    result.write(char.toString(16));
                    break;
                }
            }
        } else if (char < 32) {
            result.write(<string>data, last, i);
            last = i + 1;
            // all chars 0-31 must be encoded as a four digit unicode escape sequence
            // \u0010 to \u001f handled here
            result.write("\\u00");
            result.write(char.toString(16));
        }
    }
    result.write(<string>data, last);
    result.writeCodePoint(34);
    return result.toString();
}
// @ts-ignore: Decorator valid here
@inline export function serializeString_BS(data: string): void {
    const len = data.length << 1;
    if (len === 0) {
        bs.write_32(2228258); /* "" */
        return;
    }

    bs.write_16(QUOTE);


    let last: i32 = 0;
    for (let i = 0; i < len; i += 2) {
        const char = load<u16>(changetype<usize>(data) + i);
        if (char < 35) {
            if (char === QUOTE) {
                bs.write_s_se(<string>data, last, i);
                bs.write_16(BACK_SLASH);
                last = i;
                continue;
            } else if (char < 32) {
                if (char < 16) {
                    bs.write_s_se(<string>data, last, i);
                    last = i + 2;
                    switch (char) {
                        case BACKSPACE: {
                            bs.write_32(6422620);
                            continue;
                        }
                        case TAB: {
                            bs.write_32(7602268);
                            continue;
                        }
                        case NEW_LINE: {
                            bs.write_32(7209052);
                            continue;
                        }
                        case FORM_FEED: {
                            bs.write_32(6684764);
                            continue;
                        }
                        case CARRIAGE_RETURN: {
                            bs.write_32(7471196);
                            continue;
                        }
                        default: {
                            // all chars 0-31 must be encoded as a four digit unicode escape sequence
                            // \u0000 to \u000f handled here
                            bs.write_64(13511005048209500) /* \\u00 */
                            bs.write_32((_intTo16(char) << 16) | 48); /* 0_ */
                            continue;
                        }
                    }
                } else {
                    bs.write_s_se(<string>data, last, i);
                    last = i + 2;
                    // all chars 0-31 must be encoded as a four digit unicode escape sequence
                    // \u0010 to \u001f handled here
                    bs.write_64(13511005048209500) /* \\u00 */
                    bs.write_32((intTo16(char) << 16) | 48); /* 0_ */
                }
            }
        } else if (char === BACK_SLASH) {
            bs.write_s_se(<string>data, last, i);
            bs.write_16(BACK_SLASH);
            last = i;
        }
    }

    if (last === 0) {
        bs.write_s(data);
        bs.write_16(QUOTE)
    } else {
        bs.write_s_se(<string>data, last, changetype<OBJECT>(changetype<usize>(data) - TOTAL_OVERHEAD).rtSize);
        bs.write_16(QUOTE);
    }
}
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
import { _intTo16, intTo16 } from "../custom/util";

// @ts-ignore: Decorator valid here
@inline export function serializeString(data: string): string {
    const len = data.length << 1;
    if (len === 0) {
        bs.write_32(2228258); /* "" */
        return bs.out<string>();
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
    bs.write_s_se_u(<string>data, last, changetype<OBJECT>(changetype<usize>(data) - TOTAL_OVERHEAD).rtSize);
    bs.write_16(QUOTE);
    return bs.out<string>();
}
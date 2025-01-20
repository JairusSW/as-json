import { BACK_SLASH, BRACE_LEFT, BRACE_RIGHT, BRACKET_LEFT, BRACKET_RIGHT, CHAR_F, CHAR_N, CHAR_T, COMMA, QUOTE } from "../../../custom/chars";
import { JSON } from "../../../";
import { isSpace } from "util/string";
import { ptrToStr } from "../../../util/ptrToStr";

export function deserializeArbitraryArray<T extends JSON.Value>(srcStart: usize, srcEnd: usize, dst: usize): JSON.Value[] {
    const out = dst ? changetype<T>(dst) : instantiate<T>();
    let lastIndex: usize = 0;
    let depth: u32 = 0;
    while (srcStart < srcEnd) {
        const code = load<u16>(srcStart);
        if (code == QUOTE) {
            lastIndex = srcStart;
            srcStart += 2;
            while (srcStart < srcEnd) {
                const code = load<u16>(srcStart);
                if (code == QUOTE && load<u16>(srcStart - 2) !== BACK_SLASH) {
                    while (isSpace(load<u16>((srcStart += 2)))) {
                        /* empty */
                    }
                    console.log("Value (string): " + ptrToStr(lastIndex, srcStart));
                    // @ts-ignore: exists
                    out.push(JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
                    break;
                }
                srcStart += 2;
            }
        } else if (code - 48 <= 9 || code == 45) {
            lastIndex = srcStart;
            srcStart += 2;
            while (srcStart < srcEnd) {
                const code = load<u16>(srcStart);
                if (code == COMMA || code == BRACE_RIGHT || isSpace(code)) {
                    // @ts-ignore: type
                    out.push(JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
                    console.log("Value (number): " + ptrToStr(lastIndex, srcStart));
                    while (isSpace(load<u16>((srcStart += 2)))) {
                        /* empty */
                    }
                    break;
                }
                srcStart += 2;
            }
        } else if (code == BRACE_LEFT) {
            lastIndex = srcStart;
            depth++;
            srcStart += 2;
            while (srcStart < srcEnd) {
                const code = load<u16>(srcStart);
                if (code == BRACE_RIGHT) {
                    if (--depth == 0) {
                        // @ts-ignore: type
                        out.push(JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
                        console.log("Value (object): " + ptrToStr(lastIndex, srcStart));
                        while (isSpace(load<u16>((srcStart += 2)))) {
                            /* empty */
                        }
                        break;
                    }
                } else if (code == BRACE_LEFT) depth++;
                srcStart += 2;
            }
        } else if (code == BRACKET_LEFT) {
            lastIndex = srcStart;
            depth++;
            srcStart += 2;
            while (srcStart < srcEnd) {
                const code = load<u16>(srcStart);
                if (code == BRACKET_RIGHT) {
                    if (--depth == 0) {
                        // @ts-ignore: type
                        out.push(JSON.__deserialize<valueof<T>>(lastIndex, srcStart));
                        console.log("Value (array): " + ptrToStr(lastIndex, srcStart));
                        while (isSpace(load<u16>((srcStart += 2)))) {
                            /* empty */
                        }
                        break;
                    }
                } else if (code == BRACKET_LEFT) depth++;
                srcStart += 2;
            }
        } else if (code == CHAR_T) {
            if (load<u64>(srcStart) == 28429475166421108) {
                // @ts-ignore: type
                out.push(JSON.__deserialize<valueof<T>>(lastIndex, srcStart += 8));
                console.log("Value (bool): " + ptrToStr(srcStart - 8, srcStart));
                while (isSpace(load<u16>((srcStart += 2)))) {
                    /* empty */
                }
            }
        } else if (code == CHAR_F) {
            if (load<u64>(srcStart, 2) == 28429466576093281) {
                // @ts-ignore: type
                out.push(JSON.__deserialize<valueof<T>>(lastIndex, srcStart += 10));
                console.log("Value (bool): " + ptrToStr(srcStart - 10, srcStart));
                while (isSpace(load<u16>((srcStart += 2)))) {
                    /* empty */
                }
            }
        } else if (code == CHAR_N) {
            if (load<u64>(srcStart) == 30399761348886638) {
                // @ts-ignore: type
                out.push(JSON.__deserialize<valueof<T>>(lastIndex, srcStart += 8));
                console.log("Value (null): " + ptrToStr(srcStart - 8, srcStart));
                while (isSpace(load<u16>((srcStart += 2)))) {
                    /* empty */
                }
            }
        }
        srcStart += 2;
    }
    return out;
}

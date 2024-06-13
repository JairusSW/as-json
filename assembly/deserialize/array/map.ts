import { leftBraceCode, rightBraceCode } from "../../src/chars";
import { JSON } from "../../src/json";
import { unsafeCharCodeAt } from "../../src/util";

// @ts-ignore: Decorator
@inline export function deserializeMapArray<T extends unknown[]>(data: string): T {
    const result = instantiate<T>();
    let lastPos: u32 = 1;
    let depth: u32 = 0;
    for (let pos: u32 = 0; pos < <u32>data.length; pos++) {
        const char = unsafeCharCodeAt(data, pos);
        if (char === leftBraceCode) {
            if (depth === 0) {
                lastPos = pos;
            }
            depth++;
        } else if (char === rightBraceCode) {
            depth--;
            if (depth === 0) {
                pos++;
                result.push(JSON.parse<valueof<T>>(data.slice(lastPos, pos)));
                //lastPos = pos + 2;
            }
        }
    }
    return result;
}
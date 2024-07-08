import { BRACE_LEFT, BRACE_RIGHT } from "../../custom/chars";
import { JSON } from "../..";
import { unsafeCharCodeAt } from "../../custom/util";

// @ts-ignore: Decorator valid here
@inline export function deserializeObjectArray<T extends unknown[]>(data: string): T {
    const result = instantiate<T>();
    let lastPos: u32 = 1;
    let depth: u32 = 0;
    for (let pos: u32 = 0; pos < <u32>data.length; pos++) {
        const char = unsafeCharCodeAt(data, pos);
        if (char === BRACE_LEFT) {
            if (depth === 0) {
                lastPos = pos;
            }
            depth++;
        } else if (char === BRACE_RIGHT) {
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
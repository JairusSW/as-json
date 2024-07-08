import { BRACKET_LEFT, BRACKET_RIGHT } from "../../custom/chars";
import { JSON } from "../..";
import { unsafeCharCodeAt } from "../../custom/util";

// @ts-ignore: Decorator valid here
@inline export function deserializeArrayArray<T extends unknown[][]>(data: string): T {
    const result = instantiate<T>();
    let lastPos = 0;
    let depth = 0;
    let i = 1;
    // Find start of bracket
    //for (; unsafeCharCodeAt(data, i) !== leftBracketCode; i++) {}
    //i++;
    for (; i < data.length - 1; i++) {
        const char = unsafeCharCodeAt(data, i);
        if (char === BRACKET_LEFT) {
            if (depth === 0) {
                lastPos = i;
            }
            // Shifting is 6% faster than incrementing
            depth++;
        } else if (char === BRACKET_RIGHT) {
            depth--;
            if (depth === 0) {
                i++;
                result.push(JSON.parse<valueof<T>>(data.slice(lastPos, i)));
            }
        }
    }
    return result;
}
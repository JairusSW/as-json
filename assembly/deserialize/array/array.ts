import { JSON } from "../..";
import { fCode, leftBracketCode, rightBracketCode, tCode } from "../../src/chars";
import { getArrayDepth, unsafeCharCodeAt } from "../../src/util";
import { deserializeBooleanArray } from "./boolean";
import { deserializeNumberArray } from "./number";
import { deserializeStringArray } from "./string";

/**
 * Deserialize a string to type array
 * @param data data to parse
 * @returns boolean
 */
// @ts-ignore: Decorator
@inline export function deserializeArray<T extends any[]>(data: string, start: i32 = 0, end: i32 = data.length): T {
    console.log("data: " + data.slice(start, end))
    if (isArray<T>() && end - start < 3) return instantiate<T>();
    /*if (isString<valueof<T>>()) {
        // @ts-ignore
        return deserializeStringArray(data);
    } else if (isBoolean<valueof<T>>()) {
        return deserializeBooleanArray<T>(data);
    } else if (isInteger<valueof<T>>() || isFloat<valueof<T>>()) {
        return deserializeNumberArray<T>(data);
    } else if (idof<T>() === idof<JSON.Value[]>()) {*/
    let result = instantiate<T>();
    let lastPos: i32 = 0;
    let depth: i32 = 0;
    for (let i = start + 1; i < end - 1; i++) {
        const char = unsafeCharCodeAt(data, i);
        if (char === leftBracketCode) {
            if (depth === 0) {
                lastPos = i;
            }
            // Shifting is 6% faster than incrementing
            depth++;
        } else if (char === rightBracketCode) {
            depth--;
            if (depth === 0) {
                i++;
                if (isArray<T>()) result.push(deserializeArray<valueof<T>>(data, lastPos, i));
            }
        }
    }
    //}

    return instantiate<T>()
}
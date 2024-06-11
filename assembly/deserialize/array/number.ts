import { isSpace } from "util/string";
import { commaCode, rightBracketCode } from "../../src/chars";
import { unsafeCharCodeAt } from "../../src/util";
import { deserializeNumber } from "../number";

// @ts-ignore: Decorator
@inline export function deserializeNumberArray<T extends number[]>(data: string): T {
    const result = instantiate<T>();
    let lastPos = 0;
    let i = 1;
    for (; i < data.length - 1; i++) {
        const char = unsafeCharCodeAt(data, i);
        if (lastPos === 0 && ((char >= 48 && char <= 57) || char === 45)) {
            lastPos = i;
        } else if ((isSpace(char) || char == commaCode) && lastPos > 0) {
            console.log("result: " + data.slice(lastPos, i));
            result.push(deserializeNumber<valueof<T>>(data, lastPos, i));
            lastPos = 0;
        }
    }
    for (; i > lastPos - 1; i--) {
        const char = unsafeCharCodeAt(data, i);
        if (char !== rightBracketCode) {
            result.push(deserializeNumber<valueof<T>>(data, lastPos, i + 1));
            console.log("result: " + data.slice(lastPos, i + 1));
            break;
        }
    }
    return result;
}
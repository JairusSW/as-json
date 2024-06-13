import {
    commaCode,
    commaWord,
    emptyArrayWord,
    leftBracketWord,
    rightBracketCode,
    rightBracketWord
} from "../src/chars";
import { Sink } from "../src/sink";
import { serializeString } from "./string";

// @ts-ignore
@inline export function serializeArray<T extends any[]>(data: T): string {
    // @ts-ignore
    if (data.length == 0) {
        return emptyArrayWord;
        // @ts-ignore
    } else if (isString<valueof<T>>()) {
        let result = leftBracketWord;
        // @ts-ignore
        for (let i = 0; i < data.length - 1; i++) {
            // @ts-ignore
            result += serializeString(unchecked(data[i]));
            result += commaWord;
        }
        // @ts-ignore
        result += serializeString(unchecked(data[data.length - 1]));
        result += rightBracketWord;
        return result;
        // @ts-ignore
    } else if (isBoolean<valueof<T>>()) {
        // @ts-ignore
        return leftBracketWord + data.join(commaWord) + rightBracketWord;
        // @ts-ignore
    } else if (isFloat<valueof<T>>() || isInteger<valueof<T>>()) {
        // @ts-ignore
        return leftBracketWord + data.join(commaWord) + rightBracketWord;
    } else {
        let result = Sink.fromString(leftBracketWord);
        // @ts-ignore
        for (let i = 0; i < data.length - 1; i++) {
            // @ts-ignore
            result.write(__JSON_Stringify(unchecked(data[i])));
            result.writeCodePoint(commaCode);
        }
        // @ts-ignore
        result.write(__JSON_Stringify(unchecked(data[data.length - 1])));
        result.writeCodePoint(rightBracketCode);
        return result.toString();
    }
}
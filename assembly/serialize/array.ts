import { JSON } from "..";
import {
    COMMA,
    COMMA_WORD,
    EMPTY_BRACKET_WORD,
    BRACKET_LEFT_WORD,
    BRACKET_RIGHT,
    BRACKET_RIGHT_WORD
} from "../custom/chars";
import { Sink } from "../custom/sink";
import { serializeString } from "./string";

// @ts-ignore: Decorator valid here
@inline export function serializeArray<T extends any[]>(data: T): string {
    if (data.length == 0) {
        return EMPTY_BRACKET_WORD;
        // @ts-ignore
    } else if (isString<valueof<T>>()) {
        let result = BRACKET_LEFT_WORD;
        // @ts-ignore
        for (let i = 0; i < data.length - 1; i++) {
            // @ts-ignore
            result += serializeString(unchecked(data[i]));
            result += COMMA_WORD;
        }
        // @ts-ignore
        result += serializeString(unchecked(data[data.length - 1]));
        result += BRACKET_RIGHT_WORD;
        return result;
        // @ts-ignore
    } else if (isBoolean<valueof<T>>()) {
        // @ts-ignore
        return BRACKET_LEFT_WORD + data.join(COMMA_WORD) + BRACKET_RIGHT_WORD;
        // @ts-ignore
    } else if (isFloat<valueof<T>>() || isInteger<valueof<T>>()) {
        // @ts-ignore
        return BRACKET_LEFT_WORD + data.join(COMMA_WORD) + BRACKET_RIGHT_WORD;
    } else {
        let result = Sink.fromString(BRACKET_LEFT_WORD);
        // @ts-ignore
        for (let i = 0; i < data.length - 1; i++) {
            // @ts-ignore
            result.write(JSON.stringify(unchecked(data[i])));
            result.writeCodePoint(COMMA);
        }
        // @ts-ignore
        result.write(JSON.stringify(unchecked(data[data.length - 1])));
        result.writeCodePoint(BRACKET_RIGHT);
        return result.toString();
    }
}
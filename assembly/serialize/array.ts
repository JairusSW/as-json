import { bl } from "../bl";
import { JSON } from "..";
import {
    COMMA,
    COMMA_WORD,
    EMPTY_BRACKET_WORD,
    BRACKET_LEFT_WORD,
    BRACKET_RIGHT,
    BRACKET_RIGHT_WORD,
    EMPTY_BRACKET_PTR,
    BRACKET_LEFT
} from "../chars";
import { Sink } from "../sink";
import { serializeString, serializeStringBL } from "./string";
import { serializeBoolBL } from "./bool";
import { serializeFloatBL } from "./float";
import { serializeIntegerBL } from "./integer";

// @ts-ignore: Decorator valid here
@inline export function serializeArray<T extends any[]>(data: T): string {
    // @ts-ignore
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

// @ts-ignore: Decorator valid here
@inline export function serializeArrayBL<T extends any[]>(data: T): void {
    if (data.length == 0) {
        bl.write_b(EMPTY_BRACKET_PTR);
    } else if (isString<valueof<T>>()) {
        bl.write_16(BRACKET_LEFT);
        for (let i = 0; i < data.length - 1; i++) {
            serializeStringBL(unchecked(data[i]));
            bl.write_16(COMMA);
        }
        serializeStringBL(unchecked(data[data.length - 1]));
        bl.write_16(BRACKET_RIGHT);
    } else if (isBoolean<valueof<T>>()) {
        bl.write_16(BRACKET_LEFT);
        for (let i = 0; i < data.length - 1; i++) {
            serializeBoolBL(unchecked(data[i]));
            bl.write_16(COMMA);
        }
        serializeBoolBL(unchecked(data[data.length - 1]));
        bl.write_16(BRACKET_RIGHT);
    } else if (isFloat<valueof<T>>()) {
        bl.write_16(BRACKET_LEFT);
        for (let i = 0; i < data.length - 1; i++) {
            serializeFloatBL(unchecked(data[i]));
            bl.write_16(COMMA);
        }
        serializeFloatBL(unchecked(data[data.length - 1]));
        bl.write_16(BRACKET_RIGHT);
    }else if (isInteger<valueof<T>>()) {
        bl.write_16(BRACKET_LEFT);
        for (let i = 0; i < data.length - 1; i++) {
            serializeIntegerBL(unchecked(data[i]));
            bl.write_16(COMMA);
        }
        serializeIntegerBL(unchecked(data[data.length - 1]));
        bl.write_16(BRACKET_RIGHT);
    } else {
        bl.write_16(BRACKET_LEFT);
        for (let i = 0; i < data.length - 1; i++) {
            JSON.stringifyBL(unchecked(data[i]));
            bl.write_16(COMMA);
        }
        JSON.stringifyBL(unchecked(data[data.length - 1]));
        bl.write_16(COMMA);
    }
}
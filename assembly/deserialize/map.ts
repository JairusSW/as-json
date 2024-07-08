import { Virtual } from "as-virtual/assembly";
import { containsCodePoint, unsafeCharCodeAt } from "../custom/util";
import {
    CHAR_A,
    BACK_SLASH,
    COLON,
    COMMA,
    CHAR_E,
    CHAR_F,
    CHAR_L,
    BRACE_LEFT,
    BRACKET_LEFT,
    CHAR_N,
    QUOTE,
    CHAR_R,
    BRACE_RIGHT,
    BRACKET_RIGHT,
    CHAR_S,
    CHAR_T,
    CHAR_U
} from "../custom/chars";
import { deserializeBoolean } from "./bool";
import { JSON } from "..";
import { deserializeString } from "./string";
import { isSpace } from "util/string";
import { deserializeInteger } from "./integer";
import { deserializeFloat } from "./float";

// @ts-ignore: Decorator valid here
@inline export function deserializeMap<T extends Map>(data: string): T {

    const map: nonnull<T> = changetype<nonnull<T>>(
        __new(offsetof<nonnull<T>>(), idof<nonnull<T>>())
    );

    const key = Virtual.createEmpty<string>();
    let isKey = false;
    let depth = 0;
    let outerLoopIndex = 1;
    for (; outerLoopIndex < data.length - 1; outerLoopIndex++) {
        const char = unsafeCharCodeAt(data, outerLoopIndex);
        if (char === BRACKET_LEFT) {
            for (
                let arrayValueIndex = outerLoopIndex;
                arrayValueIndex < data.length - 1;
                arrayValueIndex++
            ) {
                const char = unsafeCharCodeAt(data, arrayValueIndex);
                if (char === BRACKET_LEFT) {
                    depth++;
                } else if (char === BRACKET_RIGHT) {
                    depth--;
                    if (depth === 0) {
                        ++arrayValueIndex;
                        map.set(deserializeMapKey<indexof<T>>(key), JSON.parse<valueof<T>>(data.slice(outerLoopIndex, arrayValueIndex)));
                        outerLoopIndex = arrayValueIndex;
                        isKey = false;
                        break;
                    }
                }
            }
        } else if (char === BRACE_LEFT) {
            for (
                let objectValueIndex = outerLoopIndex;
                objectValueIndex < data.length - 1;
                objectValueIndex++
            ) {
                const char = unsafeCharCodeAt(data, objectValueIndex);
                if (char === BRACE_LEFT) {
                    depth++;
                } else if (char === BRACE_RIGHT) {
                    depth--;
                    if (depth === 0) {
                        ++objectValueIndex;
                        map.set(deserializeMapKey<indexof<T>>(key), JSON.parse<valueof<T>>(data.slice(outerLoopIndex, objectValueIndex)));
                        outerLoopIndex = objectValueIndex;
                        isKey = false;
                        break;
                    }
                }
            }
        } else if (char === QUOTE) {
            let escaping = false;
            for (
                let stringValueIndex = ++outerLoopIndex;
                stringValueIndex < data.length - 1;
                stringValueIndex++
            ) {
                const char = unsafeCharCodeAt(data, stringValueIndex);
                if (char === BACK_SLASH && !escaping) {
                    escaping = true;
                } else {
                    if (
                        char === QUOTE && !escaping
                    ) {
                        if (isKey === false) {
                            // perf: we can avoid creating a new string here if the key doesn't contain any escape sequences
                            if (containsCodePoint(data, BACK_SLASH, outerLoopIndex, stringValueIndex)) {
                                key.reinst(deserializeString(data, outerLoopIndex - 1, stringValueIndex));
                            } else {
                                key.reinst(data, outerLoopIndex, stringValueIndex);
                            }
                            isKey = true;
                        } else {
                            if (isString<valueof<T>>()) {
                                const value = deserializeString(data, outerLoopIndex - 1, stringValueIndex);
                                map.set(deserializeMapKey<indexof<T>>(key), value);
                            }
                            isKey = false;
                        }
                        outerLoopIndex = ++stringValueIndex;
                        break;
                    }
                    escaping = false;
                }
            }
        } else if (
            char == CHAR_N &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === CHAR_U &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === CHAR_L &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === CHAR_L) {
            if (isNullable<valueof<T>>()) {
                map.set(deserializeMapKey<indexof<T>>(key), null);
            }
            isKey = false;
        } else if (
            char === CHAR_T &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === CHAR_R &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === CHAR_U &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === CHAR_E
        ) {
            if (isBoolean<valueof<T>>()) {
                map.set(deserializeMapKey<indexof<T>>(key), true);
            }
            isKey = false;
        } else if (
            char === CHAR_F &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === CHAR_A &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === CHAR_L &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === CHAR_S &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === CHAR_E
        ) {
            if (isBoolean<valueof<T>>()) {
                map.set(deserializeMapKey<indexof<T>>(key), false);
            }
            isKey = false;
        } else if ((char >= 48 && char <= 57) || char === 45) {
            let numberValueIndex = ++outerLoopIndex;
            for (; numberValueIndex < data.length; numberValueIndex++) {
                const char = unsafeCharCodeAt(data, numberValueIndex);
                if (char === COLON || char === COMMA || char === BRACE_RIGHT || isSpace(char)) {
                    if (isInteger<valueof<T>>()) {
                        map.set(deserializeMapKey<indexof<T>>(key), deserializeInteger<valueof<T>>(data.slice(outerLoopIndex - 1, numberValueIndex)));
                    } else if (isFloat<valueof<T>>()) {
                        map.set(deserializeMapKey<indexof<T>>(key), deserializeFloat<valueof<T>>(data.slice(outerLoopIndex - 1, numberValueIndex)));
                    }
                    outerLoopIndex = numberValueIndex;
                    isKey = false;
                    break;
                }
            }
        }
    }

    return map;
}

//@ts-ignore: Decorator
function deserializeMapKey<T>(key: Virtual<string>): T {
    const k = key.copyOut();
    if (isString<T>()) {
        return k as T;
    } else if (isBoolean<T>()) {
        return deserializeBoolean(k) as T;
    } else if (isInteger<T>()) {
        return deserializeInteger<T>(k);
    } else if (isFloat<T>()) {
        return deserializeFloat<T>(k);
    }

    throw new Error(`JSON: Cannot parse JSON object to a Map with a key of type ${nameof<T>()}`);
}

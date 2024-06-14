import { Virtual } from "as-virtual/assembly";
import { containsCodePoint, unsafeCharCodeAt } from "../src/util";
import {
    aCode,
    backSlashCode,
    colonCode,
    commaCode,
    eCode,
    fCode,
    lCode,
    leftBraceCode,
    leftBracketCode,
    nCode,
    quoteCode,
    rCode,
    rightBraceCode,
    rightBracketCode,
    sCode,
    tCode,
    uCode
} from "../src/chars";
import { deserializeBoolean } from "./bool";
import { JSON } from "..";
import { deserializeString } from "./string";
import { isSpace } from "util/string";
import { deserializeInteger } from "./integer";
import { deserializeFloat } from "./float";

// @ts-ignore: Decorator
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
        if (char === leftBracketCode) {
            for (
                let arrayValueIndex = outerLoopIndex;
                arrayValueIndex < data.length - 1;
                arrayValueIndex++
            ) {
                const char = unsafeCharCodeAt(data, arrayValueIndex);
                if (char === leftBracketCode) {
                    depth++;
                } else if (char === rightBracketCode) {
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
        } else if (char === leftBraceCode) {
            for (
                let objectValueIndex = outerLoopIndex;
                objectValueIndex < data.length - 1;
                objectValueIndex++
            ) {
                const char = unsafeCharCodeAt(data, objectValueIndex);
                if (char === leftBraceCode) {
                    depth++;
                } else if (char === rightBraceCode) {
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
        } else if (char === quoteCode) {
            let escaping = false;
            for (
                let stringValueIndex = ++outerLoopIndex;
                stringValueIndex < data.length - 1;
                stringValueIndex++
            ) {
                const char = unsafeCharCodeAt(data, stringValueIndex);
                if (char === backSlashCode && !escaping) {
                    escaping = true;
                } else {
                    if (
                        char === quoteCode && !escaping
                    ) {
                        if (isKey === false) {
                            // perf: we can avoid creating a new string here if the key doesn't contain any escape sequences
                            if (containsCodePoint(data, backSlashCode, outerLoopIndex, stringValueIndex)) {
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
            char == nCode &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === uCode &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === lCode &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === lCode) {
            if (isNullable<valueof<T>>()) {
                map.set(deserializeMapKey<indexof<T>>(key), null);
            }
            isKey = false;
        } else if (
            char === tCode &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === rCode &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === uCode &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === eCode
        ) {
            if (isBoolean<valueof<T>>()) {
                map.set(deserializeMapKey<indexof<T>>(key), true);
            }
            isKey = false;
        } else if (
            char === fCode &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === aCode &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === lCode &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === sCode &&
            unsafeCharCodeAt(data, ++outerLoopIndex) === eCode
        ) {
            if (isBoolean<valueof<T>>()) {
                map.set(deserializeMapKey<indexof<T>>(key), false);
            }
            isKey = false;
        } else if ((char >= 48 && char <= 57) || char === 45) {
            let numberValueIndex = ++outerLoopIndex;
            for (; numberValueIndex < data.length; numberValueIndex++) {
                const char = unsafeCharCodeAt(data, numberValueIndex);
                if (char === colonCode || char === commaCode || char === rightBraceCode || isSpace(char)) {
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
@inline function deserializeMapKey<T>(key: Virtual<string>): T {
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
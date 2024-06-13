import { colonCode, commaCode, leftBraceWord, rightBraceCode } from "../src/chars";
import { JSON } from "../src/json";
import { Sink } from "../src/sink";
import { serializeString } from "./string";

// @ts-ignore
@inline export function serializeMap<T extends Map<any, any>>(data: T): string {
    let result = Sink.fromString(leftBraceWord);
    let keys = data.keys();
    let values = data.values();
    const end = data.size - 1;
    for (let i = 0; i < end; i++) {
        result.write(serializeString(unchecked(keys[i]).toString()));
        result.writeCodePoint(colonCode);
        result.write(JSON.stringify(unchecked(values[i])));
        result.writeCodePoint(commaCode);
    }
    result.write(serializeString(unchecked(keys[end]).toString()));
    result.writeCodePoint(colonCode);
    result.write(JSON.stringify(unchecked(values[end])));

    result.writeCodePoint(rightBraceCode);
    return result.toString();
}
import { bl } from "../bl";
import { COLON, COMMA, BRACE_LEFT_WORD, BRACE_RIGHT, EMPTY_BRACES_PTR, BRACE_LEFT } from "../chars";
import { JSON } from "..";
import { Sink } from "../sink";

// @ts-ignore: Decorator valid here
@inline export function serializeMap<T extends Map<any, any>>(data: T): string {
    let result = Sink.fromString(BRACE_LEFT_WORD);
    if (!data.size) return "{}";
    let keys = data.keys();
    let values = data.values();
    const end = data.size - 1;
    for (let i = 0; i < end; i++) {
        result.write(JSON.stringify(unchecked(keys[i])));
        result.writeCodePoint(COLON);
        result.write(JSON.stringify(unchecked(values[i])));
        result.writeCodePoint(COMMA);
    }
    result.write(JSON.stringify(unchecked(keys[end])));
    result.writeCodePoint(COLON);
    result.write(JSON.stringify(unchecked(values[end])));

    result.writeCodePoint(BRACE_RIGHT);
    return result.toString();
}

// @ts-ignore: Decorator valid here
@inline export function serializeMapBL<T extends Map<any, any>>(data: T): void {
    bl.write_16(BRACE_LEFT);
    if (!data.size) {
        bl.write_b(EMPTY_BRACES_PTR, 4);
        return;
    }
    const keys = data.keys();
    const values = data.values();
    const end = data.size - 1;
    for (let i = 0; i < end; i++) {
        JSON.stringifyBL(unchecked(keys[i]));
        bl.write_16(COLON);
        JSON.stringifyBL(unchecked(values[i]));
        bl.write_16(COMMA);
    }
    JSON.stringifyBL(unchecked(keys[end]));
    bl.write_16(COLON);
    JSON.stringifyBL(unchecked(values[end]));
    bl.write_16(BRACE_RIGHT);
}
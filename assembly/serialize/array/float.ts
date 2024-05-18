import { commaCode, rightBracketCode } from "../../src/chars";
import { Sink } from "../../src/sink";
import { serializeFloat } from "../float";

// @ts-ignore: Decorator
@inline export function serializeFloatArray<T extends number[]>(data: T, out: Sink | null = null): Sink {
    if (!out) {
        if (!data.length) {
            return Sink.fromString("[]");
        } else {
            out = Sink.fromString("[");
        }
    }

    const end = data.length - 1;

    for (let i = 0; i < end; i++) {
        serializeFloat(
            data[i],
            out
        );
        out.writeCodePoint(commaCode);
    }

    serializeFloat(
        data[end],
        out
    );
    out.writeCodePoint(rightBracketCode);

    return out;
}
import { commaCode, rightBracketCode } from "../../src/chars";
import { Sink } from "../../src/sink";
import { serializeBool } from "../bool";

// @ts-ignore: Decorator
@inline export function serializeBoolArray<T extends bool[]>(data: T, out: Sink | null = null): Sink {
    if (!out) {
        if (!data.length) {
            return Sink.fromString("[]");
        } else {
            out = Sink.fromString("[");
        }
    }

    const end = data.length - 1;

    for (let i = 0; i < end; i++) {
        serializeBool(
            data[i],
            out
        );
        out.writeCodePoint(commaCode);
    }

    serializeBool(
        data[end],
        out
    );
    out.writeCodePoint(rightBracketCode);

    return out;
}
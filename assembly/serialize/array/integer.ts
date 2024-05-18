import { commaCode, rightBracketCode } from "../../src/chars";
import { Sink } from "../../src/sink";
import { serializeInteger } from "../integer";

// @ts-ignore: Decorator
@inline export function serializeIntegerArray<T extends number[]>(data: T, out: Sink | null = null): Sink {
    if (!out) {
        if (!data.length) {
            return Sink.fromString("[]");
        } else {
            out = Sink.fromString("[");
        }
    }

    const end = data.length - 1;

    for (let i = 0; i < end; i++) {
        serializeInteger<valueof<T>>(
            data[i],
            out
        );
        out.writeCodePoint(commaCode);
    }

    serializeInteger<valueof<T>>(
        data[end],
        out
    );
    out.writeCodePoint(rightBracketCode);

    return out;
}
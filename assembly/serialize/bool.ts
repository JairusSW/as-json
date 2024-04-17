import { Sink } from "../src/sink";

// @ts-ignore: Decorator
@inline export function serializeBool(data: bool, out: Sink | null = null): Sink {
    if (data) {
        if (out) return out.write("true")!;
        return Sink.fromStringLiteral("true");
    } else {
        if (out) return out.write("false")!;
        return Sink.fromStringLiteral("false");
    }
}
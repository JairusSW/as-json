import { JSON } from ".";
import { deserializeArray } from "./deserialize/array/array";
import { deserializeBooleanArray } from "./deserialize/array/boolean";
import { deserializeNumberArray } from "./deserialize/array/number";
import { deserializeStringArray } from "./deserialize/array/string";
import { deserializeNumber } from "./deserialize/number";
import { utoa32 } from "./serialize/integer";
import { Sink } from "./src/sink";
import { describe, expect } from "as-test/assembly";
import { __atoi_fast } from "./src/util";

describe("Serialize String", () => {
    expect(JSON.serialize("hello world").toString()).toBe("\"hello world\"");
});

describe("Serialize Integer", () => {
    expect(JSON.serialize(65536).toString()).toBe("65536");
    expect(utoa32(65536, Sink.withCapacity(20)).toString()).toBe("65536");
    console.log(utoa32(6553, Sink.withCapacity(20)).toString())
});
describe("Serialize Float", () => {
    expect(JSON.serialize(3.1415).toString()).toBe("3.1415");
});

describe("Serialize Boolean", () => {
    expect(JSON.serialize(true).toString()).toBe("true");
    expect(JSON.serialize(false).toString()).toBe("false");
});

describe("Serialize String Value", () => {
    expect(
        JSON.serialize(
            JSON.Value.from("hello world")
        ).toString()
    ).toBe("\"hello world\"");
});
describe("Serialize Integer Value", () => {
    expect(
        JSON.serialize(
            JSON.Value.from(65536)
        ).toString()
    ).toBe("65536");
});

describe("Serialize Float Value", () => {
    expect(
        JSON.serialize(
            JSON.Value.from(3.1415)
        ).toString()
    ).toBe("3.1415");
});
describe("Serialize Boolean Value", () => {
    expect(
        JSON.serialize(
            JSON.Value.from(true)
        ).toString()
    ).toBe("true");

    expect(
        JSON.serialize(
            JSON.Value.from(false)
        ).toString()
    ).toBe("false");
});

const set = JSON.Value.from([
    JSON.Value.from([]),
    JSON.Value.from([
        JSON.Value.from([])
    ]),
    JSON.Value.from([
        JSON.Value.from([]),
        JSON.Value.from([
            JSON.Value.from([])
        ]),
    ]),
]);

describe("Serialize Set Theoretical Representation", () => {
    expect(JSON.serialize(set).toString()).toBe("[[],[[]],[[],[[]]]]")
});

describe("Serialize Complex Array Types", () => {
    expect(JSON.serialize([
        JSON.Value.from("hello"),
        JSON.Value.from("world"),
        JSON.Value.from(123),
        JSON.Value.from("456"),
        JSON.Value.from([
            JSON.Value.from(7.89),
            JSON.Value.from([])
        ])
    ]).toString()).toBe("[\"hello\",\"world\",123,\"456\",[7.89,[]]]");
});

@unmanaged
class Vec3 {
    x: f64;
    y: f64;
    z: f64;
    @inline __JSON_Serialize(out: Sink | null = null): Sink {
        if (!out) {
            out = Sink.withCapacity(25);
        }

        out.write(this.__JSON_Serialize_Unsafe());

        return out;
    }
    @inline __JSON_Serialize_Unsafe(): string {
        return `{"x":${JSON.serialize<f64>(this.x)},"y":${JSON.serialize<f64>(this.y)},"z":${JSON.serialize<f64>(this.z)}}`;
    }
}

const vec: Vec3 = {
    x: 3.4,
    y: 1.2,
    z: -5.6
}

describe("Serialize Structs", () => {
    expect(JSON.serialize(vec).toString()).toBe("{\"x\":3.4,\"y\":1.2,\"z\":-5.6}");
});

const map = new Map<string, JSON.Value>();
map.set("x", JSON.Value.from<f64>(3.4));
map.set("y", JSON.Value.from<f64>(1.2));
map.set("z", JSON.Value.from<f64>(-5.6));

describe("Serialize Maps", () => {
    expect(JSON.serialize(map).toString()).toBe("{\"x\":3.4,\"y\":1.2,\"z\":-5.6}");
});

describe("Deserialize Number", () => {
    expect(JSON.serialize(deserializeNumber<i32>("1234")).toString()).toBe("1234");
})


describe("Deserialize String[]", () => {
    expect(JSON.serialize(deserializeStringArray("[\"hello\",\"world\"]")).toString()).toBe("[\"hello\",\"world\"]");
});

describe("Deserialize Number[]", () => {
    expect(JSON.serialize(deserializeNumberArray<i32[]>("[123,456]")).toString()).toBe("[123,456]");
});

describe("Deserialize Boolean[]", () => {
    expect(JSON.serialize(deserializeBooleanArray<bool[]>("[true, false]")).toString()).toBe("[true,false]");
});
/*
describe("Deserialize [][]", () => {
    deserializeArray<JSON.Value[]>("[[[]],[[[]]]]")
});*/
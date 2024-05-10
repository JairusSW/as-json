import { JSON } from ".";
import { Sink } from "./src/sink";

console.log(JSON.serialize("hello world!").toString());

console.log(JSON.serialize(314).toString());

console.log(JSON.serialize(3.14).toString());

console.log(JSON.serialize(true).toString());

console.log(JSON.serialize(false).toString());

console.log(JSON.serialize(JSON.Value.from("hello world!")).toString());

console.log(JSON.serialize([
    JSON.Value.from("hello"),
    JSON.Value.from("world"),
    JSON.Value.from(123),
    JSON.Value.from("456"),
    JSON.Value.from([
        JSON.Value.from(7.89),
        JSON.Value.from([])
    ])
]).toString());

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

console.log(JSON.serialize(set).toString());

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

const map = new Map<string, JSON.Value>();
map.set("x", JSON.Value.from<f64>(3.4));
map.set("y", JSON.Value.from<f64>(1.2));
map.set("z", JSON.Value.from<f64>(-5.6));

console.log(JSON.serialize(vec).toString());
console.log(JSON.serialize(map).toString());
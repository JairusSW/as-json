import { JSON } from "..";
import { serializeUnknown } from "../serialize/unknown";
import { Sink } from "../src/sink";

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

bench("Serialize Set Theoretical Representation", () => {
  blackbox<Sink>(serializeUnknown(set));
})
/*
bench("Parse Number SNIP", () => {
  blackbox<i32>(snip_fast<i32>("12345"));
});

bench("Parse Number ATOI", () => {
  blackbox<i32>(__atoi_fast<i32>("12345"));
})

bench("Parse Number STDLIB", () => {
  blackbox<i32>(i32.parse("12345"));
});

bench("Parse Number OLD", () => {
  blackbox<i32>(parseSciInteger<i32>("12345"));
});

bench("Stringify Object (Vec3)", () => {
  blackbox<string>(vec.__JSON_Serialize());
});

// TODO: Make this allocate without crashing
bench("Parse Object (Vec3)", () => {
  blackbox<Vec3>(JSON.parse<Vec3>('{"x":0,"y":0,"z":0}'));
});
/*
bench("Stringify Number Array", () => {
  blackbox(JSON.stringify<i32[]>([1, 2, 3]));
});

bench("Parse Number Array", () => {
  blackbox(JSON.parse<i32[]>(blackbox("[1,2,3]")));
});

bench("Stringify String", () => {
  blackbox(JSON.stringify(blackbox('Hello "World!')));
});

bench("Parse String", () => {
  blackbox(JSON.parse<string>(blackbox('"Hello "World!"')));
});
/*
bench("Stringify Boolean Array", () => {
  blackbox(JSON.stringify<boolean[]>([true, false, true]));
});

bench("Stringify String Array", () => {
  blackbox(JSON.stringify<string[]>(["a", "b", "c"]));
});

bench("Stringify Boolean", () => {
  blackbox(JSON.stringify(blackbox(true)));
});

bench("Parse Boolean", () => {
  blackbox(JSON.parse<boolean>(blackbox("true")));
});

bench("Stringify Integer", () => {
  blackbox(JSON.stringify(blackbox(314)));
});*/

bench("Parse Integer", () => {
  blackbox(JSON.parse<i32>(blackbox("314")));
});
/*
bench("Stringify Float", () => {
  blackbox(JSON.stringify(blackbox(3.14)));
});

bench("Parse Float", () => {
  blackbox(JSON.parse<f32>(blackbox("3.14")));
});
*/
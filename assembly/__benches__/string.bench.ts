import { bs } from "../custom/bs";
import { serializeBool, serializeBool_BS } from "../serialize/bool"
import { serialize_simd, serializeString, serializeString_BS } from "../serialize/string";

const out = memory.data(65536);

bench("Serialize String", () => {
    blackbox<string>(serializeString("hello \"world abc"));
});

bench("Serialize String BS", () => {
    serializeString_BS("hello \"world abc");
    bs.reset();
});

bench("Serialize String SIMD", () => {
    serialize_simd("hello \"world abc", out);
})
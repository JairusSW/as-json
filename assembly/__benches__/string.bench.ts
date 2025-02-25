import {JSON} from "..";
import {Vec3} from "./schemas";
import {bs} from "../../modules/as-bs/assembly";
import {bench} from "../custom/bench";
import {serializeString_SIMD} from "../serialize/simd/string";
import {deserializeString_SIMD} from "../deserialize/simd/string";
import {serializeString} from "../serialize/simple/string";
import {deserializeString} from "../deserialize/simple/string";

const vec: Vec3 = {x: 1, y: 2, z: 3};

bs.ensureSize(4096);

bench(
  "Serialize String (Simple)",
  () => {
    serializeString("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()-_=+{[}]|\\:;\"'?/>.<,'\"}");
  },
  25_000_000
);

// bench("Deserialize String Simple", () => {
//   deserializeString_SIMD("\"hello world\"")
// });

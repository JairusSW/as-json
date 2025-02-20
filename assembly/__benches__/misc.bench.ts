import { bench } from "as-bench/assembly";
import { JSON } from "..";
import { Vec3 } from "./schemas";
import { bs } from "../../modules/as-bs/assembly";

const vec: Vec3 = {
  x: 1,
  y: 2,
  z: 3
}

bs.ensureSize(4096);
// bench("Serialize Vector3", () => {
//   JSON.stringify(vec);
// });

bench("Deserialize Vector3", () => {
  JSON.parse<Vec3>('{"x":1,"y":2,"z":3}');
});
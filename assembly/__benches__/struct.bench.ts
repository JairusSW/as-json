import {JSON} from "..";
import {Vec3} from "./schemas";
import {bs} from "../../modules/as-bs/assembly";
import {bench} from "./bench";

const vec: Vec3 = {x: 1, y: 2, z: 3};

bs.ensureSize(4096);
bench(
  "Serialize Vector3",
  () => {
    // JSON.__serialize(vec);
    // bs.offset = changetype<usize>(bs.buffer);
    // bs.stackSize = 0;
    JSON.stringify(vec);
  },
  25_000_000
);

// bench("Deserialize Vector3", () => {
//   JSON.parse<Vec3>('{"x":1,"y":2,"z":3}');
// });

import { bench } from "./bench";
import { Vec3 } from "./schemas";

const vec: Vec3 = {
  x: 1,
  y: 2,
  z: 3,
};

bench("Serialize Vector3", () => {
  JSON.stringify(vec);
}, 25_000_000);

bench("Deserialize Vector3", () => {
  JSON.parse('{"x":1,"y":2,"z":3}');
}, 25_000_000);
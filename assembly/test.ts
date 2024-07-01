import { JSON } from ".";
import { bl } from "./bl";
/*
@json
class Vec3 {
  x: f64 = 1.0;
  y: f64 = 2.0;
  z: f64 = 3.0;
  __SERIALIZE_BL(): void {
    bl.write_128(i16x8(123, 34, 120, 34, 58, 49, 44, 34)); /* {"x":1," */
//    bl.write_128(i16x8(121, 34, 58, 50, 44, 34, 122, 34)); /* y":2,"z" */
//    bl.write_32(3342394); /* :3 */
//    bl.write_16(125); /* } */
//  }
//}
//const vec = new Vec3();*/
JSON.stringifyBL("hello w\"orld!");
console.log(bl.out<string>())/*
JSON.stringifyBL(vec);
console.log(bl.out<string>())*/
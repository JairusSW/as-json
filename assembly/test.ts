import { JSON } from ".";

@json
class Base {}
@json
class Vec1 extends Base {
  x: f64 = 1.0;
}
@json
class Vec2 extends Vec1 {
  @omit()
  y: f32 = 2.0;
}
@json
class Vec3 extends Vec2 {
  z: f32 = 3.0;
}

const arr: Base[] = [
  new Vec1(),
  new Vec2(),
  new Vec3()
];

console.log(JSON.stringify(arr));
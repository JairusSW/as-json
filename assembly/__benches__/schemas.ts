import { JSON } from "..";

@json
export class Vec3 {
  public x!: i32;
  public y!: i32;
  public z!: i32;
  __DESERIALIZE(keyStart: usize, keyEnd: usize, valStart: usize, valEnd: usize, ptr: usize): void {
    switch (load<u16>(keyStart)) {
      case 120: { // x
        store<i32>(ptr, JSON.__deserialize<i32>(valStart, valEnd, 0), offsetof<this>("x"));
        return;
      }
      case 121: { // y
        store<i32>(ptr, JSON.__deserialize<i32>(valStart, valEnd, 0), offsetof<this>("y"));
        return;
      }
      case 122: { // z
        store<i32>(ptr, JSON.__deserialize<i32>(valStart, valEnd, 0), offsetof<this>("z"));
        return;
      }
    }
    return;
  }
}
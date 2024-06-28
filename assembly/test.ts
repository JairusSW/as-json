import {
  __atoi_fast
} from "json-as/assembly/util";
import {
  JSON as __JSON
} from "json-as/assembly";
import {
  JSON
} from ".";
@json
class Inner {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  __SERIALIZE(): string {
    let out = `{"name":${__JSON.stringify<string>(this.name)},`;
    store<u16>(changetype<usize>(out) + ((out.length - 1) << 1), 125);
    return out;
  }
  __INITIALIZE(): this {
    return this;
  }
  __DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {
    const len = key_end - key_start;
    if (4 === len) {
      const code = load<u64>(changetype<usize>(data) + (key_start << 1));
      if (28429440805568622 === code) {
        this.name = __JSON.parse<string>(data.substring(value_start, value_end));
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
@json
class Outer {
  name: string;
  m: Map<string, Inner>;
  constructor(name: string) {
    this.name = name;
    this.m = new Map<string, Inner>();
  }
  __SERIALIZE(): string {
    let out = `{"name":${__JSON.stringify<string>(this.name)},"m":${__JSON.stringify<Map<string, Inner>>(this.m)},`;
    store<u16>(changetype<usize>(out) + ((out.length - 1) << 1), 125);
    return out;
  }
  __INITIALIZE(): this {
    return this;
  }
  __DESERIALIZE(data: string, key_start: i32, key_end: i32, value_start: i32, value_end: i32): boolean {
    const len = key_end - key_start;
    if (1 === len) {
      switch (load<u16>(changetype<usize>(data) + (key_start << 1))) {
        case 109:
          {
            this.m = __JSON.parse<Map<string, Inner>>(data.substring(value_start, value_end));
            return true;
          }

        default:
          {
            return false;
          }

}
    } else if (4 === len) {
      const code = load<u64>(changetype<usize>(data) + (key_start << 1));
      if (28429440805568622 === code) {
        this.name = __JSON.parse<string>(data.substring(value_start, value_end));
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}

console.log(JSON.stringify(new Map<string, Inner>()))
let serializedState = JSON.stringify(new Outer("haadf"));
console.log(serializedState);

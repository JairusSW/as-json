import { snip_fast } from "../src/util";

// @ts-ignore: Decorator
@inline export function deserializeNumber<T>(data: string): T {
    if (isInteger<T>()) {
      // @ts-ignore
      return snip_fast<T>(data);
    }
    // @ts-ignore
    const type: T = 0;
    // @ts-ignore
    if (type instanceof f64) return f64.parse(data);
    // @ts-ignore
    else if (type instanceof f32) return f32.parse(data);
  }
  
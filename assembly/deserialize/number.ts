import { __atoi_fast, snip_fast } from "../src/util";


// @ts-ignore: Decorator
@inline export function deserializeNumber<T>(data: string, start: i32 = 0, end: i32 = 0): T {
  if (isInteger<T>()) {
    // @ts-ignore
    return __atoi_fast<T>(
      data,
      start << 1,
      end << 1 || data.length << 1
    );
  }
  // @ts-ignore
  const type: T = 0;
  // @ts-ignore
  if (type instanceof f64) return f64.parse(data.slice(start, end));
  // @ts-ignore
  else if (type instanceof f32) return f32.parse(data.slice(start, end));
}

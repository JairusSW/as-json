// @ts-ignore: Decorator valid here
@inline export function deserializeFloat<T>(data: string): T {
  // @ts-ignore
  const type: T = 0;
  // @ts-ignore
  if (type instanceof f64) return f64.parse(data);
  // @ts-ignore
  return f32.parse(data);
}

// @ts-ignore: Decorator valid here
@inline export function deserializeFloat_NEW<T>(srcStart: usize, srcEnd: usize): T {
   // @ts-ignore
   const type: T = 0;
   // @ts-ignore
   if (type instanceof f64) return f64.parse(str(srcStart, srcEnd));
   // @ts-ignore
   return f32.parse(str(srcStart, srcEnd));
}

function str(start: usize, end: usize): string {
  const size = end - start;
  const out = __new(size, idof<string>());
  memory.copy(out, start, size);
  return changetype<string>(out);
}
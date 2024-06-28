// @ts-ignore: Decorator valid here
@inline export function deserializeFloat<T>(data: string): T {
    // @ts-ignore
    const type: T = 0;
    // @ts-ignore
    if (type instanceof f64) return f64.parse(data);
    // @ts-ignore
    return f32.parse(data);
}
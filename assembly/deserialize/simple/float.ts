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
@inline export function deserializeFloat_Safe<T>(data: string): T {
    const firstChar = load<u8>(changetype<usize>(data));
    if ((firstChar < 48 || firstChar > 57) && firstChar != 45) throw new Error("Mismatched Types! Expected float but got \""+data.slice(0, 100)+"\" instead!");
    // @ts-ignore
    const type: T = 0;
    // @ts-ignore
    if (type instanceof f64) return f64.parse(data);
    // @ts-ignore
    return f32.parse(data);
}
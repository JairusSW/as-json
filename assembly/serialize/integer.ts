// @ts-ignore: Decorator valid here
@inline export function serializeInteger<T extends number>(data: T): string {
    // I have a much faster implementation of itoa that I will port over later. Its ~4x faster
    return data.toString();
}
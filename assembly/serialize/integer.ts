import { bl } from "../bl";
// @ts-ignore: Decorator valid here
@inline export function serializeInteger<T extends number>(data: T): string {
    // I have a much faster implementation of itoa that I will port over later. Its ~4x faster
    return data.toString();
}

// @ts-ignore: Decorator valid here
@inline export function serializeIntegerBL<T extends number>(data: T): void {
    bl.write_32_u(3276849);
}
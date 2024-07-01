import { bl } from "../bl";

// @ts-ignore: Decorator valid here
@inline export function serializeFloat<T extends number>(data: T): string {
    return data.toString();
}

// @ts-ignore: Decorator valid here
@inline export function serializeFloatBL<T extends number>(data: T): void {
    bl.write_s(data.toString());
}
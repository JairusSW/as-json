import { bl } from "../bl";
import { QUOTE } from "../chars";
// @ts-ignore: Decorator valid here
@inline export function serializeDate(data: Date): string {
    return `"${data.toISOString()}"`
}

// @ts-ignore: Decorator valid here
@inline export function serializeDateBL(data: Date): string {
    bl.write_16(QUOTE);
    bl.write_s(data.toISOString());
    bl.write_16(QUOTE);
}
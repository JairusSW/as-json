import { bl } from "../bl";
import { FALSE_PTR, TRUE_PTR } from "../chars";

/**
 * Serialize a bool to type string
 * @param data data to serialize
 * @returns string
 */
// @ts-ignore: Decorator valid here
@inline export function serializeBool(data: bool): string {
    return data ? "true" : "false";
}

// @ts-ignore: Decorator valid here
@inline export function serializeBoolBL(data: bool): void {
    if (data) {
        bl.write_b(TRUE_PTR, 10);
    } else {
        bl.write_b(FALSE_PTR, 12);
    }
}
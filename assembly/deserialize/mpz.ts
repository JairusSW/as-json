import { MpZ } from "@hypercubed/as-mpz";

/**
 * Deserialize a string to type MpZ
 * @param data data to parse
 * @returns MpZ
 */
// @ts-ignore: Decorator valid here
@inline export function deserializeMpZ(data: string, start: i32 = 0, end: i32 = 0): MpZ {
    if (!end) end = data.length;
    return MpZ.from(data.slice(start, end));
}
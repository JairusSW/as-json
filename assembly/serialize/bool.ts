/**
 * Serialize a bool to type string
 * @param data data to serialize
 * @returns string
 */

import { bs } from "../custom/bs";

// @ts-ignore: Decorator valid here
@inline export function serializeBool(data: bool): string {
    return data ? "true" : "false";
}

@inline export function serializeBool_BS(data: bool): void {
    if (data === true) {
        bs.write_64(28429475166421108); /* true */
    } else {
        //bs.write_128_n(i16x8(102, 97, 108, 115, 101, 0, 0, 0), 10);
        bs.write_64(32370086184550502); /* fals */
        bs.write_16(101); /* e */
    }
}
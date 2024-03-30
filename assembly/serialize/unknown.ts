import { JSON } from "..";
import { __atoi_fast } from "../src/util";
import { serializeString } from "./string";

/**
 * Serializes unknown values into their correct serializer and returns the data.
 *
 * @param data - The JSON.Value to be serialized.
 * @returns The serialized result.
 */
export function serializeUnknown(data: JSON.Value): string {
    const type = data.type;
    switch (type) {
        case JSON.Types.String: {
            return serializeString(data.get<string>());
        }
        case JSON.Types.U8: {
            return data.get<u8>().toString();
        }
        case JSON.Types.U16: {
            return data.get<u16>().toString();
        }
        case JSON.Types.U32: {
            return data.get<u32>().toString();
        }
        case JSON.Types.U64: {
            return data.get<u64>().toString();
        }
    }
    // handle fail. skip, dump, crash
    return unreachable();
}
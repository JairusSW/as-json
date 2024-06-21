import { JSON } from "..";
import { Sink } from "../sink";
import { __atoi_fast } from "../util";
import { serializeUnknownArray } from "./array/unknown";
import { serializeBool } from "./bool";
import { serializeFloat } from "./float";
import { serializeInteger } from "./integer";
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
        case JSON.Types.Bool: {
            return serializeBool(data.get<bool>());
        }
        case JSON.Types.U8: {
            return serializeInteger(data.get<u8>());
        }
        case JSON.Types.U16: {
            return serializeInteger(data.get<u16>());
        }
        case JSON.Types.U32: {
            return serializeInteger(data.get<u32>());
        }
        case JSON.Types.U64: {
            return serializeInteger(data.get<u64>());
        }
        case JSON.Types.F32: {
            return serializeFloat(data.get<f32>());
        }
        case JSON.Types.F64: {
            return serializeFloat(data.get<f64>());
        }
    }
    return serializeUnknownArray(data.get<JSON.Value[]>());
}
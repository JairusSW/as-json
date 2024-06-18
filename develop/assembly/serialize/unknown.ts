import { JSON } from "..";
import { Sink } from "../src/sink";
import { __atoi_fast } from "../src/util";
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
export function serializeUnknown(data: JSON.Value, out: Sink | null = null): Sink {
    const type = data.type;
    switch (type) {
        case JSON.Types.String: {
            return serializeString(data.get<string>(), out);
        }
        case JSON.Types.Boolean: {
            return serializeBool(data.get<bool>(), out);
        }
        case JSON.Types.U8: {
            return serializeInteger(data.get<u8>(), out);
        }
        case JSON.Types.U16: {
            return serializeInteger(data.get<u16>(), out);
        }
        case JSON.Types.U32: {
            return serializeInteger(data.get<u32>(), out);
        }
        case JSON.Types.U64: {
            return serializeInteger(data.get<u64>(), out);
        }
        case JSON.Types.F32: {
            return serializeFloat(data.get<f32>(), out);
        }
        case JSON.Types.F64: {
            return serializeFloat(data.get<f64>(), out);
        }
    }
    return serializeUnknownArray(data.get<JSON.Value[]>(), out);
    
}
import { StringSink } from "as-string-sink/assembly";
import { __atoi_fast, getArrayDepth } from "./src/util";
import { serializeString } from "./serialize/string";
import { serializeUnknown } from "./serialize/unknown";
import { Variant } from "as-variant/assembly";
import { deserializeString } from "./deserialize/string";
import { deserializeBoolean } from "./deserialize/boolean";
import { falseWord, trueWord } from "./src/chars";
import { Sink } from "./src/sink";
import { serializeBool } from "./serialize/bool";
import { serializeInteger } from "./serialize/integer";
import { serializeFloat } from "./serialize/float";
import { serializeStringArray } from "./serialize/array/string";
import { serializeIntegerArray } from "./serialize/array/integer";
import { serializeFloatArray } from "./serialize/array/float";
import { serializeUnknownArray } from "./serialize/array/unknown";
import { serializeBoolArray } from "./serialize/array/bool";
import { serializeMap } from "./serialize/map";
import { Product, ProductValue } from "./product";

/**
 * Offset of the 'storage' property in the JSON.Value class.
 */
// @ts-ignore: Decorator valid here
@inline const STORAGE = offsetof<JSON.Value>("storage");

export namespace JSON {
    /**
     * Enum representing the different types supported by JSON.
     */
    export enum Types {
        U8,
        U16,
        U32,
        U64,
        F32,
        F64,
        Boolean,
        String,
        Obj,
        Array
    }
    //export type Key = string | number;
    export class Value {
        public type: i32;
        public length: i32 = 0;

        private storage: u64;

        private constructor() { unreachable(); }

        /**
         * Creates an JSON.Value instance from a given value.
         * @param value - The value to be encapsulated.
         * @returns An instance of JSON.Value.
         */
        @inline static from<T>(value: T): JSON.Value {
            if (value instanceof Variant) {
                // Handle
            } else if (value instanceof JSON.Value) {
                return value;
            }
            const out = changetype<JSON.Value>(__new(offsetof<JSON.Value>(), idof<JSON.Value>()));
            out.set<T>(value);
            return out;
        }

        /**
         * Sets the value of the JSON.Value instance.
         * @param value - The value to be set.
         */
        @inline set<T>(value: T): void {
            if (isBoolean<T>()) {
                this.type = JSON.Types.Boolean;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (value instanceof u8 || value instanceof i8) {
                this.type = JSON.Types.U8;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (value instanceof u16 || value instanceof i16) {
                this.type = JSON.Types.U16;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (value instanceof u32 || value instanceof i32) {
                this.type = JSON.Types.U32;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (value instanceof u64 || value instanceof i64) {
                this.type = JSON.Types.U64;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (value instanceof f32) {
                this.type = JSON.Types.F64;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (value instanceof f64) {
                this.type = JSON.Types.F64;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (isString<T>()) {
                this.type = JSON.Types.String;
                this.length = String.UTF8.byteLength(value as string);
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (value instanceof Map) {
                if (idof<T>() !== idof<Map<string, JSON.Value>>()) {
                    abort("Maps must be of type Map<string, JSON.Value>!");
                }
                this.type = JSON.Types.Obj;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (isArray<T>()) {
                // @ts-ignore: T satisfies constraints of any[]
                this.type = JSON.Types.Array + getArrayDepth<T>(0);
                // @ts-ignore
                this.length = value.length;
                store<T>(changetype<usize>(this), value, STORAGE);
            }
        }

        /**
         * Gets the value of the JSON.Value instance.
         * @returns The encapsulated value.
         */
        @inline get<T>(): T {
            return load<T>(changetype<usize>(this), STORAGE);
        }

        /**
         * Converts the JSON.Value to a string representation.
         * @param useString - If true, treats Buffer as a string.
         * @returns The string representation of the JSON.Value.
         */
        toString(useString: boolean = false): string {
            switch (this.type) {
                case JSON.Types.U8: return this.get<u8>().toString();
                case JSON.Types.U16: return this.get<u16>().toString();
                case JSON.Types.U32: return this.get<u32>().toString();
                case JSON.Types.U64: return this.get<u64>().toString();
                case JSON.Types.String: return "\"" + this.get<string>() + "\"";
                case JSON.Types.Boolean: return this.get<boolean>() ? trueWord : falseWord;
                default: {
                    const arr = this.get<JSON.Value[]>();
                    if (!arr.length) return "[]";
                    const out = new StringSink("[");
                    for (let i = 0; i < arr.length - 1; i++) {
                        const element = unchecked(arr[i]);
                        out.write(element.toString(useString));
                        out.write(",");
                    }

                    const element = unchecked(arr[arr.length - 1]);
                    out.write(element.toString(useString));

                    out.write("]");
                    return out.toString();
                }
            }
        }
    }
    /**
     * Serializes the given data to an JSON-encoded String.
     * @param data - The data to be serialized.
     * @returns The JSON-encoded String.
     */
    // @ts-ignore: Decorator valid here
    @inline export function serialize<T>(data: T, out: Sink | null = null): Sink {
        if (isString<T>()) {
            return serializeString(data as string, out);
        } else if (isBoolean<T>()) {
            return serializeBool(data as boolean, out)
        } else if (isInteger<T>()) {
            return serializeInteger<T>(data, out);
        } else if (isFloat<T>()) {
            return serializeFloat<T>(data, out);
        } else if (isArray<T>()) {
            if (isString<valueof<T>>()) {
                return serializeStringArray(data as string[], out);
            } else if (isBoolean<valueof<T>>()) {
                return serializeBoolArray(data as bool[], out);
            } else if (isInteger<valueof<T>>()) {
                return serializeIntegerArray(data, out);
            } else if (isFloat<valueof<T>>()) {
                return serializeFloatArray(data, out);
            } else if (isArray<valueof<T>>()) {
                abort("Not implemented yet")
            } else if (idof<valueof<T>>() === idof<JSON.Value>()) {
                return serializeUnknownArray(data as JSON.Value[], out);
            }
        } else if (data instanceof JSON.Value) {
            return serializeUnknown(data as JSON.Value, out);
            // @ts-ignore
        } else if (data instanceof Map) {
            return serializeMap(data, out);
        } else if (isDefined(data.__JSON_Serialize)) {
            // @ts-ignore
            return data.__JSON_Serialize(out);
        }
    }
    /**
     * Deserializes the given JSON-encoded string to the specified type.
     * @param data - The JSON-encoded string to be deserialized.
     * @returns The deserialized data of type T.
     * @throws Error if deserialization fails.
     */
    // @ts-ignore: Decorator valid here
    @inline export function parse<T>(data: string): T {
        if (isString<T>()) {
            return deserializeString(data);
        } else if (isBoolean<T>()) {
            return deserializeBoolean(data);
        } /*else if (isInteger<T>()) {
            // @ts-ignore: Returns T
            return __atoi_fast<T>(data);
        } else if (idof<T>() === idof<JSON.Value>()) {
            // @ts-ignore: Returns T
            return deserializeUnknown(data);
        }*/
        
        abort(`Could not deserialize data of type ${nameof<T>()}`);
    }
}
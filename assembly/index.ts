/**
 * Offset of the 'storage' property in the JSON.Value class.
 */

import { StringSink } from "as-string-sink/assembly";
import { __atoi_fast, getArrayDepth } from "./src/util";
import { serializeString } from "./serialize/string";
import { serializeUnknown } from "./serialize/unknown";
import { Variant } from "as-variant/assembly";
import { deserializeString } from "./deserialize/string";
import { deserializeUnknown } from "./deserialize/unknown";
import { deserializeBoolean } from "./deserialize/boolean";
import { falseWord, trueWord } from "./src/chars";

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
        Boolean,
        String,
        Array
    }
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
            } else if (value instanceof u8) {
                this.type = JSON.Types.U8;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (value instanceof u16) {
                this.type = JSON.Types.U16;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (value instanceof u32) {
                this.type = JSON.Types.U32;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (value instanceof u64) {
                this.type = JSON.Types.U64;
                store<T>(changetype<usize>(this), value, STORAGE);
            } else if (isString<T>()) {
                this.type = JSON.Types.String;
                this.length = String.UTF8.byteLength(value as string);
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
    @inline export function serialize<T>(data: T): string {
        if (isString<T>()) {
            return serializeString(data as string);
        } else if (isBoolean<T>()) {
            // @ts-ignore
            return data.toString();
        } else if (isInteger<T>()) {
            // @ts-ignore
            return data.toString();
        } else if (data instanceof JSON.Value) {
            return serializeUnknown(data as JSON.Value);
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
            // @ts-ignore: Returns T
            return deserializeString(data);
        } else if (isBoolean<T>()) {
            // @ts-ignore: Returns T
            return deserializeBoolean(data);
        } else if (isInteger<T>()) {
            // @ts-ignore: Returns T
            return __atoi_fast<T>(data);
        } else if (idof<T>() === idof<JSON.Value>()) {
            // @ts-ignore: Returns T
            return deserializeUnknown(data).unwrap();
        }
        throw new Error(`Could not deserialize data of type ${nameof<T>()}`);
    }
}
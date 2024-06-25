/// <reference path="./index.d.ts" />
import { serializeString } from "./serialize/string";
import { serializeBool } from "./serialize/bool";
import { serializeInteger } from "./serialize/integer";
import { serializeFloat } from "./serialize/float";
import { serializeObject } from "./serialize/object";
import { serializeDate } from "./serialize/date";
import { serializeArray } from "./serialize/array";
import { serializeMap } from "./serialize/map";
import { deserializeBoolean } from "./deserialize/bool";
import { deserializeArray } from "./deserialize/array";
import { deserializeFloat } from "./deserialize/float";
import { deserializeObject } from "./deserialize/object";
import { deserializeMap } from "./deserialize/map";
import { deserializeDate } from "./deserialize/date";
import { FALSE_WORD, NULL_WORD, TRUE_WORD } from "./chars";
import { deserializeInteger } from "./deserialize/integer";
import { deserializeString } from "./deserialize/string";
import { Sink } from "./sink";
import { Variant } from "as-variant/assembly";
import { MpZ } from "@hypercubed/as-mpz";
import { serializeMpZ } from "./serialize/mpz";
import { deserializeMpZ } from "./deserialize/mpz";

/**
 * Offset of the 'storage' property in the JSON.Value class.
 */
// @ts-ignore: Decorator valid here
const STORAGE = offsetof<JSON.Value>("storage");

/**
 * JSON Encoder/Decoder for AssemblyScript
 */
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
    Bool,
    String,
    ManagedString,
    Struct,
    ManagedStruct,
    Array,
    ManagedArray
  }

  export class Value {
    public type: i32;
    // @ts-ignore: storage is set directly through memory
    private storage: u64;

    private constructor() { unreachable(); }

    /**
     * Creates an JSON.Value instance from a given value.
     * @param value - The value to be encapsulated.
     * @returns An instance of JSON.Value.
     */
    static from<T>(value: T): JSON.Value {
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
    set<T>(value: T): void {
      if (isBoolean<T>()) {
        this.type = JSON.Types.Bool;
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
        store<T>(changetype<usize>(this), value, STORAGE);
      } else if (value instanceof Map) {
        if (idof<T>() !== idof<Map<string, JSON.Value>>()) {
          throw new Error("Maps must be of type Map<string, JSON.Value>!");
        }
        this.type = JSON.Types.Struct;
        store<T>(changetype<usize>(this), value, STORAGE);
        // @ts-ignore: __SERIALIZE is implemented by the transform
      } else if (isDefined(value.__SERIALIZE)) {
        this.type = JSON.Types.Struct;
        store<T>(changetype<usize>(this), value, STORAGE);
      } else if (isArray<T>()) {
        // @ts-ignore: T satisfies constraints of any[]
        this.type = JSON.Types.Array + getArrayDepth<T>(0);
        store<T>(changetype<usize>(this), value, STORAGE);
      }
    }

    /**
     * Gets the value of the JSON.Value instance.
     * @returns The encapsulated value.
     */
    unwrap<T>(): T {
      if (isManaged<T>()) {
        if (this.type !== JSON.Types.Struct) throw new Error("Type mismatch");
        if (idof<T>() !== load<u32>(changetype<usize>(this.storage), -8)) throw new Error("Type mismatch");
      }
      return load<T>(changetype<usize>(this), STORAGE);
    }

    /**
     * Gets the value of the JSON.Value instance.
     * @returns The encapsulated value.
     */
    unwrapUnsafe<T>(): T {
      return load<T>(changetype<usize>(this), STORAGE);
    }

    /**
     * Gets the value of the JSON.Value instance.
     * @returns The encapsulated value.
     */
    get<T>(): T {
      return load<T>(changetype<usize>(this), STORAGE);
    }

    /**
     * Gets the value of the JSON.Value instance.
     * @returns The encapsulated value.
     */
    getUnsafe<T>(): T {
      return load<T>(changetype<usize>(this), STORAGE);
    }

    /**
     * Gets the value of the JSON.Value instance.
     * @returns The encapsulated value.
     */
    is<T>(): T {
      return load<T>(changetype<usize>(this), STORAGE);
    }

    /**
     * Gets the value of the JSON.Value instance.
     * @returns The encapsulated value.
     */
    clone<T>(): T {
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
        case JSON.Types.Bool: return this.get<boolean>() ? TRUE_WORD : FALSE_WORD;
        default: {
          const arr = this.get<JSON.Value[]>();
          if (!arr.length) return "[]";
          const out = Sink.fromString("[");
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

  export class Box<T> {
    constructor(public value: T) {}
    @inline static from<T>(value: T): Box<T> {
      return new Box(value);
    }
  }
  
  /**
   * Stringifies valid JSON data.
   * ```js
   * JSON.stringify<T>(data)
   * ```
   * @param data T
   * @returns string
   */
  // @ts-ignore: Decorator
  export function stringify<T>(data: T): string {
    if (isBoolean<T>()) {
      return serializeBool(data as bool);
    } else if (isInteger<T>()) {
      // @ts-ignore
      return serializeInteger<T>(data);
    } else if (isFloat<T>(data)) {
      // @ts-ignore
      return serializeFloat<T>(data);
      // @ts-ignore: Function is generated by transform
    } else if (isNullable<T>() && changetype<usize>(data) == <usize>0) {
      return NULL_WORD;
      // @ts-ignore
    } else if (isString<nonnull<T>>()) {
      return serializeString(changetype<string>(data));
    } else if (isDefined(data.__SERIALIZE)) {
      // @ts-ignore
      return serializeObject(changetype<nonnull<T>>(data));
    } else if (data instanceof Date) {
      // @ts-ignore
      return serializeDate(changetype<nonnull<T>>(data));
    } else if (data instanceof Array) {
      // @ts-ignore
      return serializeArray(changetype<nonnull<T>>(data));
    } else if (data instanceof Map) {
      // @ts-ignore
      return serializeMap(changetype<nonnull<T>>(data));
    } else if (data instanceof MpZ) {
      return serializeMpZ(data);
    } else {
      throw new Error(
        `Could not serialize data of type ${nameof<T>()}. Make sure to add the correct decorators to classes.`
      );
    }
  }
  /**
   * Parses valid JSON strings into their original format.
   * ```js
   * JSON.parse<T>(data)
   * ```
   * @param data string
   * @returns T
   */

  // @ts-ignore: Decorator
  export function parse<T>(data: string): T {
    if (isBoolean<T>()) {
      return deserializeBoolean(data) as T;
    } else if (isInteger<T>()) {
      return deserializeInteger<T>(data);
    } else if (isFloat<T>()) {
      return deserializeFloat<T>(data);
    } else if (isNullable<T>() && data.length === 4 && data == "null") {
      // @ts-ignore
      return null;
    } else if (isString<T>()) {
      // @ts-ignore
      return deserializeString(data);
    } else if (isArray<T>()) {
      // @ts-ignore
      return deserializeArray<nonnull<T>>(data);
    }
    let type: nonnull<T> = changetype<nonnull<T>>(0);
    if (isDefined(type.__DESERIALIZE)) {
      // @ts-ignore
      return deserializeObject<nonnull<T>>(data.trimStart());
    } else if (type instanceof Map) {
      // @ts-ignore
      return deserializeMap<nonnull<T>>(data.trimStart());
    } else if (type instanceof MpZ) {
      // @ts-ignore
      return deserializeMpZ(data);
    }else if (type instanceof Date) {
      // @ts-ignore
      return deserializeDate(data);
    } else {
      throw new Error(
        `Could not deserialize data ${data} to type ${nameof<T>()}. Make sure to add the correct decorators to classes.`
      );
    }
  }
}
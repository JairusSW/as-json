/// <reference path="./index.d.ts" />

import { Box } from "as-container/assembly";

import { serializeString } from "./serialize/string";
import { serializeBool } from "./serialize/bool";
import { serializeBox } from "./serialize/box";
import { serializeInteger } from "./serialize/integer";
import { serializeFloat } from "./serialize/float";
import { serializeObject } from "./serialize/object";
import { serializeDate } from "./serialize/date";
import { serializeArray } from "./serialize/array";
import { serializeMap } from "./serialize/map";
import { deserializeBoolean } from "./deserialize/bool";
import { deserializeArray } from "./deserialize/array";
import { deserializeFloat } from "./deserialize/float";
import { deserializeBox } from "./deserialize/box";
import { deserializeObject } from "./deserialize/object";
import { deserializeMap } from "./deserialize/map";
import { deserializeDate } from "./deserialize/date";
import { falseWord, nullWord, trueWord } from "./src/chars";
import { deserializeInteger } from "./deserialize/integer";
import { deserializeString } from "./deserialize/string";
import { Sink } from "./src/sink";
import { Variant } from "as-variant/assembly";

/**
 * Offset of the 'storage' property in the JSON.Value class.
 */
// @ts-ignore: Decorator valid here
@inline const STORAGE = offsetof<JSON.Value>("storage");

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
    Boolean,
    String,
    Obj,
    Array
  }
  export class Value {
    public type: i32;
    public length: i32 = 0;

    // @ts-ignore: storage is set directly through memory
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
  /**
   * Stringifies valid JSON data.
   * ```js
   * JSON.stringify<T>(data)
   * ```
   * @param data T
   * @returns string
   */
  // @ts-ignore: Decorator
  @inline export function stringify<T>(data: T): string {
    if (isNullable<T>() && changetype<usize>(data) == <usize>0) {
      return nullWord;
      // @ts-ignore
    } else if (isString<T>()) {
      return serializeString(data as string);
    } else if (isBoolean<T>()) {
      return serializeBool(data as bool);
    } else if (data instanceof Box) {
      return serializeBox(data);
    } else if (isInteger<T>()) {
      // @ts-ignore
      return serializeInteger<T>(data);
    } else if (isFloat<T>(data)) {
      // @ts-ignore
      return serializeFloat<T>(data);
      // @ts-ignore: Function is generated by transform
    } else if (isDefined(data.__SERIALIZE)) {
      // @ts-ignore
      return serializeObject(data);
    } else if (data instanceof Date) {
      return serializeDate(data);
    } else if (data instanceof Array) {
      return serializeArray(data);
    } else if (data instanceof Map) {
      return serializeMap(data);
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
  @inline export function parse<T>(data: string): T {
    if (isString<T>()) {
      // @ts-ignore
      return deserializeString(data);
    } else if (isBoolean<T>()) {
      return deserializeBoolean(data) as T;
    } else if (isInteger<T>()) {
      return deserializeInteger<T>(data);
    } else if (isFloat<T>()) {
      return deserializeFloat<T>(data);
    } else if (isArray<T>()) {
      // @ts-ignore
      return deserializeArray<T>(data);
    }
    let type: nonnull<T> = changetype<nonnull<T>>(__new(offsetof<nonnull<T>>(), idof<nonnull<T>>()));
    if (type instanceof Box) {
      return deserializeBox<T>(data);
    } else if (isNullable<T>() && data == nullWord) {
      // @ts-ignore
      return null;
      // @ts-ignore
    } else if (isDefined(type.__DESERIALIZE)) {
      return deserializeObject<T>(data.trimStart());
    } else if (type instanceof Map) {
      return deserializeMap<T>(data.trimStart());
    } else if (type instanceof Date) {
      // @ts-ignore
      return deserializeDate(data);
    } else {
      throw new Error(
        `Could not deserialize data ${data} to type ${nameof<T>()}. Make sure to add the correct decorators to classes.`
      );
    }
  }
}

// This allows JSON.stringify and JSON.parse to be available globally through an alias
// @ts-ignore: Decorator
@global @inline function __SERIALIZE<T>(data: T): string {
  return JSON.stringify(data);
}
// @ts-ignore: Decorator
@global @inline function __DESERIALIZE<T>(data: string): T {
  return JSON.parse<T>(data);
}
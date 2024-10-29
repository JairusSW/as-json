/// <reference path="./index.d.ts" />
import { serializeString } from "./serialize/simple/string";
import { serializeBool } from "./serialize/simple/bool";
import { serializeInteger } from "./serialize/simple/integer";
import { serializeFloat } from "./serialize/simple/float";
import { serializeObject } from "./serialize/simple/object";
import { serializeDate } from "./serialize/simple/date";
import { serializeArray } from "./serialize/simple/array";
import { serializeMap } from "./serialize/simple/map";
import { deserializeBoolean, deserializeBoolean_Safe } from "./deserialize/simple/bool";
import { deserializeArray, deserializeArray_Safe } from "./deserialize/simple/array";
import { deserializeFloat } from "./deserialize/simple/float";
import { deserializeObject, deserializeObject_Safe } from "./deserialize/simple/object";
import { deserializeMap, deserializeMap_Safe } from "./deserialize/simple/map";
import { deserializeDate } from "./deserialize/simple/date";
import { BRACE_LEFT, BRACKET_LEFT, CHAR_F, CHAR_N, CHAR_T, NULL_WORD, QUOTE } from "./custom/chars";
import { deserializeInteger, deserializeInteger_Safe } from "./deserialize/simple/integer";
import { deserializeString, deserializeString_Safe } from "./deserialize/simple/string";
import { Sink } from "./custom/sink";
import { getArrayDepth } from "./custom/util";

// Config
class SerializeOptions {
  public pretty: bool = false;
}

const DEFAULT_SERIALIZE_OPTIONS = new SerializeOptions();

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
    Raw = 0,
    U8 = 1,
    U16 = 2,
    U32 = 3,
    U64 = 4,
    F32 = 5,
    F64 = 6,
    Bool = 7,
    String = 8,
    Obj = 8,
    Array = 9
  }
  export type Raw = string;
  export class Value {
    public type: i32;

    // @ts-ignore
    private storage: u64;

    private constructor() { unreachable(); }

    /**
     * Creates an JSON.Value instance from a given value.
     * @param value - The value to be encapsulated.
     * @returns An instance of JSON.Value.
     */
    @inline static from<T>(value: T): JSON.Value {
      if (value instanceof JSON.Value) {
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
          abort("Maps must be of type Map<string, JSON.Value>!");
        }
        this.type = JSON.Types.Obj;
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
    @inline get<T>(): T {
      return load<T>(changetype<usize>(this), STORAGE);
    }

    /**
     * Converts the JSON.Value to a string representation.
     * @param useString - If true, treats Buffer as a string.
     * @returns The string representation of the JSON.Value.
     */
    toString(): string {
      switch (this.type) {
        case JSON.Types.U8: return this.get<u8>().toString();
        case JSON.Types.U16: return this.get<u16>().toString();
        case JSON.Types.U32: return this.get<u32>().toString();
        case JSON.Types.U64: return this.get<u64>().toString();
        case JSON.Types.String: return "\"" + this.get<string>() + "\"";
        case JSON.Types.Bool: return this.get<boolean>() ? "true" : "false";
        default: {
          const arr = this.get<JSON.Value[]>();
          if (!arr.length) return "[]";
          const out = Sink.fromStringLiteral("[");
          const end = arr.length - 1;
          for (let i = 0; i < end; i++) {
            const element = unchecked(arr[i]);
            out.write(element.toString());
            out.write(",");
          }

          const element = unchecked(arr[end]);
          out.write(element.toString());

          out.write("]");
          return out.toString();
        }
      }
    }
  }
  export class Box<T> {
    constructor(public value: T) { }
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
  @inline export function stringify<T>(data: T/*, options: SerializeOptions = DEFAULT_SERIALIZE_OPTIONS*/): string {
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
      // @ts-ignore: Supplied by transform
    } else if (isDefined(data.__SERIALIZE)) {
      /*if (options.pretty) {
        // @ts-ignore
        return serializeObject_Pretty(changetype<nonnull<T>>(data));
      }*/
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
    // @ts-ignore: Defined by transform
    if (isDefined(type.__DESERIALIZE)) {
      // @ts-ignore
      return deserializeObject<nonnull<T>>(data.trimStart());
    } else if (type instanceof Map) {
      // @ts-ignore
      return deserializeMap<nonnull<T>>(data.trimStart());
    } else if (type instanceof Date) {
      // @ts-ignore
      return deserializeDate(data);
    } else {
      throw new Error(
        `Could not deserialize data ${data} to type ${nameof<T>()}. Make sure to add the correct decorators to classes.`
      );
    }
  }
  /**
   * Parses valid JSON strings into their original format (safely).
   * ```js
   * JSON.parseSafe<T>(data)
   * ```
   * @param data string
   * @returns T
   */

  // @ts-ignore: Decorator
  @inline export function parseSafe<T>(data: string): T {
    if (isBoolean<T>()) {
      return deserializeBoolean_Safe(data) as T;
    } else if (isInteger<T>()) {
      return deserializeInteger_Safe<T>(data);
    } else if (isFloat<T>()) {
      return deserializeFloat<T>(data);
    } else if (isNullable<T>() && data.length === 4 && data == "null") {
      // @ts-ignore
      return null;
    } else if (isString<T>()) {
      // @ts-ignore
      return deserializeString_Safe(data);
    } else if (isArray<T>()) {
      // @ts-ignore
      return deserializeArray_Safe<nonnull<T>>(data);
    }
    let type: nonnull<T> = changetype<nonnull<T>>(0);
    // @ts-ignore: Defined by transform
    if (isDefined(type.__DESERIALIZE)) {
      // @ts-ignore
      return deserializeObject_Safe<nonnull<T>>(data.trimStart());
    } else if (type instanceof Map) {
      // @ts-ignore
      return deserializeMap_Safe<nonnull<T>>(data.trimStart());
    } else if (type instanceof Date) {
      // @ts-ignore
      return deserializeDate_Safe(data);
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
// @ts-ignore: Decorator
@global @inline function __DESERIALIZE_SAFE<T>(data: string): T {
  return JSON.parseSafe<T>(data);
}
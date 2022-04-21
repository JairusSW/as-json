import { StringSink } from "as-string-sink"
export class Option<T> {
  exists: boolean;
}
export class JSONValue {
  kind: u8;
  value: u64;
  @inline
  is<T>(): boolean {
    let t: T;
    //@ts-ignore
    if (t instanceof string) return this.kind == 0;
    //@ts-ignore
    else if (isFloat<T>()) return this.kind == 1;
    //@ts-ignore
    else if (t instanceof JSONobject) return this.kind == 2;
    //@ts-ignore
    else if (t instanceof JSONArray) return this.kind == 3;
    //@ts-ignore
    else if (t instanceof JSONNull) return this.kind == 4;
    else if (isBoolean<T>()) return this.kind == 5;
    else ERROR("TYPE <T> PASSED TO JSONValue.is is NOT one of the three ");
  }

  @inline as<T>(): T {
    let t = changetype<T>(null)!;
    //@ts-ignore
    if (isNullable<T>())//@ts-ignore
      return this.is<NonNullable<T>>() ? this.asUnchecked<T>() : null;
    if (this.is<T>()) return this.asUnchecked<T>();
    else throw new Error(`JSON type mismatch.`);
  }

  @inline expect<T>(message: string): T {
    if (this.is<T>()) return this.asUnchecked<T>();
    else throw new Error(message);
  }

  @inline
  asUnchecked<T>(): T {
    let t: T;
    //@ts-ignore
    if (t instanceof string) return changetype<string>(usize(this.value));
    //@ts-ignore
    else if (isFloat<T>()) return reinterpret<f64>(this.value);
    //@ts-ignore
    else if (t instanceof JSONobject)
      //@ts-ignore
      return changetype<JSONobject>(usize(this.value));
    //@ts-ignore
    else if (t instanceof JSONArray)
      //@ts-ignore
      return changetype<JSONArray>(usize(this.value));
    //@ts-ignore
    else if (isBoolean<T>()) return bool(this.value);
    else ERROR("Type T is not a member of the four possible json types.");
  }

  private constructor(kind: u8, value: u64) {
    this.kind = kind;
    this.value = value;
  }
  @inline()
  static from<T>(t: T): JSONValue {
    //@ts-ignore
    if (t instanceof string) return new JSONValue(0, u64(changetype<usize>(t)));
    //@ts-ignore
    else if (isFloat<T>()) return new JSONValue(1, reinterpret<u64>(t));
    else if (t instanceof JSONobject)
      return new JSONValue(2, u64(changetype<usize>(t)));
    else if (t instanceof JSONArray)
      return new JSONValue(3, u64(changetype<usize>(t)));
    else if (isBoolean<T>())
      return new JSONValue(4, u64(t));
    else ERROR("Type T is not a member of the four possible json types.");
  }
  @unsafe private __visit(cookie: u32): void {
    if (this.kind != 1) __visit(this.value as usize, cookie);
  }
  @inline public static null(): JSONNull {
    return Null;
  }
  //@ts-ignore
  toString(): string {
    if (this.kind == 0) {
      return '"' + changetype<string>(usize(this.value)) + '"';
    }
    else if (this.kind == 1) return reinterpret<f64>(this.value).toString();
    else if (this.kind == 2) return changetype<JSONobject>(usize(this.value)).toString();
    else if (this.kind == 3) return changetype<JSONArray>(usize(this.value)).toString();
    else if (this.kind == 4) return "null";
    else if (this.kind == 5) return bool(this.value) ? "true" : "false"
    else throw new Error("Unreachable : Jsontype is not of correct kind.")
  }
}

export class JSONArray extends Array<JSONValue> {
  toString(): string {
    const result = new StringSink("[");
    let len = this.length - 1;
    if (len == -1) return "[]";
    for (let i = 0; i < this.length - 1; i++) {
      result.write(this[i].toString())
      result.write(",")
    }
    result.write(this[len].toString())
    result.write("]")
    return result.toString();
  }
}
export class JSONobject extends Map<string, JSONValue> {
  toString(): string {
    let outString = "{"
    let keys = this.keys();
    let len = keys.length - 1;
    if (len == -1) return "{}"
    for (let i = 0; i < keys.length - 1; i++) {
      outString += '"' + keys[i].toString() + '":' + unchecked(this.get(keys[i])).toString() + ",";
    }
    outString += '"' + keys[len].toString() + '":' + unchecked(this.get(keys[len])).toString();
    return outString + "}"
  }
}
export class JSONNull {
  toString(): string {
    return "null";
  }
}

const Null = new JSONNull();
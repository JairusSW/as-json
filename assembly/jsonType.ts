export class Option<T> {
  exists: boolean;
}
export class JSONValue {
  kind: u8;
  value: u64;
  @inline
  is<T>(): boolean {
    let type!: T;
    if (type instanceof String) {
      return this.kind == 0;
    } else if (isFloat<T>()) {
      return this.kind == 1;
    } else if (type instanceof JSONObject) {
      return this.kind == 2;
    } else if (type instanceof JSONArray) {
      return this.kind == 3;
    } else if (type instanceof JSONNull) {
      return this.kind == 4;
    } else if (isBoolean<T>()) {
      return this.kind == 5;
    } else {
      ERROR("TYPE <T> PASSED TO JSONValue.is is NOT one of the three ");
    }
  }

  @inline as<T>(): T {
    let t = changetype<T>(null)!;
    //@ts-ignore
    if (isNullable<T>()) {
      // @ts-ignore
      return this.is<NonNullable<T>>() ? this.asUnchecked<T>() : null;
    } else if (this.is<T>()) {
      return this.asUnchecked<T>();
    } else {
      throw new Error(`JSON type mismatch.`);
    }
  }

  @inline expect<T>(message: string): T {
    if (this.is<T>()) {
      return this.asUnchecked<T>();
    } else {
      throw new Error(message);
    }
  }

  @inline
  asUnchecked<T>(): T {
    let type!: T;
    if (type instanceof String) {
      // @ts-ignore
      return changetype<string>(usize(this.value));
    }
    // What about infinity?
    else if (isFloat<T>()) {
      // @ts-ignore
      return reinterpret<f64>(this.value);
    } else if (type instanceof JSONObject) {
      // @ts-ignore
      return changetype<JSONObject>(usize(this.value));
    } else if (type instanceof JSONArray) {
      // @ts-ignore
      return changetype<JSONArray>(usize(this.value));
    } else if (isBoolean<T>()) {
      // @ts-ignore
      return bool(this.value);
    } else {
      ERROR("Type T is not a member of the four possible json types.");
    }
  }

  private constructor(kind: u8, value: u64) {
    this.kind = kind;
    this.value = value;
  }
  @inline()
  static from<T>(data: T): JSONValue {
    //@ts-ignore
    if (data instanceof string) {
      return new JSONValue(0, u64(changetype<usize>(data)));
    } else if ((isFloat<T>() || isInteger<T>())) {
      // @ts-ignore
      return new JSONValue(1, reinterpret<u64>(data));
    } else if (data instanceof JSONObject) {
      return new JSONValue(2, u64(changetype<usize>(data)));
    } else if (data instanceof JSONArray) {
      return new JSONValue(3, u64(changetype<usize>(data)));
    } else if (isNullable(data) && data == null) {
      return new JSONValue(4, u64(changetype<usize>(data)));
    } else if (isBoolean<T>()) {
      return new JSONValue(5, u64(data));
    } else {
      ERROR("Type T is not a member of the four possible json types.");
    }
  }
  @unsafe private __visit(cookie: u32): void {
    if (this.kind != 1) __visit(this.value as usize, cookie);
  }
  @inline public static null(): JSONNull {
    return Null;
  }
}

export class JSONArray extends Array<JSONValue> { }
export class JSONObject extends Map<string, JSONValue> { }
export class JSONNull { }

const Null = new JSONNull();
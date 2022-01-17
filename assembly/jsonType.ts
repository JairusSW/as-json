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
    else ERROR("TYPE <T> PASSED TO JSONValue.is is NOT one of the three ");
  }
  @inline as<T>(): T {
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
    else ERROR("Type T is not a member of the four possible json types.");
  }
  @unsafe private __visit(cookie: u32): void {
    if (this.kind != 1) __visit(this.value as usize, cookie);
  }
}

export class JSONArray extends Array<JSONValue> {}
export class JSONobject extends Map<string, JSONValue> {}

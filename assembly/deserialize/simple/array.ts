import { deserializeArrayArray } from "./array/array";
import { deserializeBooleanArray } from "./array/bool";
import { deserializeFloatArray } from "./array/float";
import { deserializeIntegerArray } from "./array/integer";
import { deserializeMapArray } from "./array/map";
import { deserializeObjectArray } from "./array/object";
import { deserializeStringArray } from "./array/string";

// @ts-ignore: Decorator valid here
export function deserializeArray<T extends unknown[]>(srcStart: usize, srcEnd: usize, dst: usize = 0): T {
  if (isString<valueof<T>>()) {
    return <T>deserializeStringArray(srcStart, srcEnd, dst);
  } else if (isBoolean<valueof<T>>()) {
    // @ts-ignore
    return deserializeBooleanArray<T>(srcStart, srcEnd, dst);
  } else if (isInteger<valueof<T>>()) {
    // @ts-ignore
    return deserializeIntegerArray<T>(srcStart, srcEnd, dst);
  } else if (isFloat<valueof<T>>()) {
    // @ts-ignore
    return deserializeFloatArray<T>(srcStart, srcEnd, dst);
  } else if (isArrayLike<valueof<T>>()) {
    // @ts-ignore
    return deserializeArrayArray<T>(srcStart, srcEnd, dst);
  } else if (isMap<valueof<T>>()) {
    return deserializeMapArray<T>(srcStart, srcEnd, dst);
  } else if (isManaged<valueof<T>>() || isReference<valueof<T>>()) {
    const type = changetype<nonnull<valueof<T>>>(0);
    // @ts-ignore
    if (isDefined(type.__DESERIALIZE)) {
      return deserializeObjectArray<T>(srcStart, srcEnd, dst);
    }
    throw new Error("Could not parse array of type " + nameof<T>() + "! Make sure to add the @json decorator over classes!");
  } else {
    throw new Error("Could not parse array of type " + nameof<T>() + "!");
  }
}

function isMap<T>(): boolean {
  let type: T = changetype<T>(0);
  return type instanceof Map;
}
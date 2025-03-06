import { JSON } from "../..";
import { deserializeArbitraryArray } from "./array/arbitrary";
import { deserializeArrayArray } from "./array/array";
import { deserializeBooleanArray } from "./array/bool";
import { deserializeFloatArray } from "./array/float";
import { deserializeIntegerArray } from "./array/integer";
import { deserializeMapArray } from "./array/map";
import { deserializeStructArray } from "./array/struct";
import { deserializeStringArray } from "./array/string";

// @ts-ignore: Decorator valid here
export function deserializeArray<T extends unknown[]>(srcStart: usize, srcEnd: usize, dst: usize): T {
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
    // @ts-ignore: type
    return deserializeArrayArray<T>(srcStart, srcEnd, dst);
  } else if (isManaged<valueof<T>>() || isReference<valueof<T>>()) {
    const type = changetype<nonnull<valueof<T>>>(0);
    if (type instanceof JSON.Value) {
      // @ts-ignore: type
      return deserializeArbitraryArray(srcStart, srcEnd, dst);
    } else if (type instanceof Map) {
      // @ts-ignore: type
      return deserializeMapArray<T>(srcStart, srcEnd, dst);
      // @ts-ignore: defined by transform
    } else if (isDefined(type.__DESERIALIZE_CUSTOM)) {
      return deserializeStructArray<T>(srcStart, srcEnd, dst);
      // @ts-ignore: defined by transform
    } else if (isDefined(type.__DESERIALIZE)) {
      return deserializeStructArray<T>(srcStart, srcEnd, dst);
    }
    throw new Error("Could not parse array of type " + nameof<T>() + "!");
  } else {
    throw new Error("Could not parse array of type " + nameof<T>() + "!");
  }
}

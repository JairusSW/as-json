import { isMap } from "../custom/util";
import { deserializeArrayArray } from "./array/array";
import { deserializeBooleanArray } from "./array/bool";
import { deserializeFloatArray } from "./array/float";
import { deserializeIntegerArray } from "./array/integer";
import { deserializeMapArray } from "./array/map";
import { deserializeObjectArray } from "./array/object";
import { deserializeStringArray } from "./array/string";

// @ts-ignore: Decorator valid here
export function deserializeArray<T extends unknown[]>(data: string): T {
  if (isString<valueof<T>>()) {
    return <T>deserializeStringArray(data);
  } else if (isBoolean<valueof<T>>()) {
    // @ts-ignore
    return deserializeBooleanArray<T>(data);
  } else if (isInteger<valueof<T>>()) {
    // @ts-ignore
    return deserializeIntegerArray<T>(data);
  } else if (isFloat<valueof<T>>()) {
    // @ts-ignore
    return deserializeFloatArray<T>(data);
  } else if (isArrayLike<valueof<T>>()) {
    // @ts-ignore
    return deserializeArrayArray<T>(data);
  } else if (isMap<valueof<T>>()) {
    return deserializeMapArray<T>(data);
  } else if (isManaged<valueof<T>>() || isReference<valueof<T>>()) {
    const type = changetype<nonnull<valueof<T>>>(0);
    // @ts-ignore
    if (isDefined(type.__DESERIALIZE)) {
      return deserializeObjectArray<T>(data);
    }
    throw new Error(
      "Could not parse array of type " +
        nameof<T>() +
        "! Make sure to add the @json decorator over classes!",
    );
  } else {
    throw new Error("Could not parse array of type " + nameof<T>() + "!");
  }
}

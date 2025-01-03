import { JSON } from "../..";
import { serializeArray } from "./array";
import { serializeBool } from "./bool";
import { serializeInteger } from "./integer";
import { serializeString } from "./string";

export function serializeArbitrary(src: JSON.Value, staticSize: bool = false): void {
  switch (src.type) {
    case JSON.Types.U8:
      serializeInteger<u8>(src.get<u8>(), staticSize);
      break;
    case JSON.Types.U16:
      serializeInteger<u16>(src.get<u16>(), staticSize);
      break;
    case JSON.Types.U32:
      serializeInteger<u32>(src.get<u32>(), staticSize);
      break;
    case JSON.Types.U64:
      serializeInteger<u64>(src.get<u64>(), staticSize);
      break;
    case JSON.Types.String:
      serializeString(src.get<string>(), staticSize);
      break;
    case JSON.Types.Bool:
      serializeBool(src.get<bool>(), staticSize);
    case JSON.Types.Array: {
      serializeArray(src.get<JSON.Value[]>(), staticSize);
      break;
    }
    default: {
      const fn = JSON.Value.METHODS.get(src.type - JSON.Types.Struct);
      const value = src.get<usize>();
      call_indirect<string>(fn, 0, value);
    }
  }
}

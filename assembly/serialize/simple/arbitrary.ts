import { JSON } from "../..";
import { Sink } from "../../custom/sink";


export function serializeArbitrary(data: JSON.Value): string {
  switch (data.type) {
    case JSON.Types.U8:
      return data.get<u8>().toString();
    case JSON.Types.U16:
      return data.get<u16>().toString();
    case JSON.Types.U32:
      return data.get<u32>().toString();
    case JSON.Types.U64:
      return data.get<u64>().toString();
    case JSON.Types.String:
      return JSON.stringify(data.get<string>());
    case JSON.Types.Bool:
      return data.get<boolean>() ? "true" : "false";
    case JSON.Types.Array: {
      const arr = data.get<JSON.Value[]>();
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
    default: {
      const fn = JSON.Value.METHODS.get(data.type - JSON.Types.Struct);
      const value = data.get<usize>();
      return call_indirect<string>(fn, 0, value);
    }
  }
}

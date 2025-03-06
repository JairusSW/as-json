import { bs } from "../../../lib/as-bs";
import { JSON } from "../..";
import { BRACE_LEFT, BRACE_RIGHT, QUOTE } from "../../custom/chars";
import { bytes } from "../../util";

export function serializeObject(data: JSON.Obj): void {
  if (!data.size) {
    store<u32>(bs.offset, 0);
    bs.offset += 4;
    return;
  }

  // This grabs `JSON.Obj.stackSize` which is private
  bs.ensureSize(load<u32>(changetype<usize>(data), offsetof<JSON.Obj>("stackSize")) - 2);
  const keys = data.keys();
  const values = data.values();

  // console.log(" Keys    " + keys.join(" "));
  // console.log(" Values  " + values.map<string>(v => v.toString()).join(" "))

  store<u16>(bs.offset, BRACE_LEFT);
  bs.offset += 2;

  const firstKey = unchecked(keys[0]);
  const keySize = bytes(firstKey);
  store<u16>(bs.offset, QUOTE);
  memory.copy(bs.offset + 2, changetype<usize>(firstKey), keySize);
  store<u32>((bs.offset += keySize + 2), 3801122); // ":
  bs.offset += 4;
  JSON.__serialize(unchecked(values[0]));

  for (let i = 1; i < keys.length; i++) {
    const key = unchecked(keys[i]);
    const keySize = bytes(key);
    store<u32>(bs.offset, 2228268); // ,"
    memory.copy(bs.offset + 4, changetype<usize>(key), keySize);
    store<u32>((bs.offset += keySize + 4), 3801122); // ":
    bs.offset += 4;
    JSON.__serialize(unchecked(values[i]));
  }

  store<u16>(bs.offset, BRACE_RIGHT);
  bs.offset += 2;
}

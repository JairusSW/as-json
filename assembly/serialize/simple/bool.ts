import { bs } from "../../custom/bs";

/**
 * Serialize a bool to type string
 * @param data data to serialize
 * @returns void
 */
// @ts-ignore: Decorator valid here
@inline export function serializeBool(data: bool, staticSize: bool = false): void {
  if (data == true) {
    if (!staticSize) bs.ensureSize(8);
    store<u64>(bs.offset, 28429475166421108);
    bs.offset += 8;
  } else {
    if (!staticSize) bs.ensureSize(10);
    store<u64>(bs.offset, 32370086184550502);
    store<u64>(bs.offset, 101, 8);
    bs.offset += 10;
  }
}

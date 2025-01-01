import { serialize } from ".";
import { bs } from "../../custom/bs";
import { COMMA, BRACKET_RIGHT, BRACKET_LEFT } from "../../custom/chars";

export function serializeArray<T extends any[]>(src: T): void {
  const srcSize = load<u32>(changetype<usize>(src), offsetof<T>("byteLength"));
  
  if (srcSize == 0) {
    if (!bs.buffer) bs.setBuffer(__new(4, idof<string>()));
    bs.ensureSize(4);
    store<u32>(bs.offset, 6094939);
    bs.offset += 4;
    return;
  }

  let srcPtr = src.dataStart;
  const srcEnd = srcPtr + srcSize - sizeof<valueof<T>>();
  // if (!bs.buffer) bs.setBuffer(__new(srcSize << 3, idof<string>()));
  // else 
  bs.ensureSize(srcSize << 3);

  store<u16>(bs.offset, BRACKET_LEFT);
  bs.offset += 2;

  while (srcPtr < srcEnd) {
    const block = load<valueof<T>>(srcPtr);
    serialize<valueof<T>>(block);
    bs.ensureCapacity(2);
    store<u16>(bs.offset, COMMA);
    bs.offset += 2;
    srcPtr += sizeof<string>();
  }

  const lastBlock = load<valueof<T>>(srcPtr);
  serialize<valueof<T>>(lastBlock);

  store<u16>(bs.offset, BRACKET_RIGHT);
  bs.offset += 2;
}

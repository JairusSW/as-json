import { snip_fast } from "../../custom/util";

// @ts-ignore: Decorator valid here
@inline export function deserializeInteger<T>(data: string): T {
  // @ts-ignore
  return snip_fast<T>(data);
}

// @ts-ignore: Decorator valid here
@inline export function deserializeInteger_Safe<T>(data: string): T {
  const firstChar = load<u8>(changetype<usize>(data));
  console.log(firstChar.toString());
  if ((firstChar < 48 || firstChar > 57) && firstChar != 45) throw new Error("Mismatched Types! Expected " + nameof<T>() + ' but got "' + data.slice(0, 100) + '" instead!');
  // @ts-ignore
  return snip_fast<T>(data);
}

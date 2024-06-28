import { MpZ } from "@hypercubed/as-mpz";

// @ts-ignore: Decorator valid here
@inline export function serializeMpZ(data: MpZ): string {
  return data.toString();
}
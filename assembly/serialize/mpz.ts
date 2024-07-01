import { bl } from "../bl";
import { MpZ } from "@hypercubed/as-mpz";

// @ts-ignore: Decorator valid here
@inline export function serializeMpZ(data: MpZ): string {
  return data.toString();
}

// @ts-ignore: Decorator valid here
@inline export function serializeMpZBL(data: MpZ): void {
  bl.write_s(data.toString());
}
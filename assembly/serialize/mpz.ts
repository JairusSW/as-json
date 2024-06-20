import { MpZ } from "@hypercubed/as-mpz";

// @ts-ignore
export function serializeMpZ(data: MpZ): string {
  return data.toString();
}
import { MpZ } from "@hypercubed/as-mpz";
import { JSON } from ".";

const a = MpZ.from(18448972);
const b = MpZ.from('7881297289452930');
const c = a.add(b);

const serialized = JSON.stringify(c);
const parsed = JSON.parse<MpZ>(serialized);

console.log("Serialized: " + serialized)
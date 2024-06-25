import { JSON } from ".";
import { Vec3 as Vec3a } from "./types";
import { Vec3 as Vec3b } from "./types";

const veca = new Vec3a();
const vecb = new Vec3b();

const serializeda = JSON.stringify(veca);
console.log("SERIALIZED-A: " + serializeda);

const serialziedb = JSON.stringify(vecb);
console.log("SERIALIZED-B: " + serialziedb);
import { readFileSync } from "fs";

console.log(JSON.stringify(JSON.parse(readFileSync("./food-menu-body.out-2.json").toString())))
import { JSON } from "./src/json";

console.log(JSON.parse<u32>("100").toString());
console.log(JSON.stringify<u32>(100));
console.log(JSON.stringify(JSON.parse<u32>(JSON.stringify(100))))
console.log((100).toString())
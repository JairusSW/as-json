import { JSON } from "./src/json";

console.log(JSON.stringify(JSON.parse<f64[]>(`[
    1,
    2,
    3
  ]`)));
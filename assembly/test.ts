//import { JSON } from ".";
import { deserializeString } from "./deserialize/string";
import { deserializeUnknown } from "./deserialize/unknown";
/*
const v = JSON.Value.from("hello world");
console.log(v.get<string>())
console.log(JSON.serialize(v));
console.log(JSON.serialize("hello world"))
console.log(JSON.parse<JSON.Value>(JSON.serialize(v)).get<string>());*/
console.log(deserializeUnknown("true").unwrap().toString())
console.log(deserializeString("\"hello").unwrap().toString())
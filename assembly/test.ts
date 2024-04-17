import { JSON } from ".";

console.log(JSON.serialize("hello world!").toString());

console.log(JSON.serialize(314).toString());

console.log(JSON.serialize(3.14).toString());

console.log(JSON.serialize(true).toString());

console.log(JSON.serialize(false).toString());

console.log(JSON.serialize(JSON.Value.from("hello world!")).toString());

console.log(JSON.serialize([
    JSON.Value.from("hello"),
    JSON.Value.from("world"),
    JSON.Value.from(123),
    JSON.Value.from("456"),
    JSON.Value.from(7.89)
]).toString());
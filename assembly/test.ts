import { JSON } from ".";

const stringified = JSON.parse<string>('"\\"st\\\\\\"ring\\\\\\" w\\\\\\"\\\\\\"ith quotes\\\\\\"\\""');

console.log(JSON.stringify(stringified));
console.log(JSON.stringify(stringified));
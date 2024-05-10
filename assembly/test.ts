import { JSON } from "./src/json";
import { Person } from "./p"
const person = new Person(1);
person.staticprng = 32
let result = JSON.stringify<Person>(person);
console.log(JSON.stringify(JSON.parse<Person>(result)));
console.log(result);
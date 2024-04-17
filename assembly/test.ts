import { JSON } from "./src/json";
@json
class Person {
  staticprng: i32 = 23;
  public country: string = '';

  constructor(id: u32) {
    this.staticprng = 321;
    const seed = id.toString();
    this.country = this.getCountry();
  }

  // temp method, returns hard-coded string for now
  private getCountry(): string {
    return "USA";
  }
}

const person = new Person(1);
person.staticprng = 32
let result = JSON.stringify<Person>(person);
console.log(JSON.stringify(JSON.parse<Person>(result)));
console.log(result);
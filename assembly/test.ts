import { JSON } from "./src/json";
@json
class Person {
  private prng: i32 = 23;
  public country: string = '';

  constructor(id: u32) {
    this.prng = 321;
    const seed = id.toString();
    this.country = this.getCountry();
  }

  // temp method, returns hard-coded string for now
  private getCountry(): string {
    return "USA";
  }
}

const person = new Person(1);
let result = JSON.stringify<Person>(person);
console.log(result);
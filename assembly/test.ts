// import { JSON } from ".";
import { JSON } from ".";

@json
class ContentBlock {
  @omitnull()
  input: JSON.Raw | null = null;
}

const foo: ContentBlock = {
  input: "123"
}

console.log(JSON.stringify(foo))
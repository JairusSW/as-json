// import { JSON } from ".";
import { JSON } from ".";
@json
class Message {
  constructor(role: string, content: string) {
    this._role = role;
    this.content = content;
  }


  @alias("role")
  protected _role: string;

  get role(): string {
    return this._role;
  }

  content: string;
}

@json
class UserMessage extends Message {
  constructor(content: string) {
    super("user", content);
  }
}
console.log(JSON.stringify(new Message("user", "foo")))
console.log(JSON.stringify(new UserMessage("foo")));
import { JSON } from ".";

@json
class TokenMetaData {
  id: u64;
  name: string;
  uri: string;

  constructor(id: u64, name: string, uri: string) {
    this.id = id;
    this.name = name;
    this.uri = uri;
  }
}

@json
class NonFungibleToken {
  owner: string;
  counter: u64;
  tokens: Map<u64, TokenMetaData>;
  owners: Map<u64, string>;
  balances: Map<string, u64[]>;
  constructor() {
    this.owner = "";
    this.counter = 0;
    this.tokens = new Map<u64, TokenMetaData>();
    this.owners = new Map<u64, string>();
    this.balances = new Map<string, u64[]>();
  }
}


let state = JSON.parse<NonFungibleToken>(
  '"{"owner":"","counter":0,"tokens":{},"owners":{},"balances":{}}"'
);
// let state = new NonFungibleToken();

if (!state.balances.has("bhavya")) {
  state.balances.set("bhavya", []);
}
console.log(JSON.stringify(state))
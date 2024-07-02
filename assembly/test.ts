import { JSON } from "json-as/assembly";

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
    owner: string = "";
    counter: u64 = 0;
    tokens: Map<u64, TokenMetaData> = new Map<u64, TokenMetaData>();
    owners: Map<u64, string> = new Map<u64, string>();
    balances: Map<string, u64[]> = new Map<string, u64[]>();

    constructor() { }

    mint(name: string, uri: string, toAddress: string): u64 {
        this.counter += 1;
        const id = this.counter;

        const tokenMetaData = new TokenMetaData(id, name, uri);

        this.tokens.set(id, tokenMetaData);
        this.owners.set(id, toAddress);

        if (!this.balances.has(toAddress)) {
            this.balances.set(toAddress, []);
        }

        this.balances.get(toAddress).push(id);

        return id;
    }
}
function readStringFromMemory(ptr: usize): string {
    let len: i32 = load<u32>(ptr)
    let buffer = new Uint8Array(len);

    for (let i = 0; i < len; ++i) {
        buffer[i] = load<u8>(ptr + 4 + i);
    }

    let s = String.UTF8.decode(buffer.buffer);
    return s
}

function getLengthPrefixedString(s: string): ArrayBuffer {
    let stringBuf = Uint8Array.wrap(String.UTF8.encode(s))
    let newLen = stringBuf.byteLength
    let buffer = new ArrayBuffer(4 + newLen);
    let dataView = new DataView(buffer);

    dataView.setUint32(0, newLen, true);

    for (let i = 0; i < newLen; ++i) {
        dataView.setInt8(4 + i, stringBuf[i])
    }

    return buffer
}

const s1 = getLengthPrefixedString("hello world");
console.log(Uint8Array.wrap(s1).join(" "));
const s2 = readStringFromMemory(changetype<usize>(s1));
console.log(s2);

let state = JSON.parse<NonFungibleToken>('{"owner":"","counter":1,"tokens":{"1":{"id":1,"name":"foo","uri":"bar"}},"owners":{"1":"baz"},"balances":{"baz":[1]}}');
state.mint("foo", "bar", "baz")
console.log(JSON.stringify(state))
import { JSON } from "..";
import { bs } from "../lib/as-bs";
import { bench } from "../custom/bench";

const v1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const v2 = '"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"';

bench(
  "Serialize Alphabet",
  () => {
    JSON.stringify(v1);
  },
  64_000_00,
);

bench(
  "Deserialize Alphabet",
  () => {
    JSON.parse<string>(v2);
  },
  64_000_00,
);

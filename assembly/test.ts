import { JSON } from "../";

assert(JSON.stringify<bool>(true) == "true", `JSON.stringify<bool>(true) == 'true'`);
assert(JSON.stringify<bool>(false) == "false", `JSON.stringify<bool>(false) == 'false'`);

assert(JSON.parse<bool>("true") == true, `JSON.parse<bool>(\"false\") == 'false'`);
assert(JSON.parse<bool>("false") == false, `JSON.parse<bool>(\"false\") == 'false'`);
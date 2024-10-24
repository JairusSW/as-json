import { JSON } from "..";
import { BRACE_LEFT, BRACKET_LEFT, CHAR_F, CHAR_T, QUOTE } from "../custom/chars";

bench("Match Type (string)", () => {
    blackbox<boolean>(matchType(blackbox<string>("\""), JSON.Types.String));
});

bench("Match Type (bool)", () => {
    blackbox<boolean>(matchType(blackbox<string>("t"), JSON.Types.Bool));
});

bench("Match Type (array)", () => {
    blackbox<boolean>(matchType(blackbox<string>("["), JSON.Types.Array));
});

bench("Match Type (struct)", () => {
    blackbox<boolean>(matchType(blackbox<string>("{"), JSON.Types.Obj));
});

bench("Match Type (raw)", () => {
    blackbox<boolean>(matchType(blackbox<string>("\""), JSON.Types.Raw));
});

@inline function matchType(data: string, type: JSON.Types): boolean {
    const firstChar = load<u8>(changetype<usize>(data));
    if (JSON.Types.String == type && firstChar == QUOTE) return true;
    else if (JSON.Types.Bool == type && (firstChar == CHAR_T || firstChar == CHAR_F)) return true;
    else if (JSON.Types.Array == type && firstChar == BRACKET_LEFT) return true;
    else if (JSON.Types.Obj == type && firstChar == BRACE_LEFT) return true;
    else if (type < 7 && type > 0 && (firstChar < 58 && firstChar > 46)) return true;
    else if (JSON.Types.Raw == type) return true;
    else return false;
}
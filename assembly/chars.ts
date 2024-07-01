// Characters
// @ts-ignore = Decorator is valid here
@inline export const COMMA = 44;
// @ts-ignore = Decorator is valid here
@inline export const QUOTE = 34;
// @ts-ignore = Decorator is valid here
@inline export const BACK_SLASH = 92;
// @ts-ignore: Decorator is valid here
@inline export const FWD_SLASH = 47;
// @ts-ignore: Decorator is valid here
@inline export const BRACE_LEFT = 123;
// @ts-ignore: Decorator is valid here
@inline export const BRACE_RIGHT = 125;
// @ts-ignore: Decorator is valid here
@inline export const BRACKET_LEFT = 91;
// @ts-ignore: Decorator is valid here
@inline export const BRACKET_RIGHT = 93;
// @ts-ignore: Decorator is valid here
@inline export const COLON = 58;
// @ts-ignore: Decorator is valid here
@inline export const CHAR_T = 116;
// @ts-ignore: Decorator is valid here
@inline export const CHAR_R = 114;
// @ts-ignore: Decorator is valid here
@inline export const CHAR_U = 117;
// @ts-ignore: Decorator is valid here
@inline export const CHAR_E = 101;
// @ts-ignore: Decorator is valid here
@inline export const CHAR_F = 102;
// @ts-ignore: Decorator is valid here
@inline export const CHAR_A = 97;
// @ts-ignore: Decorator is valid here
@inline export const CHAR_L = 108;
// @ts-ignore: Decorator is valid here
@inline export const CHAR_S = 115;
// @ts-ignore = Decorator is valid here
@inline export const CHAR_N = 110;
// @ts-ignore = Decorator is valid here
@inline export const CHAR_B = 98;
// Strings
// @ts-ignore: Decorator is valid here
@inline export const TRUE_WORD = "true";
// @ts-ignore: Decorator is valid here
@inline export const FALSE_WORD = "false";
// @ts-ignore: Decorator is valid here
@inline export const NULL_WORD = "null";
// @ts-ignore: Decorator is valid here
@inline export const BRACE_LEFT_WORD = "{";
// @ts-ignore: Decorator is valid here
@inline export const BRACKET_LEFT_WORD = "[";
// @ts-ignore: Decorator is valid here
@inline export const EMPTY_BRACKET_WORD = "[]";
// @ts-ignore: Decorator is valid here
@inline export const COLON_WORD = ":";
// @ts-ignore: Decorator is valid here
@inline export const COMMA_WORD = ",";
// @ts-ignore: Decorator is valid here
@inline export const BRACE_RIGHT_WORD = "}";
// @ts-ignore: Decorator is valid here
@inline export const BRACKET_RIGHT_WORD = "]";
// @ts-ignore: Decorator is valid here
@inline export const QUOTE_WORD = "\"";
// @ts-ignore: Decorator is valid here
@inline export const EMPTY_QUOTE_WORD = "\"\"";

// Escape Codes
// @ts-ignore: Decorator is valid here
@inline export const BACKSPACE = 8; // \b
// @ts-ignore: Decorator is valid here
@inline export const TAB = 9; // \t
// @ts-ignore: Decorator is valid here
@inline export const NEW_LINE = 10; // \n
// @ts-ignore: Decorator is valid here
@inline export const FORM_FEED = 12; // \f
// @ts-ignore: Decorator is valid here
@inline export const CARRIAGE_RETURN = 13; // \r

export const TRUE_PTR = changetype<usize>("true");
export const FALSE_PTR = changetype<usize>("false");
export const NULL_PTR = changetype<usize>("null");
export const EMPTY_BRACES_PTR = changetype<usize>("{}");
export const EMPTY_BRACKET_PTR = changetype<usize>("[]");
export const EMPTY_QUOTE_PTR = changetype<usize>("\"\"");
export const BACKSPACE_PTR = changetype<usize>("\\b");
export const TAB_PTR = changetype<usize>("\\t");
export const NEW_LINE_PTR = changetype<usize>("\\n");
export const FORM_FEED_PTR = changetype<usize>("\\f");
export const CARRIAGE_RETURN_PTR = changetype<usize>("\\r");
export const FOUR_DIGIT_ESC_PTR = changetype<usize>("\\u000");
export const TWO_DIGIT_ESC_PTR = changetype<usize>("\\u00");
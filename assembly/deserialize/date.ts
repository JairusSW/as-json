import { QUOTE } from "../custom/chars";

// @ts-ignore: Decorator valid here
@inline export function deserializeDate(dateTimeString: string): Date {
  // Use AssemblyScript's date parser
  const d = Date.fromString(dateTimeString.slice(1, -1));

  // Return a new object instead of the one that the parser returned.
  // This may seem redundant, but addresses the issue when Date
  // is globally aliased to wasi_Date (or some other superclass).
  return new Date(d.getTime());
}

// @ts-ignore: Decorator valid here
@inline export function deserializeDate_Safe(dateTimeString: string): Date {
  const firstChar = load<u8>(changetype<usize>(dateTimeString));
  if (firstChar != QUOTE) throw new Error("Mismatched Types! Expected Date but got \"" + dateTimeString.slice(0, 100) + "\" instead!");
  return deserializeDate(dateTimeString);
}

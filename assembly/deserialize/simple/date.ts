import { QUOTE } from "../../custom/chars";

// @ts-ignore: Decorator valid here
@inline export function deserializeDate(dateTimeString: string): Date {
  // Use AssemblyScript's date parser
  const d = Date.fromString(dateTimeString);

  // Return a new object instead of the one that the parser returned.
  // This may seem redundant, but addreses the issue when Date
  // is globally aliased to wasi_Date (or some other superclass).
  return new Date(d.getTime());
}

// @ts-ignore: Decorator valid here
@inline export function deserializeDate_NEW(srcStart: usize, srcEnd: usize): Date {
  // Use AssemblyScript's date parser
  const d = Date.fromString(str(srcStart, srcEnd));

  // Return a new object instead of the one that the parser returned.
  // This may seem redundant, but addreses the issue when Date
  // is globally aliased to wasi_Date (or some other superclass).
  return new Date(d.getTime());
}

function str(start: usize, end: usize): string {
  const size = end - start;
  const out = __new(size, idof<string>());
  memory.copy(out, start, size);
  return changetype<string>(out);
}
import { ptrToStr } from "../../util/ptrToStr";

export function deserializeDate(srcStart: usize, srcEnd: usize): Date {
  // Use AssemblyScript's date parser
  const d = Date.fromString(ptrToStr(srcStart, srcEnd));

  // Return a new object instead of the one that the parser returned.
  // This may seem redundant, but addreses the issue when Date
  // is globally aliased to wasi_Date (or some other superclass).
  return new Date(d.getTime());
}

function isValidType(type: string): boolean {
  console.log(type);
  const validTypes = [
    "string",
    "u8",
    "i8",
    "u16",
    "i16",
    "u32",
    "i32",
    "u64",
    "i64",
    "f32",
    "f64",
    "bool",
    "boolean",
    // ...this.schemas.map((v) => v.name)
  ];
  
  if (type.endsWith("| null")) return isValidType(type.slice(0, type.length - 7));
  if (type.includes("<")) return isValidType(type.slice(type.indexOf("<") + 1, type.lastIndexOf(">")));
  if (validTypes.includes(type)) return true;
  return false;
}

console.log(isValidType("string | null"))
console.log(isValidType("Array<string | null>"))
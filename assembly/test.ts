import { Variant } from "as-variant/assembly";
import "wasi"
import { json, JSON, parseArray } from "./index";

// Discriminator from as-variant
const enum Discriminator {
  Bool,
  I8, I16, I32, I64,
  U8, U16, U32, U64,
  F32, F64,
  UnmanagedRef,
  ManagedRef
}


@json
class vec {
  x: f64;
  y: f64;
}

@json
class JSONSchema {
  firstName: string
  lastName: string
  age: f64
  /*__JSON_Parse(data: Map<string, Variant>): JSONSchema {
    // @ts-ignore
    const result: JSONSchema = {
      firstName: data.get("firstName").getUnchecked<string>(),
      lastName: data.get("lastName").getUnchecked<string>(),
      age: data.get("age").getUnchecked<f64>()
    }
    return result;
  }*/
}

const data: JSONSchema = {
  firstName: 'Emmet',
  lastName: 'Smith',
  age: 23
}

if (isDefined(data.__JSON_Serialize)) console.log(data.__JSON_Serialize())

// TODO: If there is a function in the class, then a trailing comma will be created. Filter out props and then stringify those.

//console.log(`${offsetof<JSONSchema>("__JSON_Serialize")}\n${data.__JSON_Serialize.index}`)
/*
//console.log(JSON.parse<Variant>(JSON.stringify(foo)))
let value = foo.getUnchecked(foo)
if (isDefined(value.__JSON_Serialize)) {
  console.log(value.__JSON_Serialize())
} else {
  console.log("NOPe")
}

class Obj {
}*/
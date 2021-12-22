import { Variant } from "as-variant";
import { JSON } from ".";

function check<T>(message: string, data: T): void {
    const serialized = JSON.stringify<T>(data)
    const deserialized = JSON.parse<T>(serialized)
    console.log(`${message}\nSerialized: ${serialized}\nDeserialized: ${JSON.stringify(deserialized)}`)
}

check('Encode/Decode String', "Hello World")

check('Encode/Decode String', "Hell[}:o Wo[rld}{")

check('Encode/Decode String', "Hel`\"lo Wo\"`r\"ld")

check('Encode/Decode Boolean', true)

check('Encode/Decode Boolean', false)

check('Encode/Decode Variant String', Variant.from("Hello World"))

check('Encode/Decode Variant String', Variant.from("Hell[}:o Wo[rld}{"))

check('Encode/Decode Variant String', Variant.from("Hel`\"lo Wo\"`r\"ld"))

check('Encode/Decode Variant Boolean', Variant.from(true))

check('Encode/Decode Variant Boolean', Variant.from(false))
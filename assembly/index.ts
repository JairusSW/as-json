// TODO: Handle circular data
// TODO: Add Object support
// TODO: Add AS deserialize (SIMD?)

//import { console } from 'as-console'

import { StringSink } from 'as-string-sink'

// Pre-alloc in memory. (faster)
const nullVal = `null`

// Doesn't support Objects. 😭
export function stringify<T>(data: T): string {
  let result = new StringSink()

  if (isString(data)) {

    if (data.includes(`"`)) {
      // Need replaceAll. Figure this out later.
      result.write(`"${data.replaceAll('"', '\\"')}"`)
    }

    result.write(`"${data}"`)

  } else if (isFloat(data) || isSigned(data)) {

    result.write(`${data}`)

  } else if (isBoolean(data)) {
  
    result.write(data ? `true` : `false`)

  } else if (isArray(data)) {

    result.write('[')
    // Just loop through all the chunks and stringify them.
    const lastChunk = data.pop()

    for (let i = 0; i < data.length - 1; i++) {
      result.write(`${stringify(data[i])},`)
    }

    result.write(`${stringify(lastChunk)}]`)

  } else {

    result.write(nullVal)

  }

  return result.toString()

}
/*
const arr = ['firstName', 'Jairus', 'lastName', 'Tanaka', 'age', '14']

const str = 'HelloWorldFireTrucksAirplanesHumveesAndCode.'

const num = 134567890.098764321

export function test(): void {

  const serializedArray = stringify(arr)

  console.log('Serialized Array: ' + serializedArray)
  
  const serializedString = stringify(str)
  
  console.log('Serialized String: ' + serializedString)
 
  const serializedNumber = stringify(num)
  
  console.log('Serialized Number: ' + serializedNumber)

  const serializedBoolean = stringify(true)
  
  console.log('Serialized Boolean: ' + serializedBoolean)

  const serializedNull = stringify(null)
  
  console.log('Serialized Null: ' + serializedNull)
  
  console.log('\nAll tests completed!')

}*/
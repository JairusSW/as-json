#!/bin/bash

mkdir -p ./build

for file in ./assembly/__tests__/*.spec.ts; do
  filename=$(basename -- "$file")
  output="./build/${filename%.ts}.wasm"

  asc "$file" --transform ./transform --lib ./lib/ -o "$output" || { echo "Tests failed"; exit 1; }

  echo " -> $filename"
  wasmtime "$output" || { echo "Tests failed"; exit 1; }
done

echo "All tests passed"

#!/bin/bash

mkdir -p ./build

for file in ./assembly/__tests__/*.spec.ts; do
  filename=$(basename -- "$file")
  output="./build/${filename%.ts}.wasm"

  echo "Compiling $file..."
  asc "$file" --transform ./transform -o "$output" --runtime stub || { echo "Tests failed"; exit 1; }

  echo "Running $output..."
  wasmtime "$output" || { echo "Tests failed"; exit 1; }
done

echo "All tests passed"

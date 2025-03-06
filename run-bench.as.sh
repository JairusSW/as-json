#!/bin/bash

mkdir -p ./build

for file in ./assembly/__benches__/*.bench.ts; do
  filename=$(basename -- "$file")
  output="./build/${filename%.ts}.wasm"

  npx asc "$file" --transform ./transform -o "$output" --optimizeLevel 3 --shrinkLevel 0 --converge --noAssert --uncheckedBehavior always --runtime stub --enable simd --enable bulk-memory || { echo "Build failed"; exit 1; }

  echo -e "$filename\n"
  wasmer "$output" --llvm || { echo "Benchmarked failed."; exit 1; }
done

echo "Finished benchmarks."

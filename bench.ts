import Benchmark from "benchmark";
const suite = new Benchmark.Suite;

suite.add("Serialize Set Theoretical Representation", () => {
    JSON.stringify([[],[[]],[[],[[]]]]);
});
/*
suite.add("Serialize Float", () => {
    JSON.stringify(1.2345);
});

suite.add("Serialize Integer", () => {
    JSON.stringify(12345);
});
suite.add("Serialize String", () => {
    JSON.stringify("hello world");
});
suite.add("Parse Number", () => {
    JSON.parse("12345");
});
*/
suite.on("cycle", (cycle) => {
    console.log(cycle.target.toString());
});


suite.run();
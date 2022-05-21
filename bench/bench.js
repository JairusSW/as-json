import Benchmark from "benchmark"
const suite = new Benchmark.Suite("JSON Benchmark")

const vec = {
    x: 0.0,
    y: 0.0
}
/*
suite.add("JSON Stringify String", () => {
    JSON.stringify("Hello")
})

suite.add("JSON Stringify Boolean", () => {
    JSON.stringify(true)
})

suite.add("JSON Stringify Integer", () => {
    JSON.stringify(314)
})

suite.add("JSON Stringify Float", () => {
    JSON.stringify(3.14)
})

suite.add("JSON Stringify Vector", () => {
    JSON.stringify(vec)
});

suite.add("JSON Stringify Array", () => {
    JSON.stringify([1,2,3,4,5])
})

suite.add("JSON Parse String", () => {
    JSON.parse("\"Hello\"")
})

suite.add("JSON Parse Boolean", () => {
    JSON.parse("true")
})

suite.add("JSON Parse Integer", () => {
    JSON.parse("314")
})

suite.add("JSON Parse Float", () => {
    JSON.parse("3.14")
})

suite.add("JSON Parse Vector", () => {
    JSON.parse("{\"x\":0.0,\"y\":0.0}")
})
*/
suite.add("JSON Parse Array", () => {
    JSON.parse("[1,2,3,4,5]")
})

.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();
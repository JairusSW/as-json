import Benchmark from "benchmark"
const suite = new Benchmark.Suite("Benchmark")

const vec = {
    x: 0.0,
    y: 0.0
}

suite.add("Stringify String", () => {
    JSON.stringify("Hello")
})

suite.add("Stringify Boolean", () => {
    JSON.stringify(true)
})

suite.add("Stringify Integer", () => {
    JSON.stringify(314)
})

suite.add("Stringify Float", () => {
    JSON.stringify(3.14)
})

suite.add("Stringify Vector", () => {
    JSON.stringify(vec)
});

suite.add("Stringify Array", () => {
    JSON.stringify([1,2,3,4,5])
})

suite.add("Parse String", () => {
    JSON.parse("\"Hello\"")
})

suite.add("Parse Boolean", () => {
    JSON.parse("true")
})

suite.add("Parse Integer", () => {
    JSON.parse("314")
})

suite.add("Parse Float", () => {
    JSON.parse("3.14")
})

suite.add("Parse Vector", () => {
    JSON.parse("{\"x\":0.0,\"y\":0.0}")
})

suite.add("Parse Boolean Array", () => {
  JSON.parse("[true,false,true,false,true]");
})

suite.add("Parse IntegerArray", () => {
    JSON.parse("[1,2,3,4,5]")
})
    
suite.add("Parse FloatArray", () => {
    JSON.parse("[1.0,2.0,3.0,4.0,5.0]")
})

.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const bubbleSort = require('../src/bubbleSort');
const insertionSort = require('../src/insertionSort');

let arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 10000));
}
console.log(arr.join(','));

// add tests
suite
  .add('Bubble Sort', function() {
    bubbleSort(arr);
  })
  .add('Insertion Sort', function() {
    insertionSort(arr);
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });

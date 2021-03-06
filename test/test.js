const test = require('ava');
const bubbleSort = require('../src/bubbleSort');
const insertionSort = require('../src/insertionSort');
const selectionSort = require('../src/selectionSort');

test('bubbleSort', t => {
  const arr = [4, 5, 6, 3, 2, 1];
  const sortedArr = bubbleSort(arr);
  t.is(sortedArr.join(','), '1,2,3,4,5,6');
});

test('insertionSort', t => {
  const arr = [4, 5, 6, 3, 2, 1];
  const sortedArr = insertionSort(arr);
  t.is(sortedArr.join(','), '1,2,3,4,5,6');
});

test('selectionSort', t => {
  const arr = [4, 5, 6, 3, 2, 1];
  const sortedArr = selectionSort(arr);
  t.is(sortedArr.join(','), '1,2,3,4,5,6');
});

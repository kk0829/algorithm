const test = require('ava');
const bubbleSort = require('../src/bubbleSort');

test('#1', async t => {
  const arr = [4, 5, 6, 3, 2, 1];
  const sortedArr = bubbleSort(arr);
  t.is(sortedArr.join(','), '1,2,3,4,5,6', 'message');
});

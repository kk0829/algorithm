/**
 * 冒泡排序
 * @param {Array} arr 待排序数组
 */
function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let flag = false;
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) break;
  }
  return arr;
}

module.exports = bubbleSort;

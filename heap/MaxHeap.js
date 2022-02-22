class MaxHeap {
  constructor(capacity = 10) {
    this.data = [];
    this.capacity = capacity;
  }

  getSize() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  getParentIndex(index) {
    if (index === 0) {
      return 0;
    } else {
      return Math.floor((index - 1) / 2);
    }
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  _shiftUp(k) {
    while (k > 0 && this.data[this.parentIndex(k)] < this.data[k]) {
      const parentIndex = this.parentIndex(k);
      const temp = this.data[parentIndex];
      this.data[parentIndex] = this.data[k];
      this.data[k] = temp;
      k = parentIndex;
    }
  }

  add(el) {
    this.data.push(el);
    this._shiftUp(this.data.length - 1);
  }
}

const maxHeap = new MaxHeap();

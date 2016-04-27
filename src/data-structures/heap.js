/**
 * Created by Vadym Yatsyuk on 25/04/16
 */

export default class Heap {

  constructor(array = []) {
    this.heap = array;

    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      this.heap = this.constructor.heapify(this.heap, i);
    }
  }

  /**
   * Return as array
   *
   * @returns {Array}
   */
  getArray() {
    return this.heap;
  }

  /**
   * Insert new element
   * 
   * @param element
   */
  insert(element) {
    let position;
    let parent;

    this.heap.push(element);
    
    position = this.heap.length - 1;
    parent = this.constructor.getParentByPosition(position);

    while (position >= 1 && this.heap[parent] < element) {
      this.swap(position, parent);
      position = parent;
      parent = this.constructor.getParentByPosition(position);
    }
  }
  
  static getParentByPosition(position) {
    return Math.floor((position - 1) / 2);
  }

  /**
   * swap two elements at positions
   * @param {int} child
   * @param {int} parent
   */
  swap(child, parent) {
    [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]];
  }

  /**
   * Find max
   *
   * @returns {*}
   */
  findMax() {
    return this.heap[0];
  }

  /**
   * Find min
   *
   * @returns {*}
   */
  findMin() {
    let min = this.heap[this.heap.length - 1];

    for (let i = Math.floor((this.size() + 1) / 2); i < this.size(); i++) {
      if (min > this.heap[i]) {
        min = this.heap[i];
      }
    }

    return min;
  }

  /**
   * Get number of elements in heap
   *
   * @returns {Number}
   */
  size() {
    return this.heap.length;
  }

  deleteMax() {
    const max = this.heap[0];

    this.heap[0] = this.heap[this.size() - 1];
    this.heap[this.size() - 1] = null;
    this.heap.length--;

    this.heap = this.constructor.heapify(this.heap, 0);

    return max;
  }

  static heapify(array, index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = (left < array.length && array[left] > array[index]) ? left : index;

    if (right < array.length && array[right] > array[largest]) {
      largest = right;
    }

    if (largest !== index) {
      [array[index], array[largest]] = [array[largest], array[index]];
      return this.heapify(array, largest);
    }

    return array;
  }
}
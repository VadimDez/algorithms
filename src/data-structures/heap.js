/**
 * Created by Vadym Yatsyuk on 25/04/16
 */

export default class Heap {

  constructor(array = []) {
    this.heap = [];

    for (let i = 0; i < array.length; i++) {
      this.insert(array[i]);
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

    this.heapify();

    return max;
  }

  heapify() {
    const size = this.size();
    for(let i = 0; i < size; i++) {

      const highestChild = 2 * i + 1 + ((this.heap[2 * i + 1] > this.heap[2 * i + 2]) ? 0 : 1);

      if (this.heap[i] < this.heap[highestChild]) {
        [this.heap[i], this.heap[highestChild]] = [this.heap[highestChild], this.heap[i]];
      }
    }
  }
}
/**
 * Created by Vadym Yatsyuk on 26/04/16
 */

import Heap from './../data-structures/heap';

export default class Heapsort {
  static sort(array) {
    let heap = new Heap(array);
    let result = [];
    const length = array.length;

    for (let i = length; i >= 1; i--) {
      result.unshift(heap.deleteMax());
    }

    return result;
  }
}
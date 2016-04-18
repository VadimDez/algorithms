/**
 * Created by Vadym Yatsyuk on 18/04/16
 */

export default class InsertionSort {
  static sort(array, comparer) {
    comparer = comparer || this.comparer;
    const length = array.length;
    let position;
    let tmp;

    for (let i = 1; i < length; i++) {
      position = i;

      while (position > 0 && comparer(array[position - 1], array[position])) {
        tmp = array[position];
        array[position] = array[position - 1];
        array[position - 1] = tmp;
        position--;
      }
    }

    return array;
  }

  static comparer(a, b) {
    return a > b
  }
}
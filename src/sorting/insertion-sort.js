/**
 * Created by Vadym Yatsyuk on 18/04/16
 */

export default class InsertionSort {
  static sort(array, comparer) {
    let position;
    const length = array.length;
    comparer = comparer || this.comparer;

    for (let i = 1; i < length; i++) {
      position = i;

      while (position > 0 && comparer(array[position - 1], array[position])) {
        [array[position], array[position - 1]] = [array[position - 1], array[position]];
        position--;
      }
    }

    return array;
  }

  static comparer(a, b) {
    return a > b
  }
}
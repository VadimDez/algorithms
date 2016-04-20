/**
 * Created by Vadym Yatsyuk on 19/04/16
 */

export default class SelectionSort {
  static sort(array, comparer) {
    let tmpIndex;
    const length = array.length;
    comparer = comparer || this.comparer;

    for (let i = 0; i < length - 1; i++) {
      tmpIndex = i;
      for (let c = i + 1; c < length; c++) {
        if (comparer(array[tmpIndex],array[c])) {
          tmpIndex = c;
        }
      }
      [array[i], array[tmpIndex]] = [array[tmpIndex], array[i]];
    }

    return array;
  }

  static comparer(a, b) {
    return a > b;
  }
}
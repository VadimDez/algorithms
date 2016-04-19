/**
 * Created by Vadym Yatsyuk on 19/04/16
 */

export default class SelectionSort {
  static sort(array) {
    const length = array.length;
    let tmpIndex;

    for (let i = 0; i < length - 1; i++) {
      tmpIndex = i;
      for (let c = i + 1; c < length; c++) {
        if (array[tmpIndex] > array[c]) {
          tmpIndex = c;
        }
      }
      [array[i], array[tmpIndex]] = [array[tmpIndex], array[i]];
    }

    return array;
  }
}
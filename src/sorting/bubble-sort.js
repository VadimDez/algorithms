/**
 * Created by Vadym Yatsyuk on 17/04/16
 */

export default class BubbleSort {
  /**
   * Sort array
   * @param {Array} array
   * @param {Function} comparer
   * @returns {*}
   */
  static sort(array, comparer = null) {
    comparer = comparer || this.compare;
    let length = array.length;
    let tmp;
    let change;

    do {
      change = false;
      for (let i = 1; i < length; i++) {
        if (comparer(array[i - 1], array[i])) {
          tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;

          change = true;
        }
      }

      length--;

    } while (change !== false);

    return array;
  }

  /**
   * Default compare function
   * @param a
   * @param b
   * @returns {boolean}
   */
  static compare(a, b) {
    return a > b;
  }
}
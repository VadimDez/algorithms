/**
 * Created by vadimdez on 20/04/16.
 */

export default class MergeSort {
  static sort(array) {
    let middle;
    const length = array.length;

    if (length < 2) {
      return array;
    }

    middle = parseInt(length / 2, 10);

    return this.merge(
      [],
      this.sort(array.slice(0, middle)),
      this.sort(array.slice(middle))
    );
  }

  static merge(array, a, b) {
    if (!b.length) {
      return array.concat(a);
    }

    if (!a.length) {
      return array.concat(b);
    }

    if (a[0] < b[0]) {
      return this.merge(array.concat(a[0]), a.slice(1), b);
    }
    return this.merge(array.concat(b[0]), a, b.slice(1));
  }
}
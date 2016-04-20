/**
 * Created by vadimdez on 20/04/16.
 */

export default class MergeSort {
  static sort(array, comparer) {
    let middle;
    const length = array.length;
    this.tmpComparer = comparer || this.comparer;

    if (length < 2) {
      return array;
    }

    middle = parseInt(length / 2, 10);

    return this.merge(
      [],
      this.sort(array.slice(0, middle), this.tmpComparer),
      this.sort(array.slice(middle), this.tmpComparer)
    );
  }

  static merge(array, a, b) {
    if (!b.length) {
      return array.concat(a);
    }

    if (!a.length) {
      return array.concat(b);
    }

    if (this.tmpComparer(a[0], b[0])) {
      return this.merge(array.concat(b[0]), a, b.slice(1));
    }
    return this.merge(array.concat(a[0]), a.slice(1), b);
  }

  static comparer(a, b) {
    return a > b;
  }
}
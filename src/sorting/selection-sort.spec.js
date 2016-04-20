/**
 * Created by Vadym Yatsyuk on 19/04/16
 */

import SelectionSort from './selection-sort';

describe('selection sort', () => {
  it('should sort empty array', () => {
    expect(SelectionSort.sort([])).toEqual([]);
  });

  it('should sort one element', () => {
    expect(SelectionSort.sort([1])).toEqual([1]);
  });

  it('should sort elements', () => {
    expect(SelectionSort.sort([2, 1])).toEqual([1, 2]);

    expect(SelectionSort.sort([2, 1, 5, 4, 3])).toEqual([1, 2, 3, 4, 5]);

    expect(SelectionSort.sort([2, 1, 5, 4, 3, 0, -5, -4])).toEqual([-5, -4, 0, 1, 2, 3, 4, 5]);

    expect(SelectionSort.sort([1, 2, 2, 1])).toEqual([1, 1, 2, 2]);
  });

  it('should sort elements with custom comparing function', () => {
    expect(SelectionSort.sort([
      {value: 4},
      {value: 3},
      {value: 2},
      {value: 1}
    ], (a, b) => {
      return a.value > b.value;
    })).toEqual(([
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4}
    ]));
  });
});
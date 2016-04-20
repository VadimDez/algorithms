/**
 * Created by Vadym Yatsyuk on 19/04/16
 */

import SelectionSort from './selection-sort';

describe('selection sort', () => {
  it('should sort empty array', () => {
    expect([]).toEqual(SelectionSort.sort([]));
  });

  it('should sort one element', () => {
    expect([1]).toEqual(SelectionSort.sort([1]));
  });

  it('should sort elements', () => {
    expect([1, 2]).toEqual(SelectionSort.sort([2, 1]));

    expect([1, 2, 3, 4, 5]).toEqual(SelectionSort.sort([2, 1, 5, 4, 3]));

    expect([-5, -4, 0, 1, 2, 3, 4, 5]).toEqual(SelectionSort.sort([2, 1, 5, 4, 3, 0, -5, -4]));

    expect([1, 1, 2, 2]).toEqual(SelectionSort.sort([1, 2, 2, 1]));
  });

  it('should sort elements with custom comparing function', () => {
    expect([
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4}
    ]).toEqual(SelectionSort.sort([
      {value: 4},
      {value: 3},
      {value: 2},
      {value: 1}
    ], (a, b) => {
      return a.value > b.value;
    }));
  });
});
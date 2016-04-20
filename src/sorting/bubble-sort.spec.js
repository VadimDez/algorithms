/**
 * Created by Vadym Yatsyuk on 17/04/16
 */

import BubbleSort from './bubble-sort';

describe('bubble-sort', () => {
  it('should sort elements', () => {
    expect(BubbleSort.sort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(BubbleSort.sort([3, 1, 2, 4])).toEqual([1, 2, 3, 4]);
    expect(BubbleSort.sort([2, 1, 5, 4, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort 1 element', () => {
    expect(BubbleSort.sort([1])).toEqual([1]);
  });

  it('should sort no elements', () => {
    expect(BubbleSort.sort([])).toEqual([]);
  });

  it('should sort duplicates', () => {
    expect(BubbleSort.sort([2, 1, 2, 1])).toEqual([1, 1, 2, 2]);
  });

  it('should sort negative values', () => {
    expect(BubbleSort.sort([0, 2, -2, -1])).toEqual([-2, -1, 0, 2]);
  });

  it('should sort with custom compare function', () => {
    expect(BubbleSort.sort(['c', 'a', 'b'], (a, b) => {
      return a > b;
    })).toEqual(['a', 'b', 'c']);

    expect(BubbleSort.sort([
      {value: 3},
      {value: 1},
      {value: 2}
    ], (a, b) => {
      return a.value > b.value;
    })).toEqual([
      {value: 1},
      {value: 2},
      {value: 3}
    ]);
  })
});
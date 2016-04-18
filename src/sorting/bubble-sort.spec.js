/**
 * Created by Vadym Yatsyuk on 17/04/16
 */

import BubbleSort from './bubble-sort';

describe('bubble-sort', () => {
  it('should sort elements', () => {
    expect([1, 2, 3]).toEqual(BubbleSort.sort([3, 2, 1]));
    expect([1, 2, 3, 4]).toEqual(BubbleSort.sort([3, 1, 2, 4]));
    expect([1, 2, 3, 4, 5]).toEqual(BubbleSort.sort([2, 1, 5, 4, 3]));
  });

  it('should sort 1 element', () => {
    expect([1]).toEqual(BubbleSort.sort([1]));
  });

  it('should sort no elements', () => {
    expect([]).toEqual(BubbleSort.sort([]));
  });

  it('should sort duplicates', () => {
    expect([1, 1, 2, 2]).toEqual(BubbleSort.sort([2, 1, 2, 1]));
  });

  it('should sort negative values', () => {
    expect([-2, -1, 0, 2]).toEqual(BubbleSort.sort([0, 2, -2, -1]));
  });

  it('should sort with custom compare function', () => {
    expect(['a', 'b', 'c']).toEqual(BubbleSort.sort(['c', 'a', 'b'], (a, b) => {
      return a > b;
    }));

    expect([
      {value: 1},
      {value: 2},
      {value: 3}
    ]).toEqual(BubbleSort.sort([
      {value: 3},
      {value: 1},
      {value: 2}
    ], (a, b) => {
      return a.value > b.value;
    }));
  })
});
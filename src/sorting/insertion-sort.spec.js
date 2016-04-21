/**
 * Created by Vadym Yatsyuk on 18/04/16
 */

import InsertionSort from './insertion-sort';

describe('insertion sort', () => {
  it('should have sort method', () => {
    expect(typeof InsertionSort.sort).toBe('function');
  });

  it('should sort empty array', () => {
    expect(InsertionSort.sort([])).toEqual([]);
  });

  it('should sort array with one element', () => {
    expect(InsertionSort.sort([0])).toEqual([0]);
  });

  it('should sort multiple elements', () => {
    expect(InsertionSort.sort([2, 1])).toEqual([1, 2]);

    expect(InsertionSort.sort([2, 1, 5, 4, 3])).toEqual([1, 2, 3, 4, 5]);

    expect(InsertionSort.sort([2, 1, 5, 4, 3, 0, -5, -4])).toEqual([-5, -4, 0, 1, 2, 3, 4, 5]);

    expect(InsertionSort.sort([1, 2, 2, 1])).toEqual([1, 1, 2, 2]);
  });

  it('should sort with custom comparing function', () => {
    expect(InsertionSort.sort([
      {value: 4},
      {value: 3},
      {value: 2},
      {value: 1}
    ], (a, b) => {
      return a.value > b.value;
    })).toEqual([
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4}
    ]);
  });
});
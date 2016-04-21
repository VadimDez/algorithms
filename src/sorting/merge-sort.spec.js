/**
 * Created by vadimdez on 20/04/16.
 */

import MergeSort from './merge-sort';

describe('merge-sort', () => {
  it('should have have sort method', () => {
    expect(typeof MergeSort.sort).toBe('function');
  });

  it('should sort empty array', () => {
    expect(MergeSort.sort([])).toEqual([]);
  });

  it('should sort one element', () => {
    expect(MergeSort.sort([1])).toEqual([1]);
  });


  it('should sort elements', () => {
    expect(MergeSort.sort([2, 1])).toEqual([1, 2]);

    expect(MergeSort.sort([2, 3, 1])).toEqual([1, 2, 3]);

    expect(MergeSort.sort([2, 1, 5, 4, 3])).toEqual([1, 2, 3, 4, 5]);

    expect(MergeSort.sort([2, 1, 5, 4, 3, 0, -5, -4])).toEqual([-5, -4, 0, 1, 2, 3, 4, 5]);

    expect(MergeSort.sort([1, 2, 2, 1])).toEqual([1, 1, 2, 2]);
  });


  it('should sort with custom comparing function', () => {
    expect(MergeSort.sort([
      {value: 4},
      {value: 3},
      {value: 2},
      {value: 1},
      {value: 5}
    ], (a, b) => {
      return a.value > b.value;
    })).toEqual([
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5}
    ]);
  });
});
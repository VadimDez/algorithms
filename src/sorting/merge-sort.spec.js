/**
 * Created by vadimdez on 20/04/16.
 */

import MergeSort from './merge-sort';

describe('merge-sort', () => {
  it('should have have sort method', () => {
    expect('function').toBe(typeof MergeSort.sort);
  });

  it('should sort empty array', () => {
    expect([]).toEqual(MergeSort.sort([]));
  });

  it('should sort one element', () => {
    expect([1]).toEqual(MergeSort.sort([1]));
  });


  it('should sort elements', () => {
    expect([1, 2]).toEqual(MergeSort.sort([2, 1]));

    expect([1, 2, 3]).toEqual(MergeSort.sort([2, 3, 1]));

    expect([1, 2, 3, 4, 5]).toEqual(MergeSort.sort([2, 1, 5, 4, 3]));

    expect([-5, -4, 0, 1, 2, 3, 4, 5]).toEqual(MergeSort.sort([2, 1, 5, 4, 3, 0, -5, -4]));

    expect([1, 1, 2, 2]).toEqual(MergeSort.sort([1, 2, 2, 1]));
  });
});
/**
 * Created by Vadym Yatsyuk on 18/04/16
 */

import InsertionSort from './insertion-sort';

describe('insertion sort', () => {
  it('should have sort method', () => {
    expect('function').toBe(typeof InsertionSort.sort);
  });

  it('should sort empty array', () => {
    expect([]).toEqual(InsertionSort.sort([]));
  });

  it('should sort array with one element', () => {
    expect([0]).toEqual(InsertionSort.sort([0]));
  });

  it('should sort multiple elements', () => {
    expect([1, 2]).toEqual(InsertionSort.sort([2, 1]));

    expect([1, 2, 3, 4, 5]).toEqual(InsertionSort.sort([2, 1, 5, 4, 3]));

    expect([-5, -4, 0, 1, 2, 3, 4, 5]).toEqual(InsertionSort.sort([2, 1, 5, 4, 3, 0, -5, -4]));

    expect([1, 1, 2, 2]).toEqual(InsertionSort.sort([1, 2, 2, 1]));
  });

  it('should sort with custom comparing function', () => {
    expect([
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4}
    ]).toEqual(InsertionSort.sort([
      {value: 4},
      {value: 3},
      {value: 2},
      {value: 1}
    ], (a, b) => {
      return a.value > b.value;
    }))
  });
});
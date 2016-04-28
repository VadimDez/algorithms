/**
 * Created by Vadym Yatsyuk on 26/04/16
 */

import Heapsort from './heapsort'

describe('headpsort', () => {
  it('should have sort method', () => {
    expect(typeof Heapsort.sort).toBe('function');
  });

  it('should sort empty array', () => {
    expect(Heapsort.sort([])).toEqual([]);
  });

  it('should sort array with one element', () => {
    expect(Heapsort.sort([0])).toEqual([0]);
  });

  it('should sort multiple elements', () => {
    expect(Heapsort.sort([2, 1])).toEqual([1, 2]);
    expect(Heapsort.sort([2, 1, 3])).toEqual([1, 2, 3]);
    expect(Heapsort.sort([2, 1, 3, 5, 10, 4])).toEqual([1, 2, 3, 4, 5, 10]);
  });
});
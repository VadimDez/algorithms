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
});
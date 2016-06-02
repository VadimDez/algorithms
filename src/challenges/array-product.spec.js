/**
 * Created by Vadym Yatsyuk on 02/06/16
 */

import arrayProduct from './array-product';

describe('array product', () => {
  it('should make a product for each element excluding element under index', () => {
    expect(arrayProduct([1, 2, 3])).toEqual([6, 3, 2])
  })
});
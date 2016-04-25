/**
 * Created by Vadym Yatsyuk on 25/04/16
 */

import Heap from './heap';

describe('heap', () => {
  it('should be empty', () => {
    let heap = new Heap();

    expect(heap.getArray()).toEqual([]);
  });

  it('should insert new element', () => {
    let heap = new Heap();
    heap.insert(1);
    expect(heap.getArray()).toEqual([1]);

    heap.insert(2);
    expect(heap.getArray()).toEqual([2, 1]);

    heap.insert(5);
    expect(heap.getArray()).toEqual([5, 1, 2]);

    heap.insert(3);
    expect(heap.getArray()).toEqual([5, 3, 2, 1]);

    heap.insert(10);
    expect(heap.getArray()).toEqual([10, 5, 2, 1, 3]);
  });

  it('should create heap from array', () => {
    let heap = new Heap([1, 2, 3, 5, 10]);

    expect(heap.getArray()).toEqual([10, 5, 2, 1, 3]);
  });

  it('should find max', () => {
    let heap = new Heap([1, 2, 3, 5, 10]);

    expect(heap.findMax()).toEqual(10);

    heap = new Heap([1, 2, 3, 5, 10, 20]);

    expect(heap.findMax()).toEqual(20);
  });

  it('should find min', () => {
    let heap = new Heap([1, 2, 3, 5, 10]);

    expect(heap.findMin()).toEqual(1);

    heap = new Heap([1, 2, 3, 5, 10, 0]);

    expect(heap.findMin()).toEqual(0);
  });

  it('should return size', () => {
    let heap = new Heap([1, 2, 3, 5, 10]);

    expect(heap.size()).toBe(5);

    heap.insert(1);
    expect(heap.size()).toBe(6);
  });

  it('should remove max and adjust heap', () => {
    let heap = new Heap([1, 2, 3, 5, 10]);

    expect(heap.deleteMax()).toBe(10);
    expect(heap.size()).toBe(4);
    expect(heap.getArray()).toEqual([5,3, 2, 1]);
  });
});
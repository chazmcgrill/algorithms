import { insertionSort, bubbleSort } from '../sorting';

describe('insertionSort', () => {
    it('sorts an array of numbers', () => {
        expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
        expect(insertionSort([10, 40, 3, 2, 7])).toEqual([2, 3, 7, 10, 40]);
        expect(insertionSort([100, 2000, 35, 4, 99])).toEqual([4, 35, 99, 100, 2000]);
        expect(insertionSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});

describe('bubbleSort', () => {
    it('sorts an array of numbers', () => {
        expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
        expect(bubbleSort([10, 40, 3, 2, 7])).toEqual([2, 3, 7, 10, 40]);
        expect(bubbleSort([100, 2000, 35, 4, 99])).toEqual([4, 35, 99, 100, 2000]);
        expect(bubbleSort([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});

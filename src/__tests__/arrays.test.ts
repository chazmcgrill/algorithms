import {
    seekAndDestroy, 
    symmetricDifference, 
    flatten, 
    nester, 
    createNestedArray, 
    dropElements, 
    findHighest,
} from '../arrays';

describe('seekAndDestroy', () => {
    it('removes any numbers in args from array', () => {
        expect(seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
    });

    it('removes any string in args from array', () => {
        expect(seekAndDestroy(['a', 'b', 'd', 'b', 'c', 'd'], 'a', 'b', 'c')).toEqual(['d', 'd']);
    });
});

describe('symmetricDifference', () => {
    it('returns difference in passed arrays numbers', () => {
        expect(symmetricDifference([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
        expect(symmetricDifference([7, 8, 9], [7, 8, 9, 10])).toEqual([10]);
    });

    it('returns difference in passed arrays strings', () => {
        expect(symmetricDifference(['1', '2', '3'], ['5', '2', '1', '4'])).toEqual(['3', '4', '5']);
        expect(symmetricDifference(['a', 'b', 'c'], ['d', 'e', 'a', 'b'])).toEqual(['c', 'd', 'e']);
    });

    it('returns difference in passed arrays more than two arguments', () => {
        expect(symmetricDifference([2, 3], [2, 1, 4], [2, 4, 1])).toEqual([1, 3, 4]);
    });
});

describe('flatten', () => {
    it('returns nested arrays flattened in one dimensional array', () => {
        expect(flatten([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
        expect(flatten([[1, [2]], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
    });
});

describe('nester', () => {
    it('returns array items nested into 2d array', () => {
        expect(nester([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
        expect(nester([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    });
});

describe('createNestedArray', () => {
    it('creates an array of specfied size', () => {
        expect(createNestedArray(2, 2)).toEqual([[null, null], [null, null]]);
        expect(createNestedArray(1, 4)).toEqual([[null, null, null, null]]);
        expect(createNestedArray(3, 2)).toEqual([[null, null], [null, null], [null, null]]);
    });
});

describe('dropElements return', () => {
    it('a filtered number array according to callback truthyness', () => {
        expect(dropElements([1, 2, 3, 4], (n) => n >= 3)).toEqual([3, 4]);
        expect(dropElements([1, 2, 3, 4, 5, 6], (n) => n === 3)).toEqual([3]);
    });

    it('a filtered string array according to callback truthyness', () => {
        expect(dropElements(['a', 'b', 'c', 'd'], (s) => s !== 'd')).toEqual(['a', 'b', 'c']);
        expect(dropElements(['a', 'b', 'c', 'd'], (s) => s === 'd')).toEqual(['d']);
    });
});

describe('findHighest returns', () => {
    it('an array of highest values from each nested array', () => {
        expect(findHighest([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).toEqual([5, 27, 39, 1001]);
        expect(findHighest([[4, 5, 1, 20], [40, 27, 18, 26], [32, 77, 37, 39], [2000, 1001, 857, 1]])).toEqual([20, 40, 77, 2000]);
    });
});

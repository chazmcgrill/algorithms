import { arrayNester } from '../arrayNester';

describe('arrayNester', () => {
    it('returns array items nested into 2d array', () => {
        expect(arrayNester([1, 2, 3, 4], 2)).toEqual([
            [1, 2],
            [3, 4],
        ]);
        expect(arrayNester([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    });
});

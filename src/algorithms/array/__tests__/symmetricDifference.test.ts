import { symmetricDifference } from '../symmetricDifference';

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

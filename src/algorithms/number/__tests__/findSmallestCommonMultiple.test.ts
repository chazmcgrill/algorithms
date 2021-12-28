import { findSmallestCommonMultiple } from '../findSmallestCommonMultiple';

describe('findSmallestCommonMultiple returns', () => {
    it('the smallest common multiple for passed range', () => {
        expect(findSmallestCommonMultiple([1, 5])).toEqual(60);
        expect(findSmallestCommonMultiple([18, 23])).toEqual(6056820);
    });

    it('the smallest common multiple for passed range in wrong order', () => {
        expect(findSmallestCommonMultiple([5, 1])).toEqual(60);
        expect(findSmallestCommonMultiple([7, 4])).toEqual(420);
    });
});

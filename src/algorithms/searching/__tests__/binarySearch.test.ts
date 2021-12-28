import { binarySearch } from '../binarySearch';

describe('binarySearch', () => {
    it('returns true when element is present', () => {
        expect(binarySearch([5, 4, 3, 2, 1], 5)).toBeTruthy();
        expect(binarySearch([5, 4, 3, 2, 1], 1)).toBeTruthy();
        expect(binarySearch([5, 4, 3, 2, 1, 0], 3)).toBeTruthy();
    });

    it('returns false when element is not present', () => {
        expect(binarySearch([5, 4, 3, 2, 1], 6)).toBeFalsy();
        expect(binarySearch([5, 4, 3, 2, 1], 20)).toBeFalsy();
        expect(binarySearch([5, 4, 3, 2, 1, 0], -1)).toBeFalsy();
    });
});

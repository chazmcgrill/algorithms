
import {
    linearSearch,
    binarySearch,
} from '../searching';

describe('linearSearch', () => {
    it('returns true when element is present', () => {
        expect(linearSearch([5, 4, 3, 2, 1], 5)).toBeTruthy();
        expect(linearSearch([5, 4, 3, 2, 1], 1)).toBeTruthy();
        expect(linearSearch([5, 4, '3', '2', 1, 0], '3')).toBeTruthy();
    });

    it('returns false when element is not present', () => {
        expect(linearSearch([5, 4, 3, 2, 1], 6)).toBeFalsy();
        expect(linearSearch([5, 4, 3, 2, 1], 20)).toBeFalsy();
        expect(linearSearch([5, 4, 3, 2, 1, 0], -1)).toBeFalsy();
    });
});

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
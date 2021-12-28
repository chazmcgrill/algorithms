import { linearSearch } from '../linearSearch';

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

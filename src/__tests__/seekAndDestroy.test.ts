import { seekAndDestroy } from '../seekAndDestroy';

describe('seekAndDestroy', () => {
    it('removes any numbers in args from array', () => {
        expect(seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
    });

    it('removes any string in args from array', () => {
        expect(seekAndDestroy(['a', 'b', 'd', 'b', 'c', 'd'], 'a', 'b', 'c')).toEqual(['d', 'd']);
    });
});
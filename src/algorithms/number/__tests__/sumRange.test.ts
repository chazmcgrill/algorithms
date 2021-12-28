import { sumRange } from '../sumRange';

describe('sumRange returns', () => {
    it('the sum of a range of numbers', () => {
        expect(sumRange([1, 10])).toEqual(55);
        expect(sumRange([7, 20])).toEqual(189);
        expect(sumRange([99, 102])).toEqual(402);
    });

    it('the sum of a range of numbers in wrong order', () => {
        expect(sumRange([9, 1])).toEqual(45);
        expect(sumRange([25, 7])).toEqual(304);
        expect(sumRange([102, 99])).toEqual(402);
    });
});

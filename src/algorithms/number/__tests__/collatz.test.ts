import { collatz } from '../collatz';

describe('collatz returns', () => {
    it('the collatz of passed number', () => {
        expect(collatz(5)).toEqual(5);
        expect(collatz(21)).toEqual(7);
        expect(collatz(0)).toEqual(0);
    });
});

import { getNextPrime } from '../getNextPrime';

describe('getNextPrime returns', () => {
    it('passed number when its prime already', () => {
        expect(getNextPrime(2)).toEqual(2);
        expect(getNextPrime(3)).toEqual(3);
        expect(getNextPrime(97)).toEqual(97);
    });

    it('mext prime number', () => {
        expect(getNextPrime(1)).toEqual(2);
        expect(getNextPrime(4)).toEqual(5);
        expect(getNextPrime(100)).toEqual(101);
    });
});

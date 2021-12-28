import { isPrime } from '../isPrime';

describe('isPrime returns', () => {
    it('false when non-prime number is passed', () => {
        expect(isPrime(1)).toBeFalsy();
        expect(isPrime(4)).toBeFalsy();
        expect(isPrime(100)).toBeFalsy();
    });

    it('true when prime number is passed', () => {
        expect(isPrime(2)).toBeTruthy();
        expect(isPrime(3)).toBeTruthy();
        expect(isPrime(5)).toBeTruthy();
        expect(isPrime(97)).toBeTruthy();
    });
});

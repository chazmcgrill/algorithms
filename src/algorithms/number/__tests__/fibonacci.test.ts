import { findFibonacciNumbers, findNthFibonacciNumber, sumOddFibonacciNumbers } from '../fibonacci';

describe('findNthFibonacciNumber returns', () => {
    it('the nth number in the fibonacci sequence', () => {
        expect(findNthFibonacciNumber(1)).toEqual(0);
        expect(findNthFibonacciNumber(5)).toEqual(3);
        expect(findNthFibonacciNumber(10)).toEqual(34);
    });
});

describe('findFibonacciNumbers returns', () => {
    it('an array of fibonacci numbers upto passed integer', () => {
        expect(findFibonacciNumbers(10)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    });

    it('an array of fibonacci numbers upto another passed integer', () => {
        expect(findFibonacciNumbers(22)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});

describe('sumOddFibonacciNumbers returns', () => {
    it('total of odd fibonacci numbers upto the passed integer', () => {
        expect(sumOddFibonacciNumbers(1)).toEqual(2);
        expect(sumOddFibonacciNumbers(4)).toEqual(5);
        expect(sumOddFibonacciNumbers(1000)).toEqual(1785);
    });

    it('total of odd fibonacci numbers upto the passed large integer', () => {
        expect(sumOddFibonacciNumbers(75024)).toEqual(60696);
        expect(sumOddFibonacciNumbers(75025)).toEqual(135721);
        expect(sumOddFibonacciNumbers(4000000)).toEqual(4613732);
    });
});

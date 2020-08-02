import {
    isPrime, 
    sumPrimes, 
    sumOddFibonacciNumbers, 
    findFibonacciNumbers, 
    sumRangeOfNumbers, 
    getNumberPositionIndex, 
    smallestCommonMultiple,
    factorialize,
    findNthFibonacciNumber,
} from '../numbers';

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


describe('sumPrimes returns', () => {
    it('total of prime numbers upto the passed integer', () => {
        expect(sumPrimes(10)).toEqual(17);
        expect(sumPrimes(20)).toEqual(77);
        expect(sumPrimes(100)).toEqual(1060);
    });
});

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

describe('sumRangeOfNumbers returns', () => {
    it('the sum of a range of numbers', () => {
        expect(sumRangeOfNumbers([1, 10])).toEqual(55);
        expect(sumRangeOfNumbers([7, 20])).toEqual(189);
        expect(sumRangeOfNumbers([99, 102])).toEqual(402);
    });

    it('the sum of a range of numbers in wrong order', () => {
        expect(sumRangeOfNumbers([9, 1])).toEqual(45);
        expect(sumRangeOfNumbers([25, 7])).toEqual(304);
        expect(sumRangeOfNumbers([102, 99])).toEqual(402);
    });
});

describe('getNumberPositionIndex returns', () => {
    it('index of correct position for sorted number array', () => {
        expect(getNumberPositionIndex([40, 20, 60], 50)).toEqual(2);
        expect(getNumberPositionIndex([1, 2, 3, 5], 4)).toEqual(3);
        expect(getNumberPositionIndex([99, 100, 101], 100)).toEqual(1);
    });

    it('index of correct position for unsorted number array', () => {
        expect(getNumberPositionIndex([30, 20, 60, 10], 50)).toEqual(3);
        expect(getNumberPositionIndex([5, 3, 2, 1], 4)).toEqual(3);
        expect(getNumberPositionIndex([100, 99, 89], 100)).toEqual(2);
    });
});

describe('smallestCommonMultiple returns', () => {
    it('the smallest common multiple for passed range', () => {
        expect(smallestCommonMultiple([1, 5])).toEqual(60);
        expect(smallestCommonMultiple([18, 23])).toEqual(6056820);
    });

    it('the smallest common multiple for passed range in wrong order', () => {
        expect(smallestCommonMultiple([5, 1])).toEqual(60);
        expect(smallestCommonMultiple([7, 4])).toEqual(420);
    });
});

describe('factorialize returns', () => {
    it('the factorial of passed integer', () => {
        expect(factorialize(5)).toEqual(120);
        expect(factorialize(21)).toEqual(51090942171709440000);
    });

    it('the factorial of passed decimal', () => {
        expect(factorialize(5.6)).toEqual(385.78175999999974);
        expect(factorialize(1.2)).toEqual(1.2);
    });

    it('1 if the passed number is negative', () => {
        expect(factorialize(-5)).toEqual(1);
        expect(factorialize(-10)).toEqual(1);
    });
});

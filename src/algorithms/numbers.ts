// checks if number is a prime number
export function isPrime(num: number): boolean {
    if (num === 1) return false;

    for (let current = 2; current < num; current++) {
        if (num % current === 0) return false;
    }

    return true;
}

// sum prime numbers upto the passed integer
export function sumPrimes(num: number): number {
    let sum = 0;
    let current = 2;

    while (current <= num) {
        if (isPrime(current)) sum += current;
        current++;
    }

    return sum;
}

// returns the nth number in the fibonacci sequence
export function findNthFibonacciNumber(n: number): number {
    if (n <= 1) return 0;
    if (n === 2) return 1;

    return findNthFibonacciNumber(n - 1) + findNthFibonacciNumber(n - 2);
}

// get an array of fibonacci numbers upto the passed integer
export function findFibonacciNumbers(num: number): number[] {
    let highestNum = 0;
    const numArray = [1, 1];

    for (let index = 2; highestNum < num; index++) {
        numArray.push(numArray[index - 2] + numArray[index - 1]);
        highestNum = numArray[index];
    }

    return numArray;
}

// get the sum of odd fibonacci numbers upto the passed integer
export function sumOddFibonacciNumbers(num: number): number {
    const fibonacciArray = findFibonacciNumbers(num);
    let sum = 0;
    let endOffset = 1;

    if (num % 2 === 1) endOffset = 0;

    for (let j = 0; j < fibonacciArray.length - endOffset; j++) {
        if (fibonacciArray[j] % 2 === 1) sum += fibonacciArray[j];
    }

    return sum;
}

// sum all numbers in a range
export function sumRangeOfNumbers(range: [number, number]): number {
    const max = Math.max(...range);
    let min = Math.min(...range);
    let sum = 0;

    while (min <= max) {
        sum += min;
        min++;
    }

    return sum;
}

// gets the index of correct position of passed number in an array of numbers
export function getNumberPositionIndex(arr: number[], num: number): number {
    const sorted = [...arr, num].sort((a, b) => a - b);
    return sorted.indexOf(num);
}

// gets the smallest common multiple in a range of numbers
export function smallestCommonMultiple(range: [number, number]): number {
    const max = Math.max(...range);
    const min = Math.min(...range);

    function sharedMultiple(num: number) {
        for (let i = max - 1; i >= min; i--) {
            if (num % i !== 0) return false;
        }
        return true;
    }

    let currentMultiple = max;

    while (!sharedMultiple(currentMultiple)) {
        currentMultiple += max;
    }

    return currentMultiple;
}

// gets a random number within passed range
export function randomizer(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
}

// returns the factorial of passed integer
export function factorialize(num: number): number {
    return num < 1 ? 1 : num * factorialize(num - 1);
}

// returns collatz value of passed integer
export function collatz(num: number): number {
    if (num <= 1) return 0;
    return 1 + (num % 2 === 0 ? collatz(num / 2) : collatz(3 * num + 1));
}

// converts passed integer into roman numerals
export function convertToRomanNumerals(num: number): string {
    const ALL_KEYS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const NUMERALS: { [key: number]: string } = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    };

    const keys = ALL_KEYS.filter((el) => el <= num);

    let result = '';

    while (num > 0) {
        if (num >= keys[0]) {
            result += NUMERALS[keys[0]];
            num -= keys[0];
        } else {
            keys.shift();
        }
    }

    return result;
}

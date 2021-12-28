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

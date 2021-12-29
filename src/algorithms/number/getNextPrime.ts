import { isPrime } from './isPrime';

/** Gets the next prime number, return number if prime already */
export function getNextPrime(num: number) {
    let result = num;
    while (!isPrime(result)) {
        result += 1;
    }
    return result;
}

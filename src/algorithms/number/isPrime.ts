/** checks if number is a prime number */
export function isPrime(num: number): boolean {
    if (num === 1) return false;

    for (let current = 2; current < num; current++) {
        if (num % current === 0) return false;
    }

    return true;
}

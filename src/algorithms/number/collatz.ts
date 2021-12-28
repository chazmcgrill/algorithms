// returns collatz value of passed integer
export function collatz(num: number): number {
    if (num <= 1) return 0;
    return 1 + (num % 2 === 0 ? collatz(num / 2) : collatz(3 * num + 1));
}

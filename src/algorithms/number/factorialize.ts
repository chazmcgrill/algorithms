// returns the factorial of passed integer
export function factorialize(num: number): number {
    return num < 1 ? 1 : num * factorialize(num - 1);
}

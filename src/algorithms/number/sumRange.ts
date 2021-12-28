// sum all numbers in a range
export function sumRange(range: [number, number]): number {
    const max = Math.max(...range);
    let min = Math.min(...range);
    let sum = 0;

    while (min <= max) {
        sum += min;
        min++;
    }

    return sum;
}

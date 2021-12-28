// gets the smallest common multiple in a range of numbers
export function findSmallestCommonMultiple(range: [number, number]): number {
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

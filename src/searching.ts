type valueType = string | number;

export function linearSearch(arr: valueType[], value: valueType): boolean {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === value) return true;
    }
    return false;
}

export function binarySearch(arr: number[], value: number): boolean {
    let sorted = arr.sort((a, b) => a - b);

    do {
        const midIndex = Math.floor(sorted.length / 2);
        const midVal = sorted[midIndex];
        if (midVal === value) {
            return true;
        }
        sorted = midVal < value ? sorted.slice(midIndex) : sorted.slice(0, midIndex);
    } while (sorted.length !== 1);

    if (sorted.length === 1 && sorted[0] === value) return true;

    return false;
}

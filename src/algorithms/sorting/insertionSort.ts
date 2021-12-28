export function insertionSort<T>(arr: T[]): T[] {
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        let j;
        for (j = i - 1; j > -1 && arr[j] > val; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = val;
    }
    return arr;
}

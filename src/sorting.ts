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

export function bubbleSort<T>(arr: T[]): T[] {
    let swapCount;
    do {
        swapCount = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                const store = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = store;
                swapCount++;
            }
        }
    } while (swapCount !== 0);
    return arr;
}

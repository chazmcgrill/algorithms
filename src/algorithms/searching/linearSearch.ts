type valueType = string | number;

export function linearSearch(arr: valueType[], value: valueType): boolean {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === value) return true;
    }
    return false;
}

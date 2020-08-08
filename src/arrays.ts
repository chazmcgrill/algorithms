// filter array items matching passed arguments
export function seekAndDestroy<T>(arr: T[], ...args: T[]): T[] {
    return arr.filter(item => !args.includes(item));
}

// return the difference of passed arrays
export function symmetricDifference<T>(...arrays: T[][]): T[] {
    const allItems = arrays.reduce((acc, cur) => [...acc, ...cur]);
    const uniqueItems = new Set(allItems);
    let differenceArray: T[] = [];

    uniqueItems.forEach(item => {
        if (!arrays.every(arr => arr.includes(item))) {
            differenceArray.push(item);
        }
    });

    return differenceArray.sort();
}

// flatten nested arrays
export function flatten<T>(arr: T[]) {
    let result: T[] = [];

    function flattener(array: T[]): void {
        array.forEach(el => {
            Array.isArray(el) ? flattener(el) : result.push(el);
        });
    }

    flattener(arr);
    return result;
}

// divides array up into nested array of specified size
export function nester<T>(arr: T[], size: number): T[][] {
    let arrayCopy = [...arr];
    let resultArray = [];

    while (arrayCopy.length > 0) {
        resultArray.push(arrayCopy.splice(0, size));
    }

    return resultArray;
}

// make nested array of specified size
export function createNestedArray(cols: number, rows: number): null[][] {
    return new Array(cols).fill(null).map(() => {
        return new Array(rows).fill(null)
    });
}

// drops element from array according to passed callback
export function dropElements<T>(arr: T[], callback: (value: T) => boolean): T[] {
    return arr.filter(callback);
}

// finds the highest number of each nested array
export function findHighest(arr: number[][]): number[] {
    return arr.map(nestedArray => Math.max(...nestedArray));
}

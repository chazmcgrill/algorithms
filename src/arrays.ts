/**
 * Filters array items that match passed arguments.
 *
 * @param {array} arr array of items
 * @param {...T} arguments array of items
 * @return {array} filtered array
 */
export function seekAndDestroy<T>(arr: T[], ...args: T[]): T[] {
    return arr.filter(item => !args.includes(item));
}

/**
 * Finds the difference of passed arrays.
 *
 * @param {...T} arrays arguments of arrays with generic items
 * @return {array} array of items that are not found in all passed arrays
 */
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

/**
 * Flattens nested arrays.
 *
 * @param {array} arr array of items that are nested
 * @return {array} one dimensional array with no nesting
 */
export function flatten<T>(arr: T[]): T[] {
    let result: T[] = [];

    function flattener(array: T[]): void {
        array.forEach(el => {
            Array.isArray(el) ? flattener(el) : result.push(el);
        });
    }

    flattener(arr);
    return result;
}

/**
 * Divides array up into nested arrays of specified size
 *
 * @param {array} arr array of items
 * @param {number} size size of nested array
 * @return {array} two dimensional / nested array
 */
export function nester<T>(arr: T[], size: number): T[][] {
    let arrayCopy = [...arr];
    let resultArray = [];

    while (arrayCopy.length > 0) {
        resultArray.push(arrayCopy.splice(0, size));
    }

    return resultArray;
}

/**
 * Makes an empty nested array of specified size
 *
 * @param {number} cols amount of columns
 * @param {number} rows amount of rows
 * @return {array} two dimensional empty array
 */
export function createNestedArray(cols: number, rows: number): null[][] {
    return new Array(cols).fill(null).map(() => {
        return new Array(rows).fill(null)
    });
}

/**
 * Drops element from array according to passed callback
 *
 * @param {array} arr array of generic items
 * @param {function} callback a function to carry out the filtering
 * @return {array} filtered array
 */
export function dropElements<T>(arr: T[], callback: (value: T) => boolean): T[] {
    return arr.filter(callback);
}

/**
 * Finds the highest number of each nested array
 *
 * @param {array} arr nested arrays of numbers
 * @return {array} an array of highest numbers
 */
export function findHighest(arr: number[][]): number[] {
    return arr.map(nestedArray => Math.max(...nestedArray));
}

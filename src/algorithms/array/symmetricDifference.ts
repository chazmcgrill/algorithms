/**
 * Finds the difference of passed arrays.
 *
 * @param {...T} arrays arguments of arrays with generic items
 * @return {array} array of items that are not found in all passed arrays
 */
export function symmetricDifference<T>(...arrays: T[][]): T[] {
    const allItems = arrays.reduce((acc, cur) => [...acc, ...cur]);
    const uniqueItems = new Set(allItems);
    const differenceArray: T[] = [];

    uniqueItems.forEach((item) => {
        if (!arrays.every((arr) => arr.includes(item))) {
            differenceArray.push(item);
        }
    });

    return differenceArray.sort();
}

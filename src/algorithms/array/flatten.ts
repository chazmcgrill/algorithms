/**
 * Flattens nested arrays.
 *
 * @param {array} arr array of items that are nested
 * @return {array} one dimensional array with no nesting
 */
export function flatten<T>(arr: T[]): T[] {
    const result: T[] = [];

    function flattener(array: T[]): void {
        array.forEach((el) => {
            Array.isArray(el) ? flattener(el) : result.push(el);
        });
    }

    flattener(arr);
    return result;
}

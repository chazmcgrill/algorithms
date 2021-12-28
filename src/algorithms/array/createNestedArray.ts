/**
 * Makes an empty nested array of specified size
 *
 * @param {number} cols amount of columns
 * @param {number} rows amount of rows
 * @return {array} two dimensional empty array
 */
export function createNestedArray(cols: number, rows: number): null[][] {
    return new Array(cols).fill(null).map(() => {
        return new Array(rows).fill(null);
    });
}

/**
 * Divides array up into nested arrays of specified size
 *
 * @param {array} arr array of items
 * @param {number} size size of nested array
 * @return {array} two dimensional / nested array
 */
export function arrayNester<T>(arr: T[], size: number): T[][] {
    const arrayCopy = [...arr];
    const resultArray = [];

    while (arrayCopy.length > 0) {
        resultArray.push(arrayCopy.splice(0, size));
    }

    return resultArray;
}

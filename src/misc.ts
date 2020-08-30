/**
 * Caches result of expensive function passed as parameter.
 *
 * @param {function} func - the function to be memoized
 * @return {string} generic result
 * 
 * @example
 * const inefficientFunction = memoize((num: number) => {
 *   // inefficient logic goes here
 * });
 */
export function memoize<T, A>(func: (...args: A[]) => T) {
    const cache: { [key: string]: T} = {};

    return (...args: A[]): T => {
        const key = JSON.stringify(args);

        if (!(key in cache)) {
            cache[key] = func(...args);
        }

        return cache[key];
    };
}
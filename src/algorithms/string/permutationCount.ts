// counts unique permutations without repeat characters
export function permutationCount(str: string): number {
    const letters = str.split('');
    const permutationsArray: string[] = [];

    function charSwap(a: number, b: number): void {
        const temp = letters[a];
        letters[a] = letters[b];
        letters[b] = temp;
    }

    function hasRepeatedCharacters(item: string): boolean {
        return /(.)\1+/.test(item);
    }

    function permutator(num: number): void {
        if (num === 1) {
            const joined = letters.join('');
            if (!hasRepeatedCharacters(joined)) {
                permutationsArray.push(joined);
            }
        } else {
            for (let index = 0; index !== num; index++) {
                permutator(num - 1);
                charSwap(num % 2 === 0 ? index : 0, num - 1);
            }
        }
    }

    permutator(str.length);

    return permutationsArray.length;
}

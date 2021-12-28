import { permutationCount } from '../permutationCount';

describe('permutationCount', () => {
    it('returns count of permutations without repeat characters', () => {
        expect(permutationCount('a')).toEqual(1);
        expect(permutationCount('aab')).toEqual(2);
        expect(permutationCount('aabb')).toEqual(8);
        expect(permutationCount('abcde')).toEqual(120);
    });
});

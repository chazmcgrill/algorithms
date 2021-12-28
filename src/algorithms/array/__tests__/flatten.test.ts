import { flatten } from '../flatten';

describe('flatten', () => {
    it('returns nested arrays flattened in one dimensional array', () => {
        expect(flatten([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
        expect(
            flatten([
                [1, [2]],
                [3, [[4]]],
            ]),
        ).toEqual([1, 2, 3, 4]);
    });
});

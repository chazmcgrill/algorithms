import { createNestedArray } from '../createNestedArray';

describe('createNestedArray', () => {
    it('creates an array of specfied size', () => {
        expect(createNestedArray(2, 2)).toEqual([
            [null, null],
            [null, null],
        ]);
        expect(createNestedArray(1, 4)).toEqual([[null, null, null, null]]);
        expect(createNestedArray(3, 2)).toEqual([
            [null, null],
            [null, null],
            [null, null],
        ]);
    });
});

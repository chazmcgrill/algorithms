import { createInterval, findConflictsBetweenTwoSetsOfIntervals, findIntervalConflicts } from '../intervalSearchTree';

describe('findIntervalConflicts', () => {
    it('returns conlicts from a set of intervals', () => {
        const interval1 = createInterval(1, 5);
        const interval2 = createInterval(3, 7);
        const interval3 = createInterval(2, 6);
        const interval4 = createInterval(5, 6);
        const interval5 = createInterval(10, 15);
        const interval6 = createInterval(4, 100);
        const conflicts = findIntervalConflicts([interval1, interval2, interval3, interval4, interval5, interval6]);
        expect(conflicts).toEqual([
            [
                [3, 7],
                [1, 5],
            ],
            [
                [2, 6],
                [1, 5],
            ],
            [
                [5, 6],
                [3, 7],
            ],
            [
                [4, 100],
                [1, 5],
            ],
        ]);
    });

    it('returns conlicts from a different set of intervals', () => {
        const interval1 = createInterval(6, 8);
        const interval2 = createInterval(7, 10);
        const interval3 = createInterval(6, 12);
        const interval4 = createInterval(13, 15);
        const interval5 = createInterval(16, 17);
        const interval6 = createInterval(14, 20);
        const conflicts = findIntervalConflicts([interval1, interval2, interval3, interval4, interval5, interval6]);
        expect(conflicts).toEqual([
            [
                [7, 10],
                [6, 8],
            ],
            [
                [6, 12],
                [6, 8],
            ],
            [
                [14, 20],
                [13, 15],
            ],
        ]);
    });
});

describe('findConflictsBetweenTwoSetsOfIntervals', () => {
    it('returns conlicts from a set of intervals', () => {
        const interval1 = createInterval(1, 5);
        const interval2 = createInterval(3, 7);
        const interval3 = createInterval(2, 6);
        const interval4 = createInterval(5, 6);
        const interval5 = createInterval(10, 15);
        const interval6 = createInterval(4, 100);
        const conflicts = findConflictsBetweenTwoSetsOfIntervals(
            [interval1, interval2, interval3],
            [interval4, interval5, interval6],
        );
        expect(conflicts).toEqual([
            [
                [5, 6],
                [3, 7],
            ],
            [
                [4, 100],
                [1, 5],
            ],
        ]);
    });
});

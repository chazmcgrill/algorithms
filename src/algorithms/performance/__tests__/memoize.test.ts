import { memoize } from '../memoize';

const inefficientFunction = memoize((num: number) => {
    let total = 0;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            total += 1;
        }
    }
    return total;
});

describe('memoize', () => {
    it('returns the same result on second call', () => {
        expect(inefficientFunction(20)).toEqual(inefficientFunction(20));
        expect(inefficientFunction(100)).toEqual(inefficientFunction(100));
    });

    it('is faster on the second call with same params', () => {
        const t1 = Date.now();
        inefficientFunction(2000);
        const firstCallMilliseconds = Date.now() - t1;

        const t2 = Date.now();
        inefficientFunction(2000);
        const secondCallMilliseconds = Date.now() - t2;

        expect(firstCallMilliseconds).toBeGreaterThan(0);
        expect(secondCallMilliseconds).toEqual(0);
    });
});

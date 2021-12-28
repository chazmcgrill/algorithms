import { factorialize } from '../factorialize';

describe('factorialize returns', () => {
    it('the factorial of passed integer', () => {
        expect(factorialize(5)).toEqual(120);
        expect(factorialize(21)).toEqual(51090942171709440000);
    });

    it('the factorial of passed decimal', () => {
        expect(factorialize(5.6)).toEqual(385.78175999999974);
        expect(factorialize(1.2)).toEqual(1.2);
    });

    it('1 if the passed number is negative', () => {
        expect(factorialize(-5)).toEqual(1);
        expect(factorialize(-10)).toEqual(1);
    });
});

import { convertToRomanNumerals } from '../convertToRomanNumerals';

describe('convertToRomanNumerals returns', () => {
    it('the roman numeral string of passed number', () => {
        expect(convertToRomanNumerals(2018)).toEqual('MMXVIII');
        expect(convertToRomanNumerals(1012)).toEqual('MXII');
        expect(convertToRomanNumerals(666)).toEqual('DCLXVI');
    });
});

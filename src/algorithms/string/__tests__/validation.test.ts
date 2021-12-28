import { isEmailValid, isValidUSPhoneNumber } from '../validation';

describe('isEmailValid', () => {
    it('returns true if email is valid', () => {
        expect(isEmailValid('test_123@hello.com')).toBeTruthy();
        expect(isEmailValid('tester@hello.co.uk')).toBeTruthy();
        expect(isEmailValid('tes.ter@hello.co.uk')).toBeTruthy();
        expect(isEmailValid('tester@123hello.co.uk')).toBeTruthy();
    });

    it('returns false if email is invalid', () => {
        expect(isEmailValid('test_123@ @hello.com')).toBeFalsy();
    });
});

describe('isValidUSPhoneNumber returns', () => {
    it('true when valid USA telephone number is passed', () => {
        expect(isValidUSPhoneNumber('555-555-5555')).toBeTruthy();
        expect(isValidUSPhoneNumber('1 555-555-5555')).toBeTruthy();
        expect(isValidUSPhoneNumber('1 (555) 555-5555')).toBeTruthy();
        expect(isValidUSPhoneNumber('5555555555')).toBeTruthy();
        expect(isValidUSPhoneNumber('555-555-5555')).toBeTruthy();
        expect(isValidUSPhoneNumber('(555)555-5555')).toBeTruthy();
        expect(isValidUSPhoneNumber('1(555)555-5555')).toBeTruthy();
    });

    it('false when invalid USA telephone number is passed', () => {
        expect(isValidUSPhoneNumber('555-5555')).toBeFalsy();
        expect(isValidUSPhoneNumber('5555555')).toBeFalsy();
        expect(isValidUSPhoneNumber('1 555)555-5555')).toBeFalsy();
        expect(isValidUSPhoneNumber('123**&!!asdf#')).toBeFalsy();
        expect(isValidUSPhoneNumber('55555555')).toBeFalsy();
        expect(isValidUSPhoneNumber('(6054756961)')).toBeFalsy();
    });
});

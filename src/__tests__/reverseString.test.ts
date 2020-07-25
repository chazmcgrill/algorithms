import { reverseString } from '../reverseString';

describe('reverseString', () => {
    it('reverses string correctly', () => {
        expect(reverseString('hello')).toEqual('olleh');
    });

    it('reverses another string correctly', () => {
        expect(reverseString('this is a string')).toEqual('gnirts a si siht');
    });
})
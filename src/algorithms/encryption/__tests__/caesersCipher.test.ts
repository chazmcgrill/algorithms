import { caesersCipher } from '../caesarsCipher';

describe('caesersCipher algoritm', () => {
    it('ciphers a piece of text', () => {
        expect(caesersCipher('SBB!')).toEqual('FOO!');
        expect(caesersCipher('SBB ONE ONM')).toEqual('FOO BAR BAZ');
        expect(caesersCipher('Sbb One Onm')).toEqual('Foo Bar Baz');
    });

    it('deciphers a piece of text', () => {
        expect(caesersCipher('BAR!')).toEqual('ONE!');
        expect(caesersCipher('BIZ BAH FIZZ')).toEqual('OVM ONU SVMM');
        expect(caesersCipher('Biz Bah Fizz')).toEqual('Ovm Onu Svmm');
    });
});

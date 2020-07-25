import { searchAndReplace } from '../searchAndReplace';

describe('searchAndReplace', () => {
    it('replaces all instances of a word from a sentence', () => {
        expect(searchAndReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
            .toEqual('A quick brown fox leaped over the lazy dog');
    });

    it('replaces words from a sentence respecting original casing', () => {
        expect(searchAndReplace("Let us get back to more Coding", "Coding", "algorithms"))
            .toEqual('Let us get back to more Algorithms');
    });

    it('replaces multiple word from a sentence', () => {
        expect(searchAndReplace("hello world hello world hello", "hello", "goodbye"))
            .toEqual('goodbye world goodbye world goodbye');
    });
});

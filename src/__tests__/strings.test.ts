import {
    reverseString,
    replaceWords,
    capitalizeString,
    truncateString,
    isPalindrome,
    translateToPigLatin,
    translateSentenceToPigLatin,
    repeatString,
    replaceWhiteSpace,
    kebabCase,
    findLongestWord,
    binaryAgent,
    confirmEnding,
    isEmailValid,
    findMissingLetter,
    isMutation,
    permutationCount,
    isValidUSPhoneNumber,
} from '../strings';

describe('reverseString', () => {
    it('reverses string correctly', () => {
        expect(reverseString('hello')).toEqual('olleh');
    });

    it('reverses another string correctly', () => {
        expect(reverseString('this is a string')).toEqual('gnirts a si siht');
    });
});

describe('replaceWords', () => {
    it('replaces all instances of a word from a sentence', () => {
        expect(replaceWords('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'))
            .toEqual('A quick brown fox leaped over the lazy dog');
    });

    it('replaces words from a sentence respecting original casing', () => {
        expect(replaceWords('Let us get back to more Coding', 'Coding', 'algorithms'))
            .toEqual('Let us get back to more Algorithms');
    });

    it('replaces multiple word from a sentence', () => {
        expect(replaceWords('hello world hello world hello', 'hello', 'goodbye'))
            .toEqual('goodbye world goodbye world goodbye');
    });
});

describe('capitalizeString', () => {
    it('makes sentence string title cased', () => {
        expect(capitalizeString('Hello')).toEqual('Hello');
    });

    it('makes sentence string of random casing title cased', () => {
        expect(capitalizeString('WOrLD')).toEqual('World');
    });
});

describe('truncateString', () => {
    it('truncates long string', () => {
        expect(truncateString('Peter Piper picked a peck of pickled peppers', 14)).toEqual('Peter Piper pi...');
    });

    it('truncates long string at different position', () => {
        expect(truncateString('A-tisket a-tasket A green and yellow basket', 11)).toEqual('A-tisket a-...');
    });

    it('truncates short string', () => {
        expect(truncateString('A-', 1)).toEqual('A...');
    });

    it('truncates long string at different position', () => {
        expect(truncateString('Absolutely Longer', 2)).toEqual('Ab...');
    });
});

describe('isPalindrome', () => {
    it('truncates long string', () => {
        expect(isPalindrome('A man, a plan, a canal. Panama')).toBeTruthy();
    });

    it('truncates long string at different position', () => {
        expect(isPalindrome('1 eye for of 1 eye.')).toBeFalsy();
    });

    it('truncates short string', () => {
        expect(isPalindrome('_eye.')).toBeTruthy();
    });
});

describe('translateToPigLatin returns', () => {
    it('string converted to pig latin starting with consonant', () => {
        expect(translateToPigLatin('consonant')).toEqual('onsonantcay');
    });

    it('string converted to pig latin starting with vowel', () => {
        expect(translateToPigLatin('eight')).toEqual('eightway');
    });

    it('string converted to pig latin with vowel in middle', () => {
        expect(translateToPigLatin('glove')).toEqual('oveglay');
    });

    it('string converted to pig latin with no vowels', () => {
        expect(translateToPigLatin('lmd')).toEqual('mdlay');
    });
});

describe('translateSentenceToPigLatin returns', () => {
    it('sentence converted to pig latin', () => {
        expect(translateSentenceToPigLatin('hello world'))
            .toEqual('ellohay orldway');
    });

    it('long sentence converted to pig latin', () => {
        expect(translateSentenceToPigLatin('peter piper picked a pick of pickled pepper'))
            .toEqual('eterpay iperpay ickedpay away ickpay ofway ickledpay epperpay');
    });
});

describe('repeatString returns', () => {
    it('a string repeated specified number of times', () => {
        expect(repeatString('*', 8)).toEqual('********');
    });

    it('another string repeated different number of times', () => {
        expect(repeatString('abc', 3)).toEqual('abcabcabc');
    });

    it('empty string if negative value or zero passed', () => {
        expect(repeatString('ab', -2)).toEqual('');
        expect(repeatString('ab', 0)).toEqual('');
    });
});

describe('replaceWhiteSpace returns sentence with', () => {
    it('white space replaced with specified character', () => {
        expect(replaceWhiteSpace('Hi World!', '-')).toEqual('Hi-World!');
    });

    it('white space replaced underscores if no character specified', () => {
        expect(replaceWhiteSpace('   do   not          enter      ')).toEqual('_do_not_enter_');
    });
});

describe('kebabCase convert to kebab (or spinal tap) cased from', () => {
    it('camel cased', () => {
        expect(kebabCase('thisIsSpinalTap')).toEqual('this-is-spinal-tap');
    });

    it('title cased', () => {
        expect(kebabCase('This Is Spinal Tap')).toEqual('this-is-spinal-tap');
    });

    it('underscored title case', () => {
        expect(kebabCase('The_Andy_Griffith_Show')).toEqual('the-andy-griffith-show');
    });

    it('sentence with hyphens', () => {
        expect(kebabCase('This is Spinal-tap cased')).toEqual('this-is-spinal-tap-cased');
    });
});

describe('findLongestWord', () => {
    it('returns the length of the longest word in a sentence', () => {
        expect(findLongestWord('The quick brown fox jumped over the lazy dog')).toEqual(6);
    });

    it('returns the length of the longest word in another sentence', () => {
        expect(findLongestWord('hello computer')).toEqual(8);
    });
});

describe('binaryAgent', () => {
    it('returns words from passed binary code string', () => {
        expect(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")).toEqual('Aren\'t bonfires fun!?');
    });
});

describe('confirmEnding', () => {
    it('confirms if string ends with the specified substring', () => {
        expect(confirmEnding("Bastian", "n")).toBeTruthy();
        expect(confirmEnding("Bastian", "e")).toBeFalsy();
    });
});

describe('isEmailValid', () => {
    it('returns true if email is valid', () => {
        expect(isEmailValid("test_123@hello.com")).toBeTruthy();
        expect(isEmailValid("tester@hello.co.uk")).toBeTruthy();
        expect(isEmailValid("tes.ter@hello.co.uk")).toBeTruthy();
        expect(isEmailValid("tester@123hello.co.uk")).toBeTruthy();
    });

    it('returns false if email is invalid', () => {
        expect(isEmailValid("test_123@ @hello.com")).toBeFalsy();
    });
});

describe('findMissingLetter finds the first missing letter', () => {
    it('in a alphabetical sequence', () => {
        expect(findMissingLetter("abce")).toEqual('d');
        expect(findMissingLetter("abcdefh")).toEqual('g');
        expect(findMissingLetter("a")).toEqual('b');
    });

    it('when empty string is passed', () => {
        expect(findMissingLetter("")).toEqual('a');
    });

    it('when missing character is last', () => {
        expect(findMissingLetter("a")).toEqual('b');
    });
});

describe('isMutation returns', () => {
    it('true when strings passed are mutations of each other', () => {
        expect(isMutation(["hello", "Hello"])).toBeTruthy();
        expect(isMutation(["Alien", "line"])).toBeTruthy();
        expect(isMutation(["floor", "for"])).toBeTruthy();
    });

    it('false when strings passed are not mutations of each other', () => {
        expect(isMutation(["hello", "hey"])).toBeFalsy();
        expect(isMutation(["voodoo", "no"])).toBeFalsy();
        expect(isMutation(["Tiger", "Zebra"])).toBeFalsy();
    });
});

describe('permutationCount', () => {
    it('returns count of permutations without repeat characters', () => {
        expect(permutationCount('a')).toEqual(1);
        expect(permutationCount('aab')).toEqual(2);
        expect(permutationCount('aabb')).toEqual(8);
        expect(permutationCount('abcde')).toEqual(120);
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


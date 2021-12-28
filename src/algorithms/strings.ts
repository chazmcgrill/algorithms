// return a passed string with letters in reverse order
export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// makes word title cased
export function capitalizeString(word: string): string {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

// replaces all instances of a word from a sentence respecting original casing
export function replaceWords(sentence: string, before: string, after: string): string {
    let afterWithCasing = after;

    if (/^[A-Z]/.test(before)) afterWithCasing = capitalizeString(after);

    return sentence
        .split(' ')
        .map((word) => (word === before ? afterWithCasing : word))
        .join(' ');
}

// truncate a string at specified position
export function truncateString(str: string, limit: number): string {
    if (str.length <= limit) return str;
    return `${str.slice(0, limit)}...`;
}

// checks if passed string is a plaindrome ignoring non-alpha characters
export function isPalindrome(str: string): boolean {
    const flatStr = str.replace(/\W|_/g, '').toLowerCase();
    return flatStr === flatStr.split('').reverse().join('');
}

// converts a string to pig latin
export function translateToPigLatin(str: string): string {
    const vowel = str.match(/[aeiou]/);
    const vowelIndex = vowel ? vowel.index : 1;

    if (vowelIndex === 0) return `${str}way`;

    return `${str.substr(vowelIndex!)}${str.substr(0, vowelIndex!)}ay`;
}

// translate passed sentence to pig latin
export function translateSentenceToPigLatin(sentence: string): string {
    return sentence.split(' ').map(translateToPigLatin).join(' ');
}

// repeat a string specified number of times
export function repeatString(str: string, amount: number): string {
    return amount < 1 ? '' : `${str}${repeatString(str, amount - 1)}`;
}

// replace white spaces with specified character
export function replaceWhiteSpace(sentence: string, char = '_') {
    return sentence.replace(/\s+/g, char);
}

// converts string to kebab case
export function kebabCase(sentence: string): string {
    return sentence
        .split(/(?=[A-Z])|\s|_/)
        .join('-')
        .toLowerCase();
}

// find the longest word in a sentence
export function findLongestWord(sentence: string): number {
    return sentence.split(' ').reduce((longestWordLength, currentWord) => {
        const currentWordLength = currentWord.length;
        return currentWordLength > longestWordLength ? currentWordLength : longestWordLength;
    }, 0);
}

// convert binary code to words
export function binaryAgent(str: string): string {
    return str
        .split(' ')
        .map((binary) => String.fromCharCode(parseInt(binary, 2)))
        .join('');
}

// confirms if the string ends with the specified part of string
export function confirmEnding(str: string, target: string): boolean {
    return target === str.substring(str.length - target.length);
}

// email validation checked
export function isEmailValid(str: string): boolean {
    const regex = /^[\w.]+@[0-9a-zA-Z_]+?\.[a-zA-Z]{2,3}\.?\w+?$/;
    return regex.test(str);
}

// finds the first missing letter in a alphabetical sequence
export function findMissingLetter(str: string): string {
    if (str === '') return 'a';

    let previousCharCode = str.charCodeAt(0);

    for (let i = 1; i < str.length; i++) {
        const currentCharCode = str.charCodeAt(i);

        if (currentCharCode === previousCharCode + 1) {
            previousCharCode = currentCharCode;
        } else {
            return String.fromCharCode(currentCharCode - 1);
        }
    }

    return String.fromCharCode(previousCharCode + 1);
}

// check whether a string is a mutation of another string
export function isMutation(arr: [string, string]): boolean {
    const [stringA, stringB] = [arr[0].toLowerCase(), arr[1].toLowerCase()];

    for (const letter of stringB) {
        if (stringA.indexOf(letter) === -1) return false;
    }

    return true;
}

// counts unique permutations without repeat characters
export function permutationCount(str: string): number {
    const letters = str.split('');
    const permutationsArray: string[] = [];

    function charSwap(a: number, b: number): void {
        const temp = letters[a];
        letters[a] = letters[b];
        letters[b] = temp;
    }

    function hasRepeatedCharacters(item: string): boolean {
        return /(.)\1+/.test(item);
    }

    function permutator(num: number): void {
        if (num === 1) {
            const joined = letters.join('');
            if (!hasRepeatedCharacters(joined)) {
                permutationsArray.push(joined);
            }
        } else {
            for (let index = 0; index !== num; index++) {
                permutator(num - 1);
                charSwap(num % 2 === 0 ? index : 0, num - 1);
            }
        }
    }

    permutator(str.length);

    return permutationsArray.length;
}

// validates us telephone numbers
export function isValidUSPhoneNumber(str: string) {
    return /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/.test(str);
}

// return a passed string with letters in reverse order
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// makes word title cased
function capitalizeString(word: string): string {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

// replaces all instances of a word from a sentence respecting original casing
function replaceWords(sentence: string, before: string, after: string): string {
    let afterWithCasing = after;

    if (/^[A-Z]/.test(before)) afterWithCasing = capitalizeString(after);

    return sentence.split(' ')
        .map(word => word === before ? afterWithCasing : word)
        .join(' ');
}

// truncate a string at specified position
function truncateString(str: string, limit: number): string {
    if (str.length <= limit) return str;
    return `${str.slice(0, limit)}...`;
}

// checks if passed string is a plaindrome ignoring non-alpha characters
function isPalindrome(str: string): boolean {
    let flatStr = str.replace(/\W|_/g, '').toLowerCase();
    return flatStr === flatStr.split("").reverse().join("");
}

// converts a string to pig latin
function translateToPigLatin(str: string): string {
    const vowel = str.match(/[aeiou]/);
    const vowelIndex = vowel ? vowel.index : 1;

    if (vowelIndex === 0) return `${str}way`;

    return `${str.substr(vowelIndex!)}${str.substr(0, vowelIndex!)}ay`;
}

// translate passed sentence to pig latin
function translateSentenceToPigLatin(sentence: string): string {
    return sentence.split(' ').map(translateToPigLatin).join(' ');
}

// repeat a string specified number of times
function repeatString(str: string, amount: number): string {
    return amount < 1 ? '' : `${str}${repeatString(str, amount - 1)}`;
}

// replace white spaces with specified character
function replaceWhiteSpace(sentence: string, char: string = '_') {
    return sentence.replace(/\s+/g, char);
}

// converts string to kebab case
function kebabCase(sentence: string): string {
    return sentence.split(/(?=[A-Z])|\s|_/)
        .join('-')
        .toLowerCase();
}

// find the longest word in a sentence
function findLongestWord(sentence: string): number {
    return sentence.split(' ').reduce((longestWordLength, currentWord) => {
        const currentWordLength = currentWord.length;
        return currentWordLength > longestWordLength ? currentWordLength : longestWordLength;
    }, 0);
}

export default {
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
}
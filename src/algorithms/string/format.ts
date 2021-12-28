// makes word title cased
export function capitalizeString(word: string): string {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

// truncate a string at specified position
export function truncateString(str: string, limit: number): string {
    if (str.length <= limit) return str;
    return `${str.slice(0, limit)}...`;
}

// converts string to kebab case
export function kebabCase(sentence: string): string {
    return sentence
        .split(/(?=[A-Z])|\s|_/)
        .join('-')
        .toLowerCase();
}

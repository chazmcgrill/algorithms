// convert binary code to words
export function convertBinaryToWords(str: string): string {
    return str
        .split(' ')
        .map((binary) => String.fromCharCode(parseInt(binary, 2)))
        .join('');
}

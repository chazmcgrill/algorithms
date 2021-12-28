const SHIFT_AMOUNT = 13;
const LOWER_CASE_A_CODE = 97;
const LOWER_CASE_Z_CODE = 122;
const UPPER_CASE_A_CODE = 65;
const UPPER_CASE_Z_CODE = 90;

function shiftedCharacterCode(characterCode: number, rangeMidpoint: number) {
    const characterCodeShifted =
        characterCode > rangeMidpoint ? characterCode - SHIFT_AMOUNT : characterCode + SHIFT_AMOUNT;
    return String.fromCharCode(characterCodeShifted);
}

function characterShift(char: string) {
    const characterCode = char.charCodeAt(0);
    // lower case
    if (characterCode >= LOWER_CASE_A_CODE && characterCode <= LOWER_CASE_Z_CODE) {
        return shiftedCharacterCode(characterCode, LOWER_CASE_Z_CODE - SHIFT_AMOUNT);
    }
    // upper case
    if (characterCode >= UPPER_CASE_A_CODE && characterCode <= UPPER_CASE_Z_CODE) {
        return shiftedCharacterCode(characterCode, UPPER_CASE_Z_CODE - SHIFT_AMOUNT);
    }
    return char.charAt(0);
}

/** Simple cipher function which shift the characters along by 13 */
export function caesersCipher(message: string): string {
    const letters = message.split('');
    const shiftedLetters = letters.map(characterShift);
    return shiftedLetters.join('');
}

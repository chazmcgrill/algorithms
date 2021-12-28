const ENTITIES: Record<number, string> = { 34: 'quot', 38: 'amp', 39: 'apos', 60: 'lt', 62: 'gt' };
const REGEX_PATTERN = /([^\w\s])/g;

function replaceCharacter(character: string) {
    const characterCode = character.charCodeAt(0);
    if (!(characterCode in ENTITIES)) return character;
    return `&${ENTITIES[characterCode]};`;
}

/** Finds all non-word/numbers/whitespace and replaces 
each with the letters from corresponding ASCII character
codes concatonated with & and ; symbols. */
export function convertHtmlEntities(str: string) {
    return str.replace(REGEX_PATTERN, replaceCharacter);
}

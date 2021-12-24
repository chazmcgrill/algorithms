/* Finds all non-word/numbers/whitespace and replaces 
each with the letters from corresponding ASCII character
codes concatonated with & and ; symbols. */

function convertHTML(str) {
    var entities = { 34: 'quot', 38: 'amp', 39: 'apos', 60: 'lt', 62: 'gt' },
        regex = /([^\w\s])/g;

    return str.replace(regex, function (character) {
        return '&' + entities[character.charCodeAt(0)] + ';';
    });
}

console.log(convertHTML('Dolce & Gabbana'));
console.log(convertHTML('<>'));

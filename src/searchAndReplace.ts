// replaces all instances of a word from a sentence

export function searchAndReplace(sentence: string, before: string, after: string): string {
    var array = sentence.split(' ');

    if (/^[A-Z]/.test(before)) {
        after = after.replace(/^[a-z]/g, function(x) {
        return after[0].toUpperCase();
        });
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] === before) {
        array[i] = after;
        }
    }

    return array.join(' ');
}

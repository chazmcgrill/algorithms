/* Takes a string that is a coded message. Loops through
each character extracts the ascii code. Then nudges along
13 spaces within the alpha characters adding to result.
If its a non alpha character it just leaves as is. */

function rot13(str) {
    return str
        .split('')
        .map((char) => {
            let c = char.charCodeAt(0);
            return c > 64 && c < 91 ? String.fromCharCode(c > 77 ? c - 13 : c + 13) : char.charAt(0);
        })
        .join('');
}

console.log(rot13('LBH QVQ VG!'));

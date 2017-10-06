/* Stores first character for comparison. Loops
through each remaining character checking if it
equals the stored + one. If it matches we replace
the stored item. When it doesn't match it returns
the missing character.  */

function fearNotLetter(str) {
  var stored = str.charCodeAt(0);

  for (var i = 1; i < str.length; i++) {
    if (str.charCodeAt(i) === stored + 1) {
      stored = str.charCodeAt(i);
    } else {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
}

console.log(fearNotLetter("abce"));

/* Takes a string that is a coded message. Loops through
each character extracts the ascii code. Then nudges along
13 spaces within the alpha characters adding to result.
If its a non alpha character it just leaves as is. */

function rot13(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code > 64 && code < 91) {
      result += String.fromCharCode(code > 77 ? code - 13 : code + 13);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

console.log(rot13("LBH QVQ VG!"));

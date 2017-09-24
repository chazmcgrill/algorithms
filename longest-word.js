/* Splits string into seperate words. Compares
each word with the first word and returns length
of the longest word */

function findLongestWord(str) {
  var arr = str.split(' '),
      result = arr[0];
  arr.forEach(function(word) {
    if (word.length > result.length) result = word;
  });
  return result.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

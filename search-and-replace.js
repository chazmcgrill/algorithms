/* Splits the string into an array for iteration.
Before tested for uppercase using regex and it
replaces after if true. IT then loops through the
array and replaces a match of before with after.
Returns rejoined array. */

function myReplace(str, before, after) {
  var array = str.split(' ');

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

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));

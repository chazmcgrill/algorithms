/* First returns string if num is the same size as the
string or bigger. Else cut variable is created comparing
the size left over including the dots. Then returns
remainder using the slice method. */

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  } else {
    var cut = str.length < num || num < 3 ? num : num -= 3;
    return str.slice(0, cut) + '...';
  }
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14)); // "Peter Piper..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11)); // "A-tisket..."
console.log(truncateString("A-", 1)); // "A..."
console.log(truncateString("Absolutely Longer", 2)); // "Ab..."

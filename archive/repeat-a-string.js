/* Recursivly concatonate the str counting down
num each function call. Base case if num goes
below 1 so it returns an empty string. */

function repeatStringNumTimes(str, num) {
  return num < 1 ? "" : str + repeatStringNumTimes(str, num - 1);
}

console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("ab", -2));

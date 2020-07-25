/* Removes non word characters or underscores from string 
and sets to lowercase. Returns comparison between edited 
string and its reverse. */

function palindrome(str) {
  let flatStr = str.replace(/\W|_/g, '').toLowerCase();
  return flatStr === flatStr.split("").reverse().join("");
}

console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("_eye."));

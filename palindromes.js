function palindrome(str) {
  // remove special characters and make lower case
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // return boolean comparison between string and reverse
  return str === str.split("").reverse().join("");
}

console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("1 eye for of 1 eye."));

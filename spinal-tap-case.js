/* Splits the string using regex (negative lookahead 
  on caps, whitespace and underscore) then joins with 
  a dash and lowercases */

function spinalCase(str) {
  return str.split(/(?=[A-Z])|\s|_/).join('-').toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));

/* Replaces every value before a capitol letter
with a space. Then replaces any whitespace or
underscores with a single dash. Returns this with
the to lowercase method. */

function spinalCase(str) {
  var spacer = str.replace(/(?!^)([A-Z])/g, ' $1');
  
  return spacer.replace(/[_\s]+/g, '-').toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));

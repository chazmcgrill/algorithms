/* Returns boolean from comparison of target
and string (with characters in front removed
depending on target length) */

function confirmEnding(str, target) {
  return target === str.substring(str.length - target.length);
}

console.log(confirmEnding("Bastian", "n"));

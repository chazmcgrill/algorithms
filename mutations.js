/* Create a lowercase copy of the array. Loop 
through second strings characters compare to first 
strings if not found return false if loop finishes 
return true */

function mutation(arr) {
  const low = [arr[0].toLowerCase(), arr[1].toLowerCase()];
  for (let el of low[1]) {
    if (low[0].indexOf(el) === -1) return false;
  }
  return true;
}

console.log(mutation(["ALien", "line"]));

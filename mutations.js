/* Loop through every character of the second element 
of the array. then check if the character is present
using index of. If the character is not found return
false. If loop finishes the character is found so it
returns true. */

function mutation(arr) {
  for (var i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)) === -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["Hello", "helo"]));

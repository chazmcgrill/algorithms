/* Creates an empty array called result.
Loops through the array counting up in
increments of provided size. Pushes a
slice from the array into the result. */

function chunkArrayInGroups(arr, size) {
  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

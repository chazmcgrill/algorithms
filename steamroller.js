/* Calls crusher function on the provided array
which loops through array. It then checks if
element is an array. If the item is not an
array it is pushed to the result otherwise
it is passed back through the same function. */

function steamrollArray(arr) {
  var result = [];

  function crusher(array) {
    array.forEach(function(item) {
      Array.isArray(item) ? crusher(item) : result.push(item);
    });
  }

  crusher(arr);
  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

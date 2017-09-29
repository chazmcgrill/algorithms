/* Extracts array from arguments slicing the array 
at start. Removes the elements if not matching the
argument elements. Returns the result. */

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  var filtered = arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
  return filtered;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

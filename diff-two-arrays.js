/* Loops through array checking each value against
the other array. If a value is not found it is pushed
to the result array. This is contained in a reusable
function and is called to check both arrays. */

function diffArray(arr1, arr2) {
  var result = [];

  function finder(a, b) {
    for(var i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) === -1) result.push(a[i]);
    }
  }

  finder(arr1, arr2);
  finder(arr2, arr1);
  return result;
}

console.log(diffArray([1, 2, 3, 5, 10, 19], [1, 2, 3, 4, 5]));

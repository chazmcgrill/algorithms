/* Loops through the provided array checking 
if the value passes back true from the provided
function. If true the array is sliced from the
index and array is returned. If the loops does
not find a true value an empty array is returned.
*/

function dropElements(arr, func) {
  var result = [];

  for(var i = 0; i < arr.length; i++){
    if(func(arr[i])){
      result = arr.slice(i);
      return result;
    }
  }

  return result;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));

/* Assigns higest and lowest values to variables. 
Then loops through from min to max adding the to
the result variable. */

function sumAll(arr) {

  var max = Math.max(arr[0], arr[1]),
      min = Math.min(arr[0], arr[1]),
      result = 0;

  for (var i = min; i <= max; i++) {
    result += i;
  }

  return result;
}

console.log(sumAll([10, 5]));

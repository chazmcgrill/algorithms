/* Loops through array of arrays creates a variable
to store highest value. Then loops through nested
array values comparing the highest value to each
item. When the loop finishes the highest value is
pushed to the result array. */

function largestOfFour(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var highest = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > highest) highest = arr[i][j];
    }
    result.push(highest);
  }

  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

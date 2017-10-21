/* Sorts array and extracts the highest and lowest
value. It returns the result from multiples function.
This loops through multiples of the highest number
and checks if they are shared by every value in
the range. */

function smallestCommons(arr) {
  var sortedArray = arr.sort(),
      high = sortedArray[1],
      low = sortedArray[0];

  function sharedMultiple(num){
    for(var j = high - 1; j >= low; j--){
      if (num % j !== 0) {
        return false;
      }
    }
    return true;
  }

  function multiples() {
    var num = high;
    while (!sharedMultiple(num)) {
      num += high;
    }
    return num;
  }

  return multiples();
}


console.log(smallestCommons([23,18]));

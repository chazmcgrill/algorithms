/* Pushes num into array. The sorts via array 
sort method callback required as it is numerical.
The loops through sorted array returning
index of num */

function getIndexToIns(arr, num) {
  arr.push(num);
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] === num) return i;
  }
}

console.log(getIndexToIns([40, 20, 60], 50));

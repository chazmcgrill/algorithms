/* Runs filter method on the array using the
truth test function provided as the filter.
It returns the first item of the filtered
array. */

function findElement(arr, func) {
  return arr.filter(func)[0];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));

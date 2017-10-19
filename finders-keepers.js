/* Runs filter method on the array using the
function provided as the filter. It returns t
he first index of the filtered array. */

function findElement(arr, func) {
  return arr.filter(func)[0];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));

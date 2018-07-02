/* Add the num to the array, sort then 
return index of num */

function getIndexToIns(arr, num) {
  arr.push(num);
  let sorted = arr.sort((a, b) => a - b);
  return arr.indexOf(num);
}

console.log(getIndexToIns([40, 20, 60], 50));

/* Assigns higest and lowest values to variables. 
Create an array to required length with empty elements.
Add the values in using map then add using reduce. */

function sumAll(arr) {
  let min = Math.min(...arr),
      max = Math.max(...arr);

  return Array(max - min + 1)
    .fill()
    .map((el, idx) => min + idx)
    .reduce((a, b) => a + b);
}

console.log(sumAll([10, 5]));

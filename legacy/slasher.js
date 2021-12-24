/* return removed items starting from 
howMany upto the end of the array */

function slasher(arr, howMany) {
    return arr.splice(howMany, arr.length - howMany);
}

console.log(slasher([1, 2, 3], 0));
console.log(slasher([1, 2, 3], 9));

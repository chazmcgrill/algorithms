function pairwise(arr, arg) {
    var indexArray = [];

    // loop through array items
    for (var i = 0; i < arr.length; i++) {
        checkArray(i);
    }

    // if sum = arg push to array and flag items as used.
    function checkArray(i) {
        arr.reduce((acc, value, index) => {
            if (arr[i] + value === arg && index > i) {
                indexArray.push(index + i);
                arr[index] = 'used';
                arr[i] = 'used';
                return;
            }
        }, 0);
    }

    // return the sum of the array items.
    return indexArray.reduce((a, b) => a + b, 0);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 3, 2, 4], 4));

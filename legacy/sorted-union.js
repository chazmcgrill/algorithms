/* Starts by extracting the arguments into an array. 
Then uses reduce to concatonate the all the arrays
together. Then it filters the result by comparing the
index of the element with the first instance of the
element in the united array. This means you get a
filtered array with only the first instances of
each element. */

function uniteUnique(arr) {
    var args = Array.from(arguments);

    var united = args.reduce(function (a, b) {
        return a.concat(b);
    });

    var unique = united.filter(function (element, index, fullArray) {
        return index === fullArray.indexOf(element);
    });

    return unique;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));

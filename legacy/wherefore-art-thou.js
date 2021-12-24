/* Uses filter method on the collection and it loops 
each element. If the element key does not match source
key false is returned and it is omitted from the array
otherwise it is added.   */

function whatIsInAName(collection, source) {
    return collection.filter((el) => {
        for (let key in source) {
            if (source[key] !== el[key]) return false;
        }
        return true;
    });
}

console.log(whatIsInAName([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], { a: 1 }));
console.log(whatIsInAName([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }], { a: 1, b: 2 }));
console.log(
    whatIsInAName(
        [
            { first: 'Romeo', last: 'Montague' },
            { first: 'Mercutio', last: null },
            { first: 'Tybalt', last: 'Capulet' },
        ],
        { last: 'Capulet' },
    ),
);

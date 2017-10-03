/* Uses filter method on the collection and it loops 
each element. If the element key does not match source
key false is returned and it is omitted from the array
otherwise it is added.   */

function whatIsInAName(collection, source) {

  return collection.filter(function(element) {
    for (var key in source) {
      if (source[key] !== element[key]) return false;
    }
    return true;
  });

}

console.log(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));

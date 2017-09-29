/* Creates a filtered variable and uses the filter 
method to remove falsy values. Only requires single
return statement with the element as filter removes
false values. */

function bouncer(arr) {
  var filtered = arr.filter(function(element) {
    return element;
  });
  return filtered;
}

console.log(bouncer([7, "ate", "", false, 9]));

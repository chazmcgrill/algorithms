/* Creates a filtered variable and uses the filter
method to remove falsy values. Only requires single
return statement with the element as filter removes
false values. */

function bouncer(arr) {
  return arr.filter(el => el);
}

console.log(bouncer([7, "ate", "", false, 9]));

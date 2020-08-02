/* Checks if the main value is a number. 
  Checks if argument present and is number 
  if so returns main + argument. If secondary 
  function call it uses currying to return 
  the sum of x and y */

function addTogether(x, ...args) {
  if (typeof (x) === 'number') {
    if (args[0]) {
      return typeof(args[0]) === 'number' ? x + args[0] : undefined;
    } 
  
    return function(y) {
      if (typeof(y) === "number") return x + y;
    }
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));

/*  */

function addTogether(x) {

  if (arguments[1]) {
    if (typeof(arguments[1]) === 'number') {
      return x + arguments[1];
    } else {
      return undefined;
    }

  } else if (typeof(arguments[0]) !== 'number') {
    return undefined;
  }

  return function(y) {
    if (typeof(y) === "number") {
      return x + y;
    }
  };

}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));

/* loops through collection returns false
if pre key is not true. IF the loop finishes
it returns true */

function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++) {
    if (!(collection[i][pre])) {
      return false;
    }
  }
  return true;
}

console.log(truthCheck([
  {
    "user": "Tinky-Winky",
    "sex": "male"
  }, {
    "user": "Dipsy",
    "sex": "male"
  }, {
    "user": "Laa-Laa",
    "sex": "female"
  }, {
    "user": "Po",
    "sex": "female"
  }
], "sex"));

/* Use the every array method to check 
   every item matches pre key */

function truthCheck(collection, pre) {
  return collection.every(el => el[pre]);
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


function sym(args) {
  var resultArray = sorted(arguments[0]);
  var compareArray = [];

  // loop through arguments
  for(var a = 1; a < arguments.length; a++){
    compareArray = sorted(arguments[a]);
    compare();
  }

  // compare resultArray against next array
  function compare(){
    for(var b = 0; b < resultArray.length; b++){
      if(check(resultArray[b])){
        resultArray.splice(b, 1);
        b -= 1;
      }
    }
    joinArrs();
  }

  // remove items from both arrays
  function check(num){
    for(var c = 0; c < compareArray.length; c++){
      if(num === compareArray[c]){
        compareArray.splice(c, 1);
        return true;
      }
    }
  }

  // concatonate arrays to resultArray
  function joinArrs() {
    resultArray = [resultArray, compareArray].reduce(function(a, b) {
      return a.concat(b);
    },[]);
  }

  // sort and remove duplicates
  function sorted(arr){
    var sorted = arr.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });
    return sorted.sort();
  }

  return resultArray.sort();
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));

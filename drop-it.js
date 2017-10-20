function dropElements(arr, func) {
  var resultArr = [];
  for(var i = 0; i < arr.length; i++){
    // find true and slice from index
    if(func(arr[i])){
      resultArr = arr.slice(i);
      return resultArr;
    }
  }
  return resultArr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));

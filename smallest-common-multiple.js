function smallestCommons(arr) {
  var sortedArray = arr.sort(),
      highest = sortedArray[1],
      lowest  = sortedArray[0],
      result  = 0;

  // loop to check numbers against multiple
  function multipleCheck(val){
    for(var j = highest - 1; j >= lowest; j--){
      if(val % j !== 0){
        return false;
      }
    }
    return true;
  }

  // loop through multiples of highest number
  function multiple(){
    for(var i = highest;; i += highest){
      if(multipleCheck(i)){
        result = i;
        return true;
      }
    }
  }

  if(multiple()){
    return result;
  }

}


smallestCommons([1,5]);

function sumPrimes(num) {
  var result = 0;

  // loop through numbers upto num
  for(var a = 2; a <= num; a++){
    if(primeCheck(a)){
      result += a;
    }
  }

  // function to check prime (loop to find divisors)
  function primeCheck(val) {
    for(var b = 2; b < val; b++) {
      if(val % b === 0) {
        return false;
      }
    }
    return true;
  }

  return result;
}

console.log(sumPrimes(10));

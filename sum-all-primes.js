/* It loops through each number below and
including the num value passed. It then
uses the prime checking function to find out
which vaues to sum. This is one by checking
if the modulus is zero on any number below
the value except one. */

function sumPrimes(num) {
  var result = 0;

  function primeCheck(val) {
    for(var b = 2; b < val; b++) {
      if(val % b === 0) {
        return false;
      }
    }
    return true;
  }

  for(var a = 2; a <= num; a++){
    if(primeCheck(a)){
      result += a;
    }
  }

  return result;
}

console.log(sumPrimes(10));

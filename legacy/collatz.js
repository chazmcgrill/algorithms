
function collatz(n) {
  if (n === 1) {
    return 0;
  } 

  return 1 + (n % 2 === 0 ? collatz(n / 2) : collatz(3 * n + 1));
}

console.log(collatz(3));
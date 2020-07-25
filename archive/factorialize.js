function factorialize(num) {
  // multiply each number counting down using recursion
  return num < 1 ? 1 : num * factorialize(num - 1);
}

console.log(factorialize(10));

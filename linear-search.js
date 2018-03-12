function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}

console.log(linearSearch([1,3,5,6,4,3,7], 5));
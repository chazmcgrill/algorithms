function binarySearch(array, value) {
  let sorted = array.sort((a,b) => a - b);

  do {
    const midIndex = Math.floor(sorted.length / 2);
    let midVal = sorted[midIndex];
    if (midVal === value) {
      return true;
    } 
    sorted = midVal < value ? sorted.slice(midIndex) : sorted.slice(0, midIndex); 
  } while (sorted.length !== 1)

  return false
}

console.log(binarySearch([1,2,43,54,6,76,87,78,76,54,8976,767,98,868,68,86], 76));
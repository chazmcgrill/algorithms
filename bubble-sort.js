let array = [5,4,1,3,2];

function bubbleSort(arr) {
  let swapCount;
  do {
    swapCount = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const store = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = store;
        swapCount++;
      }
    }
  } while (swapCount !== 0)
  return arr;
}

console.log(bubbleSort(array));

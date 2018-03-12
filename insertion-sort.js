let array = [5, 4, 1, 3, 2];

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]
    for (var j = i - 1; j > -1 && arr[j] > val; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = val;
  }
  return arr;
}

console.log(insertionSort(array));
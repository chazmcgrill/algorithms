function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice();
  for (let i = 0, k = arr1.length; i < k; i++) {
    result.splice(n, 0, arr1[i]);
    n++;
  }
  return result;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
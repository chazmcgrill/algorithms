/* converts normal array into 2D array */

function arrayNester(array, size) {
  let outerArray = [];
  while (array.length > 0) {
    outerArray.push(array.splice(0, size));
  }
  return outerArray;
}

Array.prototype.flatten = function () {
  let result = [];

  function crusher(array) {
    array.forEach(el => {
      Array.isArray(el) ? crusher(el) : result.push(el);
    });
  }

  crusher(this);
  return result;
}

console.log([1, [2], [3, [[4]]]].flatten());
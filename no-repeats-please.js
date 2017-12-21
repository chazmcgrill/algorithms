/* Calls the permutator using the str length as a counter.
This loops through each character recursively swapping them.
It then rejoins them and checks for repititions using regex
Any found are deposited into an array whos length is
returned at the end. */

function permAlone(str) {
  var permsArray = [],
      strArray = str.split('');

  function permutator(n) {
    if (n === 1) {
      var joined = strArray.join('');
      if (!repeatCheck(joined)) {
        permsArray.push(joined);
      }

    } else {
      for (var i = 0; i !== n; i++) {
        permutator(n - 1);
        n % 2 === 0 ? charSwap(i, n - 1) : charSwap(0, n - 1);
      }
    }
  }

  function charSwap(a, b) {
    var temp = strArray[a];
    strArray[a] = strArray[b];
    strArray[b] = temp;
  }

  function repeatCheck(item) {
    return /(.)\1+/.test(item);
  }

  permutator(str.length);

  return permsArray.length;
}

console.log(permAlone('aabb'));

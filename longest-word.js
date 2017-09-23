function findLongestWord(str) {
  
  var arr = str.split(' '),
      result = arr[0];

  arr.forEach(function(item) {
    if (item.length > result.length) result = item;
  });

  return result.length;

}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

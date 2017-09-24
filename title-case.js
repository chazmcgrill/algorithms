/* Splits string into array of seperate words.
Then loops through each word capitalising the
first character. Returns rejoined array */

function titleCase(str) {
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase();
  }
  return arr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

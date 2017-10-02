/* Removes denominations greater than the num value.
Then loops through keys checking num is higher than or
equal to the value. If it is a string of the numeral
is concatonated onto the result. It keeps checking
the same key until num is less than the value. */

function convertToRoman(num){

  var allKeys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      numerals = {
        1: 'I', 4: 'IV', 5: 'V', 9: 'IX',
        10: 'X', 40: 'XL', 50: 'L', 90: 'XC',
        100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
      },
      result = '';

  var keys = allKeys.filter(function(element) {
        return element <= num;
      });

  for (var i = 0; i < keys.length; i++) {
    if (num >= keys[i]) {
      result += numerals[keys[i]];
      num -= keys[i];
      i--;
    }
  }

  return result;
}

console.log(convertToRoman(4));

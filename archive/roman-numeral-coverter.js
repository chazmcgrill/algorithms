/* Removes denominations greater than the num value.
Usesa while loop to check if num is greater than or 
equal to the current key it concats the current numeral 
onto the result. If num is lower it removes the key from 
the array allowing the next key to be checked. Once num 
is zero the resulting numeral is returned */

function convertToRoman(num){

  const ALL_KEYS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const NUMERALS = {
    1: 'I', 4: 'IV', 5: 'V', 9: 'IX',
    10: 'X', 40: 'XL', 50: 'L', 90: 'XC',
    100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
  };
  
  const keys = ALL_KEYS.filter(el => el <= num);
  
  let result = '';

  while (num > 0) {
    if (num >= keys[0]) {
      result += NUMERALS[keys[0]];
      num -= keys[0];
    } else {
      keys.shift()
    }
  }

  return result;
}

console.log(convertToRoman(2018));

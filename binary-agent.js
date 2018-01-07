function binaryAgent(str) {
  var arr = str.split(" ");
  var sentence = [];

  // loop through each item, reverse and pass to code converter.
  arr.forEach(function(item) {
    var reverseItem = item.split("").reverse().join("");
    convertCode(reverseItem);
  });

  // convert binary to character code
  function convertCode(binary) {
    var charCode = 0;
    for (var i = 0; i < binary.length; i++) {
      if (Number(binary.charAt(i)) === 1) {
        charCode += Math.pow(2, i);
      }
    }
    sentence += String.fromCharCode(charCode);
  }

  return sentence;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

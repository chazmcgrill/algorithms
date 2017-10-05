/* Adapted the pig latin string converter
so it now converts whole sentences. By looping
through each word and changing it to the result
of the translation.*/

function tranlatePigLatin(sentence) {
  var array = sentence.split(' ');

  for (var i = 0; i < array.length; i++) {
    array[i] = translator(array[i]);
  }

  return array.join(' ');
}


function translator(str) {
  var cons = ["a", "e", "i", "o", "u"],
      index;

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < cons.length; j++) {
      if (str.charAt(i) === cons[j]) {
        index = i;
        i = str.length;
      }
    }
  }

  return index === 0 ? str + "way" : str.substr(index) + str.substr(0, index) + "ay";
}

console.log(tranlatePigLatin("peter piper picked a pick of pickled pepper"));

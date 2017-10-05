/* Loops through each charater of the string 
and checks loop of consonants for match. If
found loop is broken. Finishes by returning
the str rearranged according to the first
index. */


function translatePigLatin(str) {

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

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("charlie"));

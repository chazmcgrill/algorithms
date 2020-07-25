/* Loops through each character of the string
and checks loop of consonants for match. If
found loop is broken. Finishes by returning
the str rearranged according to the first
index. */


function translatePigLatin(str) {
  const vwl = str.match(/[aeiou]/);
  const idx = vwl ? vwl.index : 1;

  return idx === 0 ? str + "way" : str.substr(idx) + str.substr(0, idx) + "ay";
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("lmd"));

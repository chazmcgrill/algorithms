/* Loops through elements on each iteration it
pushes an array with element and its pairing. It
is retreived from the object of elements and
pairings. */

function pairElement(str) {

  var pairings = {G: "C", C: "G", A: "T", T: "A"},
      arr = str.split(''),
      result = [];

  arr.forEach(function(item){
    result.push([item, pairings[item]]);
  });

  return result;
}

console.log(pairElement("GCG"));

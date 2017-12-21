/* Return a random number within a range */

function randomizer(min, max) {
  return Math.floor(Math.random() * max) + min;
}

console.log(randomizer(1, 8));
console.log(randomizer(1, 200));

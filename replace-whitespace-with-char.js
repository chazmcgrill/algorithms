function replaceWhitespaceWithChar(str, char) {
  if (!str) return str;
  return str.replace(/\s+/g, char || '_');
}

console.log(replaceWhitespaceWithChar('Hi Mum!', '•'));
console.log(replaceWhitespaceWithChar('   do   not          enter      '));
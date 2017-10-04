/* Simple email validation using regular expression.
Start of string needs to be more than one character
followed by an at symbol. Domain is one or more
limited characters followed by a dot then 2 or 3 alpha
characters then an optional dot and word before the end. */

function emailValidator(str) {
  var regex = /^\w+@[0-9a-zA-Z_]+?\.[a-zA-Z]{2,3}\.?\w+?$/;
  return regex.test(str);
}

console.log(emailValidator("test_123@hello.com"));
console.log(emailValidator("test_123@ @hello.com"));
console.log(emailValidator("tester@hello.co.uk"));
console.log(emailValidator("tes.ter@hello.co.uk"));
console.log(emailValidator("tester@123hello.co.uk"));

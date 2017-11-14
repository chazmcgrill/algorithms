function telephoneCheck(str) {
  var newStr = str.replace(/(\D+)/g, '');
  // should be ten characters or eleven characters starting with 1
  if(newStr.length === 10 || newStr.length === 11 && newStr.charAt(0) === "1"){
    for(var i = 0; i < str.length; i++){
      // find if there are brackets
      if(str.charAt(i) === "(" || str.charAt(i) === ")") {
        return brackets();
        // find if there are dashes
      } else if (str.charAt(i) === "-") {
        return dashes();
      }
    }
    return true;
  } else {
    return false;
  }

  function brackets() {
    var bracketsStr = str.replace(/\s/g, '');
    if(newStr.length === 11){
      bracketsStr = bracketsStr.substr(1);
    }
    if(bracketsStr.charAt(0) === "(" && bracketsStr.charAt(4) === ")"){
      // perform brackets & dash check
      return bracketsStr.search("-") === -1 || bracketsStr.indexOf("-") === 8;
    } else {
      return false;
    }
  }

  function dashes() {
    var dashesStr = str.replace(/[ )(]/g, '');
    if(newStr.length === 11){
      dashesStr = dashesStr.substr(1);
    }
    return dashesStr.charAt(3) === "-" && dashesStr.charAt(7) === "-";
  }
}

telephoneCheck("555-555-5555");

/*function telephoneCheck(str) {
  
  return true;
}

telephoneCheck("555-555-5555");*/
function telephoneCheck(str) {
    // Good luck!
    return /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/.test(str);
  }
  
  telephoneCheck("555-555-5555");
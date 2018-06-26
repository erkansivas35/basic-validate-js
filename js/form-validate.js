function textControl(selector) {
  let selectItem = document.getElementById(selector).value;

  if (selectItem == '') {
    return false;
  }
  else {
    return true;
  } 
}

function emailControl(selector) {
  let selectItem = document.getElementById(selector).value;
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(selectItem);
}

function patternControl(outString, pattern) {  
  let regex = pattern;
  return regex.test(outString);
}
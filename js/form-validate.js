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

function ibanControl(selector) {
  let selectItem = document.getElementById(selector).value;
  let regex = /^[a-zA-Z]{2}[0-9]{2}\s?[a-zA-Z0-9]{4}\s?[0-9]{4}\s?[0-9]{3}([a-zA-Z0-9]\s?[a-zA-Z0-9]{0,4}\s?[a-zA-Z0-9]{0,4}\s?[a-zA-Z0-9]{0,4}\s?[a-zA-Z0-9]{0,3})?$/gm;
  return regex.test(selectItem);
}

function patternControl(outString, pattern) {
  let regex = pattern;
  return regex.test(outString);
}

function dateControl(selector) {
  //Format: YYYY/MM/DD
  let selectItem = document.getElementById(selector).value;
  var temp = selectItem.split('-');
  var d = new Date(temp[0] + '/' + temp[1] + '/' + temp[2]);
  return (d && (d.getMonth() + 1) == temp[1] && d.getDate() == Number(temp[2]) && d.getFullYear() == Number(temp[0]));
}

function customDateControl(date) {
  //Format: DD/MM/YYYY
  var temp = date.split('/');
  var d = new Date(temp[2] + '/' + temp[1] + '/' + temp[0]);
  return (d && (d.getMonth() + 1) == temp[1] && d.getDate() == Number(temp[0]) && d.getFullYear() == Number(temp[2]));
}
"use strict";

$(document).ready(function () {
  let result = 0;
  let expression = '';
  $('.buttons button').click(function () {
    let txt = $(this).text();

    if (txt === '=') {
      result = eval(expression);
      $('#result').text(result);
      expression = expression + '=' + result;
      $('#expression').text(expression);
      expression = result.toString();
    } else if (txt === 'AC' || txt === 'CE') {
      result = 0;
      expression = '';
      $('#result').text('0');
      $('#expression').text('0');
    } else {
      expression = expression.concat(txt);
      console.log(expression);
      $('#expression').text(expression);
    }


  });
});
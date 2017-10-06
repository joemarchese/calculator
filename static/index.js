var operation // 'multiply, divide, add, subtract'
var operandOne, operandTwo
const operationShort = {'add': '+', 'subtract': '-', 'divide': '/', 'multiply': '*', }


$(document).ready(function () {
  attachKeyboardEvents();
  attachClickEvents();
});

function attachKeyboardEvents() {
  $(document).keypress(function(e) {
    console.log(e.keyCode, e.key)
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)){
      $('#output').append(e.key)
    }
    if (e.key === '.'){$('#output').append(e.key)};
    if (e.key === '/'){divide()};
    if (e.key === '-'){subtract();};
    if (e.key === '+'){add();};
    if (e.key === '*'){multiply();};
    if (e.key === 'Enter') {equals();};
    if (e.key === ' '){clear();};
  });
}

function attachClickEvents() {
  $('#0').click(function(){$('#output').append(0)})
  $('#1').click(function(){$('#output').append(1)})
  $('#2').click(function(){$('#output').append(2)})
  $('#3').click(function(){$('#output').append(3)})
  $('#4').click(function(){$('#output').append(4)})
  $('#5').click(function(){$('#output').append(5)})
  $('#6').click(function(){$('#output').append(6)})
  $('#7').click(function(){$('#output').append(7)})
  $('#8').click(function(){$('#output').append(8)})
  $('#9').click(function(){$('#output').append(9)})
  $('#decimal').click(function(){$('#output').append('.')})
  $('#clear').click(clear);
  $('#divide').click(divide);
  $('#add').click(add);
  $('#subtract').click(subtract);
  $('#multiply').click(multiply);
  $('#equals').click(equals);
}

function add(){
  if (operation !== undefined){
    equals();
    operation = 'add';
    $('#output').empty();
  } else{
  operation = 'add';
  operandOne = Number($('#output').text());
  $('#output').empty();
  }
}

function subtract(){
  if ($('#output').text() == "") { // Negative Number Entry Handling Code
    $('#output').append('-');
  } else if (operation !== undefined){
    equals();
    operation = 'subtract';
    $('#output').empty();
  } else {
  operation = 'subtract';
  operandOne = Number($('#output').text());
  $('#output').empty();
  }
}

function multiply(){
  if (operation !== undefined){
    equals();
    operation = 'multiply';
    $('#output').empty();
  } else{
  operation = 'multiply';
  operandOne = Number($('#output').text());
  $('#output').empty();
  }
}

function divide(){
  if (operation !== undefined){
    equals();
    operation = 'divide';
    $('#output').empty();
  } else{
  operation = 'divide';
  operandOne = Number($('#output').text());
  $('#output').empty();
  }
}

function clear(){
  operandOne = undefined
  operandTwo = undefined
  operation = undefined
  $('#output').empty();
  $('#history').empty();
}

function equals() {
  var result;
  operandTwo = Number($('#output').text());
  if (operandOne && operandTwo) {
    if (operation === 'add'){result = operandOne + operandTwo}
    if (operation === 'subtract'){result = operandOne - operandTwo}
    if (operation === 'multiply'){result = operandOne * operandTwo}
    if (operation === 'divide'){result = operandOne / operandTwo}
    operandOne = result;
    operandTwo = undefined
    operation = undefined
    $('#output').text(result);
  }
}

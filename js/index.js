var operation // 'multiply, divide, add, subtract'
var operandOne, operandTwo

$(document).ready(function () {
  attachAllEvents();
});
                  
function attachAllEvents() {
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
  $('#clear').click(function(){
    operandOne = undefined
    operandTwo = undefined
    operator = undefined
    $('#output').empty();
  })
  $('#divide').click(function(){
    operation = 'divide';
    operandOne = Number($('#output').text());
    $('#output').empty();
  })
  $('#add').click(function(){
    operation = 'add';
    operandOne = Number($('#output').text());
    $('#output').empty();
  })
  $('#subtract').click(function(){
    operation = 'subtract';
    operandOne = Number($('#output').text());
    $('#output').empty();
  })
  $('#multiply').click(function(){
    operation = 'multiply';
    operandOne = Number($('#output').text());
    $('#output').empty();
  })
  
  $('#equals').click(function(){
    var result;
    operandTwo = Number($('#output').text());
    if (operandOne && operandTwo) {
      if (operation === 'add'){result = operandOne + operandTwo}
      if (operation === 'subtract'){result = operandOne - operandTwo}
      if (operation === 'multiply'){result = operandOne * operandTwo}
      if (operation === 'divide'){result = operandOne / operandTwo}
      operandOne = result;
      $('#output').text(result);
    }
  })
}
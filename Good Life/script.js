var quiz = document.createElement('div');
quiz.innerHTML = '<p>What is 2 + 2?</p>';
document.body.appendChild(quiz);
var answer = document.createElement('input');
answer.setAttribute('type', 'text');
answer.setAttribute('id', 'answer');
document.body.appendChild(answer);
var submit = document.createElement('button');
submit.innerHTML = 'Submit';
document.body.appendChild(submit);
var result = document.createElement('div');
result.setAttribute('id', 'result');
document.body.appendChild(result);
submit.onclick = function() {
 for (var i = 0; i < 20; i++) {
  var num1 = Math.floor(Math.random() * 100);
  var num2 = Math.floor(Math.random() * 100);
  var answer = document.getElementById(num1 + ' + ' + num2 + ' = ?');
  if (answer == num1 + num2) {
    score++;
  
    document.getElementById('result').innerHTML = 'Correct!';
  } else {
    document.getElementById('result').innerHTML = 'Incorrect!';
  }
}
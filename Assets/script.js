var highscoreListEl = document.querySelector('.highscore-list');
var startButton = document.getElementById('start');
var timerEl = document.getElementById('timer');
var messageEl1 = document.getElementById('message-1');
var messageEl2 = document.getElementById('message-2');
var messageEl3 = document.getElementById('message-3');
var messageEl4 = document.getElementById('message-4');
var messageEl5 = document.getElementById('message-5');
var highscoresUl = document.getElementById('highscores');

var initialSection = document.querySelector('.center');
var question1El = document.querySelector('.question-1');
var question2El = document.querySelector('.question-2');
var question3El = document.querySelector('.question-3');
var question4El = document.querySelector('.question-4');
var question5El = document.querySelector('.question-5');
var submit1El = document.querySelector('#submit-1');
var submit2El = document.querySelector('#submit-2');
var submit3El = document.querySelector('#submit-3');
var submit4El = document.querySelector('#submit-4');
var submit5El = document.querySelector('#submit-5');
var finalSubmitEl = document.querySelector('#submit-final');
var endEl = document.querySelector('.end');
var scoreEl = document.querySelector('#score');

var timerRemaining = 75;
var userScore = 0;
var timerInterval;
 var highscorePage = document.getElementById('highscore')




startButton.addEventListener('click', function() {
  initialSection.classList.add('hidden');
  question1El.classList.remove('hidden');

  timerEl.textContent = 'Time: ' + timerRemaining;
  timerInterval = setInterval(function() {
    timerRemaining--;
    timerEl.textContent = 'Time: ' + timerRemaining;

    if (timerRemaining <= 0) {
      clearInterval(timerInterval);
      // Game over actions here
    }
  }, 1000);
});

submit1El.addEventListener('click', function(event) {
  event.preventDefault();

  question1El.classList.add('hidden');
  question2El.classList.remove('hidden');

  let chosenAnswer = document.querySelector('input[name="useful_tool"]:checked');
  if (chosenAnswer && chosenAnswer.value === 'Console.log') {
    userScore += 20;
    alert('Correct!');
  } else {
    timerRemaining -= 15;
    alert('Incorrect! 15 seconds deducted...');
  }
  scoreEl.textContent = 'Final score is ' + userScore;
});

submit2El.addEventListener('click', function(event) {
  event.preventDefault();
  question2El.classList.add('hidden');
  question3El.classList.remove('hidden');

  let chosenAnswer = document.querySelector('input[name="string_values"]:checked');
  if (chosenAnswer && chosenAnswer.value === 'Quotations') {
    userScore += 20;
    alert('Correct!');
  } else {
    timerRemaining -= 15;
    alert('Incorrect! 15 seconds deducted...');
  }
  scoreEl.textContent = 'Final score is ' + userScore;
});

submit3El.addEventListener('click', function(event) {
  event.preventDefault();
  question3El.classList.add('hidden');
  question4El.classList.remove('hidden');

  let chosenAnswer = document.querySelector('input[name="arrays_js"]:checked');
  if (chosenAnswer && chosenAnswer.value === 'All of the above') {
    userScore += 20;
    alert('Correct!');
  } else {
    timerRemaining -= 15;
    alert('Incorrect! 15 seconds deducted...');
  }
  scoreEl.textContent = 'Final score is ' + userScore;
});

submit4El.addEventListener('click', function(event) {
  event.preventDefault();
  question4El.classList.add('hidden');
  question5El.classList.remove('hidden');

  let chosenAnswer = document.querySelector('input[name="if_else"]:checked');
  if (chosenAnswer && chosenAnswer.value === 'Parentheses') {
    userScore += 20;
    alert('Correct!');
  } else {
    timerRemaining -= 15;
    alert('Incorrect! 15 seconds deducted...');
  }
  scoreEl.textContent = 'Final score is ' + userScore;
});

submit5El.addEventListener('click', function(event) {
  event.preventDefault();
  question5El.classList.add('hidden');
  endEl.classList.remove('hidden');

  let chosenAnswer = document.querySelector('input[name="data_types"]:checked');
  if (chosenAnswer && chosenAnswer.value === 'Alerts') {
    userScore += 20;
    alert('Correct!');
  } else {
    timerRemaining -= 15;
    alert('Incorrect! We are done here...');
  }
  clearInterval(timerInterval);
  scoreEl.textContent = 'Final score is ' + userScore;
});


var yourScore = document.getElementById('results')
yourScore.textContent = 'Final score is ' + userScore;

finalSubmitEl.addEventListener('click', function(event) {
  scoreEl.textContent = 'Final score is ' + userScore;
  event.preventDefault();
  endEl.classList.add('hidden');
  highscoreListEl.classList.remove('hidden');

  let userInitials = document.getElementById('initial').value;

  if (userInitials === '') {
    alert('Initials cannot be blank');
    return false;
  }

  var finalScore = {
    initials: userInitials,
    score: userScore
  };

  var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  highscores.push(finalScore);
  window.localStorage.setItem('highscores', JSON.stringify(highscores));
  updateHighscores();
});

highscoreListEl.addEventListener('click', function() {
  updateHighscores();
});

function updateHighscores() {
  highscoresUl.innerHTML = ''; 

  var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  highscores.sort((a, b) => b.score - a.score); 

  for (let i = 0; i < highscores.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${highscores[i].initials}: ${highscores[i].score}`;
    highscoresUl.appendChild(li);
  }
}

scoreEl.textContent = 'Final score is ' + userScore;

function clearHighscores() {
  localStorage.removeItem('highscores');
  highscoresUl.innerHTML = '';
}

 var clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function(){
 clearHighscores();
});



highscorePage.addEventListener('click', function(){
  initialSection.classList.add('hidden')
  highscoreListEl.classList.remove('hidden')
  updateHighscores();
 })

 var backEl = document.getElementById('back')

 backEl.addEventListener('click', function(){

 })

 

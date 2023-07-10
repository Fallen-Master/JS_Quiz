var highscoreEl = document.getElementById('highscore');
var startButton = document.getElementById ('start')
var timerEl = document.getElementById('timer');
var messageEl = document.getElementById('message')

var initialSection = document.querySelector('.center')
var allQuestions = document.querySelector('.questions ')
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
var resultEl = document.querySelector('#results');

var timerRemaining =  75;
var userScore = 0;
var timerInterval;

startButton.addEventListener('click', function() {
    initialSection.classList.add('hidden');
    // endEl.classList.add('hidden');
    // allQuestions.classList.remove('hidden');
    question1El.classList.remove('hidden')


    timerEl.textContent = 'Time: ' + timerRemaining;
     timerInterval = setInterval(function() {
        timerRemaining--;
        timerEl.textContent = 'Time: ' + timerRemaining;

        if ( timerRemaining <= 0) {
            clearInterval (timerInterval)
            //game over still needs to happen
            // if all questions are answered 
        }
    }, 1000);
    
  });

  submit1El.addEventListener('click', function(event) {
    event.preventDefault();

    question1El.classList.add('hidden');
    question2El.classList.remove('hidden');

    let choosenAnswer = document.querySelector('input[name="useful_tool"]:checked');
    if (choosenAnswer && choosenAnswer.value === 'Console.log'){
     userScore += 20;
     alert('Correct!');
    }
    else {
        timerRemaining -=15; 
        alert('incorrect! 15 seconds Gone...')
    }
  });

  submit2El.addEventListener('click', function(event){
    event.preventDefault();
    question2El.classList.add('hidden');
    question3El.classList.remove('hidden');

    let choosenAnswer = document.querySelector('input[name="string_values"]:checked');
    if (choosenAnswer && choosenAnswer.value === 'Quotations'){
     userScore += 20;
     alert('Correct!');
    }
    else {
        timerRemaining -=15; 
        alert('incorrect! 15 seconds Gone...')
    }    
  });

  submit3El.addEventListener('click', function (event){
    event.preventDefault();
    question3El.classList.add('hidden');
    question4El.classList.remove('hidden');

    let choosenAnswer = document.querySelector('input[name="arrays_js"]:checked');
    if (choosenAnswer && choosenAnswer.value === 'All of the above'){
     userScore += 20;
     alert('Correct!');
    }
    else {
        timerRemaining -=15; 
        alert('incorrect! 15 seconds Gone...')
    }   
  });

  submit4El.addEventListener('click', function(event){
    event.preventDefault();
    question4El.classList.add('hidden');
    question5El.classList.remove('hidden');

    let choosenAnswer = document.querySelector('input[name="if_else"]:checked');
    if (choosenAnswer && choosenAnswer.value === 'Parentheses'){
     userScore += 20;
     alert('Correct!');
    }
    else {
        timerRemaining -=15; 
        alert('incorrect! 15 seconds Gone...');
    }   
  });

  submit5El.addEventListener('click', function(event){
    event.preventDefault();
    question5El.classList.add('hidden');
    endEl.classList.remove('hidden');

    let choosenAnswer = document.querySelector('input[name="data_types"]:checked');
    if (choosenAnswer && choosenAnswer.value === 'Alerts'){
     userScore += 20;
     alert('Correct!');
    }
    else {
        timerRemaining -=15; 
        alert('incorrect! We are done here...');
    }  
    clearInterval(timerInterval);
  });

  


  
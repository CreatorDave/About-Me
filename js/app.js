'use strict';

console.log('Hello World!');

//TODO: Get USERS Name - prompt - alert a greeting back to the user


let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

//TODO: prompt them with 5 yes or no (y/n) questions, alert if they got the answer right or wrong
function q1(){
let questionOneGuess = prompt('Do I have a son?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert('Sorry, you got it wrong');
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert('You got it right!');
}
}

function q2(){
let questionTwoGuess = prompt('Did I serve in the Air Force?').toLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
    alert('HUAHH! AIM HIGH!');
} else if (questionTwoGuess === 'no' || questionTwoGuess === 'n'){
    alert('Sorry, try that one again.');
}
}

function q3(){
let questionThreeGuess = prompt('Did I serve in the Coast Guard?').toLowerCase();

if(questionThreeGuess === 'yes' || questionThreeGuess === 'y'){
    alert('COAST GUARRRDDD! That\'s your sorry! You\'re correct!');
} else if (questionThreeGuess === 'no' || questionThreeGuess === 'n'){
    alert('Did you think I was a salty sailor? Nope.');
}
}

function q4(){
let questionFourGuess = prompt('Did I work in Patent Law?').toLowerCase();

if(questionFourGuess === 'yes' || questionFourGuess === 'y'){
    alert('You\'re a regular Einstein! Correct!');
} else if (questionFourGuess === 'no' || questionFourGuess === 'n'){
    alert('Did you think it was Criminal law? Sorry bro\'namith.');
}
}

function q5(){
let questionFiveGuess = prompt('Do I want to start a Youtube Channel?').toLowerCase();

if(questionFiveGuess === 'yes' || questionFiveGuess === 'y'){
    alert('Mr. Beast is my hero. Yes, I\'d love to start a Youtube Channel.');
} else if (questionFiveGuess === 'no' || questionFiveGuess === 'n'){
    alert('Come on bro. Let\'s try to entertain the masses.');
}
}

function q6 (){
let correctAnswer = '6';

let numberOfGuesses = 4;

for(let i = 0; i < numberOfGuesses; i++){
    let questionSixGuess =  prompt('Guess a number between 1 and 10.');
    if (questionSixGuess === correctAnswer) {
        alert('The correct answer is 6. Great Job!'); 
        break
    } else if(questionSixGuess > correctAnswer){
        alert('too high');
    } else if (questionSixGuess < correctAnswer) {
        alert('too low');
    } 
}
}


function q7 (){
let correctAnswers = ['32','15','17','24','62'];

let numberOfTotalGuesses = 6;

let score = 0;

for(let i = 0; i < numberOfTotalGuesses; i++){
    let questionSevenGuess = prompt('Guess the correct number 1 through 100. You have six total guesses');
     if(correctAnswers.includes(questionSevenGuess)){
        alert(`You answered ${questionSevenGuess} correctly`);
        score++
        break;
    } else {
        alert('Your answer is incorrect. Try again')
    }
}
alert(`You got ${score} out of 6 correct! Thanks for playing!`)
}
//TODO: Give a personalized message at the end

alert(`Welcome to my website ${userName} and thanks for getting to know the site owner!`); 
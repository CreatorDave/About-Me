'use strict';

console.log('Hello World!');

//TODO: Get USERS Name - prompt - alert a greeting back to the user


let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

//TODO: prompt them with 5 yes or no (y/n) questions, alert if they got the answer right or wrong

let questionOneGuess = prompt('Do I have a son?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert('Sorry, you got it wrong');
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert('You got it right!');
}

let questionTwoGuess = prompt('Did I serve in the Air Force?').toLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
    alert('HUAHH! AIM HIGH!');
} else if (questionTwoGuess === 'no' || questionTwoGuess === 'n'){
    alert('Sorry, try that one again.');
}

let questionThreeGuess = prompt('Did I serve in the Coast Guard?').toLowerCase();

if(questionThreeGuess === 'yes' || questionThreeGuess === 'y'){
    alert('COAST GUARRRDDD! That\'s your sorry! You\'re correct!');
} else if (questionThreeGuess === 'no' || questionThreeGuess === 'n'){
    alert('Did you think I was a salty sailor? Nope.');
}

let questionFourGuess = prompt('Did I work in Patent Law?').toLowerCase();

if(questionFourGuess === 'yes' || questionFourGuess === 'y'){
    alert('You\'re a regular Einstein! Correct!');
} else if (questionFourGuess === 'no' || questionFourGuess === 'n'){
    alert('Did you think it was Criminal law? Sorry bro\'namith.');
}

let questionFiveGuess = prompt('Do I want to start a Youtube Channel?').toLowerCase();

if(questionFiveGuess === 'yes' || questionFiveGuess === 'y'){
    alert('Mr. Beast is my hero. Yes, I\'d love to start a Youtube Channel.');
} else if (questionFiveGuess === 'no' || questionFiveGuess === 'n'){
    alert('Come on bro. Let\'s try to entertain the masses.');
}

//TODO: Give a personalized message at the end

prompt(`Welcome to my website ${userName} and thanks for getting to know the site owner!`); 
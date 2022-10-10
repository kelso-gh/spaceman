/*----- constants -----*/
const words = [
    'spaceship',
    'asteroid',
    'mars',
    'venus',
    'jupiter',
    'alien',

];

const maxWrong = 6;

/*---- state variables ----*/
let randomWord;
let answer; 
let wrongGuesses; //an array to hold all of the incorrect letters
let guess;
let gameStatus;


/*-------- stored elements-------*/
const livesEl = document.getElementById('lives');
const playerGuess = document.getElementById('playerGuess');
const keys = document.querySelectorAll('button');
const msg = document.querySelector('.message');

// console.log(keys[0].innerText);


/*------ event listeners ------*/
document.getElementById('key-container').addEventListener('click', handleMove);


/*------- functions ------*/

initialize();

function initialize() {
    wrongGuesses = [];
    const maxIdx = words.length - 1;
    const randomNum = Math.floor(Math.random() * maxIdx);
    randomWord = words[randomNum];
    answer = randomWord.split('').map(_ => '_');
    gameStatus = null;
   render();
}

function render() {
    renderMessage();
    playerGuess.textContent = answer.join('')
}

function renderMessage() {
    if (gameStatus === 'W') {
        msg.textContent = `Congradulations you won!`;
    } else if (gameStatus === 'L') {
        msg.textContent = `You're out in space! The answer was ${randomWord}`;
    } else {
        livesEl.innerText = `${maxWrong - wrongGuesses.length + 1} lives remain good luck`;
    }
}


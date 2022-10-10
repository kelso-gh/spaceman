/*----- constants -----*/
const words = [
    'spaceship',
    'asteroid',
    'mars',
    'venus',
    'jupiter'
];

const maxWrong = 6;

/*---- state variables ----*/
let randomWord;
let answer;
let wrongGuesses; 



/*-------- stored elements-------*/
// const message = document.querySelector('');
const livesEl = document.getElementById('lives');
const playerguess = document.getElementById('playerguess');

// /*------ event listeners ------*/
// document.querySelector('stage').addEventListener('click');
// document.querySelector('startBtn').addEventListener('click');


/*------- functions ------*/

initialize();

function initialize() {
    const minimumIdx = 0;
    const maxIdx = words.length - 1;
    const randomNum = Math.floor(Math.random() * maxIdx);
    randomWord = words[randomNum];
    console.log(randomWord);
    answer = randomWord.split('').map(_ => '_');
    wrongGuesses = 0;
    livesEl.innerText = maxWrong - wrongGuesses;
    for (let index = 0; index < answer.length; index++) {
        const letter = answer[index];
        const letterEl = document.createElement('span');
        letterEl.innerText = letter;
        playerguess.appendChild(letterEl);
    } 
    // render();
};



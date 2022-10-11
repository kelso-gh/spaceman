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
let wrongGuesses;
let guess;
let gameStatus;


/*-------- stored elements-------*/
const livesEl = document.getElementById('lives');
const playerGuess = document.getElementById('playerGuess');
const msg = document.querySelector('.message');
const parentEl = [...document.querySelectorAll('section > button')];
const startBtn = document.getElementById('startBtn');


/*------ event listeners ------*/
document.querySelector('section').addEventListener('click', handleMove);
startBtn.addEventListener('click', initialize);



/*------- functions ------*/

initialize();

function initialize() {
    wrongGuesses = [];
    const maxIdx = Math.floor(Math.random() * words.length);
    randomWord = words[maxIdx].toUpperCase().split('');
    guess = randomWord.map(ltr => ltr === ' ' ? ' ' : '_');
    gameStatus = null;
   render();
}

function render() {
    renderMessage();
    playerGuess.textContent = guess.join('');
    renderBtn();
}

function renderMessage() {
    if (gameStatus === 'W') {
        msg.textContent = `Congradulations you won!`;
    } else if (gameStatus === 'L') {
        msg.innerHTML = `You're out in space! The answer was ${randomWord.join('')}`;
    } else {
        livesEl.textContent = `${maxWrong - wrongGuesses.length} lives remain good luck`;
    }
}

function renderBtn() {
    parentEl.forEach(function(btn){
        const ltr = btn.textContent;
        //if wrongGuesses includes ltr add classname of wrong
       if (wrongGuesses.includes(ltr)) {
        btn.className = 'wrong';
       } else if (guess.includes(ltr)) {
        btn.ClassName = 'right';
       } else {
        btn.className = '';
       }
    });
    startBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function handleMove(event) {
    const ltr = event.target.textContent;
    console.log(ltr);
    console.log(guess);
    if (
        gameStatus ||
        //guard
        !parentEl.includes(event.target) ||
        wrongGuesses.includes(ltr) ||
        guess.includes(ltr)
    ) return;

    if (randomWord.includes(ltr)) {
        //if guess is correct
        randomWord.forEach(function(char, idx) {
            if (char === ltr) guess[idx] = ltr
        });
    } else {
        wrongGuesses.push(ltr)
    } 
    gameStatus = getGameStatus;
    render();
}

//Minion robot that checks the game status 
function getGameStatus() {
    if (!guess.includes('_')) return 'W';
    //If wrongGuesses.length is > maxWrongGuesses
    if (wrongGuesses.length > maxWrong) return 'L';
    return null;
}



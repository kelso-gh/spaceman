/*----- constants -----*/
const words = [
    'spaceship',
    'asteroid',
    'mars',
    'venus',
    'jupiter',
    'alien',

];

const IMGS = [
    "img/spaceman.png/spaceman-0.jpg",
    "img/spaceman.png/spaceman-1.jpg",
    "img/spaceman.png/spaceman-2.jpg",
    "img/spaceman.png/spaceman-3.jpg",
    "img/spaceman.png/spaceman-4.jpg",
    "img/spaceman.png/spaceman-5.jpg",
    "img/spaceman.png/spaceman-6.jpg",
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
const astronautImg = document.querySelector('img');


/*------ event listeners ------*/
document.querySelector('section').addEventListener('click', handleMove);
startBtn.addEventListener('click', initialize);



/*------- functions ------*/

initialize();

function initialize() {
    wrongGuesses = [];
    msg.classList.add('hide');
    const maxIdx = Math.floor(Math.random() * words.length);
    randomWord = words[maxIdx].toUpperCase().split('');
    guess = randomWord.map(ltr => ltr === ' ' ? ' ' : '_');
    gameStatus = null;
    render();
}

function render() {
    playerGuess.textContent = guess.join('');
    astronautImg.src = `${IMGS[wrongGuesses.length]}`;
    renderMessage();
    renderBtn();
}

function renderMessage() {
    if (gameStatus === 'W') {
        msg.textContent = `Congradulations you won!`;
        msg.classList.remove('hide');
    } else if (gameStatus === 'L') {
        msg.textContent = `You're out in space! The answer was ${randomWord.join('')}`;
        msg.classList.remove('hide');
    }
    livesEl.textContent = `${maxWrong - wrongGuesses.length} lives remain good luck`;
}

function renderBtn() {
    parentEl.forEach(function (btn) {
        const ltr = btn.textContent;
        if (wrongGuesses.includes(ltr)) {
            btn.className = 'wrong';
        } else if (guess.includes(ltr)) {
            btn.className = 'right';
        } else {
            btn.className = '';
        }
    });
    startBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function handleMove(event) {
    const ltr = event.target.textContent;
    if (
        gameStatus ||
        !parentEl.includes(event.target) ||
        wrongGuesses.includes(ltr) ||
        guess.includes(ltr)
    ) return;

    if (randomWord.includes(ltr)) {
        randomWord.forEach(function (char, idx) {
            if (char === ltr) guess[idx] = ltr
        });
    } else {
        wrongGuesses.push(ltr)
    }
    gameStatus = getGameStatus();
    render();
}

function getGameStatus() {
    if (!guess.includes('_')) return 'W';
    if (wrongGuesses.length === maxWrong) return 'L';
    return null;
}



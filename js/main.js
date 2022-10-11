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
const msg = document.querySelector('.message');
const parentEl = [...document.querySelectorAll('key-container > button')];
const playAgainbtn = document.querySelector('startBtn');
console.log(parentEl);
console.log(playAgainbtn);

/*------ event listeners ------*/
document.getElementById('key-container').addEventListener('click', handleMove);
// playAgainbtn.addEventListener('click', initialize);



/*------- functions ------*/

initialize();

function initialize() {
    wrongGuesses = [];
    const maxIdx = words.length - 1;
    const randomNum = Math.floor(Math.random() * maxIdx);
    randomWord = words[randomNum];
    answer = randomWord.split('').map(_ => '_');
    let guess = '';
    gameStatus = null;
   render();
}

function render() {
    renderMessage();
    playerGuess.textContent = answer.join('');
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

function renderBtn() {
    letterBtn.forEach(function(btn){
        const ltr = btn.textContent;
        //if wrongGuesses includes ltr add classname of wrong
       if (wrongGuesses.icludes(ltr)) {
        btn.className = 'wrong'
       } else if (guess.icludes(ltr)) {
        btn.ClassName = "right"
       } else {
        btn.className = '';
       }
    })
    playAgainbtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function handleMove(event) {
    const ltr = event.target.textContent;
    console.log(ltr);
    if (
        gameStatus ||
        //guard
        !parentEl.includes(ltr) ||
        wrongGuesses.includes(ltr) ||
        guess.inclcudes(ltr)
    ) return;

    if (randomWord.includes(ltr)) {
        //if guess is correct
        randomWord.forEach(function(char, idx) {
            if (char ==== ltr) guess[idx] = ltr
        });
    } else {
        wrongGuesses.push(lrt)
    } 
    gameStatus = getGameStatus;
    render();
}

//Minion robot that checks the game status 
function getGameStatus() {
    if (!guess.inclcudes('_')) return 'W';
    //If wrongGuesses.length is > maxWrongGuesses
    if (wrongGuesses.length > maxWrong) return 'L';
    return null;
}



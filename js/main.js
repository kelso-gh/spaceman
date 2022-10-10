/*----- constants -----*/
const words = [
    spaceship,
    asteroid,
    mars,
    venus,
    jupiter
];



/*---- state variables ----*/
let randomWord;
let answer;
let maxWrong; 
let wrongGuesses; 



/*-------- stored elements-------*/
const message = document.querySelector('');

/*------ event listeners ------*/
document.querySelector('stage').addEventListener('click');
document.querySelector('startBtn').addEventListener('click');


/*------- functions ------*/

initialize();

function initialize() {
    randomWord = 0;
    answer = '';
    maxWrong = 6;
    wrongGuesses = 0;
      
    render();
};

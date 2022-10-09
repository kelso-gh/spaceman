/*----- constants -----*/
const words = [
    spaceship,
    asteroid,
    mars,
    venus,
    jupiter
];

const alphabet = [
    
];

const maxNumberChances = 6;


/*---- state variables ----*/
let randomWord;
let winner;


/*-------- stored elements-------*/
//let guessElement;
//let letterEl;

/*------ event listeners ------*/
document.querySelector('stage').addEventListener('click');
document.querySelector('startBtn').addEventListener('click');


/*------- functions ------*/

initialize();

function initialize() {

    render();
};

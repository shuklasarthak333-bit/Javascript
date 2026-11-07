
let rand = (parseInt(Math.random()*100+1));
const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");
const prevGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const toShow = document.querySelector('.result');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    } else if(guess<1 || guess>100){
        alert("Please enter a number within a range of 1-100");
    } else {
        prevGuess.push(guess);
        if(numGuesses===11){
            displayGuess(guess);
            displayMessage(`Game Over, the random number was ${rand}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===rand){
        displayMessage(`Congratulations!! you guessed the number i.e., ${guess}`);
        endGame();
    } else if(guess<rand){
        displayMessage("Lower than expected bud");
    } else if(guess>rand){
        displayMessage("Higher than expected bud");
    }
}

function displayGuess(guess){
    userInput.value = '';
    prevGuesses.innerHTML += `${guess} `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h1 id = "newGame" >START NEW GAME</h1>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        rand = (parseInt(Math.random()*100+1));
        prevGuess=[];
        numGuesses=1;
        prevGuesses.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHigh.innerHTML='';
        playGame=true;
    })
}


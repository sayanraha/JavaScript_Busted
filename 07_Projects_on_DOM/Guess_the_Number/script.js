/**
 * The  JavaScript code is a number guessing game where the user has to guess a random number
 * between 1 and 100 within 10 attempts.
 * 
 */




/* The line `let randomNumber = parseInt(Math.random() * 100 + 1);` is generating a random number
between 1 and 100. It uses the `Math.random()` function to generate a random decimal number between
0 and 1, then multiplies it by 100 to get a number between 0 and 100. The `parseInt()` function is
used to convert the decimal number to an integer. Finally, 1 is added to the result to ensure that
the random number is between 1 and 100 (inclusive). */
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");

const userInput = document.querySelector("#guessField");

const guessSlot = document.querySelector(".guesses");

const remaining = document.querySelector(".lastResult");

const lowOrHi = document.querySelector(".lowOrHi");

const startOver = document.querySelector(".resultParas");

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

/* This code block is adding an event listener to the submit button. When the submit button is clicked,
the event listener function is executed. It prevents the default form submission behavior, gets the
value entered by the user in the input field, converts it to an integer using `parseInt()`, and then
calls the `validateGuess()` function with the user's guess as an argument. */
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

/**
 * The function "validateGuess" checks if the user's guess is a valid number between 1 and 100, and
 * displays an appropriate message or performs an action based on the guess.
 */

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a valid Number')
    }
    else if(guess < 1){
        alert('Please enter a number more than or equal to 1')
    }
    else if(guess > 100){
        alert('Please enter a number less than or equal to 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

/**
 * The function checks if the guess is equal to a random number and displays a message accordingly.
 */
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('Correct Guess')
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage('Number is TOOO Less')
    }
    else if(guess > randomNumber){
        displayMessage('Number is TOOO High')
    }
}


/**
 * The function "displayGuess" takes a guess as input, updates the user input value, adds the guess to
 * the guess slot, increments the number of guesses, and updates the remaining guesses counter.
 */
function displayGuess(guess){

    userInput.value = ' '
    guessSlot.innerHTML += `${guess}, `
    remaining.innerHTML = `${11 - numGuess}`
    numGuess++;

}

/**
 * The function `displayMessage` is used to display a message on the webpage.
 */
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

/**
 * The function "endGame" disables user input, adds a button to start a new game, and sets the
 * "playGame" variable to false.
 */

function endGame(){
    userInput.value = ' '
    userInput.setAttribute('disabled',' ')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

/**
 * The function "newGame" resets the game by generating a new random number, clearing previous guesses,
 * resetting the number of guesses, updating the remaining guesses display, enabling user input, and
 * removing the "start over" message.
 */

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random()*100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ' ';
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    });
}
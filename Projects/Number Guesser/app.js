/*
GAME FUNCTION:
player must guess a number between a min and max
player gets a certain amount of guesses
notify player of guesses remaining
notify the player of the correct answer if loose
let player choose to play again
*/

//Game Values

let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-button'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


//Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }

})

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    //validate
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max} `, 'red');
    }



    //Check if won
    if(guess === winningNum){
        //game over - won

        gameOver(true, ` ${winningNum} is correct, YOU WIN!`);
    } else {
        //wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
        //game over - lost
        gameOver(false, ` Game Over, you lost. The correct number was ${winningNum} ` );

        } else {
            //game continues - answer wrong

            //change border color
            guessInput.style.borderColor = 'red';

            //clear input
            guessInput.value = '';

            //tell user its the wrong number
            setMessage(` ${guess} is not correct, ${guessesLeft} guesses left `, 'red');
        }

    }

});

//game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    //Disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //Set text color
    message.style.color = color;
    //Set message
    setMessage(msg);


    //Play again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}


//get winning number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}


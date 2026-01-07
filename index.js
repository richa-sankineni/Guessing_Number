let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum)

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNum) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "blue";
    } else if (guessedNumber < randomNum) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "blue";
    } else if (guessedNumber === randomNum) {
        gameResult.textContent = "Congratulations";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Give valid input";
        gameResult.style.backgroundColor = "Red";
    }

}

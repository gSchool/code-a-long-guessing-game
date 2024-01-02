const userName = prompt("What is your name?");

console.log(userName, 'welcome to the game!');
// const userName = prompt("What is your name?");

function play() {
    let secretNumber = Math.floor(Math.random() * 10) + 1;

    while (true) {
        const guess = prompt("Guess a number.");
        if (guess === null) {
            alert("Goodbye!");
            break;
        }

        const numGuess = Number(guess);

        if (Number.isNaN(numGuess)) {
            alert("Please enter a valid number");
        } else if (numGuess < secretNumber) {
            alert(`Sorry ${userName}, guess higher`);
        } else if (numGuess > secretNumber) {
            alert(`Sorry ${userName}, guess lower`);
        } else {
            alert(`Correct! ${userName} You win!`);
            break
        }
    }
}

play();
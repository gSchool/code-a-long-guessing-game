const userName = prompt("What is your name?");

console.log(userName, 'welcome to the game!');

function play() {
    // Your code goes here

    // ADD Feature 2: Guess again!
        // If the guess is higher or lower, ask the user to guess again. 
        // Your program should keep doing this until the guess is the same 
        // as the secret number. 
        // HINT: Put your game logic in to a while loop

    let secretNumber = Math.floor(Math.random() * 10) + 1;

    const guess = prompt("Guess a number between 1 and 10");
    if (guess === null) {
        alert("Goodbye!");
    }

    const numGuess = Number(guess);

    if (Number.isNaN(numGuess)) {
        alert("Please enter a valid number");
    } else if (numGuess < secretNumber) {
        // prevGuesses.push(numGuess);
        alert(`Sorry ${userName}, guess higher`);
    } else if (numGuess > secretNumber) {
        // prevGuesses.push(numGuess);
        alert(`Sorry ${userName}, guess lower`);
    } else {
        // alert(`Correct! Your previous guess(es) were ${prevGuesses.join(", ")}.`);
        alert(`Correct! ${secretNumber} was the number!`);
    }
    
}

play();


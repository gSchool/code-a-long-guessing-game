const userName = prompt("What is your name?");

console.log(userName, 'welcome to the game!');

function play() {
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    // let prevGuesses = [];
    while(true) {
      const guess = prompt("Guess a number between 1 and 10");
      if(guess === null) {
        alert("Goodbye!");
        break;
      }
  
      const numGuess = Number(guess);
      
      if(Number.isNaN(numGuess)) {
        alert("Please enter a valid number");
      } else if(numGuess < secretNumber) {
        // prevGuesses.push(numGuess);
        alert(`Sorry ${userName}, guess higher`);
      } else if(numGuess > secretNumber) {
        // prevGuesses.push(numGuess);
        alert(`Sorry ${userName}, guess lower`);
      } else {
        // alert(`Correct! Your previous guess(es) were ${prevGuesses.join(", ")}.`);
        alert(`Correct! ${secretNumber} was the number!`);
        // const playAgain = prompt("Do you want to play again?");
        // if(playAgain.toLowerCase() === "yes") {
        //   play();
        // } else {
        //   break;
        // }
      }
    }
  }
  
  play();
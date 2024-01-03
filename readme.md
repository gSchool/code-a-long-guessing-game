# Code-Along: Guessing Game

## Welcome all attendees, please read this first!

The purpose of this Code-Along is to provide YOU, the participant, a feel for what programming actually looks like, and how a developer might get started on a project. To that end, we will walk you through a highly shortened version of an early in-class project. The remainder of this readme is assuming you are a student enrolled in a Galvanize/Hack Reactor program. However, for this specific Code-Along, your instructor will work through the first two features, to show you what programming looks like, how things get started, and how everything comes together to build a basic program that you can interact with!

## What's in this project?

![game_cover](/images/game_cover.png)

**This project will touch on the following concepts:**
 - Basic Data Types
 - Conditionals
 - Loops
 - Arrays
 - Objects
 - Chrome `debugger` keyword
 - VS Code
 - Terminal
 - Files / Folder Navigation
 - Git & Github

**Note:** The information provided here is for your convenience. Please follow a long in workshop and refer to the in-workshop discussion for what you should be doing.

**Getting started:**

Included in this repo are the following files:
 - `app.js` - This is where you will write all of your code
 - `index.html` - You will run this HTML file in your browser to run your code
 - `style.css` - Ignore for this project. This is to style the page, but your app will not be interacting directly with the webpage. 
 - `readme.md` - That is what you are reading right now. The file is in markdown format (.md), it's straight forward way to organize text content that Github understands. You don't need to know much more than that about it right now. 


## What will we be doing?

Create a guessing game that allows users to guess a secret number. You will need to use the built in “prompt()” function to capture the user input when the program is running. Once you have the user’s input, you can compare it with your secret number and use the built in “alert()” function to send back the appropriate message.

The functions alert and prompt are built into the web browser. And since our javascript code runs in the web browser, we can use them.

Alert: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert

Prompt: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
(Please read the documentation on prompt, make sure you understand what result is and the parameters)

*Hints on debugging: *
Firstly, you WILL have lots of bugs and errors in your code while you are building something. Everyone does, it’s normal and expected, it’s not just because you are new - but also a large part of writing code. The computer is picky, it needs things written a certain way, and it also has zero common sense. It does not know your intentions, only what exactly what you tell it to do. This means the problems in your code will likely fall in to either one of two categories: 


Syntax Error - You misspelled something or the code structure is incorrect, e.g.

Variable spelled wrong:
`var student = “Alice”; console.log(studnt); // Uncaught ReferenceError: stdnt is not defined`

Missing closing parenthesis:
`alert(“hello” / /Uncaught SyntaxError: Invalid or unexpected token`


Logic Error - The code might run but it doesn’t do what you expect. OR the code doesn’t run, and something like a variable is in a format that is not what the computer expected. E.g. 

Subtracting the number 10 from “Bob”, this returns Not a Number (NaN):
`var name = “Bob”; console.log(name - 10); // NaN`
 

Get used to reading and understanding error messages, it is a skill! First read the error message. Next, almost all errors you encounter will have a line number from where the error originated. That is the best place to start when you are trying to fix your code, find the line number and remember what the error message said. 

Secondly, you should open Chrome’s console when you are running your program so you can read any error messages. Because we are using Chrome to run our program, we can use a special keyword called ‘debugger’ to pause our code while it is running and see what all of our variables look like. Just create a new line in your code where you want it to pause and type in “debugger”.

-------------------------------------------------

### Feature 1: Guess once.
Using alert and prompt, write a program that asks the user to guess a number and then tells them if they were correct, or if they should have guessed higher or lower.

*Main Function*

**Inputs:**

(Number) Guess

**Example Output:** 

(String) “Higher”, if Guess is lower than the secret number

Or

(String) “Lower”, if Guess is higher than the secret number

Or

(String) “Correct!” , if Guess is equal to the secret number

-------------------------------------------------

### Feature 2: Guess again!

If the guess is higher or lower, ask the user to guess again. Your program should keep doing this until the guess is the same as the secret number. 

Check Your Work! Test out your code, make sure everything is working correctly. Also make sure you don’t see any errors in console.

Stuck? Try these exercises to get your brain going:

Before trying to solve a problem, do you understand what the problem is?

Write out what you are trying to accomplish in your own words
 - Now break it down into smaller steps. 
 - E.g. What would half done look like?

List out what things MIGHT work

Is this problem different from anything you’ve seen before? 
 - What makes it so different? 
 - What does that mean you need to research / google?

Is there anything familiar in the problem? 

Super Stuck? If you are still stuck on how to do this, share what you have done above and you can ask for a hint, or hang on for the class solution. 

Done early? Look for opportunities to refactor (we will cover refactoring later).
By far the most important skill to start working on right now: If someone were to read your code, would it be easy for them to read and understand without having you explain it?

Other things you can do:

Does your code seem repetitive? Use more functions

Name those functions appropriately.

If your functions are more than 5 lines or so, split it into smaller functions.

## HOMEWORK FEATURES

Work on these features at your own pace post-workshop! If you need assistance don't hesitate to reach out!

-------------------------------------------------

### HOMEWORK Feature 3: How many tries?
Once the user guesses the correct answer, let’s add a feature that tells them how many guesses it took them until they made the correct guess.

*Main Function*

**Inputs:**

(Number) Guess

**Example Output:** 

“

“

(String) “Correct! It only took you 5 guesses!” , if Guess is equal to the secret number


-------------------------------------------------

### HOMEWORK Feature 4: History in the making
Let’s update the last feature so that instead of just the number of guesses, we let the user know all of their previous guesses before they got the right answer. 

*Main Function*

**Inputs:**

(Number) Guess

**Example Output:** 

“

“

(String) “Correct! Your previous guesses were 100, 30, 50, 55!” , if Guess is equal to the secret number

-------------------------------------------------

### HOMEWORK Feature 5: Guess who?
Let’s add a feature that takes in the user’s name at the start of the game so we can make the messages more personalized.

*Main Function*

**Inputs:**

(String) Name

(Number) Guess

**Example Output:** 

(String) “Sorry Alice, Guess Higher”, if Guess is lower than the secret number

Or

(String) “Sorry Alice, Guess Lower”, if Guess is higher than the secret number

Or

(String) “That’s Correct Alice! Your previous guesses were 100, 30, 50, 55!” , if Guess is equal to the secret number

-------------------------------------------------

### HOMEWORK Feature 6: Play again
Let’s add a feature that asks the user if they want to play again once they’ve made a correct guess.

Play Again Function

**Inputs:**

(String) “Yes”, Run main game function

(String) “No”, do nothing

-------------------------------------------------

### HOMEWORK Feature 7: Guess Star
Let’s add a feature that records the number of guesses for each unique name that is entered when the game is started. If someone with the same name played before, then when they get a correct answer, it tells them if they beat their previous attempt (less guesses is better). 

*Main Function*

**Inputs:**

(String) Name

(Number) Guess

**Example Output:**

(String) “That’s Correct Bob! And you beat your previous attempt by 3 fewer guesses!” , if Guess is equal to the secret number and “Bob” played before with more guesses.

(String) “That’s Correct Alice! You did better in your last game by 3 fewer guesses.” , if Guess is equal to the secret number and Alice played before with less guesses.

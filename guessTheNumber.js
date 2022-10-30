const prompt = require("prompt-sync")();
let number = Math.floor((Math.random()*100)+1);

//Initial no chances to guess the number
let chances = 0;
let guess; //The guessed number will be stored in this variable

console.log("You are in a Number Guessing Game what you need to do is simply guess a number between 1 to 100 if guessed number is correct then you are a winner if not then you will get a hint saying the number is greater or lesser...So Let's Play! \n");
guess = prompt("Enter a number between 1 to 100");
++chances; // To increase the chances taken to guess the number

do {
    guess = Number.parseInt(guess);

    if(guess > number) {
        console.log("The entered number is greater! try smaller number than", guess);
        guess = prompt("Enter again!!");
        guess = Number.parseInt(guess);
        ++chances;
        continue;
    }
    else if(guess < number) {
        console.log("The entered number is smaller! try greater number than", guess);
        guess = prompt("Enter again!!");
        guess = Number.parseInt(guess);
        ++chances;
        continue;
    }
} while(guess != number);
let score = 100 - chances;
console.log(`Congratulations... The number generated was ${number} and you guessed it right.\n Your final score is: ${score}`);

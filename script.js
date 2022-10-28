var guessedNumber = parseInt(document.getElementsByClassName("guessNum")[0].value);
var resultPara = document.getElementById("hint").innerHTML;
var generatedNum = 0;
getRandomNumber();
function getRandomNumber() {
    this.generatedNum = Math.floor(Math.random() * 100) + 1;
    console.log("Random generated Number: " +this.generatedNum);
}

function compareWithGuessedNum(value) {
    if(value == generatedNum) {
        return "Game finished";
    }
    else if(value > generatedNum) {
        return `The number is less than ${value}`;
    }
    else {
        return `The number is greater than ${value}`;
    }
}

function checkGuessing() {
    let number = parseInt(this.guessedNumber);
    let result = this.compareWithGuessedNum(number);
    console.log(result);
    console.log(number);
    console.log(this.resultPara);
    
    this.resultPara = result;
}
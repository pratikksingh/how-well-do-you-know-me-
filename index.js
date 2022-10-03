//how well do you know me?
// import chalk from 'chalk';
// console.log(chalk.blue('Hello world!'));

var readlineSync = require("readline-sync")
console.log("Welcome to 'HOW WELL DO YOU KNOW ME' !!\n\nIn this quiz you will have four options:\na)\nb)\nc)\nd)\n\nYou have to answer with either of the options a,b,c,d whichever you feel is the correct one :D");
console.log("-----------------------------------------------------------")
var userName = readlineSync.question("Enter your name to begin with the game:\n")
console.log("\nLet's start the game " + userName + ":)...")

console.log("-----------------------------------------------------------")
var score = 0;


var questionOne = {
  question: "which is my favorite season? \n\na) rainy \nb) winter \nc) summer \nd) spring\n\nYour answer: ",
  answer: "winter",
  option: "b"
}
var questionTwo = {
  question: "What is MY favorite sport? \n\na) cricket \nb) football \nc) volleyball \nd) E-sports\n\nYour answer: ",
  answer: "cricket",
  option: "a"
}
var questionThree = {
  question: "Which one is MY hometown? \n\na) kanpur \nb) pune \nc) lucknow \nd) prayagraj\n\nYour answer: ",
  answer: "prayagraj",
  option: "d"
}
var questionFour = {
  question: "Am i a veg,non-veg or egg-etarian? person? \n\na) egg-etarian \nb) veg \nc) non-veg \nd) vegan:/\n\nYour answer: ",
  answer: "egg-etarian",
  option: "a"
}

var questionFive = {
  question: "Where do i live currently ? \n\na) Mumbai \nb) Prayagraj \nc) Kanpur \nd) Bangalore\n\nYour answer: ",
  answer: "Bangalore",
  option: "d"
}

var array = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for (var i = 0; i < array.length; i++) {
  var currentQuestion = array[i];
  var userInput = readlineSync.question(currentQuestion.question)




  function game() {
    if (userInput === currentQuestion.option) {
      console.log("Yay! Right answer!! :)")
      score++
      if (i === array.length - 1) {
        console.log(userName, "your final score is :", score)
      }
      else {

        console.log("Your score: +", score);
      }
    }
    else {
      console.log("Oops! wrong answer!! :(")
      console.log("Your score: ", score);
    }
    console.log("-----------------------------------------------------------")
  }



  game(currentQuestion.question, currentQuestion.answer)
}









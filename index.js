//Package Required
var readlineSync = require("readline-sync");
var chalk = require("chalk");

//Start of quiz
var score = 0;
var userName = readlineSync.question(chalk.yellow("Enter your Name: "));
console.log(chalk.blue("Welcome! ") + chalk.green(userName) + " To" + chalk.red(" MARVEL QUIZ"));
console.log();
console.log("So let us start the QUIZ");
console.log();

//Function for quiz
function quiz(question, answer, correctAns)
{
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green("YAY! You are RIGHT"));
    score +=1;
  }

  else 
  {
    console.log(chalk.red("OHHH! You are WRONG"));
  }
  console.log();
  console.log(chalk.black.bgGreen(" The correct answer is " + correctAns + " "));
  console.log();
  console.log(chalk.blue("Your current Score is :" + score));
  console.log("---------------------------------")
  console.log();
}

//Question Bank Array
var quesBank = [
  {
    question:   `What does S.H.I.E.L.D stand for?
                A. Space Human Investigation on Energy, Light and Deities.
                B. Strategic Hero Intervention, Enforcement and Logistics Division
                C. Strategic Homeland Intervention, Enforcement and Logistics Division
                D. Stones Hidden In Extraterrestrial Lands and Demographics\n`,
    answer: "C",
    correctAnswer: "C",
  },

  {
    question: `Ryan Reynolds acted in two Marvel movie series, one was the Deadpool movie series, the other was:
              A. Daredevil
              B. Captain America: Winter Soldier
              C. Blade
              D. Guardians of the galaxy\n`,
    answer: "C",
    correctAnswer: "C",
  },

  {
    question: `Which of the following characters dies in Avengers (2012)?
              A. Nick Fury
              B. Phil Coulson
              C. Steve Rogers 
              D. Maria Hill\n`,
    answer: "B",
    correctAnswer: "B",
  },

  {
    question: `In which order are the Infinity Stones revealed in the Marvel Cinematic Universe?
              A. Time Stone, Space Stone, Power Stone, Soul Stone, Reality Stone and Mind Stone
              B. Power Stone, Reality Stone, Time Stone, Space Stone, Mind Stone and Soul Stone
              C. Reality Stone, Time Stone, Mind Stone, Soul Stone, Power Stone and Space Stone
              D. Space Stone, Mind Stone, Reality Stone, Power Stone, Time Stone and Soul Stone\n`,
    answer: "D",
    correctAnswer: "D",
  },

  {
    question: `During which war did Captain America get his superhuman abilities?
              A. Civil War
              B. World War I
              C. Worlds War II
              D. The Cold War\n`,
    answer: "C",
    correctAnswer: "C",
  }
]

//High Score
var highScore = [
  {
    name: "Manan",
    score: 5,
  },
  {
    name: "Akash",
    score: 4
  }
]

// Loop for calling the array 
for(var i=0; i< quesBank.length; i++)
{
  var currentQuestion = quesBank[i];
  quiz(currentQuestion.question, currentQuestion.answer, currentQuestion.correctAnswer);
}

//Final Score
console.log(chalk.yellow("Your Final Score is " + score));
var currentHighScore = highScore[0];
console.log(chalk.blue("Current High Score is by " + chalk.yellow(currentHighScore.name) + " and score is " + chalk.yellow(currentHighScore.score)));
var readlineSync = require('readline-sync');
const chalk = require("chalk");

var score = 0;

var userName = readlineSync.question(chalk.yellow('May I have your name? '));
console.log(chalk.blue('Hi ' + userName + '!' + " Let's see how well you know about Indian Food Cuisine."));

console.log(chalk.red("RULE: You get 1 point for each correct answer."))

var questions = [
  {
    question: "What oil is characteristically used in the cooking of South India??",
    choices: ['Canola', 'Mustard', 'Olive', 'Coconut'],
    answer: 4,
  },
  {
    question: "What is India’s national fruit?",
    choices: ['Mango', 'Banana', 'Muskmelon', 'Apple'],
    answer: 1,
  },
  {
    question: "What word is used in India for tea?",
    choices: ['Chai', 'Tea', 'Ocha', 'Ta'],
    answer: 1,
  },
  {
    question: "What is the name for a popular Indian dessert dish?",
    choices: ['Samosa', 'Dahi Puri', 'Vada Pav', 'Gulab Jamun'],
    answer: 4,
  },
  {
    question: "What is the main ingredient of gaajar ka halwa?",
    choices: ['Turnip', 'Potato', 'Potato', 'Carrot'],
    answer: 4,
  },
  {
    question: "Which of these foods does not originate in Mughal cuisine?",
    choices: ['Baba Ghanoush', 'Samosa', 'Kebab', 'Pilaf'],
    answer: 1,
  },
  {
    question: "Which of these was called 'food of the gods' in ancient India?",
    choices: ['Cheese', 'Paneer', 'Bread', 'Yogurt'],
    answer: 4,
  },
  {
    question: "If you were eating Chole in Delhi, what would you be its ideal companion?",
    choices: ['Roti', 'Bread', 'Pav', 'Bhature'],
    answer: 4,
  },

]

var highscores = [
  {
    name: 'Radhika',
    score: "6",
  },
  {
    name: 'Nipun',
    score: "5",
  },
]

function play() {
  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].question);

    var userAnswer = readlineSync.keyInSelect(questions[i].choices, "Your Choice");

    if (userAnswer + 1 === 0) {
      break
    }
    else {
      if (userAnswer + 1 === questions[i].answer) {
        console.log(chalk.green("You are right!"))
        score++;
        console.log("Your score: " + score);
      } else {
        console.log(chalk.red("You are wrong.!"))
      }
    }


  }
}



function highscore() {
  for (var i = 0; i < highscores.length; i++) {
    if (score > highscores[i].score) {
      console.log(chalk.green("Yay, You have a high score. You scored: " + score + " Send us the screenshot so we can update the High Scorer List."))
      break;
    } else {
      console.log(chalk.red("You don't have a high score. Your Final score is: " + score));
      break;
    }
  }

  console.log("\n")
  console.log(chalk.cyan.bold("__HIGHSCORES__"))
  for (var i = 0; i < highscores.length; i++) {
    console.log(highscores[i].name + " >> " + highscores[i].score)
  }
}

play();
highscore();


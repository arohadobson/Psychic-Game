//Define variables
var letter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  var winsText = document.getElementById("wins");
  var lossesText = document.getElementById("losses");
  var guessesText = document.getElementById("guesses");
  var yourGuess = document.getElementById("yourGuess");
  var guessList = [];
  
  var wins = 0;
  var losses = 0;
  var guesses = 10;
  
  // Computer randomly selects a letter
  function resetGame() {
    computerGuess = computerRandomLetter();
    guessList = [];
    guesses = 9;
    guessesText.textContent = guesses;
    yourGuess.textContent = "";
  }
  
  function computerRandomLetter() {
    function getRandomInt(min, max) {
      min = Math.ceil(0);
      max = Math.floor(25);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    return letter[getRandomInt()];
  }
  var computerGuess = computerRandomLetter();
  
  //Captuer user guess
  document.onkeyup = function(event) {
    var userGuess = event.key;
    guessList.push(userGuess);
    yourGuess.textContent = guessList;
    //Win conditions
    if (computerGuess === userGuess) {
      wins++;
      winsText.textContent = wins;
      resetGame();
      //Loss conditons
    } else {
      guesses--;
      guessesText.textContent = guesses;
      if (guesses < 1) {
        losses++;
        lossesText.textContent = losses;
        resetGame();
      }
    }
  };
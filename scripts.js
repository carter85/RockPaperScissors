// assign variables from elements used from index.html
let playerButton = document.querySelectorAll('.btn');
let playerChoice = document.getElementById('playerChoice');
let compChoice = document.getElementById('compChoice');

let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let roundWinner = document.getElementById('winner');

let playerSelection = '';
let cpuPlay = '';
let compNum = 0;
let playNum = 0;

// once button is pressed, runs computer selection function and assigns value,
// then assigns value from button pressed to the player variables, 
// updates these values to the DOM, compares values and returns winner, 
// then updating DOM
 
playerButton.forEach((btn) => {
  btn.addEventListener('click', () => {
    // once button is pressed, runs computerPlay function to get computers pick
    cpuPlay = computerPlay();

    // assigns value of button pressed to playerSelection
    playerSelection = playerChoice.textContent = btn.id;
    // assigns value of playerSelection to update html
    playerChoice.textContent = playerSelection;

    // compare players choice to computers choice, update html with result
    if ((playerSelection === "rock" && cpuPlay === "rock") ||
      (playerSelection === "paper" && cpuPlay === "paper") ||
      (playerSelection === "scissors" && cpuPlay === "scissors")) {
      roundWinner.textContent = "It's a tie."
    } else if ((playerSelection === "rock" && cpuPlay === "scissors") ||
      (playerSelection === "paper" && cpuPlay === "rock") ||
      (playerSelection === "scissors" && cpuPlay === "paper")) {
      roundWinner.textContent = "Player Wins."
      playerScore.textContent = playNum += 1;
    } else if ((playerSelection === "paper" && cpuPlay === "scissors") ||
      (playerSelection === "rock" && cpuPlay === "paper") ||
      (playerSelection === "scissors" && cpuPlay === "rock")) {
      roundWinner.textContent = "Computer Wins."
      computerScore.textContent = compNum += 1;
    }
    // checks number of wins for either side, alerts once one reaches 5
    if (playNum >= 5 || compNum >= 5) {
      if (playNum > compNum) {
        alert("Player Wins");
      } else {
        alert("Computer Wins");
      }
    }

  });
});

// function generates random interval from 0 to 2, returns value from array as selection
function computerPlay() {
  const playArr = ['rock', 'paper', 'scissors'];
  let num = Math.floor(Math.random() * 3);
  return compChoice.textContent = playArr[num];
}
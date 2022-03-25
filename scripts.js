const playArr = ['rock', 'paper', 'scissors'];

// function gets input from player, loops question if answered incorrectly,
// converts answer to lowercase and to word for comparisons
function playerSelection() {
    let input = prompt("Choose your play: (R)ock, (P)aper, or (S)cissors, first letter only:").toLowerCase();

    while (input !== 'r' && input !== 'p' && input !== 's') {
        input = prompt("Invalid, please type the first letter only:").toLowerCase();
    }
    if (input === 'r') input = 'rock';
    if (input === 's') input = 'scissors';
    if (input === 'p') input = 'paper';
    return input;
}

function computerPlay() {
  let num = Math.floor(Math.random() * 3);
  return playArr[num];
}

function play() {
  let userChoice = playerSelection();
  let compChoice = computerPlay();
  console.log(userChoice + " " + compChoice);

  if ((userChoice === "rock" && compChoice === "rock") ||
    (userChoice === "paper" && compChoice === "paper") ||
    (userChoice === "scissors" && compChoice === "scissors")) {
    return "It's a tie.";
  } else if ((userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")) {
    return "Player wins."
  } else if ((userChoice === "paper" && compChoice === "scissors") ||
    (userChoice === "rock" && compChoice === "paper") ||
    (userChoice === "scissors" && compChoice === "rock")) {
    return "Computer Wins."
  }

}
//playerSelection === "" && compChoice === ""
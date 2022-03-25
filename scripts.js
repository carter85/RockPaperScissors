 
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
    
      // function generates random interval from 0 to 2, returns value from array as selection
      function computerPlay() {
        const playArr = ['rock', 'paper', 'scissors'];
        let num = Math.floor(Math.random() * 3);
        return playArr[num];
      }
    
      // takes inputs from player and computer, compares each possible value,
      // returns winner
      function playRound() {
        let userChoice = playerSelection();
        let compChoice = computerPlay();
    
        if ((userChoice === "rock" && compChoice === "rock") ||
          (userChoice === "paper" && compChoice === "paper") ||
          (userChoice === "scissors" && compChoice === "scissors")) {
          return "It's a Tie.";
        } else if ((userChoice === "rock" && compChoice === "scissors") ||
          (userChoice === "paper" && compChoice === "rock") ||
          (userChoice === "scissors" && compChoice === "paper")) {
          return "Player Wins."
        } else if ((userChoice === "paper" && compChoice === "scissors") ||
          (userChoice === "rock" && compChoice === "paper") ||
          (userChoice === "scissors" && compChoice === "rock")) {
          return "Computer Wins."
        }
      }
    
      function game() {
        let userWins = 0;
        let compWins = 0;
        for (let i = 0; i < 5; i++) {
          let gameWinner = playRound();
          console.log(gameWinner);
          if (gameWinner === 'Player Wins.') {
            userWins += 1;
          } else if (gameWinner === 'Computer Wins.') {
            compWins += 1;
          } else {
            continue;
          }
          
        }
        if (userWins > compWins) {
            return "User Wins."
        } else {
            return "Computer Wins."
        }
      }

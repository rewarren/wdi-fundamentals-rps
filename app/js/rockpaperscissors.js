function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerMove(move) {
    if (move) {
        return move;
    } else {
        return getInput();
    }
}

function getComputerMove(move) {
    if (move) {
    	return move;
    } else {
    	return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
      console.log("draw");
    }
    else if ((playerMove == 'rock' && computerMove == 'paper') || (playerMove == 'paper' && computerMove == 'scissors') || (playerMove == 'scissors' && computerMove == 'rock')) {
      winner = "computerMove";
      console.log("Computer Wins!");
    }
    if ((playerMove == 'paper' && computerMove == 'rock') || (playerMove == 'scissors' && computerMove == 'paper') || (playerMove == 'rock' && computerMove == 'scissors')) {
      winner = "playerMove";
      console.log("Player wins!");
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
      if (getWinner === 'computerMove') {
        computerWins += 1;
      }
      if (getWinner === 'playerMove') {
        playerWins += 1;
      }
    }
    return [playerWins, computerWins];
}

playToFive();

//variables
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const rematchBtn = document.querySelector('#rematch');
const resultsDiv = document.querySelector('.results');
const roundResultsDiv = document.querySelector('.round-results');
const playerPointsDiv = document.querySelector('.player-points');
const computerPointsDiv = document.querySelector('.computer-points');
const winnerDiv = document.querySelector('.winner');

let compScore = 0;
let playerScore = 0;

//randomize pc choice
function getComputerChoice() {
  const pcOptions = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * pcOptions.length);
  return pcOptions[randomNum];
}

/* plays one round of rps*/
function playRound(playerSelection, computerSelection) {
  while (roundResultsDiv.firstChild) {
    roundResultsDiv.removeChild(roundResultsDiv.firstChild);
  }

  if (playerSelection === computerSelection) {
    const p = document.createElement('p');
    p.innerText = `it's a tie! You both chose ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`;
    roundResultsDiv.appendChild(p);
    return 'tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    const p = document.createElement('p');
    p.innerText = `You win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`;
    roundResultsDiv.appendChild(p);
    return 'player';
  } else {
    compScore++;
    const p = document.createElement('p');
    p.innerText = `You lose! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`;
    roundResultsDiv.appendChild(p);
    return 'computer';
  }
}

// displaying current score
const runningScore = function (playerScore, compScore) {
  while (playerPointsDiv.firstChild) {
    playerPointsDiv.removeChild(playerPointsDiv.firstChild);
  }

  while (computerPointsDiv.firstChild) {
    computerPointsDiv.removeChild(computerPointsDiv.firstChild);
  }

  const p = document.createElement('p');
  p.innerText = `Your points: ${playerScore}`;
  playerPointsDiv.append(p);

  const p2 = document.createElement('p');
  p2.innerText = `Computer points: ${compScore}`;
  computerPointsDiv.append(p2);
};

//declaring the winner
const checkForWiner = function (playerScore, compScore) {
  if (playerScore === 5 || compScore === 5) {
    while (winnerDiv.firstChild) {
      winnerDiv.removeChild(winnerDiv.firstChild);
    }
    if (playerScore > compScore) {
      const h2 = document.createElement('h2');
      h2.classList.add('player-won');
      h2.innerText = `You won ${playerScore} to ${compScore} great job beating the computer!`;
      winnerDiv.append(h2);
    } else if (compScore > playerScore) {
      const h2 = document.createElement('h2');
      h2.classList.add('computer-won');
      h2.innerText = `You lost ${playerScore} to ${compScore} better luck next time`;
      winnerDiv.append(h2);
    }
    //Disable buttons after the game is finished(enable rematch)

    rockBtn.style.display = 'none';
    paperBtn.style.display = 'none'; //hide game Btns
    scissorsBtn.style.display = 'none';
    rematchBtn.style.display = 'block'; // Show the rematch button
  }
};

//creating event for rps buttons
rockBtn.addEventListener('click', function () {
  const computerSelection = getComputerChoice();
  const playerSelection = 'rock';
  playRound(playerSelection, computerSelection);
  checkForWiner(playerScore, compScore);
  runningScore(playerScore, compScore);

  // Show hidden elements after a move is made
  roundResultsDiv.style.display = 'block';
  playerPointsDiv.style.display = 'block';
  computerPointsDiv.style.display = 'block';
  // winnerDiv.style.display = 'block';
});

paperBtn.addEventListener('click', function () {
  const computerSelection = getComputerChoice();
  const playerSelection = 'paper';
  playRound(playerSelection, computerSelection);
  checkForWiner(playerScore, compScore);
  runningScore(playerScore, compScore);

  // Show hidden elements after a move is made
  roundResultsDiv.style.display = 'block';
  playerPointsDiv.style.display = 'block';
  computerPointsDiv.style.display = 'block';
  // winnerDiv.style.display = 'block';
});

scissorsBtn.addEventListener('click', function () {
  const computerSelection = getComputerChoice();
  const playerSelection = 'scissors';
  playRound(playerSelection, computerSelection);
  checkForWiner(playerScore, compScore);
  runningScore(playerScore, compScore);

  // Show hidden elements after a move is made
  roundResultsDiv.style.display = 'block';
  playerPointsDiv.style.display = 'block';
  computerPointsDiv.style.display = 'block';
  // winnerDiv.style.display = 'block';
});

// Function to reset the game for a rematch
const resetGame = function () {
  playerScore = 0;
  compScore = 0;

  // Hide elements when resetting the game
  roundResultsDiv.style.display = 'none';
  playerPointsDiv.style.display = 'none';
  computerPointsDiv.style.display = 'none';
  winnerDiv.style.display = 'none';

  rockBtn.style.display = 'inline';
  paperBtn.style.display = 'inline'; //show game btns
  scissorsBtn.style.display = 'inline';
  rematchBtn.style.display = 'none'; // Hide the rematch button
};

//event for rematchBtn
rematchBtn.addEventListener('click', resetGame);

//ORIGINAL CODE
// function game() {
//   for (let i = 0; i < 5; i++) {
//     /*to play 5 rounds- for loop*/
//     const playerSelection = prompt(
//       "Choose either Rock, Paper or Scissors",
//       "Rock, Paper, Scissors"
//     ).toLowerCase(); /*makes text case insensitive?*/
//     const computerSelection = getComputerChoice();
//     playRound(playerSelection, computerSelection);
//     console.log(
//       "1",
//       playerSelection,
//       "2",
//       computerSelection
//     ); /*  -  to see what player 1 and computer 2 chose*/
//     console.log(
//       playRound(playerSelection, computerSelection)
//     ); /* - to display the winner of one round*/
//   }
//   if (playerScore > compScore) {
//     return "You rock! You beat a computer!";
//   } else if (playerScore < compScore) {
//     return "You lose! But you still rock!";
//   } else {
//     return "You both rock! It's a tie"; /*backslash to escape from ending a string*/
//   }
// }

// console.log(game());

//ORIGINAL CODE 2

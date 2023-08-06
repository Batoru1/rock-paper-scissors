//variables
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsDiv = document.querySelector('.results');
const rematchBtn = document.querySelector('#rematch');

//randomize pc choice
function getComputerChoice() {
  const pcOptions = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * pcOptions.length);
  return pcOptions[randomNum];
}

/* plays one round of rps*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    const p = document.createElement('p');
    // p.classList.add(""); for styling later?
    p.innerText = `it's a tie! You both chose ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`;
    resultsDiv.appendChild(p);
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
    } beats ${computerSelection}`;
    resultsDiv.appendChild(p);
    return 'player';
  } else {
    compScore++;
    const p = document.createElement('p');
    p.innerText = `You lose! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection}`;
    resultsDiv.appendChild(p);
    return 'computer';
  }
}

/* for keeping score in game(), let so the score can change */
let compScore = 0;
let playerScore = 0;

//displaying current score
const runningScore = function (playerScore, compScore) {
  const p = document.createElement('p');
  p.innerText = `Your points: ${playerScore}`;
  resultsDiv.append(p);

  const p2 = document.createElement('p');
  p2.innerText = `Computer points: ${compScore}`;
  resultsDiv.append(p2);
};

//declaring the winner
const checkForWiner = function (playerScore, compScore) {
  if (playerScore === 5 || compScore === 5) {
    if (playerScore > compScore) {
      const h2 = document.createElement('h2');
      h2.classList.add('player-won');
      h2.innerText = `You won ${playerScore} to ${compScore} great job beating the computer!`;
      resultsDiv.append(h2);
    } else if (compScore > playerScore) {
      const h2 = document.createElement('h2');
      h2.classList.add('computer-won');
      h2.innerText = `You lost ${playerScore} to ${compScore} better luck next time`;
      resultsDiv.append(h2);
    }
    //Disable buttons after the game is finished(enable rematch)
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    rematchBtn.disabled = false;
  }
};

//creating event for rps buttons
rockBtn.addEventListener('click', function () {
  const computerSelection = getComputerChoice();
  const playerSelection = 'rock';
  playRound(playerSelection, computerSelection);
  checkForWiner(playerScore, compScore);
  runningScore(playerScore, compScore);
});

paperBtn.addEventListener('click', function () {
  const computerSelection = getComputerChoice();
  const playerSelection = 'paper';
  playRound(playerSelection, computerSelection);
  checkForWiner(playerScore, compScore);
  runningScore(playerScore, compScore);
});

scissorsBtn.addEventListener('click', function () {
  const computerSelection = getComputerChoice();
  const playerSelection = 'scissors';
  playRound(playerSelection, computerSelection);
  checkForWiner(playerScore, compScore);
  runningScore(playerScore, compScore);
});

// Function to reset the game for a rematch
const resetGame = function () {
  playerScore = 0;
  compScore = 0;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  rematchBtn.disabled = true;
  // Clear previous results
  resultsDiv.innerHTML = '';
};

//event for resteBtn
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

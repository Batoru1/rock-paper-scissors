function getComputerChoice() {
  const pcOptions = ["rock", "paper", "scissors"]; /* answers to pick from*/
  const randomNum = Math.floor(
    Math.random() * pcOptions.length
  ); /*randomize pc choice to  1,2,3 (could be 3 instead of .length*/
  return pcOptions[
    randomNum
  ]; /* assigns  1,2,3 to 'rock', 'paper' or 'scissors'*/
}

/*(console.log(getComputerChoice)) - checking getComputerChoice*/

function playRound(playerSelection, computerSelection) {
  /* plays one round of rps*/

  if (playerSelection === computerSelection) {
    const p = document.createElement("p");
    // p.classList.add(""); for styling later?
    p.innerText = `it's a tie! You both chose ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`;
    resultsDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    /* playerScore++ === playerScore=playerScore+1*/
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You win! Rock beats Scissors";
    resultsDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You win! Paper beats Rock";
    resultsDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You win! Scissors beats Paper";
    resultsDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lose! Rock beats Scissors";
    resultsDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lose! Paper beats Rock";
    resultsDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lose! Scissors beats Paper";
    resultsDiv.appendChild(p);
  }
}

let playerScore = 0;
let compScore = 0; /* for keeping score in game(), let so the score can change */

/* three buttons that call playRound function with the correct playerSelection every time a button is clicked.*/
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector(".results");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".comp-score");

function runningScore(playerScore, compScore) {
  const h3 = document.createElement("h3");
  h3.innerText = `Your score is ${playerScore} `;
  player - score.appendChild(h3);
  const h2 = document.createElement("h3");
  h3.innerText = `Computer Score score is ${compScore} `;
  comp - score.appendChild(h2);
}

const checkForWiner = function (playerScore, compScore) {
  if (playerScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("player-won");
    h2.innerText = `You won ${playerScore} to ${compScore} great job beating the computer!`;
    resultsDiv.append(h2);
  }
  if (compScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("computer-won");
    h2.innerText = `You lost ${playerScore} to ${compScore} better luck next time`;
    resultsDiv.append(h2);
  }
};

rockBtn.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  checkForWiner(playerScore, compScore);
});

paperBtn.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  checkForWiner(playerScore, compScore);
});

scissorsBtn.addEventListener("click", function () {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  checkForWiner(playerScore, compScore);
});

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

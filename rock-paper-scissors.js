



    function getComputerChoice() {
        let pcChoice = ['rock', 'paper', 'scissors'] /* answers to pick from*/
        let randomPcChoice = Math.floor(Math.random() * pcChoice.length)+1 /*randomize pc choice*/
       
        if (randomPcChoice === 1 ) {
            return 'rock';
        }  else if (randomPcChoice === 2) {
            return 'paper';
        } else if (randomPcChoice === 3) {
            return 'scissors';   
        }   /* make console.log display either Rock Paper or Scissors */   
    }
     /*console.logs either Rock Paper or Scissors from getComputerChoice function*/

    function playRound(playerSelection, computerSelection) {

                
        if (playerSelection === computerSelection) {
            return `it's a tie! You both chose ${playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1)}` /*capitalize first letter*/
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return "You win! Rock beats Scissors"
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You win! Paper beats Rock"
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return "You win! Scissors beats Paper"
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return `You lose! ${computerSelection.charAt(0).toUpperCase()+ computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1)}`;
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return `You lose! ${computerSelection.charAt(0).toUpperCase()+ computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1)}`;
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return `You lose! ${computerSelection.charAt(0).toUpperCase()+ computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase()+ playerSelection.slice(1)}`;
        } else {
            return "TYPO"
        }
        }

    const playerSelection = prompt("Choose either Rock, Paper or Scissors").toLowerCase();/*makes text case insensitive?*/
    const computerSelection = getComputerChoice();
     
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection)); /* console.logs the playRound function */

function game() {
    for (let i = 0; i< 5; i++){
       playRound (playerSelection, computerSelection)
    }
}
 
    



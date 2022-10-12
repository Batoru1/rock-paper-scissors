



    function getComputerChoice() {
        const pcOptions = ['rock', 'paper', 'scissors'] /* answers to pick from*/
        const randomNum = Math.floor(Math.random() * pcOptions.length) /*randomize pc choice*/
        const pcChoice=pcOptions[randomNum]
       return pcChoice
     }

    console.log(getComputerChoice()) /*checking computer choice*/
    

    function playRound(playerSelection, computerSelection) {

                
        if (playerSelection === computerSelection) {
            return `it's a tie! You both chose ${playerSelection}` /*template literal's tag function*/
        
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return "You win! Rock beats Scissors"
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return "You win! Paper beats Rock"
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            return "You win! Scissors beats Paper"
       
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return "You lose! Rock beats Scissors";
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return "You lose! Paper beats Rock";
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            return 'You lose! Scissors beats Paper';
        } else {
        
            return "TYPO"
        }
        }

        
        
        

    const playerSelection = prompt("Choose either Rock, Paper or Scissors").toLowerCase();/*makes text case insensitive?*/
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection)); /* console.logs the playRound function */

function game(playRound) {
  
   

  

    
}
 
    



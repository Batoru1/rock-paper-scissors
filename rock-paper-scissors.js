



    function getComputerChoice() {
        let pcChoice = ['Rock', 'Paper', 'Scissors'] /* answers to pick from*/
        let randomPcChoice = Math.floor(Math.random() * pcChoice.length)+1 /*randomize pc choice*/
       
        if (randomPcChoice === 1 ) {
            return 'Rock';
        }  else if (randomPcChoice === 2) {
            return 'Paper';
        } else if (randomPcChoice === 3) {
            return 'Scissors';   
        }   /* make console.log display either Rock Paper or Scissors */   
    }
    console.log(getComputerChoice()); /*console.logs either Rock Paper or Scissors from getComputerChoice function*/

    function playRound(playerSelection, computerSelection) {

                
        if (computerSelection == 'Paper') {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection == 'Scissors') {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection == 'Rock') {
            return "It's a tie!";
        }
    }

    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log (computerSelection); /* console.logs either Rock Paper or Scissors from playRound function*/
    console.log(playRound(playerSelection, computerSelection)); /* console.logs the playRound function */

   

 
    



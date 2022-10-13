
   

    function getComputerChoice() {
        const pcOptions = ['rock', 'paper', 'scissors']; /* answers to pick from*/
        const randomNum = Math.floor(Math.random() * pcOptions.length); /*randomize pc choice to 0, 1, 2(could be 3 instead of .length*/
        const pcChoice=pcOptions[randomNum]; /* assigns 0, 1, or 2 to 'rock', 'paper' or 'scissors'*/
       return pcChoice;
     }

                                             /*(console.log(getComputerChoice)) - checking getComputerChoice*/
    

    function playRound(playerSelection, computerSelection) { /* plays one round of rps*/

        if (playerSelection === computerSelection) {
            return `it's a tie! You both chose ${playerSelection}`; /*template literal's tag function(it could be ${computerSelection} as well*/

         
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') { /* playerScore++ === playerScore=playerScore+1*/
            playerScore++;
            return "You win! Rock beats Scissors"
         } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            return "You win! Paper beats Rock";
         } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            return "You win! Scissors beats Paper";

         
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            compScore++;
            return "You lose! Rock beats Scissors";
         } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            compScore++;
            return "You lose! Paper beats Rock";
         } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            compScore++;
            return 'You lose! Scissors beats Paper';

        } else {
        
            return "TYPO";
        }
        }

            
        let playerScore = 0;
        let compScore = 0;/* for keeping score in game(), let so the score can change */
    
        
        function game() {
        for (let i = 0; i < 5; i++) {
            const playerSelection = prompt("Choose either Rock, Paper or Scissors", 'Rock, Paper, Scissors').toLowerCase();/*makes text case insensitive?*/
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection); /* console.logs the playRound function */ 
            console.log('1', playerSelection, '2', computerSelection); /* -  to see what player 1 and computer 2 chose*/
         }
             if (playerScore > compScore) {
                return 'You rock! You beat a computer!'
             } else if (playerScore<compScore) {
                return 'You lose! But you still rock!'
             } else {
                return 'You both rock! It\'s a tie'
             }
    }

    
    console.log(game())

 
    







    function getComputerChoice() {
        let pcChoice = ['Rock', 'Paper', 'Scissors'] /* answers to pick from*/
        let randomPcChoice = Math.floor(Math.random() * pcChoice.length)+1 /*randomize pc choice*/
       
        if (randomPcChoice === 1 ) {
            return 'Rock';
        }  else if (randomPcChoice === 2) {
            return 'Paper';
        } else if (randomPcChoice === 3) {
            return 'Scissors'
        }      
    }
    console.log(getComputerChoice()); 

   

 
    



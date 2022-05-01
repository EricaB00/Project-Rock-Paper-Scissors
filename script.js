const choices = ['ROCK', 'PAPER', 'SCISSORS'];

let computerScore = 0;
let playerScore = 0;
let round = 1;

//Computer Choice
function computerPlay(){
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
    
}

//Player Choice
function playerPlay(){
    let playerSelection = prompt('Please enter your choice of rock, paper, or scissors: ');
     return playerSelection.toUpperCase();
}


// Play a round
function playRound(playerSelection, computerSelection){
  console.log(`Round ${round}: You chose ${playerSelection} and the Computer chose ${computerSelection}`);
 if(playerSelection === computerSelection) {
    console.log('It is a Tie!');
    return null;
     
 } else if(playerSelection === 'ROCK' & computerSelection === 'SCISSORS') {
     console.log('You win! Rock crushes Scissors');
     return true;
     
 } else if(playerSelection === 'ROCK' & computerSelection === 'PAPER') {
     console.log('You lose! Paper covers Rock');
     return false;
    
 } else if (playerSelection === 'PAPER' & computerSelection === 'ROCK') {
     console.log('You win! Paper covers Rock');
     return true;
   
 } else if (playerSelection === 'PAPER' & computerSelection === 'SCISSORS'){
     console.log('You lose! Scissors cut paper');
     return false;
 } else if (playerSelection === 'SCISSORS' & computerSelection === 'PAPER') {
     console.log('You win! Paper cuts scissors');
    return true;
 } else if (playerSelection === 'SCISSORS' & computerSelection === 'ROCK'){
     console.log('You lose! Rock crushes Scissors');
    return false;
 } else {
     console.log('You have to choose Rock, Paper or Scissors')
     return null;
 }

 
}


//Play 5 rounds
function game() {
    
    for (let i = 0; i < 5; i++) {
        
       let playerSelection = playerPlay();
       let computerSelection = computerPlay();
       let result = (playRound(playerSelection,computerSelection));
       
        if(result){
            playerScore++;
        } else if(result === false){
            computerScore++;
        }
        round++;
        
        console.log(`Current Score - Player: ${playerScore}, Computer: ${computerScore}`)
}

console.log('GAME OVER!');
console.log (`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
   if(playerScore > computerScore){
       console.log('You win!');
   } else if (playerScore < computerScore){
       console.log('The Computer wins!');
   } else {
       console.log('It is a Tie Game!');
   }
   
}

game();
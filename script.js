let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
     buttons.forEach(elem => {
         elem.disabled = true
     })
 }

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""
    

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        
        playerScore += 1
        
          result = (' You WON! ' + playerSelection + ' beats ' + computerSelection + "." + "\r\n"
             + " Your score: " + playerScore + " " +  " Computer score: " + computerScore)
        
       
        if (playerScore === 5) {
            result +=   "\r\n" + ' You won the game! Reload the page to play again!'
            disableButtons()
        }
    }
    else if (playerSelection === computerSelection) {
         result = ("It's a TIE! You both chose " + playerSelection + "."
         + "\r\n"
            + " Your score: " + playerScore +  " " + " Computer score: " + computerScore)
            
        
    }
    else {
        computerScore += 1
         result = ('You LOSE! ' + computerSelection + ' beats ' + playerSelection + "."
         + "\r\n"
          + " Your score: " + playerScore + " " +  " Computer score: " + computerScore)

            
       
        if (computerScore === 5) {
            result +=   "\r\n" + ' The computer won the game! Reload the page to play again!'
            disableButtons()
        }
    }
    document.getElementById('result').textContent = result;
   
    
    
    
}





buttons.forEach(button =>{
    button.addEventListener('click', function(){
         playRound(button.value)
        
    })
})
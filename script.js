
/// GLOBAL ///


const options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;


/// GLOBAL ///


// Predetermine the computers choice from the array.
function getComputerChoice (cpuChoice) {
    
    // We declare a new variable called 'randomChoice' and use the 'options' array with a math function to randomize the choice.

    cpuChoice = options[Math.floor(Math.random()*options.length)];

    // We return the result of the randomizing to the variable. This displays a randomised choice from our 'options' array.
    return cpuChoice;
}

function getMyChoice(myChoice) {

    myChoice = prompt("Rock, paper or scissors?");
    return myChoice;
    
}

function playRound(playerSelection,computerSelection) {

    computerSelection = getComputerChoice();
    playerSelection = getMyChoice();

    if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS") {
        console.log("You lose this round! Scissors beat paper...");
        computerScore++;
     } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
        console.log("You lose this round! Rock beats scissors...");
        computerScore++;

     } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER") {
        console.log("You lose this round! Paper beats rock...");
        computerScore++;
        
     } 
      else if (playerSelection == computerSelection) {
        console.log(`It's a tie! You picked ${playerSelection} and the CPU picked ${computerSelection}`)
      }
     
     else  {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
     }
}

function newGame() {
    playRound();
    playRound();

    if (playerScore > computerScore) {
        console.log("You win! Your score is: "+ playerScore + " The computers score is: " + computerScore);
        
    } else if (playerScore < computerScore) {
        console.log("You lose! Your score is: "+ playerScore + " The computers score is: " + computerScore);
        
    } else {
        console.log("It's a tie!");

    }

}

newGame();
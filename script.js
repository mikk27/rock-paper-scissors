
/// GLOBAL ///


const options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;


/// GLOBAL ///



function getComputerChoice (cpuChoice) {


    cpuChoice = options[Math.floor(Math.random()*options.length)];

    return cpuChoice;
}

function getMyChoice(myChoice) {

    myChoice = prompt("Rock, paper or scissors?");
    return myChoice;
    
}

function playRound (cpuChoice,myChoice) {

    cpuChoice = getComputerChoice();
    myChoice = getMyChoice();

    if (myChoice.toUpperCase() == "PAPER" && cpuChoice.toUpperCase() == "SCISSORS") {
        console.log(`You lose this round! You: ${myChoice} CPU: ${cpuChoice}.`);
        computerScore++;
     } else if (myChoice.toUpperCase() == "SCISSORS" && cpuChoice.toUpperCase() == "ROCK") {
        console.log(`You lose this round! You: ${myChoice} CPU: ${cpuChoice}.`);
        computerScore++;

     } else if (myChoice.toUpperCase() == "ROCK" && cpuChoice.toUpperCase() == "PAPER") {
        console.log(`You lose this roropund! You: ${myChoice} CPU: ${cpuChoice}.`);
        computerScore++;
        
     } 
      else if (myChoice == cpuChoice) {
        console.log(`It's a tie! You: ${myChoice} and the CPU ${cpuChoice}`)
      }
     
     else  {
        console.log(`You win this round! You: ${myChoice} CPU: ${cpuChoice}`);
        playerScore++;
     }
}

function newGame() {
    playRound();
    playRound();

    if (playerScore > computerScore) {
        console.log(`You win! Your score: ${playerScore}. CPU score: ${computerScore}.`);
        
    } else if (playerScore < computerScore) {
        console.log(`You lose! Your score: ${playerScore}. CPU score: ${computerScore}.`);
        
    } else {
        console.log("It's a tie!");

    }

}

newGame();
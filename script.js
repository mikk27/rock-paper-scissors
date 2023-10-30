
// Select elements from the DOM
const body = document.querySelector("body");
const holderDiv = document.createElement("div")
holderDiv.setAttribute("id", "holder");
const choices = document.createElement("div");
const results = document.createElement("div");
const gameResults = document.createElement("p");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

// Set button text content
rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

// Append buttons to choices div

choices.append(rockButton, paperButton, scissorsButton);

// Append choices and results divs to body


// Append game results paragraph to results div

results.appendChild(gameResults);
holderDiv.append (choices, results, gameResults)

body.append(holderDiv);

// Define options array and scoring variables
const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

// Function to play a round of the game
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    gameResults.textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    gameResults.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    gameResults.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
  updateScore();
}

// Function to update the score display
function updateScore() {
  results.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Add event listeners to buttons
rockButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("rock", computerChoice);
});

paperButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
});

scissorsButton.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("scissors", computerChoice);
});


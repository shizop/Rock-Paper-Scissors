const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result === "Tie") {
    resultDisplay.textContent = "It's a tie!";
  } else if (result === "Player") {
    resultDisplay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    playerDisplay.textContent = `PLAYER: ${playerSelection}`;
  } else {
    resultDisplay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    computerDisplay.textContent = `COMPUTER: ${computerSelection}`;
  }
}

function playGame() {
  let scorePlayer = 0;
  let scoreComputer = 0;

  const playerSelection = "ROCK";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  if (checkWinner(playerSelection, computerSelection) === "Player") {
    scorePlayer++;
    playerScoreDisplay.textContent = scorePlayer;
  } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
    scoreComputer++;
    computerScoreDisplay.textContent = scoreComputer;
  }

  //console.log("Game Over");
  if (scorePlayer > 5) {
    resultDisplay.textContent = "Player was the winner";
  } else if (scoreComputer > 5) {
    resultDisplay.textContent = "Computer was the winner";
  } else {
    resultDisplay.textContent = "No one wins";
  }
}

const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const gameEnd = document.querySelector("p");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "ROCK":
        result = computerChoice === "SCISSORS" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "PAPER":
        result = computerChoice === "ROCK" ? "YOU WIN!" : "YOU LOSE!";
        break;

      case "SCISSORS":
        result = computerChoice === "ROCK" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      getWinner();
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      getWinner();
      break;
  }
}

function getWinner() {
  if (playerScore === 5) {
    gameEnd.textContent = "YOU WIN THE GAME!";
    gameEnd.classList.add("announcegameover");
  } else if (computerScore === 5) {
    gameEnd.textContent = "YOU LOSE THE GAME!";
    gameEnd.classList.add("announcegameover");
  }
}

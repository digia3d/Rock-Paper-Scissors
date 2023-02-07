const buttons = document.querySelectorAll('.buttons button');
const playerScoreCount = document.querySelector('.player-score-count');
const computerScoreCount = document.querySelector('.computer-score-count');
const container = document.querySelector('.container');

let playerScore = 0;
let computerScore = 0;
let playAgainButton;

for (const button of buttons) {
  button.addEventListener('click', playRound);
}

function playRound(e) {
  const playerSelection = e.target.className;
  const computerSelection = getComputerSelection();
  const result = getResult(playerSelection, computerSelection);

  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }

  playerScoreCount.textContent = playerScore;
  computerScoreCount.textContent = computerScore;

  if (playerScore === 5 || computerScore === 5) {
    declareWinner(playerScore, computerScore);
    addPlayAgain();
  }
}

function getComputerSelection() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'draw';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function declareWinner() {
  let result = document.createElement("p");
  result.classList.add("result");
  if (playerScore > computerScore) {
    result.textContent = "Great, You won the game! 🥳";
  } else if (computerScore > playerScore) {
    result.textContent = "GAME OVER. You lost 🥲";
  } else {
    result.textContent = "STALEMATE! It was a tie 😐!";
  }
  container.appendChild(result);
}

function addPlayAgain() {
  playAgainButton = document.createElement('button');
  playAgainButton.classList.add('playAgain');
  playAgainButton.textContent = 'Play Again';
  playAgainButton.addEventListener('click', resetGame);
  container.appendChild(playAgainButton);
}

function resetGame() {
  playAgainButton.remove();
  resetScores();
  let result = document.querySelector(".result");
  if (result) {
    result.remove();
  }
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  playerScoreCount.textContent = playerScore;
  computerScoreCount.textContent = computerScore;
}
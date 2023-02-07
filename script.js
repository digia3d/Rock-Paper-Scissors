const buttons = document.querySelectorAll('.buttons button');
const playerScoreCount = document.querySelector('.player-score-count');
const computerScoreCount = document.querySelector('.computer-score-count');

let playerScore = 0;
let computerScore = 0;

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
  }
}

function getComputerSelection() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
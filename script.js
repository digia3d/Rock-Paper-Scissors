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

function declareWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    alert('You win! Congrats! Click "OK" to play again.');
  } else if (computerScore === 5) {
    alert('Computer wins. Better luck next time! Click "OK" to play again.');
  }
  resetScores();
}
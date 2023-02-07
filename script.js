let playerChoise = "";
let computerChoise = "";
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let res = "";

const options = ["rock", "paper", "scissors"];

const container = document.querySelector(".container");
const btnrock = document.getElementsByClassName("rock");
const btnpaper = document.getElementsByClassName("paper");
const btnscissors = document.getElementsByClassName("scissors");
const result = document.createElement("p");
const displayComputerRes = document.querySelector(".computer-score");
const displayPlayerRes = document.querySelector(".player-score");

function chooseRock() {
  playerChoise = "rock";
  return playerChoise;
}

function choosePaper() {
  playerChoise = "paper";
  return playerChoise;
}

function chooseScissors() {
  playerChoise = "scissors";
  return playerChoise;
}

// Compares the player and computer choices and returns the winner

function declareWinner() {
  if (playerScore > computerScore) {
    result.textContent = "You win!🥳";
  }
  else if (playerScore < computerScore) {
    result.textContent = "GAME OVER. You lose!😭";
  }
  else {
    result.textContent = "It's a tie!😐";
  }
}

// Plays again

function addPlayAgain() {
  const playAgain = document.createElement("button");
  playAgain.classList.add("playAgain");
  playAgain.textContent = "Play again";
  container.appendChild(playAgain);
  playAgain.addEventListener("click", resetGame);
}

function resetGame() {
  result.textContent = "";
  const playAgain = document.querySelector(".playAgain");
  container.removeChild(playAgain);
  rounds = 0;
  displayComputerRes.textContent = computerScore;
  displayPlayerRes.textContent = playerScore;
}

// Plays a round

function playRound() {
  computerChoise = options[Math.floor(Math.random() * 3)];
  if (playerChoise === computerChoise) {
    res = "It's a tie!😐";
  }
  else if (playerChoise === "rock" && computerChoise === "paper") {
    res = "You lose!😭 Paper beats rock";
    computerChoise ++;
  }
  else if (playerChoise === "rock" && computerChoise === "scissors") {
    res = "You win!🥳 Rock beats scissors";
    playerChoise ++;
  }
  else if (playerChoise === "paper" && computerChoise === "rock") {
    res = "You win!🥳 Paper beats rock";
    playerChoise ++;
  }
  else if (playerChoise === "paper" && computerChoise === "scissors") {
    res = "You lose!😭 Scissors beats paper";
    computerChoise ++;
  }
  else if (playerChoise === "scissors" && computerChoise === "rock") {
    res = "You lose!😭 Rock beats scissors";
    computerChoise ++;
  }
  else if (playerChoise === "scissors" && computerChoise === "paper") {
    res = "You win!🥳 Scissors beats paper";
    playerChoise ++;
  }
  result.textContent = `Result: ${res}`;
  result.classList.add("result");
  container.appendChild(result);
  rounds++;
  displaycomres[0].textContent = `Computer: ${computerScore}`;
  displayplayerres[0].textContent = `Player: ${playerScore}`;

  if (rounds === 5) {
    declareWinner();
    addPlayAgain();
    playerScore = 0;
    computerScore = 0;
  }
// resetGame if play again is clicked
  
  if (rounds > 5) {
    resetGame();
  }
}

// Event listeners

btnrock[0].addEventListener("click", () => {
  chooseRock();
  playRound();
});


btnpaper[0].addEventListener("click", () => {
  choosePaper();
  playRound();
});


btnscissors[0].addEventListener("click", () => {
  chooseScissors();
  playRound();
});


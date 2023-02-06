let playerChoise = "";
let computerChoise = "";
let playerScore = 0;
let computerScore = 0;
let round = 0;
let res = "";

const options = ["rock", "paper", "scissors"];

const container = document.querySelector(".container");
const btnrock = document.querySelector(".rock");
const btnpaper = document.querySelector(".paper");
const btnscissors = document.querySelector(".scissors");
const result = document.createElement("p");
const displaycomres = document.querySelector(".computer-result");
const displayplayerres = document.querySelector(".player-result");

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

// Compares the player and computer choices and returns the result

function declareWinner() {
  if (playerScore > computerScore) {
    res.textContent = "You win!🥳";
  }
  else if (playerScore < computerScore) {
    res.textContent = "You lose!😭";
  }
  else {
    res.textContent = "It's a tie!😐";
  }
}

// Plays again

function addPlayAgain() {
  const playAgain = document.createElement("button");
  playAgain.textContent = "Play again";
  playAgain.classList.add("play-again");
  container.appendChild(playAgain);
  playAgain.addEventListener("click", resetGame);
}

function resetGame() {
  result.textContent = "";
  const playAgain = document.querySelector(".playAgain");
  container.removeChild(playAgain);
  round = 0;
  displaycomres.textContent = `Computer: ${computerScore}`;
  displayplayerres.textContent = `Player: ${playerScore}`;
}

// Plays a round

function playRound() {
  if (round < 5) {
    round++;
    computerChoise = options[Math.floor(Math.random() * options.length)];
    if (playerChoise === computerChoise) {
      result.textContent = "It's a tie!😐";
    }
    else if (playerChoise === "rock" && computerChoise === "scissors") {
      result.textContent = "You win!🥳";
      playerScore++;
    }
    else if (playerChoise === "paper" && computerChoise === "rock") {
      result.textContent = "You win!🥳";
      playerScore++;
    }
    else if (playerChoise === "scissors" && computerChoise === "paper") {
      result.textContent = "You win!🥳";
      playerScore++;
    }
    else {
      result.textContent = `Result: ${res}`;
      computerScore++;
    }
    displaycomres.textContent = `Computer: ${computerScore}`;
    displayplayerres.textContent = `Player: ${playerScore}`;
  }
  else {
    declareWinner();
    addPlayAgain();
  }
}


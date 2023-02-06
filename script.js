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
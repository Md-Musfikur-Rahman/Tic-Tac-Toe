let editedPlayerId = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const players = [
  {
    userName: "",
    symbol: "X",
  },

  {
    userName: "",
    symbol: "O",
  },
];

const playerInfo = document.getElementById("playerInfo");
const playerOverlays = document.getElementById("config-overlay");
const backDrop = document.getElementById("backdrop");
const form = document.querySelector("form");
const errorMsg = document.getElementById("error-msg");
const activeGame = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player-name");
const gameOverEnd = document.getElementById("game-over");
const winnerName = document.getElementById("winner-name");
const aleartMsg = document.getElementById("aleart-msg");

const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");
const cancleBtn = document.getElementById("cancel-config-btn");
const startGame = document.getElementById("start-game");
const gameFildes = document.querySelectorAll("#game-board li");
const gameBoards = document.getElementById("game-board");

editPlayer1Btn.addEventListener("click", openOverlays);
editPlayer2Btn.addEventListener("click", openOverlays);
cancleBtn.addEventListener("click", closeOverlays);
backDrop.addEventListener("click", closeOverlays);
form.addEventListener("submit", saveInfo);
startGame.addEventListener("click", startNewGame);

for (const gameFilde of gameFildes) {
  gameFilde.addEventListener("click", selectGameFild);
}

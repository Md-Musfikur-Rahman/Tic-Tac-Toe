function resetGame() {
  gameIsOver = false;
  activePlayer = 0;
  currentRound = 1;
  gameOverEnd.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME</span>!';
  gameOverEnd.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoard = gameBoards.children[gameBoardIndex];
      gameBoard.textContent = "";
      gameBoard.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].userName == "" || players[1].userName == "") {
    aleartMsg.style.display = "block";
    backDrop.style.display = "block";
    return;
  }
  resetGame();

  activePlayerName.textContent = players[activePlayer].userName;
  activeGame.style.display = "block";
  scoreBoard.style.display = "block";
  playerInfo.style.display = "none";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].userName;
}

function selectGameFild(event) {
  if (gameIsOver) {
    return;
  }
  const selectField = event.target;
  const selectcol = selectField.dataset.col - 1;
  const selectrow = selectField.dataset.row - 1;

  if (gameData[selectrow][selectcol] > 0) {
    aleartMsg.textContent = "choose another empty field";
    aleartMsg.style.display = "block";
    backDrop.style.display = "block";
    return;
  }

  selectField.textContent = players[activePlayer].symbol;
  selectField.classList.add("disabled");

  gameData[selectrow][selectcol] = activePlayer + 1;

  const winnerId = gameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;

  switchPlayer();
}

function gameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverEnd.style.display = "block";
  if (winnerId > 0) {
    const winner = players[winnerId - 1].userName;
    gameOverEnd.firstElementChild.firstElementChild.textContent = winner;
    updateScore(winnerId);
  } else {
    gameOverEnd.firstElementChild.textContent = "It's a draw";
  }
}

function updateScore(winnerId) {
  if (winnerId == 1) {
    document.getElementById("player-1-s").innerText = ++player1;
  } else {
    document.getElementById("player-2-s").innerText = ++player2;
  }
}

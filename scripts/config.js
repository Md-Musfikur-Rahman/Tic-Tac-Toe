function openOverlays(event) {
  editedPlayerId = +event.target.dataset.playerid;
  playerOverlays.style.display = "block";
  backDrop.style.display = "block";
}

function closeOverlays() {
  playerOverlays.style.display = "none";
  backDrop.style.display = "none";
  aleartMsg.style.display = "none";
  form.firstElementChild.classList.remove("error");
  errorMsg.textContent = "";
  document.getElementById("playername").value = "";
}

function saveInfo(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorMsg.textContent = "Please input valid user name";
    return;
  }
  const updatePlayerName = document.getElementById(
    "player-" + editedPlayerId + "-data"
  );
  const addName = document.getElementById("player-" + editedPlayerId);

  updatePlayerName.children[1].textContent = enteredPlayerName;

  addName.children[1].textContent = enteredPlayerName;

  players[editedPlayerId - 1].userName = enteredPlayerName;

  closeOverlays();
}

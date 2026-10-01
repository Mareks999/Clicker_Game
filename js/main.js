"use strict";


$("volume").value = volume;
$("mute").checked = muted;
$("volume").oninput = e => { volume = parseFloat(e.target.value); localStorage.setItem("volume", volume); };
$("mute").onchange = e => { muted = e.target.checked; localStorage.setItem("muted", muted ? "1" : "0"); };

$("settingsButton").onclick = () => $("settingsMenu").style.display = "flex";
$("closeSettings").onclick = () => $("settingsMenu").style.display = "none";
$("saveButton").onclick = saveGame;

$("resetButton").onclick = () => {
  if (!confirm("Vai tiešām sākt no jauna?")) return;
  resetState();
  bonusEndsAt = bonusReadyAt = 0;
  stageIndex = 0;
  applyStage(0, false);
  restartAuto();
  updateUI();
  saveGame();
  $("settingsMenu").style.display = "none";
};

$("changePlayer").onclick = async () => {
  await saveGame();
  $("settingsMenu").style.display = "none";
  $("nameInput").value = "";
  $("nameScreen").style.display = "flex";
};

async function startAs(name) {
  name = name.trim().slice(0, 20);
  if (!name) return;
  playerName = name;
  localStorage.setItem("player", name);
  $("nameScreen").style.display = "none";
  await loadGame();
}
$("startButton").onclick = () => startAs($("nameInput").value);
$("nameInput").onkeydown = e => { if (e.key === "Enter") startAs($("nameInput").value); };


buildShop();
updateUI();
setInterval(saveGame, AUTOSAVE_MS);

const known = window.PLAYER || localStorage.getItem("player");
if (known) startAs(known); else $("nameScreen").style.display = "flex";

"use strict";

// ---- Saglabāšana un ielāde (PHP) ----
function payload() { return JSON.stringify({ name: playerName, state }); }

async function saveGame() {
  if (!playerName) return;
  try {
    const res = await fetch("php/save.php", { method: "POST", headers: { "Content-Type": "application/json" }, body: payload() });
    const data = await res.json();
    $("status").textContent = data.ok ? "Saglabāts " + new Date().toLocaleTimeString("lv-LV") : "Neizdevās saglabāt";
  } catch { $("status").textContent = "Nav savienojuma ar serveri"; }
}
window.addEventListener("pagehide", () => { if (playerName) navigator.sendBeacon("php/save.php", new Blob([payload()], { type: "application/json" })); });

async function loadGame() {
  resetState();
  try {
    const res = await fetch("php/load.php?name=" + encodeURIComponent(playerName));
    const data = await res.json();
    if (data.ok && data.state) state = data.state;
  } catch { $("status").textContent = "Nevar ielādēt saglabājumu"; }
  bonusEndsAt = bonusReadyAt = 0;
  stageIndex = STAGES.reduce((best, s, i) => state.totalEarned >= s.at ? i : best, 0);
  applyStage(stageIndex, false);
  restartAuto();
  updateUI();
}

"use strict";

// ---- Punkti, transformācijas, klikšķis un flotes ienākumi ----
function addPoints(amount) {
  state.points += amount;
  state.totalEarned += amount;
  const idx = STAGES.reduce((best, s, i) => state.totalEarned >= s.at ? i : best, 0);
  if (idx !== stageIndex) { stageIndex = idx; applyStage(idx, true); }
  updateUI();
}

function applyStage(idx, announce) {
  $("truckWrap").className = "stage-" + idx;
  $("badge").textContent = idx + 1;
  $("stageName").textContent = STAGES[idx].name;
  if (announce) {
    play("transform");
    banner("Transformācija: " + STAGES[idx].name);
    $("truckWrap").classList.add("flash");
    setTimeout(() => $("truckWrap").classList.remove("flash"), 900);
  }
}

function banner(text) {
  const b = $("banner");
  b.textContent = text;
  b.classList.add("show");
  clearTimeout(banner.t);
  banner.t = setTimeout(() => b.classList.remove("show"), 2500);
}

function floatText(text, x, y, big) {
  const el = document.createElement("div");
  el.className = "floater" + (big ? " crit" : "");
  el.textContent = text;
  el.style.left = x + "px"; el.style.top = y + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

$("truck").addEventListener("click", e => {
  let gain = Math.max(1, Math.round(clickValue()));
  const crit = Math.random() < critChance();
  if (crit) gain *= 7;
  addPoints(gain);
  play("click", crit ? 1.6 : 1);
  floatText("+" + fmt(gain), e.clientX, e.clientY, crit);
});

function restartAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(() => { if (fleetPerTick() > 0) addPoints(Math.round(fleetPerTick() * multiplier() * bonusFactor())); }, autoInterval());
}

// ---- Nakts maiņa (laika bonuss) ----
$("bonusButton").addEventListener("click", () => {
  const now = Date.now();
  if (L("shift") < 1 || bonusActive() || now < bonusReadyAt) return;
  bonusEndsAt = now + bonusMs();
  bonusReadyAt = bonusEndsAt + 45000;
  play("bonus");
  banner("Nakts maiņa: dubulti ieņēmumi!");
});

setInterval(() => {
  document.body.classList.toggle("bonus-on", bonusActive());
  const b = $("bonusButton"), now = Date.now();
  if (L("shift") < 1) { b.disabled = true; b.textContent = "Nakts maiņa (nopērc uzlabojumu)"; }
  else if (bonusActive()) { b.disabled = true; b.textContent = "x2 vēl " + Math.ceil((bonusEndsAt - now) / 1000) + " s"; }
  else if (now < bonusReadyAt) { b.disabled = true; b.textContent = "Gaidi " + Math.ceil((bonusReadyAt - now) / 1000) + " s"; }
  else { b.disabled = false; b.textContent = "Nakts maiņa (" + bonusMs() / 1000 + " s)"; }
}, 250);

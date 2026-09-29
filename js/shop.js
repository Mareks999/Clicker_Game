"use strict";

// ---- Veikals: divas sadaļas (Flote / Uzlabojumi) ----
function buildShop() {
  for (const [listId, defs] of [["fleetList", FLEET], ["upgradesList", UPGRADES]]) {
    const list = $(listId);
    list.innerHTML = "";
    Object.keys(defs).forEach((key, i) => {
      const u = defs[key];
      const row = document.createElement("div");
      row.className = "upgrade";
      row.id = "up-" + key;
      row.innerHTML =
        '<span class="no">' + (i + 1) + '</span>' +
        '<div class="up-info"><b>' + u.name + ' <span class="lvl"></span></b><small>' + (u.desc || "") + '</small><small class="extra"></small></div>' +
        '<button class="buy"></button>';
      row.querySelector(".buy").onclick = () => buy(key);
      list.appendChild(row);
    });
  }
}

document.querySelectorAll(".tab").forEach(tab => tab.onclick = () => {
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t === tab));
  $("fleetList").hidden = tab.dataset.tab !== "fleet";
  $("upgradesList").hidden = tab.dataset.tab !== "upgrades";
});

function buy(key) {
  const u = itemOf(key), price = cost(key);
  if (u.max && L(key) >= u.max) return;
  if (state.points < price) { play("deny"); return; }
  state.points -= price;
  state.levels[key]++;
  play("upgrade");
  if (key === "turbo") restartAuto();
  updateUI();
}

function updateUI() {
  $("score").textContent = fmt(state.points);
  $("stats").textContent = "Klikšķis: €" + fmt(clickValue()) +
    (fleetPerTick() ? " · Flote: €" + fmt(perSecond()) + "/s" : "") +
    (L("contracts") ? " · x" + multiplier().toFixed(2) : "");

  const next = STAGES[stageIndex + 1];
  $("progressBar").style.width = (next ? Math.min(100, (state.totalEarned - STAGES[stageIndex].at) / (next.at - STAGES[stageIndex].at) * 100) : 100) + "%";
  $("progressText").textContent = next ? fmt(state.totalEarned) + " / " + fmt(next.at) : "Maksimums!";

  [...Object.keys(FLEET), ...Object.keys(UPGRADES)].forEach(key => {
    const row = $("up-" + key);
    if (!row) return;
    const u = itemOf(key), price = cost(key), btn = row.querySelector(".buy");
    row.querySelector(".lvl").textContent = FLEET[key] ? "× " + L(key) : "(lvl " + L(key) + ")";
    row.querySelector(".extra").textContent = FLEET[key] ? "Nopelna €" + fmt(L(key) * u.out * multiplier()) + " katrā reisā" : "";
    if (u.max && L(key) >= u.max) { btn.textContent = "MAX"; btn.disabled = true; }
    else { btn.textContent = "€" + fmt(price); btn.disabled = false; row.classList.toggle("poor", state.points < price); }
  });
}

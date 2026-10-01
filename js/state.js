"use strict";

let state = { points: 0, totalEarned: 0, levels: {} };
[...Object.keys(FLEET), ...Object.keys(UPGRADES)].forEach(k => state.levels[k] = 0);

let playerName = "";
let stageIndex = 0;
let bonusEndsAt = 0, bonusReadyAt = 0;
let autoTimer = null;
let volume = parseFloat(localStorage.getItem("volume") ?? "0.6");
let muted = localStorage.getItem("muted") === "1";

const $ = id => document.getElementById(id);          
const L = key => state.levels[key];                   

function resetState() {
  state = { points: 0, totalEarned: 0, levels: {} };
  [...Object.keys(FLEET), ...Object.keys(UPGRADES)].forEach(k => state.levels[k] = 0);
}

function fmt(n) {
  n = Math.floor(n);
  if (n < 10000) return n.toLocaleString("lv-LV");
  const units = ["", "K", "M", "B", "T"];
  let i = 0;
  while (n >= 1000 && i < units.length - 1) { n /= 1000; i++; }
  return n.toFixed(n < 100 ? 1 : 0) + units[i];
}

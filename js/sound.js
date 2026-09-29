"use strict";

// ---- Skaņa (5 efekti, sk. assets/sounds) ----
const audio = {};
["click", "upgrade", "bonus", "transform", "deny"].forEach(k => audio[k] = new Audio("assets/sounds/" + k + ".wav"));

function play(name, rate = 1) {
  if (muted) return;
  const a = audio[name].cloneNode(); // klons ļauj vienu skaņu atskaņot vairākas reizes uzreiz
  a.volume = volume; a.playbackRate = rate;
  a.play().catch(() => {});
}

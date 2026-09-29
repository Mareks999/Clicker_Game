"use strict";

// ---- Formulas, kas pārvērš uzlabojumu līmeņus naudā ----
const multiplier   = () => 1 + 0.25 * L("contracts");
const bonusActive  = () => Date.now() < bonusEndsAt;
const bonusFactor  = () => bonusActive() ? 2 : 1;
const autoInterval = () => Math.max(200, Math.round(1000 * Math.pow(0.92, L("turbo"))));
const fleetPerTick = () => Object.keys(FLEET).reduce((s, k) => s + L(k) * FLEET[k].out, 0);
const perSecond    = () => fleetPerTick() * multiplier() * bonusFactor() * 1000 / autoInterval();
const clickValue   = () => ((1 + L("engine")) * (1 + 0.1 * L("tires")) + perSecond() * 0.03) * multiplier() * bonusFactor();
const critChance   = () => L("crit") * 0.04;
const bonusMs      = () => (10 + 5 * (L("shift") - 1)) * 1000;
const itemOf       = key => FLEET[key] || UPGRADES[key];
const cost         = key => Math.ceil(itemOf(key).base * Math.pow(itemOf(key).growth, L(key)));

"use strict";

const FLEET = {
  driver:  { name: "Šoferis",               out: 1,    base: 30,     growth: 1.15 },
  van:     { name: "Furgons",               out: 5,    base: 220,    growth: 1.15 },
  trailer: { name: "Piekabe",               out: 25,   base: 1600,   growth: 1.15 },
  depot:   { name: "Depo",                  out: 130,  base: 12000,  growth: 1.15 },
  route:   { name: "Starppilsētu maršruts", out: 700,  base: 90000,  growth: 1.15 },
  port:    { name: "Ostas terminālis",       out: 4000, base: 700000, growth: 1.15 },
};


const UPGRADES = {
  engine:    { name: "Jaudīgāks dzinējs", desc: "+1 € par klikšķi",          base: 15,   growth: 1.45, max: 999 },
  tires:     { name: "Riepas",            desc: "+10% klikšķa ieņēmumiem",   base: 1500, growth: 1.9,  max: 10 },
  turbo:     { name: "Turbo",             desc: "Flote strādā ātrāk",        base: 250,  growth: 1.9,  max: 15 },
  contracts: { name: "Izdevīgi līgumi",   desc: "+25% visiem ieņēmumiem",    base: 1000, growth: 2.4,  max: 12 },
  crit:      { name: "Ātrā piegāde",      desc: "Reizēm klikšķis dod x7",    base: 400,  growth: 1.9,  max: 10 },
  shift:     { name: "Nakts maiņa",       desc: "Uz laiku dubulti ieņēmumi", base: 600,  growth: 2.0,  max: 8 },
};

const STAGES = [
  { at: 0,          name: "Vecais rūsganis" },
  { at: 1500,       name: "Nomazgāts un spodrs" },
  { at: 15000,      name: "Lielceļu zvērs" },
  { at: 150000,     name: "Jauns dzinējs zem pārsega" },
  { at: 1500000,    name: "Tālbraucēja lepnums" },
  { at: 15000000,   name: "Turbo fūrmanis" },
  { at: 150000000,  name: "Šosejas leģenda" },
  { at: 1500000000, name: "Nr. 1 visā autoparkā" },
];

const AUTOSAVE_MS = 10000;

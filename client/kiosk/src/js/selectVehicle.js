const car = document.getElementById("select-car");
const suv = document.getElementById("select-suv");
const q50 = document.getElementById("select-q50");
const q60 = document.getElementById("select-q60");
const q70 = document.getElementById("select-q70");
const q70l = document.getElementById("select-q70l");
const qx30 = document.getElementById("select-qx30");
const qx50 = document.getElementById("select-qx50");
const qx60 = document.getElementById("select-qx60");
const qx80 = document.getElementById("select-qx80");
const red = document.getElementById("sunstone-red");
const midnight = document.getElementById("midnight");
const majestic = document.getElementById("majestic");
const graphite = document.getElementById("graphite");
const platinum = document.getElementById("platinum");
const iridium = document.getElementById("iridium");
const hagane = document.getElementById("hagane-blue");
const obsidian = document.getElementById("obsidian");
const white = document.getElementById("pure-white");
const mocha = document.getElementById("mocha-almond");
const viewCar = document.getElementById("view-car");
const progress = document.getElementById("sv-progress");

const progress1 = "28%";
const progress2 = "39%";
const progress3 = "50%";

const viewCarClick = () => {
  window.location.href = './results.html';
}

const activateButton = () => {
  viewCar.style.opacity = 1;
  viewCar.addEventListener('click', viewCarClick);
}

const deactivateButton = () => {
  viewCar.style.opacity = 0.18;
  viewCar.removeEventListener('click', viewCarClick);
}

const redClick = () => {
  progress.style.width = progress3;
  activateButton();
  deactivateColors();
  red.style.opacity = 1;
}

const midnightClick = () => {
  progress.style.width = progress3;
  activateButton();
  deactivateColors();
  midnight.style.opacity = 1;
}

const majesticClick = () => {
  progress.style.width = progress3;
  activateButton();
  deactivateColors();
  majestic.style.opacity = 1;
}

const graphiteClick = () => {
  progress.style.width = progress3;
  activateButton();
  deactivateColors();
  graphite.style.opacity = 1;
}

const platinumClick = () => {
  progress.style.width = progress3;
  activateButton();
  deactivateColors();
  platinum.style.opacity = 1;
}

const iridiumClick = () => {
  progress.style.width = progress3;
  activateButton();
  deactivateColors();
  iridium.style.opacity = 1;
}

const haganeClick = () => {
  progress.style.width = progress3;
  activateButton();
  deactivateColors();
  hagane.style.opacity = 1;
}

const obsidianClick = () => {
  progress.style.width = progress3;
  activateButton();
  deactivateColors();
  obsidian.style.opacity = 1;
}

const whiteClick = () => {
  progress.style.width = progress3;
  activateButton();
  deactivateColors();
  white.style.opacity = 1;
}

const mochaClick = () => {
  progress.style.width = progress3;
  activateButton();
  deactivateColors();
  mocha.style.opacity = 1;
}

const activateColors = () => {
  red.style.opacity = 1;
  red.addEventListener('click', redClick);
  midnight.style.opacity = 1;
  midnight.addEventListener('click', midnightClick);
  majestic.style.opacity = 1;
  majestic.addEventListener('click', majesticClick);
  graphite.style.opacity = 1;
  graphite.addEventListener('click', graphiteClick);
  platinum.style.opacity = 1;
  platinum.addEventListener('click', platinumClick);
  iridium.style.opacity = 1;
  iridium.addEventListener('click', iridiumClick);
  hagane.style.opacity = 1;
  hagane.addEventListener('click', haganeClick);
  obsidian.style.opacity = 1;
  obsidian.addEventListener('click', obsidianClick);
  white.style.opacity = 1;
  white.addEventListener('click', whiteClick);
  mocha.style.opacity = 1;
  mocha.addEventListener('click', mochaClick);
  progress.style.width = progress2;
}

const deactivateColors = () => {
  red.style.opacity = 0.18;
  red.removeEventListener('click', redClick);
  midnight.style.opacity = 0.18;
  midnight.removeEventListener('click', midnightClick);
  majestic.style.opacity = 0.18;
  majestic.removeEventListener('click', majesticClick);
  graphite.style.opacity = 0.18;
  graphite.removeEventListener('click', graphiteClick);
  platinum.style.opacity = 0.18;
  platinum.removeEventListener('click', platinumClick);
  iridium.style.opacity = 0.18;
  iridium.removeEventListener('click', iridiumClick);
  hagane.style.opacity = 0.18;
  hagane.removeEventListener('click', haganeClick);
  obsidian.style.opacity = 0.18;
  obsidian.removeEventListener('click', obsidianClick);
  white.style.opacity = 0.18;
  white.removeEventListener('click', whiteClick);
  mocha.style.opacity = 0.18;
  mocha.removeEventListener('click', mochaClick);
}

const activateCars = () => {
  q50.style.opacity = 1;
  q50.addEventListener('click', q50Click);
  q60.style.opacity = 1;
  q60.addEventListener('click', q60Click);
  q70.style.opacity = 1;
  q70.addEventListener('click', q70Click);
  q70l.style.opacity = 1;
  q70l.addEventListener('click', q70lClick);
}

const deactivateCars = () => {
  q50.style.opacity = 0.18;
  q50.removeEventListener('click', q50Click);
  q60.style.opacity = 0.18;
  q60.removeEventListener('click', q60Click);
  q70.style.opacity = 0.18;
  q70.removeEventListener('click', q70Click);
  q70l.style.opacity = 0.18;
  q70l.removeEventListener('click', q70lClick);
}

const q50Click = () => {
  deactivateCars();
  q50.style.opacity = 1;
  q50.addEventListener('click', q50Click);
  activateColors();
}

const q60Click = () => {
  deactivateCars();
  q60.style.opacity = 1;
  q60.addEventListener('click', q60Click);
  activateColors();
}

const q70Click = () => {
  deactivateCars();
  q70.style.opacity = 1;
  q70.addEventListener('click', q70Click);
  activateColors();
}

const q70lClick = () => {
  deactivateCars();
  q70l.style.opacity = 1;
  q70l.addEventListener('click', q70lClick);
  activateColors();
}

const carClick = () => {
  car.style.opacity = 1;
  suv.style.opacity = 0.18;
  activateCars();
  deactivateSUVs();
  deactivateColors();
  deactivateButton();
  progress.style.width = progress1;
}
car.addEventListener('click', carClick);


const activateSUVs = () => {
  qx30.style.opacity = 1;
  qx50.style.opacity = 1;
  qx60.style.opacity = 1;
  qx80.style.opacity = 1;
  qx30.addEventListener('click', qx30Click);
  qx50.addEventListener('click', qx50Click);
  qx60.addEventListener('click', qx60Click);
  qx80.addEventListener('click', qx80Click);
}

const deactivateSUVs = () => {
  qx30.style.opacity = 0.18;
  qx50.style.opacity = 0.18;
  qx60.style.opacity = 0.18;
  qx80.style.opacity = 0.18;
  qx30.removeEventListener('click', qx30Click);
  qx50.removeEventListener('click', qx50Click);
  qx60.removeEventListener('click', qx60Click);
  qx80.removeEventListener('click', qx80Click);
}

const qx30Click = () => {
  deactivateSUVs();
  qx30.style.opacity = 1;
  qx30.addEventListener('click', qx30Click);
  activateColors();
}

const qx50Click = () => {
  deactivateSUVs();
  qx50.style.opacity = 1;
  qx50.addEventListener('click', qx50Click);
  activateColors();
}

const qx60Click = () => {
  deactivateSUVs();
  qx60.style.opacity = 1;
  qx60.addEventListener('click', qx60Click);
  activateColors();
}

const qx80Click = () => {
  deactivateSUVs();
  qx80.style.opacity = 1;
  qx80.addEventListener('click', qx80Click);
  activateColors();
}

const suvClick = () => {
  suv.style.opacity = 1;
  car.style.opacity = 0.18;
  activateSUVs();
  deactivateCars();
  deactivateColors();
  deactivateButton();
  progress.style.width = progress1;
}
suv.addEventListener('click', suvClick);

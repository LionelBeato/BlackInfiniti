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

const viewCarClick = () => {
  window.location.href = './selectVehicle.html';
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
  deactivateColors();
  red.style.opacity = 1;
}

const midnightClick = () => {
  activateButton();
  deactivateColors();
  midnight.style.opacity = 1;
}

const majesticClick = () => {
  activateButton();
  deactivateColors();
  majestic.style.opacity = 1;
}

const graphiteClick = () => {
  activateButton();
  deactivateColors();
  graphite.style.opacity = 1;
}

const platinumClick = () => {
  activateButton();
  deactivateColors();
  platinum.style.opacity = 1;
}

const iridiumClick = () => {
  activateButton();
  deactivateColors();
  iridium.style.opacity = 1;
}

const haganeClick = () => {
  activateButton();
  deactivateColors();
  hagane.style.opacity = 1;
}

const obsidianClick = () => {
  activateButton();
  deactivateColors();
  obsidian.style.opacity = 1;
}

const whiteClick = () => {
  activateButton();
  deactivateColors();
  white.style.opacity = 1;
}

const mochaClick = () => {
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

const q50Click = () => {
  q60.style.opacity = 0.18;
  q60.removeEventListener('click', q60Click);
  q70.style.opacity = 0.18;
  q70.removeEventListener('click', q70Click);
  q70l.style.opacity = 0.18;
  q70l.removeEventListener('click', q70lClick);
  activateColors();
}

const q60Click = () => {
  q50.style.opacity = 0.18;
  q50.removeEventListener('click', q50Click);
  q70.style.opacity = 0.18;
  q70.removeEventListener('click', q70Click);
  q70l.style.opacity = 0.18;
  q70l.removeEventListener('click', q70lClick);
  activateColors();
}

const q70Click = () => {
  q50.style.opacity = 0.18;
  q50.removeEventListener('click', q50Click);
  q60.style.opacity = 0.18;
  q60.removeEventListener('click', q60Click);
  q70l.style.opacity = 0.18;
  q70l.removeEventListener('click', q70lClick);
  activateColors();
}

const q70lClick = () => {
  q50.style.opacity = 0.18;
  q50.removeEventListener('click', q50Click);
  q60.style.opacity = 0.18;
  q60.removeEventListener('click', q60Click);
  q70.style.opacity = 0.18;
  q70.removeEventListener('click', q70Click);
  activateColors();
}

const carClick = () => {
  car.style.opacity = 1;
  suv.style.opacity = 0.18;
  qx30.style.opacity = 0.18;
  qx50.style.opacity = 0.18;
  qx60.style.opacity = 0.18;
  qx80.style.opacity = 0.18;
  q50.style.opacity = 1;
  q60.style.opacity = 1;
  q70.style.opacity = 1;
  q70l.style.opacity = 1;
  q50.addEventListener('click', q50Click);
  q60.addEventListener('click', q60Click);
  q70.addEventListener('click', q70Click);
  q70l.addEventListener('click', q70lClick);
  deactivateColors();
  deactivateButton();
}
car.addEventListener('click', carClick);


const qx60Click = () => {
  qx30.style.opacity = 0.18;
  qx30.removeEventListener('click', qx30Click);
  qx50.style.opacity = 0.18;
  qx50.removeEventListener('click', q70Click);
  qx80.style.opacity = 0.18;
  qx80.removeEventListener('click', qx80Click);
  activateColors();
}

const qx30Click = () => {
  qx60.style.opacity = 0.18;
  qx60.removeEventListener('click', qx60Click);
  qx50.style.opacity = 0.18;
  qx50.removeEventListener('click', qx50Click);
  qx80.style.opacity = 0.18;
  qx80.removeEventListener('click', qx80Click);
  activateColors();
}

const qx50Click = () => {
  qx60.style.opacity = 0.18;
  qx60.removeEventListener('click', qx60Click);
  qx30.style.opacity = 0.18;
  qx30.removeEventListener('click', qx30Click);
  qx80.style.opacity = 0.18;
  qx80.removeEventListener('click', qx80Click);
  activateColors();
}

const qx80Click = () => {
  qx60.style.opacity = 0.18;
  qx60.removeEventListener('click', qx60Click);
  qx30.style.opacity = 0.18;
  qx30.removeEventListener('click', qx30Click);
  qx50.style.opacity = 0.18;
  qx50.removeEventListener('click', qx50Click);
  activateColors();
}

const suvClick = () => {
  suv.style.opacity = 1;
  car.style.opacity = 0.18;
  qx30.style.opacity = 1;
  qx50.style.opacity = 1;
  qx60.style.opacity = 1;
  qx80.style.opacity = 1;
  q50.style.opacity = 0.18;
  q60.style.opacity = 0.18;
  q70.style.opacity = 0.18;
  q70l.style.opacity = 0.18;
  qx30.addEventListener('click', qx30Click);
  qx50.addEventListener('click', qx50Click);
  qx60.addEventListener('click', qx60Click);
  qx80.addEventListener('click', qx80Click);
  deactivateColors();
  deactivateButton();
}
suv.addEventListener('click', suvClick);

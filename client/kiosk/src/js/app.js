/* ====-====-====-====-====
            Slider
   ====-====-====-====-==== */

const modelsArr = ['Q50', 'Q70', 'QX30', 'QX50', 'QX80'];
const modelColors = {
  Q50: ['Majestic White', 'Hermosa Blue', 'Liquid Platinum', 'Black Obsidian', 'Graphite Shadow'],
  Q70: ['Majestic White', 'Hermosa Blue', 'Liquid Platinum', 'Black Obsidian', 'Graphite Shadow'],
  QX30: ['Majestic White', 'Hermosa Blue', 'Liquid Platinum', 'Black Obsidian', 'Graphite Shadow'],
  QX50: ['Majestic White', 'Hermosa Blue', 'Liquid Platinum', 'Black Obsidian', 'Graphite Shadow'],
  QX70: ['Majestic White', 'Hermosa Blue', 'Liquid Platinum', 'Black Obsidian', 'Graphite Shadow']
};

init();

function init() {
  populateModelSlider();
  activateFlipster();
}

function populateModelSlider() {
  const $flipsterUL = $('.my-flipster ul');
  for(let i = 0; i < modelsArr.length; i++) {
    $flipsterUL.append(`<li><a><img src="img/model-slider/${modelsArr[i]}.jpg"/></a><h2>${modelsArr[i]}</h2></li>`)
  }
}

$('.my-flipster a').on('click', e => {
  e.preventDefault();
  if(e.target.src.includes('model-slider')) {
    // const model = e.target.src.match(/.+\/(.+)\.jpg$/);
    const model = e.currentTarget.nextElementSibling.textContent;
    console.log(model);
    populateColorSlider(model);
    const myFlipster = activateFlipster();
    myFlipster.flipster('index');
    const middleIndex = findMiddleIndex(model);
    myFlipster.flipster('jump', middleIndex);
  } else if(e.target.src.includes('color-slider')) {

  }
});

function populateColorSlider(model) {
  const imagesArr = modelColors[model];
  let html = '';
  for(let i = 0; i < imagesArr.length; i++) {
    html += `<li><a><img src="img/color-slider/${i + 1}.jpeg"/></a><h2>${model} - ${imagesArr[i]}</h2></li>`
  }
  $('.my-flipster ul').html(html);
}

function findMiddleIndex(model) {
  const indices = modelColors[model].length;
  return Math.floor(indices / 2);
}


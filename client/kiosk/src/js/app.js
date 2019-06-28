/* ====-====-====-====-====
            Slider
   ====-====-====-====-==== */

const $flipsterUL = $('.my-flipster ul');
const modelsArr = ['Q50', 'Q70', 'QX30', 'QX50', 'QX80'];
const modelColors = {
  Q50: ['Majestic White', 'Hermosa Blue', 'Liquid Platinum', 'Black Obsidian', 'Graphite Shadow'],
  Q70: ['Majestic White', 'Hermosa Blue', 'Liquid Platinum', 'Black Obsidian', 'Graphite Shadow'],
  QX30: ['Graphite Shadow', 'Black Obsidian', 'Magnetic Red', 'Majestic Red', 'Chestnut Bronze', 'Ink Blue'],
  QX50: ['Majestic White', 'Hermosa Blue', 'Liquid Platinum', 'Black Obsidian', 'Graphite Shadow'],
  QX70: ['Majestic White', 'Hermosa Blue', 'Liquid Platinum', 'Black Obsidian', 'Graphite Shadow']
};

init();

$('.my-flipster img').on('click', e => {
  e.preventDefault();
  const target = e.target;
  if(target.src.includes('model-slider')) {
    // Grab model name from h2 content inside selected flipster li 
    const model = target.nextElementSibling.textContent;
    populateSlider('color', model);
    resetFlipster(model);
  } else if(target.src.includes('color-slider')) {
      // display results page
  }
});

function init() {
  populateSlider('model');
  activateFlipster();
}

// Valid type parameters = 'model', color'
function populateSlider(type, model) {
  if(type == 'model') {
    for(let model of modelsArr) {
      $flipsterUL.append(`<li><img src="img/model-slider/${model}.jpg"/><h2>${model}</h2></li>`);
    }
  } else if(type = 'color') {
      const imagesArr = modelColors[model];
      $('.my-flipster ul').empty();
      for(let i = 0; i < imagesArr.length; i++) {
        $('.my-flipster ul').append(`<li><img src="img/color-slider/${model}/${i + 1}.jpeg"/><h2>${model} - ${imagesArr[i]}</h2></li>`);
      }
  }
}

function resetFlipster(model) {
  const myFlipster = activateFlipster();
  myFlipster.flipster('index');
  const middleIndex = Math.floor(modelColors[model].length / 2);
  // Reset flipster so it jumps to the middle index
  myFlipster.flipster('jump', middleIndex);
}

/* ====-====-====-====-====
         Results Page
   ====-====-====-====-==== */


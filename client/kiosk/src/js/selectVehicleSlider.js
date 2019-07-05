/* ====-====-====-====-====
            Slider
   ====-====-====-====-==== */

const $flipsterUL = $('.my-flipster ul');

const vehiclesArr = [
  {
    modelName: 'Q50',
    colors: ['Liquid Platinum', 'Majestic White', 'Hermosa Blue', 'Black Obsidian', 'Graphite Shadow'],
    year: 2019,
    price: 35650
  },
  {
    modelName: 'Q70',
    colors: ['Majestic White', 'Hermosa Blue', 'Liquid Platinum', 'Black Obsidian', 'Graphite Shadow'],
    year: 2019,
    price: 50400
  },
  {
    modelName: 'QX30',
    colors: ['Graphite Shadow', 'Black Obsidian', 'Magnetic Red', 'Majestic White', 'Chestnut Bronze', 'Ink Blue'],
    year: 2019,
    price: 30250
  },
  {
    modelName: 'QX50',
    colors: ['Liquid Platinum', 'Majestic White', 'Hermosa Blue', 'Black Obsidian', 'Graphite Shadow'],
    year: 2019,
    price: 36650
  },
  {
    modelName: 'QX80',
    colors: ['Liquid Platinum', 'Majestic White', 'Hermosa Blue', 'Black Obsidian', 'Graphite Shadow'],
    year: 2019,
    price: 65500
  }
];

init();

$('.my-flipster').on('click', e => {
  e.preventDefault();
  if(e.target.tagName == 'IMG') {
    const target = e.target;
    if(target.src.includes('model-slider')) {
      // Grab model name from h2 content inside selected flipster li 
      const model = target.nextElementSibling.firstElementChild.textContent;
      populateSlider('color', model);
      resetFlipster(model);
    } else if(target.src.includes('color-slider')) {
        // display results page
        const model = target.nextElementSibling.firstElementChild.textContent;
        const color = target.nextElementSibling.lastElementChild.textContent;
        const vehicle = vehiclesArr.filter(vehicle => vehicle.modelName == model)[0];
        const colorImageNum = vehicle.colors.indexOf(color) + 1;
        displayResultsPage(vehicle, color, colorImageNum);
    }
  }
});

function init() {
  populateSlider('model');
  activateFlipster();
}

// Valid type parameters = 'model', color'
function populateSlider(type, model) {
  if(type == 'model') {
    $('.progress-bar').css({'width': 'calc(100% / 6)'});
    for(let vehicle of vehiclesArr) {
      $flipsterUL.append(`<li><img src="img/model-slider/${vehicle.modelName}.jpg"/><h2><span>${vehicle.modelName}</span></h2></li>`);
    }
  } else if(type = 'color') {
      $('.progress-bar').css({'width': 'calc(100% / 6 * 2)'});
      const imagesArr = vehiclesArr.filter(vehicle => vehicle.modelName == model)[0].colors;
      $('.slider h1').text('Choose your vehicle color');
      $('.my-flipster ul').empty();
      for(let i = 0; i < imagesArr.length; i++) {
        $('.my-flipster ul').append(`<li><img src="img/color-slider/${model}/${i + 1}.jpeg"/><h2><span>${model}</span> - <span>${imagesArr[i]}</span></h2></li>`);
      }
  }
}

function resetFlipster(model) {
  const myFlipster = activateFlipster();
  myFlipster.flipster('index');
  const vehicleNumOfColors = vehiclesArr.filter(vehicle => vehicle.modelName == model)[0].colors.length;
  const middleIndex = Math.floor(vehicleNumOfColors / 2);
  // Reset flipster so it jumps to the middle index
  myFlipster.flipster('jump', middleIndex);
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* ====-====-====-====-====
        Results Page
  ====-====-====-====-==== */

function displayResultsPage(vehicle, color, colorImageNum) {
  $('.slider').empty();
  $('.slider').addClass('slider-result');
  $('.progress-bar').css({'width': 'calc(100% / 6 * 3)'});
  let html = `
    <div class="result">
      <div class="row">
        <div class="col">
          <h1 class="text-center">Meet your new Infiniti</h1>
        </div>
      </div>
      <div class="row carselected">
        <div class="col">
          <!-- Vehicle Selected-->
          <img src=img/color-slider/${vehicle.modelName}/${colorImageNum}.jpeg>
        </div>
      </div>
      <div class="row vehicle-info">
        <!--Vehicle Information -->
        <p class="col">${vehicle.year} ${vehicle.modelName} ${color} - <span> $${numberWithCommas(vehicle.price)}<span></p>
      </div>
      <div class="buttonrow" class="row">
        <!--Buttons  Row-->
        <div class="col">
          <a href="http://localhost:8080/clientProfile"><button type="button" class="btn btn-outline-secondary">I Want it!</button></a>
        </div>
        <div class="col">
          <a href="http://localhost:8080/welcome"><button type="button" class="btn btn-outline-secondary">Let's Start Over!</button></a>
        </div>
      </div>
    </div>`;
    $('.slider').append(html);
}
   
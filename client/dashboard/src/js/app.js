
// const proxyUrl = 'https://intense-taiga-18060.herokuapp.com';
const targetUrl = 'http://127.0.0.1:8080/saleRequests'
const fetchData = () =>
  fetch(targetUrl)
    .then(res => res.json());

const myQueue = document.getElementById("queueContent");
myQueue.innerHTML = "";
myQueue.innerHTML += `<div class="row" style=";color:black;width:94vw;margin:0.8rem;margin-top:0;font-size:1.5rem;font-weight:600;">`
  + `<div class="col-md-1">Ticket</div>`
  + `<div class="col-md-3">Client Name</div>`
  + `<div class="col-md-1">Year</div>`
  + `<div class="col-md-3">Color</div>`
  + `<div class="col-md-1">Model</div>`
  + `<div class="col-md-2">Price</div>`
  + `</div>`;


const populateLine = (ticket) => {
  const lineID = `ticket${ticket.ticketID}`;

  const div = document.createElement('div');
  div.className = "row";
  div.id = lineID;
  div.style = "width:94vw;margin:0.8rem;background-color:#eee;font-size:1.4rem;";

  myQueue.appendChild(div);
  const myDiv = document.getElementById(lineID);
  myDiv.innerHTML = `<div class="col-md-1">${ticket.ticketID}</div>`
    + `<div class="col-md-3">${ticket.firstName} ${ticket.lastName}</div>`
    + `<div class="col-md-1">${ticket.modelYear}</div>`
    + `<div class="col-md-3">${ticket.color}</div>`
    + `<div class="col-md-1">${ticket.model}</div>`
    + `<div class="col-md-2">\$${numberWithCommas(ticket.retailPrice)}</div>`;

  const mouseOver = () => { myDiv.style.opacity = 0.5;}
  myDiv.addEventListener('mouseover', mouseOver);
  const mouseOut = () => { myDiv.style.opacity = 1; console.log(myDiv.style) }
  myDiv.addEventListener('mouseout', mouseOut);
  const myFunction = () => { viewTicket(ticket, myQueue) }
  myDiv.addEventListener('click', myFunction);

}

fetchData().then(data => {
  data.forEach(ticket => {

    populateLine(ticket)
  });
});
const viewTicket = (ticket, target) => {
  document.getElementById("screenName").innerHTML = `Sale Request Ticket #${ticket.ticketID}`;
  target.innerHTML = "";
  target.innerHTML += `<div class="row" style="width:94vw;margin:0.8rem;font-size:1.3rem;">`
    + `<div class="col-md-12">`
    + `<div class="card text-white bg-light">`
    + `<div class="card-header"><button id="confirmButton" type="button" class="btn btn-outline-secondary">Remove From Queue</button></div>`
    + `<div class="card-body">`
    + `<div class="row">`
    + `<div class="col-md-12">`
    + `<div class="card text-white bg-secondary">`
    + `<div class="card-header">${ticket.firstName} ${ticket.lastName}</div>`
    + `<div class="card-body">`
    + `<div>${ticket.phoneNumber}</div>`
    + `<div>${ticket.email}</div>`
    + `<div>${ticket.address}</div>`
    + `</div>`
    + `</div>`
    + `</div>`
    + `</div>`
    + `<div class="row">`
    + `<div class="col-md-12">`
    + `<div class="card text-white bg-secondary">`
    + `<div class="card-header">${ticket.modelYear} ${ticket.make} ${ticket.model}, Stock #${ticket.stockNumber}</div>`
    + `<div class="card-body">`
    + `<div>Retial: \$${numberWithCommas(ticket.retailPrice)}, Whole Sale: \$${numberWithCommas(ticket.wholesaleCost)}</div>`
    + `<div>Color: ${ticket.color}</div>`
    + `${truckInfo(ticket)}`
    + `</div>`
    + `</div>`
    + `</div>`
    + `</div>`
    + `</div>`
    + `</div>`
    + `</div>`
    + `</div>`
    + `</div>`
    + `</div>`;

  const deleteAlert = () => {
    let answer = confirm(`Are you sure you want to remove Ticket #${ticket.ticketID}?`);
    if (answer) {
      fetch(`http://127.0.0.1:8080/saleRequestDelete/${ticket.ticketID}`);
      answer = confirm("If the sale was completed, remove from inventory?");
      if (answer) {
        fetch(`http://127.0.0.1:8080/vehicleDelete/${ticket.stockNumber}`);
        alert(`Vehicle Stock #${ticket.stockNumber} removed from inventory.`);
        location.reload();
      }
      else {
        alert(`Vehicle Stock #${ticket.stockNumber} was not removed from inventory.`);
        location.reload();
      }
    }
  }
  document.getElementById("confirmButton").addEventListener('click', deleteAlert);
  }


  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const truckInfo = (ticket) => {
    if (ticket.vehicleType === "TRUCK") {
      return `GCW: ${numberWithCommas(ticket.grossCombinedWeight)} lbs., Towing: ${numberWithCommas(ticket.towingCapacity)} lbs., Truck Weight: ${numberWithCommas(ticket.truckWeight)} lbs., 4WD: Yes`;
    }
    else {
      return "";
    }
  }

  const setEmployeeName = (name) => {
    document.getElementById("employee-name").innerHTML = `<h4 style="font-weight: normal">${name}</h4>`
  }

// setEmployeeName("Max Proffet")

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(array => {
//   const random = Math.floor(Math.random() * 10);
//   setEmployeeName(array[random].name)
// })

const fetchData = () => 
  fetch('http://127.0.0.1:5500/data/data.json')
  .then(res => res.json());

const myQueue = document.getElementById("queueContent");
myQueue.innerHTML = "";
myQueue.innerHTML += `<div class="row" style="background-color:black;color:white;width:94vw;margin:0.8rem;margin-top:0;font-size:1.5rem;">`
 + `<div class="col-md-1">ID</div>`
 + `<div class="col-md-3">Name</div>`
 + `<div class="col-md-1">Year</div>`
 + `<div class="col-md-3">Color</div>`
 + `<div class="col-md-1">Model</div>`
 + `<div class="col-md-2">Price</div>`
 + `</div>`;


const populateLine = (ticket) => {
  const lineID = `ticket${ticket.saleRequestID}`;

  const div = document.createElement('div');
  div.className="row";
  div.id = lineID; 
  div.style="width:94vw;margin:0.8rem;background-color:#eee;font-size:1.5rem;";

  myQueue.appendChild(div);
  const myDiv = document.getElementById(lineID);
  myDiv.innerHTML = `<div class="col-md-1">${ticket.saleRequestID}</div>`
   + `<div class="col-md-3">${ticket.client.firstName} ${ticket.client.lastName}</div>`
   + `<div class="col-md-1">${ticket.vehicle.year}</div>`
   + `<div class="col-md-3">${ticket.vehicle.color}</div>`
   + `<div class="col-md-1">${ticket.vehicle.model}</div>`
   + `<div class="col-md-2">\$${numberWithCommas(ticket.vehicle.retailPrice)}</div>`;

    const myFunction = () => { viewTicket(ticket, myQueue) }
    myDiv.addEventListener('click', myFunction);
}

fetchData().then(data => {
  data.forEach(ticket => {
    populateLine(ticket)});
});

const viewTicket = (ticket, target) => {
  document.getElementById("screenName").innerHTML = `Sale Request Ticket #${ticket.saleRequestID}`;
  target.innerHTML = "";
  target.innerHTML += `<div class="row" style="width:94vw;margin:0.8rem;font-size:1.5rem;">`
   + `<div class="col-md-12">`
   + `<div class="card text-white bg-light">`
   + `<div class="card-header"><button id="alertButton" type="button" class="btn btn-outline-secondary">Remove From Queue</button></div>`
   + `<div class="card-body">`
   + `<div class="row">`
   + `<div class="col-md-12">`
   + `<div class="card text-white bg-secondary">`
   + `<div class="card-header">${ticket.client.firstName} ${ticket.client.lastName}</div>`
   + `<div class="card-body">`
   + `<div>${ticket.client.phoneNumber}</div>`
   + `<div>${ticket.client.email}</div>`
   + `<div>${ticket.client.address}, ${ticket.client.city}, ${ticket.client.state} ${ticket.client.zip}</div>`
   + `</div>`
   + `</div>`
   + `</div>`
   + `</div>`
   + `<div class="row">`
   + `<div class="col-md-12">`
   + `<div class="card text-white bg-secondary">`
   + `<div class="card-header">${ticket.vehicle.year} ${ticket.vehicle.make} ${ticket.vehicle.model}, Stock #${ticket.vehicle.stockNumber}</div>`
   + `<div class="card-body">`
   + `<div>Retial: \$${numberWithCommas(ticket.vehicle.retailPrice)}, Whole Sale: \$${numberWithCommas(ticket.vehicle.wholeSalePrice)}</div>`
   + `<div>Color: ${ticket.vehicle.color}</div>`
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
     const answer = confirm("If the sale was completed, remove from inventory?");
     if (answer) {
       alert(`Vehicle Stock #${ticket.vehicle.stockNumber} removed from inventory.`);
       location.reload();
     }
     else {
      alert(`Vehicle Stock #${ticket.vehicle.stockNumber} was not removed from inventory.`);
      location.reload();
     }
   }
   document.getElementById("alertButton").addEventListener('click', deleteAlert);
}


const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const truckInfo = (ticket) => {
  if (ticket.vehicle.vehicleType === "TRUCK") {
    return `GCW: ${numberWithCommas(ticket.vehicle.grossCombinedWeight)} lbs., Towing: ${numberWithCommas(ticket.vehicle.towingCapacity)} lbs., Truck Weight: ${numberWithCommas(ticket.vehicle.truckWeight)} lbs., 4WD: Yes`;
  }
  else {
    return "";
  }
}

const setEmployeeName = (name) => {
  document.getElementById("employee-name").innerHTML = `<h4 style="font-weight: normal">${name}</h4>`
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(array => {
  const random = Math.floor(Math.random() * 10);
  setEmployeeName(array[random].name)
})
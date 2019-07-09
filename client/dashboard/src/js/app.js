const targetUrl = 'http://127.0.0.1:8080'

let typeOfSale = "";
const setTypeOfSale = (type) => {
  typeOfSale = type;
}
setTypeOfSale(document.getElementsByTagName("body")[0].id)

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
  const lineID = `ticket${ticket.saleRequest.ticketID}`;

  const div = document.createElement('div');
  div.className = "row";
  div.id = lineID;
  div.style = "width:94vw;margin:0.8rem;background-color:#eee;font-size:1.4rem;";

  myQueue.appendChild(div);
  const myDiv = document.getElementById(lineID);
  myDiv.innerHTML = `<div class="col-md-1">${ticket.saleRequest.ticketID}</div>`
    + `<div class="col-md-3">${ticket.client.firstName} ${ticket.client.lastName}</div>`
    + `<div class="col-md-1">${ticket.vehicle.modelYear}</div>`
    + `<div class="col-md-3">${ticket.vehicle.color}</div>`
    + `<div class="col-md-1">${ticket.vehicle.model}</div>`
    + `<div class="col-md-2">\$${numberWithCommas(ticket.vehicle.retailPrice)}</div>`;

  const mouseOver = () => { myDiv.style.opacity = 0.5; }
  myDiv.addEventListener('mouseover', mouseOver);
  const mouseOut = () => { myDiv.style.opacity = 1; console.log(myDiv.style) }
  myDiv.addEventListener('mouseout', mouseOut);
  const myFunction = () => { viewTicket(ticket, myQueue) }
  myDiv.addEventListener('click', myFunction);

}

(async () => {
  const saleRequestJSON = await fetch(`${targetUrl}/saleRequests`);
  const saleRequestData = await saleRequestJSON.json();
  for (let ticket in saleRequestData) {
    if (saleRequestData[ticket].typeOfSale === typeOfSale) {
      const clientJSON = await fetch(`${targetUrl}/client/${saleRequestData[ticket].id}`);
      const clientData = await clientJSON.json();
      const vehicleJSON = await fetch(`${targetUrl}/vehicle/${saleRequestData[ticket].stockNumber}`);
      const vehicleData = await vehicleJSON.json();
      const saleRequestObject = {
        saleRequest: saleRequestData[ticket],
        client: clientData,
        vehicle: vehicleData
      }
      populateLine(saleRequestObject);
    }
  }
})();

const viewTicket = (ticket, target) => {
  document.getElementById("screenName").innerHTML = `Sale Request Ticket #${ticket.saleRequest.ticketID}`;
  target.innerHTML = "";
  target.innerHTML += `<div class="row" style="width:94vw;margin:0.8rem;font-size:1.3rem;">`
    + `<div class="col-md-12">`
    + `<div class="card text-white bg-light">`
    + `<div class="card-header"><button id="confirmButton" type="button" class="btn btn-outline-secondary">Remove From Queue</button></div>`
    + `<div class="card-body">`
    + `<div class="row">`
    + `<div class="col-md-12">`
    + `<div class="card text-white bg-secondary">`
    + `<div class="card-header">${ticket.client.firstName} ${ticket.client.lastName}</div>`
    + `<div class="card-body">`
    + `<div>${ticket.client.phoneNumber}</div>`
    + `<div>${ticket.client.email}</div>`
    + `<div>${ticket.client.address}</div>`
    + `</div>`
    + `</div>`
    + `</div>`
    + `</div>`
    + `<div class="row">`
    + `<div class="col-md-12">`
    + `<div class="card text-white bg-secondary">`
    + `<div class="card-header">${ticket.vehicle.modelYear} ${ticket.vehicle.make} ${ticket.vehicle.model}, Stock #${ticket.vehicle.stockNumber}</div>`
    + `<div class="card-body">`
    + `<div>Color: ${ticket.vehicle.color}</div>`
    + `<div>Retail: \$${numberWithCommas(ticket.vehicle.retailPrice)}, Wholesale: \$${numberWithCommas(ticket.vehicle.wholesaleCost)}</div>`
    + `${truckInfo(ticket.vehicle)}`
    + `${leaseInfo(ticket)}`
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
    let answer = confirm(`Are you sure you want to remove Ticket #${ticket.saleRequest.ticketID}?`);
    if (answer) {
      fetch(`http://127.0.0.1:8080/saleRequestDelete/${ticket.saleRequest.ticketID}`);
      answer = confirm("If the sale was completed, remove from inventory?");
      if (answer) {
        fetch(`http://127.0.0.1:8080/vehicleDelete/${ticket.vehicle.stockNumber}`);
        alert(`Vehicle Stock #${ticket.vehicle.stockNumber} removed from inventory.`);
        location.reload();
      }
      else {
        alert(`Vehicle Stock #${ticket.vehicle.stockNumber} was not removed from inventory.`);
        location.reload();
      }
    }
  }
  document.getElementById("confirmButton").addEventListener('click', deleteAlert);
}


const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const truckInfo = (vehicle) => {
  if (vehicle.vehicleType === "TRUCK") {
    return `GCW: ${numberWithCommas(vehicle.grossCombinedWeight)} lbs., Towing: ${numberWithCommas(vehicle.towingCapacity)} lbs., Truck Weight: ${numberWithCommas(vehicle.truckWeight)} lbs., 4WD: Yes`;
  }
  else {
    return "";
  }
}

const leaseInfo = (ticket) => {
  if (ticket.saleRequest.typeOfSale === "Lease") {
    return `Lease Term: ${ticket.vehicle.leaseTerm} Months, Miles Per Year: ${numberWithCommas(ticket.vehicle.maxMilesPerYear)}`;
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

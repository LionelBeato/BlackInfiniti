
const viewTicket = (id, target) => {
  document.getElementById("screenName").innerHTML = `Sale Request Ticket #${id}`;
  target.innerHTML = "";
}

const myQueue = document.getElementById("queueContent");
myQueue.innerHTML = "";
myQueue.innerHTML += `<div class="row" style="background-color:black;color:white;width:94vw;margin:0.8rem;margin-top:0;font-size:1.5rem;">`
 + `<div class="col-md-1">ID</div>`
 + `<div class="col-md-2">First</div>`
 + `<div class="col-md-2">Last</div>`
 + `<div class="col-md-1">Year</div>`
 + `<div class="col-md-2">Color</div>`
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
   + `<div class="col-md-2">${ticket.client.firstName}</div>`
   + `<div class="col-md-2">${ticket.client.lastName}</div>`
   + `<div class="col-md-1">${ticket.vehicle.year}</div>`
   + `<div class="col-md-2">${ticket.vehicle.color}</div>`
   + `<div class="col-md-1">${ticket.vehicle.model}</div>`
   + `<div class="col-md-2">\$${ticket.vehicle.retailPrice}</div>`;

    const myFunction = () => { viewTicket(ticket.saleRequestID, myQueue)}
    myDiv.addEventListener('click', myFunction);
}

const fetchData = () => 
  fetch('./data/data.json')
  .then(res => res.json());

fetchData().then(data => {
  data.saleRequests.forEach(ticket => {
    populateLine(ticket)});
});




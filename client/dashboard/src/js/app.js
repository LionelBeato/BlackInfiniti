
const myJSON = {
  "saleRequests":
    [
      {
        "saleRequestID": "1",
        "client": {
          "id": 1,
          "firstName": "Mamadou",
          "lastName": "Wann",
          "phoneNumber": "555-867-5309",
          "address": "20 Church St.",
          "city": "Hartford",
          "state": "CT",
          "zip": "06103"
        },
        "vehicle": {
          "wholeSalePrice": 59500,
          "retailPrice": 62590,
          "year": 2019,
          "make": "Infiniti",
          "model": "QX80",
          "color": "Pearl White",
          "vin": "JN8AY3887BH222D9S",
          "vehicleType": "TRUCK",
          "isLeasable": true,
          "leaseTerm": 36,
          "maxMilesPerYear": 12000,
          "grossCombinedWeight": 8500,
          "towingCapacity": 15000,
          "truckWeight": 7385,
          "is4wd": true
        }
      },
      {
        "saleRequestID": "2",
        "client": {
          "id": 1,
          "firstName": "Betsy",
          "lastName": "Idilbi",
          "phoneNumber": "555-867-5309",
          "address": "20 Church St.",
          "city": "Hartford",
          "state": "CT",
          "zip": "06103"
        },
        "vehicle": {
          "wholeSalePrice": 59500,
          "retailPrice": 64200,
          "year": 2019,
          "make": "Infiniti",
          "model": "QX30",
          "color": "Black",
          "vin": "JN8AY3887BH222D9S",
          "vehicleType": "TRUCK",
          "isLeasable": true,
          "leaseTerm": 36,
          "maxMilesPerYear": 12000,
          "grossCombinedWeight": 8500,
          "towingCapacity": 15000,
          "truckWeight": 7385,
          "is4wd": true
        }
      }
    ]
};

const viewTicket = (id, target) => {
  document.getElementById("screenName").innerHTML = `Sale Request Ticket #${id}`;
  target.innerHTML = "";
}

const myQueue = document.getElementById("queueContent");
myQueue.innerHTML = "";

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

populateLine(myJSON.saleRequests[0]);
populateLine(myJSON.saleRequests[1]);




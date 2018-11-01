'use strict';
// This is the variable that is an array we will use to pass the constructor object when it is instantiated.
var storeLocation = [];

// This is log the information in the constructor function
console.log('This', this);

// This is the blueprint. This is the constructor function. It specifies how each store in constructed.
function Locationsdfds(nameOfStore, minCusPerhr, maxCusPerhr, aveNumCookSale, openHour) {
  this.nameOfStore = nameOfStore; // Name of each location
  this.minCusPerhr = minCusPerhr; // Minimum number of customers per hour
  this.maxCusPerhr = maxCusPerhr; // Maximum number of customers per hour
  this.aveNumCookSale = aveNumCookSale; // Average number of cookies sold per day
  this.customerPerHour = []; // Customers per hour
  this.cookiePerHour = []; // Cookies sold per hour
  this.openHour = openHour; // Hours of operation
  this.totalCookiePerDay = 0; //Total cookies sold per day

  storeLocation.push(this); // Pushing the values

  this.addcustomerPerHour(this.minCusPerhr, this.maxCusPerhr);
  this.addhourlySales(); //called this function in the right place to trigger data generation.
  this.render();
}

Locationsdfds.prototype.addcustomerPerHour = function (min, max) {
  for (var i = 0; 1 < this.openHour.length; i++) {
    var randomNumberOfCustomer = Math.round(Math.random() * (max - min + 1) + min);
    this.customerPerHour.push(randomNumberOfCustomer);
  }
};

// Will generate number of customers per hour using the minimum customer and maximum customer
Locationsdfds.prototype.addcustomerPerHour = function () {
  // Loop to create and push a cookie per hour amount to pair with each hour open
  for (var i = 0; 1 < this.openHour.length; i++) {
    var perHour = Math.round(this.customerPerHour[i] * this.aveNumCookSale);
    this.cookiePerHour.push(perHour);
    //creates a total amount of cookies for the whole day by addding up each cookies per hour amount
    this.totalCookiePerDay += perHour;
  }
};
// Creating table elements and what information goes inside of each data field
Locationsdfds.prototype.render = function () {
  var cookieStandTableBodyEl = document.getElementById('tble-body'); // Anchors to sales.html
  //var cookieStandTableHeaderEl = document.createElement('Table Header'); // Creates a table header element
  var cookieStandTableRowEl = document.createElement('Table Row'); // Creates a table row element
  var cookieStandTableHeadEl = document.createElement('Table Head'); // Creates a table head element

  cookieStandTableHeadEl.textContent = this.storeLocation;
  cookieStandTableRowEl.textContent = (cookieStandTableHeadEl);

  for (var i = 0; i < this.openHour.length; i++) {
    var tableDataEl = document.createElement('Table Data');
    tableDataEl.textContent = this.cookiePerHour[i];
    cookieStandTableRowEl.appendChild(tableDataEl);
  }
  cookieStandTableBodyEl.appendChild(cookieStandTableRowEl);

  // cookieStandTableHeadEl.appendChild(cookieStandTableBodyEl); // This is appending the th element to the table body
  // cookieStandTableBodyEl.appendChild(cookieStandTableBodyEl); // This is appending the th element to the table body

  // cookieStandTableHeadEl.textContent = this.openHour; // This defines the content the th as the hours open

  // cookieStandTableRowEl.appendChild(cookieStandTableHeadEl) // This appends tr to the th

  // cookieStandTableRowEl.textContent = this.storeLocation; // This defines the content of tr as the different location

  // var totalCookiePerDayElement = document.createElement('Table Data') // Creates td element for adding cells to the tr element

  // totalCookiePerDayElement.textContent = this.cookiePerHour; // Provide content to td element

  // totalCookiePerDayElement.appendChild(cookieStandTableRowEl);

  // cookieStandTableBodyEl.appendChild(cookieStandTableRowEl);

};

function createCookieStandHeaderTable() {
  var cookieStandTableHeaderElement = document.createElement('thead');
  cookieStandTableHeaderElement.id = 'tbl-head';
  return cookieStandTableHeaderElement;
}

function createCookieStandFooterTable() {
  var cookieStandTableFooterElement = document.createElement('tfoot');
  cookieStandTableFooterElement.id = 'tbl-foot';
  return cookieStandTableFooterElement;
}

function createCookieStandTable() { // This function is used to establish one single table in the DOM for us to work with when we start rendering individual rows for each store.
  var mainCookieStandTable = document.getElementById('cookiesCalculated');
  var mainCookieStandTableElem = document.createElement('table');
  var mainCookieStandTableBodyElement = document.createElement('tbody');

  mainCookieStandTableElem.id = 'daily-sales-table';
  mainCookieStandTableBodyElement.id = 'tbl-body';

  mainCookieStandTable.appendChild(mainCookieStandTableElem);
  mainCookieStandTableElem.appendChild(createCookieStandHeaderTable());
  mainCookieStandTableElem.appendChild(mainCookieStandTableBodyElement);
  mainCookieStandTableElem.appendChild(createCookieStandFooterTable());
}

createCookieStandTable();

// Inputs to create, then display with locations
//var firstAndPike = new Locationsdfds('1st & Pike', 23, 65, 6.3);
new Locationsdfds('firstAndPike', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',]);
new Locationsdfds('SeaTac Airport', 23, 65, 6.3);
new Locationsdfds('Seattle Center', 23, 65, 6.3);
new Locationsdfds('Capitol Hill', 23, 65, 6.3);
new Locationsdfds('Alki', 23, 65, 6.3);

//This will produce each stores information.
console.log(Locationsdfds);

// var storeOne = {
//   nameofStore: '1st & Pike',
//   minCusPerhr: 23,
//   maxCusPerhr: 65,
//   aveNumCookSale: 6.3,
//   openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

//   randomN: function() {
//     var ranNum = Math.round(
//       Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
//     );
//     return Math.round(ranNum * this.aveNumCookSale);
//   },

//   render() {
//     var container = document.createElement('section');
//     var nameStore = document.createElement('h3');
//     var salesList = document.createElement('ul');

//     nameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < this.openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement('li');
//       txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
//       salesList.appendChild(txtOut);
//     }
//     var totaltxt = document.createElement('li');
//     totaltxt.textContent = `Total: ${totalCookies} cookies`;
//     salesList.appendChild(totaltxt);

//     container.appendChild(nameStore);
//     container.appendChild(salesList);

//     var main = document.getElementById('cookiesCalculated');
//     main.appendChild(container);
//   }
// };
// storeOne.render();

// var storeTwo = {
//   nameofStore: 'SeaTac Airport',
//   minCusPerhr: 3,
//   maxCusPerhr: 24,
//   aveNumCookSale: 1.2,
//   openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

//   randomN: function() {
//     var ranNum = Math.round(
//       Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
//     );
//     return Math.round(ranNum * this.aveNumCookSale);
//   },

//   render() {
//     var container = document.createElement('section');
//     var nameStore = document.createElement('h3');
//     var salesList = document.createElement('ul');

//     nameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < this.openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement('li');
//       txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
//       salesList.appendChild(txtOut);
//     }
//     var totaltxt = document.createElement('li');
//     totaltxt.textContent = `Total: ${totalCookies} cookies`;
//     salesList.appendChild(totaltxt);

//     container.appendChild(nameStore);
//     container.appendChild(salesList);

//     var main = document.getElementById('cookiesCalculated');
//     main.appendChild(container);
//   }
// };
// storeTwo.render();

// var storeThree = {
//   nameofStore: 'Seattle Center',
//   minCusPerhr: 20,
//   maxCusPerhr: 38,
//   aveNumCookSale: 2.3,
//   openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

//   randomN: function() {
//     var ranNum = Math.round(
//       Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
//     );
//     return Math.round(ranNum * this.aveNumCookSale);
//   },

//   render() {
//     var container = document.createElement('section');
//     var nameStore = document.createElement('h3');
//     var salesList = document.createElement('ul');

//     nameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < this.openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement('li');
//       txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
//       salesList.appendChild(txtOut);
//     }
//     var totaltxt = document.createElement('li');
//     totaltxt.textContent = `Total: ${totalCookies} cookies`;
//     salesList.appendChild(totaltxt);

//     container.appendChild(nameStore);
//     container.appendChild(salesList);

//     var main = document.getElementById('cookiesCalculated');
//     main.appendChild(container);
//   }
// };
// storeThree.render();

// var storeFour = {
//   nameofStore: 'Capital Hill',
//   minCusPerhr: 20,
//   maxCusPerhr: 38,
//   aveNumCookSale: 2.3,
//   openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

//   randomN: function() {
//     var ranNum = Math.round(
//       Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
//     );
//     return Math.round(ranNum * this.aveNumCookSale);
//   },

//   render() {
//     var container = document.createElement('section');
//     var nameStore = document.createElement('h3');
//     var salesList = document.createElement('ul');

//     nameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < this.openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement('li');
//       txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
//       salesList.appendChild(txtOut);
//     }
//     var totaltxt = document.createElement('li');
//     totaltxt.textContent = `Total: ${totalCookies} cookies`;
//     salesList.appendChild(totaltxt);

//     container.appendChild(nameStore);
//     container.appendChild(salesList);

//     var main = document.getElementById('cookiesCalculated');
//     main.appendChild(container);
//   }
// };
// storeFour.render();

// var storeFive = {
//   nameofStore: 'Alki',
//   minCusPerhr: 20,
//   maxCusPerhr: 38,
//   aveNumCookSale: 2.3,
//   openHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],

//   randomN: function() {
//     var ranNum = Math.round(
//       Math.random() * (this.maxCusPerhr - this.minCusPerhr) + this.minCusPerhr
//     );
//     return Math.round(ranNum * this.aveNumCookSale);
//   },

//   render() {
//     var container = document.createElement('section');
//     var nameStore = document.createElement('h3');
//     var salesList = document.createElement('ul');

//     nameStore.textContent = this.nameofStore;
//     var totalCookies = 0;
//     for (var i = 0; i < this.openHours.length; i++) {
//       var ret = this.randomN();
//       totalCookies += ret;
//       var txtOut = document.createElement('li');
//       txtOut.textContent = `${this.openHours[i]}: ${ret} cookies`;
//       salesList.appendChild(txtOut);
//     }
//     var totaltxt = document.createElement('li');
//     totaltxt.textContent = `Total: ${totalCookies} cookies`;
//     salesList.appendChild(totaltxt);

//     container.appendChild(nameStore);
//     container.appendChild(salesList);

//     var main = document.getElementById('cookiesCalculated');
//     main.appendChild(container);
//   }
// };
// storeFive.render();
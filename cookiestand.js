'use strict';

var stores = [];
// This is an array that has been assigned a variable. It store stores the hours of operation to be used globally.
var hoursOfOps = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',];

// This is the construed function. It will allow us enter new stores that we pass through this fucntion and create/display them to the table.
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;

  // This pushes the key-value pair to the variable stores.
  stores.push(this);
  // This will display this to the web page.
  this.render();
  // This will create the footer for the table.
  createTableFooter();
}

// This is creating a function and assigning this function the generateRandomCustPerHour variable to use the Store constructor object as it's prototype to use.
Store.prototype.generateRandomCustPerHour = function (min, max) {
  for (var i = 0; i < hoursOfOps.length; i++) {
    var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
    this.custPerHour.push(randomCust);
  }
};

//// This is creating a function and assigning this function the generateHourlySales variable to use the Store constructor object as it's prototype to use.
Store.prototype.generateHourlySales = function () {
  // Line below will populate custPerHour array
  this.generateRandomCustPerHour(this.min, this.max);
  for (var i = 0; i < hoursOfOps.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avg);
    this.cookiesPerHour.push(perHour);

    // this.dailyTotal = this.dailyTotal + perHour;
    this.dailyTotal += perHour;
  }
};

//// This is creating a function and assigning this function the render variable to use the Store constructor object as it's prototype to use.
Store.prototype.render = function () {
  // Line below will generate hourly sales, which also generates customers per hour
  this.generateHourlySales();

  // When we use the variable tbody, we are getting the tbl-body(Body Element of the table) element in the HTML. document. refers to the HMTL. get... the element by ID which is 'tbl-body'.
  var tbodyEl = document.getElementById('tbl-body');
  // When we use the variable tbody, we are creating the trEl (Table Row Element of the element) element in the HTML. document. refers to the HMTL. get... the element by ID which is 'tbl-body'.
  var trEl = document.createElement('tr');
  // When we use the variable tbody, we are creating the thEl (Table Head Element of the element) element in the HTML. document. refers to the HMTL. get... the element by ID which is 'tbl-body'.
  var thEl = document.createElement('th');

  // This is calling the constructor object's key-value pairs to as the content it needs to text in the thEl.
  thEl.textContent = this.name;

  // Please explain...
  trEl.appendChild(thEl);

  // This is a for loop. We are starting at 0. We are iterating or looping through the length of hoursOfOps. We are adding going to the next index of th length by 1 time.
  for (var i = 0; i < hoursOfOps.length; i++) {
    // We are creating the td element in the HTML and assigning it the variable tdEl
    var tdEl = document.createElement('td');
    // We are calling the cookies per hour from our constuctor object and passing the loop through it to use th content in it to text it to the tdEl.
    tdEl.textContent = this.cookiesPerHour[i];
    // Please explain...
    trEl.appendChild(tdEl);
  }

  // We are creating the element 'td' in the HTML and assigning it the variable totalEl (totals of each store)
  var totalEl = document.createElement('td');
  // We are call the daily total and texting the content to the total element in the HTML. JavaScript is texting HTML
  totalEl.textContent = this.dailyTotal;
  // Please explain...
  trEl.appendChild(totalEl);
  // Please explain...
  tbodyEl.appendChild(trEl);
};

// We are creating a function that we named createTable
function createTable() {
  // We are retrieving , or anchoring, the main-content to the JavaScript and to get it from the HTML. We are assigning the variable name as mainEl
  var mainEl = document.getElementById('main-content');
  // We are creating an HTML element name table. We are assigning it the variable tableEl. This is the table.
  var tblEl = document.createElement('table');
  // We are assigning the tblEl (table element) the name sales-table
  tblEl.id = 'sales-table';
  //Please explain...
  mainEl.appendChild(tblEl);
}
// We are doing the same as we did with the createTable
function createTableHeader() {
  // variables created in the function
  var tblEl = document.getElementById('sales-table');
  var theadEl = document.createElement('thead');
  var trEl = document.createElement('tr');
  var emptyTh = document.createElement('th');

  // Please explain
  trEl.appendChild(emptyTh);

  // for loop; we are starting at 0. We are going through the entire length while i is less than the length. We are adding one to it.
  for (var i = 0; i < hoursOfOps.length; i++) {
    var thEl = document.createElement('th');
    // We are calling the hours of operation from our constuctor object and passing the loop through it to use th content in it to text it to the thEl.
    thEl.textContent = hoursOfOps[i];
    // Please explain...
    trEl.appendChild(thEl);
  }

  var totalEl = document.createElement('th');
  totalEl.textContent = 'Total';

  trEl.appendChild(totalEl);
  theadEl.appendChild(trEl);
  tblEl.appendChild(theadEl);
}

// Creating a function that creates the table body
function createTableBody() {
  var tblEl = document.getElementById('sales-table');
  var tbodyEl = document.createElement('tbody');
  tbodyEl.id = 'tbl-body';
  tblEl.appendChild(tbodyEl);
}

// Creating a function that creates the foot at the bottom of the table
function createTableFooter() {
  var tfootElCheck = document.getElementById('tbl-foot');
  // We are checking the footer to make sure it's up to date and removing the refresh default 
  if (tfootElCheck) {
    tfootElCheck.remove();
  }

  // We are referencing or getting the sales-table  and makeing it a variable tblEl
  var tblEl = document.getElementById('sales-table');
  // we are creating tfoot and tr in the HTML and assigning them variables
  var tfootEl = document.createElement('tfoot');
  var trEl = document.createElement('tr');

  // Assigning the id tbl-foot to tfootEl
  tfootEl.id = 'tbl-foot';

  // creating th element in HTML and assigning it a variable
  var emptyThEl = document.createElement('th');

  // Please explain
  trEl.appendChild(emptyThEl);

  // We are saying this grandtotal starts at 0 and later will be used to add the totals of each store
  var grandTotal = 0;

  // for loop that runs throught the hours of operation each spot in the index by one increment and documents each index to the td and we are assigning it a variable to be used later.
  for (var i = 0; i < hoursOfOps.length; i++) {
    var tdEl = document.createElement('td');
    var totals = 0;
    // A nested for loop.  Runs through the length of the stores by one incremeent
    for (var j = 0; j < stores.length; j++) {
      // Please explain this...
      totals += stores[j].cookiesPerHour[i];
    }

    tdEl.textContent = totals;
    // Please Explain...
    trEl.appendChild(tdEl);
    // This means grandtotals = grandtotals + totals
    grandTotal += totals;
  }

  // We created a variable, grandTotalEl, and document it in the HTML as 'td'.
  var grandTotalEl = document.createElement('td');

  // The grandTotal is getting it's content texted to it from the grandTotal Element
  grandTotalEl.textContent = grandTotal;

  // Please explain
  trEl.appendChild(grandTotalEl);
  tfootEl.appendChild(trEl);
  tblEl.appendChild(tfootEl);

}
// We created a function run that is encapsulated and has functions within it.
(function run() {
  createTable();
  createTableHeader();
  createTableBody();
})();

// These are the stores that were created. We pushed the new store information  using 'new' through the constructor object.
new Store('First & Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Seattle Center', 2, 16, 4.6);

// We are creating a salesFormEl variable  to be used to get the HTML document element names sales-form
var salesFormEl = document.getElementById('sales-form');

// This is an event listener waiting for the user to press the submit with the mouse.
salesFormEl.addEventListener('submit', function() {});

//We are getting the HTML Element, sales-form and adding an event listener when the submit happens; the function will happen
document.getElementById('sales-form').addEventListener('submit', function(event) {
  // This prevents the defualt from occuring
  event.preventDefault();

  // This is the differnt variables assigned a value to populate in the table that is to be used when we use the new Store syntax.
  var name = event.target.storename.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  // This is the new Store syntax
  new Store(name, min, max, avg);

  // This indicated the values that will be entered by the user which will be inbtween the single qoutes.
  event.target.storename.value = '';
  event.target.min.value = '';
  event.target.max.value = '';
  event.target.avg.value = '';
});



// // This is the variable that is an array we will use to pass the constructor object when it is instantiated.
// var storeLocation = [];

// // This is log the information in the constructor function
// console.log('This', this);

// // This is the blueprint. This is the constructor function. It specifies how each store in constructed.
// function Locationsdfds(nameOfStore, minCusPerhr, maxCusPerhr, aveNumCookSale, openHour) {
//   this.nameOfStore = nameOfStore; // Name of each location
//   this.minCusPerhr = minCusPerhr; // Minimum number of customers per hour
//   this.maxCusPerhr = maxCusPerhr; // Maximum number of customers per hour
//   this.aveNumCookSale = aveNumCookSale; // Average number of cookies sold per day
//   this.customerPerHour = []; // Customers per hour
//   this.cookiePerHour = []; // Cookies sold per hour
//   this.openHour = openHour; // Hours of operation
//   this.totalCookiePerDay = 0; //Total cookies sold per day

//   storeLocation.push(this); // Pushing the values

//   this.addcustomerPerHour(this.minCusPerhr, this.maxCusPerhr);
//   this.addhourlySales(); //called this function in the right place to trigger data generation.
//   this.render();

// }

// Locationsdfds.prototype.addcustomerPerHour = function (min, max) {
//   for (var i = 0; 1 < this.openHour.length; i++) {
//     var randomNumberOfCustomer = Math.round(Math.random() * (max - min + 1) + min);
//     this.customerPerHour.push(randomNumberOfCustomer);
//   }
// };

// // Will generate number of customers per hour using the minimum customer and maximum customer
// Locationsdfds.prototype.addcustomerPerHour = function () {
//   // Loop to create and push a cookie per hour amount to pair with each hour open
//   for (var i = 0; 1 < this.openHour.length; i++) {
//     var perHour = Math.round(this.customerPerHour[i] * this.aveNumCookSale);
//     this.cookiePerHour.push(perHour);
//     //creates a total amount of cookies for the whole day by addding up each cookies per hour amount
//     this.totalCookiePerDay += perHour;
//   }
// };
// // Creating table elements and what information goes inside of each data field
// Locationsdfds.prototype.render = function () {
//   var cookieStandTableBodyEl = document.getElementById('main-content'); // Anchors to sales.html
//   //var cookieStandTableHeaderEl = document.createElement('Table Header'); // Creates a table header element
//   var cookieStandTableRowEl = document.createElement('tr'); // Creates a table row element
//   var cookieStandTableHeadEl = document.createElement('th'); // Creates a table head element

//   cookieStandTableHeadEl.textContent = this.storeLocation;
//   cookieStandTableRowEl.textContent = (cookieStandTableHeadEl);

//   for (var i = 0; i < this.openHour.length; i++) {
//     var tableDataEl = document.createElement('td');
//     tableDataEl.textContent = this.cookiePerHour[i];
//     cookieStandTableRowEl.appendChild(tableDataEl);
//   }
//   cookieStandTableBodyEl.appendChild(cookieStandTableRowEl);

//   // cookieStandTableHeadEl.appendChild(cookieStandTableBodyEl); // This is appending the th element to the table body
//   // cookieStandTableBodyEl.appendChild(cookieStandTableBodyEl); // This is appending the th element to the table body

//   // cookieStandTableHeadEl.textContent = this.openHour; // This defines the content the th as the hours open

//   // cookieStandTableRowEl.appendChild(cookieStandTableHeadEl) // This appends tr to the th

//   // cookieStandTableRowEl.textContent = this.storeLocation; // This defines the content of tr as the different location

//   // var totalCookiePerDayElement = document.createElement('Table Data') // Creates td element for adding cells to the tr element

//   // totalCookiePerDayElement.textContent = this.cookiePerHour; // Provide content to td element

//   // totalCookiePerDayElement.appendChild(cookieStandTableRowEl);

//   // cookieStandTableBodyEl.appendChild(cookieStandTableRowEl);

// };

// function createCookieStandHeaderTable() {
//   var cookieStandTableHeaderElement = document.createElement('thead');
//   cookieStandTableHeaderElement.id = 'tbl-head';
//   return cookieStandTableHeaderElement;
// }

// function createCookieStandFooterTable() {
//   var cookieStandTableFooterElement = document.createElement('tbl-foot');
//   cookieStandTableFooterElement.id = 'tbl-foot';
//   return cookieStandTableFooterElement;
// }

// function createCookieStandTable() { // This function is used to establish one single table in the DOM for us to work with when we start rendering individual rows for each store.
//   var mainCookieStandTable = document.getElementById('main-content');
//   var mainCookieStandTableElem = document.createElement('table');
//   var mainCookieStandTableBodyElement = document.createElement('tbody');

//   mainCookieStandTableElem.id = 'daily-sales-table';
//   mainCookieStandTableBodyElement.id = 'tbl-body';

//   mainCookieStandTable.appendChild(mainCookieStandTableElem);
//   mainCookieStandTableElem.appendChild(createCookieStandHeaderTable());
//   mainCookieStandTableElem.appendChild(mainCookieStandTableBodyElement);
//   mainCookieStandTableElem.appendChild(createCookieStandFooterTable());
// }

// createCookieStandTable();

// // Inputs to create, then display with locations
// //var firstAndPike = new Locationsdfds('1st & Pike', 23, 65, 6.3);
// var firstPike = new Locationsdfds('firstAndPike', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm',]);
// var seatac = new Locationsdfds('SeaTac Airport', 23, 65, 6.3);
// new Locationsdfds('Seattle Center', 23, 65, 6.3);
// new Locationsdfds('Capitol Hill', 23, 65, 6.3);
// new Locationsdfds('Alki', 23, 65, 6.3);

// //This will produce each stores information.
// console.log(Locationsdfds);

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
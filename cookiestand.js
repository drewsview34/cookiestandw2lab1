'use strict';
// This is the variable that is an array we will use to pass the constructor object when it is instantiated.
var storeInformation = [];

// This is log the information in the constructor function
console.log('This', this);

// This is the blueprint. This is the constructor function. It specifies how each store in constructed.
function Store(nameOfStore, minCusPerhr, maxCusPerhr, aveNumCookSale) {
  this.nameOfStore = nameOfStore;
  this.minCusPerhr = minCusPerhr;
  this.maxCusPerhr = maxCusPerhr;
  this.aveNumCookSale = aveNumCookSale;
  this.openHours = [];

// This is log the information in the constructor function
console.log('This', this);



// This is each stores' location, minCustomers, maxCustomers, and Avg Cookie Sales
new Store('1st & Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 23, 65, 6.3);
new Store('Seattle Center', 23, 65, 6.3);
new Store('Capitol Hill', 23, 65, 6.3);
new Store('Alki', 23, 65, 6.3);

//This will produce each stores information.
console.log(storeInformation); 

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
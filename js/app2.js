'use strict'

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '6pm', '5pm', '6pm', '7pm', '8pm'];

const grandTotal = new Array(hours.length +1).fill(0);
let allStores = [];
function Store(location, minCust, maxCust, avgSales){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.dailyTotal = [];
  this.calculateDailyTotal();
  this.renderBody();
  allStores.push(this);
}

Store.prototype.randomNumber = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

Store.prototype.calculateDailyTotal = function(){
  let dailyTotal = 0;
  for(let i = 0; i < hours.length; i++){
    let rando = this.randomNumber();
    let hourlyCalc = Math.ceil(rando * this.avgSales);
    dailyTotal += hourlyCalc;
    this.dailyTotal.push(hourlyCalc);
    grandTotal[i] += hourlyCalc;
  }
  this.dailyTotal.push(dailyTotal);
  grandTotal[grandTotal.length-1] += dailyTotal;
}

Store.prototype.renderBody = function(){
  let body = document.getElementById('table-body');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = this.location
  tr.appendChild(th);
  for(let i = 0; i < this.dailyTotal.length; i++){
    let td = document.createElement('td');
    td.textContent = this.dailyTotal[i];
    tr.appendChild(td);
  }
  body.appendChild(tr);
}

function renderHeader(){
  let header = document.getElementById('table-header');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Location';
  tr.appendChild(td);
  for(let i = 0; i < hours.length; i++){
    td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }
  td = document.createElement('td');
  td.textContent = 'Daily Total';
  tr.appendChild(td);
  header.appendChild(tr);
}

function renderFooter(){
  let footer = document.getElementById('table-footer');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Grand Totals:';
  tr.appendChild(th);
  for(let i = 0; i < grandTotal.length; i++){
    th = document.createElement('th');
    th.textContent = grandTotal[i];
    tr.appendChild(th);
  }
  footer.appendChild(tr);

}

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);
renderHeader();
renderFooter();

function handleFormSubmission(e){
e.preventDefault();
let error = document.getElementById('error');
let {location, minCust, maxCust, avgSales} = e.target;

 for(let i = 0; i < allStores.length; i++){
   if(allStores[i].location === location.value) {
    error.textContent = 'This store location already exists. Please use a different location.'
    return;
   } 
 }

  if(+minCust.value < +maxCust.value) {
    new Store(location.value, +minCust.value, +maxCust.value, +avgSales.value);
    let footer = document.getElementById('table-footer');
    footer.innerHTML = '';
    renderFooter();
    error.innerHTML = '';
    }
  else {
    error.textContent = 'You entered an improper value. Please try again.';
  }
}

let form = document.getElementById('form');
form.addEventListener('submit', handleFormSubmission);
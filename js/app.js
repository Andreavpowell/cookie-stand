'use strict';

console.log('hello world!');

sont locationsDiv = document.getElementById

const hoursOfop = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSalePerCust: 6.3,
  hourlySalesArray: [],
  randomNumberOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOp.length; i++) {
      let salesPerHour = this.randomNumberOfCust() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const tokyo = {
  name: 'Tokyo',
  minCust: 23,
  maxCust: 24,
  avgSalePerCust: 1.2,
  hourlySalesArray: [],
  randomNumberOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOp.length; i++) {
      let salesPerHour = this.randomNumberOfCust() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const dubai = {
  name: 'Dubai',
  minCust: 23,
  maxCust: 65,
  avgSalePerCust: 6.3,
  hourlySalesArray: [],
  randomNumberOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOp.length; i++) {
      let salesPerHour = this.randomNumberOfCust() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSalePerCust: 2.3,
  hourlySalesArray: [],
  randomNumberOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOp.length; i++) {
      let salesPerHour = this.randomNumberOfCust() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSalePerCust: 4.6,
  hourlySalesArray: [],
  randomNumberOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOp.length; i++) {
      let salesPerHour = this.randomNumberOfCust() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

const seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSalePerCust: 6.3,
  hourlySalesArray: [],
  randomNumberOfCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  fillHourlySalesArray: function() {
    for (let i = 0; i < hoursOfOp.length; i++) {
      let salesPerHour = this.randomNumberOfCust() * this.avgSalePerCust;
      this.hourlySalesArray.push(Math.ceil(salesPerHour));
    }
  }
}

function _makeElement(tag, parent, textContent) {
  const element = document.createElement(tag);
  parent.appendChild(element);
  if (text) {  
    element.textContent = text;
    return element;
  }
}

function renderLocation(location) {
  const articleElem = _makeElement('article', locationsDiv, null);
  _makeElement('h3', articleElem, location.name);
  _makeElement('ul', articleElem, null);
  for (let i = 0; i < hoursOfOp.length; i++) {
    const text = `${hoursOfop[i]}: ${location.hourlySalesArray[i]} cookies`;
    total += location.hourlySalesArray[]
    _makeElement('li', ulElem, text)
  }
  const totalsString = `Total: ${total} cookies`;
  _makeElement('li', ulElem, totalsString);
}

const locationsArray = [seattle, tokyo, dubai, paris, lima];

function renderAllLocations() {
  for (let i = 0; i < locationsArray.length; i++) {
    const currentLocation = locationsArray[i];
    currentLocation.fillHourlySalesArray()
    renderLocation(currentLocation);
  }
}
renderAllLocations
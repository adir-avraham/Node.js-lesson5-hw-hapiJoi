const momentRandom = require('moment-random');
const moment = require('moment');
const axios = require('axios');
const writeTofile = require('./utils/writeTofile')

const start = moment('01-12-19', 'DD-MM-YYYY');
const end = moment('30-12-19', 'DD-MM-YYYY');


let flights = []
const generateFlights = () => {
    
    for (let i = 0; i < 3; i++ ) {
        const flight = new Flight;
        flights.push(flight)
    }
    writeTofile('flights.json', flights)
    console.log(flights)
    
}


function Flight () {
    this.departure = momentRandom(end, start).format('DD-MM-YYYY');
    
    this.arrival = momentRandom(end, this.departure).format('DD-MM-YYYY');
    this.flyingFrom = getCountry(this, 'flyingFrom');
    this.flyingTo = getCountry(this, 'flyingTo');
    this.company = getCompany();
}

async function getCountry(flight, key) {
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        const arrayOfCountries = response.data.map(countery => countery.name);
        
        flight[key] = arrayOfCountries[Math.floor(Math.random() * 250 )];
    }
    catch (error) {
        console.log(error);
    } 
}

function getCompany() {
    const companies = ["ELAL", "British Airways", "American Airlines", 'Easy Jet']
    return companies[Math.floor(Math.random() * 3 + 0 )];
}

//generateFlights()

module.exports = generateFlights;
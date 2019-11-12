const momentRandom = require('moment-random');
const moment = require('moment');
const axios = require('axios');
const writeTofile = require('./utils/writeTofile')
const express = require('express');
const router = express.Router();

const fs = require('fs')
const data = fs.readFileSync('flights.json')
const parsFlights = JSON.parse(data);

const start = moment('01-12-2019', 'DD-MM-YYYY');
const end = moment('01-12-2020', 'DD-MM-YYYY');



let countries = [];
let flights = []

router.get('/flights' ,(req, res, next ) => {
    getCountry()
    res.send(parsFlights); 
})



const generateFlights = () => {
    
    for (let i = 0; i < 10; i++ ) {
        const flyingFrom = countries[Math.floor(Math.random() * 250 )]
        const flyingTo = countries[Math.floor(Math.random() * 250 )]
        const departure = momentRandom(end, start).format('DD-MM-YYYY');
        const start2 = moment(departure, 'DD-MM-YYYY');
        const arrival = momentRandom(end, start2).format('DD-MM-YYYY');
        const flight = new Flight(flyingFrom, flyingTo, departure, arrival);
        flights.push(flight)
    }
    writeTofile('flights.json', flights)
    
}


function Flight (_flyingFrom, _flyingTo, _departure, _arrival) {
    this.departure = _departure;
    this.arrival = _arrival;
    this.flyingFrom = _flyingFrom;
    this.flyingTo = _flyingTo;
    this.company = getCompany();
}

async function getCountry() {
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        const arrayOfCountries = response.data.map(countery => countery.name);
        countries = [...arrayOfCountries];
        generateFlights()

    }
    catch (error) {
        console.log(error);
    } 
}

function getCompany() {
    const companies = ["ELAL", "British Airways", "American Airlines", 'Easy Jet']
    return companies[Math.floor(Math.random() * 3 + 0 )];
}


module.exports = router;


const express = require('express');
const router = express.Router();
//const readFromJson = require('../utils/readFromJson')
const flights = require('../flights.json');
const moment = require('moment');
const validationDate = require('../validations/validationDate');

router.use('/', validationDate)

router.get('/getFlights', (req, res, next) => {
    const { departure, arrival } = req.body;
    //const d = '01-12-2019'
    //const a = '01-12-2020'
    //const foundFlights = flights.filter(flight => moment(departure).isAfter(flight.departure) && moment(arrival).isBefore(flight.arrival))
    //console.log(moment(d).isBefore('21-01-2020'))
    //console.log("date=>  " + flights[0].departure)

    res.send(departure + " " + arrival)
})


module.exports = router;